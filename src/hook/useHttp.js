/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState, useCallback } from "react";

function useHttp(
    service = function promise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: '21938012' })
            }, 2000);
        })
    },
    options = {
        params: {},

    },
) {
    const [result, setResult] = useState(null);
    const [isloading, setIsloading] = useState(true);

    function resultProcess(res, cb) {
        console.log(`%c http <-- `, 'font-weight:bold;color:#13CE66;', res);
        if (!res) return
        setResult(res);
        setIsloading(false);
        if (typeof cb === 'function') cb(res);
    };

    const req = useCallback(async (cb) => {
        setIsloading(true)
        const _result = await service({ ...options.params });
        resultProcess(_result, cb);
    });

    const request = useCallback(async (params, cb) => {
        setIsloading(true)
        const _result = await service({ ...options.params, ...params });
        resultProcess(_result, cb);
    })

    useEffect(() => {
        req()
    }, [])

    return [
        isloading,
        result,
        request,
    ]
}

export default useHttp;