class Register extends Component{

    events(){
        $('body').on('submit', '#register', this.register)
    }

    async register(event){
        event.preventDefault()
        
        let result = await fetch(apiHost + '/api/auth/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "username": document.querySelector('#register-username').value,
                "password": document.querySelector('#register-password').value,
                "email": document.querySelector('#register-email').value,
                "roles": ["user", "admin"]
            })
        })
        let data = await result.json()
        console.log(result, data)
    }

    get template(){
        return `
            <h1>Register user</h1>
            <form id="register">
                <legend>Register</legend>
                <input type="text" id="register-username" placeholder="username">
                <input type="email" id="register-email" placeholder="email">
                <input type="password" id="register-password" placeholder="password">
                <input type="submit" value="Register">
            </form>
        `
    }

}