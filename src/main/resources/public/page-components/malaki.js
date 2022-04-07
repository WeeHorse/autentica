class Malaki {

    constructor(data){   
        // loop som lägger till alla egenskaper i data-objektet som klassvariabler
        for(let propName in data){
            let propValue = data[propName]
            this[propName] = propValue
        }
    }

    render(){
        return `
            <article>                
                <h3>${this.name}</h3>
            </article>
        `
    }

}