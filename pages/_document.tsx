import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
          <Head>
          <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet"/>
          </Head>
      <body className='bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}