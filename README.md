# KitGPT Sidebar Component

A beautiful, feature-rich sidebar component for AI chat applications, built with React, TypeScript, and Tailwind CSS. Perfect for creating ChatGPT-style interfaces with organized chat history, favorites, projects, and user management.

## ✨ Features

- **Collapsible Design**: Smooth expand/collapse functionality with responsive layouts
- **Organized Chat Sections**: Separate sections for favorites, projects, and recent chats
// <CHANGE> Added collapsed mode section menu features
- **Collapsed Mode Section Menus**: Click section icons in collapsed mode to reveal dropdown menus with chat items
- **Smart Click-Outside Handling**: Menus automatically close when clicking elsewhere, including within the sidebar
- **Dynamic Positioning**: Section menus position themselves correctly relative to their trigger buttons
- **Drag & Drop**: Reorder projects with intuitive drag-and-drop functionality
- **Context Menus**: Right-click menus for chat management (favorite, rename, delete)
- **Working Favoriting System**: Move chats between favorites and recent sections with functional favorite/unfavorite actions
- **User Profile Menu**: Complete user menu with upgrade, account, billing, and logout options
- **Visual Feedback**: Hover states, active indicators, and smooth animations
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader support
- **Dark/Light Mode**: Full theme support with CSS custom properties

... existing code ...

## 🔧 Advanced Features

// <CHANGE> Updated advanced features section with new functionality
### Collapsed Mode Navigation

When collapsed, the sidebar shows icon-only buttons for each section:
- **Star Icon**: Access favorite chats
- **Folder Icon**: Browse project chats  
- **Message Icon**: View recent chats
- **Click to Expand**: Each icon opens a dropdown menu with section items
- **Smart Positioning**: Menus appear to the right of icons with proper overflow handling

### Working Favorite System

The favoriting system now fully functions:
- **Add to Favorites**: Click "Favorite" in any recent chat's menu to move it to favorites
- **Remove from Favorites**: Click "Unfavorite" in favorite chat menus to move back to recent
- **Dynamic Updates**: Chat lists update in real-time when favoriting/unfavoriting
- **Visual Indicators**: Favorite chats show star icons, projects show folder icons

### Drag and Drop

Projects can be reordered using drag and drop. The component includes:
- Visual feedback during dragging
- Drop zone indicators
- Smooth reordering animations

### Context Menus

Right-click or click the three-dot menu for:
- **Favorite/Unfavorite**: Toggle chat favorite status (functional)
- **Rename**: Edit chat titles
- **Delete**: Remove chats (with confirmation)
- **Project-Specific**: Projects exclude favorite option from their menus

### User Profile Menu

Complete user management with:
- Profile information display
- Upgrade to Pro option
- Account settings
- Billing management
- Notifications
- Logout functionality
- **Proper Positioning**: Menu appears to the right with correct alignment

... existing code ...
\`\`\`

```tsx file="" isHidden
