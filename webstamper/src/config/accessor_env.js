/**
 * 環境変数アクセサ
 */
class AccessorEnv {
    constructor() {
        if(this.#dt === null) {
            this.#dt = import.meta.env;
            console.log(this.MODE);
        }
    }

    /** 内部データ（env読み込みは初回のみ） */
    #dt = null;

    /** 動作モード */
    get MODE() {
        return this.#dt?.VITE_MODE;
    }

    get URL_API_DOMAIN() {
        let mode = this.MODE;
        switch(mode) {
            case undefined:
                return 'none';
            case 'STUB':
                return this.#dt?.VITE_URL_API_DOMAIN_STUB;
            case 'DEV':
                return this.#dt?.VITE_URL_API_DOMAIN_DEV;
            case 'PROD':
                return this.#dt?.VITE_URL_API_DOMAIN_PROD;
            default:
                console.warn('未対応MODE: ', mode);
                return '';
        }
    }
}


// シングルトン
export default new AccessorEnv();