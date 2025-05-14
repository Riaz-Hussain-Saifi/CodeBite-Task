import React from 'react'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "CodeBite has completely transformed my daily routine. The bite-sized challenges are perfect for my busy schedule, and I've seen real improvement in my coding skills."
  },
  {
    name: "Michael Chen",
    role: "Full Stack Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "As someone who struggled with consistency, CodeBite's daily challenges have kept me motivated. The AI code review is incredibly helpful for learning best practices."
  },
  {
    name: "Emma Rodriguez",
    role: "Computer Science Student",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "This platform has been invaluable for my studies. The challenges cover a wide range of topics and difficulty levels, perfect for supplementing my coursework."
  }
]

  export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What our users say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of developers who are improving their skills with CodeBite.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }