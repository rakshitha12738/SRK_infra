import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      p-4
      rounded-full
      text-white
      text-3xl
      shadow-lg
      z-50"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;