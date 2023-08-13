import {BiHomeAlt2,BiListUl,BiUser,BiLogOut} from 'react-icons/bi'

export const institutes=[
    "University of Dhaka",
    "University of Rajshahi",
    "Bangladesh Agricultural University",
    "Jahangirnagar University",
    "University of Chittagong",
    "Shahjalal University of Science & Technology",
    "Bangladesh University of Engineering & Technology"
]
export const levels=[
    "Secondary School Certificate (SSC )",
    "Higher Secondary School Certificate (HSC)",
    "Diploma",
    "Bachelor of Science (BSC)",
    "Master of Arts(MA)",
    "Bachelor of Arts(BA)"
]
export const formParts=[
    {
        id:1,
        name:'Information'
    },
    {
        id:2,
        name:'Security'
    },
    {
        id:3,
        name:'Confirmation'
    },
]

export const navItems=[
    {
        name:'Dashboard',
        url:'/dashboard',
        Icon:<BiHomeAlt2 size={20}/>
    },
    {
        name:'Courses',
        url:'/dashboard/courses',
        Icon:<BiListUl size={20}/>
    },
    {
        name:'User',
        url:'/dashboard/user',
        Icon:<BiUser size={20}/>
    },
    {
        name:'Logout',
        url:'/dashboard/logout',
        Icon:<BiLogOut size={20}/>
    },
]