import { useState } from 'react';

export default function useLoading() {
    const [loading, setLoading] = useState(false);

    const loadingState = (value) => setLoading(value);

    return {
        loading,
        loadingState,
    };
}
