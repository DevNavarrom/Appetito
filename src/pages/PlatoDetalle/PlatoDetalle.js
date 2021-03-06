import 'isomorphic-fetch';
import Router from 'next/router';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import NavPills from '../../components/NavPills/NavPills';
import styles from './PlatoDetalleStyle';
//import './PlatoDetalle.css';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import List from "@material-ui/icons/List";
import ListIngredientes from '../../components/ListIngredientes/ListIngredientes';
import ListNutrientes from '../../components/ListNutrientes/ListNutrientes';
import Slider from '../../components/Slider/Slider';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
        main: '#0DBE98',
        contrastText: '#ffffff',
    },
    secondary: {
      main: '#0DBE98',
      contrastText: '#f83371',
    },
    
  },
  appBar: {
    height: 60,
  },
});

export default class PlatoDetalle extends React.Component {

  /* constructor(props){
    super(props);
    this.state = {openPlato: null};
  } */

  static async getInitialProps({ query, res }) {
    try {
        let idPlato = query.id;
        
        /* let [reqIngredientes, reqNutrientes, reqDetalles] = await Promise.all([
            fetch(`http://localhost:4300/platos/${idPlato}/ingredientes`),
            fetch(`http://localhost:4300/platos/${idPlato}/nutrientes`),
            fetch(`http://localhost:4300/platos/${idPlato}/detalles`)
        ]); */
        let reqDetalles = await fetch(`http://localhost:4300/platos/${idPlato}/detalles`);

        /* if (reqDetalles.status >= 400) {
            res.statusCode = reqDetalles.status;
            return { ingredientes: null, nutrientes: null, datos: null, statusCode: reqDetalles.status}
        } */

        if (reqDetalles.status >= 400) {
          res.statusCode = reqDetalles.status;
          return { datos: null, statusCode: reqDetalles.status}
        }
        /* let {respuesta: ingredientes} = await reqIngredientes.json();
        //let ingredientes = dataIngredientes.respuesta;
        let {respuesta: nutrientes} = await reqNutrientes.json(); */
        let {respuesta: datos} = await reqDetalles.json();

        // return {ingredientes, nutrientes, datos, statusCode: 200}
        return {datos,statusCode: 200}

    } catch (error) {
        res.statusCode = 503;
        return { datos: null, statusCode: 503}
    }
}

    render(){
      const {datos} = this.props;

      return <div style={{margin: "-10px", flex: 1, justifyContent: "center", alignItems: "center"}}>
        <MuiThemeProvider theme={muiTheme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton onClick={() => Router.back()} edge="start" style={{ marginRight: "16px" }} color="inherit" aria-label="menu">
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" style={{ flexGrow: "1" }}>
                {datos.datos.nombre}
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
        
        <Paper style={{ width: "70%", height: "40%", margin: "10px", padding: "10px"}} >
          {/* <div id="navigation-pills" > */}
            
            <Grid container>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="danger"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Ingredientes",
                      tabIcon: Dashboard,
                      tabContent: (
                        <ListIngredientes items={datos.ingredientes} />
                      )
                    },
                    {
                      tabButton: "Nutrientes",
                      tabIcon: List,
                      tabContent: (
                        <ListNutrientes datos={datos.nutrientes} />
                      )
                    }
                  ]}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6}>
                <div style={{ position: "relative", }}>
                    <Slider />
                </div>
              </Grid>

            </Grid>
          {/* </div> */}

        </Paper>
        <style jsx PlatoDetalleStyle>{ styles }</style>
      </div>
    }

}