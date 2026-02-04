import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/Logo.png" 
                  alt="Bright Advance Co" 
                  width={500} 
                  height={167}
                  className="h-24 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-[#F58B33] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-[#F58B33] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-[#F58B33] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-[#F58B33] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#7C3AED] text-white hover:bg-[#6D28D9] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About Bright Advance Co
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering next-generation SMS authentication technology that empowers businesses to protect their customers and streamline operations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 mb-4">
              Bright Advance Co emerged from a clear market need: organizations require dependable SMS authentication that balances security with exceptional delivery performance.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our platform serves as a secure bridge connecting enterprises with their users, ensuring every interaction is authenticated and trustworthy.
            </p>
            <p className="text-lg text-gray-600">
              We're committed to democratizing enterprise-grade authentication, making it accessible and affordable for organizations at every stage of growth.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-[#F58B33]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence Driven</h3>
                  <p className="text-gray-600">
                    Engineered with precision to exceed industry benchmarks and regulatory requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#F58B33]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy Obsessed</h3>
                  <p className="text-gray-600">
                    Military-grade encryption and zero-knowledge architecture safeguard every transaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#F58B33]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Optimized</h3>
                  <p className="text-gray-600">
                    Advanced infrastructure delivers sub-second response times across all network conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Competitive Edge</h2>
          <p className="text-xl text-gray-600">
            Chosen by organizations that demand uncompromising security and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">
              Redundant infrastructure ensures continuous availability for mission-critical operations.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Brand Flexibility</h3>
            <p className="text-gray-600">
              Manage unlimited brands with complete design control and white-label options.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Multi-region deployment guarantees optimal performance for users worldwide.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#60A5FA]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Developer Friendly</h3>
            <p className="text-gray-600">
              RESTful API with extensive documentation enables integration in minutes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7C3AED] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with Bright Advance Co and discover why leading companies choose our authentication platform.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-[#7C3AED] text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b3a41] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bright Advance Co</h3>
              <p className="text-gray-400">
                Secure SMS authentication solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@brightadvanceco.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bright Advance Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
