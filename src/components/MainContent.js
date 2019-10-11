import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';

/* const styles = theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}); */
const muiTheme = createMuiTheme({
    palette: {
      primary: {
          main: '#0DBE98',
      },
      secondary: {
        main: '#0DBE98',
        contrastText: '#f83371',
      },
      
    },
    appBar: {
      height: 60,
    },
  });

Router.events.on('routeChangeStart', url => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

export default class MainContent extends React.Component {
    
    render(){
        const { children, title } = this.props;
        
        return <div>
            <Head>
                <title>{ title }</title>
            </Head>

            <React.Fragment>
                {/* <CssBaseline /> */}
                {/* <MuiThemeProvider theme={muiTheme}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="primary" className="title">
                            Appetito
                        </Typography>
                        <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </MuiThemeProvider> */}

                {/* <div className="bg-img">
                    <div className="container">
                        <MuiThemeProvider theme={muiTheme}>
                            <AppBar position="static">
                                <Toolbar>
                                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className="title">
                                    Appetito
                                </Typography>
                                <Button color="inherit">Login</Button>
                                </Toolbar>
                            </AppBar>
                        </MuiThemeProvider>
                    </div>
                </div> */}
                <div className="container">
                    <div className="slideshow-container">
                        <div className="mySlides fade">
                            <div className="numbertext">1 / 3</div>
                            <img className="imgPlatos" src="../static/images/huevos_rancheros.jpg"/>
                            {/* <CardMedia
                                className="cardMedia"
                                image="../static/images/huevos_rancheros.jpg"
                                title="Image title"
                            /> */}
                            <div className="text">Huevos Rancheros</div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext">2 / 3</div>
                            <img className="imgPlatos" src="../static/images/Grannys_fried_green_tomatoes.jpg" />
                            <div className="text">Arepa de tomate verde</div>
                        </div>

                        <div className="mySlides fade">
                            <div className="numbertext">3 / 3</div>
                            <img className="imgPlatos" src="../static/images/huevos_rancheros.jpg" />
                            <div className="text">Huevos Rancheros</div>
                        </div>

                        </div>
                        
                        <div className="divDot">
                            <span className="dot"></span> 
                            <span className="dot"></span> 
                            <span className="dot"></span> 
                        </div>
                    </div>
                

                {children}

                {/* Footer */}
                <footer className="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </footer>
                {/* End footer */}
            </React.Fragment>

            {/* Styles */}
            <style jsx>{`
                cardMedia: {
                    paddingTop: '56.25%';
                }
                icon: {
                    marginRight: spacing(2);
                }
                footer: {
                    backgroundColor: palette.background.default;
                    padding: spacing(6);
                }

                root: {
                    flexGrow: 1,
                }
                menuButton: {
                    marginRight: theme.spacing(2),
                }
                title: {
                    flexGrow: 1,
                }

                /* Make clicks pass-through */
                #nprogress {
                    pointer-events: none;
                }

                #nprogress .bar {
                    background: #29d;

                    position: fixed;
                    z-index: 1031;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 2px;
                }

                /* Fancy blur effect */
                #nprogress .peg {
                    display: block;
                    position: absolute;
                    right: 0px;
                    width: 100px;
                    height: 100%;
                    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
                    opacity: 1;

                    -webkit-transform: rotate(3deg) translate(0px, -4px);
                    -ms-transform: rotate(3deg) translate(0px, -4px);
                    transform: rotate(3deg) translate(0px, -4px);
                }

                /* Remove these to get rid of the spinner */
                #nprogress .spinner {
                    display: block;
                    position: fixed;
                    z-index: 1031;
                    top: 15px;
                    right: 15px;
                }

                #nprogress .spinner-icon {
                    width: 18px;
                    height: 18px;
                    box-sizing: border-box;

                    border: solid 2px transparent;
                    border-top-color: #29d;
                    border-left-color: #29d;
                    border-radius: 50%;

                    -webkit-animation: nprogress-spinner 400ms linear infinite;
                    animation: nprogress-spinner 400ms linear infinite;
                }

                .nprogress-custom-parent {
                    overflow: hidden;
                    position: relative;
                }

                .nprogress-custom-parent #nprogress .spinner,
                .nprogress-custom-parent #nprogress .bar {
                    position: absolute;
                }

                @-webkit-keyframes nprogress-spinner {
                    0% {
                        -webkit-transform: rotate(0deg);
                    }
                    100% {
                        -webkit-transform: rotate(360deg);
                    }
                }
                @keyframes nprogress-spinner {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                /*--------NAVBAR IMAGE---------*/
                .bg-img {
                    /* The image used */
                    background-image: url("../static/images/huevos_rancheros.jpg");
                  
                    min-height: 380px;
                  
                    /* Center and scale the image nicely */
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                  
                    /* Needed to position the navbar */
                    position: relative;
                  }
                  
                  /* Position the navbar container inside the image */
                  .container {
                    position: absolute;
                    margin: 20px;
                    width: 80%;
                  }

                /*--------SLIDE NAVBAR AUTOMATIC-----------*/
                * {
                    box-sizing: border-box;
                }

                body {
                    font-family: Verdana, sans-serif;
                }

                .mySlides {
                    display: none;
                }

                img {
                    vertical-align: middle;
                    width: 100%;
                }

                /* Slideshow container */
                .slideshow-container {
                    max-width: 1000px;
                    position: relative;
                    margin: auto;
                }

                /* Caption text */
                .text {
                    color: #f2f2f2;
                    font-size: 15px;
                    padding: 8px 12px;
                    position: absolute;
                    bottom: 8px;
                    width: 100%;
                    text-align: center;
                }

                /* Number text (1/3 etc) */
                .numbertext {
                    color: #f2f2f2;
                    font-size: 12px;
                    padding: 8px 12px;
                    position: absolute;
                    top: 0;
                }

                /* The dots/bullets/indicators */
                .dot {
                    height: 15px;
                    width: 15px;
                    margin: 0 2px;
                    background-color: #bbb;
                    border-radius: 50%;
                    display: inline-block;
                    transition: background-color 0.6s ease;
                    text-align:center
                }

                .active {
                    background-color: #717171;
                }

                /* Fading animation */
                .fade {
                    -webkit-animation-name: fade;
                    -webkit-animation-duration: 1.5s;
                    animation-name: fade;
                    animation-duration: 1.5s;
                }

                @-webkit-keyframes fade {
                    from {
                        opacity: .4
                    } 
                    to {
                        opacity: 1
                    }
                }

                @keyframes fade {
                    from {
                        opacity: .4
                    } 
                    to {
                        opacity: 1
                    }
                }

                /* On smaller screens, decrease text size */
                @media only screen and (max-width: 300px) {
                    .text {font-size: 11px}
                }

                .divDot {
                    text-align:center
                }

                .imgPlatos {
                    width: 100%;
                }

            `}</style>
            {/* End styles */}
        </div>
        
    }
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(MainContent);