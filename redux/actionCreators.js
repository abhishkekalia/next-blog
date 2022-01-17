import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  translationRequest: ["language", "mode"],
  translationSuccess: ["translation"],
  translationFailure: ["error"]
});

export default Creators;
