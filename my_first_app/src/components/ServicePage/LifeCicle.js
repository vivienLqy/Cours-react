import { Component } from 'react'


class LifeCicle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "soso",
            step: 1
        }
        console.log(`Etape  ${this.state.step} : je suis dans le contructeur `);
    }
    componentDidMount() {
        console.log(`Etape  ${this.state.step} : je suis dans le didmount `);
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
        console.log(`Etape  ${this.state.step} : je suis dans le setState du didmount `);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(`Etape  ${this.state.step} : je suis dans le didUpdate `);
        console.log(prevState);
        console.log(this.state);
    }
    render() {
        console.log(`Etape  ${this.state.step} : je suis dans le render `);
        return (
            <div>
                {console.log(`Etape ${this.state.step} : je suis dans la mise a jour du dom `)}
                <p>chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
            </div>
        )
    }
}

export default LifeCicle