import Link from 'next/link';

import * as S from './styles';

type LinkHomeProps = {
    href: string
    children: React.ReactNode
}

const LinkHome = ({ children }: LinkHomeProps) => {
    return (
        <S.Wrapper>
            <Link href="/">{children}</Link>
        </S.Wrapper>
    )
};

export default LinkHome;