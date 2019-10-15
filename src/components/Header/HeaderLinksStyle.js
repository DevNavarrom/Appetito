import css from 'styled-jsx/css';

export default css.HeaderLinksStyle`
.list {
    /*...defaultFont,*/
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    line-height: 1.5em;

    font-size: 14px;
    margin: 0px;
    padding-left: 0px;
    list-style: none;
    padding-top: 0px;
    padding-bottom: 0px;
    color: inherit;
  }

  .listItem {
    float: left;
    color: inherit;
    position: relative;
    display: block;
    width: auto;
    margin: 0;
    padding: 0;
  }

  .listItem:after {
    width: calc(100% - 30px);
    content: "";
    display: block;
    height: 1px;
    margin-left: 15px;
    background-color: #e5e5e5;
  }

  .listItemText {
    padding: 0 !important;
  }

  .navLink {
    color: inherit;
    position: relative;
    padding: 0.9375rem;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 3px;
    line-height: 20px;
    text-decoration: none;
    margin: 0px;
    display: inline-flex;
  }

    .navLink:hover {
      color: inherit;
      background: rgba(200, 200, 200, 0.2);
    }

    .navLink:focus {
      color: inherit;
      background: rgba(200, 200, 200, 0.2);
    }

    .navLink > span:first-child {
      justify-content: flex-start;
    }

    .icons {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }
    
  }
`