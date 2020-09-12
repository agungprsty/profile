import './items.js';

class PlayerList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set pemains(pemains) {
        this._pemains = pemains;
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = "";
        this._pemains.forEach(pemain => {
            const playerItemElement = document.createElement("item-players");
            playerItemElement.pemain = pemain;
            this.shadowDOM.appendChild(playerItemElement);
        })
    }
    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-family: 'Quicksand', sans-serif;
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("list-players", PlayerList);