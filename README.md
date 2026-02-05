# QRBar Generator

<div align="center">
  <h3>🎯 Professional QR Code & Barcode Generator</h3>
  <p>Generate beautiful, customizable QR codes and barcodes instantly with advanced design options</p>
  
  ![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
  ![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
  ![License](https://img.shields.io/badge/License-MIT-green.svg)
</div>

---

## ✨ Features

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Elegant glass effect inspired by iOS 26
- **Dark/Light Mode** - Seamless theme switching
- **Responsive Layout** - Works perfectly on all devices
- **Plus Jakarta Sans Font** - Clean and modern typography
- **2-Column Layout** - Forms on left, sticky preview on right for better workflow
- **Real-time Preview** - See changes instantly as you customize

### 🌐 Multi-Language Support
- English (EN)
- Indonesian (ID)
- Easy to add more languages

### 📱 12 Code Types
1. **Plain Text** - Simple text messages
2. **Website URL** - Direct links to any website
3. **WiFi** - Network credentials for easy connection
4. **Email** - Pre-filled email with subject and body
5. **Phone** - Direct call links
6. **SMS** - Pre-filled text messages
7. **Social Media** - Instagram, Twitter, Facebook, TikTok, LinkedIn, YouTube
8. **Login** - Username & password (with TAB auto-fill support)
9. **vCard** - Complete contact information
10. **Location/Maps** - GPS coordinates or Google Maps address
11. **WhatsApp** - Direct WhatsApp chat with pre-filled message
12. **Payment** - Payment links or UPI format

### 🎨 Advanced QR Customization

#### Color Customization
- **QR Color** - Choose any color for QR code dots
- **Background Color** - Customize background or use transparent
- **Gradient Support** - Solid, Linear, or Radial gradients with 2-color selection

#### Pattern & Style
- **Pattern Styles:**
  - Squares (Classic)
  - Dots (Modern)
  - Rounded (Smooth)
- **Corner Styles:**
  - Square (Standard)
  - Rounded (Soft)
  - Extra Rounded (Very smooth)

#### Logo Integration
- **Preset Icons** - 12 popular brand icons with original colors:
  - Instagram, Facebook, Twitter/X, YouTube
  - WhatsApp, TikTok, LinkedIn, Gmail
  - Spotify, GitHub, Telegram, Discord
- **Custom Upload** - Upload your own logo/image
- **Logo Size Options** - Small, Medium, Large
- **Smart Selection** - Visual feedback showing selected icon

#### Frame Styles
- **No Frame** - Clean QR code only
- **Simple** - Floating text box below QR
- **Border** - White background with border and text
- **Border Black** - Black background with border and white text
- **Rounded** - White background with rounded corners
- **Rounded Black** - Black background with rounded corners
- **Custom Text** - Personalize frame text (default: "Scan me!")

### 📊 Barcode Support
- CODE128
- CODE39
- EAN13
- UPC

### 🎯 Key Capabilities
- **HD Download** - High-quality PNG export (1024x1024px for QR, 5x scale for barcode)
- **Frame-Aware Export** - Frames included in download with proper scaling
- **Phone Mockup Preview** - Samsung Galaxy S25 Ultra style preview
- **Auto-fill Login** - Special format for scanner auto-fill (username[TAB]password)
- **WhatsApp Auto-format** - Automatically converts Indonesian phone format (08xxx → 628xxx)
- **Network Access** - Access from mobile devices on same WiFi network
- **Sticky Preview** - Preview stays visible while scrolling through options

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/irfanriyanto/QRBar.git

# Navigate to project directory
cd QRBar

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at:
- Local: `http://localhost:5173`
- Network: `http://[your-ip]:5173` (accessible from mobile devices)

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📖 Usage

### Basic Workflow

1. **Select Type** - Choose from 12 different QR code types
2. **Enter Details** - Fill in your information
3. **Customize Design** - Personalize colors, patterns, logos, and frames
4. **Preview** - See real-time preview in phone mockup
5. **Download** - Get high-quality PNG file

### QR Code Customization Guide

#### Step 1: Choose Colors
```
- QR Color: Select color for QR code dots
- Background: Choose background color or enable transparent
- Gradient: Apply solid, linear, or radial gradient
```

#### Step 2: Select Pattern & Corners
```
- Pattern Style: Squares, Dots, or Rounded
- Corner Style: Square, Rounded, or Extra Rounded
```

#### Step 3: Add Logo (Optional)
```
Option A - Preset Icons:
  1. Click "Preset Icons" tab
  2. Select from 12 popular brand icons
  3. Icons show with original brand colors
  4. Selected icon highlighted with checkmark

Option B - Custom Upload:
  1. Click "Custom Upload" tab
  2. Upload your own image
  3. Preview shows with remove option
  4. Choose logo size: Small, Medium, or Large
```

#### Step 4: Apply Frame (Optional)
```
- Select frame style from 6 options
- Customize frame text (default: "Scan me!")
- Frame scales proportionally in download
```

### Login QR Code (Special Feature)

For enterprise use cases where you need to auto-fill login forms:

1. Select **Login** type
2. Enter username and password
3. The QR code will be formatted as: `username[TAB]password[ENTER]`
4. When scanned with a barcode scanner, it will:
   - Type username in the first field
   - Press TAB to move to password field
   - Type password
   - Press ENTER to submit

**Note:** Ensure your barcode scanner is configured to send TAB character (`\t`)

### WiFi QR Code

Generate WiFi QR codes that can be scanned to connect automatically:

```
Format: WIFI:T:WPA;S:NetworkName;P:Password;;
```

Supported encryption types:
- WPA/WPA2
- WEP
- None (open network)

### WhatsApp QR Code

Automatically formats Indonesian phone numbers:
- Input: `081234567890` → Output: `628123456789`
- Input: `+6281234567890` → Output: `628123456789`
- Supports pre-filled messages

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **QR Code Generation:** qrcode.react, qr-code-styling
- **Barcode Generation:** react-barcode
- **Image Export:** html2canvas
- **Styling:** Custom CSS with Glassmorphism
- **Font:** Plus Jakarta Sans

---

## 📁 Project Structure

```
QRBar/
├── public/
│   ├── qrbar-icon.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                    # Main application component
│   ├── App.css                    # Application styles
│   ├── CustomQRCode.jsx           # Advanced QR code component
│   ├── QRFrames.jsx               # Frame components
│   ├── ThemeLanguageControls.jsx  # Theme & language controls
│   ├── translations.js            # Multi-language translations
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎨 Design Philosophy

QRBar follows a minimalist design approach with focus on:

- **Monochrome Palette** - Black, white, grey, and silver for timeless elegance
- **Glassmorphism** - Frosted glass effect for modern aesthetics
- **Smooth Animations** - Subtle transitions for better UX
- **Accessibility** - High contrast and readable typography
- **User-Centric Layout** - Sticky preview for seamless customization workflow

---

## 🌍 Adding New Languages

To add a new language:

1. Open `src/translations.js`
2. Add new language object:

```javascript
export const translations = {
  // ... existing languages
  es: {
    langCode: 'ES',
    heroTitle: "Crea tu código QR en segundos",
    // ... add all translations
  }
};

export const languages = [
  // ... existing languages
  { code: 'es', name: 'Español' }
];
```

---

## 🔧 Configuration

### Network Access Configuration

The dev server is configured to accept connections from network devices:

```javascript
// vite.config.js
export default defineConfig({
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
  },
})
```

Access from mobile:
1. Find your computer's IP address
2. Open `http://[your-ip]:5173` on mobile device
3. Ensure both devices are on same WiFi network

### Customize QR Code Quality

In `src/App.jsx`, adjust the download settings:

```javascript
// For QR without frame
const qrCode = new QRCodeStyling({
  width: 1024,  // Adjust size (recommended: 512-2048)
  height: 1024,
  // ... other options
});

// For QR with frame (uses html2canvas)
const canvas = await html2canvas(qrWithFrameRef.current, {
  backgroundColor: transparentBg ? null : qrBgColor,
  scale: 3,  // Adjust quality (1-5 recommended)
  useCORS: true,
  allowTaint: true,
});
```

### Customize Frame Scaling

Frames automatically scale based on QR size. To adjust:

```javascript
// In src/QRFrames.jsx
const scale = qrSize / 240; // Base scale on 240px
const padding = Math.round(16 * scale);
const fontSize = Math.round(22 * scale);
// Adjust multipliers as needed
```

---

## 🎯 Advanced Features

### Frame System
- **Scalable Design** - Frames scale proportionally with QR size
- **Consistent Preview** - What you see is what you get
- **Custom Text** - Personalize frame text for branding
- **Professional Output** - High-quality frame rendering in downloads

### Logo System
- **Dual Mode** - Preset icons vs custom upload tracked separately
- **Smart UI** - Different interfaces for preset and custom logos
- **Visual Feedback** - Selected preset icons highlighted with checkmark
- **Brand Colors** - Preset icons display in original brand colors

### Color System
- **Transparent Background** - Option for transparent QR backgrounds
- **Gradient Engine** - Linear and radial gradients with 2-color stops
- **Color Picker** - Visual color picker with hex input
- **Real-time Update** - Colors update instantly in preview

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Irfan Riyanto**
- GitHub: [@irfanriyanto](https://github.com/irfanriyanto)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 🙏 Acknowledgments

- [qrcode.react](https://github.com/zpao/qrcode.react) - QR code generation
- [qr-code-styling](https://github.com/kozakdenys/qr-code-styling) - Advanced QR customization
- [react-barcode](https://github.com/kciter/react-barcode) - Barcode generation
- [html2canvas](https://html2canvas.hertzen.com/) - Screenshot functionality
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Beautiful typography
- [Simple Icons](https://simpleicons.org/) - Brand icons

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

## 🗺️ Roadmap

Future enhancements planned:
- [ ] More frame designs
- [ ] Animation effects for QR codes
- [ ] Batch QR code generation
- [ ] QR code analytics
- [ ] More preset icon packs
- [ ] SVG export option
- [ ] QR code templates

---

<div align="center">
  <p>Made with ❤️ by Irfan Riyanto</p>
  <p>© 2026 QRBar. All rights reserved.</p>
</div>
