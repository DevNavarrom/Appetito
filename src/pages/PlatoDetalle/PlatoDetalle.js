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

export default class PlatoDetalle extends React.Component {

  /* constructor(props){
    super(props);
    this.state = {openPlato: null};
  } */

  static async getInitialProps({ query, res }) {
    try {
        let idPlato = query.id;
        
        let [reqIngredientes, reqNutrientes] = await Promise.all([
            fetch(`http://localhost:4300/platos/${idPlato}/ingredientes`),
            fetch(`http://localhost:4300/platos/${idPlato}/nutrientes`)
        ]);

        console.log('Id del plato: '+idPlato);

        if (reqIngredientes.status >= 400) {
            res.statusCode = reqIngredientes.status;
            return { ingredientes: null, nutrientes: null, statusCode: reqIngredientes.status}
        }

        let {respuesta: ingredientes} = await reqIngredientes.json();
        //let ingredientes = dataIngredientes.respuesta;
        let {respuesta: nutrientes} = await reqNutrientes.json();

        return {ingredientes, nutrientes, statusCode: 200}

    } catch (error) {
        res.statusCode = 503;
        return { ingredientes: null, nutrientes: null, statusCode: 503}
    }
}

    render(){
      const {ingredientes} = this.props;
      
      //console.log(ingredientes);

      return <div className="section">
        <div className="container">
          <div id="navigation-pills">
            <div className="title">
              <h3>
                <small>Nombre Plato</small>
              </h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Ingredientes",
                      tabIcon: Dashboard,
                      tabContent: (
                        <ListIngredientes items={ingredientes}>

                        </ListIngredientes>
                      )
                    },
                    {
                      tabButton: "Nutrientes",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                        </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically procrastinate
                            B2C users after installed base benefits.
                        </p>
                        </span>
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