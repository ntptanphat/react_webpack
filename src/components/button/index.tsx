import React from 'react';
import styled from 'styled-components';

export interface Props {
    iconName: string;
}

export const Button: React.FC<Props> = (props) => (
    <button>
        <span className={`icon ${props.iconName}`} />
        <span>{props.children}</span>
    </button>
);
