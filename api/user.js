module.exports = (app) => {
    const get =(req,res) => {
        const users = [
            {
                "id": 1,
                "name": "usuario 1"
            },
            {
                "id": 2,
                "name": "usuario 2"
            },
            {
                "id": 3,
                "name": "usuario 3"
            },
        ];
        return res.json(users);
    }
    const save = (req, res) =>{
        const user = { ...req.body}
        return res.json(user);
    }
    return {get, save};
}