import * as React from 'react';
import Button from 'material-ui/Button';
import BottomMainNavigation from "./component/BottomMainNavigation";
import Grid from "material-ui/Grid";



export default function App() {
  return (
  	<Grid>
		<Button raised color="primary">
			Hello World
		</Button>
		<BottomMainNavigation><Button raised color="primary">
			Hello World
		</Button></BottomMainNavigation>
	</Grid>
  );
}
