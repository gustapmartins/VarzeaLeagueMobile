import { ITeamModel } from "./ITeamModel";

export interface INotificationModel {
    id: string;
    userHomeTeamModel?: ITeamModel;
    userVisitingTeamModel?: ITeamModel;
    notificationType: string;
    dateCreated: Date;
}