import Navigation from "./Navigation"
import Submenu from "./Submenu"
import Header from "./Header"


const Layout = ({ children }) => {
    return (  
        <div className="grid grid-rows-16 grid-cols-7 grid-flow-col h-screen">
			<Navigation/>
			<Header/>
			<Submenu/>
			<div className="row-span-14 col-span-6 p-3 overflow-y-auto">
				{ children }
			</div>
		</div>
    )
}
 
export default Layout;