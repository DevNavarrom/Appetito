import Link from 'next/link';
import Head from 'next/head';

export default class Layout extends React.Component {

    render(){
        const { children, title } = this.props;

        return <div>

            <Head>
                <title>{ title }</title>
            </Head>
            <header><Link href="/"><a>Podcast</a></Link></header>

            { children }

            <style jsx>{`
                header {
                    color: #fff;
                    background: #CDDC39;
                    padding: 15px;
                    text-align: center;
                }
                header a {
                    color: #fff;
                    text-decoration: none;
                }
                root: {
                  ...theme.typography.button,
                  backgroundColor: theme.palette.background.paper,
                  padding: theme.spacing(1),
                }
            `}</style>
        </div>
    }
}