import React, {Component} from 'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Child Component</h1>
            </div>
        );
    }
}

export default ChildComponent;