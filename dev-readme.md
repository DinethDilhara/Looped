# Looped — Developer Guide

## About the Project

Looped is a React Native mobile application built with Expo Router, designed for local‑first usage with a lightweight database. The project is structured for maintainability and scalability, with a modular architecture.

### Key Features

- Local database using SQLite with Drizzle ORM
- Global state management with Zustand
- Form validation and type‑safe schemas using Zod
- Logging and error monitoring using Sentry
- Modular UI components and reusable hooks

## Tech Stack

| Layer                | Technology                 |
| -------------------- | -------------------------- |
| Mobile Framework     | React Native + Expo Router |
| Database             | SQLite + Drizzle ORM       |
| State Management     | Zustand                    |
| Form Validation      | Zod                        |
| Logging / Monitoring | Sentry                     |
| Styling / Theme      | Custom theme               |
| Language             | TypeScript                 |

## Folder Structure

```text
.
├── LICENSE
├── app
│   ├── _layout.tsx          # Expo Router layout
│   └── index.tsx            # Main screen
├── app.json
├── assets                   # App icons and splash images
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash-icon.png
├── babel.config.js
├── metro.config.js
├── package-lock.json
├── package.json
├── src
│   ├── components
│   │   ├── charts
│   │   │   └── ContributionGraph.tsx   # Example chart component
│   │   └── common
│   │       └── Button.tsx               # Reusable button component
│   ├── database
│   │   ├── index.ts                     # Drizzle + SQLite connection
│   │   └── schema.ts                    # Database table definitions
│   ├── hooks
│   │   └── useHabits.ts                 # Custom hooks
│   ├── services
│   │   └── widgetService.ts             # API / business logic
│   ├── store
│   │   └── appStore.ts                  # Zustand store
│   ├── theme
│   │   └── colors.ts                    # App color palette
│   ├── types
│   │   └── habit.ts                     # TypeScript types/interfaces
│   └── utils
│       └── validations.ts               # Utility and validation functions
└── tsconfig.json
```

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/DinethDilhara/Looped.git
cd looped
```

1. Install dependencies

```bash
npm install
```

1. Start the development server

```bash
npx expo start -c
```

The `-c` flag clears the Metro bundler cache to prevent stale asset issues.

## Key Components

### Database

- `src/database/index.ts` — Initializes Drizzle ORM with SQLite
- `src/database/schema.ts` — Defines tables (e.g., users, habits)
- `src/database/actions.ts` — Contains CRUD helper functions

### State Management

- `src/store/appStore.ts` — Global state management with Zustand
  - Used to manage habit data, user preferences, and UI state

### Hooks

- `src/hooks` — Reusable hooks such as `useHabits` for fetching and manipulating data

### Validation

- Zod is used for form validation and type‑safe schemas

### Logging

- Sentry is integrated for capturing errors and monitoring application behavior

## Recommended Practices

- Keep UI components modular in `src/components`.
- Place reusable logic in `src/hooks`.
- Manage global state exclusively in `src/store` using Zustand.
- Keep all database queries and schema definitions in `src/database`.
- Validate inputs with Zod schemas before updating state or database.
- Use Sentry to capture unexpected errors in production.
