import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Card from '../Card/Card';

/* import image1 from '../../static/images/diet.png';
import image2 from '../../static/images/diet.png';
import image3 from '../../static/images/diet.png'; */
const image1 = 'https://www.bing.com/th?id=OIP.WW5k5Fb_msc6wMSzJgkvrgHaE8&pid=Api&w=2400&h=1600&rs=1';
const image2 = './static/images/diet.png';
const image3 = './static/images/diet.png';

import styles from './CarouselImagesStyle';

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear'
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <div className={classes.cardImages}>
                <div className={classes.imgs} data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg"/>
                <div className={classes.imgs} data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg"/>
                <div className={classes.imgs} data-src="https://weneedfun.com/wp-content/uploads/2015/10/Delicious-Food-Photos-20.jpg"/>
              </div>

            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}