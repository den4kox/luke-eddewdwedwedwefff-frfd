import { Skeleton } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { ResourceData } from "../../state/types";
import { cachedFetch } from "../../utils/fetch";
import { isFilms } from "../../utils/guards";
import cn from "./FetchAndRenderLink.module.css";
interface FetchAndRenderLinkProps {
  url: string;
}
export const FetchAndRenderLink: React.FC<FetchAndRenderLinkProps> = ({
  url,
}) => {
  const [data, setData] = React.useState<ResourceData | null>(null);

  React.useEffect(() => {
    cachedFetch<ResourceData>(url).then((data) => {
      setData(data);
    });
  }, [url]);

  const title = React.useMemo(() => {
    if (data) {
      return isFilms(data) ? data.title : data.name;
    }

    return "Loading...";
  }, [data]);

  const link = React.useMemo(() => {
    const [resource, id] = url.split("/api/")[1].split("/").filter(Boolean);

    return `/${resource}/${id}`;
  }, [url]);

  return (
    <div className={cn.Link}>
      <Skeleton.Node active={!data} rootClassName={cn.root} className={cn.item}>
        <Link to={link}>{title}</Link>
      </Skeleton.Node>
    </div>
  );
};
