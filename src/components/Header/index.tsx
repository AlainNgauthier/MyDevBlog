import React, { useState, useEffect } from 'react';

import useWindowSize from 'components/_hooks/resize.js';
import HeaderDesktop from 'components/Header/Desktop';
import HeaderMobile from 'components/Header/Mobile';

const Header = () => {
    // const [isSticky, setIsSticky] = useState(false);
    const { width } = useWindowSize();

    if (width !== null && width !== undefined && width < 1000)
        return <HeaderMobile />;

    return (
        <HeaderDesktop />
    )
}

export default Header;