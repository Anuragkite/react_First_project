import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    let currentDate = new Date();
    useEffect(() => {
        const controller = new AbortController();
        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
            { signal: controller.signal }
        )
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err);
                }
            });

        return () => controller.abort();
    }, [currency]);

    // Remove console.log(data)
    console.log(data);
    return { data, error };
}

export default useCurrencyInfo;