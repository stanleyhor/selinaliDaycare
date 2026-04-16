# Selina Li Daycare Website

A modern, responsive website for Selina Li Daycare built with React Native Web and Expo. Features trilingual support (English, Traditional Chinese, Simplified Chinese), parallax scrolling effects, and cross-platform compatibility.

## Features

- **Cross-Platform**: Built with React Native Web - same codebase works on web, iOS, and Android
- **Trilingual Support**: English, Traditional Chinese (繁體中文), and Simplified Chinese (简体中文)
- **Parallax Scrolling**: Smooth parallax effects on hero and section dividers
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Bright, lively design with coral, yellow, and teal color scheme

## Tech Stack

- **Framework**: Expo SDK 54 with React Native Web
- **React**: React 19
- **Routing**: Expo Router (file-based routing)
- **i18n**: i18next + react-i18next
- **Styling**: React Native StyleSheet (no CSS frameworks)
- **Animations**: React Native Animated API

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run web version
npm run web

# Run iOS (requires macOS and Xcode)
npm run ios

# Run Android (requires Android Studio)
npm run android
```

### Development

The development server will start at `http://localhost:8081`. Press `w` to open in web browser.

## Project Structure

```
├── app/                    # Expo Router pages
│   ├── _layout.tsx        # Root layout with providers
│   ├── index.tsx          # Main home page
│   └── +html.tsx          # Custom HTML for web
├── components/            # React Native components
│   ├── Navbar.tsx         # Navigation with language switcher
│   ├── Hero.tsx           # Hero section with parallax
│   ├── About.tsx          # About section
│   ├── Programs.tsx       # Programs/services section
│   ├── Reviews.tsx        # Testimonials carousel
│   ├── Gallery.tsx        # Photo gallery grid
│   ├── Schedule.tsx       # Daily schedule table
│   ├── FAQ.tsx            # Accordion FAQ
│   ├── Contact.tsx        # Contact info and map
│   └── Footer.tsx         # Footer
├── constants/
│   ├── theme.ts           # Colors, typography, spacing
│   └── data.ts            # Static content data
├── i18n/                  # Internationalization
│   ├── index.ts           # i18n configuration
│   ├── en.json            # English translations
│   ├── zh-TW.json         # Traditional Chinese
│   └── zh-CN.json         # Simplified Chinese
└── app.json               # Expo configuration
```

## Deployment

### Deploy to Netlify

1. **Connect to Netlify**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Netlify will auto-detect the `netlify.toml` configuration

2. **Manual Deploy**:
   ```bash
   # Build for web
   npm run build:web
   
   # The dist/ folder contains the static site
   # Upload to Netlify manually or use Netlify CLI
   npx netlify deploy --prod --dir=dist
   ```

### Build Commands

- **Web Build**: `npm run build:web` → outputs to `dist/`
- **iOS Build**: Use EAS Build or Xcode
- **Android Build**: Use EAS Build or Android Studio

## Configuration

### Environment Variables

No environment variables required for basic deployment.

### Customization

1. **Colors**: Edit `constants/theme.ts`
2. **Content**: Edit `constants/data.ts` and `i18n/*.json`
3. **Contact Info**: Update `constants/data.ts` with your details

## Contact Information

- **Address**: 3587 Clifford Ct, Castro Valley, CA 94546
- **Phone**: (415) 728-1896
- **Hours**: Monday - Friday, 6:30 AM - 6:30 PM

## License

Private - All rights reserved.
