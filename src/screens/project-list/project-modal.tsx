import React from "react";
import { Button, Drawer } from "antd";
import { useProjectModal } from "./util";
export const ProjectModal = () => {
  const { projectModalOpen, close } = useProjectModal();
  return (
    <Drawer visible={projectModalOpen} width={"100%"} onClose={close}>
      <h1>Project Modal</h1>
      <Button onClick={close}>Close</Button>
    </Drawer>
  );
};
