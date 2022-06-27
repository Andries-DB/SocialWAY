import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../../core/routes';
import './App.css';
import AuthProvider from './Auth/AuthProvider';
import LoginScreen from './Auth/Login/LoginScreen';
import RegisterScreen from './Auth/Register/RegisterScreen';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path={AuthRoutes.Login} element={<LoginScreen />} />
        <Route path={AuthRoutes.Register} element={<RegisterScreen />} />
        <Route
          path="*"
          element={<Navigate to={AuthRoutes.Login} />}
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
