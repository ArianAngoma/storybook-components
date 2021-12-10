/* Importaciones propias */
import './myLabel.css';

export interface MyLabelProps {
    /**
     * Este el mensaje a mostrar en la etiqueta
     */
    label: string;
    /**
     * Este es el tamaño de la etiqueta
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
}

export const MyLabel = ({label = 'No Label', size = 'normal'}: MyLabelProps) => {
    return (
        <span className={`${size}`}>
            {label}
        </span>
    )
}