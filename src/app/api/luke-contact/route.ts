import { NextResponse } from 'next/server';

interface ContactData {
    firstName: string;
    email: string;
    phone: string;
    conversationHistory?: Array<{ role: string; content: string }>;
}

export async function POST(req: Request) {
    const timestamp = new Date().toISOString();
    const requestId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    console.log(`[${timestamp}] [${requestId}] 📬 Luke Contact API - Nouvelle soumission`);
    
    try {
        const body: ContactData = await req.json();
        const { firstName, email, phone, conversationHistory } = body;

        console.log(`[${requestId}] ✅ Données reçues:`, {
            firstName,
            email,
            phone,
            hasConversation: !!conversationHistory
        });

        // Validation des données
        if (!firstName || !email || !phone) {
            console.error(`[${requestId}] ❌ Données manquantes`);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'MISSING_DATA',
                    message: 'Prénom, email et téléphone sont requis' 
                },
                { status: 400 }
            );
        }

        const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

        if (!slackWebhookUrl) {
            console.error(`[${requestId}] ❌ SLACK_WEBHOOK_URL non configurée`);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'MISSING_WEBHOOK',
                    message: 'Webhook Slack non configuré' 
                },
                { status: 500 }
            );
        }

        // Formatage de la date en français
        const dateFormatted = new Date().toLocaleString('fr-FR', {
            timeZone: 'Europe/Paris',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Construction du message Slack avec formatage riche
        const slackMessage: any = {
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "🎯 Nouveau Prospect - Luke",
                        emoji: true
                    }
                },
                {
                    type: "section",
                    fields: [
                        {
                            type: "mrkdwn",
                            text: `*👤 Prénom:*\n${firstName}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*📧 Email:*\n${email}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*📱 Téléphone:*\n${phone}`
                        },
                        {
                            type: "mrkdwn",
                            text: `*🕐 Date:*\n${dateFormatted}`
                        }
                    ]
                },
                {
                    type: "divider"
                }
            ]
        };

        // Ajouter l'historique de conversation si disponible
        if (conversationHistory && conversationHistory.length > 0) {
            const conversationText = conversationHistory
                .map(msg => {
                    const role = msg.role === 'user' ? '👤 Prospect' : '🤖 Luke';
                    return `*${role}:*\n${msg.content}`;
                })
                .join('\n\n');

            slackMessage.blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*💬 Historique de conversation:*\n\n${conversationText.substring(0, 2900)}` // Limite Slack
                }
            });
        }

        // Ajout d'un footer
        slackMessage.blocks.push({
            type: "context",
            elements: [
                {
                    type: "mrkdwn",
                    text: `Request ID: \`${requestId}\` | Source: Luke Chatbot`
                }
            ]
        });

        console.log(`[${requestId}] 📤 Envoi vers Slack...`);

        // Envoi vers Slack
        const slackResponse = await fetch(slackWebhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(slackMessage),
        });

        if (!slackResponse.ok) {
            const errorText = await slackResponse.text();
            console.error(`[${requestId}] ❌ Erreur Slack:`, {
                status: slackResponse.status,
                statusText: slackResponse.statusText,
                error: errorText
            });
            
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'SLACK_ERROR',
                    message: `Erreur lors de l'envoi vers Slack (${slackResponse.status})`,
                    details: errorText
                },
                { status: 500 }
            );
        }

        console.log(`[${requestId}] ✅ Notification Slack envoyée avec succès`);

        return NextResponse.json({ 
            success: true, 
            message: 'Notification envoyée avec succès',
            requestId 
        });

    } catch (error) {
        console.error(`[${requestId}] ❌ ERREUR CRITIQUE`);
        console.error(`[${requestId}] Type:`, error instanceof Error ? error.constructor.name : typeof error);
        console.error(`[${requestId}] Message:`, error instanceof Error ? error.message : String(error));
        console.error(`[${requestId}] Stack:`, error instanceof Error ? error.stack : 'N/A');
        
        return NextResponse.json(
            { 
                success: false, 
                error: 'INTERNAL_ERROR',
                message: 'Erreur interne du serveur',
                details: error instanceof Error ? error.message : String(error),
                requestId
            },
            { status: 500 }
        );
    }
}
