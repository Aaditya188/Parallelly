import { Table } from "rsuite";
function history(props) {
  const { Column, HeaderCell, Cell } = Table;
  return (
    <div className="table">
      <Table
        virtualized
        height={200}
        width={1000}
        data={props.table.wallet[0].wallettable}
      >
        <Column width={100} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>ID Invoice</HeaderCell>
          <Cell dataKey="invoiceID" />
        </Column>

        <Column width={150}>
          <HeaderCell>Date</HeaderCell>
          <Cell dataKey="date" />
        </Column>

        <Column width={150}>
          <HeaderCell>Recepient</HeaderCell>
          <Cell dataKey="recepient" />
        </Column>

        <Column width={300}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column width={100}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>
      </Table>
    </div>
  );
}

export default history;
