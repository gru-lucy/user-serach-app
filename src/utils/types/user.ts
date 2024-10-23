interface Hair {
  color: string
  type: string
}

interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: {
    lat: number // latitude
    lng: number // longitude
  }
  country: string
}

interface Company {
  title: string
  address: Address
  department: string
  name: string
  phone: string
}

interface Bank {
  cardExpire: string // MM/YY format
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

interface Crypto {
  coin: string // type of cryptocurrency
  wallet: string // wallet address
  network: string // network type (e.g., Ethereum)
}
export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string // ISO 8601 format (YYYY-MM-DD)
  image: string // URL
  bloodGroup: string
  height: number // in cm
  weight: number // in kg
  eyeColor: string
  hair: Hair
  ip: string // IP address
  address: Address
  macAddress: string // MAC address
  university: string
  bank: Bank
  company: Company
  ein: string // Employer Identification Number
  ssn: string // Social Security Number
  userAgent: string // User Agent string
  crypto: Crypto
  role: string // User role
}
