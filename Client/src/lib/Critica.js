import mongoose from 'mongoose';

const CriticaSchema = new mongoose.Schema({
  juego: String,
  texto: String,
  autor: {
    id: String,        // ID de Clerk
    nombre: String,    // Nombre completo
    email: String      // Email del usuario
  },
  fecha: { type: Date, default: Date.now }
});

export const Critica = mongoose.models.Critica || mongoose.model('Critica', CriticaSchema);