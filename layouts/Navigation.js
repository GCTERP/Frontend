import Image from "next/image"
import logo from "../public/logo.png"
import Icon from "../utilities/Icon"
import users from "../utilities/users"
import Link from "next/link"

const Title = () => {
    return ( 
        <div className="border-r flex place-content-center">
            <div className="w-1/3 grid place-content-center">
                <Image src={logo} width={35} height={35} alt="GCT"/>
            </div>
            <div className="text-xl font-black grid items-center w-2/3">
                <span>GCTERP</span>
            </div>
        </div>
    );
}

const Credits = () => {
    return ( 
        <div className="border-r cursor-pointer flex place-content-center">
            <div className="text-slate-400 w-1/3 grid place-content-center">
                <Icon name="groups"/>
            </div>
            <div className="text-slate-400 grid items-center w-2/3">
                <span>By Students</span>
            </div>
        </div>
    );
}

const Dummy = () => {
    return <div className="border-r"></div>
}

const User = () => {
    return ( 
        <div className="border-b border-r flex place-content-center pb-1">
            <div className="w-1/3 grid place-content-center">
                <Icon name="account_circle" outline/>
            </div>
            <div className="grid items-center w-2/3">
                <div className="text-sm font-bold">Vishnukumar D</div>
                <div className="text-sm">1918148</div>
            </div>
        </div>
    );
}

const NavItem = ({ name, icon, route, active }) => {

	return (
		<Link href={"/" + active[1] + "/" + route} className={`py-2 cursor-pointer flex place-content-center ${active[2] == route && "bg-blue-50 border-r-4 border-blue-400"}`}>
			<div className={`w-1/3 grid place-content-center ${active[2] == route && "text-blue-400"}`}>
				<Icon name={icon}/>
			</div>
			<div className={`grid items-center w-2/3 ${active[2] == route && "font-semibold text-blue-400"}`}>
				<span>{name}</span>
			</div>
		</Link>
	)
}

const Navigation = ({ active }) => {

    return (<>        
        <Title/>
        <Dummy/>
        <User/>
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