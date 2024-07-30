let users = [{
    id: 1,
    name: 'user',
    category: 'test',
    number: 1234567891
}];

export const getUsers = (req, res) => {
    res.send(users)
}
export const createUser = (req, res) => {
    const user = req.body;
    console.log("Received user data:", user);
    users.push({ ...user })
    res.send('new user added successfully')
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