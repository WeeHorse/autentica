class CreateMalaki extends Component{

    events(){
        $('body').on('submit', '#create-malaki', this.create)
    }

    async create(event){
        event.preventDefault()
        
        let result = await fetch(apiHost + '/api/malakis', {
            method: 'post',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.accessToken
            },
            body: JSON.stringify({
                "name": document.querySelector('#malaki-name').value
            })
        })
        let data = await result.json()
        console.log(result, data)
    }

    get template(){
        return `
            <h1>Create your Malaki, sir</h1>
            <form id="create-malaki">
                <input type="text" id="malaki-name">
                <input type="submit" value="Save">
            </form>
            `
    }

}