
import 'isomorphic-fetch';
import Error from './_error';
//import Chip from '@material-ui/core/Chip';
//import ErrorIcon from '@material-ui/icons/Error';
//import Layout from '../components/Layout'
//import ChannelGrid from '../components/ChannelGrid';
//import MainContent from '../components/MainContent';
import PlatoGrid from './PlatoGrid/PlatoGrid';
import LayoutContent from '../components/LayoutContent/LayoutContent';

export default class extends React.Component {

  static async getInitialProps({ res }) {
    try {

      //let req = await fetch('https://api.audioboom.com/channels/recommended');
      let req = await fetch('http://localhost:4300/platos');
      let { respuesta: productos } = await req.json();
      return { productos, statusCode: 200 };

    } catch (err) {
      res.statusCode = 503;
      return { productos: null, statusCode: 503}
    }
    
  }

  handleClick = e => {
    e.preventDefault();
    
  };

  render(){

    const { productos, statusCode } = this.props;

    if (statusCode !== 200 ) {
      /* return <div>
        <Chip
        icon={<ErrorIcon />}
        label="Comunicación fallida con el servidor. Dirijase al administrador del sistema."
        />
        <style>{`
          root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
              margin: theme.spacing(0.5),
            },
          }
        `}</style>
      </div>; */
      return <Error statusCode = { statusCode } />
    }

    /* return <Layout title="Appetito">

      <ChannelGrid channels = { channels }/>
      
    </Layout> */
    /* return <MainContent title="Appetito">
      <PlatoGrid channels = { channels }/>
    </MainContent> */
    return <LayoutContent title="Appetito">
      <PlatoGrid productos = { productos }/>
    </LayoutContent>
    

  }

}