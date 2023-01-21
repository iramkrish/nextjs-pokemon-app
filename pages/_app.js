import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((component) => component)
  return getLayout(<Component {...pageProps}/>)
}

export default MyApp
