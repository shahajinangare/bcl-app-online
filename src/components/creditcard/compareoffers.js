import React, { Component } from 'react';
import CompareoffersContent from '../../view/creditcard/compareoffers';
import OfferListContent from '../../components/creditcard/offers';
import ReactDOM from 'react-dom';
const DEFAULT_TITLE = 'Default title';


class CompareOffer extends Component {

    CompareOfferData = [];
    constructor(props) {
        super(props);

        this.state = {
            CompareOfferData: [],
            DistinctOfferData: [],
            DistinctFeaturesDataunique: [],
            currentModal: null,
            title1: DEFAULT_TITLE,
        };


        const {
            title, isOpen, askToClose,
            onAfterOpen, onRequestClose, onChangeInput
          } = props;

        this.getcardfeatures = this.getcardfeatures.bind(this);
        this.closepopup = this.closepopup.bind(this);

    }

    toggleModal = key => event => {
        event.preventDefault();
        if (this.state.currentModal) {
          this.handleModalCloseRequest();
          return;
        }
    
        this.setState({
          ...this.state,
          currentModal: key,
          title1: DEFAULT_TITLE
        });
      }


      handleModalCloseRequest = () => {
        // opportunity to validate something and keep the modal open even if it
        // requested to be closed
        this.setState({
          ...this.state,
          currentModal: null
        });
      }
    
      handleInputChange = e => {
        let text = e.target.value;
        if (text == '') {
          text = DEFAULT_TITLE;
        }
        this.setState({ ...this.state, title1: text });
      }
    
      handleOnAfterOpenModal = () => {
        // when ready, we can access the available refs.
        this.heading && (this.heading.style.color = '#F00');
      }
    
    closepopup() {

        window.location.reload();
        //   ReactDOM.render( <OfferListContent offerinput={this} />, document.getElementById("main-content"));

    }


    getcardfeatures() {
        //alert('getcardfeatures');
        fetch('http://localhost:7000/creditcard/getcardfeatures', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                offerlist: '1'

            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('getcardfeatures responce');
                console.log(responseJson.result);

                const unique = this.groupBy(responseJson.result, pet => pet.logopath);
                //  console.log(unique);
                //  console.log( [unique.keys(0)]);

                for (var [key, value] of unique) {
                    console.log(key);
                    this.state.DistinctOfferData.push(key);
                }

                const DistinctFeaturesDataunique = this.groupBy(responseJson.result, pet => pet.features);
                for (var [key, value] of DistinctFeaturesDataunique) {
                    console.log(key);
                    this.state.DistinctFeaturesDataunique.push(key);
                }



                this.setState({
                    CompareOfferData: responseJson.result
                });

             
                // this.setState({                 
                //     DistinctOfferData: [unique.keys()]
                // });
                console.log(this.state.CompareOfferData);
                return responseJson.result;
            })
            .catch((error) => {
                console.error(error);
            });


    }

    groupBy(list, keyGetter) {
        const map = new Map();
        list.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
    }

    componentDidMount() {
        //  alert('componentDidMount');
        this.getcardfeatures();
    }

    render() {
        return <CompareoffersContent CompareoffersInput={this} />

    }
}

export default CompareOffer;