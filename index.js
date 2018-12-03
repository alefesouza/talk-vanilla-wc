class Contador extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        this.contador = 0;
        
        const text = document.createElement('p');
        text.textContent = 'Contador: ' + this.contador;

        const increase = document.createElement('button');
        increase.textContent = '+';
        increase.onclick = () => {
            this.contador++;
            text.textContent = 'Contador: ' + this.contador;

            this.dispatchEvent(new CustomEvent('increased'));

            if (this.contador == this.getAttribute('avisar')) {
                const aviso = document.createElement('p');
                aviso.textContent = 'O contador é maior que ' + this.getAttribute('avisar');
                shadow.appendChild(aviso);
            }
        };

        const decrease = document.createElement('button');
        decrease.textContent = '-';
        decrease.onclick = () => {
            this.contador--;
            text.textContent = 'Contador: ' + this.contador;
        };

        shadow.appendChild(text);
        shadow.appendChild(increase);
        shadow.appendChild(decrease);
    }
}

window.customElements.define('app-contador', Contador);
