import "./globals.css";
import Nav from '../components/Nav';
import { Roboto, Nunito_Sans } from 'next/font/google';
import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

const session = await getServerSession(options);

const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  variable: '--font-roboto_900',
  display: 'swap',
})

const nunito_sans_xlght = Nunito_Sans({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-nunito_sans_xlght',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata = {
  title: "foster-hub Project",
  description: "Animal foster hub for all your foster needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${nunito_sans_xlght.variable}`}> 
      <body className="min-h-screen bg-gray-200">
        
        <Nav session={session}/>

        <div className="flex justify-center items-center p-20">
          {children}
        </div>
      </body>
    </html>
  );
}
