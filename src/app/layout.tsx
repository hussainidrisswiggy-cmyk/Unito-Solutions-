import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unito Solutions Pvt. Ltd.',
  description: 'Industrial lifting equipment, rigging hardware, fasteners and power tools.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
