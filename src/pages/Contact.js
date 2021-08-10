import { TextField, makeStyles, Button } from "@material-ui/core"
import { useState } from "react";
import ContactFormField from "../components/ContactTextField";
import emailjs from 'emailjs-com';

const useStyle = makeStyles({
    main: {
        paddingTop: 8,
        paddingLeft: 8,
        paddingRight: 8,
    },
    emailForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
    nameRow: {
        display: 'flex',
        flexDirection: "row",
    },
    button: {
        margin: 8,
        fontSize: 20,
    },
    textField: {
        flexGrow: 1,
        margin: 8,
        background: '#ddd',
        color: 'black',
        borderRadius: 4
    }
})

const Contact = () => {
    const classes = useStyle();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const submitForm = async () => {
        try {
            let name = firstname + ' ' + lastname;
            const templateParams = {
                name,
                email,
                description
            };

            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID,
            ).then(() => {
                setFirstname('');
                setLastname('');
                setEmail('');
                setDescription('');
            });
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <main className={classes.main}>
            <form className={classes.emailForm}>
                <div className={classes.nameRow}>
                    <ContactFormField
                        className={classes.textField}
                        label="Firstname" 
                        value={firstname} 
                        onChange={e => setFirstname(e.target.value)} />
                    <ContactFormField
                        className={classes.textField}
                        label="Lastname" 
                        value={lastname} 
                        onChange={e => setLastname(e.target.value)} />
                </div>
                <ContactFormField
                    className={classes.textField}
                    label="E-mail" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                <TextField
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                    className={classes.textField} 
                    variant="outlined" 
                    label="Description" 
                    multiline 
                    rows={4} />
                <Button onClick={submitForm} className={classes.button} variant="contained" color="secondary">SEND!</Button>
            </form>
        </main>
    );
}
 
export default Contact;