import mongoose from 'mongoose'
let users = [];

mongoose.connect('mongodb://localhost:27017/jivit-healthcare', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

const userSchema = new mongoose.Schema({
    fullname: String,
    middlename: String,
    address: String,
    phoneNumber:String,
    dateOfJoining:Date,
    dateOfRetirement:Date,
    dateOfBirth:Date,
    aadharPanNo:String,
    departmentName:String,
    departmentLocation:String,
    designation:String,
});

const User = mongoose.model('User', userSchema);


export const getUsers =  (req, res) => {
    res.send(users)
}
export const createUser =async (req, res) => {
    const user = req.body;
    try {
        const newUser = new User(user);
        await newUser.save();
        res.json({ message: 'Form data saved successfully', data: user });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error: error.message });
    }
}

export const getUser = (req, res) => {
    const singleUser = users.filter((user) => user.id === req.params.id)
    res.send(singleUser)
}
export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id)
    res.send('user deleted successfully')
}
export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id)
    user.id = req.body.id
    user.name = req.body.name
    user.category = req.body.category
    user.number = req.body.number
    res.send('user updated successfully')
}