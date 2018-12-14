import React, { Component } from 'react';
import { TelWrap, TelContact } from './Contacts.styled';

class Contacts extends Component {
    render() {
        return (
            <div>
                <p>Мы будем рады вам помочь.</p>
                <p>Вы можете связаться с нами по телефонам:</p>
                <TelWrap>
                    <TelContact href="tel:+380674648487">+38 (067) 464 84 87</TelContact>
                    <TelContact href="tel:+380639470956">+38 (063) 947 09 56</TelContact>
                </TelWrap>

            </div>
        )
    }
}

export default Contacts;