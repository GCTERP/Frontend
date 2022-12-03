import { useRouter } from "next/router";

const Submenu = () => {

    const router = useRouter()

    console.log(router.asPath)

    return (  
        <div className="col-span-6 border-b">
            <div className="text-xl font-bold p-2 pl-4">
                Academics
            </div>
        </div>
    );
}
 
export default Submenu;