import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/offer.css';
import CardDetails from '../../view/creditcard/carddetails';

const selectRowProp = {
    mode: 'checkbox'
  };

const OfferListContent = ({ offerinput }) => (


    <div>

        <h1> Offers Available to you </h1>
        <ReactTable  
            data={offerinput.state.outData}
            columns={[
                {
                    Header: "Compare",
                    width: 100,
                    className: 'offergrid',
                    Cell: selectedrow => {
                        return (
                            <div>
                                <button onClick={e => offerinput.addtocompare(selectedrow)}> Add </button>
                                
                            </div>
                        )
                    }
                },
             
                {
                    Header: "Card",
                    width: 300,
                    Cell: selectedrow => {
                        return (
                            <div>
                                <label> {selectedrow.original.cardname} </label>
                                <br />
                                <img src={selectedrow.original.logopath} />
                            </div>
                        )
                    }
                },
                {
                    expander: true,
                    width: 80,
                    className: 'offergrid',
                    Expander:
                        <div>
                            <span> Know more</span>
                        </div>,
                    style: {
                        cursor: "pointer"
                    }
                },
                {
                    Header: "1st Year Fees",
                    className: 'offergrid',
                    Cell: selectedrow => {
                        return (
                            <div>
                                <label> {selectedrow.original.firstyearfees} </label>
                            </div>
                        )
                    }
                },
                {
                    Header: "Rewards Value",
                    className: 'offergrid',
                    Cell: selectedrow => {
                        return (
                            <div>
                                <label> {selectedrow.original.rewardsvalue} </label>
                            </div>
                        )
                    }
                },
               
                {
                    Header: '',
                    filterable: false,
                    width: 200,
                    className: 'offergrid',
                    Cell:
                        application => {
                            return (
                                <div>
                                    <button style={{ backgroundColor: '#ff9939', width: '100px', height: '50px' }}
                                        onClick={e => offerinput.createapplication(application)}>Select</button>
                                </div>
                            )
                        }
                }
            ]
            }
            defaultPageSize={10}
            className="-striped -highlight"
            SubComponent={() => <CardDetails />}
        />
    </div>
);

export default OfferListContent;