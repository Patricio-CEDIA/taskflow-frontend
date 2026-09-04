import Dashboard from './pages/Dashboard';

// Paso 5: borra el bloque de App() de abajo y descomenta el bloque comentado
// completo (imports de react-router-dom/Login/Register incluidos), que
// reemplaza el tablero fijo por las 3 rutas de TaskFlow.
function App() {
  return <Dashboard />;
}

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
//
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
