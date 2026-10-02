import React from 'react';

interface KiranForgeLogoProps {
  className?: string;
  size?: number | string;
  showGlow?: boolean;
}

export const KiranForgeLogo: React.FC<KiranForgeLogoProps> = ({
  className = 'w-9 h-9',
  size,
  showGlow = true,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={style}
      aria-label="Kiran Forge Official Logo"
    >
      <defs>
        {/* Deep Sapphire to Electric Azure Gradient */}
        <linearGradient id="kfRoyalGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003B99" />
          <stop offset="45%" stopColor="#0066FF" />
          <stop offset="85%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#00F0FF" />
        </linearGradient>

        {/* Radiant Cyan Highlight Gradient */}
        <linearGradient id="kfRadiantCyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B9F5FF" />
          <stop offset="25%" stopColor="#00E5FF" />
          <stop offset="65%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#0044CC" />
        </linearGradient>

        {/* Metallic Bevel Dark Side */}
        <linearGradient id="kfDarkBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#002266" />
          <stop offset="60%" stopColor="#0044B3" />
          <stop offset="100%" stopColor="#0080FF" />
        </linearGradient>

        {/* Head Profile Crescent Taper Gradient */}
        <linearGradient id="kfProfileCrescent" x1="10%" y1="20%" x2="90%" y2="80%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
          <stop offset="20%" stopColor="#00F5FF" />
          <stop offset="60%" stopColor="#00B4FF" />
          <stop offset="90%" stopColor="#0055FF" />
          <stop offset="100%" stopColor="#0088FF" />
        </linearGradient>

        {/* High-Intensity Atmospheric Neon Glow */}
        <filter id="kfAuraGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft Ambient Node Glow */}
        <filter id="kfNodeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Atmospheric Background Ambient Radiance (retains rich dark contrast) */}
      {showGlow && (
        <circle
          cx="280"
          cy="260"
          r="190"
          fill="url(#kfRadiantCyan)"
          opacity="0.08"
          filter="url(#kfAuraGlow)"
        />
      )}

      {/* ========================================================
          1. HUMAN HEAD PROFILE SILHOUETTE (Glowing Crescent & Rim)
          ======================================================== */}
      {/* Outer Glow Halo Layer */}
      <path
        d="M 105 186
           C 132 120, 202 62, 288 62
           C 372 62, 436 118, 446 198
           C 448 212, 434 232, 447 248
           C 458 260, 468 270, 460 286
           C 450 298, 432 304, 442 318
           C 448 327, 444 338, 432 348
           C 424 356, 438 372, 430 386
           C 418 400, 386 408, 362 416
           C 345 422, 338 434, 338 446"
        stroke="url(#kfProfileCrescent)"
        strokeWidth="13"
        strokeLinecap="round"
        fill="none"
        filter="url(#kfAuraGlow)"
        opacity="0.9"
      />

      {/* Razor-sharp Core Rim Outline */}
      <path
        d="M 108 186
           C 134 122, 202 64, 288 64
           C 370 64, 434 118, 444 198
           C 446 212, 432 232, 445 248
           C 456 260, 466 270, 458 286
           C 448 298, 430 304, 440 318
           C 446 327, 442 338, 430 348
           C 422 356, 436 372, 428 386
           C 416 400, 384 408, 360 416
           C 344 422, 338 434, 338 446"
        stroke="#E0F7FF"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />

      {/* Crescent Taper Wing behind 'A' apex */}
      <path
        d="M 105 186 C 112 165, 126 145, 142 128"
        stroke="url(#kfRadiantCyan)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* ========================================================
          2. BRAIN NEURAL CIRCUITRY NETWORK (Microchip Pathways)
          ======================================================== */}
      <g stroke="url(#kfRadiantCyan)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#kfNodeGlow)">
        {/* Top Horizontal Run 1 */}
        <path d="M 230 114 L 284 114 L 304 134 L 338 134" />
        
        {/* High Frequency Stepped Branch 2 */}
        <path d="M 204 138 L 254 138 L 274 158 L 324 158 L 344 178 L 372 178" />
        
        {/* Mid-Tier Connection 3 */}
        <path d="M 220 168 L 244 168 L 264 192 L 308 192 L 324 208 L 358 208" />

        {/* Central Vertical Bus & Front-Facing Projections */}
        <path d="M 236 198 L 268 198 L 288 222 L 334 222 L 344 232 L 344 278 L 360 294 L 388 294" />

        {/* Facial Profile Projection Traces */}
        <path d="M 344 256 L 374 256 L 394 236 L 406 236" />
        <path d="M 344 304 L 344 332 L 364 352 L 386 352" />
        <path d="M 344 322 L 344 366 L 356 378" />
      </g>

      {/* Core Circuit Bright Wire Overlay */}
      <g stroke="#E0F7FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
        <path d="M 230 114 L 284 114 L 304 134 L 338 134" />
        <path d="M 204 138 L 254 138 L 274 158 L 324 158 L 344 178 L 372 178" />
        <path d="M 220 168 L 244 168 L 264 192 L 308 192 L 324 208 L 358 208" />
        <path d="M 236 198 L 268 198 L 288 222 L 334 222 L 344 232 L 344 278 L 360 294 L 388 294" />
        <path d="M 344 256 L 374 256 L 394 236 L 406 236" />
        <path d="M 344 304 L 344 332 L 364 352 L 386 352" />
      </g>

      {/* Spherical Neural Nodes / Pads with Specular Centers */}
      <g fill="url(#kfRadiantCyan)" filter="url(#kfAuraGlow)">
        <circle cx="230" cy="114" r="8" />
        <circle cx="338" cy="134" r="8" />
        <circle cx="204" cy="138" r="8" />
        <circle cx="372" cy="178" r="8" />
        <circle cx="220" cy="168" r="8" />
        <circle cx="358" cy="208" r="8" />
        <circle cx="236" cy="198" r="8" />
        <circle cx="406" cy="236" r="8" />
        <circle cx="388" cy="294" r="8" />
        <circle cx="386" cy="352" r="8" />
        <circle cx="356" cy="378" r="8" />
      </g>

      {/* Concentric Node Rings & White Hot Specular Cores */}
      <g fill="#FFFFFF">
        <circle cx="230" cy="114" r="3.2" />
        <circle cx="338" cy="134" r="3.2" />
        <circle cx="204" cy="138" r="3.2" />
        <circle cx="372" cy="178" r="3.2" />
        <circle cx="220" cy="168" r="3.2" />
        <circle cx="358" cy="208" r="3.2" />
        <circle cx="236" cy="198" r="3.2" />
        <circle cx="406" cy="236" r="3.2" />
        <circle cx="388" cy="294" r="3.2" />
        <circle cx="386" cy="352" r="3.2" />
        <circle cx="356" cy="378" r="3.2" />
      </g>

      {/* ========================================================
          3. VOLUMETRIC 3D 'A' MONOGRAM
          ======================================================== */}
      {/* Base Drop Shadow for 'A' */}
      <path
        d="M 172 176 L 260 440 L 198 440 L 165 330 L 105 330 L 48 440 Z"
        fill="#001844"
        opacity="0.8"
      />

      {/* Main Right Facet of 'A' (Radiant Electric Blue to Cyan) */}
      <path
        d="M 172 176 
           L 260 440 
           L 198 440 
           L 165 330 
           L 172 176 Z"
        fill="url(#kfRoyalGrad)"
      />

      {/* Left Shaded Flank Facet of 'A' (Deep Metallic Bevel) */}
      <path
        d="M 172 176 
           L 165 330 
           L 105 330 
           L 48 440 
           L 116 295 
           L 172 176 Z"
        fill="url(#kfDarkBevel)"
      />

      {/* Inner Triangular Cutout Window of 'A' */}
      <path
        d="M 163 248 
           L 184 310 
           L 122 310 
           Z"
        fill="#000000"
      />

      {/* Inner Window Glowing Cyan Edge */}
      <path
        d="M 163 248 L 184 310 L 122 310 Z"
        stroke="url(#kfRadiantCyan)"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
        opacity="0.8"
      />

      {/* Sharp Diagonal Specular Apex Ridge along 'A' */}
      <path
        d="M 172 176 L 260 440"
        stroke="#E0F7FF"
        strokeWidth="3.2"
        strokeLinecap="round"
        filter="url(#kfNodeGlow)"
      />

      {/* Bottom Ground Accent Bar of 'A' */}
      <path
        d="M 48 440 L 198 440"
        stroke="url(#kfRadiantCyan)"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* ========================================================
          4. VOLUMETRIC 3D 'I' MONOGRAM
          ======================================================== */}
      {/* Main Right Pillar Facet */}
      <path
        d="M 272 228 
           L 295 244 
           L 310 244 
           L 310 440 
           L 272 440 
           Z"
        fill="url(#kfRoyalGrad)"
      />

      {/* Front Bevel Highlight Facet of 'I' (Ultra Cyan Luminous) */}
      <path
        d="M 272 228 
           L 295 244 
           L 295 440 
           L 272 440 
           Z"
        fill="url(#kfRadiantCyan)"
      />

      {/* Angled Top Bevel Edge Reflection */}
      <path
        d="M 272 228 L 295 244 L 310 244"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        filter="url(#kfNodeGlow)"
      />

      {/* Right Edge Depth Line */}
      <path
        d="M 310 244 L 310 440"
        stroke="url(#kfDarkBevel)"
        strokeWidth="3"
        opacity="0.9"
      />
    </svg>
  );
};
