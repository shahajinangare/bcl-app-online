import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


const OfferListContent = ({ offerinput }) => (


    <div>


        <br />
        <br />

        <ReactTable
            data={offerinput.state.outData}
            columns={[
                {
                    Header: "",
                    Cell: selectedrow => {
                        return (
                            <div>
                                <img src={selectedrow.original.logopath} />

                            </div>
                        )
                    }


                },
                {
                    Header: "",
                    accessor: "cardname",
                },
                {
                Header: 'Actions',
                filterable:false,
                width: 200,
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