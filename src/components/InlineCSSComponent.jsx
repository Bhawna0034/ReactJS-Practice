const InlineCSSComponent = () => {
    const headingStyle = {
        color: "lightGray",
        fontSize: "40px",
        textAlign: "center",
        backgroundColor: "teal"
    }
    return(
        <div>
        <h1 style={headingStyle}>Hello, React👋</h1>
        <h2 style={{color: "white", fontSize: 24, textAlign: "center", paddingTop:20, backgroundColor: "orange"}}>Inline styling in React</h2>
        </div>
    )
}

export default InlineCSSComponent;