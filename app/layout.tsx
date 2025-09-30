import './globals.css';
import { ThemeProvider } from '../components/providers/ThemeProvider';

export const metadata = {
  title: 'AMS Dashboard',
  description: 'Agency Management System',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
