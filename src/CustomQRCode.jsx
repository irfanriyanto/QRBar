import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const CustomQRCode = ({ 
  value, 
  size = 240, 
  qrColor = '#000000', 
  bgColor = '#FFFFFF',
  qrStyle = 'squares',
  cornerStyle = 'square',
  logoImage = null,
  logoSize = 0.3,
  gradientType = 'solid',
  gradientColor1 = '#000000',
  gradientColor2 = '#4B5563',
  frameStyle = 'none',
  frameText = 'Scan me!'
}) => {
  const ref = useRef(null);
  const qrCode = useRef(null);

  useEffect(() => {
    // Map our style names to qr-code-styling options
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

    if (!qrCode.current) {
      qrCode.current = new QRCodeStyling({
        width: size,
        height: size,
        data: value,
        margin: 10,
        qrOptions: {
          typeNumber: 0,
          mode: 'Byte',
          errorCorrectionLevel: 'H'
        },
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: logoImage ? logoSize : 0,
          margin: 5,
          crossOrigin: 'anonymous'
        },
        dotsOptions: {
          type: dotsOptions[qrStyle] || 'square',
          color: dotsColor,
          gradient: dotsGradient
        },
        backgroundOptions: {
          color: bgColor
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
      qrCode.current.append(ref.current);
    }
  }, []);

  useEffect(() => {
    if (qrCode.current) {
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

      qrCode.current.update({
        data: value,
        dotsOptions: {
          type: dotsOptions[qrStyle] || 'square',
          color: dotsColor,
          gradient: dotsGradient
        },
        backgroundOptions: {
          color: bgColor
        },
        cornersSquareOptions: {
          type: cornerSquareOptions[cornerStyle] || 'square',
          color: gradientType === 'solid' ? qrColor : gradientColor1
        },
        cornersDotOptions: {
          type: cornerDotOptions[cornerStyle] || 'square',
          color: gradientType === 'solid' ? qrColor : gradientColor1
        },
        image: logoImage || undefined,
        imageOptions: {
          hideBackgroundDots: true,
          imageSize: logoImage ? logoSize : 0,
          margin: 5,
          crossOrigin: 'anonymous'
        }
      });
    }
  }, [value, qrColor, bgColor, qrStyle, cornerStyle, logoImage, logoSize, gradientType, gradientColor1, gradientColor2]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div ref={ref} />
      {frameStyle !== 'none' && (
        <div style={{
          position: 'absolute',
          bottom: frameStyle === 'bottom' ? '-30px' : frameStyle === 'top' ? 'auto' : '50%',
          top: frameStyle === 'top' ? '-30px' : 'auto',
          left: '50%',
          transform: frameStyle === 'bottom' || frameStyle === 'top' ? 'translateX(-50%)' : 'translate(-50%, -50%)',
          background: frameStyle === 'rounded' ? 'rgba(0, 0, 0, 0.8)' : frameStyle === 'bold' ? 'rgba(0, 0, 0, 0.9)' : '#000',
          color: '#fff',
          padding: frameStyle === 'rounded' ? '8px 20px' : frameStyle === 'bold' ? '10px 24px' : '6px 16px',
          borderRadius: frameStyle === 'rounded' ? '20px' : frameStyle === 'bold' ? '8px' : '4px',
          fontSize: frameStyle === 'bold' ? '14px' : '12px',
          fontWeight: frameStyle === 'bold' ? '700' : '600',
          whiteSpace: 'nowrap',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
          border: frameStyle === 'bold' ? '2px solid #fff' : 'none',
          zIndex: 10
        }}>
          {frameText}
        </div>
      )}
    </div>
  );
};

export default CustomQRCode;
