import Home from '../components/Home'
import Thoughts from '../components/Thoughts'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        exact: true,
        used: true
    },
    {
        name: "Thoughts",
        path: "/thoughts",
        component: Thoughts,
        exact: false,
        used: true
    },
    {
        name: "Projects",
        path: "/projects",
        component: Projects,
        exact: false,
        used: true
    },
    {
        name: "Get in touch",
        path: "/contact",
        component: Contact,
        exact: false,
        used: false
    }
]

export default routes
