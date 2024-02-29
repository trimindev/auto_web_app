import React from "react";
import { ActionType } from "@/lib/types";

function Action({ action }: { action: ActionType }) {
  const { name, func } = action;

  const onDragStart = (event: any, func: string) => {
    event.dataTransfer.setData("application/reactflow", func);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="border-2 px-4 py-3 flex items-center justify-center rounded-lg border-neutral-800 cursor-pointer"
      onDragStart={(event) => onDragStart(event, func)}
      draggable
    >
      <h3>{name}</h3>
    </div>
  );
}

export default Action;
