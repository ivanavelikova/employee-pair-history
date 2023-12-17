import React from "react";

function TableBody({data}) {
	return (
		<tbody>
			{data.map((row, index) => {
				return (
					<tr key={index}>
						<td>{row[0]}</td>
						<td>{row[1]}</td>
						<td>{row[2]}</td>
						<td>{row[3]}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

export default TableBody;