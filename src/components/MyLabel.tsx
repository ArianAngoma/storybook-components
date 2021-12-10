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
    /**
     * Si quiere todo capitalizado
     */
    allCaps?: boolean;
    /**
     * Colores básicos del botón
     */
    color?: 'primary' | 'secondary' | 'tertiary';
}

export const MyLabel = ({label = 'No Label', size = 'normal', allCaps = false, color = 'primary'}: MyLabelProps) => {
    return (
        <span className={`${size} text-${color}`}>
            {
                (allCaps) ? label.toUpperCase() : label
            }
        </span>
    )
}