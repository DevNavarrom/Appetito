
import 'isomorphic-fetch';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class extends React.Component {
    
    static async getInitialProps({ query }) {
        let idChannel = query.id;
        let req = await fetch(`https://api.audioboom.com/channels/${idChannel}`);
        let {body: {channel}} = await req.json();
        return { channel };
    }

    render(){

        const { channel } = this.props;

        return <div>

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
                        <Typography variant="body2" color="textSecondary" component="p">
                          {channel.description}
                        </Typography>
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
        </div>
    }
}

//export default Plato;