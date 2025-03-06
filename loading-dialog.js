import { html, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-dialog.js';

export class LoadingDialog extends LitElement {
    static properties = {
        showDialog: { type: Boolean },
    };

    connectedCallback() {
        super.connectedCallback();
        this.showDialog = true;
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.showDialog = false;
    }

    render() {
        return html`
            <lion-dialog .opened=${this.showDialog}>
            <div slot="content">Loading ...</div>
            </lion-dialog>
        `

    }
}
customElements.define('loading-dialog', LoadingDialog);