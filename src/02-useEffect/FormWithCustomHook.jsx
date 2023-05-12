import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {
        data,
        update,
        reset,
        username,
        email,
        password
    } = useForm({
        username: 'Gerard',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <form>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={(e) => update(e)}
                />

                <input
                    type="email"
                    className="form-control mt-2"
                    placeholder="user@domain.com"
                    name="email"
                    value={email}
                    onChange={(e) => update(e)}
                />

                <input
                    type="password"
                    className="form-control mt-2"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => update(e)}
                />

                <button
                    className="btn btn-primary mt-2"
                    onClick={reset}
                >
                    Reset
                </button>
            </form>
        </>
    )
}