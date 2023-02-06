class NavBar{

    constructor(){
        this.mounted = false;
    }

    render(){

        //creating elements
        const navBar = document.createElement("div");
        const title = document.createElement("h1");

        //assigning classes
        navBar.classList.add("navbar")

        //assigning properties
        title.innerText = "LocalBitz";

        //constructing component
        navBar.appendChild(title);

        return navBar;
    }

    mount(element){
        if(this.mounted === false){
            element.appendChild(this.render());
            this.mounted = true;
        }
    }
}

export {NavBar};