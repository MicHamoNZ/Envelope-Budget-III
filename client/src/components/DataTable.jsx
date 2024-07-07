import Table from 'react-bootstrap/Table';

const DataTable = ({ data, columns }) => {
  console.log(data);
  console.log(columns);
  return (
    <Table striped bordered hover responsive size='sm'>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={`column${column.field}`}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((dataRow) => (
          <tr>
            {columns.map((column) => (
              <td>{dataRow[column.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
