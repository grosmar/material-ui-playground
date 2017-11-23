import * as React from 'react';
import {withStyles, StyledComponentProps, WithStyles, StyleRules} from 'material-ui/styles';
import BottomNavigation, {BottomNavigationButton} from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';

const styles:StyleRules ={
	root: {
		width: "100%",
		position: "fixed",
		bottom: 0
	},
};


class BottomMainNavigation extends React.Component<WithStyles<"root">> {

	state = {
			value: 0,
		};


	handleChange = (event:React.ChangeEvent<{}>, value:any) => {
		this.setState({ value });
	};

	render() {
		const {classes} = this.props;
		const {value} = this.state;

		return (
			<BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
				<BottomNavigationButton label="Recents" icon={<RestoreIcon />} />
				<BottomNavigationButton label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationButton label="Nearby" icon={<LocationOnIcon />} />
			</BottomNavigation>
		);
	}
}


export default withStyles(styles)<StyledComponentProps>(BottomMainNavigation);

