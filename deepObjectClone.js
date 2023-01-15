function deepClone(obj, hash = new WeakMap()) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // Check for cyclic reference
    if (hash.has(obj)) return hash.get(obj);

    let clone = Array.isArray(obj) ? [] : {};
    hash.set(obj, clone);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key], hash);
        }
    }
    return clone;
}