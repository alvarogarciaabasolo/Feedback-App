import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Route, Navigate } from 'react-router-dom';
import App from '../pages/Home/Home';
import { NewFeedback } from '../pages/NewFeedback';
import { FeedbackDetail } from '../pages/FeedbackDetail/FeedbackDetail';
import { Login } from '../pages/Login/Login';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtecteRoute';
import { Register } from '../pages/Register/Register';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      />
      <Route
        path="/newfeedback"
        element={
          <ProtectedRoute>
            <NewFeedback />
          </ProtectedRoute>
        }
      />
      <Route
        path="/FeedbackDetail"
        element={
          <ProtectedRoute>
            <FeedbackDetail />
          </ProtectedRoute>
        }
      />
      <Route path="/Register" element={<Register />} />
    </>
  )
);
