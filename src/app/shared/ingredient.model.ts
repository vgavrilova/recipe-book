export class Ingredient {
  constructor(
    public name: string,
    public quantity: number,
    public massUnit: 'kg' | 'g' | 'item(s)' | 'l' | 'ml'
  ) {}
}
