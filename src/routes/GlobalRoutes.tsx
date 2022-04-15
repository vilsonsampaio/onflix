import { Route, Routes } from 'react-router-dom';

import { Detail } from '@pages/Detail';
import { Home } from '@pages/Home';

import { Header } from '@components/Header';

import { Main, Wrapper } from './styles';

export function GlobalRoutes() {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='movie/:id/' element={<Detail />} />
          
          <Route path='*' element={(<h1>Rota nao encontrada</h1>)} />
        </Routes>
      </Main>
    </Wrapper>
  );
}