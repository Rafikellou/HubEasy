import { NextResponse } from 'next/server';

export async function GET() {
    const timestamp = new Date().toISOString();
    
    console.log(`[${timestamp}] 🏥 Health Check - Endpoint appelé`);
    
    const healthStatus = {
        status: 'ok',
        timestamp,
        service: 'Luke Chat API',
        environment: process.env.NODE_ENV || 'development',
        checks: {
            apiKeyConfigured: !!process.env.OPENAI_API_KEY,
            nodeVersion: process.version,
            platform: process.platform,
        }
    };
    
    console.log(`[${timestamp}] Health Status:`, healthStatus);
    
    return NextResponse.json(healthStatus, { status: 200 });
}

export async function POST() {
    return GET();
}
