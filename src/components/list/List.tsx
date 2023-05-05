import React from "react";
import { observer } from "mobx-react-lite";

import { List as ListAnt } from "antd";

import { useStore } from "../../state/";

export const List: React.FC = observer(() => {
  const store = useStore();
  console.log("RENDER LIST", store.people.characters);
  return (
    <ListAnt
      itemLayout="horizontal"
      dataSource={store.people.characters}
      renderItem={(item, index) => (
        <ListAnt.Item>
          <ListAnt.Item.Meta title={item.name} />
        </ListAnt.Item>
      )}
    />
  );
});
