class Login extends Component{

    

    events(){
        $('body').on('submit', '#login', this.login)
    }

    async login(event){
        event.preventDefault()
        let result = await fetch(apiHost + '/api/auth/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": document.querySelector('#login-username').value,
                "password": document.querySelector('#login-password').value,
            })
        })
        let data = await result.json()
        console.log(result, data)
        user = data;
    }

    get template(){
        return `
            <h1>Login user</h1>
            <form id="login">
                <legend>Login</legend>
                <input type="text" id="login-username" placeholder="username">
                <input type="password" id="login-password" placeholder="password">
                <input type="submit" value="Login">
            </form>
        `
    }

}