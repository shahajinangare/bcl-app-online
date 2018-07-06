import React, { Component } from 'react';

import CompareoffersContent from '../../components/creditcard/compareoffers';
//import ComselectedContent from '../../components/creditcard/comselected';
import ComselectedContent from '../../view/creditcard/comselected';
import ReactDOM from 'react-dom';


class Comselected extends Component {

    outData = [];
    constructor(props) {
        super(props);

        this.getcardfeatures = this.getcardfeatures.bind(this);
    }

    getcardfeatures() {
        ReactDOM.render(<CompareoffersContent />, document.getElementById("sub-content"));


    }

    componentDidMount() {

        return <ComselectedContent Comparesofferinput={this.props.Comparesofferinput} />
    }


    render() {
        return <ComselectedContent Comparesofferinput={this.props.Comparesofferinput} />
    }
}

export default Comselected;