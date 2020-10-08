import React, { useMemo } from 'react';

const useObjState = initialObj => {
  const [obj, setObj] = React.useState(initialObj);
  const setObjHelper = useMemo( () => { // the value of setObjHelper is permanent, so even if it is passed to a child component, it shouldn't require extra component updates
    const helper = {}
    Object.keys(initialObj).forEach(key => {
      helper[key] = newVal => setObj({ ...obj, [key]: newVal });
    });
    return helper
  }, [initialObj, obj])
  return [obj, setObjHelper, initialObj, obj];
};

export default useObjState;
