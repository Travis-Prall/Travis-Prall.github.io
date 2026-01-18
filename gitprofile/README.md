# Travis Prall - Personal Portfolio

[![Website](https://img.shields.io/badge/Website-travisprall.com-blue)](https://travisprall.com)
[![GitHub](https://img.shields.io/badge/GitHub-Travis--Prall-black)](https://github.com/Travis-Prall)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Travis--Prall-blue)](https://www.linkedin.com/in/travisprall/)

A modern, responsive personal portfolio website showcasing professional experience in healthcare, research, and technology.

## 🚀 About

Travis Prall is a military veteran and experienced healthcare professional with a diverse background in research, pharmacology, clinical pathology, biology, and clinical laboratory procedures. He holds a B.S. in Animal Physiology & Behavior and a B.S. in Clinical Laboratory Science from DeVry University.

With over 17 years of experience, Travis has served as a Pharmacy Technician, Veterinary Technician, and Contract Specialist, building expertise in research, analysis, quality control, compliance enforcement, and team leadership.

## ✨ Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern React**: Built with React 19.2 and latest web technologies
- **Analytics Integration**: Google Analytics 4 and Microsoft Clarity tracking
- **Firebase Backend**: Cloud database integration for dynamic content
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Accessibility**: WCAG compliant with semantic HTML and ARIA support
- **Performance Focused**: Optimized bundle size and Core Web Vitals
- **Professional Sections**:
  - About & Bio
  - Resume & Experience
  - Skills & Technologies
  - Contact Information
  - Social Links

## 🛠️ Tech Stack

### Frontend

- **React 19.2** - Modern React with hooks and concurrent features
- **Bootstrap 5.3** - Responsive CSS framework
- **React Bootstrap** - Bootstrap components for React
- **Sass/SCSS** - Enhanced CSS preprocessing

### Backend & Services

- **Firebase 11.10** - Cloud database and hosting
- **Google Analytics 4** - Web analytics and tracking
- **Microsoft Clarity** - Session recording and heatmaps

### Development Tools

- **Create React App** - Build setup and development server
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **React Testing Library** - Component testing
- **Jest** - JavaScript testing framework

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Travis-Prall/Travis-Prall.github.io.git
   cd Travis-Prall.github.io/gitprofile
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory with your configuration:

   ```env
   REACT_APP_GA_MEASUREMENT_ID=your_ga4_measurement_id
   REACT_APP_CLARITY_PROJECT_ID=your_clarity_project_id
   ```

4. **Start development server**

   ```bash
   npm start
   ```

   The site will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🚀 Deployment

The site is configured for deployment to GitHub Pages:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**

   ```bash
   npm run deploy
   ```

   The deployment script automatically:

   - Builds the production bundle
   - Sets the correct CNAME for custom domain
   - Deploys to the `gh-pages` branch

## 📁 Project Structure

```text
gitprofile/
├── public/                 # Static assets
│   ├── index.html         # HTML template
│   ├── manifest.json      # PWA manifest
│   └── icons/             # App icons
├── src/
│   ├── components/        # React components
│   │   ├── about.jsx      # About section
│   │   ├── header.jsx     # Site header
│   │   ├── footer.jsx     # Site footer
│   │   ├── navbar.jsx     # Navigation
│   │   ├── social.jsx     # Social links
│   │   └── resume.jsx     # Resume section
│   ├── content/           # Site content data
│   │   └── siteContent.js # Profile and social data
│   ├── resume/            # Resume related files
│   ├── app.js             # Main App component
│   ├── index.js           # App entry point
│   └── firestore.js       # Firebase configuration
├── build/                 # Production build output
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Analytics Setup

1. **Google Analytics 4**
   - Create a GA4 property
   - Get your Measurement ID (G-XXXXXXXXXX)
   - Add to `.env.local` as `REACT_APP_GA_MEASUREMENT_ID`

2. **Microsoft Clarity**
   - Create a Clarity project
   - Get your Project ID
   - Add to `.env.local` as `REACT_APP_CLARITY_PROJECT_ID`

### Firebase Setup (Optional)

If using Firebase for dynamic content:

1. Create a Firebase project
2. Enable Firestore Database
3. Add your Firebase config to `src/firestore.js`

## 🤝 Contributing

While this is a personal portfolio, contributions for improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Contact

### Travis Prall

- **Email**: [profile@pathology.mozmail.com](mailto:profile@pathology.mozmail.com)
- **LinkedIn**: [linkedin.com/in/travisprall](https://www.linkedin.com/in/travisprall)
- **GitHub**: [github.com/Travis-Prall](https://github.com/Travis-Prall)
- **Website**: [travisprall.com](https://travisprall.com)

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Styled with [Bootstrap](https://getbootstrap.com/)
- Analytics by [Google Analytics](https://analytics.google.com/) and [Microsoft Clarity](https://clarity.microsoft.com/)
- Hosted on [GitHub Pages](https://pages.github.com/)
