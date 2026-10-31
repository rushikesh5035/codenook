"use client";

export const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-pointer rounded-lg transition-colors [--show-color:var(--color-brand)]">
      {children}
    </div>
  );
};
