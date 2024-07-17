import { ITeamModel } from "../Model/ITeamModel";

export interface INotificationViewDto {
    Id: string;
    UserHomeTeamModel?: ITeamModel;
    UserVisitingTeamModel?: ITeamModel;
    NotificationType: string;
    DateCreated: Date;
}