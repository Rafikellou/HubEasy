// Utility functions for working with the Unsplash API

/**
 * Get a random image from Unsplash based on query parameters
 * @param {string} query - Search query for the image
 * @param {Object} options - Additional options for the Unsplash API
 * @param {string} size - Size of the image (regular, small, thumb, etc.)
 * @returns {Promise<Object>} - The image data from Unsplash
 */
export async function getRandomUnsplashImage(query: string, options = {}, size: string = 'regular') {
  const params = new URLSearchParams({
    query,
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
    ...options,
  });

  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?${params.toString()}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Ensure we get the requested size
    if (data && data.id) {
      return {
        ...data,
        // Ensure we get the requested size
        imageUrl: data.urls ? data.urls[size] || data.urls.regular : null,
        imageId: data.id
      };
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching from Unsplash:', error);
    return null;
  }
}

/**
 * Get a specific Unsplash image by ID
 * @param {string} imageId - The Unsplash image ID
 * @param {string} size - Size of the image (regular, small, thumb, etc.)
 * @returns {Promise<string|null>} - The image URL or null if not found
 */
export async function getUnsplashImageById(imageId: string, size: string = 'regular') {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/${imageId}?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ''}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    return data.urls ? data.urls[size] || data.urls.regular : null;
  } catch (error) {
    console.error(`Error fetching Unsplash image by ID ${imageId}:`, error);
    return null;
  }
}

/**
 * Search for images on Unsplash
 * @param {string} query - Search query for the images
 * @param {number} page - Page number for pagination
 * @param {number} perPage - Number of images per page
 * @param {Object} options - Additional options for the Unsplash API
 * @param {string} size - Size of the image (regular, small, thumb, etc.)
 * @returns {Promise<Object>} - Search results from Unsplash
 */
export async function searchUnsplashImages(
  query: string,
  page = 1,
  perPage = 10,
  options = {},
  size: string = 'regular'
) {
  const params = new URLSearchParams({
    query,
    page: page.toString(),
    per_page: perPage.toString(),
    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '',
    ...options,
  });

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?${params.toString()}`
    );
    
    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Enhance results with the specific size URLs and preserve IDs
    if (data && data.results) {
      data.results = data.results.map((result: any) => ({
        ...result,
        imageUrl: result.urls ? result.urls[size] || result.urls.regular : null,
        imageId: result.id
      }));
    }
    
    return data;
  } catch (error) {
    console.error('Error searching Unsplash:', error);
    return { results: [], total: 0 };
  }
}