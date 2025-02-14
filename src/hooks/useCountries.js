import { useState, useEffect } from "react";

export function useCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                const countryData = data.map((country) => ({
                    name: country.name.common,
                    flags: country.flags,
                }));
                setCountries(countryData);
            });
    }, []);

    return { countries };
}
