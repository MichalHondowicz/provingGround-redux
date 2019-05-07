import React, {Component} from 'react';
import ContactItem from "./ContactItem";


class ContactList extends Component {
    render() {
        return (
            <ul className="ui relaxed divided list selection">
                <ContactItem
                    login="typeofweb1"
                    name="John"
                    department="Lab"/>
                <ContactItem
                    login="typeofweb2"
                    name="Mary"
                    department="Sales"/>
                <ContactItem
                    login="typeofweb3"
                    name="Josh"
                    department="HR"/>
                <ContactItem
                    login
                    name="Joe"
                    department="Finance"/>
            </ul>
        )
    }
}

export default ContactList;
