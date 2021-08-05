import { Avatar, Container, makeStyles, Typography } from '@material-ui/core';
import AvatarImage from '../img/profile-pic.jpg';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const windowWidth = window.screen.width;

const useStyle = makeStyles({
    about: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 32,
    },
    mainContent: {
        flexGrow: 1,
        marginRight: 32,
    },
    avatar: {
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
    pink: {
        background: 'purple',
        margin: 8,
    },
    blue: {
        background: 'blue',
        margin: 8,
    },
})

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
            <div>
                <Avatar 
                    className={classes.avatar} 
                    alt="Ignac Borovy" 
                    src={AvatarImage} />
                <div className={classes.socialMediaRow}>
                    <Avatar className={classes.pink}>
                        <InstagramIcon />
                    </Avatar>
                    <Avatar className={classes.blue}>
                        <FacebookIcon />
                    </Avatar>
                </div>
            </div>
        </Container>
    );
}
 
export default Home;