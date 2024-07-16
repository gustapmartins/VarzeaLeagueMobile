import { teamCreateDto } from "../../Dto/TeamDto";

export interface ITeamService {
    getTeams(page: number, pageSize: number): Promise<any>;
    getTeamById(id: string): Promise<any>;
    createTeam(TeamData: teamCreateDto, Token: String): Promise<any>;
    updateTeam(id: string, teamUpdateDto: { name?: string; coach?: string; players?: string[] }): Promise<any>;
    deleteTeam(id: string): Promise<any>;
}