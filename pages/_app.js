import { createContext, useMemo, useState } from "react"

import "../styles/index.css"
import "@fontsource/montserrat"

import Layout from "../layouts/Layout"
import Login from "../auth/Login"

export const AuthContext = createContext(null)

const App = ({ Component, pageProps }) => {

	const [ auth, setAuth ] = useState({ status: true, role: "admin" })

	const Auth = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

  	return ( 
    	<AuthContext.Provider value={Auth}>
			{	auth.status ?
				<Layout>
					<Component {...pageProps}/>
				</Layout> : <Login />
			}
    	</AuthContext.Provider>
  	)
}
 
export default App;