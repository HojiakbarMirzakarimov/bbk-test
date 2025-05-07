import PaginationTable from "../../../../components/Pagination/PaginationTable";
import TableItem from "./TableItem";

export default function Table() {
  return (
    <section>
      <div className="container">
        <div className="table_bg">
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Ф.И.О.</th>
                <th>Телефон</th>
                <th>Роли</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
              <TableItem />
            </tbody>
          </table>
          <PaginationTable />
        </div>
      </div>
    </section>
  )
}
