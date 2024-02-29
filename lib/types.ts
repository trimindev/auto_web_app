export type NodeData = {
  actionData: ActionData;
  onDelete: (id: string) => void;
};

export type ActionData = {
  func: string;
  name: string;
  [key: string]: any;
};

export type InputType = {
  name: string;
  var: string;
  desc: string;
};

export type ActionType = {
  name: string;
  func: string;
  desc: string;
  inputList: InputType[];
};

export type ActionGroupType = {
  groupName: string;
  actionList: ActionType[];
};
