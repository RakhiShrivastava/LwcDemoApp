import { LightningElement,track } from 'lwc';
//import searchContacts from '@salesforce/apex/MyContact.searchContacts';
//const DELAY = 300;
export default class Search extends LightningElement {
    @track searchKey = '';

   // @wire(searchContacts, { searchKey: '$searchKey' })
   // contacts;

    handleKeyChange(event) {
        this.searchKey =  event.target.value;
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
      /*  window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
        */
        
    }

}