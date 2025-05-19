import { connectDB } from '../../lib/db.js';
import { Critica } from '../../lib/Critica.js';

export async function POST({ request, locals }) {
  await connectDB();

  // Obtener usuario de Clerk
  const user = locals.auth?.user;
  
  if (!user) {
    return new Response('No autorizado', { status: 401 });
  }

  try {
    const data = await request.json();

    const critica = new Critica({
      texto: data.texto,
      juego: data.juego,
      autor: {
        id: user.id,
        nombre: `${user.firstName} ${user.lastName}`.trim() || user.username || user.emailAddresses[0].emailAddress,
        email: user.emailAddresses[0].emailAddress
      }
    });

    await critica.save();
    console.log('Crítica guardada:', critica);

    return new Response(JSON.stringify({ success: true, critica }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error al guardar crítica:', error);
    return new Response(JSON.stringify({ error: 'Error al guardar la crítica' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

