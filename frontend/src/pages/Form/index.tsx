import FormCard from 'components/FormCard';
import { useParams } from 'react-router-dom';

function Form() {

    const params = useParams();

    // App.tsx: <Route path=":movieId" element={<Form />} />
    // Foi definido no app.tsx o movieId para quando acessar o form/1, form/2, etc
    return (
       <FormCard movieId={`${params.movieId}`}/>
    );

}

export default Form;