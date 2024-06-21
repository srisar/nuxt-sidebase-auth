interface LoginResponseToken {
   token: string;
}

interface LoginResponseUserProfile {
   fullName: string;
   dob: string;
}

interface LoginResponseUser {
   id: number;
   email: string;
   role: 'LANDLORD' | 'TENANT';
   profile: LoginResponseUserProfile;
}

export interface LoginResponse {
   token: LoginResponseToken;
   user: LoginResponseUser;
}
