import { Container } from "./style";
import { FiPlus, FiX } from "react-icons/fi";

export function Ingredients({ isNew, value, onClick, ...rest}) {
    const size = 10;

    return (
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value} 
                readOnly={!isNew}
                size={size}
                {...rest} 
            />

            <button 
                type="button" 
                onClick={onClick} 
                className={isNew ? "button-add" : "button-delete"}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}