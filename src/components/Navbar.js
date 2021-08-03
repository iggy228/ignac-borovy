import { Typography, AppBar, Toolbar, Link, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    title: {
        flexGrow: 1,
    },
    link: {
        padding: 12,
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
                <Link className={classes.link}>Home</Link>
                <Link className={classes.link}>Portfolio</Link>
                <Link className={classes.link}>Contact</Link>
            </Toolbar>
        </AppBar>
    );
}
 
export default Navbar;