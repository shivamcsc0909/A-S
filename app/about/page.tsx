import Navigation from '@/components/Navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Akash Kushwaha - NEET Mentor Journey',
  description: 'Learn about Akash Kushwaha\'s journey from failing NEET twice to AIR 1,502 in 2024. Now mentoring at Toppr & Unacademy with data-driven teaching methods.',
}

export default function About() {
  const timeline = [
    {
      year: '2022',
      title: 'First NEET Attempt',
      description: 'Failed to clear NEET, learned valuable lessons about preparation strategy'
    },
    {
      year: '2023',
      title: 'Second Attempt & Learning',
      description: 'Another setback, but developed unique MCQ elimination techniques'
    },
    {
      year: '2024',
      title: 'Success - AIR 1,502',
      description: 'Cracked NEET with AIR 1,502, proving that persistence pays off'
    },
    {
      year: '2024-Present',
      title: 'Mentoring Journey',
      description: 'Started mentoring at Toppr & Unacademy, helping 10,000+ students'
    }
  ]

  return (
    <>
      <Navigation />
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🧑‍⚕️ My Journey
              </h1>
              <p className="text-xl text-gray-600">
                From failing NEET twice to AIR 1,502 in 2024 → Now mentoring at Toppr & Unacademy
              </p>
            </div>

            {/* Timeline */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Timeline</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="card flex-grow">
                      <h3 className="text-xl font-bold text-blue-600 mb-2">{item.year}</h3>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Philosophy */}
            <div className="card mb-16">
              <h2 className="text-3xl font-bold mb-6">Core Philosophy</h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <i className="fas fa-quote-left text-blue-600 mr-3"></i>
                  "Consistency × Smart Work = Success"
                </li>
                <li className="flex items-center">
                  <i className="fas fa-chart-line text-emerald-600 mr-3"></i>
                  Data-driven teaching methods
                </li>
                <li className="flex items-center">
                  <i className="fas fa-target text-amber-600 mr-3"></i>
                  Focus on weak area transformation
                </li>
              </ul>
            </div>

            {/* Behind The Scenes */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-6">Behind The Scenes</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <span className="verification-badge mr-3">
                    <i className="fas fa-check-circle"></i>
                    Team
                  </span>
                  <h3 className="text-xl font-semibold">Technical Management</h3>
                </div>
                <div className="space-y-2">
                  <p><strong>Technical Director:</strong> Shivam Pandey</p>
                  <p><strong>Email:</strong> shivampandeyyuyu@gmail.com</p>
                  <p><strong>Business Inquiries:</strong> +91 95545 84978</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
