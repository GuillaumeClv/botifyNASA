import React from "react"

const Table = ({data}) => (
    <table>
        <thead>
            <tr>
                <th></th>
                <th>NEO Name</th>
                <th>Min Estimated Diameter (km)</th>
                <th>Max Estimated Diameter</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item, i) => (
                <tr>
                    <td>{i}</td>
                    <td>{item[0]} </td>
                    <td>{item[1]} </td>
                    <td>{item[2]} </td>
                </tr>
            ))}
        </tbody>
    </table>
)

export default Table