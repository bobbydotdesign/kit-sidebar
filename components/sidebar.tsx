"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  Zap,
  MoreHorizontal,
  Star,
  StarOff,
  Edit,
  Trash2,
  Folder,
  GripVertical,
  PlusCircleIcon,
  User,
  Sparkles,
  UserCircle,
  CreditCard,
  Bell,
  LogOut,
} from "lucide-react"

interface SidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const [activeChat, setActiveChat] = useState("chat-1")
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [dragOverItem, setDragOverItem] = useState<string | null>(null)
  const [projectChats, setProjectChats] = useState([
    {
      id: "proj-1",
      title: "E-commerce Platform",
      preview: "Building a full-stack e-commerce solution",
      time: "1d ago",
    },
    {
      id: "proj-2",
      title: "Task Management App",
      preview: "Creating a collaborative task management tool",
      time: "3d ago",
    },
    {
      id: "proj-3",
      title: "Weather Dashboard",
      preview: "Real-time weather data visualization",
      time: "5d ago",
    },
  ])
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpenMenu(null)
        setUserMenuOpen(false)
      }
    }

    if (openMenu || userMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openMenu, userMenuOpen])

  const [favoriteChats, setFavoriteChats] = useState([
    {
      id: "fav-1",
      title: "AI Best Practices",
      preview: "What are the best practices for AI development?",
      time: "3d ago",
    },
    {
      id: "fav-2",
      title: "React Hooks Guide",
      preview: "Complete guide to React hooks and state management",
      time: "1w ago",
    },
  ])

  const [chatHistory, setChatHistory] = useState([
    {
      id: "chat-1",
      title: "React Component Help",
      preview: "How do I create a reusable button component?",
      time: "2m ago",
    },
    {
      id: "chat-2",
      title: "TypeScript Best Practices",
      preview: "What are some TypeScript best practices for...",
      time: "1h ago",
    },
    {
      id: "chat-3",
      title: "API Integration Guide",
      preview: "Help me integrate a REST API with my app",
      time: "3h ago",
    },
    { id: "chat-4", title: "CSS Grid Layout", preview: "I need help with CSS grid layouts", time: "1d ago" },
    {
      id: "chat-5",
      title: "Database Design",
      preview: "What's the best way to structure my database?",
      time: "2d ago",
    },
    { id: "chat-6", title: "Authentication Setup", preview: "How do I implement user authentication?", time: "1w ago" },
    { id: "chat-7", title: "Performance Optimization", preview: "My app is running slowly, any tips?", time: "1w ago" },
    {
      id: "chat-8",
      title: "Deployment Questions",
      preview: "What's the best way to deploy my React app?",
      time: "1w ago",
    },
  ])

  const handleFavorite = (chatId: string) => {
    // Check if chat is in favorites
    const favoriteChat = favoriteChats.find((chat) => chat.id === chatId)

    if (favoriteChat) {
      // Unfavorite: move from favorites to recent chats
      setFavoriteChats((prev) => prev.filter((chat) => chat.id !== chatId))
      setChatHistory((prev) => [favoriteChat, ...prev])
    } else {
      // Favorite: move from recent chats to favorites
      const recentChat = chatHistory.find((chat) => chat.id === chatId)
      if (recentChat) {
        setChatHistory((prev) => prev.filter((chat) => chat.id !== chatId))
        setFavoriteChats((prev) => [...prev, recentChat])
      }
    }

    setOpenMenu(null)
  }

  const handleRename = (chatId: string) => {
    console.log("Rename chat:", chatId)
    setOpenMenu(null)
  }

  const handleDelete = (chatId: string) => {
    console.log("Delete chat:", chatId)
    setOpenMenu(null)
  }

  const handleDragStart = (e: React.DragEvent, chatId: string) => {
    setDraggedItem(chatId)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, chatId: string) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
    setDragOverItem(chatId)
  }

  const handleDragLeave = () => {
    setDragOverItem(null)
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()

    if (!draggedItem || draggedItem === targetId) {
      setDraggedItem(null)
      setDragOverItem(null)
      return
    }

    const draggedIndex = projectChats.findIndex((chat) => chat.id === draggedItem)
    const targetIndex = projectChats.findIndex((chat) => chat.id === targetId)

    if (draggedIndex === -1 || targetIndex === -1) return

    const newProjectChats = [...projectChats]
    const [draggedChat] = newProjectChats.splice(draggedIndex, 1)
    newProjectChats.splice(targetIndex, 0, draggedChat)

    setProjectChats(newProjectChats)
    setDraggedItem(null)
    setDragOverItem(null)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setDragOverItem(null)
  }

  const renderChatList = (
    chats: typeof chatHistory,
    showFavoriteIcon = false,
    showProjectIcon = false,
    isDraggable = false,
  ) =>
    chats.map((chat) => (
      <div
        key={chat.id}
        className={`group relative flex items-center w-full rounded-md transition-colors ${
          activeChat === chat.id ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"
        } ${dragOverItem === chat.id ? "border-t-2 border-primary" : ""} ${draggedItem === chat.id ? "opacity-50" : ""}`}
        {...(isDraggable && {
          draggable: true,
          onDragStart: (e) => handleDragStart(e, chat.id),
          onDragOver: (e) => handleDragOver(e, chat.id),
          onDragLeave: handleDragLeave,
          onDrop: (e) => handleDrop(e, chat.id),
          onDragEnd: handleDragEnd,
        })}
      >
        <Button
          variant="ghost"
          className={`flex-1 justify-start ${collapsed ? "px-2" : "px-3"} hover:bg-transparent`}
          onClick={() => setActiveChat(chat.id)}
        >
          {collapsed ? (
            <div className="w-2 h-2 rounded-full bg-current opacity-60" />
          ) : (
            <div className="flex items-center">
              {showFavoriteIcon && <Star className="h-3 w-3 mr-2 text-foreground" />}
              {showProjectIcon && <Folder className="h-3 w-3 mr-2 text-foreground" />}
              <span className="text-sm truncate">{chat.title}</span>
            </div>
          )}
        </Button>
        {!collapsed && (
          <div className="flex items-center">
            {isDraggable && (
              <div className="opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing mr-1">
                <GripVertical className="h-3 w-3 text-muted-foreground" />
              </div>
            )}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="opacity-0 group-hover:opacity-100 transition-opacity mr-1 h-6 w-6 p-0"
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenMenu(openMenu === chat.id ? null : chat.id)
                }}
              >
                <MoreHorizontal className="h-3 w-3" />
              </Button>

              {openMenu === chat.id && (
                <div className="absolute right-0 top-full mt-1 bg-popover border border-border rounded-md shadow-lg z-50 py-1 min-w-[120px]">
                  {!showProjectIcon && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start px-3 py-1.5 h-auto text-xs"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleFavorite(chat.id)
                      }}
                    >
                      {showFavoriteIcon ? <StarOff className="h-3 w-3 mr-2" /> : <Star className="h-3 w-3 mr-2" />}
                      {showFavoriteIcon ? "Unfavorite" : "Favorite"}
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start px-3 py-1.5 h-auto text-xs"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRename(chat.id)
                    }}
                  >
                    <Edit className="h-3 w-3 mr-2" />
                    Rename
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start px-3 py-1.5 h-auto text-xs text-destructive hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleDelete(chat.id)
                    }}
                  >
                    <Trash2 className="h-3 w-3 mr-2" />
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    ))

  const handleUpgrade = () => {
    console.log("Upgrade to Pro")
    setUserMenuOpen(false)
  }

  const handleAccount = () => {
    console.log("Account settings")
    setUserMenuOpen(false)
  }

  const handleBilling = () => {
    console.log("Billing")
    setUserMenuOpen(false)
  }

  const handleNotifications = () => {
    console.log("Notifications")
    setUserMenuOpen(false)
  }

  const handleLogout = () => {
    console.log("Log out")
    setUserMenuOpen(false)
  }

  return (
    <div
      ref={sidebarRef}
      className={`h-full bg-background border-r border-border transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" onClick={onToggle}>
            <Zap className="h-4 w-4" />
          </Button>
          {!collapsed && <h2 className="text-lg font-semibold ml-3">KitGPT</h2>}
        </div>
        {!collapsed && (
          <Button variant="ghost" size="sm" onClick={() => console.log("Create new chat")} className="hover:bg-accent">
            <PlusCircleIcon className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto">
        {favoriteChats.length > 0 && (
          <div className="p-2">
            {!collapsed && (
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                Favorite Chats
              </h3>
            )}
            <div className="space-y-1">{renderChatList(favoriteChats, true)}</div>
          </div>
        )}

        {projectChats.length > 0 && (
          <div className="p-2">
            {!collapsed && (
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">Projects</h3>
            )}
            <div className="space-y-1">{renderChatList(projectChats, false, true, true)}</div>
          </div>
        )}

        <div className="p-2">
          {!collapsed && (
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
              Recent Chats
            </h3>
          )}
          <div className="space-y-1">{renderChatList(chatHistory)}</div>
        </div>
      </div>

      <div className="border-t border-border p-2 flex-shrink-0 relative px-3 py-3">
        <div className="group flex items-center">
          <Button
            variant="ghost"
            className={`flex-1 justify-start ${collapsed ? "px-2" : "px-3"} hover:bg-accent py-3 h-12`}
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            {collapsed ? (
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <User className="h-3 w-3 text-primary-foreground" />
              </div>
            ) : (
              <div className="flex items-center w-full">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3">
                  <User className="h-3 w-3 text-primary-foreground" />
                </div>
                <div className="flex flex-col items-start flex-1">
                  <span className="text-sm font-medium">User</span>
                  <span className="text-xs text-muted-foreground">Free Plan</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            )}
          </Button>
        </div>

        {userMenuOpen && (
          <div className="absolute bottom-full right-2 mb-2 bg-popover border border-border rounded-md shadow-lg z-50 py-1 min-w-[180px]">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start px-3 py-2 h-auto text-sm"
              onClick={handleUpgrade}
            >
              <Sparkles className="h-4 w-4 mr-3" />
              Upgrade to Pro
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start px-3 py-2 h-auto text-sm"
              onClick={handleAccount}
            >
              <UserCircle className="h-4 w-4 mr-3" />
              Account
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start px-3 py-2 h-auto text-sm"
              onClick={handleBilling}
            >
              <CreditCard className="h-4 w-4 mr-3" />
              Billing
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start px-3 py-2 h-auto text-sm"
              onClick={handleNotifications}
            >
              <Bell className="h-4 w-4 mr-3" />
              Notifications
            </Button>
            <div className="border-t border-border my-1" />
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start px-3 py-2 h-auto text-sm text-destructive hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-3" />
              Log out
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
