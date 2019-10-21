import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../CustomButtons/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 7;
const noOfCards = 2;
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
                <ArrowBackIosIcon />
            </Button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
        
      >
        <div data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg" />
        <div data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg" />
        <div data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg" />
      </ItemsCarousel>
    </Wrapper>
  );
};
