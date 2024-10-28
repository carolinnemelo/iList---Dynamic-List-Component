import { Data } from "../types";
import { tableHeadsData } from "./table-components/table-heads-data";
import { tableRowData } from "./table-components/table-row-data";

export function InteractiveList({
  data,
  title,
}: {
  data: Data;
  title: string;
}) {
  const tableHeads = tableHeadsData(data);
  const tableData = tableRowData(
    data,
    Object.keys(data[0]) as Array<keyof Data[0]>
  );

  return (
    <div className="py-4">
      <div>
        <h1 className="text-3xl font-bold text-center">{title}</h1>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          <thead className="text-lg uppercase">
            <tr>
              <th>#</th>
              {tableHeads}
            </tr>
          </thead>
          <tbody className="bg-base-content bg-opacity-30 ">{tableData}</tbody>
        </table>
      </div>
    </div>
  );
}
