export class message {
  constructor(
    public _id: string,
    public text: string,
    public viewed,
    public created_at: string,
    public emiter: string,
    public receiver: string
  ) {}
}
