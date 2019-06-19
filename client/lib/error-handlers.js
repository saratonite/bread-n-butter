/**
 * Convert the Server side Validations (Joi) errors to formki errors
 */
export const convertServerValidationErrors = error => {
  if (
    !error.graphQLErrors &&
    !error.graphQLErrors[0].extensions.exception.details
  )
    return false;

  const erroDetails = error.graphQLErrors[0].extensions.exception.details;

  if (!erroDetails) return false;

  let serverErrorMsgs = {};

  for (let i = erroDetails.length - 1; i >= 0; i--) {
    serverErrorMsgs[erroDetails[i].path[0]] = erroDetails[i].message;
  }

  return serverErrorMsgs;
};
