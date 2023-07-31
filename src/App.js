import logo from './logo.svg';
import avatar1  from './assets/avatar/1.jpg';
import avatar2  from './assets/avatar/2.jpg';
import avatar3  from './assets/avatar/3.jpg';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
//floating button
import Fab from '@mui/material/Fab';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
//container
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
//multiline
import TextField from '@mui/material/TextField';
import { withStyles,makeStyles } from '@material-ui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
//counter
import  { useState, useEffect }  from "react";
import { Button, Typography,CardContent,Card } from "@mui/material";
import { useSpring, animated } from 'react-spring';

//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination,Autoplay ,Scrollbar} from 'swiper/modules';
import 'swiper/css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faTwitter,faFacebook }  from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons'

//tabmenu
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slide from '@mui/material/Slide';

//tabmenu

function HamburgerMenu() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', position: 'relative',padding:'2%',marginRight:'2%'}}>
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpen}>
      <FontAwesomeIcon icon={faBars} beat size="xl" style={{color: "#ffffff",}} />
      </IconButton>
      <Slide direction="left" in={open} mountOnEnter unmountOnExit>
        <Box sx={{ position: 'absolute', right: 48, top: 0, backgroundColor: 'transparent', zIndex: 1,marginTop:'2%',marginRight:'2%' }}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Talents" onClick={handleClose} style={{ color: 'white' }} />
            <Tab label="About" onClick={handleClose} style={{ color: 'white' }} />
            <Tab label="Contact" onClick={handleClose} style={{ color: 'white' }} />
            <Tab label="Help" onClick={handleClose} style={{ color: 'white' }} />
          </Tabs>
        </Box>
      </Slide>
    </Box>
  );
}


// Swiper
SwiperCore.use([Autoplay,Scrollbar]);
const comments = [
  { id: 1, content:  
   
  <div class="swiper-slide testimonial-box black">
  <h1>Perfect job</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- John Doe</p>
    <p class="designation">Founder, Arrow</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div>
},
  { id: 2, content:<div class="swiper-slide testimonial-box black">
  <h1>Minimal of time</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- Rocky Hych</p>
    <p class="designation">CTO, Upside Down</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar2} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 3, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Perfect Candidate</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- John Doe</p>
    <p class="designation">Founder, Arrow</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar3} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 4, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Just Perfect</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- Rocky Hych</p>
    <p class="designation">CTO, Upside Down</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 5, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Amazing response</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- John Doe</p>
    <p class="designation">Founder, Arrow</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar2} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 6, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Responsive template</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- Rocky Hych</p>
    <p class="designation">CTO, Upside Down</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar3} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 7, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Built with Bootstrap</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- John Doe</p>
    <p class="designation">Founder, Arrow</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar1} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 8, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Minimal and Clean</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- Rocky Hych</p>
    <p class="designation">CTO, Upside Down</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar2} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },
  { id: 9, content:                   <div class="swiper-slide testimonial-box black">
  <h1>Pixel Perfect design</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad </p>
  <div class="text-right">
    <p class="name">- John Doe</p>
    <p class="designation">Founder, Arrow</p>
    <Box display="flex" flexDirection="column" alignItems="center">
    <Avatar alt="Remy Sharp" src={avatar3} sx={{ width: 90, height: 90}}></Avatar>
    </Box>
  </div>
</div> },

];
const SwiperIndex = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      scrollbar={{ draggable: true }} // add the scrollbar here
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}
    >
      {comments.map((comment) => (
        <SwiperSlide key={comment.id}>
          <Card sx={{ }}>
            <CardContent>
            {comment.content}
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
//counters
//Counter1 Candidates
const GreenTextTypography = withStyles({
  root: {
    color: "#000000"
  }
})(Typography);
const Counter1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 3200) {
      const id = setTimeout(() => setCount(count + 5), 1);  // Increment by 5 every millisecond
      return () => clearTimeout(id);
    }
  }, [count]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: { duration: 500 }
  });

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
  };

  return (
    <div>
      <animated.div style={props}>
        <GreenTextTypography variant="h1">{formatCount(count)}</GreenTextTypography>
      </animated.div>
    </div>
  );
};
//counter2 Jobs
const Counter2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 875) {
      const id = setTimeout(() => setCount(count + 5), 1);  // Increment by 5 every millisecond
      return () => clearTimeout(id);
    }
  }, [count]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: { duration: 500 }
  });

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
  };

  return (
    <div>
      <animated.div style={props}>
        <GreenTextTypography variant="h1">{formatCount(count)}</GreenTextTypography>
      </animated.div>
    </div>
  );
};
//counter2 Jobs
const Counter3 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 65) {
      const id = setTimeout(() => setCount(count + 5), 1);  // Increment by 5 every millisecond
      return () => clearTimeout(id);
    }
  }, [count]);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    delay: 200,
    config: { duration: 500 }
  });

  const formatCount = (count) => {
    return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count;
  };

  return (
    <div>
      <animated.div style={props}>
        <GreenTextTypography variant="h1">{formatCount(count)}</GreenTextTypography>
      </animated.div>
    </div>
  );
};

