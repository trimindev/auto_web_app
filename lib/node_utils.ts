import { Node } from "reactflow"; // Assuming you have defined the Node type

export function createNewNode(
  position: { x: number; y: number },
  func: string,
  handleNodeDelete: (nodeId: string) => void
): Node {
  const newNode: Node = {
    id: `dndnode_${Date.now()}`,
    type: "custom",
    position,
    data: {
      actionData: {
        name: "New Action",
        func,
      },
      onDelete: handleNodeDelete,
    },
  };

  console.log("newNode", newNode.id);
  return newNode;
}
