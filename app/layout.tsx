import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Permit Launch Week',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' dir='ltr'>
      <body className={`antialiased`}>
        <main className='w-full overflow-clip'>{children}</main>
      </body>
    </html>
  );
}
