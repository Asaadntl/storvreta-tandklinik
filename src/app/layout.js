import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoBlocks from '../components/InfoBlocks';


export const metadata = {
  title: 'Storvreta Tandklinik',
  description: 'Din lokala tandläkare i Storvreta',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <Navbar />
        {children}
        <InfoBlocks />
        <Footer />
      </body>
    </html>
  );
}
