class Malakis extends Component{

    async load(){
        let result = await fetch(apiHost + '/api/malakis')    
        let data = await result.json()
        for(let i = 0; i<data.length; i++){
            data[i] = new Malaki(data[i]).render()
        }
        this.data = data

    }

    get template() { 
        return `
            <h2>Your malakis</h2>
            <section>
                ${this.data.join('')}
            </section>
        `
    }

}