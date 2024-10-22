// components
import Head from 'next/head'
import App from '../components/App'

export default function Home() {
  return (
    <>
      <Head>
        <title>Список пользователей</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <App />
      <div id="portal"></div>
    </>
  )
}
