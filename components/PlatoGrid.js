import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '../routes';
import slug from '../helpers/slug';
import CssBaseline from '@material-ui/core/CssBaseline';

export default class PlatoGrid extends React.Component {

    render(){
        const {channels} = this.props;

        return <div>
            <main>
                {/* Hero unit */}
                <CssBaseline />
                <div className="heroContent">
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Appetito
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Something short and leading about the collection below—its contents, the creator, etc.
                            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                            entirely.
                        </Typography>
                        <div className="heroButtons">
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
                        </div>
                    </Container>
                </div>
                <Container className="cardGrid" maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {channels.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className="card">
                                    <CardMedia
                                        className="cardMedia"
                                        image="../static/images/salad-color-2.png"
                                        title="Image title"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Agregar
                                        </Button>
                                        <Link route="channel" params={{slug: slug(card.title), id: card.id}} >
                                            <Button size="small" color="primary">
                                                Ver
                                            </Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <style jsx>
                {`
                    heroContent: {
                        backgroundColor: palette.background.default;
                        padding: spacing(8, 0, 6);
                      },
                      heroButtons: {
                        marginTop: spacing(4);
                      },
                      cardGrid: {
                        paddingTop: spacing(8);
                        paddingBottom: spacing(8);
                      },
                      card: {
                        height: '100%';
                        display: 'flex';
                        flexDirection: 'column';
                      },
                      cardMedia: {
                        paddingTop: '56.25%';
                      },
                      cardContent: {
                        flexGrow: 1;
                      },
                `}
            </style>
        </div>
    }
}