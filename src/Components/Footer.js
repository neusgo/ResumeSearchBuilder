import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row sub-footer">
          <div className="col-md-12 text-center">
            <p>Follow us on social media: </p>
            <Facebook className="icon" />
            <Twitter className="icon" />
            <Instagram className="icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
