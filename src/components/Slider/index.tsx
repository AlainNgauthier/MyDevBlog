import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRightCircleFill, ArrowLeftCircleFill } from "@styled-icons/bootstrap";
//import { ArrowLeftCircleFill } from "@styled-icons/bootstrap";

import { PlacesTemplateProps } from 'templates/Places';
import * as S from './styles';

export default function Slider({ place }: PlacesTemplateProps) {
    const [current, setCurrent] = useState(0);
    const length = place.gallery.length;
    //console.log(length);

    if(!Array.isArray(place.gallery) || length <= 0) {
        return null;
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    //console.log(current);

    return (
        <S.Slider>
            <S.ArrowLeft>
                <ArrowLeftCircleFill 
                    size={40}
                    onClick={prevSlide}
                />
            </S.ArrowLeft>
            <S.ArrowRight>
                <ArrowRightCircleFill 
                    size={40} 
                    onClick={nextSlide}
                />
            </S.ArrowRight>
            {place.gallery.map((image, index) => {
                return (
                    <S.ImagesWrapper 
                        key={index}
                    >
                        {index === current && (
                            <Image 
                                src={image.url} 
                                alt={`imagens de ${place.name}`}
                                width={700}
                                height={500}
                                quality={80}
                                objectFit="cover"
                                priority 
                            />
                        )}
                    </S.ImagesWrapper>
                )
            })}
        </S.Slider>
    );
};