import css1 from '../img/portImages/coding.jpg';
import css2 from '../img/portImages/led.jpg';
import react1 from '../img/portImages/puzzle.jpg';
import img2 from '../img/portImages/techblog.png';
import img3 from '../img/portImages/bga.PNG';
import img4 from '../img/portImages/pwa.png';

const portfolios = [
    {
        id: 1,
        category: 'CSS',
        image: css1,
        link1: 'https://github.com/tommylu780/bandTSB',
        link2: 'https://tommylu780.github.io/bandTSB/',
        title: 'Responsive Resume',
        text: 'Created with only HTML and CSS.'
    },
    {
        id: 2,
        category: 'Javascript',
        image: img3,
        link1: 'https://github.com/tommylu780/Budget',
        link2: 'https://budget-app-project-2.herokuapp.com/',
        title: 'Budget Web App',
        text: 'Manage money app created with team'
    },
    {
        id: 3,
        category: 'Javascript',
        image: react1,
        link1: ' https://tommylu780.github.io/code-quiz/',
        link2: 'https://tommylu780.github.io/code-quiz/',
        title: 'Code Quiz',
        text: 'Fun quiz to answer'
    },
    {
        id: 4,
        category: 'Node js',
        image: img4,
        link1: 'https://github.com/tommylu780/budget-tracker-PWA',
        link2: 'https://budget-tracker-pwa1212.herokuapp.com/',
        title: 'Budget Tracker PWA App',
        text: 'Budget tracker app with chart'
    },
    {
        id: 5,
        category: 'Node js',
        image: img2,
        link1: 'https://github.com/tommylu780/techBlog',
        link2: 'https://techblog3040.herokuapp.com/',
        title: 'Tech Blog',
        text: ' Publish articles, blog posts'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://github.com/tommylu780/React-Porfolio',
        link2: 'https://www.google.com',
        title: 'React portfolio',
        text: 'Created porfolio website using React JS'
    },
    {
        id: 7,
        category: 'React JS',
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Local Restaurant',
        text: 'Created using React JS'
    }
]

export default portfolios;