import { AxiosResponse } from "axios";
import { MatchCreateDto, MatchViewDto } from "../Dto/iMatchDto";

export interface IMatchService {
    getMatches(Page: number, PageSize: number): Promise<AxiosResponse<MatchViewDto[], any>>;
    getMatchById(id: string): Promise<any>;
    createMatch(MatchData: MatchCreateDto, Token: string): Promise<any>;
    updateMatch(id: string, matchUpdateDto: any): Promise<any>;
    deleteMatch(id: string): Promise<any>;
}