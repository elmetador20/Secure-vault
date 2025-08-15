"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Plus, Sparkles } from "lucide-react"

export default function AddCard() {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    cardName: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Adding card:", cardData)
    // Reset form
    setCardData({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
      cardName: "",
    })
  }

  return (
    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:border-white/20 group">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <CreditCard className="w-5 h-5" />
          </div>
          <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            New Credit Card
          </span>
          <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="cardName" className="text-white/90 font-medium flex items-center gap-2">
              Card Name
            </Label>
            <Input
              id="cardName"
              placeholder="My Main Card"
              value={cardData.cardName}
              onChange={(e) => setCardData({ ...cardData, cardName: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="cardholderName" className="text-white/90 font-medium">
              Cardholder Name
            </Label>
            <Input
              id="cardholderName"
              placeholder="John Doe"
              value={cardData.cardholderName}
              onChange={(e) => setCardData({ ...cardData, cardholderName: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="cardNumber" className="text-white/90 font-medium">
              Card Number
            </Label>
            <Input
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardData.cardNumber}
              onChange={(e) => setCardData({ ...cardData, cardNumber: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 space-y-3">
              <Label htmlFor="expiryDate" className="text-white/90 font-medium">
                Expiry Date
              </Label>
              <Input
                id="expiryDate"
                placeholder="MM/YY"
                value={cardData.expiryDate}
                onChange={(e) => setCardData({ ...cardData, expiryDate: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
            <div className="flex-1 space-y-3">
              <Label htmlFor="cvv" className="text-white/90 font-medium">
                CVV
              </Label>
              <Input
                id="cvv"
                placeholder="123"
                value={cardData.cvv}
                onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02]"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Card
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
