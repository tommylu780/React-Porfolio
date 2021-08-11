import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SkillDisplay from './SkillDisplay';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <SkillDisplay 
                            title={'HTML'}
                        />
                        <SkillDisplay 
                            title={'CSS'}
                        />
                        <SkillDisplay 
                            title={'JAVASCRIPT'}
                        />
                        <SkillDisplay 
                            title={'React JS'}
                        />
                        <SkillDisplay 
                            title={'Node JS'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
