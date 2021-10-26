import React from 'react';
import Image from 'next/image';

import * as S from './styles';
import ImageLogoSrc from '../../../../public/illustrations/logo.png';

const HeaderDesktop = () => {
    return (
        <S.Wrapper>
            <S.Logo>
                <Image 
                    alt="Logo Sur Mes Routes" 
                    src={ImageLogoSrc}
                    width={300}
                    height={300}    
                />
            </S.Logo>
        </S.Wrapper>
    )
}

export default HeaderDesktop;