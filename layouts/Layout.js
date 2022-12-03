import Navigation from "./Navigation"
import Submenu from "./Submenu"
import Header from "./Header"

import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const Layout = ({ children }) => {
	
	const router = useRouter()

	const [ active, setActive ] = useState([])

    useEffect(() => { setActive(router.asPath.split('/')) }, [router])

    return (  
        <div className="grid grid-rows-16 grid-cols-7 grid-flow-col h-screen">
			<Navigation active={active}/>
			<Header/>
			<Submenu active={active}/>
			<div className="row-span-14 col-span-6 p-3 overflow-y-auto">
				{ children }
			</div>
		</div>
    )
}
 
export default Layout;