import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../../assets/stylesheets/app.css';


const OfferListContent = ({ offerinput }) => (


    <div>

<h1> Offers Available to you </h1>
        <ReactTable
            data={offerinput.state.outData}
            columns={[
                {
                    Header: "Card",
                    Cell: selectedrow => {
                        return (
                            <div>
                                   <label> {selectedrow.original.cardname} </label>
                                   <br/>
                                <img src={selectedrow.original.logopath} />
                            </div>
                        )
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
                filterable:false,
                width: 200,
                className: 'offergrid',     
                Cell:
                    application => {                        
                            return (
                                <div>
                                    <button style={{backgroundColor:'#ff9939',width:'100px',height:'50px'}}
                                        onClick={e => offerinput.createapplication(application)}>Select</button>
                                </div>
                            )                     
                       


                    }
            }


            ]
            }
            defaultPageSize={10}
            className="-striped -highlight"
        />


    </div>
);

export default OfferListContent;