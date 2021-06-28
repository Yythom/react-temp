/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState, useCallback } from "react";

function useHttp(
    http = function promise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: '21938012' })
            }, 2000);
        })
    },
    params = {},
) {
    const [result, setResult] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const req = useCallback(async () => {
        setIsloading(true)
        const _result = await http({ ...params });
        setResult(_result);
        setIsloading(false)
    });

    const refresh = useCallback(async () => {
        setIsloading(true)
        const _result = await http({ ...params });
        setResult(_result);
        setIsloading(false)
    })

    useEffect(() => {
        req()
    }, [])

    return [
        isloading,
        result,
        refresh,
    ]
}

export default useHttp;