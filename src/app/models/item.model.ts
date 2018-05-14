export class ItemModel {
  constructor(
    public type: string,
    public size: string,
    public colors: Array<string>,
    public cut: string,
    public availability: boolean,
    public condition: string,
    public userName: string){}
}
