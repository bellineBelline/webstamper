import AccessorEnv from "../config/accessor_env";

/**
 * APIアクセサ
 */
export default class AccessorAPI {
    /**
     * リクエスト（GET）
     * @param {string} path リクエストURL
     * @param {object} query クエリパラメータ { param1: value, param2: value, ...}
     */
    static async get(path, query) {
        let queryStr = query ? '?' + new URLSearchParams(query).toString() : '';
        let pathWithQuery = path + queryStr;
        return await this.#requestAPI(pathWithQuery, 'GET', null);
    }

    /**
     * リクエスト（POST）
     */
    static async post(path, body) {
        return await this.#requestAPI(path, 'POST', body);
    }

    /**
     * リクエスト（PUT）
     */
    static async put(path, body) {
        return await this.#requestAPI(path, 'PUT', body);
    }

    /**
     * リクエスト（PATCH）
     */
    static async patch(path, body) {
        return await this.#requestAPI(path, 'PATCH', body);
    }

    /**
     * リクエスト（DELETE）
     */
    static async delete(path, body) {
        return await this.#requestAPI(path, 'DELETE', body);
    }


    /** APIリクエスト本体 */
    static async #requestAPI(path, method, body) {
        const urlReq = AccessorEnv.URL_API_DOMAIN + path;

        // ■ TODO: トークン取得処理が必要
        let accessToken = await AuthInfo.getToken();

        let init = { method, headers: {} }
        if (body != null) {
            if(method != 'GET') {
                init.body = JSON.stringify(body);
            }
            init.headers['Content-Type'] = 'application/json';
        }
        if (accessToken) {
            init.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        try {
            console.log(`request (${method}) to: `, urlReq, init.body);
            const response = await fetch(urlReq, init);
            const json = await response.json();
            console.log('response: ', json);

            return AccessorAPI.createRetData(
                response.status,
                { ...json.content},
                json.errors
            );
            
        } catch(err) {
            let errInfo = err.message || JSON.stringify(err);
            console.error('Failed request: ', errInfo);
            return AccessorAPI.createRetData(
                500,
                null,
                [new ErrorInfo(null, err.name, err.message)]
            );
        }
    }


    /**
     * API返答データの成形
     */
    static createRetData(status, content, arrErrInfos) {
        let data = {
            success: status >= 200 && status < 300,
            status: status,
            content: content
        };
        if(arrErrInfos != null || arrErrInfos?.length > 0) {
            data.errors = arrErrInfos?.length ? arrErrInfos : [new ErrorInfo(null, null, 'unknown error')];
        }
        return data;
    }
}


/** エラー情報 */
export class ErrorInfo {
    /** コンストラクタ */
    constructor(
        code,
        name,
        description
    ) {
        this.code = code;
        this.name = name;
        this.description = description;
    }

    /**
     * エラー情報オブジェクトの生成
     */
    createObject() {
        return {
            code: this.code,
            name: this.name,
            description: this.description
        };
    }

    /** エラー情報の文字列変換 */
    static errorMessageJoin(arrErrInfos) {
        console.error('arrErrInfos: ', arrErrInfos);
        let ret = '';
        for(let indexArr = 0; indexArr < arrErrInfos.length; indexArr++) {
            let info = arrErrInfos[indexArr];
            if(indexArr != 0) {
                ret += ', ';
            }
            ret += info.name + (info.description ? `: ${info.description}` : '');
        }

        return ret;
    }
}