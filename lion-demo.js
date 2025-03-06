import { html, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-dialog.js';
import './loading-dialog.js';

export class LionDemo extends LitElement {
  static properties = {
    showDialog: { type: Boolean },
  };

  connectedCallback() {
    super.connectedCallback();
    this.showDialog = true;
    setTimeout(() => {
      this.showDialog = false;
    }, 1000);
  }

  render() {
    if (this.showDialog) {
      return html`
        <loading-dialog>
        </loading-dialog>
      `
    }
    return html`
      <h1>Hello world</h1>
      <p>
        Start of long content to show disabled scroll

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat consectetur sapien ut sollicitudin. Ut sodales odio dui, non tempus nisi mattis ac. Ut lacus tortor, euismod eu lobortis quis, ornare in nulla. Cras in odio condimentum, luctus est nec, mattis tellus. Nullam ut sem dui. Sed venenatis et arcu a efficitur. Vivamus mi velit, sagittis in vulputate eget, accumsan quis sem. Cras non arcu eu ipsum laoreet luctus sit amet volutpat magna. Quisque enim urna, efficitur efficitur ultrices sit amet, suscipit et mi. Donec euismod ligula aliquam, consectetur purus vel, placerat dui. Cras molestie diam in sem suscipit malesuada. Phasellus tincidunt placerat accumsan. Praesent dictum dui odio, et interdum nulla tempor vitae. Vestibulum rhoncus tincidunt ipsum. Donec sed eleifend tellus, sed mollis justo. Morbi ultrices ante eu purus sodales facilisis.

        Ut non mauris purus. Duis elementum eros eget nunc malesuada, vitae volutpat purus vehicula. Nunc purus magna, sodales quis maximus nec, pulvinar vitae metus. Vivamus hendrerit eros et nisi sodales, et interdum tellus ultricies. Aliquam tempus lectus vitae magna lacinia, a eleifend arcu dignissim. Maecenas accumsan lectus sed metus lacinia consectetur. Duis velit felis, iaculis aliquet lorem sit amet, aliquet pulvinar ante. Nullam vitae velit nulla. Vestibulum ut neque quis dui ultricies dignissim. Morbi quis nulla nisl. Sed ut eleifend diam.

        Nunc tincidunt purus sagittis dolor vestibulum sollicitudin. Vivamus viverra, nunc ac dignissim vestibulum, est odio malesuada augue, iaculis volutpat odio orci id urna. Donec dignissim nisl vel nibh sollicitudin, tempor molestie erat ornare. In sodales malesuada efficitur. Vestibulum odio odio, tempus tempor ipsum ac, vulputate porttitor ante. Ut luctus a augue non facilisis. Sed tortor dui, molestie ullamcorper urna non, auctor congue ante. Donec iaculis cursus diam, tempus tempus tellus rhoncus quis. Vivamus laoreet odio mi, quis semper libero vestibulum eu.

        Ut non commodo sapien. Proin augue ligula, consequat et eros ut, auctor elementum tortor. Aenean ut mi ut urna semper euismod. Nulla facilisi. Pellentesque at arcu nulla. Curabitur eget urna ultricies, scelerisque nibh nec, luctus metus. Aenean metus nunc, tempus lacinia ipsum vel, pellentesque fermentum leo. Pellentesque sit amet purus congue, tristique mauris nec, vehicula nulla.

        Cras nulla erat, maximus convallis est nec, aliquam vehicula quam. Nam ultrices turpis eget tortor pharetra, quis dapibus justo pretium. Nulla neque nulla, tincidunt finibus dui vitae, varius ultrices felis. Praesent mattis elit nec varius convallis. Maecenas magna libero, rhoncus in pretium sit amet, pretium quis sapien. Morbi placerat semper nunc a laoreet. Mauris sed efficitur erat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris euismod sem in nibh fringilla, at tincidunt eros eleifend. Aliquam mattis neque et tellus rhoncus volutpat. Praesent nec enim a metus rutrum hendrerit at ac nibh. Integer egestas sapien mi, quis elementum quam rutrum id. Nunc consequat elit id rutrum imperdiet. Cras efficitur velit at neque fermentum, nec scelerisque quam sollicitudin. Sed eget tortor dolor.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat consectetur sapien ut sollicitudin. Ut sodales odio dui, non tempus nisi mattis ac. Ut lacus tortor, euismod eu lobortis quis, ornare in nulla. Cras in odio condimentum, luctus est nec, mattis tellus. Nullam ut sem dui. Sed venenatis et arcu a efficitur. Vivamus mi velit, sagittis in vulputate eget, accumsan quis sem. Cras non arcu eu ipsum laoreet luctus sit amet volutpat magna. Quisque enim urna, efficitur efficitur ultrices sit amet, suscipit et mi. Donec euismod ligula aliquam, consectetur purus vel, placerat dui. Cras molestie diam in sem suscipit malesuada. Phasellus tincidunt placerat accumsan. Praesent dictum dui odio, et interdum nulla tempor vitae. Vestibulum rhoncus tincidunt ipsum. Donec sed eleifend tellus, sed mollis justo. Morbi ultrices ante eu purus sodales facilisis.

        Ut non mauris purus. Duis elementum eros eget nunc malesuada, vitae volutpat purus vehicula. Nunc purus magna, sodales quis maximus nec, pulvinar vitae metus. Vivamus hendrerit eros et nisi sodales, et interdum tellus ultricies. Aliquam tempus lectus vitae magna lacinia, a eleifend arcu dignissim. Maecenas accumsan lectus sed metus lacinia consectetur. Duis velit felis, iaculis aliquet lorem sit amet, aliquet pulvinar ante. Nullam vitae velit nulla. Vestibulum ut neque quis dui ultricies dignissim. Morbi quis nulla nisl. Sed ut eleifend diam.

        Nunc tincidunt purus sagittis dolor vestibulum sollicitudin. Vivamus viverra, nunc ac dignissim vestibulum, est odio malesuada augue, iaculis volutpat odio orci id urna. Donec dignissim nisl vel nibh sollicitudin, tempor molestie erat ornare. In sodales malesuada efficitur. Vestibulum odio odio, tempus tempor ipsum ac, vulputate porttitor ante. Ut luctus a augue non facilisis. Sed tortor dui, molestie ullamcorper urna non, auctor congue ante. Donec iaculis cursus diam, tempus tempus tellus rhoncus quis. Vivamus laoreet odio mi, quis semper libero vestibulum eu.

        Ut non commodo sapien. Proin augue ligula, consequat et eros ut, auctor elementum tortor. Aenean ut mi ut urna semper euismod. Nulla facilisi. Pellentesque at arcu nulla. Curabitur eget urna ultricies, scelerisque nibh nec, luctus metus. Aenean metus nunc, tempus lacinia ipsum vel, pellentesque fermentum leo. Pellentesque sit amet purus congue, tristique mauris nec, vehicula nulla.

        Cras nulla erat, maximus convallis est nec, aliquam vehicula quam. Nam ultrices turpis eget tortor pharetra, quis dapibus justo pretium. Nulla neque nulla, tincidunt finibus dui vitae, varius ultrices felis. Praesent mattis elit nec varius convallis. Maecenas magna libero, rhoncus in pretium sit amet, pretium quis sapien. Morbi placerat semper nunc a laoreet. Mauris sed efficitur erat. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris euismod sem in nibh fringilla, at tincidunt eros eleifend. Aliquam mattis neque et tellus rhoncus volutpat. Praesent nec enim a metus rutrum hendrerit at ac nibh. Integer egestas sapien mi, quis elementum quam rutrum id. Nunc consequat elit id rutrum imperdiet. Cras efficitur velit at neque fermentum, nec scelerisque quam sollicitudin. Sed eget tortor dolor.
      </p>
    `;
  }
}
customElements.define('lion-demo', LionDemo);