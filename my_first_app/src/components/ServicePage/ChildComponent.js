import { Component } from 'react'

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        console.log(`Etape 1 : je suis dans le contructeur enfant `);
    }
    componentDidMount() {
        console.log(`Etape 1 : je suis dans le didmount enfant `);
    }
    render() {
        console.log(`Etape 1 : je suis dans le render enfant `);
        return (
            <div>
                {console.log(`Etape 1 : je suis dans le return enfant `)}
                ChildComponent
            </div>
        )
    }
}
export default ChildComponent;
