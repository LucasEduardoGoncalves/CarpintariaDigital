import { Container } from './styled';

import logoLetmeask from '../../assets/img-sites/letmeask.svg';

export const Sites = () => {
    return (
        <Container>
            <h1>Sites públicos produzidos pela Carpintaria Digital</h1>

            <main>
                <section>
                    <img src={logoLetmeask} alt="" />
                    <div>
                        <h3>Nome: letmeask</h3>                       
                        <p>Tecnologias: ReactJS | Firebase </p>
                        <a href="https://letmeask-99411.web.app/" rel="noreferrer" target="_blank">Ir para letmeask</a>
                    </div>
                </section>
            </main>
        </Container>
    )
};