import { CONTACT } from "./content";

export function buildWhatsAppUrl(message: string, number = CONTACT.whatsapp): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const defaultMessage = "Hola, me interesa conocer más sobre tus servicios de desarrollo. ¿Podemos hablar?";
