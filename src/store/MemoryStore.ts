export class MemoryStore {
  private _db: any;

  constructor() {
    this._db = {
      activity: [],
    };
  }

  public getAll(key: string): Promise<any[]> {
    return Promise.resolve(this._db[key] as any[]);
  }

  public getOne(key: string, id: string): Promise<any[]> {
    const foundItem = this._db[key].find((item: any) => item.id === id);

    if (!foundItem) {
      return Promise.reject('Item not found');
    }

    return Promise.resolve(foundItem);
  }
}
