import css from 'styled-jsx/css';

export default css.PlatoDetalleStyle`
  .section {
    padding: 70px 0;
  }

  .title {
    /* ...title,*/
    color: #3C4858;
    margin: 1.75rem 0 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-family: Roboto Slab, "Times New Roman", serif;

    margin-top: 30px;
    min-height: 32px;
    text-decoration: none;
  }

  .container {
    z-index: 12;
    color: #3C4858;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
     
    margin-top: 30px;
    min-height: 32px;
    text-decoration: none;
/* ...container; */
  }

  @media (min-width: 768px) {
    .container{
      max-width: 720px;
    }
};
@media (min-width: 576px) {
  .container{
    max-width: 540px;
  }
};
@media (min-width: 992px){
  .container{
    max-width: 960px:
  }
};
@media (min-width: 1200px) {
  .container{
    max-width: 1140px;
  }
};
`