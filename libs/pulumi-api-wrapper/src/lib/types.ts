interface CurrentOperation {
  kind: string;
  author: string;
  started: number;
}

interface Tags {
  [tagName: string]: string;
}

interface Stack {
  orgName: string;
  projectName: string;
  stackName: string;
  currentOperation: CurrentOperation;
  activeUpdate: string;
  tags: Tags;
  version: number;
}
