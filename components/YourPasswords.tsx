"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Copy, Trash2, Eye, EyeOff, ExternalLink, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

interface PasswordData {
  id: number
  siteName: string
  url: string | null
  username: string
  password: string
}

export default function YourPasswords() {
  const [passwords, setPasswords] = useState<PasswordData[]>([])
  const [visiblePasswords, setVisiblePasswords] = useState<Set<number>>(new Set())
  const [isLoading, setIsLoading] = useState(true)

  // Fetch passwords from database
  useEffect(() => {
    fetchPasswords()
  }, [])

  const fetchPasswords = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/passwords')
      if (!response.ok) {
        throw new Error('Failed to fetch passwords')
      }
      const data = await response.json()
      setPasswords(data)
    } catch (error) {
      console.error('Error fetching passwords:', error)
      toast.error('Failed to load passwords')
    } finally {
      setIsLoading(false)
    }
  }

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
    toast.success('Copied to clipboard!')
  }

  const deletePassword = async (passwordId: number) => {
    if (!confirm('Are you sure you want to delete this password?')) {
      return
    }
    
    try {
      const response = await fetch(`/api/passwords/${passwordId}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete password')
      }
      
      // Remove password from local state
      setPasswords(passwords.filter(password => password.id !== passwordId))
      toast.success('Password deleted successfully!')
    } catch (error) {
      console.error('Error deleting password:', error)
      toast.error('Failed to delete password')
    }
  }

  const openUrl = (url: string | null) => {
    if (!url) {
      toast.error('No URL provided for this site')
      return
    }
    
    // Add https:// if no protocol is specified
    let formattedUrl = url
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      formattedUrl = `https://${url}`
    }
    
    window.open(formattedUrl, "_blank")
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-white/60" />
        <span className="ml-2 text-white/60">Loading passwords...</span>
      </div>
    )
  }

  if (passwords.length === 0) {
    return (
      <div className="text-center py-12">
        <Lock className="w-16 h-16 mx-auto text-white/30 mb-4" />
        <p className="text-white/60 text-lg">No passwords saved yet</p>
        <p className="text-white/40 text-sm">Add your first password above to get started</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {passwords.map((password) => {
        const isVisible = visiblePasswords.has(password.id)
        return (
          <Card key={password.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  <span className="truncate">{password.siteName}</span>
                </div>
                <div className="flex gap-1">
                  {password.url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => openUrl(password.url)}
                      className="text-white/70 hover:text-white p-1"
                      title="Open website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => togglePasswordVisibility(password.id)}
                    className="text-white/70 hover:text-white p-1"
                    title={isVisible ? "Hide password" : "Show password"}
                  >
                    {isVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {password.url && (
                <div>
                  <p className="text-sm text-white/70">URL</p>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm truncate flex-1" title={password.url}>
                      {password.url}
                    </p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(password.url!)}
                      className="text-white/70 hover:text-white p-1 flex-shrink-0"
                      title="Copy URL"
                    >
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              )}

              <div>
                <p className="text-sm text-white/70">Username</p>
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate flex-1" title={password.username}>
                    {password.username}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(password.username)}
                    className="text-white/70 hover:text-white p-1 flex-shrink-0"
                    title="Copy username"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/70">Password</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono flex-1 text-sm">
                    {isVisible ? password.password : "••••••••••••"}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(password.password)}
                    className="text-white/70 hover:text-white p-1 flex-shrink-0"
                    title="Copy password"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => deletePassword(password.id)}
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/20"
                  title="Delete password"
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