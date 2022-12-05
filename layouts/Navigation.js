import Image from "next/image"
import Link from "next/link"

import users from "../utilities/users"
import logo from "../public/logo.png"

import Icon from "../utilities/Icon"

const Title = () => {
    return ( 
        <div className="flex place-content-center border-r">
            <div className="grid place-content-center w-1/3">
                <Image src={logo} width={35} height={35} alt="GCT"/>
            </div>
            <div className="grid items-center w-2/3 text-xl font-black">
                <span>GCTERP</span>
            </div>
        </div>
    )
}

const Credits = () => {
    return ( 
        <div className="flex place-content-center border-r cursor-pointer">
            <div className="grid place-content-center w-1/3 text-slate-400">
                <Icon name="groups"/>
            </div>
            <div className="grid items-center w-2/3 text-slate-400">
                <span>By Students</span>
            </div>
        </div>
    )
}

const User = ({role}) => {
    return ( 
        <div className="border-b border-r flex place-content-center pb-1">
            <div className="w-1/3 grid place-content-center">
                <Icon name="account_circle" outline/>
            </div>
            <div className="grid items-center w-2/3">
                <div className="text-sm font-bold">Vishnukumar D</div>
                <div className="text-sm">{role}</div>
            </div>
        </div>
    )
}

const NavItem = ({ name, icon, route, active }) => {
	return (
		<Link href={"/" + active[1] + "/" + route} className={`flex place-content-center ${active[2] == route && "bg-blue-50 border-r-2 border-blue-400"} py-2 cursor-pointer`}>
			<div className={`grid place-content-center w-1/3 ${active[2] == route && "text-blue-400"}`}>
				<Icon name={icon}/>
			</div>
			<div className={`grid items-center w-2/3 ${active[2] == route && "text-blue-400"}`}>
				<span>{name}</span>
			</div>
		</Link>
	)
}

const Navigation = ({ active }) => {
    return (<>        
        <Title/>
        <div className="border-r"></div>
        <User role={active[1]}/>
        <div className="row-span-12 pt-5 border-b border-r">
        {   
            active[2] && users[active[1]].map(action => (
                <NavItem key={action.key} name={action.name} icon={action.icon} route={action.route} active={active}/>
            ))
        }   
        </div>
        <Credits/>
    </>)
}

export default Navigation;