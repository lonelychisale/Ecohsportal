import "../../../css/studentpanel/results/index.css"
function Results(){
    return(
        <div className="results">
        <table cellSpacing={0}>
            <tr>
                <th>course name</th>
                <th>grade</th>
            </tr>
            <tr>
                <td>information security</td>
                <td>88%</td>
            </tr>

        </table>
    </div>
    )
}

export default Results