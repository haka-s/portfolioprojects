import React from 'react';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowFroward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';

import { useGlobalContext } from './../../context';

const HeroSection = () => {
  const { onHover, hover } = useGlobalContext();
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Coding made simple</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          ipsa quisquam deserunt.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            My Projects {hover ? <ArrowFroward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
