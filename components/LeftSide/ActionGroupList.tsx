import React from "react";
import ActionGroup from "./ActionGroup";
import actionGroupList from "@/app/data/actionList.json";

function ActionGroupList() {
  return (
    <div className="p-2">
      {actionGroupList.map((actionGroup, index) => (
        <ActionGroup key={index} actionGroup={actionGroup} />
      ))}
    </div>
  );
}

export default ActionGroupList;
