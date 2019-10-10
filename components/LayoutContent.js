import NProgress from 'nprogress';
import Router from 'next/router';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
// core components
import Header from "./Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import GridItem from "./Grid/GridItem.js";
import GridContainer from './Grid/GridContainer';

import styles from "../static/jss/layoutContent";

const dashboardRoutes = [];

const useStyles = makeStyles({styles});
//const useStyles = createMuiTheme(styles);

Router.events.on('routeChangeStart', url => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


export default class LayoutContent extends React.Component {

    render(){
        const { children, title, ...rest } = this.props;
        const classes = useStyles();
        
        return (
            <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            { children }
          {/* <ProductSection />
          <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
        );
    }
}