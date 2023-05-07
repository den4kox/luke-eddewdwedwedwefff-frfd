import { IFilms, ResourceData } from "../state/types";

export function isFilms(data: ResourceData): data is IFilms {
  return "title" in data;
}
