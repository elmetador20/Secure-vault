"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Plus, Sparkles } from "lucide-react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  cardName: z.string().min(1, {
    message: "Card name is required.",
  }),
  cardholderName: z.string().min(1, {
    message: "Cardholder name is required.",
  }),
  cardNumber: z.string().min(16, {
    message: "Card number must be at least 16 characters.",
  }),
  expiryDate: z.string().min(5, {
    message: "Expiry date must be in MM/YY format.",
  }),
  cvv: z.string().min(3, {
    message: "CVV must be at least 3 characters.",
  }),
})

export default function AddCard() {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardName: "",
      cardholderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/cards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardName: values.cardName,
          cardHolder: values.cardholderName, // Note: API expects 'cardHolder'
          cardNumber: values.cardNumber,
          expiryDate: values.expiryDate,
          cvv: values.cvv,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save card')
      }

      const result = await response.json()
      console.log("Card saved successfully:", result)
      
      // Show success message
      toast.success('Card added successfully!')
      
      // Reset form after successful submission
      form.reset()
    } catch (error) {
      console.error("Error saving card:", error)
      toast.error('Failed to save card. Please try again.')
    } finally {
      setIsLoading(false)
    }
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/90 font-medium flex items-center gap-2">
                    Card Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="My Main Card"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/90 font-medium">
                    Cardholder Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cardNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white/90 font-medium">
                    Card Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1234 5678 9012 3456"
                      {...field}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-white/90 font-medium">
                      Expiry Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="MM/YY"
                        {...field}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel className="text-white/90 font-medium">
                      CVV
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123"
                        {...field}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-5 h-5 mr-2" />
              {isLoading ? "Adding Card..." : "Add Card"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}