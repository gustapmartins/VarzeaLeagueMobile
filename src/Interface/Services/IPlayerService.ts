import { PlayerCreateDto } from "../Dto/IPlayerDto";

export interface IPlayerService {
    getPlayers(page: number, pageSize: number, teamId: string | null): Promise<any>;
    getPlayerById(id: string): Promise<any>;
    createPlayer(PlayerData: PlayerCreateDto, Token: string): Promise<any>;
    updatePlayer(id: string, playerUpdateDto: any): Promise<any>;
    deletePlayer(id: string): Promise<any>;
}
