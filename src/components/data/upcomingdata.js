import img1 from "../../assets/Services/event1.jpg"
import img2 from "../../assets/Services/event2.jpg"
 
 export const events = [
        {   id: 1,
            title: 'THREE DAYS MEDITATION',
            speaker: 'BY VIVEKADITYA JI',
            date: 'Nov 22, 2020 - Nov 24, 2020',
            imgSrc:img1,
            buttons: [
                { variant: 'danger', label: 'View Details' },
                { variant: 'primary', label: 'Paid' },
                { variant: 'info', label: 'Online & Offline' }
            ]
        },
        {     id: 2,
            title: 'HOW TO MANAGE STRESS',
            speaker: 'GURU JI',
            date: 'Dec 16, 2020 - Dec 18, 2020',
            imgSrc:img2,
            buttons: [
                { variant: 'danger', label: 'View Details' },
                { variant: 'primary', label: 'Paid' },
                { variant: 'info', label: 'Online' }
            ]
        }
    ];