## The challenge:

---

iCatchEmAll PokeDex

---

Create Pokemon Trainers and "capture"/favorite pokemon from the Pokedex of your region.

Upon App Launch, users have the ability to create a new Pokemon Trainer or choose from one of the previously created Trainers.

After finishing the Onboarding Flow for creating a Pokemon Trainer users are shown:

- A PokeDex Tab where they can search for Pokemon in their region
- Caught Tab where they can view captured/favorited Pokemon
- Profile Details Tab where they can "logout" to pick or create a new Pokemon Trainer

The Pokemon listed on the PokeDex Tab, as well as the Caught Tab, have an accompanied Pokemon Details Modal available with more info when pressed

Data is stored in AsyncStorage so deleting the app off your device, or restarting the development client, may result in a loss of Pokemon Trainer data ( Yikes! )

## 🚀 Up and Running

### **Prerequisites**
- **Node.js** (18.x or higher) - JavaScript runtime
- **Yarn** - Package manager (recommended over npm)
- **Expo CLI** - Development tools
- **iOS Simulator** (macOS) or **Android Studio** - Device emulation

### **Installation**
```bash
# Clone the repository
git clone <repository-url>
cd livefront-challenge

# Install dependencies
yarn

# Install Expo CLI globally (if not already installed)
yarn add -G @expo/cli
```

### **Development Setup**
```bash
# Run on iOS simulator (macOS only)
npx expo run:ios -d

# Run on Android emulator
npx expo run:android -d

# Restarts Development Server
npx expo start
```

### **Testing**
```bash
# Run tests in watch mode
yarn test

# Run tests once (CI mode)
yarn test:ci
```

### **Code Quality**
```bash
# Lint code
yarn lint

# Fix linting issues
yarn lint:fix

# Format code with Prettier
yarn prettier:fix
```

These run automatically before pushing to remote branches.

## 🛠️ Technologies Used

### **Core Framework**
- **React Native** (0.79.5) - Cross-platform mobile app development
- **React** (19.0.0) - UI library for building user interfaces
- **Expo** (~53.0.20) - Development platform and toolchain

### **Navigation**
- **React Navigation** (7.1.14) - Navigation library for React Native
- **@react-navigation/bottom-tabs** (7.4.4) - Bottom tab navigation
- **@react-navigation/native-stack** (7.3.21) - Stack navigation

### **State Management**
- **Zustand** (5.0.6) - Lightweight state management
- **@react-native-async-storage/async-storage** (2.2.0) - Local data persistence

### **Data Fetching & API**
- **Apollo Client** (3.13.8) - GraphQL client
- **GraphQL** (16.11.0) - Query language for APIs

### **Development Tools**
- **TypeScript** (~5.8.3) - Type-safe JavaScript
- **ESLint** (9.31.0) - Code linting and formatting
- **Prettier** (3.6.2) - Code formatter
- **Husky** (9.1.7) - Git hooks for pre-push quality checks
- **Lint-staged** (16.1.2) - Run linters on staged files

### **Testing**
- **Jest** (~29.7.0) - Testing framework
- **Jest Expo** (~53.0.9) - Expo-specific Jest configuration
