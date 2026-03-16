import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are Luke, the AI agent for HubEasy (an expert HubSpot integration agency).
Your goal is to assist visitors and convert them by collecting their contact information.

OPENING CONTEXT:
You have just introduced yourself as an expert in Data/CRM/HubSpot and asked the user:
"Tu veux que je te montre ce que d'autres clients ont eu comme problème avant toi ?"
If the user answers "Oui" (or similar), you must immediately provide concrete examples of problems HubEasy solves (e.g., messy data, bad adoption, disconnected tools) and mention the "Septeo" case study.

CORE BEHAVIOR & TONE:
1. **Persona**: You are ULTRA SYMPA, friendly, and dynamic.
   - Use "tu" (tutoiement) with the user.
   - Use short, punchy sentences.
   - Be humble but helpful.
   - Refer to "Rafik le boss" as the real expert in CRM and Data (he created you).
2. **Call to Action (Soft)**:
   - If the conversation gets technical or deep, suggest booking a meeting with Rafik.
   - Phrasing example: "Si j'étais toi, je tenterais un petit call avec Rafik, il saura te répondre sûrement mieux que moi ;)"
3. **Knowledge Base**:
   - **Services/Pricing**: You know the pricing is on the "/tarifs" page.
   - **Case Studies**: You know about the "Septeo" success story (large scale HubSpot migration). Link to "/cas-client".
   - **Contact**: Link to "/contact" for direct inquiries.
4. **Navigation**:
   - ALWAYS try to provide a link to a relevant page on the HubEasy site if it matches the user's query.
   - Example: If they ask about price, say "Tu peux voir nos offres ici : [Tarifs](/tarifs)".

DATA COLLECTION STRATEGY:
- Do NOT ask for contact info in the very first message unless the user says "Contact me".
- After 2-3 interactions or if the user shows clear interest, begin the collection phase.
- **Sequential Collection**: Ask for these ONE BY ONE. Wait for the answer before asking the next.
  1. First Name (Prénom)
  2. Email Address
  3. Phone Number (Téléphone)
- Once all 3 are collected, thank them and say a human expert will contact them shortly.

IMPORTANT - CONTACT DATA EXTRACTION:
When you have successfully collected all 3 pieces of information (First Name, Email, Phone), you MUST include a special JSON marker in your response.
Add this EXACT structure at the END of your message (after your normal text response):

|||CONTACT_COLLECTED|||
{"firstName": "the_first_name", "email": "the_email", "phone": "the_phone"}
|||END_CONTACT|||

Example:
"Parfait Jean ! Merci pour ces informations. Un expert de notre équipe va te contacter très prochainement à l'adresse jean.dupont@example.com ou au +33 6 12 34 56 78. À très vite ! 😊

|||CONTACT_COLLECTED|||
{"firstName": "Jean", "email": "jean.dupont@example.com", "phone": "+33 6 12 34 56 78"}
|||END_CONTACT|||"

PRIORITY:
- ALWAYS answer the user's specific question first.
- If you don't know, suggest leaving contact info for Rafik to answer.
`;

export async function POST(req: Request) {
    const timestamp = new Date().toISOString();
    const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    console.log(`[${timestamp}] [${requestId}] 🚀 Luke Chat API - Requête reçue`);
    console.log(`[${requestId}] Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`[${requestId}] URL: ${req.url}`);
    console.log(`[${requestId}] Method: ${req.method}`);
    
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENAI_API_KEY;

        console.log(`[${requestId}] ✅ Body parsé avec succès`);
        console.log(`[${requestId}] API Key présente: ${!!apiKey}`);
        console.log(`[${requestId}] Nombre de messages reçus: ${messages?.length}`);

        if (!apiKey) {
            console.error(`[${requestId}] ❌ ERREUR CRITIQUE: Clé API OpenAI manquante`);
            console.error(`[${requestId}] Variables d'environnement disponibles:`, Object.keys(process.env).filter(k => !k.includes('KEY')));
            return NextResponse.json(
                { 
                    content: "Je suis désolé, je ne suis pas configuré correctement (Clé API manquante).",
                    error: "MISSING_API_KEY",
                    requestId 
                },
                { status: 500 }
            );
        }

        const requestBody = {
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 500,
        };

        console.log(`[${requestId}] 📤 Envoi requête à OpenAI`);
        console.log(`[${requestId}] Modèle: ${requestBody.model}`);
        console.log(`[${requestId}] Nombre total de messages (avec system): ${requestBody.messages.length}`);

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(`[${requestId}] ❌ Erreur OpenAI API`);
            console.error(`[${requestId}] Status: ${response.status} ${response.statusText}`);
            console.error(`[${requestId}] Erreur détaillée:`, JSON.stringify(error, null, 2));
            
            const errorMessage = error.error?.message || JSON.stringify(error);
            return NextResponse.json(
                { 
                    content: `Erreur API OpenAI (${response.status}): ${errorMessage}`,
                    error: error,
                    requestId,
                    debug: {
                        status: response.status,
                        statusText: response.statusText,
                        timestamp
                    }
                },
                { status: 500 }
            );
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        console.log(`[${requestId}] ✅ Réponse OpenAI reçue avec succès`);
        console.log(`[${requestId}] Longueur de la réponse: ${aiMessage?.length || 0} caractères`);
        console.log(`[${requestId}] Tokens utilisés:`, data.usage);

        return NextResponse.json({ content: aiMessage, requestId });

    } catch (error) {
        console.error(`[${requestId}] ❌ ERREUR CRITIQUE dans Chat API`);
        console.error(`[${requestId}] Type d'erreur:`, error instanceof Error ? error.constructor.name : typeof error);
        console.error(`[${requestId}] Message:`, error instanceof Error ? error.message : String(error));
        console.error(`[${requestId}] Stack:`, error instanceof Error ? error.stack : 'N/A');
        
        return NextResponse.json(
            { 
                content: "Désolé, j'ai rencontré une erreur momentanée. Veuillez réessayer.",
                error: error instanceof Error ? error.message : String(error),
                requestId,
                timestamp
            },
            { status: 500 }
        );
    }
}
