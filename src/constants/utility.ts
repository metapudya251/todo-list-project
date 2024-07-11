//update object immutably
export const updateObject = (oldState: any, updatedProperties: any) => {
  return {
    ...oldState,
    ...updatedProperties,
  };
};

/** Format date locale */
export const formatDate = (date: string, hideTime = false, short = false) => {
  let dateObj = Date.parse(date);

  if (!dateObj) {
    dateObj = Number(new Date(Date.now()));
  }

  return new Intl.DateTimeFormat("id", {
    weekday: !short ? "long" : undefined,
    day: "numeric",
    month: !short ? "long" : "short",
    year: "numeric",
    hour: !hideTime ? "numeric" : undefined,
    minute: !hideTime ? "numeric" : undefined,
  }).format(dateObj);
};
