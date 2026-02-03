// QR Code Frame Components with various creative designs

export const QRFrames = {
  none: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
    </div>
  ),

  simple: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '-35px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#000',
        color: '#fff',
        padding: '8px 20px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: '600',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
      }}>
        {frameText}
      </div>
    </div>
  ),

  border: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      border: '3px solid #000',
      borderRadius: '12px',
      padding: '16px 16px 45px 16px',
      background: '#fff'
    }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  borderWhite: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      border: '3px solid #000',
      borderRadius: '12px',
      padding: '16px 16px 45px 16px',
      background: '#000'
    }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '600',
        color: '#fff',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  rounded: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      border: '3px solid #000',
      borderRadius: '30px',
      padding: '16px 16px 45px 16px',
      background: '#fff'
    }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  roundedBlack: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      border: '3px solid #000',
      borderRadius: '30px',
      padding: '16px 16px 45px 16px',
      background: '#000'
    }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '600',
        color: '#fff',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  handwritten: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '16px',
        fontWeight: '400',
        fontStyle: 'italic',
        color: '#000',
        whiteSpace: 'nowrap',
        fontFamily: 'cursive'
      }}>
        {frameText}
      </div>
    </div>
  ),

  shoppingBag: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      padding: '30px 20px 50px 20px',
      background: '#000',
      borderRadius: '0 0 12px 12px'
    }}>
      {/* Shopping bag handles */}
      <svg style={{
        position: 'absolute',
        top: '5px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '30px'
      }} viewBox="0 0 120 30" fill="none">
        <path d="M30 25 Q30 5 60 5 Q90 5 90 25" stroke="#fff" strokeWidth="3" fill="none"/>
      </svg>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '600',
        color: '#fff',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  giftBox: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      padding: '45px 25px 50px 25px',
      background: '#E53E3E',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
    }}>
      {/* Ribbon vertical - white */}
      <div style={{
        position: 'absolute',
        top: '35px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '8px',
        height: 'calc(100% - 35px)',
        background: '#FFD700',
        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)'
      }} />
      {/* Ribbon horizontal - white */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '0',
        width: '100%',
        height: '8px',
        background: '#FFD700',
        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0.3)'
      }} />
      {/* Bow - larger and more visible */}
      <svg style={{
        position: 'absolute',
        top: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '35px'
      }} viewBox="0 0 60 35" fill="none">
        {/* Left bow loop */}
        <ellipse cx="18" cy="18" rx="15" ry="12" fill="#FFD700" stroke="#FFF" strokeWidth="2"/>
        {/* Right bow loop */}
        <ellipse cx="42" cy="18" rx="15" ry="12" fill="#FFD700" stroke="#FFF" strokeWidth="2"/>
        {/* Center knot */}
        <circle cx="30" cy="18" r="8" fill="#FFD700" stroke="#FFF" strokeWidth="2"/>
        {/* Ribbon tails */}
        <path d="M22 26 L15 32 L18 28 Z" fill="#FFD700" stroke="#FFF" strokeWidth="1.5"/>
        <path d="M38 26 L45 32 L42 28 Z" fill="#FFD700" stroke="#FFF" strokeWidth="1.5"/>
      </svg>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '13px',
        fontWeight: '700',
        color: '#fff',
        whiteSpace: 'nowrap',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
      }}>
        {frameText}
      </div>
    </div>
  ),

  envelope: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      padding: '35px 20px 50px 20px',
      background: '#fff',
      border: '3px solid #000',
      borderRadius: '8px'
    }}>
      {/* Envelope flap */}
      <svg style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '40px'
      }} viewBox="0 0 280 40" fill="none" preserveAspectRatio="none">
        <path d="M0 0 L140 30 L280 0 Z" fill="#fff" stroke="#000" strokeWidth="3"/>
      </svg>
      {children}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  delivery: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {/* Delivery scooter */}
      <svg style={{
        position: 'absolute',
        bottom: '-55px',
        right: '-10px',
        width: '70px',
        height: '50px'
      }} viewBox="0 0 70 50" fill="none">
        {/* Wheels */}
        <circle cx="18" cy="42" r="6" fill="none" stroke="#000" strokeWidth="2"/>
        <circle cx="52" cy="42" r="6" fill="none" stroke="#000" strokeWidth="2"/>
        {/* Body */}
        <path d="M22 42 L22 25 L38 25 L42 32 L56 32 L56 42" stroke="#000" strokeWidth="2" fill="none"/>
        <rect x="26" y="18" width="10" height="8" fill="#000"/>
        {/* Handlebar */}
        <path d="M38 25 L42 16 L46 16" stroke="#000" strokeWidth="2" fill="none"/>
      </svg>
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  handPhone: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {/* Hand holding phone */}
      <svg style={{
        position: 'absolute',
        bottom: '-60px',
        right: '-15px',
        width: '75px',
        height: '70px'
      }} viewBox="0 0 75 70" fill="none">
        {/* Phone */}
        <rect x="25" y="8" width="30" height="42" rx="3" fill="#000" stroke="#000" strokeWidth="2"/>
        <rect x="28" y="11" width="24" height="34" fill="#fff"/>
        {/* Hand */}
        <path d="M20 50 Q16 46 16 42 L16 34 Q16 30 20 30 L25 30 L25 26 Q25 22 29 22 Q33 22 33 26 L33 30 L37 30 L37 28 Q37 24 41 24 Q45 24 45 28 L45 30 L49 30 L49 28 Q49 24 53 24 Q57 24 57 28 L57 42 Q57 50 53 54 L38 63 Q30 63 26 59 Z" fill="#FFE4C4" stroke="#000" strokeWidth="1.5"/>
      </svg>
      <div style={{
        position: 'absolute',
        bottom: '-35px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  smartphone: ({ children, frameText }) => (
    <div style={{ 
      position: 'relative', 
      display: 'inline-block',
      padding: '35px 15px 55px 15px',
      background: '#000',
      borderRadius: '25px',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
    }}>
      {/* Notch */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '6px',
        background: '#333',
        borderRadius: '3px'
      }} />
      {children}
      {/* Home button */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40px',
        height: '4px',
        background: '#666',
        borderRadius: '2px'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px',
        fontWeight: '600',
        color: '#fff',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  )
};
