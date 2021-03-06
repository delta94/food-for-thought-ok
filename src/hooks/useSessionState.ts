// Core
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useSessionState<S>(defaultState: S, id: string): [S, Dispatch<SetStateAction<S>>] {
  // Pull value from session storage (if valid json string)
  let sessionVal;
  try {
    sessionVal = JSON.parse(sessionStorage.getItem(id) as string);
  } catch {
    sessionVal = null;
  }

  // Set state to session value if present
  // otherwise set state to default
  const initialState: S = sessionVal !== null ? sessionVal : defaultState;
  const [sessionState, setSessionState] = useState(initialState);

  // Update session storage any time state changes
  useEffect(() => {
    if (sessionState !== null) {
      sessionStorage.setItem(id, JSON.stringify(sessionState));
    }
  }, [id, sessionState]);

  return [sessionState, setSessionState];
}

export default useSessionState;
