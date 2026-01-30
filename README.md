# Jake's Portfolio Website

A modern, responsive portfolio website showcasing my skills, favorite music, games, and contact information. Built with HTML5 and CSS3, featuring smooth animations and mobile-friendly design.

## 🌐 Live Demo

Visit the live site: [https://xenzoro.github.io/XENSITE/]

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Responsive Design](#responsive-design)
- [Installation](#installation)
- [Customization](#customization)
- [Browser Compatibility](#browser-compatibility)
- [License](#license)
- [Contact](#contact)

## 📖 About

This portfolio website serves as a digital introduction to Jacob Martinez, an aspiring Software Engineer studying Computer Science and Information Systems at UNLV. The site showcases technical skills, personal interests in music and gaming, and provides easy access to professional profiles.

## ✨ Features

- **Sticky Navigation Bar**: Easy navigation between sections that stays visible while scrolling
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Cards**: Hover effects on all card elements for better user engagement
- **External Links**: Direct links to YouTube music videos and social media profiles
- **Modern UI**: Clean design with a blue/dark gray color scheme
- **Font Awesome Icons**: Professional-looking skill icons for programming languages
- **Smooth Transitions**: CSS animations for interactive elements

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox for layouts
  - CSS Grid concepts
  - Media queries for responsive design
  - CSS transitions and transforms for animations
  - Custom properties for consistent styling
- **Font Awesome**: Icon library for skill badges
- **Google Fonts**: Nunito Sans and Roboto Mono fonts
- **External CDNs**: 
  - Font Awesome Kit
  - Devicon for GitHub/LinkedIn icons

## 📁 Project Structure

```
UNLV-WEB-DEV-281/
│
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── README.md           # Project documentation
│
└── icons/              # Image assets
    ├── selfie.jpg      # Profile picture
    ├── c++.png         # C++ logo
    ├── poh.jpg         # Album covers (music section)
    ├── bleue.jpg
    ├── prune.jpg
    ├── woopie.jpg
    ├── day1.jpg
    ├── howmuchis.jpg
    ├── outside.jpg
    ├── roommates.jpg
    ├── lbp.jpg         # Game covers
    ├── minecraft.png
    ├── terraria.webp
    ├── destiny.png
    ├── dao.png
    └── masseffect.jpg
```

## 📄 Sections

### 1. Navigation Bar
- Fixed position navbar with smooth scroll links
- Responsive design that adapts to smaller screens
- Hover effects on navigation buttons

### 2. Hero Section
- Circular profile picture with border
- Welcome message and introduction
- Responsive typography using `clamp()` for fluid font sizing

### 3. About Me
- Personal biography in a styled content box
- Information about education and interests
- Dark theme box for contrast

### 4. Skills
- Programming languages showcase (C++, Java, HTML, CSS, JavaScript)
- Mix of image icons and Font Awesome icons
- Interactive card hover effects

### 5. Favorite Songs
- 8 clickable music cards linking to YouTube
- Album artwork with song titles and artists
- Cards include:
  - Pursuit of Happiness - Kid Cudi
  - Bleue - Wale The Sage
  - Prune You Talk Funny - Gus Dapperton
  - Woopie - Still Woozy
  - Day1 - HONNE
  - How Much Is W***? - Dominic Fike
  - Outside - Calvin Harris
  - Roommates - Malcom Todd

### 6. Favorite Games
- 6 game showcase cards with cover art
- Platform and release year information
- Games include:
  - Little Big Planet 2
  - Minecraft
  - Terraria
  - Destiny 2
  - Dragon Age Origins
  - Mass Effect Legendary Edition

### 7. Contact
- GitHub and LinkedIn profile links
- Icon-based design with hover effects
- Professional networking section

## 📱 Responsive Design

The website features two main breakpoints:

### Medium Screens (max-width: 1000px)
- Auto heights for sections to prevent overflow
- Reduced header margins
- Flexible content boxes

### Small Screens (max-width: 600px)
- Scaled-down card images (72px × 72px)
- Compact navbar with smaller text
- Adjusted profile picture sizing
- Reduced spacing throughout

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Xenzoro/UNLV-WEB-DEV-281.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd UNLV-WEB-DEV-281
   ```

3. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

4. **View the site**:
   - Open `http://localhost:8000` in your browser

## 🎨 Customization

### Colors
The main color palette is defined throughout the CSS:
- **Primary Blue**: `#27add8`
- **Dark Gray**: `#28282b`
- **Card Blue**: `#28b1d3`
- **Light Text**: `#c3d6dd`
- **Black**: `#090808`

### Adding New Skills
To add a new skill card:
```html
<div class="card">
    <i class="fa-brands fa-[icon-name] fa-7x"></i>
    <h3> Skill Name </h3>
</div>
```

### Adding New Songs/Games
Follow the existing card structure in the respective sections with your own images and information.

## 🌐 Browser Compatibility

Tested and compatible with:
- Google Chrome (recommended)
- Mozilla Firefox
- Microsoft Edge
- Safari
- Opera

**Note**: Modern browser required for full CSS3 features (flexbox, transitions, clamp()).

## 📜 License

This project is open source and available for personal and educational use.

## 📧 Contact

**Jacob Martinez**

- **GitHub**: [@Xenzoro](https://github.com/Xenzoro)
- **LinkedIn**: [jacobmartinii](https://www.linkedin.com/in/jacobmartinii/)
- **Portfolio**: [View Live Site]

---

### 🙏 Acknowledgments

- Font Awesome for the icon library
- Google Fonts for typography
- Devicon for GitHub/LinkedIn icons
- UNLV for educational support

---

**Last Updated**: January 2026

*Built with ❤️ by Jacob Martinez*
