import React from 'react';

import PersonWrapper from './PersonWrapper'
import PersonText from './PersonText'
import PersonImage from './PersonImage'

const Person = ({ name, image }) => {
    return (
        <PersonWrapper>
            <PersonImage src={image} />
            <PersonText>{name}</PersonText>
        </PersonWrapper>
    )
};

export default Person;
