# Installation Guide

## Prerequisites

- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- Node.js 16+

## Step-by-Step Installation

### 1. Install Dependencies

\`\`\`bash
npm install lucide-react clsx tailwind-merge
\`\`\`

### 2. Install shadcn/ui Components

If you haven't already set up shadcn/ui in your project:

\`\`\`bash
npx shadcn@latest init
npx shadcn@latest add button
\`\`\`

### 3. Copy Component Files

Copy the following files to your project:

\`\`\`
src/
├── components/
│   └── sidebar.tsx
└── lib/
    └── utils.ts
\`\`\`

### 4. Update Your Tailwind Config

Ensure your `tailwind.config.js` includes the component paths:

\`\`\`js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of your config
}
\`\`\`

### 5. Add CSS Variables

Add these CSS custom properties to your `globals.css`:

\`\`\`css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
\`\`\`

## Usage

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
      <main className="flex-1">
        {/* Your content */}
      </main>
    </div>
  )
}
\`\`\`

## Troubleshooting

### Common Issues

1. **Icons not showing**: Make sure `lucide-react` is installed
2. **Styling issues**: Verify Tailwind CSS is properly configured
3. **TypeScript errors**: Ensure all dependencies are installed with correct versions

### Support

For issues and questions:
- Check the GitHub repository
- Review the documentation
- Open an issue for bugs or feature requests
