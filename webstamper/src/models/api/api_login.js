import AccessorAPI, { ErrorInfo } from "../accessor_api";

export default class ApiLogin {
    static PATH_REQUEST = '/login';

    /** ログイン */
    static async post(userId, hashedPass) {
        const body = { 
            userId: userId,
            hashedPass: hashedPass
        };

        let result =  await AccessorAPI.post(ApiLogin.PATH_REQUEST, body);

        if(result.success) {
            // 成功時

        } else if(result.status == 401) {
            // UnAuthorized

        } else if(result.status == 403) {
            // Forbidden

        } else {
            console.error(ErrorInfo.errorMessageJoin(result.errors));
        }

        return result;
    }
}
