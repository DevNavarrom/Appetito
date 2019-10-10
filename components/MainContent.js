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

const styles = theme => ({
    /* icon: {
        marginRight: theme.spacing(2),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    }, */
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
                <CssBaseline />
                <div className="root">
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


            `}</style>
            {/* End styles */}
        </div>
        
    }
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(MainContent);