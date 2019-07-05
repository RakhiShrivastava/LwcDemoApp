import { LightningElement ,wire,api} from 'lwc';
import searchContacts from '@salesforce/apex/MyContact.searchContacts';

export default class SearchContactResult extends LightningElement {
   @api searchKey;
     
   @wire(searchContacts,{ searchKey: '$searchKey'}) contacts;
  
}