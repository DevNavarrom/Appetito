import SwipeableViews from 'react-swipeable-views';


export default class PlatoDetalle extends React.Component {
    const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = index => {
    setActive(index);
  };
    render(){

    }
}