export interface TeamCreateDto {
    NameTeam: string;
    State: string;
    City: string;
}

export interface TeamModel {
    id: string;
    nameTeam: string;
    state: string;
    city: string;
    clientId: string;
    active: boolean;
    dateCreated: string;
}