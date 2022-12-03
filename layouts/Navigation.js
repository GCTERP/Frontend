import Image from "next/image"
import logo from "../public/logo.png"
import Icon from "../utilities/Icon"

import { useState } from "react"

let activeUser = "admin"

const users = {
	admin: [
		{ name: "Academics", icon: "account_balance" },
		{ name: "Curriculum", icon: "library_books" }, 
		{ name: "Users", icon: "group" }, 
		{ name: "Students", icon: "school" }, 
		{ name: "Faculty", icon: "engineering" }, 
		{ name: "Feedback", icon: "star" },
		{ name: "Settings", icon: "settings" }
	],
	hod: [
		{ name: "Users", icon: "group" }, 
		{ name: "Students", icon: "school" }, 
		{ name: "Faculty", icon: "engineering" }, 
	],
	pc: [],
	ttc: [],
	fa: [],
	ci: [],
	student: []
}

const Title = () => {
    return ( 
        <div className="border-b border-r flex place-content-center">
            <div className="w-1/4 grid place-content-center">
                <Image src={logo} width={35} height={35} alt="GCT"/>
            </div>
            <div className="text-xl font-black grid items-center w-3/4">
                <span>GCTERP</span>
            </div>
        </div>
    );
}

const Credits = () => {
    return ( 
        <div className="border-r cursor-pointer flex place-content-center">
            <div className="text-slate-400 w-1/4 grid place-content-center">
                <Icon name="groups"/>
            </div>
            <div className="text-slate-400 grid items-center w-3/4">
                <span>By Students</span>
            </div>
        </div>
    );
}

const User = () => {
    return ( 
        <div className="row-span-2 border-r text-center p-3 align-middle">
            
        </div>
    );
}

const NavItem = ({ name, icon, active, setActive }) => {

	return (
		<div className={`py-2 cursor-pointer flex place-content-center ${active == name && "bg-blue-50 border-r-4 border-blue-400"}`} onClick={() => setActive(name)}>
			<div className={`w-1/4 grid place-content-center ${active == name && "text-blue-400"}`}>
				<Icon name={icon}/>
			</div>
			<div className={`grid items-center w-3/4 ${active == name && "font-semibold text-blue-400"}`}>
				<span>{name}</span>
			</div>
		</div>
	)
}

const Navigation = () => {

	const [ active, setActive ] = useState(users[activeUser][0].name)

    return (<>        
        <Title/>
        <User/>
        <div className="row-span-12 border-b border-r">
			{
				users[activeUser].map(role => {
					return <NavItem name={role.name} icon={role.icon} active={active} setActive={setActive}/>
				})
			}
        </div>
        <Credits/>
    </>)
}

export default Navigation;