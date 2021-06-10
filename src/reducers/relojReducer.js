import { ACTION_TYPES } from "../actions/relojAction";

const INITIAL_STATE = {
  time: [0, 0, 0],
  lapTime: [],
};

export const relojReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.incrementTime:
      return {
        ...state,
        time:
          state.time[1] === 3
            ? [state.time[0] + 1, (state.time[1] = 0), state.time[2]]
            : [state.time[0], state.time[1] + 1, state.time[2]],
      };

    case ACTION_TYPES.decrementTime:
      return {
        ...state,
        time:
          state.time[1] === 0
            ? state.time[0] === 0 && state.time[1] === 0
              ? [0, 0, 0]
              : [state.time[0] - 1, (state.time[1] = 3), state.time[2]]
            : [state.time[0], state.time[1] - 1, state.time[2]],
      };

    case ACTION_TYPES.startTime:
      return {
        ...state,
        time:
          state.time[2] === 0
            ? state.time[1] === 0
              ? state.time[0] === 0
                ? [0, 0, 0]
                : [state.time[0] - 1, (state.time[1] = 3), (state.time[2] = 3)]
              : [state.time[0], state.time[1] - 1, (state.time[2] = 3)]
            : [state.time[0], state.time[1], state.time[2] - 1],
      };

    case ACTION_TYPES.lapTime:
      return {
        ...state,
        lapTime: [...state.lapTime,state.time]
      };

    case ACTION_TYPES.resetTime:
      return {
        ...state,
        time: [0, 0, 0],
      };

    default:
      return state;
  }
};