//multiline
const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
      fontSize: '16px',
      borderRadius: '25px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
      borderRadius: '25px',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray',
        borderRadius: '25px',
      },
      '&:hover fieldset': {
        borderColor: 'black',
        borderRadius: '25px',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray',
        borderRadius: '25px',
      },
    },
  },
})(TextField);
function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {  width: '70%' },
      }}
      noValidate
      autoComplete="off"
    >  
        <CssTextField
          id="outlined-multiline-static"
          label="Job Description"
          multiline
          rows={4}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" >
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    border: '1px solid black',
                    ':hover': {
                      bgcolor: 'white',
                      color: 'black',
                      border: '1px solid black',
                    }
                  }} variant="outlined" startIcon={<SearchIcon />}>
                  find
                </Button>
              </InputAdornment>
            ),
          }}
        />
    </Box>
  );
}

//container
function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box sx={{ bgcolor: 'white'}} />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="heading black"><span class="black">Find</span> The Best Talents</h1>
           <MultilineTextFields/>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

//Floating button
function FloatingActionButtonExtendedSize() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended" color="black" aria-label="add" font-color="white">
       More about us
      </Fab>
    </Box>
  );
}

function App() {
  return (
    <div className="App">
      <header class="hero">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-6 col-xs-12">

                <HamburgerMenu/>

              <div class="hero-text">
                <h1><span>Talents</span>Finder</h1>
                <h3>Discover limitless talent</h3>
                <FloatingActionButtonExtendedSize />
                <ul class="social-links">
                  <li class="label">Join us &nbsp; </li>
                  <FontAwesomeIcon icon={faFacebook} beatFade size="lg" style={{color: "#ffffff",}} />&nbsp;
                  <FontAwesomeIcon icon={faTwitter} beatFade size="lg" style={{color: "#ffffff",}} />&nbsp;
                  <FontAwesomeIcon icon={faInstagram} beatFade size="lg" style={{color: "#ffffff" }} />
                </ul>

              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="case-study">
      <SimpleContainer />
      </section>

      <section class="testimonial">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="heading black"><span class="black">Client's</span> Testimonials</h1>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="swiper-container testimonial-swiper">
                <div class="swiper-wrapper">
                <SwiperIndex/>  
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="stats">
        <div class="container">
          <Box component="div"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}   >
            <div class="col-md-4 text-center stat-box">
              <Counter1/>  
              <h3>Candidates</h3>
            </div> 
            </Box>
            <Box component="div"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}   >
            <div class="col-md-4 text-center stat-box">
             <Counter2/>
              <h3>Jobs</h3>
            </div>   
            </Box>
            <Box component="div"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}   >
            <div class="col-md-4 text-center stat-box">
             <Counter3/>
              <h3>Companies</h3>
            </div>   
            </Box>
          </div>
      </section>
      <footer>
        <div class="container-fluid">

          <div class="row sub-footer">
            <div class="col-md-12 text-center">
              <p>Follow us on social media: </p>
              <Facebook className="icon" />
          <Twitter className="icon" />
          <Instagram className="icon" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
export { FloatingActionButtonExtendedSize };
export { SimpleContainer };
export { MultilineTextFields};
export { Counter1}
export { Counter2}
export { Counter3}
export { SwiperIndex}
export {HamburgerMenu}