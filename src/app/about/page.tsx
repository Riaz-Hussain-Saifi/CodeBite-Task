import { CodeBracketIcon, UserGroupIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About CodeBite</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our mission is to make coding practice accessible, enjoyable, and effective for everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Story */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <LightBulbIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Story</h3>
            <p className="text-gray-600">
              Founded in 2020 by a team of passionate developers, CodeBite started as a side project to help friends improve their coding skills. Today, we serve thousands of developers worldwide.
            </p>
          </div>
          
          {/* Mission */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <CodeBracketIcon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To help developers of all levels improve through consistent, bite-sized practice. We believe small daily improvements lead to significant long-term growth.
            </p>
          </div>
          
          {/* Team */}
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <UserGroupIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Team</h3>
            <p className="text-gray-600">
              A diverse group of engineers, educators, and designers committed to creating the best coding practice platform. We're developers helping developers.
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mt-1">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Consistency Over Intensity</h4>
                <p className="text-gray-600">We believe small daily practice beats occasional marathon sessions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Community Focused</h4>
                <p className="text-gray-600">Learning is better together. We foster supportive developer communities.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mt-1">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Practical Learning</h4>
                <p className="text-gray-600">Our challenges simulate real-world problems developers actually face.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-1">
                4
              </div>
              <div>
                <h4 className="font-medium mb-2">Continuous Improvement</h4>
                <p className="text-gray-600">We constantly refine our platform based on user feedback.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}