import { Link, useLocation } from 'react-router-dom';

import { Header } from './styled';
import logoImg from '../../assets/logo.svg';

export const HeaderComponent = () => {
    
    const location = useLocation();
    
    return (
        <Header>

                <div className="title">
                    <img src={logoImg} alt="Hotel paraiso" />
                    <div>CarpintariaDigital</div>
                </div>


            <nav>
                <Link to='/' className={`${location.pathname === '/' && 'barraLink'}`} >Home</Link>
                <Link to='/sites' className={`${location.pathname === '/sites' && 'barraLink'}`}>Sites</Link>
                <Link to='/feedback' className={`${location.pathname === '/feedback' && 'barraLink'}`}>Feedbacks</Link>
                <Link to='/contato' className={`${location.pathname === '/contato' && 'barraLink'}`}>Contato</Link>
            </nav>
        </Header>
    )
};