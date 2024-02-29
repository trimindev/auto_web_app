import { memo, FC } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import "reactflow/dist/style.css";
import { NodeData } from "@/lib/types";
import Card1 from "../Cards/Card1";

const CustomNode = ({ data, id }: NodeProps<NodeData>) => {
  const { actionData } = data;

  return (
    <Popover>
      <PopoverTrigger>
        <div className="custom-node">
          <Handle type="target" position={Position.Top} />
          <div>{actionData?.name} </div>
          <Handle type="source" position={Position.Bottom} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <Card1 data={data} nodeId={id} />
      </PopoverContent>
    </Popover>
  );
};

export default memo(CustomNode);
