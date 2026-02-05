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

  border: ({ children, frameText }) => {
    // Get QR size from children to calculate proportional padding and font
    const qrSize = children?.props?.size || 240;
    const scale = qrSize / 240; // Base scale on 240px
    const padding = Math.round(16 * scale);
    const bottomPadding = Math.round(65 * scale);
    const fontSize = Math.round(22 * scale);
    const bottomOffset = Math.round(23 * scale);
    const borderWidth = Math.max(3, Math.round(3 * scale));
    const borderRadius = Math.round(12 * scale);

    return (
      <div style={{ 
        position: 'relative', 
        display: 'inline-block',
        border: `${borderWidth}px solid #000`,
        borderRadius: `${borderRadius}px`,
        padding: `${padding}px ${padding}px ${bottomPadding}px ${padding}px`,
        background: '#fff'
      }}>
        {children}
        <div style={{
          position: 'absolute',
          bottom: `${bottomOffset}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: `${fontSize}px`,
          fontWeight: '600',
          color: '#000',
          whiteSpace: 'nowrap'
        }}>
          {frameText}
        </div>
      </div>
    );
  },

  borderWhite: ({ children, frameText }) => {
    const qrSize = children?.props?.size || 240;
    const scale = qrSize / 240;
    const padding = Math.round(16 * scale);
    const bottomPadding = Math.round(65 * scale);
    const fontSize = Math.round(22 * scale);
    const bottomOffset = Math.round(23 * scale);
    const borderWidth = Math.max(3, Math.round(3 * scale));
    const borderRadius = Math.round(12 * scale);

    return (
      <div style={{ 
        position: 'relative', 
        display: 'inline-block',
        border: `${borderWidth}px solid #000`,
        borderRadius: `${borderRadius}px`,
        padding: `${padding}px ${padding}px ${bottomPadding}px ${padding}px`,
        background: '#000'
      }}>
        {children}
        <div style={{
          position: 'absolute',
          bottom: `${bottomOffset}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: `${fontSize}px`,
          fontWeight: '600',
          color: '#fff',
          whiteSpace: 'nowrap'
        }}>
          {frameText}
        </div>
      </div>
    );
  },

  rounded: ({ children, frameText }) => {
    const qrSize = children?.props?.size || 240;
    const scale = qrSize / 240;
    const padding = Math.round(16 * scale);
    const bottomPadding = Math.round(65 * scale);
    const fontSize = Math.round(22 * scale);
    const bottomOffset = Math.round(23 * scale);
    const borderWidth = Math.max(3, Math.round(3 * scale));
    const borderRadius = Math.round(30 * scale);

    return (
      <div style={{ 
        position: 'relative', 
        display: 'inline-block',
        border: `${borderWidth}px solid #000`,
        borderRadius: `${borderRadius}px`,
        padding: `${padding}px ${padding}px ${bottomPadding}px ${padding}px`,
        background: '#fff'
      }}>
        {children}
        <div style={{
          position: 'absolute',
          bottom: `${bottomOffset}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: `${fontSize}px`,
          fontWeight: '600',
          color: '#000',
          whiteSpace: 'nowrap'
        }}>
          {frameText}
        </div>
      </div>
    );
  },

  roundedBlack: ({ children, frameText }) => {
    const qrSize = children?.props?.size || 240;
    const scale = qrSize / 240;
    const padding = Math.round(16 * scale);
    const bottomPadding = Math.round(65 * scale);
    const fontSize = Math.round(22 * scale);
    const bottomOffset = Math.round(23 * scale);
    const borderWidth = Math.max(3, Math.round(3 * scale));
    const borderRadius = Math.round(30 * scale);

    return (
      <div style={{ 
        position: 'relative', 
        display: 'inline-block',
        border: `${borderWidth}px solid #000`,
        borderRadius: `${borderRadius}px`,
        padding: `${padding}px ${padding}px ${bottomPadding}px ${padding}px`,
        background: '#000'
      }}>
        {children}
        <div style={{
          position: 'absolute',
          bottom: `${bottomOffset}px`,
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: `${fontSize}px`,
          fontWeight: '600',
          color: '#fff',
          whiteSpace: 'nowrap'
        }}>
          {frameText}
        </div>
      </div>
    );
  },

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
