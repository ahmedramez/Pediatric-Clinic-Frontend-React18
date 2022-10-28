import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
let actions = {};

//-_-Generic Store
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];
  const dispatch = async(actionIdentifier, payload = {}) => {
    //run this action
    //the action should return the new state
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };
    //inform all listeners with the state changes
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    //add component to listeners when it is mounted
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      //remove component from listeners when it is unmounted
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  //add initial state to global state
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
