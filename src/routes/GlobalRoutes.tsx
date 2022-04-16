import { Route, Routes } from 'react-router-dom';

import { Header } from '@components/Header';

import { Home } from '@pages/Home';
import { Detail } from '@pages/Detail';
import { Favorites } from '@pages/Favorites';
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
          <Route path='favorites/' element={<Favorites />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </Wrapper>
  );
}