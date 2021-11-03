// import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
// import LinkWrapper from 'components/LinkWrapper';

import * as S from './styles';

export type PageTemplateProps = {
    heading: string,
    body: string
}

export default function PageTemplate({ heading, body } : PageTemplateProps) {

    return (
        <S.Main>
            {/* <LinkWrapper href="/my-trips">
                <CloseOutline size={26} />
            </LinkWrapper> */}
            <h1>
                {heading}
            </h1>
            <S.Text>
                <div 
                    dangerouslySetInnerHTML={ {__html: body } } 
                />
            </S.Text>
        </S.Main>
    )
};



