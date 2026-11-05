"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculate = () => {
      const target = new Date(targetDate).getTime();
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-6">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-xl bg-navy-800/80 border border-navy-700 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-2 text-xs text-navy-300 uppercase tracking-wider">{u.label}</div>
        </div>
      ))}
    </div>
  );
}
