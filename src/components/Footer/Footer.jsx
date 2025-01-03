import "../Footer/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__name">Developed by Anderson Conner</p>
      <p className="footer__year">{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;