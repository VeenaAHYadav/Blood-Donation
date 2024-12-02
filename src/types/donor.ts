export interface Donor {
  id: string;
  name: string;
  email: string;
  bloodType: string;
  phone: string;
  lastDonation: string;
  address: string;
}

export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';