# 🔔 Configuration Slack pour les Notifications Luke

## 📋 Vue d'ensemble

Quand Luke collecte les informations d'un prospect (Prénom, Email, Téléphone), une notification est automatiquement envoyée sur Slack.

---

## 🚀 Configuration Rapide

### Étape 1 : Créer l'App Slack

1. **Aller sur** : https://api.slack.com/apps
2. **Cliquer sur** : "Create New App"
3. **Sélectionner** : "From scratch"
4. **Nom de l'app** : `Luke Notifications` (ou autre nom de ton choix)
5. **Workspace** : Sélectionne ton workspace HubEasy
6. **Cliquer sur** : "Create App"

---

### Étape 2 : Activer les Incoming Webhooks

1. Dans le menu de gauche, clique sur **"Incoming Webhooks"**
2. **Active** le toggle en haut : "Activate Incoming Webhooks" → ON
3. Descends en bas de la page
4. **Clique sur** : "Add New Webhook to Workspace"
5. **Choisis le canal** où tu veux recevoir les notifications :
   - Option 1 : Un canal dédié (ex: `#leads`, `#prospects`)
   - Option 2 : Un message privé à toi-même
   - Option 3 : Un canal existant (ex: `#general`)
6. **Clique sur** : "Allow"

---

### Étape 3 : Copier le Webhook URL

1. Une fois créé, tu verras une **Webhook URL** qui ressemble à :
   ```
   https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
   ```
2. **Copie cette URL** (bouton "Copy" à côté)

---

### Étape 4 : Ajouter l'URL dans ton Projet

#### En Local (Développement)

1. Ouvre le fichier `.env.local` à la racine du projet
2. Ajoute cette ligne :
   ```
   SLACK_WEBHOOK_URL=https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXX
   ```
3. Remplace par ton URL réelle
4. **Sauvegarde** le fichier
5. **Redémarre** le serveur de développement :
   ```bash
   npm run dev
   ```

#### En Production (Vercel/Netlify)

**Pour Vercel** :
1. Va dans ton projet Vercel
2. Settings → Environment Variables
3. Ajoute une nouvelle variable :
   - **Name** : `SLACK_WEBHOOK_URL`
   - **Value** : Ton webhook URL
   - **Environments** : Sélectionne "Production" (et "Preview" si tu veux)
4. Clique sur "Save"
5. **Redéploie** ton application

**Pour Netlify** :
1. Va dans ton site Netlify
2. Site settings → Environment variables
3. Clique sur "Add a variable"
   - **Key** : `SLACK_WEBHOOK_URL`
   - **Value** : Ton webhook URL
4. Clique sur "Create variable"
5. **Redéploie** ton application

---

## 🎨 Format du Message Slack

Quand un prospect donne ses informations, tu recevras un message comme ceci :

```
🎯 Nouveau Prospect - Luke

👤 Prénom: Jean
📧 Email: jean.dupont@example.com
📱 Téléphone: +33 6 12 34 56 78
🕐 Date: 16 mars 2026 à 19:06

💬 Historique de conversation:

👤 Prospect:
Bonjour, je cherche des infos sur HubSpot

🤖 Luke:
Salut ! Je suis Luke, ton assistant sur tout ce qui concerne...

[...]

Request ID: contact_1710614700000_abc123 | Source: Luke Chatbot
```

---

## 🧪 Tester la Configuration

### Test Manuel de l'API

Tu peux tester l'endpoint directement :

```bash
curl -X POST http://localhost:3000/api/luke-contact \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "email": "test@example.com",
    "phone": "+33 6 12 34 56 78"
  }'
```

**Résultat attendu** :
- ✅ Status 200
- ✅ Message dans ton canal Slack
- ✅ Logs dans la console

---

### Test Complet avec Luke

1. Ouvre le site en local : http://localhost:3000
2. Clique sur l'icône de chat Luke
3. Engage une conversation
4. Quand Luke demande tes infos, donne :
   - Prénom : "Test"
   - Email : "test@example.com"
   - Téléphone : "+33 6 12 34 56 78"
5. **Vérifie** :
   - ✅ Luke te remercie
   - ✅ Message apparaît dans Slack
   - ✅ Logs dans la console navigateur et serveur

---

## 🔍 Vérification des Logs

### Logs Frontend (Console du Navigateur)

