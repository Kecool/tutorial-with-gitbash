import React from 'react'
import { 
  ColumnA, 
  ColumnB, 
  ImgWrap, 
  AneContainer,
  AneRow,
  AneWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img
   } from './AneElements'
import { Button } from '../ButtonElements'

const AneSection = ({
  lightBg, 
  id, 
  img,
  topLine,
  headline,
  description,
  buttonLabel,
  alt,
  darkText,
  lightTaxt,
  imgStart,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
    <AneContainer lightBg={lightBg} id={id}>
        <AneWrapper>
            <AneRow imgStart={imgStart}> 
                <ColumnA>
                  <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightTaxt={lightTaxt}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to='home' 
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact="true"
                           offset={-80}
                           primary={primary ? 1 : 0 }
                           dark={dark ? 1 : 0}
                           dark2={dark2 ? 1 : 0}
                        
                        >{buttonLabel}</Button>
                    </BtnWrap>
                  </TextWrapper>
                </ColumnA>
                <ColumnB>
                    <ImgWrap>
                      <Img src={img} alt={alt} />
                    </ImgWrap>
                </ColumnB>
            </AneRow>
        </AneWrapper>
    </AneContainer>
    </>
  )
}

export default AneSection