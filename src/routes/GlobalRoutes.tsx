import { Route, Routes } from 'react-router-dom';

import { Header } from '@components/Header';

import { Detail } from '@pages/Detail';
import { Home } from '@pages/Home';
import { NotFound } from '@pages/NotFound';

import { Main, Wrapper } from './styles';

export function GlobalRoutes() {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='movie/:id/' element={<Detail />} />
          
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </Wrapper>
  );
}