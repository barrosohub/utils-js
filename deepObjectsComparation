const isObjEqual = (a, b) => {
    if (a === b) {
      return true;
    }
  
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }
  
    if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
      return a === b;
    }
  
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    
    if (aKeys.length !== bKeys.length) {
      return false;
    }
  
    return aKeys.every((key) => isObjEqual(a[key], b[key]));
  };
