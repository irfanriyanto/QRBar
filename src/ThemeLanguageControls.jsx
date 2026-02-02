import { languages } from './translations';
import { useState, useRef, useEffect } from 'react';

export function ThemeLanguageControls({ darkMode, setDarkMode, language, setLanguage, t }) {
  const [showLangMenu, setShowLangMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="controls">
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className="control-btn"
        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {darkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* Language Selector */}
      <div className="language-selector" ref={menuRef}>
        <button 
          onClick={() => setShowLangMenu(!showLangMenu)}
          className="language-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <span>{t.langCode}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`chevron ${showLangMenu ? 'open' : ''}`}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        
        {showLangMenu && (
          <div className="language-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setShowLangMenu(false);
                }}
                className={`language-option ${language === lang.code ? 'active' : ''}`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
