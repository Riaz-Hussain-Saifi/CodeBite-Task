import { CheckIcon } from '@heroicons/react/24/outline'

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "5 challenges per week",
      "Basic progress tracking",
      "Community solutions",
      "Email support"
    ],
    cta: "Get Started",
    featured: false
  },
  {
    name: "Pro",
    price: "$9",
    description: "For serious coders",
    features: [
      "Daily challenges",
      "Advanced analytics",
      "AI code review",
      "Priority support",
      "Exclusive content"
    ],
    cta: "Go Pro",
    featured: true
  },
  {
    name: "Team",
    price: "$25",
    description: "For teams & organizations",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Progress comparisons",
      "Bulk user management",
      "Dedicated account manager"
    ],
    cta: "Contact Us",
    featured: false
  }
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your coding journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-xl ${plan.featured ? 'bg-white shadow-lg border-2 border-purple-500' : 'bg-white border border-gray-200'}`}
            >
              {plan.featured && (
                <div className="bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-2">{plan.price}<span className="text-lg text-gray-500 font-normal">/month</span></div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 rounded-lg font-medium ${plan.featured ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}