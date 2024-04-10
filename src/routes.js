import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SimpleLayout from './layouts/simple';
//
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import CreateGamePage from './pages/CreateGamePage';
import JoinGamePage from './pages/JoinGamePage';
import StartGamePage from './pages/StartGamePage';
import PlayerGame from './pages/PlayerGame';
import HostLobbyPage from './pages/HostLobbyPage';
import AssigningRolesPage from './pages/AssigningRolesPage';
import ChiefVotePage from './pages/ChiefVotePage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <MainPage /> },
        { path: 'create-game', element: <CreateGamePage /> },
        { path: 'host-lobby/:gameId', element: <HostLobbyPage /> },
        { path: 'assign-roles/:gameId', element: <AssigningRolesPage /> },
        { path: 'chief-vote/:gameId', element: <ChiefVotePage /> },
        { path: 'host', element: <StartGamePage /> },
        { path: 'join-game', element: <JoinGamePage /> },
        { path: 'game', element: <PlayerGame/> },
        
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
