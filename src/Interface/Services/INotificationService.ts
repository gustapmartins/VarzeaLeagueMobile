import { playerCreateDto } from "../../Dto/PlayerDto";

export interface INotificationService {
    getNotification(page: number, pageSize: number, teamId: string | null): Promise<any>;
}
