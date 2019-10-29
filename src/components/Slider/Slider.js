import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../CustomButtons/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 7;
const noOfCards = 1;
const chevronWidth = 60;

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Wrapper>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={noOfCards}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        rightChevron={
            <Button
                color="transparent"
                target="_blank"
                className="navLink"
            >
                <ChevronRightIcon />
            </Button>
        }
        leftChevron={
            <Button
                color="transparent"
                target="_blank"
                className="navLink"
            >
                <ChevronLeftIcon />
            </Button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <img style={{height: "100%", width: "100%", objectFit: "cover"}} src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/Dhal.jpg" />
        <img style={{height: "100%", width: "100%", objectFit: "cover"}} src="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/stir-fried-shredded-roti-kottu-roti.jpg" />
        <img style={{height: "100%", width: "100%", objectFit: "cover"}} src="https://felixwong.com/gallery/images/f/food_in_china14-010.jpg" />
      </ItemsCarousel>
    </Wrapper>
  );
};
