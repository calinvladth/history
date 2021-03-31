import React from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import AddressComponent from "./components/address";
import FormSectionComponent from "./components/form_section";


const ContactPage = () => <div className={style.box}>

    <section>
        <HeroComponent/>
    </section>

    <section>
        <AddressComponent/>
    </section>

    <section>
        <FormSectionComponent/>
    </section>
</div>

export default ContactPage