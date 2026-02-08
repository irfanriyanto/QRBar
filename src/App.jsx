import { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Barcode from 'react-barcode';
import html2canvas from 'html2canvas';
import { translations, languages } from './translations';
import { ThemeLanguageControls } from './ThemeLanguageControls';
import CustomQRCode from './CustomQRCode';
import './App.css';

function App() {
  const [showGenerator, setShowGenerator] = useState(false);
  const [selectedType, setSelectedType] = useState('text');
  const [codeFormat, setCodeFormat] = useState('qr');
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');
  
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [wifiSSID, setWifiSSID] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [wifiEncryption, setWifiEncryption] = useState('WPA');
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [phone, setPhone] = useState('');
  const [smsNumber, setSmsNumber] = useState('');
  const [smsMessage, setSmsMessage] = useState('');
  const [socialPlatform, setSocialPlatform] = useState('instagram');
  const [socialUsername, setSocialUsername] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [vcardName, setVcardName] = useState('');
  const [vcardPhone, setVcardPhone] = useState('');
  const [vcardEmail, setVcardEmail] = useState('');
  const [vcardOrg, setVcardOrg] = useState('');
  const [locationType, setLocationType] = useState('coordinates');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationAddress, setLocationAddress] = useState('');
  const [waPhone, setWaPhone] = useState('');
  const [waMessage, setWaMessage] = useState('');
  const [paymentType, setPaymentType] = useState('link');
  const [paymentLink, setPaymentLink] = useState('');
  const [upiId, setUpiId] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentNote, setPaymentNote] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
  
  // QR Customization
  const [qrColor, setQrColor] = useState('#000000');
  const [qrBgColor, setQrBgColor] = useState('#FFFFFF');
  const [qrStyle, setQrStyle] = useState('squares'); // squares, dots, rounded
  const [cornerStyle, setCornerStyle] = useState('square'); // square, rounded, extraRounded
  const [logoImage, setLogoImage] = useState(null);
  const [logoSize, setLogoSize] = useState(0.3); // 0.2, 0.3, 0.4
  const [gradientType, setGradientType] = useState('solid'); // solid, linear, radial
  const [gradientColor1, setGradientColor1] = useState('#000000');
  const [gradientColor2, setGradientColor2] = useState('#4B5563');
  const [frameStyle, setFrameStyle] = useState('none'); // none, banner, box, circular
  const [frameText, setFrameText] = useState('Scan me!');
  const [logoTab, setLogoTab] = useState('preset'); // preset or custom
  const [transparentBg, setTransparentBg] = useState(false);
  const [isCustomLogo, setIsCustomLogo] = useState(false); // Track if logo is custom upload
  
  const downloadRef = useRef(null);
  const qrWithFrameRef = useRef(null);
  const t = translations[language];

  // Preset icons - using colored icons from reliable CDN
  const presetIcons = [
    {
      id: 'instagram',
      name: 'Instagram',
      svg: 'https://cdn.simpleicons.org/instagram/E4405F'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      svg: 'https://cdn.simpleicons.org/facebook/1877F2'
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      svg: 'https://cdn.simpleicons.org/x/000000'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      svg: 'https://cdn.simpleicons.org/youtube/FF0000'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      svg: 'https://cdn.simpleicons.org/whatsapp/25D366'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      svg: 'https://cdn.simpleicons.org/tiktok/000000'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      svg: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'
    },
    {
      id: 'gmail',
      name: 'Gmail',
      svg: 'https://cdn.simpleicons.org/gmail/EA4335'
    },
    {
      id: 'spotify',
      name: 'Spotify',
      svg: 'https://cdn.simpleicons.org/spotify/1DB954'
    },
    {
      id: 'github',
      name: 'GitHub',
      svg: 'https://cdn.simpleicons.org/github/181717'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      svg: 'https://cdn.simpleicons.org/telegram/26A5E4'
    },
    {
      id: 'discord',
      name: 'Discord',
      svg: 'https://cdn.simpleicons.org/discord/5865F2'
    }
  ];

  // Apply theme class to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const qrTypes = [
    { 
      id: 'text', 
      name: t.plainText, 
      desc: t.plainTextDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    },
    { 
      id: 'url', 
      name: t.websiteURL, 
      desc: t.websiteURLDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    },
    { 
      id: 'wifi', 
      name: t.wifi, 
      desc: t.wifiDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
    },
    { 
      id: 'email', 
      name: t.email, 
      desc: t.emailDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    },
    { 
      id: 'phone', 
      name: t.phone, 
      desc: t.phoneDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    },
    { 
      id: 'sms', 
      name: t.sms, 
      desc: t.smsDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    },
    { 
      id: 'social', 
      name: t.socialMedia, 
      desc: t.socialMediaDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
    },
    { 
      id: 'login', 
      name: t.login, 
      desc: t.loginDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    },
    { 
      id: 'vcard', 
      name: t.vcard, 
      desc: t.vcardDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    },
    { 
      id: 'location', 
      name: t.location, 
      desc: t.locationDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    },
    { 
      id: 'whatsapp', 
      name: t.whatsapp, 
      desc: t.whatsappDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    },
    { 
      id: 'payment', 
      name: t.payment, 
      desc: t.paymentDesc,
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
    },
  ];

  const generateData = () => {
    switch (selectedType) {
      case 'text':
        return text || 'QRBar Generator';
      case 'url':
        return url || 'https://example.com';
      case 'wifi':
        return `WIFI:T:${wifiEncryption};S:${wifiSSID};P:${wifiPassword};;`;
      case 'email':
        return `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      case 'phone':
        return `tel:${phone}`;
      case 'sms':
        return `sms:${smsNumber}?body=${encodeURIComponent(smsMessage)}`;
      case 'social':
        const socialUrls = {
          instagram: `https://instagram.com/${socialUsername}`,
          twitter: `https://twitter.com/${socialUsername}`,
          facebook: `https://facebook.com/${socialUsername}`,
          tiktok: `https://tiktok.com/@${socialUsername}`,
          linkedin: `https://linkedin.com/in/${socialUsername}`,
          youtube: `https://youtube.com/@${socialUsername}`
        };
        return socialUrls[socialPlatform] || 'https://example.com';
      case 'login':
        return `${loginUsername}\n${loginPassword}`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${vcardName}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nORG:${vcardOrg}\nEND:VCARD`;
      case 'location':
        if (locationType === 'coordinates') {
          return latitude && longitude ? `geo:${latitude},${longitude}` : 'geo:0,0';
        } else {
          return locationAddress ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}` : 'https://maps.google.com';
        }
      case 'whatsapp':
        let cleanPhone = waPhone.replace(/[^0-9]/g, '');
        // Auto-convert Indonesian format: if starts with 0, replace with 62
        if (cleanPhone.startsWith('0')) {
          cleanPhone = '62' + cleanPhone.substring(1);
        }
        // If no country code detected (less than 11 digits), assume Indonesia
        if (cleanPhone.length < 11) {
          cleanPhone = '62' + cleanPhone;
        }
        return waMessage 
          ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`
          : `https://wa.me/${cleanPhone}`;
      case 'payment':
        if (paymentType === 'upi') {
          return `upi://pay?pa=${upiId}&pn=QRBar&am=${paymentAmount}&cu=IDR&tn=${encodeURIComponent(paymentNote)}`;
        } else {
          return paymentLink || 'https://example.com/payment';
        }
      default:
        return 'QRBar Generator';
    }
  };

  const downloadCode = async () => {
    if (codeFormat === 'qr') {
      // If frame is selected, use html2canvas to capture QR with frame
      if (frameStyle !== 'none' && qrWithFrameRef.current) {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(qrWithFrameRef.current, {
          backgroundColor: transparentBg ? null : qrBgColor,
          scale: 3,
          useCORS: true,
          allowTaint: true,
          logging: false
        });
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().slice(0,10);
        link.download = `qrbar-${selectedType}-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
      } else {
        // For QR without frame, use qr-code-styling download
        const QRCodeStyling = (await import('qr-code-styling')).default;
        
        const dotsOptions = {
          squares: 'square',
          dots: 'dots',
          rounded: 'rounded'
        };

        const cornerSquareOptions = {
          square: 'square',
          rounded: 'extra-rounded',
          extraRounded: 'extra-rounded'
        };

        const cornerDotOptions = {
          square: 'square',
          rounded: 'dot',
          extraRounded: 'dot'
        };

        // Prepare dots color based on gradient type
        let dotsColor = qrColor;
        let dotsGradient = null;

        if (gradientType === 'linear') {
          dotsGradient = {
            type: 'linear',
            rotation: 0,
            colorStops: [
              { offset: 0, color: gradientColor1 },
              { offset: 1, color: gradientColor2 }
            ]
          };
          dotsColor = undefined;
        } else if (gradientType === 'radial') {
          dotsGradient = {
            type: 'radial',
            colorStops: [
              { offset: 0, color: gradientColor1 },
              { offset: 1, color: gradientColor2 }
            ]
          };
          dotsColor = undefined;
        }

        const qrCode = new QRCodeStyling({
          width: 1024,
          height: 1024,
          data: generateData(),
          margin: 20,
          qrOptions: {
            typeNumber: 0,
            mode: 'Byte',
            errorCorrectionLevel: 'H'
          },
          imageOptions: {
            hideBackgroundDots: true,
            imageSize: logoImage ? logoSize : 0,
            margin: 10,
            crossOrigin: 'anonymous'
          },
          dotsOptions: {
            type: dotsOptions[qrStyle] || 'square',
            color: dotsColor,
            gradient: dotsGradient
          },
          backgroundOptions: {
            color: transparentBg ? 'transparent' : qrBgColor
          },
          cornersSquareOptions: {
            type: cornerSquareOptions[cornerStyle] || 'square',
            color: gradientType === 'solid' ? qrColor : gradientColor1
          },
          cornersDotOptions: {
            type: cornerDotOptions[cornerStyle] || 'square',
            color: gradientType === 'solid' ? qrColor : gradientColor1
          },
          image: logoImage || undefined
        });

        const timestamp = new Date().toISOString().slice(0,10);
        qrCode.download({
          name: `qrbar-${selectedType}-${timestamp}`,
          extension: 'png'
        });
      }
    } else {
      // For barcode, use html2canvas
      if (downloadRef.current) {
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(downloadRef.current, {
          backgroundColor: '#ffffff',
          scale: 5,
          useCORS: true,
          allowTaint: true,
          logging: false
        });
        const link = document.createElement('a');
        const timestamp = new Date().toISOString().slice(0,10);
        link.download = `qrbar-${selectedType}-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
      }
    }
  };

  const clearFields = () => {
    setText('');
    setUrl('');
    setWifiSSID('');
    setWifiPassword('');
    setEmailTo('');
    setEmailSubject('');
    setEmailBody('');
    setPhone('');
    setSmsNumber('');
    setSmsMessage('');
    setSocialUsername('');
    setLoginUsername('');
    setLoginPassword('');
    setVcardName('');
    setVcardPhone('');
    setVcardEmail('');
    setVcardOrg('');
    setLatitude('');
    setLongitude('');
    setLocationAddress('');
    setWaPhone('');
    setWaMessage('');
    setPaymentLink('');
    setUpiId('');
    setPaymentAmount('');
    setPaymentNote('');
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoImage(event.target.result);
        setIsCustomLogo(true); // Mark as custom upload
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoImage(null);
    setIsCustomLogo(false);
  };

  if (!showGenerator) {
    return <LandingPage 
      onGetStarted={() => setShowGenerator(true)} 
      onSelectType={(typeId) => { setShowGenerator(true); setSelectedType(typeId); }} 
      qrTypes={qrTypes}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
      language={language}
      setLanguage={setLanguage}
      t={t}
    />;
  }

  const renderForm = () => {
    switch (selectedType) {
      case 'text':
        return (
          <div className="form-group">
            <label className="label">Text Content</label>
            <textarea value={text} onChange={(e) => setText(e.target.value)} className="input" placeholder="Enter your text here..." rows="4" />
          </div>
        );
      case 'url':
        return (
          <div className="form-group">
            <label className="label">Website URL</label>
            <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} className="input" placeholder="https://example.com" />
          </div>
        );
      case 'wifi':
        return (
          <>
            <div className="form-group">
              <label className="label">Network Name (SSID)</label>
              <input type="text" value={wifiSSID} onChange={(e) => setWifiSSID(e.target.value)} className="input" placeholder="WiFi Name" />
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input type="text" value={wifiPassword} onChange={(e) => setWifiPassword(e.target.value)} className="input" placeholder="WiFi Password" />
            </div>
            <div className="form-group">
              <label className="label">Encryption</label>
              <select value={wifiEncryption} onChange={(e) => setWifiEncryption(e.target.value)} className="input">
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">None</option>
              </select>
            </div>
          </>
        );
      case 'email':
        return (
          <>
            <div className="form-group">
              <label className="label">Email Address</label>
              <input type="email" value={emailTo} onChange={(e) => setEmailTo(e.target.value)} className="input" placeholder="email@example.com" />
            </div>
            <div className="form-group">
              <label className="label">Subject</label>
              <input type="text" value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} className="input" placeholder="Email subject" />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} className="input" placeholder="Email message" rows="3" />
            </div>
          </>
        );
      case 'phone':
        return (
          <div className="form-group">
            <label className="label">Phone Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="input" placeholder="+62812345678" />
          </div>
        );
      case 'sms':
        return (
          <>
            <div className="form-group">
              <label className="label">Phone Number</label>
              <input type="tel" value={smsNumber} onChange={(e) => setSmsNumber(e.target.value)} className="input" placeholder="+62812345678" />
            </div>
            <div className="form-group">
              <label className="label">Message</label>
              <textarea value={smsMessage} onChange={(e) => setSmsMessage(e.target.value)} className="input" placeholder="SMS message" rows="3" />
            </div>
          </>
        );
      case 'social':
        return (
          <>
            <div className="form-group">
              <label className="label">Platform</label>
              <select value={socialPlatform} onChange={(e) => setSocialPlatform(e.target.value)} className="input">
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter/X</option>
                <option value="facebook">Facebook</option>
                <option value="tiktok">TikTok</option>
                <option value="linkedin">LinkedIn</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label">Username</label>
              <input type="text" value={socialUsername} onChange={(e) => setSocialUsername(e.target.value)} className="input" placeholder="username" />
            </div>
          </>
        );
      case 'login':
        return (
          <>
            <div className="form-group">
              <label className="label">Username</label>
              <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} className="input" placeholder="Username" />
            </div>
            <div className="form-group">
              <label className="label">Password</label>
              <input type="text" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="input" placeholder="Password" />
            </div>
          </>
        );
      case 'vcard':
        return (
          <>
            <div className="form-group">
              <label className="label">Full Name</label>
              <input type="text" value={vcardName} onChange={(e) => setVcardName(e.target.value)} className="input" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label className="label">Phone</label>
              <input type="tel" value={vcardPhone} onChange={(e) => setVcardPhone(e.target.value)} className="input" placeholder="+62812345678" />
            </div>
            <div className="form-group">
              <label className="label">Email</label>
              <input type="email" value={vcardEmail} onChange={(e) => setVcardEmail(e.target.value)} className="input" placeholder="email@example.com" />
            </div>
            <div className="form-group">
              <label className="label">Organization</label>
              <input type="text" value={vcardOrg} onChange={(e) => setVcardOrg(e.target.value)} className="input" placeholder="Company Name" />
            </div>
          </>
        );
      case 'location':
        return (
          <>
            <div className="form-group">
              <label className="label">{t.locationType}</label>
              <select value={locationType} onChange={(e) => setLocationType(e.target.value)} className="input">
                <option value="coordinates">{t.coordinates}</option>
                <option value="address">{t.googleMaps}</option>
              </select>
            </div>
            {locationType === 'coordinates' ? (
              <>
                <div className="form-group">
                  <label className="label">{t.latitude}</label>
                  <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} className="input" placeholder="-6.200000" />
                </div>
                <div className="form-group">
                  <label className="label">{t.longitude}</label>
                  <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} className="input" placeholder="106.816666" />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label className="label">{t.address}</label>
                <textarea value={locationAddress} onChange={(e) => setLocationAddress(e.target.value)} className="input" placeholder="Monas, Jakarta" rows="3" />
              </div>
            )}
          </>
        );
      case 'whatsapp':
        return (
          <>
            <div className="form-group">
              <label className="label">{t.waPhoneNumber}</label>
              <input type="tel" value={waPhone} onChange={(e) => setWaPhone(e.target.value)} className="input" placeholder="081234567890 or +6281234567890" />
              <small style={{color: '#9CA3AF', fontSize: '0.875rem', marginTop: '0.25rem', display: 'block'}}>Format: 08xxx or +628xxx (auto-converted)</small>
            </div>
            <div className="form-group">
              <label className="label">{t.waMessage}</label>
              <textarea value={waMessage} onChange={(e) => setWaMessage(e.target.value)} className="input" placeholder="Hello!" rows="3" />
            </div>
          </>
        );
      case 'payment':
        return (
          <>
            <div className="form-group">
              <label className="label">{t.paymentType}</label>
              <select value={paymentType} onChange={(e) => setPaymentType(e.target.value)} className="input">
                <option value="link">{t.paymentLink}</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            {paymentType === 'upi' ? (
              <>
                <div className="form-group">
                  <label className="label">{t.upiId}</label>
                  <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} className="input" placeholder="username@upi" />
                </div>
                <div className="form-group">
                  <label className="label">{t.paymentAmount}</label>
                  <input type="number" value={paymentAmount} onChange={(e) => setPaymentAmount(e.target.value)} className="input" placeholder="100000" />
                </div>
                <div className="form-group">
                  <label className="label">{t.paymentNote}</label>
                  <input type="text" value={paymentNote} onChange={(e) => setPaymentNote(e.target.value)} className="input" placeholder="Payment for..." />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label className="label">{t.paymentLink}</label>
                <input type="url" value={paymentLink} onChange={(e) => setPaymentLink(e.target.value)} className="input" placeholder="https://payment.example.com" />
              </div>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="generator-page">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo" onClick={() => setShowGenerator(false)} style={{cursor: 'pointer'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="4" width="10" height="10" rx="2" fill="url(#logoGrad)"/>
              <rect x="18" y="4" width="10" height="10" rx="2" fill="url(#logoGrad)"/>
              <rect x="4" y="18" width="10" height="10" rx="2" fill="url(#logoGrad)"/>
              <rect x="20" y="20" width="6" height="6" rx="1" fill="url(#logoGrad)"/>
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#6B7280"/>
                  <stop offset="100%" stopColor="#1F2937"/>
                </linearGradient>
              </defs>
            </svg>
            <span>QRBar</span>
          </div>
          <div className="nav-right">
            <ThemeLanguageControls 
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
            <button onClick={() => setShowGenerator(false)} className="btn-back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              <span className="btn-back-text">{t.backToHome}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="generator-container">
        <div className="generator-wrapper">
          {/* Left Column - Forms */}
          <div className="generator-left-column">
            <div className="type-selector-gen">
            <h3 className="section-title">{t.selectType}</h3>
            <div className="type-grid-gen">
              {qrTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`type-card-gen ${selectedType === type.id ? 'active' : ''}`}
                >
                  <div className="type-icon-gen">{type.icon}</div>
                  <div className="type-info">
                    <div className="type-name-gen">{type.name}</div>
                    <div className="type-desc">{type.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="format-toggle-gen">
            <button
              onClick={() => setCodeFormat('qr')}
              className={`format-btn-gen ${codeFormat === 'qr' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="3" width="8" height="8" rx="1"/>
                <rect x="13" y="3" width="8" height="8" rx="1"/>
                <rect x="3" y="13" width="8" height="8" rx="1"/>
              </svg>
              {t.qrCode}
            </button>
            <button
              onClick={() => setCodeFormat('barcode')}
              className={`format-btn-gen ${codeFormat === 'barcode' ? 'active' : ''}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="6" width="2" height="12"/>
                <rect x="7" y="6" width="3" height="12"/>
                <rect x="12" y="6" width="2" height="12"/>
                <rect x="16" y="6" width="3" height="12"/>
              </svg>
              {t.barcode}
            </button>
          </div>

          <div className="form-card">
            <h3 className="section-title">{t.enterDetails}</h3>
            {renderForm()}
            
            {codeFormat === 'barcode' && (
              <div className="form-group">
                <label className="label">{t.barcodeFormat}</label>
                <select value={barcodeFormat} onChange={(e) => setBarcodeFormat(e.target.value)} className="input">
                  <option value="CODE128">CODE128</option>
                  <option value="CODE39">CODE39</option>
                  <option value="EAN13">EAN13</option>
                  <option value="UPC">UPC</option>
                </select>
              </div>
            )}
          </div>

          {codeFormat === 'qr' && (
            <div className="form-card">
              <h3 className="section-title">{t.customizeDesign}</h3>
              
              <div className="form-group">
                <label className="label">{t.qrColor}</label>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                  <input 
                    type="color" 
                    value={qrColor} 
                    onChange={(e) => setQrColor(e.target.value)} 
                    style={{width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}
                  />
                  <input 
                    type="text" 
                    value={qrColor} 
                    onChange={(e) => setQrColor(e.target.value)} 
                    className="input" 
                    placeholder="#000000"
                    style={{flex: 1}}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">{t.backgroundColor}</label>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <input 
                    type="color" 
                    value={qrBgColor} 
                    onChange={(e) => setQrBgColor(e.target.value)} 
                    style={{width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer', opacity: transparentBg ? 0.5 : 1}}
                    disabled={transparentBg}
                  />
                  <input 
                    type="text" 
                    value={qrBgColor} 
                    onChange={(e) => setQrBgColor(e.target.value)} 
                    className="input" 
                    placeholder="#FFFFFF"
                    style={{flex: 1, opacity: transparentBg ? 0.5 : 1}}
                    disabled={transparentBg}
                  />
                </div>
                <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.9rem', color: '#9CA3AF'}}>
                  <input 
                    type="checkbox" 
                    checked={transparentBg}
                    onChange={(e) => setTransparentBg(e.target.checked)}
                    style={{width: '18px', height: '18px', cursor: 'pointer'}}
                  />
                  <span>{t.transparentBackground}</span>
                </label>
              </div>

              <div className="form-group">
                <label className="label">{t.patternStyle}</label>
                <div className="style-options">
                  <button 
                    onClick={() => setQrStyle('squares')} 
                    className={`style-btn ${qrStyle === 'squares' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="6" height="6"/>
                      <rect x="14" y="4" width="6" height="6"/>
                      <rect x="4" y="14" width="6" height="6"/>
                      <rect x="14" y="14" width="6" height="6"/>
                    </svg>
                    <span>{t.square}</span>
                  </button>
                  <button 
                    onClick={() => setQrStyle('dots')} 
                    className={`style-btn ${qrStyle === 'dots' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="7" cy="7" r="3"/>
                      <circle cx="17" cy="7" r="3"/>
                      <circle cx="7" cy="17" r="3"/>
                      <circle cx="17" cy="17" r="3"/>
                    </svg>
                    <span>{t.dots}</span>
                  </button>
                  <button 
                    onClick={() => setQrStyle('rounded')} 
                    className={`style-btn ${qrStyle === 'rounded' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="6" height="6" rx="1.5"/>
                      <rect x="14" y="4" width="6" height="6" rx="1.5"/>
                      <rect x="4" y="14" width="6" height="6" rx="1.5"/>
                      <rect x="14" y="14" width="6" height="6" rx="1.5"/>
                    </svg>
                    <span>{t.rounded}</span>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="label">{t.gradient}</label>
                <div className="style-options">
                  <button 
                    onClick={() => setGradientType('solid')} 
                    className={`style-btn ${gradientType === 'solid' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                    </svg>
                    <span>{t.solidColor}</span>
                  </button>
                  <button 
                    onClick={() => setGradientType('linear')} 
                    className={`style-btn ${gradientType === 'linear' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#linearGrad)">
                      <defs>
                        <linearGradient id="linearGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="currentColor"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                    </svg>
                    <span>{t.linearGradient}</span>
                  </button>
                  <button 
                    onClick={() => setGradientType('radial')} 
                    className={`style-btn ${gradientType === 'radial' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#radialGrad)">
                      <defs>
                        <radialGradient id="radialGrad">
                          <stop offset="0%" stopColor="currentColor"/>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.3"/>
                        </radialGradient>
                      </defs>
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                    </svg>
                    <span>{t.radialGradient}</span>
                  </button>
                </div>
              </div>

              {gradientType !== 'solid' && (
                <>
                  <div className="form-group">
                    <label className="label">{t.gradientColor1}</label>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                      <input 
                        type="color" 
                        value={gradientColor1} 
                        onChange={(e) => setGradientColor1(e.target.value)} 
                        style={{width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}
                      />
                      <input 
                        type="text" 
                        value={gradientColor1} 
                        onChange={(e) => setGradientColor1(e.target.value)} 
                        className="input" 
                        placeholder="#000000"
                        style={{flex: 1}}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">{t.gradientColor2}</label>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                      <input 
                        type="color" 
                        value={gradientColor2} 
                        onChange={(e) => setGradientColor2(e.target.value)} 
                        style={{width: '60px', height: '40px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}
                      />
                      <input 
                        type="text" 
                        value={gradientColor2} 
                        onChange={(e) => setGradientColor2(e.target.value)} 
                        className="input" 
                        placeholder="#4B5563"
                        style={{flex: 1}}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="form-group">
                <label className="label">{t.addLogo}</label>
                
                {/* Tab selector */}
                <div className="format-toggle-gen" style={{marginBottom: '1rem'}}>
                  <button
                    onClick={() => setLogoTab('preset')}
                    className={`format-btn-gen ${logoTab === 'preset' ? 'active' : ''}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="3" y="3" width="8" height="8" rx="1"/>
                      <rect x="13" y="3" width="8" height="8" rx="1"/>
                      <rect x="3" y="13" width="8" height="8" rx="1"/>
                      <rect x="13" y="13" width="8" height="8" rx="1"/>
                    </svg>
                    {t.presetIcons}
                  </button>
                  <button
                    onClick={() => setLogoTab('custom')}
                    className={`format-btn-gen ${logoTab === 'custom' ? 'active' : ''}`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                    {t.customUpload}
                  </button>
                </div>

                {logoTab === 'preset' ? (
                  // Preset icons grid - always show, highlight selected
                  <div className="preset-icons-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                    gap: '0.75rem',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    padding: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {presetIcons.map((icon) => {
                      const isSelected = logoImage === icon.svg;
                      return (
                        <button
                          key={icon.id}
                          onClick={() => {
                            setLogoImage(icon.svg);
                            setIsCustomLogo(false); // Mark as preset icon
                          }}
                          style={{
                            padding: '0.75rem',
                            background: isSelected ? 'rgba(107, 114, 128, 0.3)' : 'rgba(255, 255, 255, 0.03)',
                            border: isSelected ? '2px solid #6B7280' : '2px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '0.5rem',
                            position: 'relative'
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                            }
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                            }
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          {isSelected && (
                            <div style={{
                              position: 'absolute',
                              top: '4px',
                              right: '4px',
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: '#6B7280',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            </div>
                          )}
                          <img 
                            src={icon.svg} 
                            alt={icon.name} 
                            style={{
                              width: '48px', 
                              height: '48px',
                              borderRadius: '8px'
                            }} 
                          />
                          <span style={{fontSize: '0.75rem', color: '#9CA3AF', textAlign: 'center'}}>{icon.name}</span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  // Custom upload
                  !logoImage || !isCustomLogo ? (
                    <label className="upload-btn">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleLogoUpload}
                        style={{display: 'none'}}
                      />
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="17 8 12 3 7 8"/>
                        <line x1="12" y1="3" x2="12" y2="15"/>
                      </svg>
                      <span>{t.uploadLogo}</span>
                    </label>
                  ) : (
                    <div className="logo-preview">
                      <img src={logoImage} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px', borderRadius: '8px'}} />
                      <button onClick={removeLogo} className="btn-remove-logo">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="18" y1="6" x2="6" y2="18"/>
                          <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                        {t.removeLogo}
                      </button>
                    </div>
                  )
                )}
              </div>

              {logoImage && (
                <div className="form-group">
                  <label className="label">{t.logoSize}</label>
                  <div className="style-options">
                    <button 
                      onClick={() => setLogoSize(0.2)} 
                      className={`style-btn ${logoSize === 0.2 ? 'active' : ''}`}
                    >
                      <span>{t.small}</span>
                    </button>
                    <button 
                      onClick={() => setLogoSize(0.3)} 
                      className={`style-btn ${logoSize === 0.3 ? 'active' : ''}`}
                    >
                      <span>{t.medium}</span>
                    </button>
                    <button 
                      onClick={() => setLogoSize(0.4)} 
                      className={`style-btn ${logoSize === 0.4 ? 'active' : ''}`}
                    >
                      <span>{t.large}</span>
                    </button>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label className="label">{t.cornerStyle}</label>
                <div className="style-options">
                  <button 
                    onClick={() => setCornerStyle('square')} 
                    className={`style-btn ${cornerStyle === 'square' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="8" height="8" rx="0"/>
                      <rect x="5" y="5" width="4" height="4" rx="0" fill="currentColor"/>
                      <rect x="13" y="3" width="8" height="8" rx="0"/>
                      <rect x="15" y="5" width="4" height="4" rx="0" fill="currentColor"/>
                      <rect x="3" y="13" width="8" height="8" rx="0"/>
                      <rect x="5" y="15" width="4" height="4" rx="0" fill="currentColor"/>
                    </svg>
                    <span>{t.square}</span>
                  </button>
                  <button 
                    onClick={() => setCornerStyle('rounded')} 
                    className={`style-btn ${cornerStyle === 'rounded' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="8" height="8" rx="2"/>
                      <rect x="5" y="5" width="4" height="4" rx="1" fill="currentColor"/>
                      <rect x="13" y="3" width="8" height="8" rx="2"/>
                      <rect x="15" y="5" width="4" height="4" rx="1" fill="currentColor"/>
                      <rect x="3" y="13" width="8" height="8" rx="2"/>
                      <rect x="5" y="15" width="4" height="4" rx="1" fill="currentColor"/>
                    </svg>
                    <span>{t.rounded}</span>
                  </button>
                  <button 
                    onClick={() => setCornerStyle('extraRounded')} 
                    className={`style-btn ${cornerStyle === 'extraRounded' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="8" height="8" rx="4"/>
                      <circle cx="7" cy="7" r="2" fill="currentColor"/>
                      <rect x="13" y="3" width="8" height="8" rx="4"/>
                      <circle cx="17" cy="7" r="2" fill="currentColor"/>
                      <rect x="3" y="13" width="8" height="8" rx="4"/>
                      <circle cx="7" cy="17" r="2" fill="currentColor"/>
                    </svg>
                    <span>{t.extraRounded}</span>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label className="label">{t.frame}</label>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
                  gap: '0.75rem'
                }}>
                  <button 
                    onClick={() => setFrameStyle('none')} 
                    className={`style-btn ${frameStyle === 'none' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <line x1="4" y1="4" x2="20" y2="20"/>
                      <line x1="20" y1="4" x2="4" y2="20"/>
                    </svg>
                    <span>{t.noFrame}</span>
                  </button>
                  <button 
                    onClick={() => setFrameStyle('simple')} 
                    className={`style-btn ${frameStyle === 'simple' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="16" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <rect x="6" y="18" width="12" height="3" rx="1"/>
                    </svg>
                    <span>{t.simple}</span>
                  </button>
                  <button 
                    onClick={() => setFrameStyle('border')} 
                    className={`style-btn ${frameStyle === 'border' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <text x="12" y="19" fontSize="6" textAnchor="middle" fill="currentColor">Scan</text>
                    </svg>
                    <span>{t.border}</span>
                  </button>
                  <button 
                    onClick={() => setFrameStyle('borderWhite')} 
                    className={`style-btn ${frameStyle === 'borderWhite' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="16" height="16" rx="2"/>
                      <text x="12" y="19" fontSize="6" textAnchor="middle" fill="white">Scan</text>
                    </svg>
                    <span>{t.borderWhite}</span>
                  </button>
                  <button 
                    onClick={() => setFrameStyle('rounded')} 
                    className={`style-btn ${frameStyle === 'rounded' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="6"/>
                      <text x="12" y="19" fontSize="6" textAnchor="middle" fill="currentColor">Scan</text>
                    </svg>
                    <span>{t.rounded}</span>
                  </button>
                  <button 
                    onClick={() => setFrameStyle('roundedBlack')} 
                    className={`style-btn ${frameStyle === 'roundedBlack' ? 'active' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="4" y="4" width="16" height="16" rx="6"/>
                      <text x="12" y="19" fontSize="6" textAnchor="middle" fill="white">Scan</text>
                    </svg>
                    <span>{t.roundedBlack}</span>
                  </button>
                </div>
              </div>

              {frameStyle !== 'none' && (
                <div className="form-group">
                  <label className="label">{t.scanMe}</label>
                  <input 
                    type="text" 
                    value={frameText} 
                    onChange={(e) => setFrameText(e.target.value)}
                    className="input" 
                    placeholder="Scan me!"
                  />
                </div>
              )}
            </div>
          )}

          <div className="form-card">
            <div className="button-group-gen">
              <button onClick={downloadCode} className="btn-primary-gen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                {t.downloadHD}
              </button>
              <button onClick={clearFields} className="btn-secondary-gen">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
                {t.clear}
              </button>
            </div>
          </div>
          </div>

          {/* Right Column - Preview (Sticky) */}
          <div className="generator-right-column">
            <div className="preview-card-gen">
            <h3 className="section-title">{t.preview}</h3>
            <div className="preview-wrapper-gen">
              <div className="phone-mockup">
                <div className="phone-frame">
                  {/* Power button */}
                  <div className="phone-button phone-power"></div>
                  {/* Volume buttons */}
                  <div className="phone-button phone-volume-up"></div>
                  <div className="phone-button phone-volume-down"></div>
                  
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="phone-statusbar">
                      <span className="phone-time">08:00</span>
                      <div className="phone-icons">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        <svg width="22" height="16" viewBox="0 0 30 18" fill="none">
                          <rect x="1.5" y="2.5" width="24" height="13" rx="2.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                          <rect x="4.5" y="5.5" width="9" height="7" rx="1" fill="currentColor"/>
                          <rect x="26.5" y="6" width="3" height="6" rx="1.5" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phone-content">
                      {codeFormat === 'qr' ? (
                        <CustomQRCode 
                          value={generateData()} 
                          size={240}
                          qrColor={qrColor}
                          bgColor={transparentBg ? 'transparent' : qrBgColor}
                          qrStyle={qrStyle}
                          cornerStyle={cornerStyle}
                          logoImage={logoImage}
                          logoSize={logoSize}
                          gradientType={gradientType}
                          gradientColor1={gradientColor1}
                          gradientColor2={gradientColor2}
                          frameStyle={frameStyle}
                          frameText={frameText}
                        />
                      ) : (
                        <div className="barcode-container">
                          <Barcode value={generateData()} format={barcodeFormat} width={1.5} height={80} displayValue={true} fontSize={14} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div style={{ position: 'absolute', left: '-9999px' }}>
            {/* Hidden element for barcode download */}
            <div ref={downloadRef} style={{ background: 'white', padding: '40px', display: 'inline-block' }}>
              {codeFormat === 'barcode' && (
                <Barcode value={generateData()} format={barcodeFormat} width={3} height={150} displayValue={true} fontSize={20} />
              )}
            </div>
            
            {/* Hidden element for QR with frame download */}
            {codeFormat === 'qr' && frameStyle !== 'none' && (
              <div ref={qrWithFrameRef} style={{ display: 'inline-block', padding: '40px', background: transparentBg ? 'transparent' : '#F8F8F8' }}>
                <CustomQRCode 
                  value={generateData()} 
                  size={600}
                  qrColor={qrColor}
                  bgColor={transparentBg ? 'transparent' : qrBgColor}
                  qrStyle={qrStyle}
                  cornerStyle={cornerStyle}
                  logoImage={logoImage}
                  logoSize={logoSize}
                  gradientType={gradientType}
                  gradientColor1={gradientColor1}
                  gradientColor2={gradientColor2}
                  frameStyle={frameStyle}
                  frameText={frameText}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingPage({ onGetStarted, onSelectType, qrTypes, darkMode, setDarkMode, language, setLanguage, t }) {
  return (
    <div className="landing-page">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{cursor: 'pointer'}}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="4" width="10" height="10" rx="2" fill="url(#logoGradient)"/>
              <rect x="18" y="4" width="10" height="10" rx="2" fill="url(#logoGradient)"/>
              <rect x="4" y="18" width="10" height="10" rx="2" fill="url(#logoGradient)"/>
              <rect x="20" y="20" width="6" height="6" rx="1" fill="url(#logoGradient)"/>
              <defs>
                <linearGradient id="logoGradient" x1="0" y1="0" x2="32" y2="32">
                  <stop offset="0%" stopColor="#6B7280"/>
                  <stop offset="100%" stopColor="#1F2937"/>
                </linearGradient>
              </defs>
            </svg>
            <span>QRBar</span>
          </div>
          <ThemeLanguageControls 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            setLanguage={setLanguage}
            t={t}
          />
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-subtitle">{t.heroSubtitle}</p>
            <button onClick={onGetStarted} className="btn-hero">
              {t.createButton}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
          </div>
          <div className="hero-visual">
            <div className="floating-qr qr-1">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <rect width="120" height="120" rx="12" fill="rgba(255, 255, 255, 0.1)" className="qr-bg"/>
                <rect x="15" y="15" width="35" height="35" rx="4" fill="currentColor"/>
                <rect x="70" y="15" width="35" height="35" rx="4" fill="currentColor"/>
                <rect x="15" y="70" width="35" height="35" rx="4" fill="currentColor"/>
                <rect x="75" y="75" width="25" height="25" rx="3" fill="currentColor"/>
                <rect x="22" y="22" width="21" height="21" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="77" y="22" width="21" height="21" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="22" y="77" width="21" height="21" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
              </svg>
            </div>
            <div className="floating-qr qr-2">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect width="100" height="100" rx="10" fill="rgba(255, 255, 255, 0.08)" className="qr-bg"/>
                <rect x="12" y="12" width="30" height="30" rx="3" fill="currentColor"/>
                <rect x="58" y="12" width="30" height="30" rx="3" fill="currentColor"/>
                <rect x="12" y="58" width="30" height="30" rx="3" fill="currentColor"/>
                <rect x="62" y="62" width="22" height="22" rx="2" fill="currentColor"/>
                <rect x="18" y="18" width="18" height="18" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="64" y="18" width="18" height="18" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="18" y="64" width="18" height="18" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
              </svg>
            </div>
            <div className="floating-qr qr-3">
              <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
                <rect width="90" height="90" rx="9" fill="rgba(255, 255, 255, 0.06)" className="qr-bg"/>
                <rect x="10" y="10" width="28" height="28" rx="3" fill="currentColor"/>
                <rect x="52" y="10" width="28" height="28" rx="3" fill="currentColor"/>
                <rect x="10" y="52" width="28" height="28" rx="3" fill="currentColor"/>
                <rect x="56" y="56" width="20" height="20" rx="2" fill="currentColor"/>
                <rect x="16" y="16" width="16" height="16" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="58" y="16" width="16" height="16" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
                <rect x="16" y="58" width="16" height="16" rx="2" fill="rgba(10, 10, 10, 0.9)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="types-section">
        <h2 className="section-heading">{t.chooseTypes}</h2>
        <div className="types-grid-landing">
          {qrTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelectType(type.id)}
              className="type-card-landing"
            >
              <div className="type-icon-landing">{type.icon}</div>
              <h3 className="type-name-landing">{type.name}</h3>
              <p className="type-desc-landing">{type.desc}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="how-section">
        <h2 className="section-heading">{t.howToTitle}</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h3 className="step-title">{t.step1Title}</h3>
            <p className="step-desc">{t.step1Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </div>
            <h3 className="step-title">{t.step2Title}</h3>
            <p className="step-desc">{t.step2Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2"/>
              </svg>
            </div>
            <h3 className="step-title">{t.step3Title}</h3>
            <p className="step-desc">{t.step3Desc}</p>
          </div>
          <div className="step-card">
            <div className="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h3 className="step-title">{t.step4Title}</h3>
            <p className="step-desc">{t.step4Desc}</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">{t.ctaTitle}</h2>
          <p className="cta-subtitle">{t.ctaSubtitle}</p>
          <button onClick={onGetStarted} className="btn-cta">
            {t.createButton}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 QRBar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
