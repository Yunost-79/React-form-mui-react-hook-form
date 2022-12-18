import { Route, Routes } from 'react-router-dom';
import { AuthPage } from './Page/AuthPage/AuthPage';
import { FormLogin } from './Page/AuthPage/FormLogin';
import { FormSignUp } from './Page/AuthPage/FormSignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AuthPage />}>
          <Route index element={<FormLogin />} />
          <Route path="/sign-up" element={<FormSignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
