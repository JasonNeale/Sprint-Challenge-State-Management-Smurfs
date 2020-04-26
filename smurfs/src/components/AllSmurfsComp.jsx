import React, { useEffect } from 'react'
import { Table } from 'reactstrap'


const AllSmurfs = ({ getSMURFS, smurfs, isFetching}) => {

    useEffect(() => {
        getSMURFS()
    }, [])

    if(isFetching){ return <h3>Fetching Smurfs....</h3> }

    return (
        <Table dark>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Height</th>
                </tr>
            </thead>
            <tbody>
                {smurfs.map(( item ) => {
                    return (
                        <tr key={Number(item.id)+1*6}>
                            <th key={Number(item.id)+1*2} scope="row">{item.id}</th>
                            <td key={Number(item.id)+1*3}>{item.name}</td>
                            <td key={Number(item.id)+1*4}>{item.age}</td>
                            <td key={Number(item.id)+1*5}>{item.height}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default AllSmurfs