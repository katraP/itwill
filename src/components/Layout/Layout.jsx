import React, { Component } from 'react';
import { LayoutWrap } from './Layout.styled';

class Layout extends Component {
    render() {
        return (
            <LayoutWrap>
                {this.props.children}
            </LayoutWrap>
        );
    }
}

export default Layout;