class pButton extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
    }

    set inner(inner) {
        this.shadowRoot.innerHTML = `
        <style>
        button {
            border:2px solid black;
            border-radius:4px;
            background:transparent;
            padding:10px 20px;
            font-family:'Poppins',sans-serif;
            font-weight:bold;
            cursor:pointer;
            text-transform:uppercase;
            transition:color 0.3s ease-in-out;
        }
        button:hover {
            background-color:black;
            color:white;
        }
        </style>    
        
        <button>${inner}</button>
        `
    }
}

customElements.define('p-button', pButton)