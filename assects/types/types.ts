export type Nullable <T> = null | T


///////-------
export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: CharacterTypeOrigin;
    location: CharacterTypeLocation;
    image: string;
    episode: string[];
    url: string;
    created: string;
}
export type CharacterTypeOrigin = {
    name: string;
    url: string;
}
export type CharacterTypeLocation = {
    name: string;
    url: string;
}
///------------
