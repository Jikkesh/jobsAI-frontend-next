import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isSpecified = (val: any) => {
  if (val === null || val === undefined) return false;
  if (typeof val === 'string') {
    const s = val.trim().toLowerCase();
    return s !== '' && s !== 'not specified';
  }
  return true;
};


// Helper function to get postal code by city (fallback mapping)
export const getPostalCodeByCity = (city: string, state: string): string => {
  if (!city) return "000000";
  
  // Common Indian city postal codes (first 3 digits)
  const cityPostalCodes: { [key: string]: string } = {
    // Major cities
    'mumbai': '400001',
    'delhi': '110001',
    'bangalore': '560001',
    'bengaluru': '560001',
    'hyderabad': '500001',
    'chennai': '600001',
    'kolkata': '700001',
    'pune': '411001',
    'ahmedabad': '380001',
    'jaipur': '302001',
    'lucknow': '226001',
    'kanpur': '208001',
    'nagpur': '440001',
    'indore': '452001',
    'thane': '400601',
    'bhopal': '462001',
    'visakhapatnam': '530001',
    'pimpri': '411017',
    'patna': '800001',
    'vadodara': '390001',
    'ghaziabad': '201001',
    'ludhiana': '141001',
    'coimbatore': '641001',
    'agra': '282001',
    'madurai': '625001',
    'nashik': '422001',
    'faridabad': '121001',
    'meerut': '250001',
    'rajkot': '360001',
    'kalyan': '421301',
    'vasai': '401201',
    'varanasi': '221001',
    'srinagar': '190001',
    'aurangabad': '431001',
    'dhanbad': '826001',
    'amritsar': '143001',
    'navi mumbai': '400614',
    'allahabad': '211001',
    'ranchi': '834001',
    'howrah': '711101',
    'jabalpur': '482001',
    'gwalior': '474001',
    'vijayawada': '520001',
    'jodhpur': '342001',
    'raipur': '492001',
    'kota': '324001',
    'guwahati': '781001',
    'chandigarh': '160001',
    'solapur': '413001',
    'hubli': '580001',
    'tiruchirappalli': '620001',
    'bareilly': '243001',
    'mysore': '570001',
    'tiruppur': '641601',
    'gurgaon': '122001',
    'gurugram': '122001',
    'aligarh': '202001',
    'jalandhar': '144001',
    'bhubaneswar': '751001',
    'salem': '636001',
    'warangal': '506001',
    'mira': '401107',
    'thiruvananthapuram': '695001',
    'guntur': '522001',
    'bhiwandi': '421302',
    'saharanpur': '247001',
    'gorakhpur': '273001',
    'bikaner': '334001',
    'amravati': '444001',
    'noida': '201301',
    'jamshedpur': '831001',
    'bhilai': '490001',
    'cuttack': '753001',
    'firozabad': '283201',
    'kochi': '682001',
    'nellore': '524001',
    'bhavnagar': '364001',
    'dehradun': '248001',
    'durgapur': '713201',
    'asansol': '713301',
    'rourkela': '769001',
    'nanded': '431601',
    'kolhapur': '416001',
    'ajmer': '305001',
    'akola': '444001',
    'gulbarga': '585101',
    'jamnagar': '361001',
    'ujjain': '456001',
    'loni': '201102',
    'siliguri': '734001',
    'jhansi': '284001',
    'ulhasnagar': '421003',
    'jammu': '180001',
    'sangli': '416416',
    'belgaum': '590001',
    'mangalore': '575001',
    'ambattur': '600053',
    'tirunelveli': '627001',
    'malegaon': '423203',
    'gaya': '823001',
    // Vellore (since user is from there)
    'vellore': '632001'
  };

  const cityKey = city.toLowerCase().trim();
  return cityPostalCodes[cityKey] || '000000';
};