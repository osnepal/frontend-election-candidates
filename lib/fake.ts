export const candidates = [
  {
    id: 0,
    name: "Balen Shah",
    party: "Independent",
    avatar: "/people/balen.jpg",
    votes: 45090,
    verified: true,
  },
  {
    id: 12,
    name: "Sagar Dhakal",
    party: "Independent",
    avatar: "/people/sagar.jpg",
    votes: 1100,
    verified: true,
  },
  {
    id: 1,
    name: "Harka Raj Rai",
    party: "Independent",
    avatar: "/people/harka.jpg",
    votes: 1100,
    verified: true,
  },
  {
    id: 2,
    name: "Sumana Shrestha",
    party: "Rastriya Swatantra Party",
    avatar: "/people/sumana.jpg",
    votes: 7980,
    verified: false,
  },
  {
    id: 3,
    name: "Gopal Hamal",
    party: "Independent",
    avatar: "/people/gopal.jpg",
    votes: 150,
    verified: true,
  },
  {
    id: 4,
    name: "KP Sharma Oli",
    party: "Communist Party of Nepal (Unified Marxist-Leninist) ",
    avatar: "/people/kpoli.jpg",
    votes: 0,
    verified: true,
  },
  {
    id: 6,
    name: "Rabi Lamichhane",
    party: "Rastriya Swatantra Party",
    avatar: "/people/rabi.jpg",
    votes: 4400,
    verified: false,
  },
];

export const countries = [
  { id: "Nepal", name: "Nepal" },
  { id: "India", name: "India" },
].map((p) => ({ value: p.id, label: p.name }));

export const provinces = [
  { id: "1", name: "Koshi Province" },
  { id: "2", name: "Madhesh Province" },
  { id: "3", name: "Bagmati Province" },
  { id: "4", name: "Gandaki Province" },
  { id: "5", name: "Lumbini Province" },
  { id: "6", name: "Karnali Province" },
].map((p) => ({ value: p.id, label: p.name }));

export const districts = [
  { id: "ktm", name: "Kathmandu" },
  { id: "chitwan", name: "Chitwan" },
  { id: "lalitpur", name: "Lalitpur" },
].map((p) => ({ value: p.id, label: p.name }));

export const municipalities = [
  { id: "kathmandu", name: "Kathmandu Metropolitan" },
  { id: "bharatpur", name: "Bharatpur Metropolitan" },
  { id: "lalitpur", name: "Lalitpur Metropolitan" },
].map((p) => ({ value: p.id, label: p.name }));

export const wards = Array.from({ length: 32 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Ward ${i + 1}`,
})).map((p) => ({ value: p.id, label: p.name }));
