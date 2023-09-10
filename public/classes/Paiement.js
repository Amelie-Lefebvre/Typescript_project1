// CLASSES
// implements the interface from above
export class Paiement {
    recipient;
    details;
    amount;
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is due ${this.amount}€ for ${this.details}`;
    }
}
