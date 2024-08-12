// import { useMutation } from "@apollo/client";

// import AuthMutations from "./auth-mutations";


// export const authLogin = () => {
//     return useMutation(AuthMutations.LOGIN)
// }


import { useMutation, MutationTuple } from "@apollo/client";
import AuthMutations from "./auth-mutations";
import { LoginClient, LoginClientInput } from "../../app/common/interface/auth.interface";

// Tipar el retorno de authLogin
export const authLogin = (): MutationTuple<LoginClient, LoginClientInput> => {
  return useMutation<LoginClient, LoginClientInput>(AuthMutations.LOGIN);
}
