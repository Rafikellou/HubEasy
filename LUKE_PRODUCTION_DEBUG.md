# 🤖 Guide de Débogage - Agent Luke en Production

## 📋 Résumé des Corrections Appliquées

Ce document détaille les corrections apportées pour résoudre le problème de l'agent Luke qui ne fonctionnait pas en production.

---

## 🔍 Problème Identifié

**Symptôme** : L'agent Luke ne répond pas lorsqu'on lui parle depuis le frontend en production.

**Cause Racine** : Le middleware `next-intl` interceptait potentiellement les routes API malgré le matcher, particulièrement en environnement de production où le comportement diffère du développement.

---

## ✅ Solutions Implémentées

### 1. **Correction du Middleware** (`middleware.ts`)

**Problème** : Le matcher regex n'excluait pas explicitement les routes API avec le slash final.

**Solution** :
```typescript
matcher: [
  '/((?!api/|_next/|_vercel/|.*\\..*).*)',  // Ajout du slash après 'api'
  '/',
  '/(fr|en)/:path*'
]
```

**Impact** : Garantit que toutes les routes `/api/*` sont exclues du middleware i18n.

---

### 2. **Logs de Débogage Détaillés** (`src/app/api/chat/route.ts`)

**Ajouts** :
- ✅ Request ID unique pour tracer chaque requête
- ✅ Timestamp ISO pour chaque log
- ✅ Logs de l'environnement (NODE_ENV)
- ✅ Logs des variables d'environnement disponibles (sans exposer les clés)
- ✅ Durée des requêtes OpenAI
- ✅ Utilisation des tokens
- ✅ Stack traces complètes en cas d'erreur

**Exemple de logs** :
```
[2026-03-16T18:45:00.000Z] [req_1710614700000_abc123] 🚀 Luke Chat API - Requête reçue
[req_1710614700000_abc123] Environment: production
[req_1710614700000_abc123] ✅ Body parsé avec succès
[req_1710614700000_abc123] API Key présente: true
[req_1710614700000_abc123] 📤 Envoi requête à OpenAI
[req_1710614700000_abc123] ✅ Réponse OpenAI reçue avec succès
```

---

### 3. **Endpoint Health Check** (`src/app/api/health/route.ts`)

**Nouveau endpoint** : `/api/health`

**Utilisation** :
```bash
# Test en local
curl http://localhost:3000/api/health

# Test en production
curl https://votre-domaine.com/api/health
```

**Réponse attendue** :
```json
{
  "status": "ok",
  "timestamp": "2026-03-16T18:45:00.000Z",
  "service": "Luke Chat API",
  "environment": "production",
  "checks": {
    "apiKeyConfigured": true,
    "nodeVersion": "v20.x.x",
    "platform": "linux"
  }
}
```

**Vérifications** :
- ✅ Routes API accessibles
- ✅ Clé OpenAI configurée
- ✅ Environnement d'exécution

---

### 4. **Amélioration de la Gestion d'Erreurs Frontend** (`src/components/chatbot/LukeChatbot.tsx`)

**Ajouts** :
- ✅ Logs détaillés de chaque étape de la requête
- ✅ Mesure de la durée des requêtes
- ✅ Affichage des erreurs détaillées dans le chat
- ✅ Request ID dans les logs pour corrélation avec le backend
- ✅ Stack traces complètes en cas d'erreur

**Exemple de logs frontend** :
```
[Frontend] 🚀 Frontend - Envoi message à Luke
[Frontend] 📤 Appel API: /api/chat
[Frontend] ⏱️ Durée de la requête: 1234ms
[Frontend] ✅ Réponse traitée avec succès
```

---

## 🧪 Tests à Effectuer

### Test 1 : Health Check
```bash
# En production
curl https://votre-domaine.com/api/health
```

**Résultat attendu** : Status 200 avec `"status": "ok"`

---

### Test 2 : Test de Chat
1. Ouvrir le site en production
2. Cliquer sur l'icône de chat Luke (en bas à droite)
3. Envoyer un message : "Bonjour"
4. **Vérifier** :
   - ✅ Le message apparaît dans le chat
   - ✅ Luke répond dans les 2-5 secondes
   - ✅ Pas de message d'erreur

---

### Test 3 : Vérification des Logs

