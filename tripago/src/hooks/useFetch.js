import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [pending, setPending] = useState(false)

    useEffect(() => {
        const fetchJson = async (url) => {
            try {
                setPending(true)
                const response = await fetch(url)

                if (response.ok) {
                    const json = await response.json()

                    setPending(false)
                    setData(json)
                } else {
                    throw new Error(`${response.status} Failed Fetch`)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchJson(url)
    }, [url])

    return { data, pending }
}

