import User from '../models/User';

const getUser = async (req, res) => {
    try {
        const profiles = await User.findOne({ roomId: "dkjfkld" }).where('result').elemMatch({ name: '변주현' });
       // const judy = profiles["result"].findOne();
        // const profiles = await User.findOne();
        // const ans = profiles["result"].pull({ name: '김솝트' });
       // console.log(profiles);
        res.send(profiles);
    } catch (err) {
        console.log(err);
    }
}

const addUser = async (req, res) => {
    try {
        const user = req.body;
        const all = await User.findOne();
        all["result"].push({ name: user.name, tendency: user.tendency });
        await all.save();
    } catch (err) {
        console.log(err);
    }
}
export default {
    getUser,
    addUser
}