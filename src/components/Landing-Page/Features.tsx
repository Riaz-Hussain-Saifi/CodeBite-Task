import { CodeBracketIcon, BoltIcon, ChartBarIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const features = [
  {
    icon: <CodeBracketIcon className="w-8 h-8 text-purple-600" />,
    title: "Daily Challenges",
    description: "Get a new coding challenge every day, tailored to your skill level."
  },
  {
    icon: <BoltIcon className="w-8 h-8 text-blue-500" />,
    title: "Quick Sessions",
    description: "Complete challenges in 15-30 minutes. Perfect for busy schedules."
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-purple-600" />,
    title: "Track Progress",
    description: "Visualize your improvement with detailed analytics and insights."
  },
  {
    icon: <ArrowPathIcon className="w-8 h-8 text-blue-500" />,
    title: "Multiple Languages",
    description: "Choose from 20+ programming languages to practice with."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why developers love CodeBite</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform is designed to help you grow consistently without overwhelming you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}