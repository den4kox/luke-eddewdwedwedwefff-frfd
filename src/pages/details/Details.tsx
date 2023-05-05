import * as React from "react";
import cn from "./Details.module.css";
import { useParams } from "react-router-dom";

export const Details: React.FC = () => {
  const { type, id } = useParams();
  console.log("Details page render:", type, id);
  return (
    <div className={cn.Details}>
      <div>BREADCRUMBS</div>
      <div>
        DATA {type} {id}
      </div>
    </div>
  );
};
