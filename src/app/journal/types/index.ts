export interface HikeInfo {
    trailName: string;
    distance: number;
    elevation: number;
  }
  
export interface Item {
    key: number;
    title: string;
    location: string;
    googleMapsUrl: string;
    startDate: string;
    endDate: string;
    hikeInfo: HikeInfo;
    description: string;
    imageUrl: string;
}