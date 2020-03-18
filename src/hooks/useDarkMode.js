import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (initialValue) => {
    // uses our new hookd                             key    variable
    const [darkMode, setDarkMode ] = useLocalStorage("mode",initialValue)

    // this is the function that "dark mode function " actualy uses
    const toggle = () => {
        if (darkMode) {
            document.querySelector('body').classList.add('dark-mode');
        }else{
            document.querySelector('body').classList.remove('dark-mode');
        }
    };

    //   starts the function
    useEffect(toggle,[darkMode]);

    return [darkMode, setDarkMode];
}

export default useDarkMode;