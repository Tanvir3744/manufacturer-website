import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const user = user?.user?.email;
        const currentUser = { user: user };
        const url = `http://localhost:5000/user${ email }`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' :'application/json',
            },
            body: JSON.stringify(currentUser),
        })
        .then(response => response.json())
            .then(data => {
                console.log(data)
                toast('user updated successfully')
        })
    }, [user])
    return [token]
}
export default useToken;