import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
    <div className='grid grid-cols-12 gap-6 px-5 lg:px-12 my-14 sm:px-20 md:px-32'>
      <div className='col-span-12 lg:col-span-3 p-4 text-center bg-white dark:bg-dark-500 rounded-2xl'>
        <Sidebar></Sidebar>
      </div>
      <div className='col-span-12 lg:col-span-9 bg-white rounded-2xl flex flex-col overflow-hidden dark:bg-dark-500'>
        <Navbar></Navbar>
      <Component {...pageProps} />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default MyApp
