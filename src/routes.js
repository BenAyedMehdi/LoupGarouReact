import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard/DashboardLayout';
import SimpleLayout from './layouts/simple';
//
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import MainPage from './pages/MainPage';
import CreateGamePage from './pages/host/CreateGamePage';
import JoinGamePage from './pages/player/JoinGamePage';
import StartGamePage from './pages/StartGamePage';
import PlayerGame from './pages/PlayerGame';
import HostLobbyPage from './pages/host/HostLobbyPage';
import AssigningRolesPage from './pages/host/AssigningRolesPage';
import ChiefVotePage from './pages/host/ChiefVotePage';
import PlayerLobbyPage from './pages/player/PlayerLobbyPage';
import SeeRolePage from './pages/player/SeeRolePage';

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
        { path: ':gameId/lobby/:playerId', element: <PlayerLobbyPage /> },
        { path: ':gameId/role/:playerId', element: <SeeRolePage /> },
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
