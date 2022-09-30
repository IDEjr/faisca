import Header from './../components/header';
import Box from './../components/box';

import styles from '../styles/Home.module.css'
import Script from "next/script";

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {
  
    const nomes = handleJSONfiles('./public/posts/exemplo');
    const menus = handleJSONfiles('./public/posts/header');
  
    return {
      props: { nomes, menus },
    };
}

export default (props) =>
{
  let { nomes, menus } = props;

  return (
    <>
      <Header menus={menus}/>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      <Box vertical>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)} 
      </Box>         
    </>
  )
}
