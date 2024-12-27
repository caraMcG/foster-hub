import "./globals.css";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
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

const nunito_sans_400 = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-nunito_sans_400',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata = {
  title: "foster-hub Project",
  description: "Animal foster hub for all your foster needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${nunito_sans_xlght.variable} ${nunito_sans_400.variable}  overflow-y-scroll`}> 
      <body className="relative flex flex-col min-h-screen bg-slate-200">
        {/* background */}
        {/* <div className="absolute top-0 left-0 w-full h-1/4 bg-base_black z-0"></div> */}
        {/* main content */}
        <div className="flex-1 relative">
          <Nav session={session} />
        </div>
        <div className="flex justify-center items-center py-12 px-16 relative z-10">
          {children}
        </div>
        < Footer/>
      </body>
    </html>
  );
}
