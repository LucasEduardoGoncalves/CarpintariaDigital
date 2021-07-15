import { BrowserRouter, Route, Switch } from 'react-router-dom';

import GlobalStyles from './styles/styles'; 

import { Dashboard } from './pages/dashboard';
import { Sites } from './pages/sites';
import { Contato } from './pages/contato';
import { Feedback } from './pages/feedback';

import { HeaderComponent } from './components/HeaderComponent';
import { Container } from './styles/styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <HeaderComponent/>
      <Container>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/sites' component={Sites}/>
            <Route path='/contato' component={Contato}/>
            <Route path='/feedback' component={Feedback}/>
          </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
