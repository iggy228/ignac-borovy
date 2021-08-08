import { Link, Card, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    card: {
        padding: 8,
        background: '#eee',
        '&:hover': {
            background: '#ddd'
        }
    },
    cardLink: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
})

const ProjectCard = ({ project }) => {
    const classes = useStyle()

    return (
        <Link className={classes.cardLink} href={project.link}>
            <Card className={classes.card}>
                <h2>{project.name}</h2>
                <p>{project.shortInfo}</p>
            </Card>
        </Link>
    );
}
 
export default ProjectCard;