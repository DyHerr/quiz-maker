import { Options } from '../shared/options.model';

export class Question {
  public title: string;
  public description: string;
  public options: Options[];

  constructor(title: string, desc: string, options: Options[]) {
    this.title = title;
    this.description = desc;
    this.options = options;
  }
}
