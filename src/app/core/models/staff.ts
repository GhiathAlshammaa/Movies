export interface Staff {
  id: number;
  name: string;
  adult?: boolean;
  gender?: number | null;
  known_for_department?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  character?: string;
  cast_id?: number;
  credit_id?: string;
  department?: string;
  order?: number;
  job?: string;
}