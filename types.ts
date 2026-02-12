export enum PackageType {
  DOMESTIC = 'Domestic',
  INTERNATIONAL = 'International',
  FIXED_DEPARTURE = 'Fixed Departure',
  CORPORATE = 'Corporate'
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  title: string;
  location: string;
  type: PackageType;
  duration: string; // e.g., "5 Days / 4 Nights"
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  nextDeparture?: string;
  seatsLeft?: number;
  description: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  image: string;
  rating: number;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  packageCount: number;
}