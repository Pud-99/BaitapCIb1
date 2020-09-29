export default class InputWrapper extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let $template = document.getElementById('input-wrapper');
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$inputlabel = this.shadowRoot.getElementById('input-label');
        this.$inputmain = this.shadowRoot.getElementById('input-main');
        this.$inputerror = this.shadowRoot.getElementById('input-error');
    }
}

window.customElements.define('input-wrapper', InputWrapper);