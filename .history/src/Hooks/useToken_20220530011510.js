import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log(user, 'inside');
    }, [user])
    return [token]
}
export default useToken;