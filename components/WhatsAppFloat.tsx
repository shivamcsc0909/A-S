export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919554584978"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  )
}
