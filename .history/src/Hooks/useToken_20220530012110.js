import { useEffect, useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const user = user?.user?.email;
        const currentUser = { user: user };
        const url = `https://fathomless-scrubland-15745.herokuapp.com/user${email}`;
    
    }, [user])
    return [token]
}
export default useToken;