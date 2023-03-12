import styles from './app.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}>
            <Route
              path="/login"
              element={<Login authService={authService} />}
            />
          </Route>
          <Route path="/card" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
