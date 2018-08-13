export default class SourceException {
  public message: string;
  public name: 'SourceException';

  constructor(message: string) {
    this.message = message;
  }
}
