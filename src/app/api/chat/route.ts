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
  1. First Name
  2. Email Address
  3. Phone Number
- Once all 3 are collected, thank them and say a human expert will contact them shortly.

PRIORITY:
- ALWAYS answer the user's specific question first.
- If you don't know, suggest leaving contact info for Rafik to answer.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { content: "Je suis désolé, je ne suis pas configuré correctement (Clé API manquante)." },
                { status: 500 }
            );
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini', // Stable, fast, and cost-effective model
                messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages
                ],
                temperature: 0.7,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('OpenAI API Error:', error);
            console.error('Status:', response.status, response.statusText);
            return NextResponse.json(
                { content: `Erreur API OpenAI (${response.status}). Vérifiez votre clé API et vos crédits.` },
                { status: 500 }
            );
        }

        const data = await response.json();
        const aiMessage = data.choices[0].message.content;

        return NextResponse.json({ content: aiMessage });

    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json(
            { content: "Désolé, j'ai rencontré une erreur momentanée. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
