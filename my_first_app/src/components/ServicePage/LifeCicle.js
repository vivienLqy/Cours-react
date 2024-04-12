import { Component } from 'react'

class LifeCicle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "soso",
            step: 1
        }
        console.log(`Etape 1 ${this.state.step} : je suis dans le contructeur `);
    }

    render() {
        console.log(`Etape 1 ${this.state.step} : je suis dans le render `);
        return (
            <div>
                {console.log(`Etape 1 ${this.state.step} : je suis dans le return `)}
                <p>chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
            </div>
        )
    }
}

export default LifeCicle