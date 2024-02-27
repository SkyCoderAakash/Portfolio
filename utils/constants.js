import bootstrapImg from '../public/images/bootstrap.jpg'
import cssImg from '../public/images/css.png'
import expressjsImg from '../public/images/expressjs.png'
import firebaseImg from '../public/images/firebase.png'
import githubImg from '../public/images/github.png'
import gitHubBtn from '../public/images/gitHubBtn.png'
import htmlImg from '../public/images/html.png'
import javascript from '../public/images/javascript.png'
import linkedinImg from '../public/images/linkedin.png'
import mongoDBImg from '../public/images/mongodb.png'
import netlifyImg from '../public/images/netlify.png'
import nodejsImg from '../public/images/nodejs.png'
import reactImg from '../public/images/react.png'
import reduxImg from '../public/images/redux.png'
import tailwindImg from '../public/images/tailwind.png'
import vscodeImg from '../public/images/vscode.png'

const skills = [
    {
    title:"Frontend",
    skill : [
        {
            name:"HTML",
            img:htmlImg
        },
        {
            name:"CSS",
            img:cssImg
        },
        {
            name:"Javascript",
            img:javascript
        },
        {
            name:"Bootstrap",
            img:bootstrapImg
        },
        {
            name:"Tailwind css",
            img:tailwindImg
        },
        {
            name:"React",
            img:reactImg
        },
        {
            name:"Redux",
            img:reduxImg
        }
    ]
    },
    {
        title:"Backend",
        skill : [
            {
                name:"Node Js",
                img:nodejsImg
            },
            {
                name:"Express Js",
                img:expressjsImg
            },
            {
                name:"MongoDB",
                img:mongoDBImg
            },
            {
                name:"Firebase",
                img:firebaseImg
            },
        ]
    },
    {
        title:"Other",
        skill : [
            {
                name:"GitHub",
                img:githubImg
            },
            // {
            //     name:"Docker",
            //     img:dockerImg
            // },
            {
                name:"Netlify",
                img:netlifyImg
            },
            {
                name:"vs Code",
                img:vscodeImg
            },
        ]
    },
]

const detail = {
        personalDetails : {
            name : 'Aakash Prajapati',
            contact : 9310574997,
            email : 'aakashprajapati1001@gmail.com',
            gitHubLink : 'https://github.com/SkyCoderAakash',
            linkedInLink : 'linkedin.com/in/aakash-prajapati-b41648296',
            about : "Hey there! I'm a tech enthusiast and creative problem solver. From writing code to crafting designs, I bring ideas to life. With a passion for making things awesome, I'm all about creating cool stuff that works. Let's team up and turn dreams into reality.",
        },
        education : [
            {
                schoolName : 'Techstack Academy',
                class : 'Full Stack Web Development (FSWD)',
                batch : 'Pursuing',
                grade : '',
                info : 'Currentlt, I pursued my studies at Techstack Academy, specializing in Full Stack Web Development (FSWD).',
            },
            {
                schoolName : 'G.B. Pant Institute of Technology',
                class : 'Automobile Engineering',
                batch : 'Aug 2018 - Sep 2021',
                grade : '7.7 CGPA',
                info : 'I completed my studies at G.B. Pant Institute of Technology, specializing in Automobile Engineering. I successfully completed my academic journey from August 2018 to September 2021, earning a commendable CGPA of 7.7.'
            },
            {
                schoolName : 'D.P Modern Public School',
                class : '10th',
                batch : 'Apr 2018 - Apr 2021',
                grade : '7.3 CGPA',
                info : 'I completed my class 10th education at D.P Modern Public School with Hindi, English ,Math, Science, Social Science.'
            },
        ],
        projects : [
            {
                id : 1,
                img : '',
                link : "",
                langauages : ['HTML','CSS','Node JS','Express JS','MongoDB'],
                name : 'FarmToTable',
                info : 'A fully responsive website where user can Register with unique email and Login. User can add Item to his cart and increase, decrease, delete item from cart. It also has admin panel only access by admin where admin can add, delete, edit and get all product.',
            },
            {
                id : 2,
                img : '',
                link : "http://youtube-clone-olive-rho.vercel.app",
                langauages : ['HTML','Tailwind','JavaScript','React','Redux'],
                name : 'Youtube Clone',
                info : 'A fully responsive Youtube clone where user can search any thing. I use debouncing concept in searching which enhance app performance. All data coming from api.',
            },
            {
                id : 3,
                img : '',
                link : "https://myntflix.netlify.app",
                langauages :['HTML','Tailwind','JavaScript','React','Redux'],
                name : 'NetFlix Clone',
                info : 'A fully responsive Netflix clone where user can watch movies. All data coming from api. It include Register/Login by firebase.',
            },
            
        ]
    }

export {skills,detail,linkedinImg,gitHubBtn};