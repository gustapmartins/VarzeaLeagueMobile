import { ITeamModel } from "../Model/ITeamModel";

export interface INotificationViewDto {
    Id: string;
    UserHomeTeamModel?: ITeamModel;
    UserVisitingTeamModel?: ITeamModel;
    ReadNotification: boolean;  
    NotificationType: string;
    DateCreated: Date;
}