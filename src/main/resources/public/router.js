
function changeRoute(){    
    let page =  location.hash.replace('#','')
    if(!page){
        page = 'firstpage'
    }
    // vi kollar först om det finns en registrerad page (annars, 404)
    if(!pages[page]){
        console.log('would render a 404')
        return
    }
    // vi undersöker hashen pages om vi har en instans eller en klass, 
    // har vi en klass men ingen instans, ersätter vi klassen med dess instans
    if(pages[page].constructor.name === 'Function'){
        pages[page] = new pages[page]
    }
    // vi använder instansen
    pages[page].render()
}
