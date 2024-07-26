import { MatchCreateDto } from "../Dto/IMatchDto";

export interface IMatchService {
    getMatches(Page: number, PageSize: number): Promise<any>;
    getMatchById(id: string): Promise<any>;
    createMatch(MatchData: MatchCreateDto, Token: string): Promise<any>;
    updateMatch(id: string, matchUpdateDto: any): Promise<any>;
    deleteMatch(id: string): Promise<any>;
}