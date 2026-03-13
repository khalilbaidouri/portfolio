import React from 'react';

const BotIcon = ({
  size = undefined,
  color = '#000000',
  strokeWidth = 2,
  background = 'transparent',
  opacity = 1,
  rotation = 0,
  shadow = 0,
  flipHorizontal = false,
  flipVertical = false,
  padding = 0
}) => {
  const transforms = [];
  if (rotation !== 0) transforms.push(`rotate(${rotation}deg)`);
  if (flipHorizontal) transforms.push('scaleX(-1)');
  if (flipVertical) transforms.push('scaleY(-1)');

  const viewBoxSize = 24 + (padding * 2);
  const viewBoxOffset = -padding;
  const viewBox = `${viewBoxOffset} ${viewBoxOffset} ${viewBoxSize} ${viewBoxSize}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        opacity,
        transform: transforms.join(' ') || undefined,
        filter: shadow > 0 ? `drop-shadow(0 ${shadow}px ${shadow * 2}px rgba(0,0,0,0.3))` : undefined,
        backgroundColor: background !== 'transparent' ? background : undefined
      }}
    >
      <path fill="currentColor" d="M18 10h2v2h-2zm-6 0h2v2h-2z"/><path fill="currentColor" d="M26 20h-5v-2h1a2 2 0 0 0 2-2v-4h2v-2h-2V8a2 2 0 0 0-2-2h-2V2h-2v4h-4V2h-2v4h-2a2 2 0 0 0-2 2v2H6v2h2v4a2 2 0 0 0 2 2h1v2H6a2 2 0 0 0-2 2v8h2v-8h20v8h2v-8a2 2 0 0 0-2-2M10 8h12v8H10Zm3 10h6v2h-6Z"/>
    </svg>
  );
};

export default BotIcon;