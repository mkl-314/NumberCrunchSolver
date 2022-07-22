class Answer extends HTMLInputElement {
    connectedCallback() {
        this.type = "number";
        this.min = "0";
        this.max = "100";
        this.classList.add('grid-item', 'txt-answer');
    }
}

customElements.define('txt-answer', Answer, { extends: 'input' });

class Sign extends HTMLSelectElement {
    connectedCallback() {
        var signs = ['+', '-', 'x', '/']
        for (var i = 0; i < 4; i++) {
            var opt = document.createElement('option');
            opt.value = i;
            opt.innerHTML = signs[i];
            this.appendChild(opt);
        }
    }
}

customElements.define('select-sign', Sign, { extends: 'select' });

class NumberSolution extends HTMLLabelElement {
    connectedCallback() {
        this.classList.add('grid-item', 'lbl-solution');
    }
}

customElements.define('lbl-solution', NumberSolution, { extends: 'label' });
