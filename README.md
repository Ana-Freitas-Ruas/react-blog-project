# 📝 React Blog Project

A modern and responsive blog built with React, offering a complete experience for creating and consuming content. This project demonstrates frontend best practices with React, including routing, reusable components, and responsive design.

## 🚀 Features

### ✨ Key Features

- **📱 Responsive Design**: Adaptable interface for desktop, tablet, and mobile
- **🔐 Authentication Flow**: Login and registration pages
- **✍️ Post Creation**: Intuitive interface to write and publish articles
- **📖 Post Reading**: Individual post view with optimized layout
- **👤 User Profile**: Personal settings and account management
- **🧭 Easy Navigation**: Top menu with links to all sections
- **📱 Social Links**: Social media icons for sharing or brand presence

### 🎯 Available Pages

- **Home (/)**: Main page showing a list of featured posts
- **Login (/login)**: Existing user authentication page
- **Register (/register)**: New user signup page
- **Write (/write)**: Create and publish a new post
- **Settings (/settings)**: User profile and settings management
- **Single Post (/post/:id)**: Full single post view

## 🏗️ Project Structure

```
blog-project/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── components/         # Reusable components
│   │   ├── header/         # Page header
│   │   │   ├── Header.jsx
│   │   │   └── header.css
│   │   ├── topBar/         # Top navigation bar
│   │   │   ├── TopBar.jsx
│   │   │   └── topBar.css
│   │   ├── sidebar/        # Sidebar with author info
│   │   │   ├── Sidebar.jsx
│   │   │   └── sidebar.css
│   │   ├── singlePost/     # Single post component
│   │   │   ├── SinglePost.jsx
│   │   │   └── singlePost.css
│   │   ├── write/          # Post creation form
│   │   │   ├── Write.jsx
│   │   │   └── write.css
│   │   └── post/           # Post preview component
│   │       ├── Post.jsx
│   │       └── post.css
│   ├── pages/              # Application pages
│   │   ├── home/           # Home page
│   │   │   ├── Home.jsx
│   │   │   └── home.css
│   │   ├── login/          # Login page
│   │   │   ├── Login.jsx
│   │   │   └── login.css
│   │   ├── register/       # Register page
│   │   │   ├── Register.jsx
│   │   │   └── register.css
│   │   ├── settings/       # Settings page
│   │   │   ├── Settings.jsx
│   │   │   └── settings.css
│   │   ├── single/         # Single post page
│   │   │   ├── Single.jsx
│   │   │   └── single.css
│   │   └── posts/          # Posts list page
│   │       ├── Posts.jsx
│   │       └── posts.css
│   ├── App.js              # Main application component
│   ├── App.css             # Global styles
│   └── index.js            # Application entry point
├── package.json            # Dependencies and scripts
├── README.md               # Project documentation
└── .gitignore             # Files ignored by Git
```

## 🛠️ Technologies Used

### Frontend

- **React 19.2.5**: JavaScript library for building UI
- **React Router DOM 7.15.1**: Routing for SPA navigation
- **React DOM 19.2.5**: React renderer for the DOM

### Development and Testing

- **Create React App**: Build and development toolchain
- **Testing Library**: React testing utilities
- **Jest**: JavaScript test framework
- **ESLint**: Code linting and quality checks

### Styles and UI

- **CSS Modules**: Component-based styles
- **Font Awesome**: Vector icons
- **Google Fonts**: Custom typography

## 📋 Prerequisites

Before getting started, make sure you have installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (package managers)
- **Git** (version control)

## 🚀 Installation and Running

### 1. Clone the repository

```bash
git clone https://github.com/Ana-Freitas-Ruas/react-blog-project.git
cd react-blog-project
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the project in development mode

```bash
npm start
# or
yarn start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Create a production build

```bash
npm run build
# or
yarn build
```

## 🧪 Tests

### Run all tests

```bash
npm test
# or
yarn test
```

### Run tests in watch mode

```bash
npm test -- --watchAll=false
```

### Run test coverage

```bash
npm test -- --coverage
```

## 🎨 Customization

### Styles

Each component has its own CSS file in the same folder. To customize:

1. Find the `.css` file for the component you want
2. Edit the class styles as needed
3. Changes will refresh automatically with hot reload

### Components

- **Header**: Customize the blog title and subtitle
- **TopBar**: Add or remove navigation links
- **Sidebar**: Update categories and author information
- **Posts**: Change the post list layout

## 🔧 Available Scripts

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm start`     | Starts the development server             |
| `npm run build` | Creates an optimized production build     |
| `npm test`      | Runs the test suite                       |
| `npm run eject` | Removes build dependencies (irreversible) |

## 🌐 Deployment

### Netlify

1. Run `npm run build`
2. Upload the `build/` folder to Netlify
3. Configure the domain (optional)

### Vercel

1. Connect your repository to Vercel
2. Set the build command to `npm run build`
3. Automatic deployment will run

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://your-username.github.io/react-blog-project",
   "scripts": {
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 🤝 Contribution

Contributions are welcome! To contribute:

1. **Fork** the project
2. Create a **new branch** for your feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. Open a **Pull Request**

### Contribution Guidelines

- Keep code clean and well documented
- Add tests for new features
- Follow existing naming conventions
- Update documentation when needed

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👥 Author

**Ana Ruas**

- Email: anaruas.professional@outlook.com
- GitHub: [@Ana-Freitas-Ruas](https://github.com/Ana-Freitas-Ruas)

## 🙏 Credits

- [Create React App](https://github.com/facebook/create-react-app) - Build tool
- [React Router](https://reactrouter.com/) - SPA routing
- [Pexels](https://www.pexels.com/) - Example images
- [Font Awesome](https://fontawesome.com/) - Icons
- [Lama Dev](https://www.youtube.com/@LamaDev) - Tutorial used as the base for this project

---

⭐ **Give this project a star if it helped you!**
