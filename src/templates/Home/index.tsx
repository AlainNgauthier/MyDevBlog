import Link from 'next/link';
import { NextSeo } from 'next-seo';

import MenuBar from 'components/Menu';
import LogoWrapper from 'components/Logos';
import IntroductionSection from './IntroductionSection';
import useWindowSize from 'components/_hooks/resize';
import * as S from './styles';

const HomeTemplate : React.FC = () => {

    const { width } = useWindowSize();

    

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
        <>
            <NextSeo 
                title="My DevBlog" 
                description="A project to share all I want about everything, especially about technologies"
                canonical="https://my-dev-blog.alaingauthier.com.br" 
            />
            <section
                style={{ 'display' : 'flex', 'flexDirection' : 'column' }}
            >
                <S.Main>
                    <MenuBar />
                    <div></div>
                    <S.SecondLine>
                        <S.SecondLineSubtitle>
                        &lt;Hello, world! &#47;&gt; 
                        </S.SecondLineSubtitle>
                        <S.SecondLineTitle>
                            {width && width > 768 ? (
                                <div>
                                    I'm Alain Gauthier Ndamwey
                                </div>

                            ) : (
                                <div>
                                    Alain Gauthier Ndamwey
                                </div>
                            )}
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
                <IntroductionSection />
            </section>
        </>
    )
};

export default HomeTemplate;