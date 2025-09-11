export type Caregiver = {
  id: string;
  name: string;
  location: string;
  experience: number;
  specialties: string[];
  languages: string[];
  price: number;
  dayPrice: number;
  rating: number;
  reviews: number;
  bookings: number;
  status: string;
  image: string;
  tags?: string[];
};

export const CAREGIVERS: Caregiver[] = [
  {
    id: "c1",
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    experience: 8,
    specialties: ["medical", "daily", "specialized"],
    languages: ["Hindi", "English", "Marathi"],
    price: 250,
    dayPrice: 2000,
    rating: 4.9,
    reviews: 127,
    bookings: 340,
    status: "Available",
    image: "/priya.jpg",
    tags: ["8 yrs exp", "medical", "daily"],
  },
  {
    id: "c2",
    name: "Rajesh Kumar",
    location: "Delhi NCR",
    experience: 5,
    specialties: ["companionship", "daily"],
    languages: ["English", "Punjabi"],
    price: 180,
    dayPrice: 1440,
    rating: 4.8,
    reviews: 88,
    bookings: 215,
    status: "Available",
    image: "/Rajesh.jpg",
    tags: ["5 yrs exp", "companionship", "daily"],
  },
  {
    id: "c3",
    name: "Sunita Verma",
    location: "Bangalore",
    experience: 6,
    specialties: ["companionship", "medical"],
    languages: ["English", "Kannada"],
    price: 210,
    dayPrice: 1600,
    rating: 4.7,
    reviews: 64,
    bookings: 180,
    status: "Available",
    image: "/meera.jpg",
    tags: ["6 yrs exp", "medical", "companionship"],
  },
];

export default CAREGIVERS;
