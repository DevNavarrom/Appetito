import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import styles from './PlatoGridCss';
import Plato from '../../components/Plato/Plato';

export default class PlatoGrid extends React.Component {

    render(){
        const {productos} = this.props;

        return <div>
            <main>
                {/* Hero unit */}
                <CssBaseline />
                <div className="heroContent">
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            ¡Buen Appetito!
                        </Typography>
                        {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Prepara tu plato como desees desde tu casa, oficina o lugar de trabajo y nosotros te lo llevamos. 
                            Puedes ver algunos ya preparados y pedir el de tu antojo. ¡Buen Appetito!
                        </Typography> */}
                        {/* <div className="heroButtons">
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Iniciar Sesión
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Registrarme
                                    </Button>
                                </Grid>
                            </Grid>
                        </div> */}
                    </Container>
                </div>
                <Container className="cardGrid" maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {productos.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Plato plato={card}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <style jsx PlatoGridCss>{styles}
            </style>
        </div>
    }
}