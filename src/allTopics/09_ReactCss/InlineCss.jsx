const InlineCss = () => {
  const subHeadingStyle = { backgroundColor: "blue", color: "white" };

  return (
    <>
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        Learn Inline CSS in React
      </h1>

      <h2 style={subHeadingStyle}>I am Sub Heading</h2>
    </>
  );
};

export default InlineCss;