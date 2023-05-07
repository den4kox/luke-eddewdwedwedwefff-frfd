import React from "react";
import { observer } from "mobx-react-lite";
import { ResourceData } from "state/types";
import { Table as TableAnt } from "antd";
import { FetchAndRenderLink } from "../fetchAndRenderLink";

type TableProps = {
  data: ResourceData | null;
};
export const Table: React.FC<TableProps> = observer(({ data }) => {
  const tableData = React.useMemo(() => {
    return data
      ? Object.keys(data).map((key, i) => {
          // @ts-ignore
          const val = data[key];

          return {
            key: i,
            prop: key,
            value: Array.isArray(val)
              ? val.map((url) => <FetchAndRenderLink url={url} key={url} />)
              : val,
          };
        })
      : [];
  }, [data]);
  const columns = [
    {
      title: "prop",
      dataIndex: "prop",
      key: "prop",
      width: 130,
      textWrap: "word-break",
      ellipsis: true,
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
    },
  ];

  return (
    <TableAnt
      loading={!data}
      dataSource={tableData}
      columns={columns}
      pagination={false}
    />
  );
});
