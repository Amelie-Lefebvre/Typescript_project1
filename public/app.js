// IMPORTS
import { Invoice } from "./classes/Invoice.js";
import { Paiement } from "./classes/Paiement.js";
import { Listing } from "./classes/Template.js";
// VARIABLES
const effectOnHeader = document.querySelector("#bottom_bar");
const form = document.querySelector(".new-item-form");
const select = document.querySelector("#type");
const sender = document.querySelector("#tofrom");
const transactions = document.querySelector("#details");
const transfer = document.querySelector("#amount");
const [red, green, blue, saturation] = [0, 0, 0, 0];
const [red1, green1, blue1] = [0, 0, 0];
// LISTING TEMPLATE INSTANCE
const ul = document.querySelector("ul");
const list = new Listing(ul);
// FUNCTIONS
form.addEventListener("submit", (e) => {
    // PREVENT REFRESHING WEB PAGE
    e.preventDefault();
    // TUPLES and SPREAD OPERATOR
    let values;
    values = [sender.value, transactions.value, transfer.valueAsNumber];
    let doc;
    if (select.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Paiement(...values);
    }
    list.render(doc, select.value, "end");
});
// EFFECT ON SCROLL
window.addEventListener("scroll", (e) => {
    const y = 1 - window.scrollY || document.documentElement.scrollTop;
    const [r, g, b] = [red / y, green / y, blue / y, saturation / y].map(Math.round);
    effectOnHeader.style.setProperty("background-color", `rgb(${r}, ${g}, ${b})`);
});
