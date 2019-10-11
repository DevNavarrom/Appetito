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
import Parallax from './Parallax/Parallax';
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
        //const classes = useStyles();
        
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
      {process.browser ? 
        <Parallax filter image="https://source.unsplash.com/random">
        <div className="container">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className="title">Your Story Starts With Us.</h1>
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
      :
      <div>Nada pasa jejeje</div>
    }
      
      <div className="main mainRaised">
        <div className="container">
            { children }
          {/* <ProductSection />
          <TeamSection />
          <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
        );
        <style jsx>{`
          container: {
            z-index: 12;
            color: #FFFFFF;
            ...container;
          },
          title: {
            ...title;
            display: inline-block;
            position: relative;
            margin-top: 30px;
            min-height: 32px;
            color: #FFFFFF;
            text-decoration: none;
          },
          subtitle: {
            font-size: 1.313rem;
            max-width: 500px;
            margin: 10px auto 0;
          },
          main: {
            background: #FFFFFF;
            position: relative;
            z-index: 3;
          },
          mainRaised: {
            margin: -60px 30px 0px;
            border-radius: 6px;
            box-shadow:
              0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
          }
        `}</style>
    }
}