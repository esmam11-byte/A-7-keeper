import { createBrowserRouter } from "react-router";
import Mainlayout from "../layouts/Mainlayout";
import Homepage from "../pages/Homepage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetials from "../pages/friends/FriendDetials";
import Notfound from "../components/Notfound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: '/timeline',
                element: <Timeline />
            },
            {
                path: '/stats',
                element: <Stats />
            },
            {
                path: `/frienddetials/:id`,
                loader: () => fetch(`/data.json`),
                element: <FriendDetials />
            },
            {
                path: '*', 
                element: <Notfound />
            }
        ],
        errorElement: <Notfound />
    }
])