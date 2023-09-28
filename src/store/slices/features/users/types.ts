// Define the user type
export interface UserType {
  id: string;
  name: string;
  lastname: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// This type will represent the sub-state for getting a single user by ID
export interface IUserState {
  data: UserType | null;
  isLoading: boolean;
  errors: string;
}

// The users global state
export interface UsersStateType {
  user: IUserState;
  // Later, we can add other sub-states like:
  // list,
  // create,
  // update,
  // remove
}

// export type USERS = typeof USERS; // Typescript line

// // (2)
// export type GET_USER_BY_ID = typeof GET_USER_BY_ID; // Typescript line
