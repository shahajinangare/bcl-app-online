import React from 'react';
import ReactTable from "react-table";

import "react-table/react-table.css";

  
const UserListContent = ({userdata}) => (

    
<div>

  
            <br />
            <br />
            <br />
            <br />
            <ReactTable
                data={userdata.state.outData}
                filterable
                defaultFilterMethod={(filter, row) =>
                    String(row[filter.id.toLowerCase]) === filter.value.toLowerCase}
                columns={[
                    {
                        Header: "Name",
                        accessor: "NAME",
                        filterMethod: (filter, row) =>
                            row[filter.id].startsWith(filter.value) ||
                            row[filter.id].endsWith(filter.value)
                        // filterAll: true
                    },
                    {
                        Header: "Email",
                        accessor: "emailid",
                        filterMethod: (filter, row) =>
                            row[filter.id].startsWith(filter.value) ||
                            row[filter.id].endsWith(filter.value)


                    },
                    {
                        Header: "Mobile No",
                        accessor: "mobileno",
                        width: 150,
                        filterMethod: (filter, row) =>
                            row[filter.id].startsWith(filter.value) ||
                            row[filter.id].endsWith(filter.value)

                    },
                    {
                        Header: 'Actions',
                        filterable:false,
                        width: 100,
                        Cell:
                            selectedrow => {
                                if (selectedrow.original.isactive === 'N') {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => userdata.activeinactiveuser(selectedrow)}>Activate</a>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => userdata.activeinactiveuser(selectedrow)}>Deactivate</a>
                                        </div>
                                    )
                                }



                            }
                    },
                    {
                        Header: 'Unlock',
                        filterable:false,
                        width: 70,
                        Cell:
                            selectedrow => {
                                if (selectedrow.original.lockstatus === 'Y') {
                                    return (
                                        <div>
                                            <a className="badge"
                                                onClick={e => userdata.unlockuser(selectedrow)}>Unlock</a>
                                        </div>
                                    )
                                }

                            }
                    },
                    {
                        Header: 'Edit',
                        filterable:false,
                        width: 70,
                        Cell:
                            selectedrow => {
                                return (
                                    <div>
                                        <a className="badge"
                                            onClick={e => userdata.editusers(selectedrow)} >Edit</a>
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

export default UserListContent;