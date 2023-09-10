// IMPORTS
import { Invoice } from "./classes/Invoice.js";
import { Paiement } from "./classes/Paiement.js";
import { FormatChange } from "./interfaces/ToFormat.js";
import { Listing } from "./classes/Template.js";

// VARIABLES
const effectOnHeader = document.querySelector("#bottom_bar") as HTMLElement;

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const select = document.querySelector("#type") as HTMLSelectElement;
const sender = document.querySelector("#tofrom") as HTMLInputElement;
const transactions = document.querySelector("#details") as HTMLInputElement;
const transfer = document.querySelector("#amount") as HTMLInputElement;

const [red, green, blue, saturation] = [0, 0, 0, 0];
const [red1, green1, blue1] = [0, 0, 0];
// LISTING TEMPLATE INSTANCE
const ul = document.querySelector("ul")!;
const list = new Listing(ul);

// FUNCTIONS
form.addEventListener("submit", (e: Event) => {
  // PREVENT REFRESHING WEB PAGE
  e.preventDefault();

  // TUPLES and SPREAD OPERATOR
  let values: [string, string, number];
  values = [sender.value, transactions.value, transfer.valueAsNumber];

  let doc: FormatChange;
  if (select.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Paiement(...values);
  }

  list.render(doc, select.value, "end");
});

// EFFECT ON SCROLL
window.addEventListener("scroll", (e: Event) => {
  const y = 1 - window.scrollY || document.documentElement.scrollTop;
  const [r, g, b] = [red / y, green / y, blue / y, saturation / y].map(
    Math.round
  );

  effectOnHeader.style.setProperty("background-color", `rgb(${r}, ${g}, ${b})`);
});
