import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Akash Kushwaha</h3>
            <p className="text-gray-300">
              NEET Mentor helping students achieve their medical dreams
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li><i className="fab fa-whatsapp mr-2"></i> +91 95545 84978</li>
              <li><i className="fas fa-envelope mr-2"></i> shivampandeyyuyu@gmail.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-xl transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 mb-4 md:mb-0">
            © 2025 Shivam Pandey (All Rights Reserved)
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <i className="fas fa-arrow-up mr-2"></i>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
