"use client"

import { Sidebar } from "@/components/sidebar"
import { useState } from "react"

export default function BasicSidebarExample() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-background">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <main className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">KitGPT Sidebar Demo</h1>
          <div className="prose dark:prose-invert">
            <p>This is a demonstration of the KitGPT Sidebar component. The sidebar includes:</p>
            <ul>
              <li>
                <strong>Collapsible Design</strong> - Click the lightning bolt to toggle
              </li>
              <li>
                <strong>Favorite Chats</strong> - Starred conversations for quick access
              </li>
              <li>
                <strong>Projects</strong> - Organized project conversations with drag-and-drop reordering
              </li>
              <li>
                <strong>Recent Chats</strong> - Your latest conversations
              </li>
              <li>
                <strong>Context Menus</strong> - Right-click or use the three-dot menu for actions
              </li>
              <li>
                <strong>User Profile</strong> - Complete user menu with account options
              </li>
            </ul>
            <p>Try interacting with the sidebar to explore all the features!</p>
          </div>
        </div>
      </main>
    </div>
  )
}
