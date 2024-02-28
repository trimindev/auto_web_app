import { memo, FC } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import "reactflow/dist/style.css";

export type CustomProps = {
  label: string;
  onDelete: (id: string) => void;
};

const CustomNode = ({ data, id }: NodeProps<CustomProps>) => {
  return (
    <Popover>
      <PopoverTrigger>
        {" "}
        <div className="custom-node">
          <Handle type="target" position={Position.Top} />
          <div>{data.label} </div>
          <Handle type="source" position={Position.Bottom} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <button
          onClick={(e) => {
            e.preventDefault();
            data.onDelete(id);
          }}
        >
          delete
        </button>
      </PopoverContent>
    </Popover>
  );
};

export default memo(CustomNode);
