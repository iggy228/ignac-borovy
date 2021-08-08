import { Typography, AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'

const useStyle = makeStyles({
    title: {
        flexGrow: 1,
    },
    link: {
        padding: 12,
        color: 'white',
    },
})

const Navbar = () => {
    const classes = useStyle();

    return ( 
        <AppBar position="sticky" component="nav">
            <Toolbar>
                <Typography variant="h5" className={classes.title}>
                    Ignác Borový
                </Typography>
                <Link component={RouterLink} className={classes.link} to="/">Aboat</Link>
                <Link component={RouterLink} className={classes.link} to="/projects">My projects</Link>
                <Link component={RouterLink} className={classes.link} to="/contact">Contact</Link>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;