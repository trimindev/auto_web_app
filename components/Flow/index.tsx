"use client";

import { useCallback } from "react";
import ReactFlow, {
  Node,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ConnectionLineType,
} from "reactflow";
import CustomNode from "./CustomNode";
import ResizableNode from "./ResizableNode";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "a",
    type: "custom",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 },
  },
  {
    id: "b",
    type: "custom",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "custom",
    data: { label: "Node 3" },
    position: { x: 400, y: 100 },
  },
  {
    id: "4",
    type: "custom",
    data: { label: "Node 4" },
    position: { x: 400, y: 200 },
  },
  {
    id: "A",
    type: "group",
    data: { label: "hello" },
    position: { x: 0, y: 0 },
    style: {
      background: "#fff",
      border: "1px solid black",
      borderRadius: 15,
      fontSize: 12,
      width: 200,
      height: 200,
    },
  },
  {
    id: "B",
    type: "custom",
    data: { label: "child node 1" },
    position: { x: 10, y: 10 },
    parentNode: "A",
    extent: "parent",
  },
  {
    id: "C",
    type: "custom",
    data: { label: "child node 2" },
    position: { x: 10, y: 90 },
    parentNode: "A",
    extent: "parent",
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "a", target: "b" },
  { id: "e1-3", source: "1", target: "3" },
];

const nodeTypes = {
  custom: CustomNode,
  group: ResizableNode,
};

const defaultEdgeOptions = {
  type: "smoothstep",
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-screen basis-3/4">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      >
        <Background className="pointer-events-none" />
        <div className="absolute right-4 top-24 p-4">
          <Controls />
        </div>
      </ReactFlow>
    </div>
  );
}

export default Flow;
