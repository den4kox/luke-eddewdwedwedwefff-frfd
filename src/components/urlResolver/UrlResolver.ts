import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStore } from "state";
import { observer } from "mobx-react-lite";
import { reaction } from "mobx";
import { EResources } from "types";

export const UrlResolver: React.FC = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const store = useStore();

  React.useEffect(() => {
    const disposer = reaction(
      () => {
        return {
          page: store.filter.page,
          text: store.filter.text,
          resource: store.filter.resource,
        };
      },
      (data) => {
        const params = new URLSearchParams(location.search);
        params.set("page", String(data.page ?? 1));
        params.set("text", String(data.text ?? ""));
        params.set("resource", String(data.resource ?? EResources.People));
        navigate(`${location.pathname}?${params.toString()}`);
      }
    );

    return () => disposer();
  }, [navigate, location]);

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("page", String(store.filter.page));
    params.set("text", String(store.filter.text));
    params.set("resource", String(store.filter.resource));

    navigate(`${location.pathname}?${params.toString()}`);
  }, []);

  return null;
});
