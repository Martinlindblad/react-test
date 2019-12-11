import React, {Component} from 'react';

const TableBody = props => {
    const rows = props.characterData.map((row,index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className="btn--delete" onClick={() => props.removeCharacter(index)}>Wasted</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
            </tr>
        </thead>
    );
}

class Table extends Component {

    render() {
        const { characterData, removeCharacter } = this.props
        return (
            <table border="1">
                <TableHeader />
                <TableBody
                 characterData={characterData}
                 removeCharacter={removeCharacter}
                />
            </table>
        )
    }
}

export default Table;