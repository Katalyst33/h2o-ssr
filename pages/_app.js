import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>

    <nav className='flex justify-center w-full bg-blue-500'>
      <ul className='flex  py-4 gap-x-4'>
        <li>      <Link href="/">Home</Link></li>
        <li>      <Link href="/about">About Us</Link></li>
        <li>About</li>
        <li>All Products</li>
      </ul>
    </nav>

    <Component {...pageProps} />
    <h1>Footer</h1>

  </>
}

export default MyApp
