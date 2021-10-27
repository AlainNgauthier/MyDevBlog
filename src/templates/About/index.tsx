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
                Sur Mes Routes
            </S.Title>
            <S.Text>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </p>
                </S.Text>
        </S.Main>
    )
};

export default AboutTemplate;