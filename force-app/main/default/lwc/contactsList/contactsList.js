import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/MyContact.getContactList';

export default class ContactsList extends LightningElement {
    @track selectedContact;
   @wire(getContactList) contacts;   

   contactSelected(event) {
      const contactId = event.detail;
      this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
      console.log('this.selectedContact =>'+this.selectedContact );
  } 
}