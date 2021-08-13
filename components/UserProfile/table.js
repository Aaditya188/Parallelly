import { Table } from "react-bootstrap";
function table(props) {
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name : </td>
            <td>{props.table.name}</td>
          </tr>
          <tr>
            <td>Contact : </td>
            <td>{props.table.phone}</td>
          </tr>
          <tr>
            <td>City : </td>
            <td>{props.table.address}</td>
          </tr>
          <tr>
            <td>Aadhar : </td>
            <td>{props.table.aadhar}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default table;
