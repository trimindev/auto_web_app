export type InputType = {
  name: string;
  var: string;
  desc: string;
};

export type ActionType = {
  id: number;
  name: string;
  func: string;
  desc: string;
  inputList: InputType[];
};

export type ActionGroupType = {
  groupName: string;
  actionList: ActionType[];
};
