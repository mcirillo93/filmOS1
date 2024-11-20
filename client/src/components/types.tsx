//MOVIE TYPES FILE -Added by Ash 
export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string; // added this to Ensure all required properties are included
  }


  export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
  }