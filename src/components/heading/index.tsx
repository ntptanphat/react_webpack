import React from 'react';
import styled from 'styled-components';

interface Props {
    align?: 'center' | 'left';
}

const Container: React.FC<Props> = (props) => (
    <button>
        <span className={`icon ${props.align}`} />
        <span>{props.children}</span>
    </button>
);

export const Heading = styled(Container)`
    padding: 10px;
`;
