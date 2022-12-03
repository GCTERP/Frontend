import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import { AuthContext } from "./_app"

const Home = () => {

	const router = useRouter()

	const { auth } = useContext(AuthContext)

	useEffect(() => { router.push("/" + (auth.student ? "student/attendance" : auth.role + "/requests")) }, [])

	return null
}

export default Home