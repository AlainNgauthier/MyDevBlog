import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';

import * as S from './styles';

let useClickOutside = (handler : any) => {
    let domNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let probHandler = (event : any) => {
            if(!domNode.current?.contains(event.target)) {
                handler();
            }
        };
        
        document.addEventListener("mousedown", probHandler);

        return () => {
            document.removeEventListener("mousedown", probHandler);
        };    
    });

    return domNode;
}

const MenuBar : React.FC = () => {
    const [isShowingDropdown, setIsShowingDropdown] = useState(false);

    let domNode = useClickOutside(() => {
        setIsShowingDropdown(false);
    })

    return (
        <S.MenuWrapper ref={domNode} >
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
                    <Link href="/">
                        <S.BodyItem 
                            onClick={() => setIsShowingDropdown(!isShowingDropdown)}
                            style={{ 'display' : 'none' }}
                        >
                            <span>Articles</span>
                        </S.BodyItem>
                    </Link>
                </S.Body>
            )}
        </S.MenuWrapper>
    )
};

export default MenuBar;