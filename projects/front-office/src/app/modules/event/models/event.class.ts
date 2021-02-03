export class CLEvent {
  constructor(
    public id: number,
    public title: string,
    public body: string) {
  }

  party(): void {
    console.log(`Party at ${this.title}`);
  }
}
