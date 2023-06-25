import { MemoryRouter, Routes } from 'react-router-dom';

export function withRouters(routes, initialEntries = '/') {
  return (
    <MemoryRouter initialEntries={[initialEntries]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
