import React from 'react';

import Wrapper from './Wrapper';
import NameWrapper from './NameWrapper';
import Person from './Person/'
import Name from './Name';

const District = ({ persons, name }) => {
    return (
        <Wrapper>
            <Name>{name}</Name>
            <NameWrapper>
                {persons.map(e => <Person name={e} image="https://via.placeholder.com/300" />)}
            </NameWrapper>
        </Wrapper>
    ) 
};

export default District;
