import React from "react";
import styled from 'styled-components';

function Hello() {
    const StyledButton = styled.button`
        color:red;
        background-color:gray;
    `;
    return <StyledButton> Hello Button </StyledButton>
}
export default Hello;