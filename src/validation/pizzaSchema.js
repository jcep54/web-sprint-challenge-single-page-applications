import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('you must enter a name')
        .min(2,"name must be at least 2 characters")  
})

export default schema;