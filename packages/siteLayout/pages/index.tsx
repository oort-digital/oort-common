import { CSSProperties } from "react";

function Home() {
  const styles: CSSProperties = {
    marginTop: "92px",
    padding: "100px 0 100px 0",
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: "36px",
  };

  return <div style={styles}>Some content</div>;
}

export default Home;
