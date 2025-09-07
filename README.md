# KitGPT Sidebar Component

A beautiful, feature-rich sidebar component for AI chat applications, built with React, TypeScript, and Tailwind CSS. Perfect for creating ChatGPT-style interfaces with organized chat history, favorites, projects, and user management.

## ✨ Features

- **Collapsible Design**: Smooth expand/collapse functionality with responsive layouts
- **Organized Chat Sections**: Separate sections for favorites, projects, and recent chats
- **Dynamic Favoriting**: Move chats between favorites and recent sections with working favorite/unfavorite functionality
- **Drag & Drop**: Reorder projects with intuitive drag-and-drop functionality
- **Context Menus**: Right-click menus for chat management (favorite, rename, delete)
- **User Profile Menu**: Complete user menu with upgrade, account, billing, and logout options
- **Visual Feedback**: Hover states, active indicators, and smooth animations
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Dark/Light Mode**: Full theme support with CSS custom properties

// ... existing code ...

### Event Handlers

Customize the behavior by modifying the event handlers:

\`\`\`tsx
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
}

const handleRename = (chatId: string) => {
  // Your rename logic  
}

const handleDelete = (chatId: string) => {
  // Your delete logic
}
\`\`\`

// ... existing code ...

### Context Menus

Right-click or click the three-dot menu for:
- **Favorite/Unfavorite**: Toggle chat favorite status with dynamic section movement
- **Rename**: Edit chat titles
- **Delete**: Remove chats (with confirmation)

// ... existing code ...
\`\`\`

```tsx file="" isHidden
