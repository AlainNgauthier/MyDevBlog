//@styled-icons/evaicons-outline/CloseOutline

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import LinkWrapper from 'components/LinkWrapper';
import * as S from './styles';

const AboutTemplate = () => {
    return (
        <S.Main>
            <LinkWrapper href="/my-trips">
                <CloseOutline size={26} />
            </LinkWrapper>
            <S.Title>
                My Trips
            </S.Title>
            <S.Text>
                <p>
                    You find on this map some of the places I've been and lived in. <br/>
                    Have fun clicking on the markers and finding out some facts about all 
                    of these cities !
                </p>
                </S.Text>
        </S.Main>
    )
};

export default AboutTemplate;