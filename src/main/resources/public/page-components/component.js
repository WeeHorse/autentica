class Component{

    async render(selector = 'main'){ // default to main element
        if(this.events){
            this.events() // register any event listeners
        }
        if(this.load){
            await this.load() // run any loader
        } 
        $(selector).html(this.template) // apply content to DOM
    }

}