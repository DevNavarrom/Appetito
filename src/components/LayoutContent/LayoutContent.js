import NProgress from 'nprogress';
import Router from 'next/router';

// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Header from "../Header/Header.js";
//import Footer from "components/Footer/Footer.js";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Parallax from '../Parallax/Parallax';
//import styles from "../../static/jss/layoutContent";
import styles from './LayoutContentCSS';

const dashboardRoutes = [];

//const useStyles = makeStyles({styles});
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
        
        return <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Appetito"
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
              <h1 className="title">¡Buen Appetito!</h1>
              <h4>
              Prepara tu plato como desees desde tu casa, oficina o lugar de trabajo y nosotros te lo llevamos. 
              Puedes ver algunos ya preparados y pedir el de tu antojo.
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
      <style jsx LayoutContentCSS>{styles}</style>
    </div>
        
        
    }
}