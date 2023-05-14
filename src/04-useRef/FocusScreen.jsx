import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => inputRef.current.select();

    return (
        <>
            <h1>
                FocusScreen
            </h1>
            <hr />

            <input
                type="text"
                placeholder="Write your name"
                className="form-control"
                ref={inputRef}
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClickBtn}
            >
                Set focus
            </button>
        </>
    )
}