//import { MenuAltLeft } from '@styled-icons/boxicons-regular/MenuAltLeft';
//@styled-icons/entypo/Address
//@styled-icons/evaicons-outline/EmailOutline
//@styled-icons/fluentui-system-filled/Call

import { Address } from '@styled-icons/entypo';
import { EmailOutline } from '@styled-icons/evaicons-outline';
import { Call } from '@styled-icons/fluentui-system-filled';

import * as S from './styles';

export default function Footer() {
    return (
        <S.Main>
            <S.MainWrapper>
                <S.Item>
                    <div>
                        <Address size={45} />
                    </div>
                    <span>where to find me</span>
                    <div>São Carlos, SP</div>
                </S.Item>
                <S.Item>
                    <div>
                        <EmailOutline size={45} />
                    </div>
                    <span>email me at</span>
                    <div>alain.djamba@ifood.com.br</div>
                </S.Item>
                <S.Item>
                    <div>
                        <Call size={45} />
                    </div>
                    <span>call me at</span>
                    <div>
                        Phone: (+55) 16 99149-5542
                    </div>
                </S.Item>
            </S.MainWrapper>
        </S.Main>
    );
};