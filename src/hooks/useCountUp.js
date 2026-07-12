import { useEffect, useState } from 'react';

function parseValue(raw) {
  const match = raw.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: '', number: 0, suffix: raw };
  const [, prefix, number, suffix] = match;
  return { prefix, number: Number(number), suffix };
}

export function useCountUp(raw, isActive, duration = 1200) {
  const { prefix, number, suffix } = parseValue(raw);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(number * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isActive, number, duration]);

  return `${prefix}${display}${suffix}`;
}
