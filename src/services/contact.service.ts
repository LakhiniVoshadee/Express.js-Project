import {contactList} from "../db/db";
import {Contact} from "../model/contact.model";


// Get all contacts service logic

export const getAllContacts = (): Contact[] => {
    return contactList;
}

export const saveContact = (Contact: Contact) => {
    contactList.push(Contact);
    return Contact;
}