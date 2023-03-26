import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import Login from 'pages/login';
import Register from 'pages/register';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
import VideoPage from 'pages/videoPage';
import StoriesList from 'pages/stories/StoriesList';
import UserPlansPage from 'pages/UserPlansPage';
import {useAuth} from 'hooks/auth';
import 'theme/assets/css/plugins.css';
import 'theme/assets/fonts/fonts.css';
import 'theme/assets/css/main.css';

function App() {
    const {user} = useAuth();

    const withProtectedRoute = (Component, roles) => {
        if (!user) {
            return <Navigate to="/login" replace />;
        }

        if (
            roles &&
            user.data.roles &&
            !roles.some((role) => user.data.roles.map((userRole) => userRole.name).includes(role))
        ) {
            return <Navigate to="/dashboard" replace />;
        }
        console.log(user);
        return <Component />;
    };

    return (
        <div className="wrapper">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="/password-reset/:token" element={<PasswordReset/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/stories" element={<StoriesList/>}/>
                <Route path="/videos/:uri" element={<VideoPage />} />
                <Route path="/planss" element={<UserPlansPage/>}/>
                <Route
                    path="/plans"
                    element={withProtectedRoute(UserPlansPage, ['User', 'Moderator'])}
                />
                <Route path="*" element={<NotFoundPage/>}
                />
            </Routes>
        </div>
    );
}

export default App;
