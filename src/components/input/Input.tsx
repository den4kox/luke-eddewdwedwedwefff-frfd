import { observer } from "mobx-react-lite";

import React from "react";
import { Input as InputAnt } from "antd";
import { useStore } from "../../state";
export const Input: React.FC = observer(() => {
  const store = useStore();

  const handleBlur = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      store.filter.setText(event.currentTarget.value);
    },
    [store]
  );

  return <InputAnt allowClear onPressEnter={handleBlur} placeholder="Search" />;
});
