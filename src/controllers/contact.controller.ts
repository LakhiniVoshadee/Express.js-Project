import {Request, Response} from 'express'
import * as contactService from "../services/contact.service";


export const getAllContacts = (req: Request, res: Response) => {
    try {
        const contacts = contactService.getAllContacts();
        res.status(200).json(contacts)
    }catch (error) {
        console.error(error)
        res.status(500).json({error: 'Something went wrong'});
    }

}