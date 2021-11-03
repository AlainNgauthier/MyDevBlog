import Link from 'next/link';

import MenuBar from 'components/Menu';
import LogoWrapper from 'components/Logos';
import * as S from './styles';

const HomeTemplate : React.FC = () => {

    const logos = [
        {
            name: 'Github',
            url: 'https://github.com/AlainNgauthier',
            fill: '#ffffff'
        },
        {
            name: 'Linkedin',
            url: 'https://www.linkedin.com/in/alaingauthier76/',
            fill: '#ffffff'
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/alaingauthier76',
            fill: '#ffffff'
        },
        {
            name: 'Instagram',
            url: 'https://github.com/AlainNgauthier',
            fill: '#ffffff'
        }
    ]

    return (
        <S.Main>
            <MenuBar />
            <div></div>
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
                {logos.map((logo, index) => (
                    <span key={index}>
                        <Link href={logo.url}>
                            <a>
                                <LogoWrapper name={logo.name} fill="#ffffff" />
                            </a>
                        </Link>
                    </span>
                ))}
            </S.ThirdLine>
        </S.Main>
    )
};

export default HomeTemplate;