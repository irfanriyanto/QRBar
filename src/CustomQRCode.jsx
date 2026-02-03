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
  gradientColor2 = '#4B5563'
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

  return <div ref={ref} />;
};

export default CustomQRCode;
