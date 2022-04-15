import { Route, Routes as Router} from 'react-router-dom';

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

export function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />

      <Route path=':id/' element={<Detail />} />
    </Router>
  );
}