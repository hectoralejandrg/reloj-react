export const ACTION_TYPES = {
  incrementTime: "increment_time",
  decrementTime: "decrement_time",
  startTime: "start_time",
  lapTime: "lap_time",
  resetTime: "reset_time",
};

export const incrementTime = () => ({
  type: "increment_time",
});
export const decrementTime = () => ({
  type: "decrement_time",
});
export const startTime = () => ({
  type: "start_time",
});
export const lapTime = (time) => ({
  type: "lap_time",
  payload: time
});
export const resetTime = () => ({
  type: "reset_time",
});
