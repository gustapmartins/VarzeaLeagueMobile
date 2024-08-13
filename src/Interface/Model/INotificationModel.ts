import { ITeamModel } from "./ITeamModel";

export interface INotificationModel {
    id: string;
    userHomeTeamModel?: ITeamModel;
    userVisitingTeamModel?: ITeamModel;
    ReadNotification: boolean;  
    notificationType: string;
    dateCreated: Date;
}