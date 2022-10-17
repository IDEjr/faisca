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
        <h2>nome1</h2>    
        <h2>nome2</h2>    
        <h2>nome3</h2>    
        <h2>nome4</h2>    
        <Wait/>
      </Box>
    </>
  )
}
