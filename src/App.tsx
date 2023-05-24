import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import { routes } from './constants';
import AboutMe from './pages/AboutMe';
import Main from './pages/Main';
import UserInfo from './pages/UserInfo';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={routes.HOME} Component={Main} />
        <Route path={routes.ABOUT_ME} Component={AboutMe} />
        <Route path={routes.USER_INFO} Component={UserInfo} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
