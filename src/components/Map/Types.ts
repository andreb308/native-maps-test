export type GeocodeInfo = Array<{
  place_id: number;
  licence: string;
  powered_by: string;
  osm_type: string;
  osm_id: number;
  boundingbox: Array<string>;
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
}>;
