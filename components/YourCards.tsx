"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Copy, Trash2, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const mockCards = [
  {
    id: 1,
    name: "Main Card",
    cardholderName: "John Doe",
    cardNumber: "1234 5678 9012 3456",
    expiryDate: "12/25",
    cvv: "123",
  },
  {
    id: 2,
    name: "Business Card",
    cardholderName: "John Doe",
    cardNumber: "9876 5432 1098 7654",
    expiryDate: "08/26",
    cvv: "456",
  },
]

export default function YourCards() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  const toggleCardVisibility = (cardId: number) => {
    const newVisible = new Set(visibleCards)
    if (newVisible.has(cardId)) {
      newVisible.delete(cardId)
    } else {
      newVisible.add(cardId)
    }
    setVisibleCards(newVisible)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const maskCardNumber = (cardNumber: string) => {
    return cardNumber.replace(/\d(?=\d{4})/g, "*")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {mockCards.map((card) => {
        const isVisible = visibleCards.has(card.id)
        return (
          <Card key={card.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  {card.name}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleCardVisibility(card.id)}
                  className="text-white/70 hover:text-white"
                >
                  {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-white/70">Cardholder</p>
                <p className="font-medium">{card.cardholderName}</p>
              </div>

              <div>
                <p className="text-sm text-white/70">Card Number</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono">{isVisible ? card.cardNumber : maskCardNumber(card.cardNumber)}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(card.cardNumber)}
                    className="text-white/70 hover:text-white p-1"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div>
                  <p className="text-sm text-white/70">Expiry</p>
                  <p className="font-mono">{isVisible ? card.expiryDate : "**/**"}</p>
                </div>
                <div>
                  <p className="text-sm text-white/70">CVV</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono">{isVisible ? card.cvv : "***"}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(card.cvv)}
                      className="text-white/70 hover:text-white p-1"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300 hover:bg-red-500/20">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
