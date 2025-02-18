const ConditionalStylingUsingTernaryOperator = () => {
    let isActive = false;
    
    return(
        <h2 style={{color: isActive ? "green" : "red", marginBottom: "20", padding: 24}}>Conditional Styling using Ternary Operator</h2>
    );
}

export default ConditionalStylingUsingTernaryOperator;

export const ConditionalStylingUsingJSObject = () => {
    let isDarkMode = true;
    const darkStyle = {
        backgroundColor: "black",
        color: "white",
        padding: "10px"
    };

    const lightStyle = {
        backgroundColor: "white",
        color: "black",
        padding: "10px"
    };

    return <div style={isDarkMode ? darkStyle: lightStyle}>Conditional Styling Using JS Object</div>

}