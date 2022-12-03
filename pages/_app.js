import "../styles/index.css"
import "@fontsource/montserrat"

import Layout from "../layouts/Layout.js"

const App = ({ Component, pageProps }) => {
  return ( 
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}
 
export default App;