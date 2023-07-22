export interface ShodanResponseModel {
    ip_str: string;
    isp: string;
    os: string;
    ports: number[];
    country_name: string;
    city: string;
    latitude: number;
    longitude: number;
    hostnames: string[];
    organization: string;
    region_code: string;
    area_code: string;
    postal_code: string;
  }
  