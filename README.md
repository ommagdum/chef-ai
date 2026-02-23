# Chef AI

An interactive AI-powered recipe generator built with React and Vite. Input your available ingredients and let Google's Gemini AI suggest custom recipes for you.

## Features

- 🧑‍🍳 AI-powered recipe generation using Google Gemini
- ➕ Add multiple ingredients to your collection
- 📝 Beautiful formatted recipes with Markdown support
- ⚡ Fast and responsive UI built with React 19
- 🎨 Modern styling with React

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- A Google Generative AI API key

### Installation

1. Clone the repository and navigate to the project directory:
```bash
cd chef-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up your Google API key by creating an `ai.js` configuration file with your API credentials

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Usage

1. Enter an ingredient in the input field
2. Click "+ Add ingredient" to add it to your list
3. Click "Get a recipe" to generate a recipe based on your ingredients
4. View the AI-generated recipe with formatting

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool with HMR
- **Google Generative AI** - AI recipe generation
- **React Markdown** - Recipe rendering
- **ESLint** - Code quality

## Project Structure

```
src/
├── components/
│   ├── AiRecipe.jsx       # Displays generated recipe
│   ├── Form.jsx           # Main form component
│   ├── Header.jsx         # App header
│   └── IngredientsList.jsx # Lists added ingredients
├── ai.js                  # Google Gemini API integration
├── App.jsx                # Main app component
├── App.css                # Styling
└── main.jsx               # Entry point
```
