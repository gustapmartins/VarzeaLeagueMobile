export interface INotificationService {
    getNotification(teamId: string | undefined, page?: number , pageSize?: number): Promise<any>;
}
