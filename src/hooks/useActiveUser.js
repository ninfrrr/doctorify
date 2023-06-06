import { useEffect, useState } from 'react';

export default function useActiveUser() {
    const [user, setUser] = useState();
    const [accessToken, setAccessToken] = useState('');
    const [tokenType, setTokenType] = useState('');

    useEffect(() => {
        try {
            const userString = localStorage.getItem('user');
            setUser(JSON.parse(userString));
            setAccessToken(localStorage.getItem('access_token'));
            setTokenType(localStorage.getItem('token_type'));
        } catch (error) {
            setUser(null);
        }
    }, []);
    return { user, accessToken, tokenType };
}
