import Link from 'next/link'
import AppHeader from '../layouts/AppHeader'
import '../styles/globals.css'
import ShoppingCartComponent from './components/ShoppingCartComponents'

function MyApp({ Component, pageProps }) {
  return <>

    <nav className='flex justify-center w-full bg-blue-500'>


      <AppHeader />


    </nav>


    <Component {...pageProps} />
    <h1>Footer</h1>

  </>
}

export default MyApp
