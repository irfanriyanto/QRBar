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

  arrow: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {/* Arrow pointing to QR */}
      <svg style={{
        position: 'absolute',
        right: '-50px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px'
      }} viewBox="0 0 40 40" fill="none">
        <path d="M5 20 L25 20 M25 20 L18 13 M25 20 L18 27" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{
        position: 'absolute',
        right: '-120px',
        top: '50%',
        transform: 'translateY(-50%)',
        fontSize: '12px',
        fontWeight: '600',
        color: '#000',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  ),

  shoppingBag: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Shopping bag shape */}
      <svg style={{
        position: 'absolute',
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '280px',
        height: '320px',
        zIndex: -1
      }} viewBox="0 0 280 320" fill="none">
        <path d="M20 60 L260 60 L260 300 Q260 310 250 310 L30 310 Q20 310 20 300 Z" fill="#000" stroke="#000" strokeWidth="3"/>
        <path d="M80 60 Q80 20 140 20 Q200 20 200 60" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
      <div style={{ paddingTop: '50px' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Gift box with ribbon */}
      <svg style={{
        position: 'absolute',
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '280px',
        height: '330px',
        zIndex: -1
      }} viewBox="0 0 280 330" fill="none">
        {/* Box */}
        <rect x="20" y="80" width="240" height="230" rx="8" fill="#000" stroke="#000" strokeWidth="3"/>
        {/* Ribbon vertical */}
        <rect x="125" y="80" width="30" height="230" fill="#fff"/>
        {/* Ribbon horizontal */}
        <rect x="20" y="180" width="240" height="30" fill="#fff"/>
        {/* Bow */}
        <path d="M140 50 Q120 30 100 50 Q120 40 140 50 Q160 40 180 50 Q160 30 140 50" fill="#fff" stroke="#000" strokeWidth="2"/>
      </svg>
      <div style={{ paddingTop: '60px' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
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

  envelope: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Envelope */}
      <svg style={{
        position: 'absolute',
        top: '-10px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '300px',
        zIndex: -1
      }} viewBox="0 0 300 300" fill="none">
        {/* Envelope body */}
        <path d="M30 80 L270 80 L270 260 Q270 270 260 270 L40 270 Q30 270 30 260 Z" fill="#fff" stroke="#000" strokeWidth="3"/>
        {/* Envelope flap */}
        <path d="M30 80 L150 180 L270 80" fill="none" stroke="#000" strokeWidth="3"/>
        <path d="M30 80 L150 180 L270 80 L270 60 Q270 50 260 50 L40 50 Q30 50 30 60 Z" fill="#fff" stroke="#000" strokeWidth="3"/>
      </svg>
      <div style={{ paddingTop: '40px' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '30px',
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
        bottom: '-60px',
        right: '-20px',
        width: '80px',
        height: '60px'
      }} viewBox="0 0 80 60" fill="none">
        {/* Wheels */}
        <circle cx="20" cy="50" r="8" fill="none" stroke="#000" strokeWidth="2.5"/>
        <circle cx="60" cy="50" r="8" fill="none" stroke="#000" strokeWidth="2.5"/>
        {/* Body */}
        <path d="M25 50 L25 30 L45 30 L50 40 L65 40 L65 50" stroke="#000" strokeWidth="2.5" fill="none"/>
        <rect x="30" y="20" width="12" height="10" fill="#000"/>
        {/* Handlebar */}
        <path d="M45 30 L50 20 L55 20" stroke="#000" strokeWidth="2.5" fill="none"/>
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

  handPhone: ({ children, frameText }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {children}
      {/* Hand holding phone */}
      <svg style={{
        position: 'absolute',
        bottom: '-70px',
        right: '-30px',
        width: '90px',
        height: '80px'
      }} viewBox="0 0 90 80" fill="none">
        {/* Phone */}
        <rect x="30" y="10" width="35" height="50" rx="4" fill="#000" stroke="#000" strokeWidth="2"/>
        <rect x="33" y="13" width="29" height="40" fill="#fff"/>
        {/* Hand */}
        <path d="M25 60 Q20 55 20 50 L20 40 Q20 35 25 35 L30 35 L30 30 Q30 25 35 25 Q40 25 40 30 L40 35 L45 35 L45 32 Q45 27 50 27 Q55 27 55 32 L55 35 L60 35 L60 33 Q60 28 65 28 Q70 28 70 33 L70 50 Q70 60 65 65 L45 75 Q35 75 30 70 Z" fill="#FFE4C4" stroke="#000" strokeWidth="1.5"/>
      </svg>
      <div style={{
        position: 'absolute',
        bottom: '-45px',
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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Smartphone frame */}
      <svg style={{
        position: 'absolute',
        top: '-15px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '290px',
        height: '340px',
        zIndex: -1
      }} viewBox="0 0 290 340" fill="none">
        {/* Phone body */}
        <rect x="30" y="20" width="230" height="300" rx="20" fill="#000" stroke="#000" strokeWidth="3"/>
        {/* Screen */}
        <rect x="40" y="40" width="210" height="240" rx="8" fill="#fff"/>
        {/* Home button */}
        <circle cx="145" cy="295" r="12" fill="none" stroke="#fff" strokeWidth="2"/>
      </svg>
      <div style={{ paddingTop: '50px' }}>
        {children}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '35px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '12px',
        fontWeight: '600',
        color: '#fff',
        whiteSpace: 'nowrap'
      }}>
        {frameText}
      </div>
    </div>
  )
};