**En production (Vercel/Netlify)** :
1. Aller dans le dashboard de déploiement
2. Ouvrir les logs en temps réel
3. Envoyer un message à Luke
4. **Chercher dans les logs** :
   - `🚀 Luke Chat API - Requête reçue`
   - `✅ Réponse OpenAI reçue avec succès`
   - Request ID pour tracer la requête complète

---

## 🔧 Vérifications de Configuration

### Variables d'Environnement en Production

**CRITIQUE** : Vérifier que `OPENAI_API_KEY` est configurée dans l'environnement de production.

**Vercel** :
1. Aller dans Settings → Environment Variables
2. Vérifier que `OPENAI_API_KEY` existe
3. Vérifier qu'elle est active pour "Production"

**Netlify** :
1. Aller dans Site settings → Environment variables
2. Vérifier que `OPENAI_API_KEY` existe
3. Redéployer si la variable a été ajoutée récemment

---

## 🐛 Débogage en Cas de Problème

### Problème : "Clé API manquante"

**Logs à chercher** :
```
❌ ERREUR CRITIQUE: Clé API OpenAI manquante
```

**Solution** :
1. Vérifier les variables d'environnement en production
2. Redéployer l'application après ajout de la clé
3. Vérifier que le nom est exactement `OPENAI_API_KEY`

---

### Problème : "404 Not Found" sur `/api/chat`

**Logs à chercher** :
```
[Frontend] Status de la réponse: 404 Not Found
```

**Solutions** :
1. Vérifier que le middleware n'intercepte pas les routes API
2. Tester `/api/health` pour confirmer que les routes API fonctionnent
3. Vérifier la structure des dossiers : `src/app/api/chat/route.ts`

---

### Problème : Timeout ou pas de réponse

**Logs à chercher** :
```
[Frontend] ⏱️ Durée de la requête: >30000ms
```

**Solutions** :
1. Vérifier la clé OpenAI (quota dépassé ?)
2. Vérifier les logs OpenAI : `Status: 429` (rate limit)
3. Tester avec un autre modèle si nécessaire

---

### Problème : Erreur OpenAI API

**Logs à chercher** :
```
❌ Erreur OpenAI API
Status: 401 Unauthorized
```

**Solutions** :
- **401** : Clé API invalide ou expirée
- **429** : Quota dépassé ou rate limit
- **500** : Problème côté OpenAI (réessayer)

---

## 📊 Monitoring en Production

### Logs à Surveiller

**Succès** :
- `✅ Réponse OpenAI reçue avec succès`
- `Tokens utilisés: {...}`

**Erreurs** :
- `❌ ERREUR CRITIQUE`
- `❌ Erreur OpenAI API`

### Métriques Importantes

1. **Durée des requêtes** : Doit être < 5 secondes
2. **Taux de succès** : Doit être > 95%
3. **Utilisation des tokens** : Surveiller pour éviter les dépassements de quota

---

## 🚀 Checklist de Déploiement

Avant chaque déploiement en production :

- [ ] Variable `OPENAI_API_KEY` configurée
- [ ] Test `/api/health` réussi
- [ ] Test de chat fonctionnel en local
- [ ] Logs activés et visibles
- [ ] Middleware correctement configuré
- [ ] Build Next.js réussi sans erreurs

---

## 📞 Support

En cas de problème persistant :

1. **Vérifier les logs** avec les Request IDs
2. **Tester `/api/health`** pour isoler le problème
3. **Vérifier la console du navigateur** pour les erreurs frontend
4. **Comparer les logs dev vs production** pour identifier les différences

---

## 📝 Notes Techniques

### Architecture

```
Frontend (LukeChatbot.tsx)
    ↓ fetch('/api/chat')
Middleware (middleware.ts) → Exclut /api/*
    ↓
API Route (/api/chat/route.ts)
    ↓ OpenAI API
GPT-3.5-turbo
    ↓
Réponse à l'utilisateur
```

### Fichiers Modifiés

1. `middleware.ts` - Correction du matcher
2. `src/app/api/chat/route.ts` - Logs détaillés
3. `src/app/api/health/route.ts` - Nouveau endpoint
4. `src/components/chatbot/LukeChatbot.tsx` - Gestion d'erreurs améliorée

---

**Date de création** : 16 Mars 2026  
**Version** : 1.0  
**Auteur** : Cascade AI Assistant
