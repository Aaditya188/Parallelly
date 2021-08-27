import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
function table(props) {
  const Datas = useSelector((state) => state.alluser.user);
  return (
    <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Name : </td>
            <td>{Datas ? Datas.name : props.table.name}</td>
          </tr>
          <tr>
            <td>Contact : </td>
            <td>{Datas ? Datas.phone : props.table.phone}</td>
          </tr>
          <tr>
            <td>City : </td>
            <td>{Datas ? Datas.address : props.table.address}</td>
          </tr>
          <tr>
            <td>Aadhar : </td>
            <td>{Datas ? Datas.aadhar : props.table.aadhar}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export default table;
