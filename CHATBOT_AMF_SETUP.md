# Configuration Webhook Zapier pour Chatbot AMF

## ✅ Configuration terminée

Le chatbot AMF utilise maintenant le webhook Zapier pour envoyer les données :
**URL du webhook** : `https://hooks.zapier.com/hooks/catch/20700821/u1jy1rw/`

## 📊 Données envoyées au webhook

### Informations de contact
- `nom` : Nom du commercial
- `email` : Email du commercial  
- `entreprise` : Nom de l'entreprise

### Réponses du questionnaire
- `reponses_questionnaire` : Toutes les réponses formatées en texte
- `reponse_role` : Rôle principal
- `reponse_interlocutors` : Interlocuteurs principaux
- `reponse_client_needs` : Besoins clients prioritaires
- `reponse_hubspot_usage` : Utilisation actuelle d'HubSpot
- `reponse_hubspot_tools` : Outils HubSpot utilisés
- `reponse_follow_up_preference` : Préférence pour les relances
- `reponse_data_entry` : Saisie d'informations dans HubSpot
- `reponse_difficulties` : Difficultés rencontrées
- `reponse_goals_tracking` : Suivi des objectifs commerciaux
- `reponse_other_tools` : Outils utilisés en parallèle
- `reponse_expectations` : Attentes avec HubSpot
- `reponse_improvement` : Amélioration souhaitée
- `reponse_report_content` : Contenu des rapports commerciaux
- `reponse_calls_integration` : Intégration des appels
- `reponse_ai_emails` : Emails automatiques avec IA
- `reponse_hubspot_features` : Fonctionnalités HubSpot utiles
- `reponse_key_improvement` : Amélioration clé souhaitée

### Métadonnées
- `date_soumission` : Date et heure de soumission (format français)

## 🔧 Configuration Zapier

Dans votre Zapier, vous pouvez maintenant :

1. **Recevoir les données** via le webhook
2. **Les traiter** selon vos besoins :
   - Envoyer un email à `rafik.kellou@hubeasy.fr`
   - Créer un contact dans HubSpot
   - Ajouter une ligne dans Google Sheets
   - Créer une tâche dans votre CRM
   - etc.

## 🧪 Test du système

1. Remplissez le chatbot complet sur `/chatbot/amf`
2. Saisissez vos informations de contact
3. Cliquez sur "Envoyer mes informations"
4. Vérifiez que les données arrivent bien dans votre Zapier

## 📝 Exemple de données reçues

```json
{
  "nom": "Jean Dupont",
  "email": "jean.dupont@amf.fr",
  "entreprise": "AMF Assurance",
  "reponses_questionnaire": "Rôle principal: Les deux\nInterlocuteurs principaux: Comptables publics\n...",
  "reponse_role": "Les deux",
  "reponse_interlocutors": "Comptables publics",
  "date_soumission": "15 janvier 2024 à 14:30"
}
```

## 🚀 Avantages du webhook Zapier

- ✅ **Pas de configuration SMTP** nécessaire
- ✅ **Flexibilité** : traitez les données comme vous voulez
- ✅ **Intégrations** : connectez à tous vos outils
- ✅ **Fiabilité** : Zapier gère la redondance
- ✅ **Monitoring** : suivez les envois dans Zapier