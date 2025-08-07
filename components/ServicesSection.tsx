export default function ServicesSection() {
  const services = [
    {
      icon: 'fas fa-brain',
      title: 'NEET Strategy Sessions',
      description: 'Custom study plans for all attempts',
      badge: 'From ₹1,999/session',
      color: 'blue'
    },
    {
      icon: 'fas fa-check-double',
      title: 'MCQ Mastery Workshop',
      description: 'Learn elimination techniques',
      badge: 'Batch starting weekly',
      color: 'emerald'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Crash Courses',
      description: '30-day intensive revision',
      badge: 'Limited seats',
      color: 'amber'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive NEET preparation solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group">
              <div className={`text-4xl mb-4 text-${service.color}-600`}>
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className={`inline-block bg-${service.color}-100 text-${service.color}-800 px-3 py-1 rounded-full text-sm font-medium`}>
                {service.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
