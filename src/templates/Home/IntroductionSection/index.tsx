import * as S from './styles';
import Image from 'next/image';

export default function Introduction() {
    return (
        <S.Main>
            <S.Wrapper>
                <S.Title>
                    <span>ABOUT</span>
                    <h2>
                        Let me introduce myself
                    </h2>
                </S.Title>
                <S.Body>
                    <S.BodyProfile>
                        <Image 
                            src="/img/profile.jpg"
                            alt="Profile of Alain Gauthier Ndamwey"
                            width={150}
                            height={150}
                            quality={100}
                            objectFit="contain"
                            priority 
                        />
                    </S.BodyProfile>
                    <S.BodyDescription>
                        <p>
                            Currently, I'm a Computer Science student and work as an Intern Frontend Engineer 
                            at iFood, foodtech company number one in Latin America. <br />
                            My goal is to build myself as a Specialist Front End Engineer.
                        </p>
                        <p>
                            Concerning of technologies I use, most of time I work with JavaScript, 
                            Typescript, React JS, NextJS and GraphQL.
                        </p>
                    </S.BodyDescription>
                </S.Body>
            </S.Wrapper>
        </S.Main>
    )
};