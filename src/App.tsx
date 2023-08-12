import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="side" bg="crimson">
          Side
        </GridItem>
      </Show>
      <GridItem area="main" bg="CornflowerBlue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
