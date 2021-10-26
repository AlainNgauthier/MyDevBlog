//@styled-icons/evaicons-outline/CloseOutline

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import * as S from './styles';
import LinkWrapper from 'components/LinkWrapper';

const AboutTemplate = () => {
    return (
        <S.Main>
            <LinkWrapper href="/">
                <CloseOutline size={26} />
            </LinkWrapper>
            <S.Title>
                Sur Mes Routes
            </S.Title>
        </S.Main>
    )
};

export default AboutTemplate;