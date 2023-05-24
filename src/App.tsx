import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Main from './pages/Main';
import UserInfo from './pages/UserInfo';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/about-me" Component={AboutMe} />
        <Route path="/user-info" Component={UserInfo} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
