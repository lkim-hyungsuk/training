function deepClone(value) {
    if (!value || typeof value !== "object") return value;

    if (Array.isArray(value) {
        return value.map(item => deepClone(item));
    }

    const entries = Object.entries(value)
        .map(([key, value]) => [key, deepClone(value)])

    return Object.fromEntries(entries);
} 