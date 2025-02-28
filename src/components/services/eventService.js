// Event service for handling event data operations

// Mock data for events
const events = [
{
    id: 1,
    title: "Yoga Retreat in the Himalayas",
    date: "2023-12-15",
    time: "07:00 AM - 5:00 PM",
    price: 1200,
    location: "Rishikesh, India",
    teacher: "Guru Patel",
    instructor: "Guru Patel",
    duration: "2 days",
    image: "/images/events/event1.jpg",
    description: "Experience the tranquility of yoga in the beautiful Himalayan mountains. This retreat includes meditation sessions, yoga classes, and spiritual discussions.",
    slots: 20,
    availableSlots: 8,
    availableSeats: 8,
    timezone: "IST",
    buttons: [
        { type: "danger", label: "Featured" },
        { type: "warning", label: "Limited" }
    ]
},
{
    id: 2,
    title: "Mindfulness Workshop",
    date: "2023-11-25",
    time: "09:00 AM - 12:00 PM",
    price: 500,
    location: "Virtual Event",
    teacher: "Maya Sharma",
    instructor: "Maya Sharma",
    duration: "3 hours",
    image: "/images/events/event2.jpg",
    description: "Join us for a transformative mindfulness workshop designed to help you bring awareness into your daily life and reduce stress.",
    slots: 50,
    availableSlots: 35,
    availableSeats: 35,
    timezone: "IST",
    buttons: [
        { type: "danger", label: "Featured" },
        { type: "success", label: "Online" }
    ]
},
{
    id: 3,
    title: "Ayurveda & Yoga Conference",
    date: "2024-01-10",
    time: "10:00 AM - 6:00 PM",
    price: 800,
    location: "Delhi Convention Center",
    teacher: "Multiple Instructors",
    instructor: "Multiple Instructors",
    duration: "1 day",
    image: "/images/events/event3.jpg",
    description: "A comprehensive conference exploring the connection between Ayurveda and Yoga for holistic wellness.",
    slots: 100,
    availableSlots: 72,
    availableSeats: 72,
    timezone: "IST",
    buttons: [
        { type: "danger", label: "Featured" },
        { type: "primary", label: "Conference" }
    ]
}
];

/**
* Get all events
* @returns {Array} Array of event objects
*/
export const getAllEvents = () => {
return events;
};

/**
* Get a single event by ID
* @param {number} id - The event ID
* @returns {Object|null} Event object or null if not found
*/
export const getEventById = (id) => {
const numId = parseInt(id, 10);
return events.find(event => event.id === numId) || null;
};

/**
* Get upcoming events
* @param {number} limit - Number of events to return
* @returns {Array} Array of upcoming event objects
*/
export const getUpcomingEvents = (limit = 3) => {
// In a real application, you would filter based on dates
// For now, just return the first few events
return events.slice(0, limit);
};

/**
* Check if an event has available slots
* @param {number} id - The event ID
* @returns {boolean} True if slots are available
*/
export const hasAvailableSlots = (id) => {
const event = getEventById(id);
return event ? event.availableSlots > 0 : false;
};

export default {
getAllEvents,
getEventById,
getUpcomingEvents,
hasAvailableSlots
};

