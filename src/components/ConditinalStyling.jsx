const ConditionalStylingUsingTernaryOperator = () => {
    let isActive = false;
    
    return(
        <h2 style={{color: isActive ? "green" : "red", marginBottom: "20", padding: 24}}>Conditional Styling using Ternary Operator</h2>
    );
}

export default ConditionalStylingUsingTernaryOperator;