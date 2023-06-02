import Dashboard from 'front/pages/Dashboard';

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/",
    name: "Back to website",
    icon: "nc-icon nc-alien-33",
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    icon: "nc-icon nc-chart-pie-35",
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    layout: "/admin"
  },
  {
    path: "/purchases",
    name: "Purchases",
    icon: "nc-icon nc-notes",
    layout: "/admin"
  },
  {
    path: "/galleries",
    name: "Galleries",
    icon: "nc-icon nc-paper-2",
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Dashboard,
    layout: "/admin"
  }
];

export default dashboardRoutes;
