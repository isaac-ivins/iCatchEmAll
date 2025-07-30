# iCatchEmAll PokeDex

> **Catch 'em all!** Create Pokemon Trainers and capture your favorite Pokemon from the Pokedex of your region.

---

## About the App

Welcome to **iCatchEmAll PokeDex** ! 

Upon launching the app, you can:
- **Create a new Pokemon Trainer** with your own unique identity
- **Choose from existing Trainers** to continue your journey
- **Complete the onboarding flow** to set up your trainer profile
- **Explore the PokeDex Tab** to search for Pokemon in your Generation
- **View your Caught Pokemon** in a dedicated space

> **Note:** Data is stored locally using AsyncStorage. Deleting the app or restarting the development client may result in loss of your Pokemon Trainer data. *Yikes!*

---

### **Prerequisites**
- **Node.js** (18.x or higher) - JavaScript runtime
- **Yarn** - Package manager (recommended over npm)
- **Expo CLI** - Development tools
- **iOS Simulator** (macOS) or **Android Studio** - Device emulation

### **Environment Setup Links**
- https://reactnative.dev/docs/running-on-device
- https://reactnative.dev/docs/set-up-your-environment

### **PokeAPI Links**
- **API Docs** - https://pokeapi.co/docs/graphql#v1beta2
- **GraphQL Console** - https://graphql.pokeapi.co/v1beta2/console

### **Quick Setup**
```bash
# Clone the repository
git clone <repository-url>
cd livefront-challenge

# Install dependencies
yarn

# Install Expo CLI globally (if not already installed)
yarn add -G @expo/cli
```

### **Development Commands**
```bash
# Run on iOS simulator (macOS only)
npx expo run:ios -d

# Run on Android emulator
npx expo run:android -d

# Start development server
npx expo start
```

### **Testing & Quality**
```bash
# Run tests in watch mode
yarn test

# Run tests once (CI mode)
yarn test:ci

# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code with Prettier
yarn prettier:fix
```

### **Git Hooks**
The project uses **Husky** for automated quality checks before pushing:

---

## Tech Stack

### **Core Framework**
- **React Native** (0.79.5)
- **React** (19.0.0)
- **Expo** (~53.0.20)

### **Navigation**
- **React Navigation** (7.1.14) - Navigation library for React Native
- **@react-navigation/bottom-tabs** (7.4.4) - Bottom tab navigation
- **@react-navigation/native-stack** (7.3.21) - Stack navigation

### **State Management**
- **Zustand** (5.0.6)
- **@react-native-async-storage/async-storage** (2.2.0) - Local data persistence

### **Data Fetching & API**
- **Apollo Client** (3.13.8) - GraphQL client for API
- **GraphQL** (16.11.0) - Query language
- **PokeAPI** - https://graphql.pokeapi.co/v1beta2/console

### **Development Tools**
- **TypeScript** (~5.8.3)
- **ESLint** (9.31.0)
- **Prettier** (3.6.2)
- **Husky** (9.1.7) - Git hooks for pre-push quality checks
- **Lint-staged** (16.1.2) - Run linters on staged files

### **Testing**
- **Jest** (~29.7.0)
- **Jest Expo** (~53.0.9) - Expo-specific Jest configuration

---

**Happy Pokemon hunting!**
