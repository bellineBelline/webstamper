import { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";

const loadingContext = createContext();

export function ProviderLoading({children}) {
    /** 実行中処理数 */
    const [loadingCount, setLoadingCount] = useState(0);

    useEffect(() => {
        console.log('loading tasks: ', loadingCount);
    }, [loadingCount]);

    const withLoading = useCallback(async (asyncfunc) => {
        let ret = null;
        setLoadingCount(count => count + 1);
        try {
            await new Promise(resolve => requestAnimationFrame(resolve));
            ret = await Promise.resolve(asyncfunc());
        } finally {
            setLoadingCount(count => Math.max(count - 1, 0));
        }
        return ret;
    }, []);

    return (
        <loadingContext.Provider value={{ isLoading: loadingCount > 0, withLoading }}>
            {children}
        </loadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(loadingContext);
    if(!context) {
        throw new Error('useLoading must be used within a ProviderLoading')
    }
    return context;
}