import { Package, PackageType, Testimonial, Destination } from './types';

export const PACKAGES: Package[] = [
  {
    id: 'pkg-001',
    title: 'Manali Lease-of-Life Expedition',
    location: 'Himachal Pradesh, India',
    type: PackageType.FIXED_DEPARTURE,
    duration: '6 Days / 5 Nights',
    price: 12999,
    originalPrice: 18500,
    image: 'https://picsum.photos/800/600?random=1',
    rating: 4.8,
    reviews: 124,
    nextDeparture: '2023-11-15',
    seatsLeft: 4,
    description: 'Experience the breathtaking valleys of Manali, Solang, and Kasol. Perfect for youth seeking adventure and serenity combined.',
    itinerary: [
      { day: 1, title: 'Arrival in Manali', description: 'Reach Manali, check-in to your riverside camp, and enjoy a bonfire night.' },
      { day: 2, title: 'Solang Valley Adventure', description: 'Paragliding, skiing, and ATV rides at Solang Valley.' },
      { day: 3, title: 'Kasol Transfer', description: 'Scenic drive to Kasol. Evening explore the local Israeli cafes.' },
      { day: 4, title: 'Kheerganga Trek', description: 'Begin the trek to Kheerganga. Camp under the stars.' },
      { day: 5, title: 'Return to Kasol', description: 'Descend back and visit Manikaran Sahib Gurudwara.' },
      { day: 6, title: 'Departure', description: 'Overnight Volvo back to Delhi.' }
    ],
    inclusions: ['Volvo Transfers', '3 Star Hotels', 'Breakfast & Dinner', 'Trek Guide', 'Bonfire'],
    exclusions: ['Lunch', 'Personal Expenses', 'Adventure Activities Costs'],
    images: ['https://picsum.photos/800/600?random=1', 'https://picsum.photos/800/600?random=11', 'https://picsum.photos/800/600?random=12']
  },
  {
    id: 'pkg-002',
    title: 'Bali Tropical Escape',
    location: 'Bali, Indonesia',
    type: PackageType.INTERNATIONAL,
    duration: '7 Days / 6 Nights',
    price: 45000,
    originalPrice: 55000,
    image: 'https://picsum.photos/800/600?random=2',
    rating: 4.9,
    reviews: 89,
    description: 'Swing over rice terraces in Ubud and party at Seminyak beach clubs. The ultimate island vibe.',
    itinerary: [
      { day: 1, title: 'Arrival Denpasar', description: 'Airport pickup and transfer to Kuta/Seminyak hotel.' },
      { day: 2, title: 'Nusa Penida Tour', description: 'Full day tour to Crystal Bay, Broken Beach, and Kelingking Beach.' },
      { day: 3, title: 'Ubud Cultural Day', description: 'Visit Monkey Forest, Rice Terraces, and the famous Bali Swing.' },
      { day: 4, title: 'Water Sports', description: 'Banana boat, Jet ski, and Parasailing at Benoa Harbour.' },
      { day: 5, title: 'Leisure Day', description: 'Explore local markets or relax at a beach club.' },
      { day: 6, title: 'Sunset Dinner', description: 'Jimbaran Bay seafood dinner with sunset view.' },
      { day: 7, title: 'Departure', description: 'Transfer to airport.' }
    ],
    inclusions: ['Airport Transfers', '4 Star Hotel', 'Daily Breakfast', 'Nusa Penida Fast Boat', 'English Speaking Guide'],
    exclusions: ['Flight Tickets', 'Visa on Arrival', 'Lunch & Dinner'],
    images: ['https://picsum.photos/800/600?random=2', 'https://picsum.photos/800/600?random=21', 'https://picsum.photos/800/600?random=22']
  },
  {
    id: 'pkg-003',
    title: 'Spiti Valley Winter Expedition',
    location: 'Spiti, Himachal',
    type: PackageType.FIXED_DEPARTURE,
    duration: '8 Days / 7 Nights',
    price: 18500,
    image: 'https://picsum.photos/800/600?random=3',
    rating: 4.7,
    reviews: 45,
    nextDeparture: '2023-12-10',
    seatsLeft: 8,
    description: 'A rugged journey through the cold desert mountain valley. Witness the Key Monastery in snow.',
    itinerary: [
        { day: 1, title: 'Shimla to Kalpa', description: 'Drive through the apple orchards of Kinnaur.' },
        { day: 2, title: 'Kalpa to Kaza', description: 'Enter Spiti Valley via Nako and Tabo.' },
        { day: 3, title: 'Kaza Sightseeing', description: 'Key Monastery, Kibber, and Chicham Bridge.' },
        { day: 4, title: 'Langza & Hikkim', description: 'Visit the fossil village and the highest post office in the world.' },
        { day: 5, title: 'Kaza to Chandratal', description: 'Camping near the moon lake (weather permitting).' },
        { day: 6, title: 'Return Journey', description: 'Start return journey towards Manali.' },
        { day: 7, title: 'Manali Stay', description: 'Rest day in Manali.' },
        { day: 8, title: 'Departure', description: 'Bus back to Delhi.' }
    ],
    inclusions: ['Tempo Traveller', 'Homestays/Hotels', 'Breakfast & Dinner', 'Driver Charges', 'Oxygen Cylinder'],
    exclusions: ['Lunch', 'Entry Fees', 'Heater Charges'],
    images: ['https://picsum.photos/800/600?random=3', 'https://picsum.photos/800/600?random=31']
  },
  {
    id: 'pkg-004',
    title: 'Meghalaya: Abode of Clouds',
    location: 'Meghalaya, North East',
    type: PackageType.DOMESTIC,
    duration: '6 Days / 5 Nights',
    price: 24000,
    image: 'https://picsum.photos/800/600?random=4',
    rating: 5.0,
    reviews: 32,
    description: 'Walk on living root bridges and witness the clearest waters in Dawki.',
    itinerary: [],
    inclusions: [],
    exclusions: [],
    images: ['https://picsum.photos/800/600?random=4']
  }
];

export const DESTINATIONS: Destination[] = [
  { id: 'dest-1', name: 'Goa', image: 'https://picsum.photos/400/500?random=5', packageCount: 12 },
  { id: 'dest-2', name: 'Himachal', image: 'https://picsum.photos/400/500?random=6', packageCount: 25 },
  { id: 'dest-3', name: 'Kashmir', image: 'https://picsum.photos/400/500?random=7', packageCount: 8 },
  { id: 'dest-4', name: 'Thailand', image: 'https://picsum.photos/400/500?random=8', packageCount: 15 },
  { id: 'dest-5', name: 'Vietnam', image: 'https://picsum.photos/400/500?random=9', packageCount: 6 },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Mehta',
    location: 'Mumbai',
    rating: 5,
    comment: 'Trivishture handled our Spiti trip perfectly. The driver was skilled and the homestays were cozy. Highly recommended for group trips!',
    image: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    location: 'Delhi',
    rating: 4,
    comment: 'Great experience in Bali. The itinerary was well paced. Could have improved the flight timings, but ground team was excellent.',
    image: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 't3',
    name: 'Amit Verma',
    location: 'Bangalore',
    rating: 5,
    comment: 'Fixed departure to Kasol was a vibe! Met amazing people. The bonfire night was the highlight.',
    image: 'https://picsum.photos/100/100?random=12'
  }
];
