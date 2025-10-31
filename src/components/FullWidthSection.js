// components/FullWidthSection.jsx
'use client';

'use client';

export default function FullWidthSection({ children, className = '' }) {
  return (
    <section className={`w-full ${className}`} style={{ margin: 0, padding: 0 }}>
      <div className="w-full mx-auto">
        {children}
      </div>
    </section>
  );
}