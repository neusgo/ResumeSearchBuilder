import FloatingActionButtonExtendedSize from "./UI/FloatingActionButtonExtendedSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <header className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-6 col-xs-12">
            {/*<HamburgerMenu />*/}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                position: "relative",
                padding: "2%",
                marginRight: "2%",
              }}
            ></Box>
            <div className="hero-text">
              <h1>
                <span>Talents</span>Finder
              </h1>
              <h3>Discover limitless talent</h3>
              <FloatingActionButtonExtendedSize buttonText="More about us"  />
              <ul className="social-links">
                <li className="label">Join us &nbsp; </li>
                <FontAwesomeIcon
                  icon={faFacebook}
                  beatFade
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                &nbsp;
                <FontAwesomeIcon
                  icon={faTwitter}
                  beatFade
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                &nbsp;
                <FontAwesomeIcon
                  icon={faInstagram}
                  beatFade
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
