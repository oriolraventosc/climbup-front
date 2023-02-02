export interface ClimbingWall {
  name: string;
  city: string;
  address: string;
  email: string;
  telephone: number;
  description: string;
  prices: string;
  installations: string[];
  schedule: string;
  activities: string[];
  website: string;
  id: string;
  picture1: string;
  picture2: string;
  picture3: string;
  picture4: string;
  lat: number;
  lng: number;
}

export interface UiStructure {
  loading: boolean;
}

export interface UserStructure {
  email?: string;
  password?: string;
  accessToken?: string;
  id?: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  accesstoken: string;
}
