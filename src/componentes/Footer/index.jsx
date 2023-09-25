import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.aluracursos.com/">
          <img src="/img/facebook.png" alt="Facebook logo" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/twitter.png" alt="Twitter logo" />
        </a>
        <a href="https://www.aluracursos.com/">
          <img src="/img/instagram.png" alt="Instagram logo" />
        </a>
      </div>
      <img src="/img/logo.png" alt="Org's logo" />
      <strong>Desarrollado por Alura</strong>
    </footer>
  );
};

export default Footer;
