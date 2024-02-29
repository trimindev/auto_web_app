import { NodeData } from "@/lib/types";
import React from "react";
import actionGroupList from "@/app/data/actionList.json";
import { findActionByFunc } from "@/lib/action_ultis";
import { CardForm1 } from "./Form1";

type pageProps = {
  data: NodeData;
  nodeId: string;
};

function Card1({ data, nodeId }: pageProps) {
  const action = findActionByFunc(actionGroupList, data.actionData.func);

  return (
    <div className="relative">
      {action && <CardForm1 data={data} action={action} />}
      {/* <div className="fixed ">
        <button
          onClick={(e) => {
            e.preventDefault();
            data.onDelete(nodeId);
          }}
        >
          delete
        </button>
      </div> */}
    </div>
  );
}

export default Card1;
