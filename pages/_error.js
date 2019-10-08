import React from 'react'
import Layout from '../components/Layout'

export default class Error extends React.Component {
    static getInitialProps ({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render(){
        const { statusCode } = this.props;

        return (
            <Layout title="Oops!!!">
                {statusCode === 404 ?
                    <div className="error-wrapper">
                        <div className="man-icon"></div>
                        <h3 className="title">404</h3>
                        <p className="info">Oh! Page not found</p>
                        <button type="button" className="home-btn">HOME</button>
                    </div>
                    :
                    <div className="error-wrapper">
                        <h3 className="title">Error inesperado.</h3>
                        <h4 className="info">Intenta en unos segundos nuevamente</h4>
                        <a href="/" className="home-btn">Go to homepage</a>
                    </div>
                }
                

                <style>{`
                    p, h1, h2, h3, h4, h5 {
                        margin: 0;
                    }
                    
                    body{
                        margin: 0;
                        padding: 0;
                        font-family: 'Roboto', sans-serif;
                        font-weight: 400;
                        font-size: 12px;
                        background: #f3f3f3;
                    }
                    
                    .error-wrapper {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        text-align: center;
                    }
                    
                    .error-wrapper .title {
                        font-size: 32px;
                        font-weight: 700;
                        color: #000;
                    }
                    
                    .error-wrapper .info {
                        font-size: 14px;
                    }
                    
                    .home-btn, 
                    .home-btn:focus, 
                    .home-btn:hover, 
                    .home-btn:visited {
                        text-decoration: none;
                        font-size: 14px;
                        color: #55aa29;
                        padding: 17px 77px;
                        border: 1px solid #55aa29;
                        -webkit-border-radius: 3px;
                        -moz-border-radius: 3px;
                        -o-border-radius: 3px;
                        border-radius: 3px;
                        display: block;
                        margin: 20px 0;
                        width: max-content;
                        background-color: transparent;
                        outline: 0;
                    }
                    
                    .man-icon {
                        background: url('https://www.hotstar.com/assets/b5e748831c911ca02f9c07afc11f2ae5.svg') center center no-repeat;
                        display: inline-block;
                        height: 100px;
                        width: 118px;
                        margin-bottom: 16px;
                    }
                `}</style>
            </Layout>
        )
    }


}