import { Table } from "rsuite";
import DATA from "../../src/Data/demo_post_data.js"
function table() {
  const { Column, HeaderCell, Cell } = Table;
  return (
    <div className="table">
      <Table virtualized height={200} width={800} data={DATA[0].dashboard[0].table}>
        <Column width={300} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={300}>
          <HeaderCell>Group Name</HeaderCell>
          <Cell dataKey="gname" />
        </Column>

        <Column minWidth={150} flexGrow={1}>
          <HeaderCell>Amount</HeaderCell>
          <Cell dataKey="amount" />
        </Column>
      </Table>
    </div>
  );
}

export default table;
