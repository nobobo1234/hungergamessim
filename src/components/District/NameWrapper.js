import styled from 'styled-components';

export default styled.div`
    display: flex;
    margin-top: 1rem;
    
    & > div:not(:last-child) {
        margin-right: 1rem;
    }
`;
