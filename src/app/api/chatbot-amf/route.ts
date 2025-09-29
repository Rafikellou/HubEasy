import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, contactInfo } = body;

    // Formatage des réponses pour le webhook
    const formatAnswers = (answers: Record<string, string>) => {
      const questionLabels: Record<string, string> = {
        role: 'Rôle principal',
        interlocutors: 'Interlocuteurs principaux',
        client_needs: 'Besoins clients prioritaires',
        hubspot_usage: 'Utilisation actuelle d\'HubSpot',
        hubspot_tools: 'Outils HubSpot utilisés',
        follow_up_preference: 'Préférence pour les relances',
        data_entry: 'Saisie d\'informations dans HubSpot',
        difficulties: 'Difficultés rencontrées',
        goals_tracking: 'Suivi des objectifs commerciaux',
        other_tools: 'Outils utilisés en parallèle',
        expectations: 'Attentes avec HubSpot',
        improvement: 'Amélioration souhaitée',
        report_content: 'Contenu des rapports commerciaux',
        calls_integration: 'Intégration des appels',
        ai_emails: 'Emails automatiques avec IA',
        hubspot_features: 'Fonctionnalités HubSpot utiles',
        key_improvement: 'Amélioration clé souhaitée'
      };

      return Object.entries(answers)
        .map(([key, value]) => `${questionLabels[key] || key}: ${value}`)
        .join('\n');
    };

    // Données à envoyer au webhook Zapier
    const webhookData = {
      // Informations de contact
      nom: contactInfo.name || 'Non renseigné',
      email: contactInfo.email || 'Non renseigné',
      entreprise: contactInfo.company || 'Non renseigné',
      
      // Réponses formatées
      reponses_questionnaire: formatAnswers(answers),
      
      // Métadonnées
      date_soumission: new Date().toLocaleString('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      
      // Réponses individuelles pour faciliter le traitement
      ...Object.fromEntries(
        Object.entries(answers).map(([key, value]) => [
          `reponse_${key}`,
          value
        ])
      )
    };

    // Envoi vers le webhook Zapier
    const webhookResponse = await fetch('https://hooks.zapier.com/hooks/catch/20700821/u1jy1rw/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      throw new Error(`Webhook error: ${webhookResponse.status}`);
    }

    const webhookResult = await webhookResponse.json();
    console.log('Webhook response:', webhookResult);

    return NextResponse.json({ 
      success: true, 
      message: 'Données envoyées avec succès',
      webhookId: webhookResult.id 
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi vers le webhook:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi des données' },
      { status: 500 }
    );
  }
}
