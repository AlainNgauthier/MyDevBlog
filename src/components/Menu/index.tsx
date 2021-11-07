import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';


import * as S from './styles';

const MenuBar : React.FC = () => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);

    let menuRef = useRef();

    //useEffect(() => {
    //    document.addEventListener("mousedown", () => {
    //       setIsShowingDropdown(false);
    //    })
    //});

    return (
        <S.MenuWrapper >
            <S.Header 
                onClick={() => setIsShowingDropdown(!isShowingDropdown)}
            >
                <MenuAltLeft size={33} />
                <div>Menu</div> 
            </S.Header>
            {isShowingDropdown && (
                <S.Body>
                    <Link href="/">
                        <S.BodyItem onClick={() => setIsShowingDropdown(!isShowingDropdown)}>
                                <span>Home</span>
                        </S.BodyItem>
                    </Link>
                    <Link href="/my-trips">
                        <S.BodyItem onClick={() => setIsShowingDropdown(!isShowingDropdown)}>
                                <span>My Trips</span>
                        </S.BodyItem>
                    </Link>
                </S.Body>
            )}
        </S.MenuWrapper>
    )
};

export default MenuBar;