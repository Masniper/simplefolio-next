
# Simplefolio-Next

A modern, customizable, and lightweight portfolio template built with **Next.js** and **TypeScript**. This project is inspired by [Simplefolio](https://github.com/cobiwave/simplefolio) and reimagined with enhanced features, a scalable structure, and dynamic content management.

## 🚀 Features

- **Next.js Framework:** Built using the latest features of Next.js for server-side rendering and static site generation.
- **TypeScript Support:** Ensures type safety and better development experience.
- **Dynamic Content Management:** All portfolio data is stored in a JSON file for easy updates and maintenance.
- **Responsive Design:** Optimized for all devices, from desktops to mobile screens.
- **Animations:** Integrated `scrollReveal` and tilt effects for a modern and interactive UI.
- **SCSS Styling:** Retains the original styling structure with modular SCSS for flexibility.
- **SEO Friendly:** Metadata dynamically updates for better search engine visibility.

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

## ✨ Customization

1. **Edit Portfolio Data:**
   Update `src/constants/userData.json` to modify portfolio content, such as metadata, hero section, about section, projects, contact info, and footer.

2. **Change Styles:**
   Modify SCSS files in `src/styles/` to customize the look and feel of the portfolio.

3. **Add or Remove Sections:**
   Edit the `sections` array in `src/app/page.tsx` to add or remove sections dynamically.

## 🌟 Inspiration

This project was inspired by [Simplefolio](https://github.com/cobiwave/simplefolio), a clean and minimal portfolio template. I built this version with modern tools like Next.js, TypeScript, and SCSS to enhance performance, scalability, and customization.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork this repository and submit pull requests.

## 📧 Contact

If you have any questions or suggestions, feel free to contact me via my GitHub profile: [masniper](https://github.com/masniper).

---

### 🔗 Connect with Me
- [GitHub](https://github.com/masniper)
