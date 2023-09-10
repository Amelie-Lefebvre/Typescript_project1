// IMPORTS
import { FormatChange } from "../interfaces/ToFormat.js";

// CLASSES
// implements the interface from above
export class Invoice implements FormatChange {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount}€ for ${this.details}`;
  }
}
