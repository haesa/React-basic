import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  // 새로고침 시 user가 아직 undfined라 Home로 되돌아옴(경로로 직접 접근하면 새로고침됨. 링크로 직접 들어가면 새로고침 X)
  // 솔루션은 user를 받아올 때까지 loading 로직을 처리하는 것

  if (user === undefined) {
    return <h1>Undefined</h1>;
  }
  if (!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to='/' replace />;
  }

  return children;
}
