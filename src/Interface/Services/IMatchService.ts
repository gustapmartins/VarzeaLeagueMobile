import { matchCreateDto } from "../../Dto/MatchDto";

export interface IMatchService {
    getMatches(Page: number, PageSize: number): Promise<any>;
    getMatchById(id: string): Promise<any>;
    createMatch(MatchData: matchCreateDto, Token: string): Promise<any>;
    updateMatch(id: string, matchUpdateDto: any): Promise<any>;
    deleteMatch(id: string): Promise<any>;
}