import { ActionGroupType, ActionType } from "./types";

export function findActionByFunc(
  actionGroups: ActionGroupType[],
  func: string
): ActionType | null {
  for (const group of actionGroups) {
    for (const action of group.actionList) {
      if (action.func === func) {
        return action; // Return the action if its func matches the provided func
      }
    }
  }
  return null; // Return null if no action with the provided func is found
}
