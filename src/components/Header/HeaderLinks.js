import {Link} from '../../../routes';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '../CustomButtons/Button';
import styles from './HeaderLinksStyle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class HeaderLinks extends React.Component {

    render(){
        return <div>
            <List className="list">
                <ListItem className="listItem">
                    <Button
                        href="/"
                        color="transparent"
                        target="_blank"
                        className="navLink"
                    >Registrarse</Button>
                    <Button
                        href="/"
                        color="transparent"
                        target="_blank"
                        className="navLink"
                    >Iniciar Sesión</Button>
                </ListItem>
                {/* <ListItem className="listItem">
                
                </ListItem> */}
            </List>
            <style HeaderLinksStyle>{styles}</style>
        </div>
    }
}