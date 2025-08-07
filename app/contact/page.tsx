import Navigation from '@/components/Navigation'
import ContactForm from '@/components/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Akash Kushwaha - NEET Mentor',
  description: 'Get in touch with NEET mentor Akash Kushwaha for personalized guidance. Contact Shivam Pandey for business inquiries and technical support.',
}

export default function Contact() {
  return (
    <>
      <Navigation />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600">
                Ready to start your NEET preparation journey? Let's connect!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="card">
                    <div className="flex items-center mb-3">
                      <i className="fab fa-whatsapp text-2xl text-green-600 mr-4"></i>
                      <div>
                        <h3 className="font-semibold">WhatsApp</h3>
                        <p className="text-gray-600">Quick responses guaranteed</p>
                      </div>
                    </div>
                    <a 
                      href="https://wa.me/919554584978" 
                      className="text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +91 95545 84978
                    </a>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-3">
                      <i className="fas fa-envelope text-2xl text-blue-600 mr-4"></i>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">For detailed inquiries</p>
                      </div>
                    </div>
                    <a 
                      href="mailto:shivampandeyyuyu@gmail.com" 
                      className="text-blue-600 hover:underline"
                    >
                      shivampandeyyuyu@gmail.com
                    </a>
                  </div>

                  <div className="card">
                    <div className="flex items-center mb-3">
                      <i className="fas fa-clock text-2xl text-amber-600 mr-4"></i>
                      <div>
                        <h3 className="font-semibold">Response Time</h3>
                        <p className="text-gray-600">We typically respond within 2-4 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-blue-50 border-blue-200">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      <i className="fas fa-info-circle mr-2"></i>
                      Technical Management
                    </h3>
                    <p className="text-blue-700">
                      All technical aspects of this platform are managed by Shivam Pandey. 
                      For website issues or technical support, please mention "Technical Support" 
                      in your message.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
