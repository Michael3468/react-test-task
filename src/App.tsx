import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe';
import Main from './pages/Main';
import UserInfo from './pages/UserInfo';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/about-me" Component={AboutMe} />
      <Route path="/user-info" Component={UserInfo} />
    </Routes>
  </BrowserRouter>
);

export default App;
