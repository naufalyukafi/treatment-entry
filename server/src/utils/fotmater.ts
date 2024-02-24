
const formatter = {
    generateRandomId: () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 8;
        let randomId = '';
        for (let i = 0; i < length; i++) {
            randomId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomId;
    }
}

export default formatter;
