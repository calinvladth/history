import React from "react";
import AddressBookPage from "./index";

const name = 'address_book'

export const AddressBookRoute = {
    'name': name,
    'path': `/profile/${name}`,
    'component': <AddressBookPage/>
}