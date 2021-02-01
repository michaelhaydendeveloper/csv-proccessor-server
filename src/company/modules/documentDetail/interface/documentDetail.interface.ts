export enum Type {
  '-' = '-',
  'd' = 'd',
  'l' = 'l',
}

export enum State {
  'QUEUED' = 'QUEUED',
  'QUEUEING' = 'QUEUEING',
  'PROCESSING' = 'PROCESSING',
  'PROCESSED' = 'PROCESSED',
  'ARCHIVED' = 'ARCHIVED',
  'ARCHIVING' = 'ARCHIVING',
  'STORING' = 'STORING',
  'STORED' = 'STORED',
}

export interface Rights {
  user: string;
  group: string;
  other: string;
}

export interface Properties {
  type: Type;
  name: string;
  size: number;
  modifyTime: number;
  accessTime: number;
  rights: Rights;
  owner: number;
  group: number;
}

export interface Meta {
  properties: Properties;
}

export interface StartEnd {
  start: Date;
  end: Date;
}

export interface StartEndLocation extends StartEnd{
  location: string[];
}

export interface Error {
  message: string;
  stackTrace: {};
  createdAt: Date;
}

export interface DocumentDetail {
  meta: Meta;
  companyId: number;
  state: State;
  queued: StartEnd;
  processed: StartEnd;
  archived: StartEndLocation;
  stored: StartEndLocation;
  error: Error[];
  createdAt: Date;
  updatedAt: Date;
}