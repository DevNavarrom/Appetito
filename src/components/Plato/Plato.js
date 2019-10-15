import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '../../../routes';
import slug from '../../helpers/slug';
import styles from './PlatoCss';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default class Plato extends React.Component {

    render(){
        const {plato} = this.props;

        return <div>
            <Card className="card">
                <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image title"
                />
                <CardContent className="cardContent">
                    <Typography gutterBottom variant="h5" component="h2">
                        {plato.title}
                    </Typography>
                    <Typography>
                        {plato.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <AddShoppingCartIcon/>
                    </Button>
                    <Link route="channel" params={{ slug: slug(plato.title), id: plato.id }} >
                        <Button size="small" color="primary">
                            <VisibilityIcon/>
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            <style PlatoCss>{styles}</style>
        </div>
    }
}