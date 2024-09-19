import { Animated } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";

export const AnimatedIcon = Animated.createAnimatedComponent(AwesomeIcon);

// Controlador de animación
const animVal = new Animated.Value(0);

// Animación para la flecha (izquierda a derecha cuando aparece)
const arrowAnimation = {
    transform: [
        {
            translateX: animVal.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0], // Desde fuera de la pantalla (-100) hasta su posición original (0)
            }),
        },
    ],
};

// Animación para el ancho del input de búsqueda
const inputAnimationWidth = animVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["100%", "90%"], // De tamaño completo (100%) a reducido (90%) cuando está activo
});

// Mantener el input en su lugar y moverlo hacia la derecha cuando se achica
const inputAnimation = {
    transform: [
        {
            translateX: animVal.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 30], // Desplaza el input hacia la derecha cuando la flecha aparece
            }),
        },
    ],
};

// Transición para abrir el buscador (achica la barra)
const animatedTransition = Animated.timing(animVal, {
    toValue: 0.8, // Estado activo
    duration: 300, // Duración de la animación
    useNativeDriver: false, // No podemos usar `useNativeDriver` porque estamos animando el width
});

// Transición para cerrar el buscador (vuelve a tamaño completo)
const animatedTransitionReset = Animated.timing(animVal, {
    toValue: 0, // Estado inicial
    duration: 300,
    useNativeDriver: false,
});

// Exportamos las animaciones para ser utilizadas en el componente
export const searchAnimation = {
    arrow: arrowAnimation,
    inputWidth: inputAnimationWidth,
    input: inputAnimation,
    transition: animatedTransition,
    transitionReset: animatedTransitionReset,
};





