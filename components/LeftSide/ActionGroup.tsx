import React from "react";
import Action from "./Action";
import { ActionGroupType } from "@/lib/types";

function ActionGroup({ actionGroup }: { actionGroup: ActionGroupType }) {
  const { groupName, actionList } = actionGroup;
  console.log(actionList);
  return (
    <div className="">
      <div className="mb-3">
        <h2 className="font-semibold text-lg">{groupName}</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {actionList.map((action, index) => (
          <Action key={index} action={action} />
        ))}
      </div>
    </div>
  );
}

export default ActionGroup;
