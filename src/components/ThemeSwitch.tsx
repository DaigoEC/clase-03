import {useTheme} from "../context/ThemeProvider"

export const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="btn btn-accent">
                Cambiar Modo
        </button>
    )
}