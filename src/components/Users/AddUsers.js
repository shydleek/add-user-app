import Card from "../UI/Card";

import styles from './AddUsers.module.css';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
    <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">
                Username
            </label>
            <input id="username" type="text"></input>
            <label htmlFor="age">
                Age (years)
            </label>
            <input id="age" type="number"></input>
            <button type="submit">Add user</button>
        </form>
    </Card>    
    );
};   

export default AddUser;