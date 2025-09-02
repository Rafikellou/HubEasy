import { NextRequest, NextResponse } from 'next/server';
import { getUnsplashImageById } from '@/lib/unsplash';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageId = searchParams.get('id');
  const size = searchParams.get('size') || 'regular';
  
  if (!imageId) {
    return NextResponse.json({ error: 'Image ID is required' }, { status: 400 });
  }
  
  try {
    const imageUrl = await getUnsplashImageById(imageId, size);
    
    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Image not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return NextResponse.json(
      { error: 'Failed to fetch image' }, 
      { status: 500 }
    );
  }
}