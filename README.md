# Made-My-Day 🌟

A cross-platform React Native mobile application built with Expo for planning and managing your trips. Create, organize, and track your travel memories all in one place.

## Overview

Made-My-Day is a trip management application that allows users to:
- Create and manage trip details
- View trip information and history
- Manage user profile and preferences
- Enjoy a smooth, responsive user experience across iOS, Android, and Web platforms

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with [React Native](https://reactnative.dev)
- **Navigation**: [React Navigation](https://reactnavigation.org/) (Bottom Tabs)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: React Native components with custom theming
- **Vector Icons**: [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- **Animations**: React Native Reanimated
- **Linting**: ESLint with Expo config

## Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** (optional, but recommended)
  ```bash
  npm install -g expo-cli
  ```

For running on physical devices or emulators:
- **Android Studio** (for Android development)
- **Xcode** (for iOS development on macOS)

## Getting Started

### 1. Clone/Navigate to the Project

```bash
cd "d:\AI projects\Made-My-Day\made-my-day"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show you options to run the app on different platforms.

### 4. Run on Your Preferred Platform

Choose one of the following options:

**Web**
```bash
npm run web
# Open http://localhost:19006 in your browser
```

**Android Emulator**
```bash
npm run android
```
Requires Android Studio and an emulator instance.

**iOS Simulator** (macOS only)
```bash
npm run ios
```
Requires Xcode and the iOS simulator.

**Expo Go** (Easiest Option)
- Download the [Expo Go](https://expo.dev/go) app on your mobile device
- Scan the QR code displayed in the terminal after running `npm start`

## Project Structure

```
made-my-day/
├── app/                      # Main application code (Expo Router)
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Home screen
│   ├── create-trip.tsx      # Trip creation screen
│   └── (tabs)/              # Tab-based navigation
│       ├── _layout.tsx      # Tabs configuration
│       ├── index.tsx        # Home tab
│       ├── profile.tsx      # Profile tab
│       └── trips.tsx        # Trips tab
├── components/              # Reusable React components
│   ├── ui/                  # UI-specific components
│   └── ...                  # Other components
├── constants/               # App constants (theme, etc.)
├── hooks/                   # Custom React hooks
├── assets/                  # Static assets (images, fonts)
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── app.json                # Expo app configuration
└── eslint.config.js        # ESLint configuration
```

## Available Scripts

```bash
npm start          # Start the development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm run lint       # Run ESLint to check code quality
npm run reset-project  # Reset project to blank state
```

## Key Features

- **Tab Navigation**: Bottom tab navigation for easy access to Home, Trips, and Profile
- **Trip Management**: Create and view trip details
- **Responsive Design**: Works seamlessly on mobile and web
- **Dark/Light Theme**: Supports system color scheme preferences
- **Type Safety**: Built with TypeScript for better development experience

## Theme & Styling

The app includes a theming system:
- **Light and Dark themes** automatically based on system preferences
- Theme colors defined in `constants/theme.ts`
- Custom hooks for color scheme detection (`hooks/use-color-scheme.ts`)

## Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json  # On macOS/Linux
rmdir /s /q node_modules & del package-lock.json  # On Windows
npm install
npm start
```

### Metro bundler issues
```bash
npx expo start --clear
```

### Port already in use
The app uses ports 8081 (Metro) and 19006 (web). If you encounter port conflicts, specify a different one:
```bash
expo start --port 3000
```

## Development Tips

- **Hot Reload**: Changes to files are automatically reflected in the app
- **Error Overlay**: Development errors appear as overlays in the app
- **Debugger**: Use React Developer Tools for debugging
- **Logging**: Use `console.log()` to debug - output appears in the terminal

## Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/docs/getting-started)
- [React Native API Reference](https://reactnative.dev/docs/apis)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Contributing

When making changes:
1. Ensure code passes linting: `npm run lint`
2. Follow the existing project structure
3. Use TypeScript for type safety
4. Test on at least one platform before committing

## License

This project is private. All rights reserved.

---

**Happy Coding! 🚀**
