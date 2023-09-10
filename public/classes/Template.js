export class Listing {
    container;
    constructor(container) {
        this.container = container;
    }
    //   creating a rendering on the HTML istelf not just console log
    render(item, heading, position) {
        const list = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        list.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        list.append(p);
        if (position === "start") {
            this.container.prepend(list);
        }
        else {
            this.container.append(list);
        }
    }
}
