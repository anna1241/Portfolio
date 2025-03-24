const Footer = () => {
  return (
    <div style={{
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "10px 0",
      position: "relative",
      bottom: "0",
      width: "100%",
    }}>
      © {new Date().getFullYear()} My Portfolio
    </div>
  );
};

export default Footer;
