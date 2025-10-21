# 🎬 Moviepedia

Moviepedia is a modern and responsive web application built with **React** and **Vite** that allows users to search, explore, and get detailed information about movies. It fetches real-time data from an external movie API and presents it in a sleek, user-friendly interface.

---

## 🚀 Features

- 🔎 **Movie Search:** Search any movie by title in real time.  
- 🧠 **Detailed Info:** View ratings, plot, cast, and release details.  
- 🌙 **Dark Mode:** Smooth toggle between light and dark themes.  
- ⚡ **Blazing Fast:** Powered by Vite for extremely fast build and development.  
- 💅 **Responsive Design:** Optimized for both desktop and mobile experiences.  

---

## 🛠️ Tech Stack

| Category | Tools and Frameworks |
|-----------|----------------------|
| Frontend | React, Vite |
| Styling | CSS / TailwindCSS (if applicable) |
| Data Fetching | Fetch API / Axios |
| Linting | ESLint |
| Build Tool | Vite |

---

## 📦 Installation

To run this project locally, make sure Node.js (v16 or higher) is installed.

Clone the repository
git clone https://github.com/Ardinox/Moviepedia.git

Navigate into the project directory
cd Moviepedia

Install dependencies
npm install

Start the development server
npm run dev


Open your browser and visit:  
[http://localhost:5173](http://localhost:5173)

---

## 🔑 Environment Variables

To use the movie API (like OMDb or TMDB), create a `.env` file in the root and add:

VITE_MOVIE_API_KEY=your_api_key_here
VITE_API_URL=https://api.themoviedb.org/3

*(Replace with your actual key and endpoint.)*

---

## 🧩 Folder Structure
```
Moviepedia/
├── public/                     # Static assets like index.html, favicon, images
├── src/                        # Source files
│   ├── assets/                 # Images, fonts, icons used in the app
│   ├── components/             # Reusable React components (buttons, cards, modals)
│   ├── pages/                  # Page-level components for routing (Home, MovieDetails)
│   ├── hooks/                  # Custom React hooks for state management or API calls
│   ├── utils/                  # Utility functions/helpers
│   ├── styles/                 # CSS / styling files
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point for React and Vite
├── .eslintrc.js                # ESLint configuration file
├── package.json                # Project metadata and dependencies
├── vite.config.js              # Vite build tool configuration
└── README.md                   # Project overview and instructions
```
---

## ⚙️ Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server |
| `npm run build` | Build production bundle |
| `npm run lint` | Run ESLint checks |
| `npm run preview` | Preview production build |

---

## 🧠 Future Improvements

- Add user authentication and favorites list  
- Integrate pagination and advanced filtering  
- Add trailer playback using YouTube embed API  
- Migrate to TypeScript for better type safety  

---

## 📸 Screenshots

*(Add screenshots or GIFs here once your UI is ready)*  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a pull request or issue to discuss improvements.

---

## 💬 Author

Developed with ❤️ by [Ardinox](https://github.com/Ardinox)

