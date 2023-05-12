import { useState, useEffect } from "react";

export const SimpleForm = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: ""
    });

    const { username, email } = formData;

    const updateFormData = ({ target }) => {
        const { name, value } = target;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        console.log("useEffect called")
    }, []);

    useEffect(() => {
        console.log("username changed");
    }, [username]);

    useEffect(() => {
        console.log("email changed");
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => updateFormData(e)}
                />

                <input
                    type="email"
                    className="form-control mt-2"
                    placeholder="user@domain.com"
                    name="email"
                    value={email}
                    onChange={(e) => updateFormData(e)}
                />
            </form>
        </>
    )
}