export class ItemModel {
  availability: boolean;
  constructor(
    public userName: string,
    public type: string,
    public size: string,
    public colors: string,
    public cut: string,
    public condition: string,
    ){
      this.availability=true;
    }
}
