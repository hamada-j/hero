export class Hero {
  title: string;
  id: number;
  key: string;
  name: string;
  constructor(
    pTitle: string,
    pId: number,
    pKey: string,
    pName: string,
  ) {
    this.title = pTitle;
    this.id = pId;
    this.key = pKey;
    this.name = pName;
  }

}
