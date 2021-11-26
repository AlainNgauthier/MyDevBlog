import Link from 'next/link';
import { NextSeo } from 'next-seo';

import MenuBar from 'components/Menu';
import LogoWrapper from 'components/Logos';
import IntroductionSection from './IntroductionSection';
import Footer from 'components/Footer';
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
            url: 'https://www.instagram.com/4laingauthier/',
            fill: '#ffffff'
        }
    ]

    return (
        <>
            <NextSeo 
                title="My DevBlog" 
                description="A project to share what I'm learning about technology, especially about web development"
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
                                <h1>
                                    I'm Alain Gauthier Ndamwey
                                </h1>

                            ) : (
                                <h1>
                                    Alain Gauthier Ndamwey
                                </h1>
                            )}
                        </S.SecondLineTitle>
                        <S.SecondLineRole>
                            Frontend Software Engineer
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
                <Footer />
            </section>
        </>
    )
};

export default HomeTemplate;