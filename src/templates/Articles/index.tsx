//import * as React from 'react';
import * as React from 'react';
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
}

export type ArticleProps = {
    articles?: Article[]
}

export default function ListArticlesTemplate({ articles }: ArticleProps) {

    const router = useRouter();

    return (
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
                    </div>
                ))}</S.List>
            </S.Wrapper>
        </S.Main>
    );
};