import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NEET Mentoring Services - Akash Kushwaha',
  description: 'Comprehensive NEET preparation services including one-on-one mentoring, group workshops, and digital products. Custom study plans and MCQ mastery techniques.',
}

export default function Services() {
  const services = [
    {
      title: 'One-on-One Mentoring',
      features: [
        'Weekly progress tracking',
        'Custom doubt solving',
        'Personalized study plans',
        'Direct WhatsApp support'
      ],
      price: '₹5,999/month',
      popular: true
    },
    {
      title: 'Group Workshops',
      features: [
        'Batch size <20 students',
        'Live Q&A sessions',
        'Interactive MCQ practice',
        'Peer learning environment'
      ],
      price: '₹2,499/session',
      popular: false
    },
    {
      title: 'Digital Products',
      features: [
        'MCQ Banks (PDF)',
        'Strategy Guides',
        'Video tutorials',
        'Lifetime access'
      ],
      price: '₹499-1,999',
      popular: false
    }
  ]

  return (
    <>
      <Navigation />
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              📚 Comprehensive Offerings
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect NEET preparation package that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className={`card relative ${service.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="text-3xl font-bold text-blue-600">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <i className="fas fa-check text-emerald-600 mr-3"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  service.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom package? Let's discuss your specific requirements.
            </p>
            <a 
              href="https://wa.me/919554584978" 
              className="btn-primary inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
              Contact Shivam for Custom Plans
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
