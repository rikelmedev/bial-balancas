export const WHATSAPP_NUMBER = '5517996780438';
export const PHONE_DISPLAY = '(17) 99678-0438';
export const PHONE_TEL_LINK = `tel:+${WHATSAPP_NUMBER}`;

export function whatsappLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
