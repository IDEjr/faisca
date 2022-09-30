import Header from './../components/header';
import Box from './../components/box';

import styles from '../styles/Home.module.css'

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {

    const nomes = handleJSONfiles('./public/posts/exemplo');
  
    return {
      props: { nomes },
    };
}

export default function Home(props)
{
  let { nomes } = props;

  return (
    <>
      <Header/>      
      <Box vertical>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)} 
      </Box>         
    </>
  )
}
