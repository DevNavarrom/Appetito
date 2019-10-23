import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '../../../routes';
import slug from '../../helpers/slug';
import styles from './PlatoStyle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import VisibilityIcon from '@material-ui/icons/Visibility';

export default class Plato extends React.Component {

    render(){
        const {plato} = this.props;

        return <div>
            <Card className="card">
                <CardMedia
                    className="card-media"
                    image="https://www.sbs.com.au/food/sites/sbs.com.au.food/files/stir-fried-shredded-roti-kottu-roti.jpg"
                    title="Image title"
                    style={{height: "140px", paddingTop: "56.25%"}}
                />
                <CardContent className="card-content">
                    <Typography gutterBottom variant="h5" component="h2">
                        {plato.nombre}
                    </Typography>
                    <Typography>
                        {plato.descripcion}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        <RoomServiceIcon/>
                    </Button>
                    <Link route="detalles" params={{ slugPlato: slug(plato.nombre), id: plato.id }} >
                        <Button size="small" color="primary">
                            <VisibilityIcon/>
                        </Button>
                    </Link>
                </CardActions>
            </Card>
            <style jsx PlatoStyle>{styles}</style>
        </div>
    }
}