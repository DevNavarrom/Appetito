import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';

export default class MainContent extends React.Component {

    render(){
        const { children, title } = this.props;

        return <div>
            <Head>
                <title>{ title }</title>
            </Head>

            <React.Fragment>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon className="icon" />
                        <Typography variant="h6" color="inherit" noWrap>
                            Appetito
                        </Typography>
                    </Toolbar>
                </AppBar>

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
                },
                footer: {
                    backgroundColor: palette.background.default;
                    padding: spacing(6);
                },
                tool-bar {
                    color: #fff;
                    color: #E83909;
                    text-align: center;
                }
            `}</style>
            {/* End styles */}
        </div>
        
    }
}