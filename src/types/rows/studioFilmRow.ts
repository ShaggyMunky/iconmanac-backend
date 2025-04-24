export interface StudioFilmRow {
  StudioFilmId: string;
  Title: string;
  FilmSourceId: string | null;
  ReleaseDate: Date | null;
  TrueDate: Date | null;
  Poster: string | null;
  PosterVersion: number | null;
  Preview: string | null;
  WebPath: string | null;
  FileName: string | null;
  FilePath: string | null;
  StudioId: number;
  FemaleCount: number | null;
  MaleCount: number | null;
  VideoLength: number | null;
  IsVR: boolean | null;
  IsHidden: boolean | null;
  IsPublic: boolean | null;
  IsMissing: boolean | null;
  DateMissing: Date | null;
  LinkedStudioFilmId: string | null;
}
