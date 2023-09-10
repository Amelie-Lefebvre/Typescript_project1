import { FormatChange } from "../interfaces/ToFormat.js";

// CLASSES
// implements the interface from above
export class Paiement implements FormatChange {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} is due ${this.amount}€ for ${this.details}`;
  }
}
