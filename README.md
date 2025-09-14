# OSNEPAL Frontend

A modern, multilingual frontend application for Open Source Nepal built with Next.js, TypeScript, and Tailwind CSS.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.0 or higher)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/osnepal/frontend.git
cd frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Icons**: Lucide React
- **Internationalization**: Custom translation system

## 📁 Project Structure

```
frontend/
├── .github/               # GitHub templates and workflows
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   ├── PULL_REQUEST_TEMPLATE/ # PR templates
│   └── workflows/        # CI/CD workflows
├── .husky/               # Git hooks
├── app/                  # Next.js App Router
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with providers
│   └── page.tsx         # Home page
├── components/           # Reusable components
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Main navigation component
│   ├── LanguageDropdown.tsx # Language selector
│   └── ThemeButton.tsx  # Theme toggle button
├── lib/                 # Utility functions and configurations
│   ├── contexts/        # React contexts
│   ├── stores/          # Zustand stores
│   ├── translations/    # Translation files
│   └── utils.ts         # Utility functions
├── public/              # Static assets
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── .gitignore           # Git ignore rules
├── jest.config.js       # Jest configuration
├── jest.setup.js        # Jest setup file
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── env.example          # Environment variables template
├── LICENSE              # MIT License
├── README.md            # Project documentation
├── CONTRIBUTING.md      # Contribution guidelines
└── CHANGELOG.md         # Changelog
```

## 🌍 Adding New Languages

### 1. Create Translation File

Create a new file in `lib/translations/` directory:

```typescript
// lib/translations/hi.ts
export const hi = {
  hello: "ओएसनेपाल से नमस्ते",
  welcome: "ओएसनेपाल में आपका स्वागत है",
  // ... add all translation keys
} as const;
```

### 2. Update Translation Index

Add your language to `lib/translations/index.ts`:

```typescript
import { hi } from "./hi";

export const translations = {
  en,
  ne,
  hi, // Add your language here
} as const;
```

### 3. Add Language Metadata

Add language metadata to the `languageMetadata` object:

```typescript
export const languageMetadata: Record<
  Language,
  { name: string; nativeName: string; flag: string }
> = {
  // ... existing languages
  hi: { name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
};
```

## 🎨 Adding New Components

### 1. Create Component File

```typescript
// components/MyComponent.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/contexts/LanguageContext";

export default function MyComponent() {
  const { t } = useLanguage();

  return (
    <div>
      <h2>{t('myComponentTitle')}</h2>
      <Button>{t('myComponentButton')}</Button>
    </div>
  );
}
```

### 2. Add Translations

Add the new translation keys to all language files:

```typescript
// lib/translations/en.ts
export const en = {
  // ... existing translations
  myComponentTitle: "My Component",
  myComponentButton: "Click Me",
} as const;
```

## 🎨 Styling Guidelines

### Using Tailwind CSS

```tsx
// Use Tailwind classes for styling
<div className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-md">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
</div>
```

### Using shadcn/ui Components

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Use shadcn components for consistency
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="outline">Action</Button>
  </CardContent>
</Card>;
```

### CSS Variables

Use CSS variables for theming:

```css
.my-component {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

## 🔧 State Management

### Using Zustand Store

```typescript
// lib/stores/myStore.ts
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface MyStoreProps {
  myValue: string;
  setMyValue: (value: string) => void;
}

export const useMyStore = create<MyStoreProps>()(
  devtools(
    persist(
      (set) => ({
        myValue: "",
        setMyValue: (value: string) => set({ myValue: value }),
      }),
      {
        name: "my-store",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
```

### Using the Store

```tsx
import { useMyStore } from "@/lib/stores/myStore";

export default function MyComponent() {
  const { myValue, setMyValue } = useMyStore();

  return (
    <div>
      <p>{myValue}</p>
      <button onClick={() => setMyValue("New Value")}>Update Value</button>
    </div>
  );
}
```

## 🧪 Testing

### Running Tests

```bash
npm run test
# or
yarn test
# or
pnpm test
```

### Writing Tests

```typescript
// __tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 🚀 Building for Production

### Build the Application

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 📝 Code Style

### TypeScript Guidelines

- Use TypeScript for all new files
- Define proper interfaces for props and state
- Use type assertions sparingly
- Prefer `const` over `let` when possible

### Component Guidelines

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types
- Add JSDoc comments for complex functions

### File Naming

- Use PascalCase for component files: `MyComponent.tsx`
- Use camelCase for utility files: `myUtility.ts`
- Use kebab-case for CSS files: `my-styles.css`

## 🤝 Contributing

### 1. Fork the Repository

Fork the repository on GitHub and clone your fork locally.

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

- Write clean, readable code
- Add tests for new features
- Update documentation as needed
- Follow the existing code style

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
```

Use conventional commit messages:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Create a pull request on GitHub with a clear description of your changes.

## 🐛 Reporting Issues

When reporting issues, please include:

1. **Description** - Clear description of the issue
2. **Steps to Reproduce** - How to reproduce the issue
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Browser, OS, Node.js version
6. **Screenshots** - If applicable

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) for the React framework
- [Lucide](https://lucide.dev/) for the icon library

## 📞 Contact

- **Discord**: [@osnepal](https://discord.gg/GQGFKDAQ9b)
- **GitHub**: [@osnepal](https://github.com/osnepal)

---

**Happy Coding! 🚀**
