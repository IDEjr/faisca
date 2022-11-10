import Header from '../components/header/header';
import Box from '../components/box';
import Wait from '../components/wait'
import TypeWrite from '../components/TypeWrite';
import FlipLoading from '../components/FlipLoading'


import { handleJSONfiles } from '../functions/jsonHandler';
import CustomCursor from '../components/CustomCursor';

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
        {nomes.sort((a,b) => {if(a.nome < b.nome) {return -1;} else {return 1}}).map( ({nome}, index) => <h1 key={index}>{nome}</h1>)}        
        <Wait/>
        <FlipLoading/>       
      </Box>
      <TypeWrite text={"dingus fungus bungus omega cuckus!"} cursor={true}/>
    </>
  )
}
