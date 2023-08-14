import {BiHomeAlt2,BiListUl,BiUser,BiLogOut} from 'react-icons/bi'
import complete from './assets/course/courseComplete.svg'
import certificate from './assets/course/certificaste.svg'
import progress from './assets/course/progress.svg'
import total from './assets/course/totalCourse.svg'

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
        name:'Account',
        url:'/dashboard/account',
        Icon:<BiUser size={20}/>
    },
    {
        name:'Logout',
        url:'/dashboard/logout',
        Icon:<BiLogOut size={20}/>
    },
]

export const courseInfos=[
    {
        info:'Course completed',
        image:complete,
        count:22,
        progress:70,
        tag:'complete',
        color:'#4C6FFF'
    },
    {
        info:'Certificate earned',
        image:certificate,
        count:20,
        progress:20,
        tag:'certificate',
        color:'#FF7373'
    },
    {
        info:'Course in progress',
        image:progress,
        count:25,
        progress:30,
        tag:'progress',
        color:'#FBBC28'
    },
    {
        info:'Total Course',
        image:total,
        count:86,
        tag:'total',
        color:''
    },
]

//charts info
export const chartInfo={
    "status": true,
    "progress": [
      {
        "date": "2023-06-01",
        "watchHours": 44,
        "dayName": "Thursday"
      },
      {
        "date": "2023-06-02",
        "watchHours": 37,
        "dayName": "Friday"
      },
      {
        "date": "2023-06-03",
        "watchHours": 50,
        "dayName": "Saturday"
      },
      {
        "date": "2023-06-04",
        "watchHours": 50,
        "dayName": "Sunday"
      },
      {
        "date": "2023-06-05",
        "watchHours": 49,
        "dayName": "Monday"
      },
      {
        "date": "2023-06-06",
        "watchHours": 29,
        "dayName": "Tuesday"
      },
      {
        "date": "2023-06-07",
        "watchHours": 28,
        "dayName": "Wednesday"
      },
      {
        "date": "2023-06-08",
        "watchHours": 21,
        "dayName": "Thursday"
      },
      {
        "date": "2023-06-09",
        "watchHours": 44,
        "dayName": "Friday"
      },
      {
        "date": "2023-06-10",
        "watchHours": 46,
        "dayName": "Saturday"
      },
      {
        "date": "2023-06-11",
        "watchHours": 43,
        "dayName": "Sunday"
      },
      {
        "date": "2023-06-12",
        "watchHours": 43,
        "dayName": "Monday"
      },
      {
        "date": "2023-06-13",
        "watchHours": 36,
        "dayName": "Tuesday"
      },
      {
        "date": "2023-06-14",
        "watchHours": 37,
        "dayName": "Wednesday"
      },
      {
        "date": "2023-06-15",
        "watchHours": 39,
        "dayName": "Thursday"
      },
      {
        "date": "2023-06-16",
        "watchHours": 41,
        "dayName": "Friday"
      },
      {
        "date": "2023-06-17",
        "watchHours": 47,
        "dayName": "Saturday"
      },
      {
        "date": "2023-06-18",
        "watchHours": 29,
        "dayName": "Sunday"
      },
      {
        "date": "2023-06-19",
        "watchHours": 44,
        "dayName": "Monday"
      },
      {
        "date": "2023-06-20",
        "watchHours": 48,
        "dayName": "Tuesday"
      },
      {
        "date": "2023-06-21",
        "watchHours": 43,
        "dayName": "Wednesday"
      },
      {
        "date": "2023-06-22",
        "watchHours": 20,
        "dayName": "Thursday"
      },
      {
        "date": "2023-06-23",
        "watchHours": 41,
        "dayName": "Friday"
      },
      {
        "date": "2023-06-24",
        "watchHours": 21,
        "dayName": "Saturday"
      },
      {
        "date": "2023-06-25",
        "watchHours": 34,
        "dayName": "Sunday"
      },
      {
        "date": "2023-06-26",
        "watchHours": 26,
        "dayName": "Monday"
      },
      {
        "date": "2023-06-27",
        "watchHours": 25,
        "dayName": "Tuesday"
      },
      {
        "date": "2023-06-28",
        "watchHours": 47,
        "dayName": "Wednesday"
      },
      {
        "date": "2023-06-29",
        "watchHours": 31,
        "dayName": "Thursday"
      },
      {
        "date": "2023-06-30",
        "watchHours": 22,
        "dayName": "Friday"
      }
    ],
    "message": "Statics fetched successfully!"
  }