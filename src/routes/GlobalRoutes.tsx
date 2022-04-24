import { Route, Routes } from 'react-router-dom';

import { Home } from '@pages/Home';
import { Detail } from '@pages/Detail';
import { Favorites } from '@pages/Favorites';
import { Search } from '@pages/Search';
import { NotFound } from '@pages/NotFound';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

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
          <Route path='search/' element={<Search />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>

      <Footer />
    </Wrapper>
  );
}