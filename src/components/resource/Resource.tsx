import React from "react";
import { Radio, RadioChangeEvent } from "antd";
import { useStore } from "state";
import { observer } from "mobx-react-lite";
import { EResources } from "types";

export const Resource: React.FC = observer(() => {
  const store = useStore();
  const handleChange = React.useCallback((data: RadioChangeEvent) => {
    store.filter.setResource(data.target.value);
  }, []);

  return (
    <Radio.Group
      value={store.filter.resource}
      defaultValue={store.filter.resource}
      buttonStyle="solid"
      onChange={handleChange}
    >
      {Object.entries(EResources).map(([key, value]) => {
        return (
          <Radio.Button key={key} value={value}>
            {key}
          </Radio.Button>
        );
      })}
    </Radio.Group>
  );
});
