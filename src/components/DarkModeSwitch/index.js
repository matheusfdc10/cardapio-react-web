import { StyledSwitch } from "./style";

export default function DarkModeSwitch({theme, onChangeTheme}) {

    return (
        <StyledSwitch>
            <input 
                id="darkmode" 
                type="checkbox" 
                checked={theme == 'light'}
                onChange={onChangeTheme}
            />
            <label htmlFor="darkmode">
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}