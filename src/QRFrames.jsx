// QR Code Frame Components - Simplified and Professional

export const QRFrames = {
  none: ({ children }) => (
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
  )
};
