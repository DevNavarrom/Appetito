import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class ChannelGrid extends React.Component {
    render(){

        const {channels} = this.props;

        return <div className="channels">
        {channels.map((channel) => (
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
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  {channel.description}
                </Typography> */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              
              <Link href={`channel?id=${ channel.id }`} >
                <Button size="small" color="primary">
                  Share
                </Button>
              </Link>

              <Link href={`channel?id=${ channel.id }`}>
                <a color="primary">Learn More</a>
              </Link>

              <Button onClick={this.handleClick} size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        ))}

        <style jsx>
            {`
                card: {
                    maxWidth: 345,
                    }
                    media: {
                    height: 0,
                    paddingTop: '56.25%', // 16:9
                    }
                    expand: {
                    transform: 'rotate(0deg)',
                    marginLeft: 'auto',
                    transition: theme.transitions.create('transform', {
                        duration: theme.transitions.duration.shortest,
                    }),
                    }
                    expandOpen: {
                    transform: 'rotate(180deg)',
                    }
                    avatar: {
                    backgroundColor: red[500],
                    }
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