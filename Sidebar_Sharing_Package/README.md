# KitGPT Sidebar Component

A beautiful, feature-rich sidebar component for AI chat applications, built with React, TypeScript, and Tailwind CSS. Perfect for creating ChatGPT-style interfaces with organized chat history, favorites, projects, and user management.

## ✨ Features

- **Collapsible Design**: Smooth expand/collapse functionality with responsive layouts
- **Organized Chat Sections**: Separate sections for favorites, projects, and recent chats
- **Drag & Drop**: Reorder projects with intuitive drag-and-drop functionality
- **Context Menus**: Right-click menus for chat management (favorite, rename, delete)
- **User Profile Menu**: Complete user menu with upgrade, account, billing, and logout options
- **Visual Feedback**: Hover states, active indicators, and smooth animations
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Dark/Light Mode**: Full theme support with CSS custom properties

## 🚀 Quick Start

### Installation

1. **Copy the component files** to your project:
   \`\`\`
   components/
   └── sidebar.tsx
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install lucide-react
   \`\`\`

3. **Ensure you have shadcn/ui components**:
   \`\`\`bash
   npx shadcn@latest add button
   \`\`\`

### Basic Usage

\`\`\`tsx
import { Sidebar } from "@/components/sidebar"
import { useState } from "react"

export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      <main className="flex-1 p-6">
        {/* Your main content */}
      </main>
    </div>
  )
}
\`\`\`

## 📋 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `collapsed` | `boolean` | `false` | Controls whether the sidebar is collapsed |
| `onToggle` | `() => void` | `undefined` | Callback function when toggle button is clicked |

## 🎨 Customization

### Styling

The component uses Tailwind CSS classes and CSS custom properties for theming. You can customize:

- **Colors**: Modify CSS custom properties in your globals.css
- **Spacing**: Adjust padding and margins using Tailwind classes
- **Typography**: Change font sizes and weights
- **Animations**: Modify transition durations and easing

### Data Structure

Customize the chat data by modifying the arrays in the component:

\`\`\`tsx
const favoriteChats = [
  {
    id: "fav-1",
    title: "AI Best Practices",
    preview: "What are the best practices for AI development?",
    time: "3d ago",
  },
  // Add more favorite chats...
]

const projectChats = [
  {
    id: "proj-1", 
    title: "E-commerce Platform",
    preview: "Building a full-stack e-commerce solution",
    time: "1d ago",
  },
  // Add more projects...
]
\`\`\`

### Event Handlers

Customize the behavior by modifying the event handlers:

\`\`\`tsx
const handleFavorite = (chatId: string) => {
  // Your favorite logic
}

const handleRename = (chatId: string) => {
  // Your rename logic  
}

const handleDelete = (chatId: string) => {
  // Your delete logic
}
\`\`\`

## 🔧 Advanced Features

### Drag and Drop

Projects can be reordered using drag and drop. The component includes:
- Visual feedback during dragging
- Drop zone indicators
- Smooth reordering animations

### Context Menus

Right-click or click the three-dot menu for:
- **Favorite/Unfavorite**: Toggle chat favorite status
- **Rename**: Edit chat titles
- **Delete**: Remove chats (with confirmation)

### User Profile Menu

Complete user management with:
- Profile information display
- Upgrade to Pro option
- Account settings
- Billing management
- Notifications
- Logout functionality

## 🎯 Use Cases

- **AI Chat Applications**: Perfect for ChatGPT-style interfaces
- **Project Management**: Organize conversations by project
- **Knowledge Base**: Categorize and favorite important discussions
- **Team Collaboration**: Multi-user chat organization
- **Customer Support**: Ticket and conversation management

## 🛠 Technical Details

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS with CSS custom properties
- **Icons**: Lucide React icon library
- **Components**: Built on shadcn/ui foundation
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized with React hooks and memoization

## 📱 Responsive Design

The sidebar adapts to different screen sizes:
- **Desktop**: Full sidebar with all features
- **Tablet**: Collapsible with hover states
- **Mobile**: Overlay mode (when implemented)

## 🎨 Theme Support

Full support for light and dark themes using CSS custom properties:

\`\`\`css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... more theme variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  /* ... dark theme variables */
}
\`\`\`

## 🤝 Contributing

This component is part of the Kit component library. Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests
- Share your implementations

## 📄 License

MIT License - feel free to use in your projects!

---

Built with ❤️ for the developer community. Part of the Kit component library.
