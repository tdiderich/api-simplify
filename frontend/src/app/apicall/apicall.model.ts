export class ApiCall {
  constructor(
    public name: string,
    public endpoint: string,
    public headers: string,
    public parameters: string,
    public _id?: number,
    public updatedAt?: Date,
    public createdAt?: Date,
    public lastUpdatedBy?: string,
  ) { }
}
