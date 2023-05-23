export class RefreshToken {
    id: string;
    user_id: string;
    expires_in: number;

    constructor(id: string, user_id: string, expires_in: number) {
        this.id = id;
        this.user_id = user_id;
        this.expires_in = expires_in;
    }
}