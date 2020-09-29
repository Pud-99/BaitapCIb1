export default class InputWrapper extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        let $template = document.getElementById('form-register');
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$inputlabel = this.shadowRoot.getElementById('input-label');
        this.$inputmain = this.shadowRoot.getElementById('input-main');
        this.$inputerror = this.shadowRoot.getElementById('input-error');
    }
}

window.customElements.define('form-register', InputWrapper);