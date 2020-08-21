import Home from '../components/Home'
import Interests from '../components/Interests'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
        exact: true
    },
    {
        name: "Things I Like",
        path: "/interests",
        component: Interests,
        exact: false
    },
    {
        name: "Projects",
        path: "/projects",
        component: Projects,
        exact: false
    },
    {
        name: "Get in touch",
        path: "/contact",
        component: Contact,
        exact: false
    }
]

export default routes
