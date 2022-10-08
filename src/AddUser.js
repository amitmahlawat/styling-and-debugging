import React, { useState } from "react";
import Button from "./Button";
import classes from "./AddUser.module.css";
import Card from "./Card";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [username, setuserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    const username = event.target.value;
    setuserName(username);
  };
  const ageHandler = (event) => {
    const age = event.target.value;
    setAge(age);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age (non-empty value)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age (age>0)",
      });
      return;
    }
    props.onSaveData(username, age);
    setuserName("");
    setAge("");
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={SubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={username}
            id="username"
            type="text"
            onChange={userNameHandler}
          />

          <label htmlFor="age">Age(Years)</label>
          <input value={age} id="age" type="number" onChange={ageHandler} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
