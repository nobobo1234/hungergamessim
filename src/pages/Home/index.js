import React from 'react';

import Wrapper from './Wrapper';
import WrapContainer from '../../components/WrapContainer';
import District from '../../components/District'

const districts = Array.from({ length: 12 }).map((e, i) => `District ${i + 1}`)

const Home = () => {
    return (
        <Wrapper>
            <h1>Hunger Games Simulator</h1>
            <WrapContainer>
                {districts.map(e => <District name={e} persons={[`${e} male`, `${e} female`]} />)}
            </WrapContainer>
        </Wrapper>
    );       
};

export default Home;
