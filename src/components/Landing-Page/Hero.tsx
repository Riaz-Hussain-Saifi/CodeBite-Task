import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <span className="mb-4 px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
          New: AI Code Review!
        </span>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Bite-sized
          </span>{' '}
          coding challenges daily
        </h1>
        
        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Level up your coding skills with our daily challenges. Perfect for busy developers who want to improve consistently.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link 
            href="/signup" 
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition font-medium"
          >
            Start Coding Now - It's Free
          </Link>
          <Link 
            href="#features" 
            className="px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition font-medium shadow-sm"
          >
            Learn More
          </Link>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600">10,000+</div>
            <div className="text-gray-500">Active Developers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500">500+</div>
            <div className="text-gray-500">Coding Challenges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600">20+</div>
            <div className="text-gray-500">Programming Languages</div>
          </div>
        </div>
      </div>
    </section>
  )
}