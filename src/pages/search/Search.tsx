import * as React from "react";
import { Layout } from "antd";

import cn from "./Search.module.css";
import { Input } from "../../components/input";
import { List } from "../../components/list";
import { Pagination } from "../../components/pagination";

const { Header, Footer, Content } = Layout;
export const SearchPage: React.FC = () => {
  console.log("SearchPAge render");
  return (
    <Layout className={cn.Search}>
      <Header className={cn.header}>
        <Input />
      </Header>
      <Content className={cn.content}>
        <List />
      </Content>
      <Footer className={cn.footer}>
        <Pagination />
      </Footer>
    </Layout>
  );
};

export const Search = React.memo(SearchPage);
