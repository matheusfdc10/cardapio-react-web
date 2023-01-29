import { StyledLoading } from "./Style";

const Loading = ({ height }) => {
    return (
        <StyledLoading style={{height: height}}>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </StyledLoading>
    )
}

export default Loading;