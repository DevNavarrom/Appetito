
import 'isomorphic-fetch';
import Error from './_error';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import MainContent from '../components/MainContent';

export default class extends React.Component {
    
    constructor(props){
        super(props)
        this.state = { openPlato: null }

    }
    static async getInitialProps({ query, res }) {
        try {
            let idChannel = query.id;

            let [reqChannel, reqAudios, reqSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
            ]);

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status;
                return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status}
            }

            let dataChannel = await reqChannel.json();
            let channel = dataChannel.body.channel;

            let dataAudio = await reqAudios.json();
            let audioClips = dataAudio.body.audio_clips;

            let dataSeries = await reqSeries.json();
            let series = dataSeries.body.channels;

            return {channel, audioClips, series, statusCode: 200}
        } catch (error) {
            res.statusCode = 503;
            return { channel: null, audioClips: null, series: null, statusCode: 503}
        }
    }

    openPodcast = (event, podcast) => {
        event.preventDefault();
        this.setState({
            openPlato: podcast
        });

    }

    render(){

        const { channel, audioClips, series, statusCode } = this.props;
        const { openPodcast } = this.state;

        if (statusCode !== 200 ) {
            return <Error statusCode = { statusCode } />
        }

        return <MainContent title={channel.title}>

            { openPlato && <div>Hay un plato abierto</div>}

            <Card className="card">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={channel.urls.logo_image.original}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {channel.title}
                        </Typography>
                        <p><strong>Audios</strong></p>
                        {audioClips.map((clip) => (
                            <Typography variant="body2" color="textSecondary" component="p">
                                {clip.title}
                            </Typography>
                        ))}
                        <p><strong>Series</strong></p>
                        {series.map((serie) => (
                            <Typography variant="body2" color="textSecondary" component="p">
                                {serie.title}
                            </Typography>
                        ))}
                      </CardContent>
                    </CardActionArea>
                    
                  </Card>

            <style>{`
                    card: {
                    maxWidth: 345,
                    },
                    media: {
                    height: 0,
                    paddingTop: '56.25%', // 16:9
                    },
                    expand: {
                    transform: 'rotate(0deg)',
                    marginLeft: 'auto',
                    transition: theme.transitions.create('transform', {
                        duration: theme.transitions.duration.shortest,
                    }),
                    },
                    expandOpen: {
                    transform: 'rotate(180deg)',
                    },
                    avatar: {
                    backgroundColor: red[500],
                    },
                    .channels {
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(
                        auto-fill,
                        minmax(160px, 1fr)
                    );
                    color: black;
                }
                `}
                </style>
        </MainContent>
    }
}

//export default Plato;