Cherche ces messages :
```
[Frontend] 🎯 Contact collecté détecté !
[Frontend] 📋 Données extraites: {firstName: "...", email: "...", phone: "..."}
[Frontend] ✅ Notification Slack envoyée: contact_...
```

### Logs Backend (Terminal du Serveur)

Cherche ces messages :
```
[contact_...] 📬 Luke Contact API - Nouvelle soumission
[contact_...] ✅ Données reçues: {firstName: "...", email: "...", phone: "..."}
[contact_...] 📤 Envoi vers Slack...
[contact_...] ✅ Notification Slack envoyée avec succès
```

---

## 🐛 Dépannage

### Erreur : "SLACK_WEBHOOK_URL non configurée"

**Cause** : La variable d'environnement n'est pas définie

**Solution** :
1. Vérifie que `SLACK_WEBHOOK_URL` est dans `.env.local`
2. Redémarre le serveur de développement
3. En production, vérifie les variables d'environnement et redéploie

---

### Erreur : "Webhook error: 404"

**Cause** : L'URL du webhook est invalide ou l'app a été supprimée

**Solution** :
1. Vérifie que l'URL est correcte (pas d'espaces, complète)
2. Vérifie que l'app Slack existe toujours : https://api.slack.com/apps
3. Régénère un nouveau webhook si nécessaire

---

### Erreur : "invalid_payload"

**Cause** : Le format du message Slack est incorrect

**Solution** :
1. Vérifie les logs pour voir le payload exact
2. Teste avec un message simple d'abord
3. Contacte le support si le problème persiste

---

### Pas de notification reçue

**Checklist** :
- [ ] `SLACK_WEBHOOK_URL` configurée ?
- [ ] Serveur redémarré après ajout de la variable ?
- [ ] Luke a bien collecté les 3 informations ?
- [ ] Logs frontend montrent "Contact collecté détecté" ?
- [ ] Logs backend montrent "Notification Slack envoyée" ?
- [ ] Le canal Slack sélectionné est accessible ?

---

## 📊 Monitoring

### Métriques à Surveiller

1. **Taux de collecte** : Combien de prospects donnent leurs infos
2. **Temps de réponse** : Délai entre collecte et notification
3. **Erreurs** : Surveiller les échecs d'envoi Slack

### Logs Importants

**Succès** :
```
✅ Notification Slack envoyée avec succès
```

**Erreurs** :
```
❌ SLACK_WEBHOOK_URL non configurée
❌ Erreur Slack: ...
```

---

## 🔒 Sécurité

### Bonnes Pratiques

1. **Ne jamais** commiter le `.env.local` dans Git
2. **Ne jamais** partager ton Webhook URL publiquement
3. **Régénérer** le webhook si compromis
4. **Limiter** l'accès au canal Slack aux personnes autorisées

### Régénérer un Webhook

Si ton URL est compromise :
1. Va sur https://api.slack.com/apps
2. Sélectionne ton app "Luke Notifications"
3. Incoming Webhooks → Supprime l'ancien webhook
4. Crée un nouveau webhook
5. Mets à jour la variable d'environnement partout

---

## 🎯 Personnalisation

### Changer le Canal de Destination

1. Va sur https://api.slack.com/apps
2. Sélectionne ton app
3. Incoming Webhooks
4. Supprime l'ancien webhook
5. Ajoute un nouveau webhook vers un autre canal

### Modifier le Format du Message

Édite le fichier : `src/app/api/luke-contact/route.ts`

Cherche la section `slackMessage.blocks` et personnalise :
- Les emojis
- Les champs affichés
- Le formatage
- Les couleurs (via attachments)

---

## 📞 Support

En cas de problème :

1. **Vérifier les logs** (frontend + backend)
2. **Tester l'endpoint** manuellement avec curl
3. **Vérifier la configuration** Slack
4. **Consulter** la documentation Slack : https://api.slack.com/messaging/webhooks

---

## 📝 Architecture Technique

```
Prospect donne ses infos
    ↓
Luke (GPT-3.5) détecte la collecte complète
    ↓
Retourne un JSON avec marqueurs spéciaux
    ↓
Frontend extrait les données
    ↓
POST /api/luke-contact
    ↓
Validation des données
    ↓
Formatage du message Slack
    ↓
POST vers Slack Webhook URL
    ↓
Notification dans le canal Slack
```

---

**Date de création** : 16 Mars 2026  
**Version** : 1.0  
**Auteur** : Cascade AI Assistant
