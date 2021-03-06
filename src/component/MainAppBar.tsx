import * as React from 'react';
import {StyleRules, withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import {StyledComponentProps, WithStyles} from "material-ui";

const styles:StyleRules = {
	root: {
		//marginTop: theme.spacing.unit * 3,
		width: '100%',
	},
	flex: {
		flex: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class MainAppBar extends React.Component<WithStyles> {


	render() {
		const {classes} = this.props;

		return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
						<MenuIcon/>
					</IconButton>
					<Typography type="title" color="inherit" className={classes.flex}>
						Title
					</Typography>
					<Button color="contrast">Login</Button>
				</Toolbar>
			</AppBar>
		</div>);
	};
}


export default withStyles(styles)<StyledComponentProps>(MainAppBar);