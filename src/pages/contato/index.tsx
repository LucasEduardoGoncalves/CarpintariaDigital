import { Container } from './styled';
import { HiOutlineMail } from 'react-icons/hi';

export const Contato = () => {
    return (
        <Container>
            <h1>Contate-nos</h1>

            <main>
                <section>
                    <HiOutlineMail/>
                    <div>                                            
                        <h3>Email - 1: wandersonwiller@gmail.com</h3>
                        {/* <h3>Email - 2: lucasedugoncalves123@gmai.com</h3>   */}
                    </div>
                </section>
            </main>
        </Container>
    )
};