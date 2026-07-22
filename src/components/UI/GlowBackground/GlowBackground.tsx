import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useMemo } from 'react'

const Wrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`

const Blob = styled(motion.div)<{ $variant: 'brand' | 'cyan' }>`
  position: absolute;
  width: 46vw;
  max-width: 640px;
  height: 46vw;
  max-height: 640px;
  border-radius: 50%;
  filter: blur(90px);
  opacity: ${({ $variant }) => ($variant === 'brand' ? 0.35 : 0.22)};
  background: ${({ theme, $variant }) =>
    $variant === 'brand'
      ? `radial-gradient(circle, ${theme.colors.brandGlow} 0%, transparent 70%)`
      : `radial-gradient(circle, ${theme.colors.cyan} 0%, transparent 70%)`};
`

const Dot = styled.span<{ $x: number; $y: number; $size: number; $delay: number }>`
  position: absolute;
  left: ${({ $x }) => $x}%;
  top: ${({ $y }) => $y}%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.brandGlow};
  opacity: 0.35;
  animation: pulse 5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay}s;

  @keyframes pulse {
    0%, 100% { opacity: 0.15; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.4); }
  }
`

interface GlowBackgroundProps {
  particles?: boolean
}

export function GlowBackground({ particles = true }: GlowBackgroundProps) {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        x: (i * 37) % 100,
        y: (i * 53) % 100,
        size: 2 + (i % 3),
        delay: (i % 6) * 0.7,
      })),
    []
  )

  return (
    <Wrap aria-hidden="true">
      <Blob
        $variant="brand"
        style={{ top: '-10%', left: '-8%' }}
        animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <Blob
        $variant="cyan"
        style={{ bottom: '-14%', right: '-10%' }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles && dots.map((d, i) => <Dot key={i} $x={d.x} $y={d.y} $size={d.size} $delay={d.delay} />)}
    </Wrap>
  )
}
