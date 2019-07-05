import { LightningElement } from 'lwc';

export default class AuraLwcInteractionChild extends LightningElement {
    handleCheckboxChange() {
    // Get the labels of selected checkboxes
    const filters = Array.from(this.template.querySelectorAll('lightning-input'))
        .filter(element => element.checked)
        .map(element => element.label);
    const colorChangeEvent = new CustomEvent('colorchange', {
        detail: { filters },
    });
    // Fire the custom event
    this.dispatchEvent(colorChangeEvent);
  }
}