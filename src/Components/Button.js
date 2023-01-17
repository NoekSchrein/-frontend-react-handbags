import React from 'react';

function Button(props) {
    function logClick() {
        console.log(props.buttonText);
    }

    return (
        <nav>
            <button
                type="button"
                onClick={logClick}
                disabled={props.isDisabled}
            >
                {props.buttonText}
            </button>
        </nav>
    );
}

export default Button;