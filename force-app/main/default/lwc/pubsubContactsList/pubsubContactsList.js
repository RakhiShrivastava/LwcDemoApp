import { LightningElement,wire } from 'lwc';
import searchContacts from '@salesforce/apex/MyContact.searchContacts';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
export default class PubsubContactsList extends LightningElement {
    searchKey = '';

    @wire(CurrentPageReference) pageRef;
    @wire(searchContacts, { searchKey: '$searchKey' })    contacts;

    connectedCallback() {
        // subscribe to searchKeyChange event
        registerListener('searchKeyChange', this.handleSearchKeyChange, this);
    }

    disconnectedCallback() {
        // unsubscribe from searchKeyChange event
        unregisterAllListeners(this);
    }

    handleSearchKeyChange(searchKey) {
        this.searchKey = searchKey;
    }

    handleContactSelect(event) {
        // fire contactSelected event
        fireEvent(this.pageRef, 'contactSelected', event.target.contact.Id);
    }
}