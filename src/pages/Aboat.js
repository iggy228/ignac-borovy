import { Avatar, Container, makeStyles, Typography, Link } from '@material-ui/core';
import AvatarImage from '../img/profile-pic.jpg';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';

const windowWidth = window.screen.width;

const useStyle = makeStyles(theme => ({
    about: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        paddingTop: 32,
    },
    mainContent: {
        flexGrow: 1,
        marginRight: 32,
        color: 'white',
    },
    sideContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingTop: 64,
        },
    },
    avatar: {
        display: 'flex',
        alignSelf: 'center',
        width: windowWidth / 4,
        height: windowWidth / 4,
        border: "1px solid black",
        marginBottom: 24,
    },
    socialMediaRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatarLink: {
        margin: 8,
    },
    pink: {
        background: 'purple',
    },
    blue: {
        background: 'blue',
    },
    black: {
        background: 'black',
    }
}))

const Home = () => {
    const classes = useStyle();

    return (
        <Container component="main" className={classes.about}>
            <div className={classes.mainContent}>
                <Typography variant="h2" align="center">Ignac Borovy</Typography><br />
                <Typography>
                    Student interested into programming. Mostly making mobile and web apps.<br />
                    I'm making mobile apps in Kotlin with using Android Studio or in modern framework Flutter. 
                    For mobile app I'm using modern jetpack libraries as LiveData, DataBinding and now Compose.<br />
                    Web app I'm doing in React.js with using UI framework as Material UI or using libraries as Tailwind.
                </Typography>
            </div>
            <div className={classes.sideContent}>
                <Avatar 
                    className={classes.avatar} 
                    alt="Ignac Borovy" 
                    src={AvatarImage} />
                <div className={classes.socialMediaRow}>
                    <Link className={classes.avatarLink} href="https://www.instagram.com/iggy_borovy">
                        <Avatar className={classes.pink}>
                            <InstagramIcon />
                        </Avatar>
                    </Link>
                    <Link className={classes.avatarLink} href="https://www.facebook.com/ignac.borovy">
                        <Avatar className={classes.blue}>
                            <FacebookIcon />
                        </Avatar>
                    </Link>
                    <Link className={classes.avatarLink} href="https://www.github.com/iggy228">
                        <Avatar className={classes.black}>
                            <GitHubIcon />
                        </Avatar>
                    </Link>
                </div>
            </div>
        </Container>
    );
}
 
export default Home;