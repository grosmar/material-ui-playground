import * as React from 'react';
import Button from 'material-ui/Button';
import BottomMainNavigation from "./component/BottomMainNavigation";
import Grid from "material-ui/Grid";
import MainAppBar from "./component/MainAppBar";



export default function App() {
  return (
  	<Grid>
		<MainAppBar />
		<Button raised color="primary">
			Hello World
		</Button>
		<BottomMainNavigation />
	</Grid>
  );
}
