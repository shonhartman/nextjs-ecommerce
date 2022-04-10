import Page from '../components/Page'
import Router from 'next/router'
import 'nprogress/nprogress.css'
import '../styles/globals.css'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  ) 
}

export default MyApp
