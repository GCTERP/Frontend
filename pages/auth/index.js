import { useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { AuthContext } from "../_app"

const Login = () => {

    const router = useRouter()

    const { auth } = useContext(AuthContext)

    useEffect(() => {

        if(auth.status)   router.push('/' + auth.role)

    }, [])

    return (  
        <div className="flex h-screen">
            <div className="m-auto p-5 w-1/4 border rounded-lg shadow-md">
                <div className="text-xl font-bold text-center">GCTERP</div>
                <div className="grid mt-10 relative">
                    <label htmlFor="email" className="text-sm w-fit px-1 absolute -top-[10px] left-2 bg-white">Email</label>
                    <input name="email" type="email" className="text-sm text-slate-400 border rounded p-2 focus:outline-none"/>
                </div>
                <div className="grid mt-10 relative">
                    <label htmlFor="passwd" className="text-sm w-fit px-1 absolute -top-[10px] left-2 bg-white">Password</label>
                    <input name="passwd" type="text" className="text-sm text-slate-400 border rounded p-2 focus:outline-none"/>
                </div>
                <div className="p-3 bg-blue-400 text-white font-semibold text-center rounded-lg mt-10">Login</div>
                <div className="flex justify-between mt-2">
                    <div className="text-xs mt-2 text-blue-500 text-center">
                        Create Account
                    </div>
                    <div className="text-xs mt-2 text-blue-500 text-center">
                        Forgot Password?
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Login;