import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const user = user?.user?.email;
        const currentUser = { user: user };
        const url = `http://localhost:5000/user${email}`;
    
    }, [user])
    return [token]
}
export default useToken;