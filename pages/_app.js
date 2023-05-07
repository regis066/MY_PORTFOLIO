import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <main className='bg-cover' style={{ backgroundImage: `url("/willian.jpg")` }}>
    <Component {...pageProps} />
    </main>
    )
}

export default MyApp
