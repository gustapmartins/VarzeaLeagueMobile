import { AxiosResponse } from "axios";
import { INotificationViewDto } from "../Dto/INotificationDto";

export interface INotificationService {
    getNotification(teamId: string | undefined, page?: number , pageSize?: number): Promise<AxiosResponse<INotificationViewDto[], any>>;
}
