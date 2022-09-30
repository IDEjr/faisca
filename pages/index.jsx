import Header from './../components/header';
import Box from './../components/box';
import Wait from './../components/wait'

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {

    const nomes = handleJSONfiles('./public/posts/exemplo');
    const menus = handleJSONfiles('./public/posts/menus');    
  
    return {
      props: { nomes, menus },
    };
}

export default function Home(props)
{
  let { nomes, menus } = props;

  return (
    <>
      <Header menus={menus}/>      
      <Box type={"vertical"}>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)}        
        <Wait/>
      </Box>
    </>
  )
}
