import React from "react"
import { Button } from "@/components/ui/button"

export default function CtaSection() {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to level up your coding skills?</h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are improving consistently with our daily challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition font-medium">
              Get Started for Free
            </Button>
            <Button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    )
  }