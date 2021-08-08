import { Grid, makeStyles } from "@material-ui/core";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {id: 1, name: 'Emelyst', shortInfo: 'School project for making app to control smart house', link: 'https://github.com/iggy228/Emelyst'},
    {id: 2, name: 'Daily pokemon', shortInfo: 'Pokemon pokedex apps with random random interesting pokemon for everyday.', link: 'https://github.com/iggy228/daily_pokemon'},
    {id: 2, name: 'Ignac Borovy', shortInfo: 'This page is using react and material ui.', link: 'https://github.com/iggy228/ignac-borovy'},
]

const useStyle = makeStyles({
    grid: {
        marginRight: 8,
        marginLeft: 8,
        marginTop: 8,
    }
})

const MyProjects = () => {
    const classes = useStyle();

    return (
        <main className={classes.grid}>
            <Grid container spacing={3}>
                {
                    projects.map((project) => (
                        <Grid key={project.id} item xs={12} md={6} lg={4} xl={3}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    );
}
 
export default MyProjects;