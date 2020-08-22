import Home from '../components/Home'
import Interests from '../components/Interests'
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
        name: "Things I Like",
        path: "/interests",
        component: Interests,
        exact: false,
        used: true
    },
    {
        name: "Projects",
        path: "/projects",
        component: Projects,
        exact: false,
        used: false
    },
    {
        name: "Get in touch",
        path: "/contact",
        component: Contact,
        exact: false,
        used: true
    }
]

export default routes
