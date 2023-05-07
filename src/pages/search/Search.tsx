import * as React from "react";
import { Layout, Spin } from "antd";

import cn from "./Search.module.css";
import { Input } from "components/input";
import { List } from "components/list";
import { Pagination } from "components/pagination";
import { Resource } from "components/resource";
import { observer } from "mobx-react-lite";
import { useStore } from "../../state";

const { Header, Footer, Content } = Layout;
export const SearchPage: React.FC = observer(() => {
  const store = useStore();

  return (
    <Layout className={cn.Search}>
      <Header className={cn.header}>
        <Input />
        <Resource />
      </Header>
      <Content className={cn.content}>
        <Spin tip="Loading..." spinning={store.isLoading}>
          <List />
        </Spin>
      </Content>
      <Footer className={cn.footer}>
        <Pagination />
      </Footer>
    </Layout>
  );
});

export const Search = React.memo(SearchPage);
