import * as React from "react";
import cn from "./Details.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Layout } from "antd";
import { Table } from "components/table";
import { ResourceData } from "state/types";
import { cachedFetch } from "utils/fetch";
import { baseUrl } from "const/url";
import { isFilms } from "utils/guards";
import { LeftCircleTwoTone, HomeTwoTone } from "@ant-design/icons";

const { Header, Content } = Layout;

export const Details: React.FC = () => {
  const [data, setData] = React.useState<ResourceData | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const { type, id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (type && id) {
      cachedFetch<ResourceData>(`${baseUrl}/${type}/${id}`)
        .then((data) => {
          setData(data);
        })
        .catch(() => {
          setError("Page not found...");
        });
    }
  }, [type, id]);

  const title = React.useMemo(() => {
    if (!data) {
      return "LOADING...";
    }
    if (isFilms(data)) {
      return data.title;
    }
    return data.name;
  }, [data]);

  const goBack = React.useCallback(() => {
    navigate(-1);
  }, []);
  const goMainPage = React.useCallback(() => {
    navigate("/");
  }, []);

  return (
    <Layout className={cn.Details}>
      <Header className={cn.header}>
        <Button
          onClick={goBack}
          shape="circle"
          style={{ position: "absolute", left: 20 }}
          icon={<LeftCircleTwoTone />}
        />
        <Button
          onClick={goMainPage}
          shape="circle"
          style={{ position: "absolute", right: 20 }}
          icon={<HomeTwoTone />}
        />
        {title} :: {type}
      </Header>
      <Content className={cn.content}>
        {error ? (
          <div className={cn.error}>{error}</div>
        ) : (
          <Table data={data} />
        )}
      </Content>
    </Layout>
  );
};
