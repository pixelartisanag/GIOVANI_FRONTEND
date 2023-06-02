import {Routes, Route, Navigate} from "react-router-dom";
import Dashboard from 'admin/pages/Dashboard';
import AdminPurchases from 'admin/pages/purchases/List';
import AdminUsers from 'admin/pages/users/List';
import AdminUsersCreate from 'admin/pages/users/Create';
import AdminUsersEdit from 'admin/pages/users/Edit';
import AdminGalleries from 'admin/pages/galleries/List';
import AdminGalleriesCreate from 'admin/pages/galleries/Create';
import AdminGalleriesEdit from 'admin/pages/galleries/Edit';
import Login from 'front/pages/Login';
import Register from 'front/pages/Register';
import Home from 'front/pages/Home';
import ForgotPassword from 'front/pages/ForgotPassword';
import PasswordReset from 'front/pages/PasswordReset';
import NotFoundPage from 'front/pages/404';
import SingleArticle from 'front/pages/SingleArticle';
import StoriesPage from 'front/pages/Stories';
import ContactPage from 'front/pages/Contact';
import GalleriesPage from 'front/pages/Galleries';
import VideosPage from 'front/pages/Videos';
import PlansPage from 'front/pages/Plans';
import ProfilePage from 'front/pages/Profile';
import {useAuth} from 'hooks/auth';
import LiveChat from 'front/pages/LiveChat';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import 'front/assets/css/_globals.scss';

function App() {
  const {user} = useAuth();

  const withProtectedRoute = (Component, options = {}) => {
    const {roles, guest, onlyGuest} = options;

    if (onlyGuest && user) {
      return <Navigate to="/" replace/>;
    }

    if (!user && !onlyGuest) {
      return <Navigate to="/login" replace/>;
    }

    if (
      roles &&
      user &&
      user.data.roles &&
      !roles.some((role) =>
        user.data.roles.map((userRole) => userRole.name).includes(role)
      )
    ) {
      return <Navigate to="/" replace/>;
    }

    return <Component/>;
  };

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={withProtectedRoute(Home)}/>
        <Route path="/login" element={withProtectedRoute(Login, {onlyGuest: true})}/>
        <Route path="/register" element={withProtectedRoute(Register, {onlyGuest: true})}/>
        <Route path="/contact" element={withProtectedRoute(ContactPage, {onlyGuest: true})}/>
        <Route path="/forgot-password" element={withProtectedRoute(ForgotPassword, {guest: true})}/>
        <Route path="/password-reset/:token" element={withProtectedRoute(PasswordReset, {guest: true})}/>
        <Route path="/galleries" element={withProtectedRoute(GalleriesPage, {guest: false})}/>
        <Route path="/stories" element={<StoriesPage/>}/>
        <Route path="/videos" element={withProtectedRoute(VideosPage, {guest: false})}/>
        <Route path="/videos/:uri" element={<SingleArticle/>}/>
        <Route path="/plans" element={<PlansPage/>}/>
        <Route path="/live" element={<LiveChat/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route
          path="/admin/dashboard"
          element={withProtectedRoute(Dashboard, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/purchases"
          element={withProtectedRoute(AdminPurchases, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/users"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/users/create"
          element={withProtectedRoute(AdminUsersCreate, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/users/:id/edit"
          element={withProtectedRoute(AdminUsersEdit, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/stories"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/stories/create"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/stories/:id/edit"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/videos"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/videos/create"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/videos/:id/edit"
          element={withProtectedRoute(AdminUsers, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/galleries"
          element={withProtectedRoute(AdminGalleries, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/galleries/create"
          element={withProtectedRoute(AdminGalleriesCreate, {roles: ["Admin", "Moderator"]})}
        />
        <Route
          path="/admin/galleries/:id/edit"
          element={withProtectedRoute(AdminGalleriesEdit, {roles: ["Admin", "Moderator"]})}
        />
        <Route path="*" element={<NotFoundPage/>}
        />
      </Routes>
    </div>
  );
}

export default App;
