import { container } from '../../static/jss/appetito-style';

const carouselStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  cardImages: {
    height: "160px",
    display: "grid",
    gridTemplateColumns: "repeat(3, auto)",
    gridTemplateRows: "repeat(2, 80px)",
    gridGap: "4px"
    /* padding-top: 56.25%; 16:9 Proporcion */
  },
  imgs: {
    gridColumn: "span 2",
    gridRow: "span 2"
    /*width: "100%",
    height: "100%",
    objectFit: "cover"*/
  }
};

export default carouselStyle;