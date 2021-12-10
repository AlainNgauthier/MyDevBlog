import * as React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import * as S from './styles';
import { useRouter } from 'next/dist/client/router';
import LinkHome from 'components/LinkWrapper/LinkHome';
import { Home7 } from '@styled-icons/remix-fill/Home7';

type Article = {
    id: string
    title: string
    description: string
    category: string
    body: string
    slug: string
    banner: {
        id: string
        url: string
    }
}

export type ArticleProps = {
    articles?: Article[]
}

export default function ListArticlesTemplate({ articles }: ArticleProps) {

    const router = useRouter();

    return (
        <>
        <NextSeo 
            title="My DevBlog" 
            description="A project to share what I'm learning about technology, especially about web development"
            canonical="https://www.alaingauthier.dev/articles" 
        />
        <S.Main>
            <LinkHome href="/">
                <Home7 size={26} />
            </LinkHome>
            <S.Wrapper>
                <S.Typography>
                    Basics concepts about frontend software development
                </S.Typography>
                <S.List>{articles?.map(item => (
                    <div key={item.id}>
                        <S.TypographyTitle>
                            <span
                                style={{ 'cursor' : 'pointer' }}
                                onClick={() => router.push(`/articles/${item.slug}`)}
                            >
                                {item.title}
                            </span>
                        </S.TypographyTitle>
                        <S.TypographyDescription>
                            {item.description}
                        </S.TypographyDescription>
                        <S.Banner>
                            <Image 
                                    src={item.banner.url} 
                                    alt={`${item.title}`}
                                    width={650}
                                    height={370}
                                    quality={95}
                                    objectFit="cover"
                                    priority 
                            />
                        </S.Banner>
                    </div>
                ))}</S.List>
            </S.Wrapper>
        </S.Main>
    </>);
};