import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            CodeBite
          </span>
        </Link>

        {/* Navigation - Hidden on mobile */}
        <nav className="hidden md:flex gap-8">
          <Link href="#features" className="text-gray-600 hover:text-purple-600 transition">
            Features
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-purple-600 transition">
            About
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-purple-600 transition">
            Pricing
          </Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-purple-600 transition">
            Testimonials
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          <Link href="#" className="px-4 py-2 text-gray-600 hover:text-purple-600 transition">
            Log in
          </Link>
          <Link 
            href="#" 
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  )
}