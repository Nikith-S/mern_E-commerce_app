import bycrpt from 'bcrypt'

export const hashPassword = async(password) => {
    try{
        const salt = await bycrpt.genSalt(10);
        const hashedPassword = await bycrpt.hash(password,salt);
        return hashedPassword;
    }catch(error) {

        console.log(error)
    }
};



export const comparePassword = async(password , hashedPassword) => {
    return bycrpt.compare(password, hashedPassword);
}