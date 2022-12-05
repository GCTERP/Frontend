import Link from "next/link"

import users from "../utilities/users"

const Item = ({ name, route, user, menu, submenu }) => {
    return (
        <Link href={"/" + user + "/" + menu + "/" + route} className={`text-l p-3 px-10 ${submenu == route && "border-b-2 border-blue-400 font-bold text-black"}`}>
            {name}
        </Link>
    )
}

const Submenu = ({ active }) => {

    const user = active[1], menu = active[2], submenu = active[3]

    const content = users[user] && users[user].filter(item => item.route == menu)[0]

    const status = content && content.menu && content.menu.length > 0

    return (  
        <div className={`col-span-6 ${status ? "border-b" : ""} flex`}>
        {
            status ? content.menu.map(item => (
                <Item key={item.key} name={item.name} route={item.route} user={user} menu={menu} submenu={submenu ?? ""}/>
            )) : <div className="text-l font-bold p-4">{ content && content.name }</div>
        }
        </div>
    )
}
 
export default Submenu;