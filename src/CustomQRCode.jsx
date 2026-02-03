import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

const CustomQRCode = ({ 
  value, 
  size = 240, 
  qrColor = '#000000', 
  bgColor = '#FFFFFF',
  qrStyle = 'squares',
  cornerStyle = 'square'
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
          imageSize: 0.4,
          margin: 0
        },
        dotsOptions: {
          type: dotsOptions[qrStyle] || 'square',
          color: qrColor
        },
        backgroundOptions: {
          color: bgColor
        },
        cornersSquareOptions: {
          type: cornerSquareOptions[cornerStyle] || 'square',
          color: qrColor
        },
        cornersDotOptions: {
          type: cornerDotOptions[cornerStyle] || 'square',
          color: qrColor
        }
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

      qrCode.current.update({
        data: value,
        dotsOptions: {
          type: dotsOptions[qrStyle] || 'square',
          color: qrColor
        },
        backgroundOptions: {
          color: bgColor
        },
        cornersSquareOptions: {
          type: cornerSquareOptions[cornerStyle] || 'square',
          color: qrColor
        },
        cornersDotOptions: {
          type: cornerDotOptions[cornerStyle] || 'square',
          color: qrColor
        }
      });
    }
  }, [value, qrColor, bgColor, qrStyle, cornerStyle]);

  return <div ref={ref} />;
};

export default CustomQRCode;
