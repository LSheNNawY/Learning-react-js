import axios from "axios";

/**
 * get all users
 * @returns {Promise<void>}
 */
const getUsers = async function () {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
}
/**
 * get user by id
 * @param id
 * @returns {Promise<void>}
 */
const getUser = async function (id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export {getUsers, getUser}