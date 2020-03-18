import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode ] = useLocalStorage("mode",initialValue)

    const toggle = () => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode');
        }else{
            document.querySelector('body').classList.remove('dark-mode');
        }
    };

    useEffect(toggle,[darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;