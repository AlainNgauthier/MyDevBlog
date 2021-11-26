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
                    Hey y'all! You find on this map some places I've been and lived in. <br/>
                    Click on the differents markers and see some facts about all 
                    of these cities !
                </p>
                </S.Text>
        </S.Main>
    )
};

export default AboutTemplate;