// src/components/LogoTilt.tsx
import Tilt from 'react-parallax-tilt';
import logo from '@/assets/logo.png';
import '@/styles/logoSpin.css';
import React from 'react';

type Props = {
  /** size in px or any CSS length (e.g. 40, "48px", "3rem") */
  size?: number | string;
  className?: string;
};

export default function LogoTilt({ size = 40, className = '' }: Props) {
  const s = typeof size === 'number' ? `${size}px` : size;

  return (
    // Parent controls size; unchanged
    <div className={className} style={{ width: s, height: s, margin: 0 }}>
      <Tilt
        /* disable hover/gyro/scale/glare — no interactive effects */
        tiltEnable={false}
        gyroscope={false}
        scale={1}
        glareEnable={false}

        /* keep your original config otherwise */
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        perspective={1000}
        transitionSpeed={800}
      >
        {/* Size passed via CSS var; animation handled in CSS */}
        <div className="logo-3d-cube rock" style={{ ['--logo-size' as any]: s }}>
          <div className="cube-face front"><img src={logo} alt="Logo Front" /></div>
          <div className="cube-face back"><img src={logo} alt="Logo Back" /></div>
          <div className="cube-face right"><img src={logo} alt="Logo Right" /></div>
          <div className="cube-face left"><img src={logo} alt="Logo Left" /></div>
          <div className="cube-face top"><img src={logo} alt="Logo Top" /></div>
          <div className="cube-face bottom"><img src={logo} alt="Logo Bottom" /></div>
        </div>
      </Tilt>
    </div>
  );
}
