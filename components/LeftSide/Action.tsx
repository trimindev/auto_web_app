import React from "react";

function Action() {
  const additionalData = {
    label: "action",
  };

  const onDragStart = (event: any, data: any) => {
    event.dataTransfer.setData("application/reactflow", JSON.stringify(data));
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="border-2 px-4 py-3 flex items-center justify-center rounded-lg border-neutral-800 cursor-pointer"
      onDragStart={(event) => onDragStart(event, additionalData)}
      draggable
    >
      <h3>Action</h3>
    </div>
  );
}

export default Action;
