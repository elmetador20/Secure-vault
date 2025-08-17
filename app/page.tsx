import FancyBackground from "@/components/FancyBackground"
import AddCard from "@/components/AddCard"
import AddPassword from "@/components/AddPassword"
import YourCards from "@/components/YourCards"
import YourPasswords from "@/components/YourPasswords"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Shield, 
  Lock, 
  CreditCard, 
  Zap, 
  Eye, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  Sparkles,
  Users,
  Database,
  KeyRound
} from "lucide-react"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="min-h-screen relative ">
      <FancyBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
              <span className="text-purple-300 font-semibold tracking-wide">SECURE • SIMPLE • SMART</span>
              <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Your Digital
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent block">
                Vault Awaits
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
              Securely store your passwords and credit cards in one beautiful, encrypted vault. 
              Never forget another password again.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <SignedOut>
                <SignUpButton>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-2xl backdrop-blur-sm transition-all duration-300">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <Link href="#features">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
                    Explore Features
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </SignedIn>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">256-bit</div>
                <div className="text-white/60 text-sm">Encryption</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10k+</div>
                <div className="text-white/60 text-sm">Users Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/60 text-sm">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Vault?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Built with security-first principles and designed for the modern user
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Military-Grade Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Your data is protected with AES-256 encryption, the same standard used by governments and banks worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Access your passwords and cards instantly with our optimized performance and smart caching.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Sync across all your devices. Access your vault from desktop, mobile, or web - anywhere, anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <KeyRound className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Password Generator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Generate strong, unique passwords with our built-in generator. Never use weak passwords again.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Smart Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  Toggle visibility on sensitive data with a click. Show only what you need, when you need it.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white group hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">Zero Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">
                  We never see your data. Everything is encrypted locally before it reaches our servers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Signed In - Dashboard Preview */}
      <SignedIn>
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Your Personal Vault
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Manage your passwords and credit cards securely
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              <div className="flex-1">
                <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-purple-400" />
                  Add a Credit Card
                </h3>
                <AddCard />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-blue-400" />
                  Add a Password
                </h3>
                <AddPassword />
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-purple-400" />
                Your Cards
              </h3>
              <YourCards />
            </div>

            <div>
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6 flex items-center gap-3">
                <Lock className="w-8 h-8 text-blue-400" />
                Your Passwords
              </h3>
              <YourPasswords />
            </div>
          </div>
        </div>
      </SignedIn>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Start free, upgrade when you need more power
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Free</CardTitle>
                <div className="text-4xl font-bold mb-4">$0<span className="text-lg font-normal">/month</span></div>
                <p className="text-white/70">Perfect for personal use</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Up to 50 passwords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Up to 10 credit cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Basic encryption</span>
                </div>
                <SignedOut>
                  <SignUpButton>
                    <Button className="w-full mt-6 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800">
                      Get Started
                    </Button>
                  </SignUpButton>
                </SignedOut>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-400/30 text-white transform scale-110 hover:scale-115 transition-all duration-300 shadow-2xl shadow-purple-500/20 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <div className="text-4xl font-bold mb-4">$9<span className="text-lg font-normal">/month</span></div>
                <p className="text-white/70">For power users</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited passwords</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited credit cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Advanced encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Priority support</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Upgrade to Pro
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <div className="text-4xl font-bold mb-4">$29<span className="text-lg font-normal">/month</span></div>
                <p className="text-white/70">For teams and businesses</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Everything in Pro</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Team sharing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Admin controls</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support</span>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Loved by Thousands
            </h2>
            <p className="text-xl text-white/70">
              See what our users have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "Finally, a password manager that's both beautiful and secure. The interface is incredible!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-white/60 text-sm">Product Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "The security features are top-notch. I feel confident storing my sensitive information here."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Mike Chen</p>
                    <p className="text-white/60 text-sm">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 text-white">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  "Simple, elegant, and powerful. This has replaced all my other password tools."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Emma Davis</p>
                    <p className="text-white/60 text-sm">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Digital Life?
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Join thousands of users who trust us with their most sensitive information
            </p>

            <SignedOut>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <SignUpButton>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 group">
                    Start Free Today
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                  </Button>
                </SignUpButton>
                <p className="text-white/60">No credit card required • Free forever</p>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="text-center">
                <p className="text-2xl text-white/80 mb-8">Welcome back! Your vault is ready.</p>
                <Link href="/Hero">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                    Manage Your Vault
                  </Button>
                </Link>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold text-xl">SecureVault</span>
            </div>
            <div className="text-white/60 text-center md:text-right">
              <p>&copy; 2025 SecureVault. All rights reserved.</p>
              <p className="text-sm">Built with security and privacy in mind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}