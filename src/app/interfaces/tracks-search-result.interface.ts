import { Song } from "./songs.interface";

export interface TracksByArtist {
    totalAlbums: number;
    totalSongs: number;
    albums: string[];
    songs: Song[];
}
