import FancyBackground from "@/components/FancyBackground"
import AddCard from "@/components/AddCard"
import AddPassword from "@/components/AddPassword"
import YourCards from "@/components/YourCards"
import YourPasswords from "@/components/YourPasswords"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FancyBackground />
      <div className="relative z-10 container mx-auto px-4 py-30">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Side by side components */}
          <div className="flex-1">
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">Add a credit card</h1>
            <AddCard />
          </div>
          <div className="flex-1">
            <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">Add a Password</h1>
            <AddPassword />
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">Your cards</h1>
          <YourCards />
        </div>

        <div>
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-6">Your passwords</h1>
          <YourPasswords />
        </div>
      </div>
    </div>
  )
}
