import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class baseLightning extends LightningElement {
    contactObject = CONTACT_OBJECT;
    myFields = [NAME_FIELD, EMAIL_FIELD,PHONE_FIELD];
    handleContactCreated(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: `Contact ${event.detail.Name} saved successfully..`,
                variant: 'success',
            })
        );
        const myevent = new CustomEvent('newrecord', {
            detail: { data: event.detail },
        });
        this.dispatchEvent(myevent);
    }
}