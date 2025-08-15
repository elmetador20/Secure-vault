"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Copy, Trash2, Eye, EyeOff, ExternalLink } from "lucide-react"
import { useState } from "react"

const mockPasswords = [
  {
    id: 1,
    siteName: "Google",
    url: "https://google.com",
    username: "john@example.com",
    password: "MySecurePass123!",
  },
  {
    id: 2,
    siteName: "GitHub",
    url: "https://github.com",
    username: "johndoe",
    password: "AnotherPass456@",
  },
  {
    id: 3,
    siteName: "Netflix",
    url: "https://netflix.com",
    username: "john.doe@email.com",
    password: "StreamingPass789#",
  },
]

export default function YourPasswords() {
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set())

  const togglePasswordVisibility = (passwordId: number) => {
    const newVisible = new Set(visiblePasswords)
    if (newVisible.has(passwordId)) {
      newVisible.delete(passwordId)
    } else {
      newVisible.add(passwordId)
    }
    setVisiblePasswords(newVisible)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const openUrl = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockPasswords.map((password) => {
        const isVisible = visiblePasswords.has(password.id)
        return (
          <Card key={password.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  {password.siteName}
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openUrl(password.url)}
                    className="text-white/70 hover:text-white p-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => togglePasswordVisibility(password.id)}
                    className="text-white/70 hover:text-white p-1"
                  >
                    {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-white/70">Username</p>
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate">{password.username}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(password.username)}
                    className="text-white/70 hover:text-white p-1 flex-shrink-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/70">Password</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono flex-1">{isVisible ? password.password : "••••••••••••"}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(password.password)}
                    className="text-white/70 hover:text-white p-1 flex-shrink-0"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
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
