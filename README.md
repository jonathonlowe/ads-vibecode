# VibeCode: Designer-Friendly React Boilerplate with Atlassian Design System

A modern, designer-friendly React boilerplate that makes it easy for designers and product managers to create beautiful, consistent interfaces using Atlassian Design System (ADS).

## 🎨 What's Inside

### Design System & UI Components
- **Atlaskit Components** - Access to 100+ pre-built, accessible components
- **Design Tokens** - Consistent colors, spacing, typography, and animations
- **Theming Support** - Easy customization of the Atlassian Design System
- **Responsive Design** - Built-in responsive layouts and components

### Visual Development Features
- **Hot Module Replacement** - See your changes instantly without page refresh
- **Component Library** - Browse and use Atlaskit components in real-time
- **Design System Documentation** - Integrated links to Atlassian Design System docs
- **Visual Testing** - Preview components in isolation

### Developer Experience
- ⚡️ [Vite](https://vitejs.dev/) - Lightning-fast development server
- ⚛️ [React](https://reactjs.org/) - Modern UI development
- 📝 [TypeScript](https://www.typescriptlang.org/) - Type safety and better IDE support
- 🔥 Hot Module Replacement (HMR) - Instant feedback on changes

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/marjer7/ads-vibecode.git your-project-name
cd your-project-name
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
./start-dev.sh
```

Visit [http://localhost:3000](http://localhost:3000) to see your app!

## 🎯 Key Features for Designers & PMs

### Component Library
Access Atlaskit's extensive component library including:
- Navigation components (Breadcrumbs, Navigation, Tabs)
- Data display (Tables, Cards, Lists)
- Form elements (Buttons, Inputs, Select)
- Feedback components (Modals, Toasts, Progress)
- Layout components (Grid, Container, Spacing)

### Design System Integration
- **Color System** - Use Atlassian's color palette and theming
- **Typography** - Consistent text styles and hierarchy
- **Spacing** - Standardized spacing scale
- **Icons** - Atlassian icon library
- **Motion** - Pre-defined animations and transitions

### Development Workflow
1. **Component Selection** - Choose from Atlaskit's component library
2. **Visual Editing** - Make changes and see them instantly
3. **Responsive Testing** - Test layouts across different screen sizes
4. **Theme Customization** - Adjust colors and styles to match your brand

## 📚 Resources

- [Atlaskit Component Library](https://atlassian.design/components)
- [Design System Documentation](https://atlassian.design/)
- [Component Playground](http://localhost:3000) (after starting the dev server)

## 🛠️ Project Structure

```
├── src/
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── assets/         # Static assets
├── public/             # Public assets
├── vite.config.ts      # Vite configuration
└── start-dev.sh        # Development server script
```

## 📦 Building for Production

To create a production build:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
