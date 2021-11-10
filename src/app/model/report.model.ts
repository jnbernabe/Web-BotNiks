import { Priority } from './priority.enum';

export class Report {
  constructor(
    public reporter?: string,
    public priority?: Priority,
    public date?: Date,
    public title?: string,
    public body?: string
  ) {}
}
