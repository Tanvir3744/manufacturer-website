import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { user: email };
        if (email) {
            const url = `https://fathomless-scrubland-15745.herokuapp.com/user/${ email }`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(currentUser),
            })
                .then(response => response.json())
                .then(data => {
                    let accessToken = data.token;
                    setToken(accessToken)
                    console.log(data)
                    toast('user updated successfully')
                })
        }
    }, [user])
    return [token]
}
export default useToken;