import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {
  return (
    <>
      <Grid container>
        <Grid container item xs={12} justifyContent="center">
          <Box component="img" src="./assets/LogoWeb.png" sx={{height:100, width:"auto"}}/>
          <Box component="img" src="./assets/Proyectos.png" sx={{height:100, width:"auto"}}/>
        </Grid>
        <Grid item xs={12}>
          <NavBar/>
        </Grid>
        <Grid item xs={12}>
          <ItemListContainer text="Greetings"/>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
