async function checkEmailUnique(email:string) {}

async function createNewUser(email:string, password:string)/* : Promise<User> */ {}

const userService = {
    createNewUser
};

export default userService;