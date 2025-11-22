import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers, contactInfo } = body;

    // Formatage des réponses pour le webhook
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

    // Format simple pour Zapier (ligne par ligne)
    const formatAnswersSimple = (answers: Record<string, string | string[]>) => {
      return Object.entries(answers)
        .map(([key, value]) => {
          const formattedValue = Array.isArray(value) ? value.join(', ') : value;
          return `${questionLabels[key] || key}: ${formattedValue}`;
        })
        .join('\n');
    };

    // Format structuré pour Zapier (plus lisible)
    const formatAnswersStructured = (answers: Record<string, string | string[]>) => {
      return Object.entries(answers)
        .map(([key, value], index) => {
          const question = questionLabels[key] || key;
          const formattedValue = Array.isArray(value) ? value.join(', ') : value;
          return `${index + 1}. ${question}\n   → ${formattedValue}`;
        })
        .join('\n\n');
    };

    // Format HTML pour emails Zapier
    const formatAnswersHTML = (answers: Record<string, string | string[]>) => {
      return Object.entries(answers)
        .map(([key, value]) => {
          const question = questionLabels[key] || key;
          const formattedValue = Array.isArray(value) ? value.join(', ') : value;
          return `<p><strong>${question}:</strong><br/>${formattedValue}</p>`;
        })
        .join('\n');
    };

    // Format JSON structuré pour traitement avancé
    const formatAnswersJSON = (answers: Record<string, string | string[]>) => {
      return Object.entries(answers)
        .map(([key, value]) => ({
          question: questionLabels[key] || key,
          answer: Array.isArray(value) ? value : [value],
          key: key
        }));
    };

    // Données à envoyer au webhook Zapier
    const webhookData = {
      // Informations de contact
      nom: contactInfo.name || 'Non renseigné',
      email: contactInfo.email || 'Non renseigné',
      entreprise: contactInfo.company || 'Non renseigné',
      
      // Réponses formatées - MULTIPLES FORMATS POUR ZAPIER
      reponses_questionnaire_simple: formatAnswersSimple(answers),
      reponses_questionnaire_structure: formatAnswersStructured(answers),
      reponses_questionnaire_html: formatAnswersHTML(answers),
      reponses_questionnaire_json: JSON.stringify(formatAnswersJSON(answers), null, 2),
      
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
          Array.isArray(value) ? value.join(', ') : value
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
