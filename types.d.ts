// The `JWT` interface can be found in the `next-auth/jwt` submodule
import { JWT } from 'next-auth/jwt';
import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
   /**
    * The shape of the user object returned in the OAuth providers' `profile` callback,
    * or the second parameter of the `session` callback, when using a database.
    */
   interface User {
      id: number;
      email: string;
      fullName: string;
      role: string;
      token: string;
   }
   /**
    * The shape of the account object returned in the OAuth providers' `account` callback,
    * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
    */
   interface Account {}

   /**
    * Returned by `useSession`, `auth`, contains information about the active session.
    */
   interface Session {
      user: {
         /** The user's postal address. */
         id: string | number;
         address: string;
         fullName: string;
         role: string;
         token: string;
         /**
          * By default, TypeScript merges new interface properties and overwrites existing ones.
          * In this case, the default session user properties will be overwritten,
          * with the new ones defined above. To keep the default session user properties,
          * you need to add them back into the newly declared interface.
          */
      } & DefaultSession['user'];
   }
}

declare module 'next-auth/jwt' {
   /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
   interface JWT {
      /** OpenID ID Token */
      idToken?: string;
      user: {
         id: number | string;
         fullName: string;
         email: string;
         token: string;
         role: string;
      };
   }
}
