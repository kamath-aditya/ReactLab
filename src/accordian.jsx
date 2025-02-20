import { useState } from "react";

const Accordion_list = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ border: "1px solid ", borderRadius: "5px", marginBottom: "10px", padding: "10px" }}>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer", fontWeight: "bold", padding: "10px" }}>
        {title} {isOpen ? "▼" : "▶"}
      </div>
      {isOpen && <div style={{ padding: "10px" }}>{content}</div>}
    </div>
  );
};

const Accordian = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "justify" }}>
      <h2>Domains of AI:</h2>
      <Accordion_list title="Computer Vision" content="Enables computers to interpret visual data like images and videos." />
      <Accordion_list title="Machine Learning" content="Allows computers to learn from data and improve performance over time." />
      <Accordion_list title="Natural Language Processing" content="Helps machines understand and generate human language." />
    </div>
  );
};

export default Accordian;
