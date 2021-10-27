// @styled-icons/boxicons-regular/MenuAltLeft
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';

import LinkedinLogo from '../../../public/svg/linkedin.svg';
import GithubLogo from '../../../public/svg/github.svg';
import TwitterLogo from '../../../public/svg/twitter.svg';
import InstagramLogo from '../../../public/svg/instagram.svg';
import * as S from './styles';

const HomeTemplate = () => {
    return (
        <S.Main>
            <S.FirstLine>
                <MenuAltLeft size={26} />
                <div>MENU</div>
            </S.FirstLine>
            <S.SecondLine>
                <S.SecondLineSubtitle>
                &lt; Hello, world! &#47;&gt; 
                </S.SecondLineSubtitle>
                <S.SecondLineTitle>
                    I'm Alain Gauthier Ndamwey
                </S.SecondLineTitle>
                <S.SecondLineRole>
                    Frontend Engineer
                </S.SecondLineRole>
            </S.SecondLine>
            <S.ThirdLine>
                <GithubLogo fill="#ffffff" />
                <LinkedinLogo fill="#ffffff" />
                <TwitterLogo fill="#ffffff" />
                <InstagramLogo fill="#ffffff" />
            </S.ThirdLine>
        </S.Main>
    )
};

export default HomeTemplate;