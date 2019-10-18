import 'isomorphic-fetch';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import NavPills from '../../components/NavPills/NavPills';
import styles from './PlatoDetalleStyle';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import ListIngredientes from '../../components/ListIngredientes/ListIngredientes';
import ListNutrientes from '../../components/ListNutrientes/ListNutrientes';

export default class PlatoDetalle extends React.Component {

  /* constructor(props){
    super(props);
    this.state = {openPlato: null};
  } */

  static async getInitialProps({ query, res }) {
    try {
        let idPlato = query.id;
        
        let [reqIngredientes, reqNutrientes, reqDetalles] = await Promise.all([
            fetch(`http://localhost:4300/platos/${idPlato}/ingredientes`),
            fetch(`http://localhost:4300/platos/${idPlato}/nutrientes`),
            fetch(`http://localhost:4300/platos/${idPlato}/detalles`)
        ]);

        if (reqDetalles.status >= 400) {
            res.statusCode = reqDetalles.status;
            return { ingredientes: null, nutrientes: null, datos: null, statusCode: reqDetalles.status}
        }

        let {respuesta: ingredientes} = await reqIngredientes.json();
        //let ingredientes = dataIngredientes.respuesta;
        let {respuesta: nutrientes} = await reqNutrientes.json();
        let {respuesta: datos} = await reqDetalles.json();

        return {ingredientes, nutrientes, datos, statusCode: 200}

    } catch (error) {
        res.statusCode = 503;
        return { ingredientes: null, nutrientes: null, datos: null, statusCode: 503}
    }
}

    render(){
      const {ingredientes, nutrientes, datos} = this.props;
      
      //console.log(ingredientes);

      return <div className="section">
        <div className="container">
          <div id="navigation-pills">
            <div className="title">
              <h3>
                <small>{datos.nombre}</small>
              </h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
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
                        <ListIngredientes items={ingredientes}/>
                      )
                    },
                    {
                      tabButton: "Nutrientes",
                      tabIcon: List,
                      tabContent: (
                        <ListNutrientes datos={nutrientes}/>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>

        </div>
        <style jsx PlatoDetalleStyle>{ styles }</style>
      </div>
    }

}