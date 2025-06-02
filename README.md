# Designer-friendly vibecode react boilerplate with Atlassian Design System

A modern, designer-friendly React boilerplate that makes it easy for designers and product managers to create beautiful, consistent interfaces using Atlassian Design System (ADS).

## 🎨 What's Inside

### Design System & UI Components
- **Atlaskit Components** - Access to 100+ pre-built, accessible components
- **Design Tokens** - Consistent colors, spacing, typography, and animations
- **Theming Support** - Light & dark modes support

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
- Feedback components (Modals, Flags, Progress)
- Layout components (Grid, Container, Spacing)

### Design System Integration
- **Color System** - Use Atlassian's color palette and theming
- **Typography** - Consistent text styles and hierarchy
- **Spacing** - Standardized spacing scale
- **Icons** - Atlassian icon library
- **Motion** - Animations and transitions

## 📚 Resources

- [Atlaskit Component Library](https://atlassian.design/components)
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
