import styled from 'styled-components';

export const HeaderWrap = styled.div`
  background-color: black;
  height: 100px;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: Arial, sans-serif;
  padding: 0 30px;
`;

export const HeaderImg = styled.img`
    width: 130px;
    height: 72px;
`;

export const HeaderNav = styled.div`
  margin-left: 50px;
  display: flex;
  
  a {
    color: #fff;
    margin-left: 50px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    display: block;
    padding-bottom: 3px;
    
    &.link__active {
        &:after {
            left: 0;
        }
    }
    
    &:after {
        content: '';
        position: absolute;
        left: -100%;
        bottom: 0;
        height: 2px;
        width: 100%;
        background-color: #fff;
        transition: all .3s;
    }
    
    &:hover {
        &:after {
            left: 0;
        }
    }
  }
`;
