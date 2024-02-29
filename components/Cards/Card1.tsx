import { NodeData } from "@/lib/types";
import React from "react";
import actionGroupList from "@/app/data/actionList.json";
import { findActionByFunc } from "@/lib/action_ultis";

type pageProps = {
  data: NodeData;
  nodeId: string;
};

function Card1({ data, nodeId }: pageProps) {
  const { actionData, onDelete } = data;
  const { func, name } = actionData;

  const action = findActionByFunc(actionGroupList, func);

  console.log(action);

  return (
    <div>
      {name}
      <button
        onClick={(e) => {
          e.preventDefault();
          onDelete(nodeId);
        }}
      >
        delete
      </button>
    </div>
  );
}

export default Card1;
