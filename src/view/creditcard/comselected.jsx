import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../../assets/stylesheets/app.css';
import '../../assets/stylesheets/offer.css';

const ComselectedContent = ({ Comparesofferinput }) => (
    <div>

      
    <h1>Add up to {Comparesofferinput.state.cardArray.length} cards</h1> 

     <button onClick={e => Comparesofferinput.getcardfeatures()}> Compare </button>        
        <br/>

        <ReactTable style={{width:'300px'}}
            data={Comparesofferinput.state.cardArray}            
            columns={[
                {
                    Header: "Card",       
                    width:300,          
                    Cell: selectedrow => {
                        return (
                            <div>
                                <label> {selectedrow.original.cardname} </label>
                                <br />
                                <img src={selectedrow.original.logopath} />
                            </div>
                        )
                    }
                }

            ]
            }      
            minRows={4}
            showPagination={false}
        />
    </div>
);

export default ComselectedContent;