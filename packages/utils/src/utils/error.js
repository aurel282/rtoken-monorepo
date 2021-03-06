// Reasons
const INVALID_ADDRESS = "Ethereum address is invalid";
const INVALID_HAT_ID =
  "Hat ID must be a whole number, of type Number or String";
// const USER_NOT_FOUND = "User not found";
// const INTERNAL_ERROR = "Something went wrong";

// Categories
const INPUT = "input";
// Types
const ADDRESS = "address";
const HAT_ID = "hatId";

// ###### USER INPUT VALIDATION #####

const inputErrorMessage = (type) => {
  if (type === ADDRESS) return INVALID_ADDRESS;
  if (type === HAT_ID) return INVALID_HAT_ID;
};

export const throwError = (category, type) => {
  if (category === INPUT) throw inputErrorMessage(type);
};

export const getErrorResponse = (error, className, functionName) => {
  const errorText = typeof error === "string" ? error : error.message;
  return `Error @rtoken/utils ${className}.${functionName}(): ${errorText}`;
};
