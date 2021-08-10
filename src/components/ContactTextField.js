import { TextField } from '@material-ui/core';

const ContactFormField = ({label, value, onChange, className}) => {
    return (
        <TextField 
        className={className} 
        value={value}
        onChange={onChange}
        variant="outlined" 
        label={label} />
    );
}
 
export default ContactFormField;