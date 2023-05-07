import React from "react";
import { observer } from "mobx-react-lite";
import { Pagination as PaginationAnt } from "antd";
import { useStore } from "../../state/";

export const Pagination: React.FC = observer(() => {
  const store = useStore();

  const handleChange = React.useCallback(
    (page: number) => {
      store.filter.setPage(page);
    },
    [store]
  );

  return (
    <PaginationAnt
      onChange={handleChange}
      current={store.filter.page}
      defaultCurrent={store.filter.page}
      total={store.total}
      showSizeChanger={false}
      defaultPageSize={10}
    />
  );
});
