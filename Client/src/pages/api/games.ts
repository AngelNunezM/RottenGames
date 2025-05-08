// src/pages/api/games.ts
import fetch from 'node-fetch';

export async function POST({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const gameName = formData.get('gameName') || '';
    const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
    
    const apiUrl = new URL('https://api.rawg.io/api/games');
    apiUrl.searchParams.set('key', API_KEY);
    apiUrl.searchParams.set('search', gameName as string);
    apiUrl.searchParams.set('page_size', '10');

    const response = await fetch(apiUrl.toString());
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
