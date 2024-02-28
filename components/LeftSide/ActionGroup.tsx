import React from "react";
import Action from "./Action";

function ActionGroup() {
  return (
    <div className="">
      <div className="mb-3">
        <h2 className="font-semibold text-lg">Web automation</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Action />
        <Action />
        <Action />
        <Action />
      </div>
    </div>
  );
}

export default ActionGroup;
