"use client";

import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Node,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  getIncomers,
  getOutgoers,
  getConnectedEdges,
} from "reactflow";
import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";
import LeftSide from "../LeftSide";
import { createNewNode } from "@/lib/node_utils";
import StartNode from "./StartNode";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "start",
    data: {},
    position: { x: 250, y: 5 },
  },
];

const nodeTypes = {
  custom: CustomNode,
  start: StartNode,
};

const defaultEdgeOptions = {
  type: "smoothstep",
};

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any | null>(null);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges(addEdge(params, edges)),
    [edges]
  );

  const onNodesDelete = useCallback(
    (deleted: any) => {
      setEdges(
        deleted.reduce((acc: any, node: any) => {
          const incomers: any = getIncomers(node, nodes, edges);
          const outgoers: any = getOutgoers(node, nodes, edges);
          const connectedEdges: any = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge: any) => !connectedEdges.includes(edge)
          );

          const createdEdges: any = incomers.flatMap(({ id: source }: any) =>
            outgoers.map(({ id: target }: any) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const func: any = event.dataTransfer.getData("application/reactflow");
      // check if the dropped element is valid
      if (typeof func === "undefined" || !func) {
        return;
      }

      if (!reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = createNewNode(position, func, handleNodeDelete);

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  const handleNodeDelete = useCallback((nodeId: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeId));
  }, []);

  return (
    <div className="flex">
      <ReactFlowProvider>
        <LeftSide />
        <div className="h-screen basis-3/4" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onNodesDelete={onNodesDelete}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            defaultEdgeOptions={defaultEdgeOptions}
            deleteKeyCode={["Backspace", "Delete"]}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onInit={setReactFlowInstance}
            fitView
          >
            <Background className="pointer-events-none" />
            <div className="absolute right-4 bottom-5 p-4">
              <Controls />
            </div>
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  );
}

export default Flow;
