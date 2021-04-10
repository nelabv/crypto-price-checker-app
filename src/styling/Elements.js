import styled from 'styled-components';

// LUMA ETO

const HoverableText = styled.p `
    color:${props => props.theme.textColor.black};
    order: 1;
    &: hover {
        animation: hover-animation 200s infinite alternate ease-in-out;
    }
    @keyframes hover-animation {
        0% {
            border-color: white;
            padding-bottom: 0;
          }
          0.2% {
            border-bottom: 3px solid ${props => props.theme.colors.orange};
            padding-bottom: 5px;
          }
    }
`;

const H1 = styled.h1`
    color: ${props => props.theme.textColor.black};
    font-size: 48px;
`;

const H2 = styled.h2`
    color: ${props => props.theme.textColor.black};
    font-size: 32px;
`;

const Button = styled.button `
    color: white;
    text-decoration: none;
    background-color: ${props => props.theme.colors.orange};
    padding: 15px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    transition: all 0.4s ease 0s;
    
    &:hover {
        color: ${props => props.theme.textColor.gray};
        border: 0.1px solid ${props => props.theme.colors.orange};
        background: white;
    }

    &:focus {
        outline: none;
    }
`;

const Input = styled.input`
    padding: 10px;
    height: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #333333;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.offwhite};
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.violet};
    }
`;

const ErrorMsgSpan = styled.span`
    color: ${props => props.theme.colors.warningRed};
    font-size: 12px;
    padding: 10px 0 10px 0;
`;

const Elements = {
    HoverableText,
    H1,
    H2,
    Button,
    Input,
    ErrorMsgSpan
}

export default Elements;