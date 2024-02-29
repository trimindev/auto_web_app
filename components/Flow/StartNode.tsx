import { memo } from "react";
import { Handle, Position } from "reactflow";

import "reactflow/dist/style.css";

const StartNode = () => {
  return (
    <div className="custom-node">
      <div>Start</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(StartNode);
