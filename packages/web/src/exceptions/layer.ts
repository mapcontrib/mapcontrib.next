export default class LayerException {
  public message: string;
  public name: 'LayerException';

  constructor(message: string) {
    this.message = message;
  }
}
