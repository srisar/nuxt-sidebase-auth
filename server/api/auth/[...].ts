import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import { NuxtAuthHandler } from '#auth';
import type { LoginResponse } from '~/types/auth-types';

/* ---------------------------------------------------------------------------------------------- */

export default NuxtAuthHandler({
   pages: {
      signIn: '/login',
   },

   secret: 'M5rs/Dipt/TKb5gPRZAOvuaJeeFw8Fb5CYnvFVs6H2WQNadQ1RQB0Q6wpDmy2PBjOjBRkN0TjE33xMO3C3/Bsw==',

   providers: [

      // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
      GithubProvider.default({
         clientId: 'enter-your-client-id-here',
         clientSecret: 'enter-your-client-secret-here',
      }),

      // @ts-expect-error You need to use .default here for it to work during SSR
      CredentialsProvider.default({
         name: 'Credentials',

         async authorize(credentials: { username: string; password: string }) {
            // console.log('authorize call');

            try {
               const response = await $fetch<LoginResponse>('/login', {
                  baseURL: useRuntimeConfig().public.baseURL,
                  method: 'POST',
                  body: {
                     email: credentials.username,
                     password: credentials.password,
                  },
               });

               /*
                * user{email, name, profilePic}
                */

               return {
                  id: response.user.id,
                  email: response.user.email,
                  fullName: response.user.profile.fullName,
                  role: 'CUSTOMER',
                  token: response.token.token,
               };
            }
            catch (e) {
               console.log(e);
            }

            return null;
         },
      }),

   ],

   callbacks: {

      async jwt({ user, token }) {
         console.log('jwt callback');

         if (user) {
            token.user = {
               id: user.id,
               email: user.email,
               fullName: user.fullName,
               role: user.role,
               token: user.token,
            };
         }

         return token;
      },

      async session({ session, token }) {
         if (token) {
            session.user.fullName = token.user.fullName;
            session.user.id = token.user.id;
            session.user.role = token.user.role === 'LANDLORD' ? 'ADMIN' : 'CUSTOMER';
            session.user.token = token.user.token;
         }

         return session;
      },

   },

});
