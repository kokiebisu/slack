import { Layout } from "components/layout";
import { Modal } from "components/organisms/modal";
import { Sidebar } from "components/organisms/sidebar";
import { Prototype } from "components/prototype/client";
import { useToggleState } from "context/toggle-context";
import React from "react";
import { useParams } from "react-router-dom";
import * as b from "global/blocks";

export const ClientPage: React.FC<{}> = () => {
  const { teamId, variant } = useParams<{ teamId: string; variant?: string }>();
  const { skip } = useToggleState();
  // fetch data using teamid
  return (
    <div>
      <Layout
        variant="workspace"
        sidebar={<Sidebar variant={variant} />}
        content={<Prototype variant={variant} />}
      />
      {skip && (
        <b.Box
          position="absolute"
          top={0}
          bottom={0}
          right={0}
          left={0}
          bg="rgba(0, 0, 0, 0.7)"
        >
          <b.Box height="100%" width="100%">
            <b.Flex justifyContent="center" alignItems="center">
              <Modal variant="skip" criteria={skip} />
            </b.Flex>
          </b.Box>
        </b.Box>
      )}
    </div>
  );
};
