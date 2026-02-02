# QRBar Generator

<div align="center">
  <h3>🎯 Professional QR Code & Barcode Generator</h3>
  <p>Generate beautiful QR codes and barcodes instantly with multiple data types support</p>
  
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

### 🌐 Multi-Language Support
- English (EN)
- Indonesian (ID)
- Easy to add more languages

### 📱 9 QR Code Types
1. **Plain Text** - Simple text messages
2. **Website URL** - Direct links to any website
3. **WiFi** - Network credentials for easy connection
4. **Email** - Pre-filled email with subject and body
5. **Phone** - Direct call links
6. **SMS** - Pre-filled text messages
7. **Social Media** - Instagram, Twitter, Facebook, TikTok, LinkedIn, YouTube
8. **Login** - Username & password (with TAB auto-fill support)
9. **vCard** - Complete contact information

### 📊 Barcode Support
- CODE128
- CODE39
- EAN13
- UPC

### 🎯 Key Capabilities
- **HD Download** - High-quality PNG export (512px, 5x scale)
- **Real-time Preview** - See your QR code as you type
- **Auto-fill Login** - Special format for scanner auto-fill (username[TAB]password)
- **Clean Export** - Download contains only QR/Barcode without UI elements

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

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📖 Usage

### Basic Usage

1. **Select Type** - Choose from 9 different QR code types
2. **Enter Details** - Fill in your information
3. **Preview** - See real-time preview of your QR code
4. **Download** - Get high-quality PNG file

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

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **QR Code Generation:** qrcode.react
- **Barcode Generation:** react-barcode
- **Image Export:** html2canvas
- **Styling:** Custom CSS with Glassmorphism
- **Font:** Plus Jakarta Sans

---

## 📁 Project Structure

```
QRBar/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx              # Main application component
│   ├── App.css              # Application styles
│   ├── ThemeLanguageControls.jsx  # Theme & language controls
│   ├── translations.js      # Multi-language translations
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
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

### Customize QR Code Quality

In `src/App.jsx`, adjust the download settings:

```javascript
const canvas = await html2canvas(downloadRef.current, {
  backgroundColor: '#ffffff',
  scale: 5,  // Adjust quality (1-10)
  useCORS: true,
  allowTaint: true,
  logging: false
});
```

### Customize QR Code Size

```javascript
<QRCodeCanvas
  value={generateData()}
  size={512}  // Adjust size in pixels
  level="H"   // Error correction: L, M, Q, H
  includeMargin={true}
/>
```

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
- [react-barcode](https://github.com/kciter/react-barcode) - Barcode generation
- [html2canvas](https://html2canvas.hertzen.com/) - Screenshot functionality
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) - Beautiful typography

---

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

<div align="center">
  <p>Made with ❤️ by Irfan Riyanto</p>
  <p>© 2026 QRBar. All rights reserved.</p>
</div>
