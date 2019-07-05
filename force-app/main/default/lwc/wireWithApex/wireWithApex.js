import { LightningElement ,wire,track} from 'lwc';
import getContactList from '@salesforce/apex/MyContact.getContactList';

export default class WireWithApex extends LightningElement {
    @track contacts;
    @track error;
    @wire(getContactList)
    getContactList({data,error}){
        if(data) this.contacts=data;
        else if(error)this.error=error;
    }  
}