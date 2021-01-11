import { Layout } from "components/layout";
import { Sidebar } from "components/organisms/sidebar";
import { Prototype } from "components/prototype/client";
import React from "react";
import { useParams } from "react-router-dom";

export const ClientPage: React.FC<{}> = () => {
  const { variant } = useParams<{ variant: string }>();
  console.log("val", variant);
  return (
    <Layout
      variant="workspace"
      sidebar={<Sidebar variant={variant} />}
      content={<Prototype variant={variant} />}
    />
  );
};
