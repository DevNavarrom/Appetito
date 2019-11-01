import css from 'styled-jsx/css';

export default css.LayoutContentStyle`
.container {
    z-index: 12;
    color: #FFFFFF;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
     /* @media (min-width: 768px) {
        max-width: 720px;
    };
    @media (min-width: 576px) {
        max-width: 540px;
    };
    @media (min-width: 992px){
        max-width: 960px:
    };
    @media (min-width: 1200px) {
        max-width: 1140px;
    };  */
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
    max-width: 960px;
  }
};
@media (min-width: 1200px) {
  .container{
    max-width: 1140px;
  }
};

  .title {
    /* ...title; */
    color: #FFFFFF;
    margin: 1.75rem 0 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-family: "Roboto Slab", "Times New Roman", serif;

    display: inline-block;
    position: relative;
    margin-top: 30px;
    min-height: 32px;
    color: white;
    text-decoration: none;
  }

  .subtitle {
    font-size: 1.313rem;
    max-width: 500px;
    margin: 10px auto 0;
  }
  .main {
    background: #FFFFFF;
    position: relative;
    z-index: 3;
  }
  .mainRaised {
    margin: -60px 30px 0px;
    border-radius: 6px;
    box-shadow:
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  }
`