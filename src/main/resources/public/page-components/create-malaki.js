class CreateMalaki extends Component{

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