
import Footer from '../compoment/home_page/Footer'
import Header from '../compoment/home_page/Header'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }) {
  return(
    <>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <Header></Header>
     <Component {...pageProps} />
     <Footer></Footer>
     </QueryClientProvider>
     </Provider>
    </>
  )
}

export default MyApp
