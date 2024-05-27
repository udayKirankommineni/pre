export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    isSeller: boolean;
    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.phoneNumber = "";
        this.isSeller = false;
    }
  }
  