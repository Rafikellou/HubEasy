# 🔧 Correction Erreur 500/403 en Production Vercel

## 🐛 Problème Identifié

**Symptômes** :
- Erreur 500 sur `/api/chat`
- Erreur 403 sur certaines ressources
- L'agent Luke s'ouvre automatiquement en production (ancien code)
- En local, tout fonctionne correctement

**Cause** : Cache de build Vercel qui utilise une ancienne version du code.

---

## ✅ Solution : Forcer un Rebuild Complet

### **Option 1 : Via le Dashboard Vercel (RECOMMANDÉ)**

1. **Va sur** : https://vercel.com/dashboard
2. **Sélectionne** ton projet HubEasy
3. **Onglet** : "Deployments"
4. **Clique sur** le dernier déploiement
5. **Menu** (3 points) → "Redeploy"
6. **IMPORTANT** : Coche "Use existing Build Cache" → **DÉCOCHER**
7. **Clique sur** "Redeploy"

---

### **Option 2 : Via Git (Alternative)**

Si l'option 1 ne fonctionne pas :

```bash
# Créer un commit vide pour forcer le rebuild
git commit --allow-empty -m "chore: Force Vercel rebuild to clear cache"
git push origin master
```

Puis dans Vercel :
- Settings → General → Build & Development Settings
- Coche "Override" pour Build Command
- Ajoute : `rm -rf .next && next build`
- Sauvegarde et redéploie

---

### **Option 3 : Supprimer le Cache Manuellement**

Dans le dashboard Vercel :
1. Settings → General
2. Scroll jusqu'à "Deployment Protection"
3. Clique sur "Clear Build Cache"
4. Redéploie le projet

---

## 🔍 Vérifications Post-Déploiement

### **1. Tester l'API Health**
```bash
curl https://ton-domaine.com/api/health
```

**Résultat attendu** :
```json
{
  "status": "ok",
  "service": "Luke Chat API",
  "environment": "production",
  "checks": {
    "apiKeyConfigured": true
  }
}
```

### **2. Tester Luke**
1. Ouvre ton site en production
2. **Vérifie** : Le chatbot ne s'ouvre PAS automatiquement ✅
3. Clique sur l'icône du bot
4. Envoie un message
5. **Vérifie** : Pas d'erreur 500 ✅

### **3. Vérifier les Logs**
Dans Vercel → Deployments → Ton déploiement → "View Function Logs"

Cherche :
```
🚀 Luke Chat API - Requête reçue
✅ Réponse OpenAI reçue avec succès
```

---

## 📊 Variables d'Environnement à Vérifier

Dans Vercel → Settings → Environment Variables :

### **Obligatoire** :
- ✅ `OPENAI_API_KEY` - Configurée pour Production

### **Optionnel** :
- ⚠️ `SLACK_WEBHOOK_URL` - Si tu veux les notifications Slack

**IMPORTANT** : Après avoir ajouté/modifié une variable, **redéploie** le projet.

---

## 🐛 Dépannage

### **Erreur 500 persiste**

**Vérifier** :
1. La variable `OPENAI_API_KEY` est bien configurée en production
2. Le cache a été effacé
3. Un nouveau build a été fait (pas juste un redéploiement)

**Logs à chercher** :
```
❌ ERREUR CRITIQUE: Clé API OpenAI manquante
```

**Solution** : Reconfigurer `OPENAI_API_KEY` et redéployer.

---

### **Erreur 403**

**Cause possible** : Fichiers statiques bloqués par le middleware.

**Vérifier** : Le fichier `middleware.ts` exclut bien `/api/` :
```typescript
matcher: [
  '/((?!api/|_next/|_vercel/|.*\\..*).*)',
]
```

---

### **Luke s'ouvre toujours automatiquement**

**Cause** : Cache navigateur ou ancien build.

**Solutions** :
1. Vider le cache du navigateur (Ctrl+Shift+R)
2. Tester en navigation privée
3. Vérifier que le nouveau build est bien déployé

**Vérifier dans le code** :
Le fichier `src/components/chatbot/LukeChatbot.tsx` doit avoir :
```typescript
// Auto-expand after 3.5 seconds - DISABLED
// useEffect(() => {
//     const timer = setTimeout(() => {
//         setIsOpen(true);
//     }, 3500);
```

---

## 📝 Checklist de Déploiement

Avant chaque déploiement en production :

- [ ] Variables d'environnement configurées
- [ ] Cache Vercel effacé si problème
- [ ] Build réussi sans erreurs
- [ ] Test `/api/health` OK
- [ ] Test Luke en navigation privée
- [ ] Logs production vérifiés

---

## 🚀 Commandes Utiles

### **Forcer un rebuild local**
```bash
rm -rf .next
npm run build
npm run start
```

### **Tester en production locale**
```bash
npm run build
npm run start
# Puis tester sur http://localhost:3000
```

### **Vérifier les logs Vercel en temps réel**
```bash
vercel logs [deployment-url] --follow
```

---

## 📞 Support Vercel

Si le problème persiste :
1. Contacte le support Vercel : https://vercel.com/support
2. Fournis :
   - URL du projet
   - Logs d'erreur
   - Captures d'écran des erreurs 500/403

---

**Date de création** : 16 Mars 2026  
**Version** : 1.0  
**Auteur** : Cascade AI Assistant
