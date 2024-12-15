export interface ApiResponse {
    current: {
      temp_c: number;
      feelslike_c: number;
      wind_kph: number;
      wind_dir: string;
      humidity: number;
      cloud: number;
      vis_km: number;
      uv:number;
      is_day: number;
      condition:{
        text:string,
        icon: string,
      }
      
    };
    location: {
      name: string;
      region: string;
      country: string;
    };
    forecast: {
      forecastday: {
        [index : number] : {
          day: {
            maxtemp_c: number;
            mintemp_c: number;
          }
          
        }
      }
    }
  }
  
  export const fetchData = async (apiUrl: string): Promise<ApiResponse> => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  