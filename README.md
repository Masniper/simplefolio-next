# Simplefolio-Next [LIVE DEMO](https://masniper.github.io/simplefolio-next/)

A modern, customizable, and lightweight portfolio template built with **Next.js** and **TypeScript**. This project is inspired by [Simplefolio](https://github.com/cobiwave/simplefolio) and reimagined with enhanced features, scalable structure, and dynamic content management.

## 🚀 Features

- **Next.js Framework**: Built using the latest features of Next.js for server-side rendering and static site generation.
- **TypeScript Support**: Ensures type safety and better development experience.
- **Dynamic Content Management**: All portfolio data is stored in a JSON file for easy updates and maintenance.
- **Theme Selection**: Choose from pre-defined themes or add your own using a theme palette.
- **Responsive Design**: Optimized for all devices, from desktops to mobile screens.
- **Animations**: Integrated `scrollReveal` and tilt effects for a modern and interactive UI.
- **SCSS Styling**: Retains the original styling structure with modular SCSS for flexibility.
- **SEO Friendly**: Metadata dynamically updates for better search engine visibility.
- **Customizable Footer**: Easily manage social links, GitHub buttons, and copyright details.

## 📂 Folder Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # Reusable React components
├── constants/              # JSON data and configuration files
├── libs/                   # Custom utility libraries (e.g., animations)
├── styles/                 # SCSS stylesheets
├── public/                 # Static assets (e.g., images, PDFs)
└── pages/                  # Next.js pages
```

## 🎨 Selectable Themes

Choose from a variety of pre-defined themes in `src/styles/theme.scss` or add your own:

- **Pastel Blue**
- **Pastel Green**
- **Pastel Purple**
- **Pastel Yellow**
- **Pastel Orange**
- **Pastel Pink**
- **Pastel Mint**
- **Pastel Lavender**
- **Pastel Red**
- **Pastel Aqua**
- **Pastel Gray**
- **Pastel Sunset**
- **Vintage Pastel**
- **Soft Tropical**
- **Earthy Pastel**
- **Modern Neutral**
- **Romantic Pastel**
- **Calming Sea**
- **Peachy Pastel**

To select a theme, update the `Theme` field in your JSON data:

```json
{
  "Theme": "pastel-sunset",
  ...
}
```

To add a new theme, extend the `theme.scss` file:

```scss
[data-theme="your-custom-theme"] {
  --primary-color: #yourPrimaryColor;
  --secondary-color: #yourSecondaryColor;
}

Note: To preview all themes and enable dynamic theme switching, you must uncomment the Header component in app/page.tsx. The Header provides a dropdown menu for theme selection and displays the current theme.
```

## ✨ Customization

1. **Edit Portfolio Data**:  
   Update `src/constants/userData.json` to modify portfolio content (e.g., hero section, about section, projects, contact info).

2. **Manage Social Links**:  
   Add or remove links in the `socialLinks` array under the `footer` section of `userData.json`.

3. **Manage GitHub Buttons**:  
   Edit the `githubButtons` array under the `footer` section to add, remove, or customize buttons.

4. **Customize Styles**:  
   Modify SCSS files in `src/styles/` for advanced styling.

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or later)
- Yarn or npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/masniper/simplefolio-next.git
   ```
2. Navigate to the project folder:
   ```bash
   cd simplefolio-next
   ```
3. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
4. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

## 🌟 Inspiration

This project is inspired by [Simplefolio](https://github.com/cobiwave/simplefolio) and enhanced with modern tools like Next.js, TypeScript, and SCSS for performance, scalability, and customization.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit pull requests.

## 📧 Contact

If you have any questions or suggestions, feel free to contact me via my GitHub profile: [masniper](https://github.com/masniper).

---

### 🔗 Connect with Me
- [GitHub](https://github.com/masniper)
