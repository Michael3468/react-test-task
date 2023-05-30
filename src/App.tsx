import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Layout } from './components';
import { routes } from './constants';
import { AboutMe, Main, UserInfo } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={routes.HOME} Component={Main} />
        <Route path={routes.ABOUT_ME} Component={AboutMe} />
        <Route path={`${routes.USER_INFO}/:id`} Component={UserInfo} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
