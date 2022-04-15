import { Route, Routes } from 'react-router-dom';

import { Detail } from '@pages/Detail';
import { Home } from '@pages/Home';

import { Header } from '@components/Header';

import { Wrapper } from './styles';

export function GlobalRoutes() {
  return (
    <Wrapper>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path=':id/' element={<Detail />} />
      </Routes>
    </Wrapper>
  );
}