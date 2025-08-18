
//add password page

"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Plus, Eye, EyeOff, RefreshCw, Shield, Zap } from "lucide-react"
import toast from "react-hot-toast"

export default function AddPassword() {
  const [passwordData, setPasswordData] = useState({
    siteName: "",
    username: "",
    password: "",
    url: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"
    let password = ""
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setPasswordData({ ...passwordData, password })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!passwordData.siteName || !passwordData.username || !passwordData.password) {
      toast.error('Please fill in all required fields')
      return
    }
    
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          siteName: passwordData.siteName,
          url: passwordData.url || null, // API expects url to be nullable
          username: passwordData.username,
          password: passwordData.password,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save password')
      }

      const result = await response.json()
      console.log("Password saved successfully:", result)
      
      // Show success message
      toast.success('Password added successfully!')
      
      // Reset form
      setPasswordData({
        siteName: "",
        username: "",
        password: "",
        url: "",
      })
    } catch (error) {
      console.error("Error saving password:", error)
      toast.error('Failed to save password. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="bg-white/5 backdrop-blur-xl border border-white/10 text-white shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:border-white/20 group">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Lock className="w-5 h-5" />
          </div>
          <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">New Password</span>
          <Shield className="w-4 h-4 text-blue-400 animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="siteName" className="text-white/90 font-medium">
              Site Name *
            </Label>
            <Input
              id="siteName"
              placeholder="Google"
              required
              value={passwordData.siteName}
              onChange={(e) => setPasswordData({ ...passwordData, siteName: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="url" className="text-white/90 font-medium">
              URL (Optional)
            </Label>
            <Input
              id="url"
              placeholder="https://google.com"
              value={passwordData.url}
              onChange={(e) => setPasswordData({ ...passwordData, url: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="username" className="text-white/90 font-medium">
              Username/Email *
            </Label>
            <Input
              id="username"
              placeholder="john@example.com"
              required
              value={passwordData.username}
              onChange={(e) => setPasswordData({ ...passwordData, username: e.target.value })}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-white/90 font-medium">
              Password *
            </Label>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  required
                  value={passwordData.password}
                  onChange={(e) => setPasswordData({ ...passwordData, password: e.target.value })}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12 rounded-xl pr-12 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-1 top-1 h-10 w-10 text-white/70 hover:text-white hover:bg-white/10 rounded-lg"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={generatePassword}
                className="h-12 px-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400/30 text-white hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400/50 rounded-xl transition-all duration-300 group"
              >
                <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                <Zap className="w-3 h-3 ml-1 text-yellow-400" />
              </Button>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus className="w-5 h-5 mr-2" />
            {isLoading ? "Adding Password..." : "Add Password"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}