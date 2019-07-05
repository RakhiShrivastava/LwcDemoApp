import { LightningElement,track } from 'lwc';
import getContactList from '@salesforce/apex/MyContact.getContactList';

export default class ImperativeApex extends LightningElement {
    @track contacts;
    @track error;
    connectedCallback(){
        console.log('connectedCallback called=>');
        getContactList()
        .then(result=>{
            this.contacts=result;
            console.log('Success this.contacts=>'+this.contacts);
        })
        .catch(error=>{
            this.error=error;
            console.log('Error  this.error=>'+this.error);
        });
    }
    disconnectedCallback(){
        console.log('disconnectedCallback called=>');
    }
}