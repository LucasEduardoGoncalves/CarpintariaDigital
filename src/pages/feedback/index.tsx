import { Container } from './styled';
import { GiEmptyHourglass } from 'react-icons/gi';

export const Feedback = () => {
    return (
        <Container>
            <h1>Acho que estamos sem feedback...</h1>
            <GiEmptyHourglass/>

        </Container>
    )
};