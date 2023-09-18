export const setAuthToken = user => {
    const currentUser = {
        email: user.email,
    }
    const aaa = "http://localhost:5000"
    console.log(aaa)
    // save user and get token
    fetch(`http://localhost:5000/user/${user?.email}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(currentUser),
        }).then(res => res.json()).then(data => {
            console.log(data)
            // save token in local storage
            localStorage.setItem('aircnc-token', data.token)
        })
}