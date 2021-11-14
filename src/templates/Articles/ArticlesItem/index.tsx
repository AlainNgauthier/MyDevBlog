import * as React from 'react';
import * as S from './styles';

import LinkWrapper from 'components/LinkWrapper';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export type ArticlesItemsProps = {
    article: {
        id: string
        slug: string
        title: string
        description: string
        category: string
        body: {
            html: string
        }
    }
}

export default function ArticlesItemsTemplate({ article }: ArticlesItemsProps) {
    return (
        <S.Main>
            <S.Wrapper>
                <section>
                    <LinkWrapper href="/articles">
                        <CloseOutline size={26} />
                    </LinkWrapper>
                </section>
                <S.Body>
                    <h1>{article.title}</h1>
                    <div
                        style={{ 'color': 'var(--color-footer)',}}
                    >
                        Category: {article.category}
                    </div>
                    <S.BodyContent dangerouslySetInnerHTML={{ __html: article.body.html }} />
                </S.Body>
            </S.Wrapper>
        </S.Main>
    );
};