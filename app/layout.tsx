import './globals.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import PageLoader from "./components/PageLoader"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <body className="bg-wisertab-bg text-wisertab-text antialiased grid-bg">

         <PageLoader />
        <Nav />
        {children}
         <Footer />
         <Cursor />
      </body>
    </html>
  )
}
