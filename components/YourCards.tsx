"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CreditCard, Copy, Trash2, Eye, EyeOff, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

interface CreditCardData {
  id: number
  cardName: string
  cardHolder: string
  cardNumber: string
  expiryDate: string
  cvv: string
}

export default function YourCards() {
  const [cards, setCards] = useState<CreditCardData[]>([])
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  // Fetch cards from database
  useEffect(() => {
    fetchCards()
  }, [])

  const fetchCards = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/cards')
      if (!response.ok) {
        throw new Error('Failed to fetch cards')
      }
      const data = await response.json()
      setCards(data)
    } catch (error) {
      console.error('Error fetching cards:', error)
      toast.error('Failed to load cards')
    } finally {
      setIsLoading(false)
    }
  }

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
    toast.success('Copied to clipboard!')
  }

  const deleteCard = async (cardId: number) => {
    if (!confirm('Are you sure you want to delete this card?')) {
      return
    }
    
    try {
      const response = await fetch(`/api/cards/${cardId}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete card')
      }
      
      // Remove card from local state
      setCards(cards.filter(card => card.id !== cardId))
      toast.success('Card deleted successfully!')
    } catch (error) {
      console.error('Error deleting card:', error)
      toast.error('Failed to delete card')
    }
  }

  const maskCardNumber = (cardNumber: string) => {
    return cardNumber.replace(/\d(?=\d{4})/g, "*")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-white/60" />
        <span className="ml-2 text-white/60">Loading cards...</span>
      </div>
    )
  }

  if (cards.length === 0) {
    return (
      <div className="text-center py-12">
        <CreditCard className="w-16 h-16 mx-auto text-white/30 mb-4" />
        <p className="text-white/60 text-lg">No credit cards added yet</p>
        <p className="text-white/40 text-sm">Add your first card above to get started</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card) => {
        const isVisible = visibleCards.has(card.id)
        return (
          <Card key={card.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  {card.cardName}
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
                <p className="font-medium">{card.cardHolder}</p>
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => deleteCard(card.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                >
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