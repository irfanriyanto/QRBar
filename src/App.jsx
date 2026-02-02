import { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Barcode from 'react-barcode';
import html2canvas from 'html2canvas';
import { translations, languages } from './translations';
import { ThemeLanguageControls } from './ThemeLanguageControls';
import './App.css';

function App() {
  const [showGenerator, setShowGenerator] = useState(false);
  const [selectedType, setSelectedType] = useState('text');
  const [codeFormat, setCodeFormat] = useState('qr');
  const [darkMode, setDarkMode] = useState(true);
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
  const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
  
  const downloadRef = useRef(null);
  const t = translations[language];

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
        return `${loginUsername}\t${loginPassword}\n`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${vcardName}\nTEL:${vcardPhone}\nEMAIL:${vcardEmail}\nORG:${vcardOrg}\nEND:VCARD`;
      default:
        return 'QRBar Generator';
    }
  };

  const downloadCode = async () => {
    if (downloadRef.current) {
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
      default:
        return null;
    }
  };

  return (
    <div className="generator-page">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">
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
              {t.backToHome}
            </button>
          </div>
        </div>
      </nav>

      <div className="generator-container">
        <div className="generator-wrapper">
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

          <div className="preview-card-gen">
            <h3 className="section-title">{t.preview}</h3>
            <div className="preview-wrapper-gen">
              <div className="phone-mockup">
                <div className="phone-frame">
                  <div className="phone-notch"></div>
                  <div className="phone-screen">
                    <div className="phone-statusbar">
                      <span className="phone-time">08:00</span>
                      <div className="phone-icons">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="phone-content">
                      {codeFormat === 'qr' ? (
                        <QRCodeCanvas value={generateData()} size={240} level="H" includeMargin={true} />
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

          <div style={{ position: 'absolute', left: '-9999px' }}>
            <div ref={downloadRef} style={{ background: 'white', padding: '40px', display: 'inline-block' }}>
              {codeFormat === 'qr' ? (
                <QRCodeCanvas value={generateData()} size={512} level="H" includeMargin={true} />
              ) : (
                <Barcode value={generateData()} format={barcodeFormat} width={3} height={150} displayValue={true} fontSize={20} />
              )}
            </div>
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
          <div className="logo">
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h3 className="step-title">{t.step3Title}</h3>
            <p className="step-desc">{t.step3Desc}</p>
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
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}

export default App;
