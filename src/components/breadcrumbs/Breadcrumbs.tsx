import * as React from "react";
import cn from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  data: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  return <div className={cn.Breadcrumbs}>Breadcrumbs</div>;
};
