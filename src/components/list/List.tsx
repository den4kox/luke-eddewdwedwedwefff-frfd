import React from "react";
import { observer } from "mobx-react-lite";

import { List as ListAnt } from "antd";

import { useStore } from "state";
import { isFilms } from "../../utils/guards";
import { Link } from "react-router-dom";

export const List: React.FC = observer(() => {
  const store = useStore();
  return (
    <ListAnt
      style={{ padding: "0 20px" }}
      itemLayout="horizontal"
      dataSource={store.data}
      renderItem={(item) => {
        const title = isFilms(item) ? item.title : item.name;

        const [resource, id] = item.url
          .split("/api/")[1]
          .split("/")
          .filter(Boolean);

        return (
          <ListAnt.Item actions={[<Link to={`${resource}/${id}`}>More</Link>]}>
            <ListAnt.Item.Meta title={title} description={resource} />
          </ListAnt.Item>
        );
      }}
    />
  );
});
