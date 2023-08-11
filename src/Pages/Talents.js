import "../assets/styles/style_help.css";
import TalentBox from "../Components/TalentBox";
import {    
          CardContent, 
          Card,
          InputAdornment,
          Button
        } from "@mui/material";
import Typography from "@mui/material/Typography";


const Talents = () => {
  const talentIds = [1, 2, 3, 4, 5];
  const handleClick = () => {
    // Your button click logic here
    console.log('Button clicked');
  };
  //const [id, setId] = useState(8); // Initial id
  return (
    <>
      <div>
        <h2 id="talent-title">Job description</h2>
      </div>
      <div className= "talents-container">
       <div className="talent search">
         <textarea name="finder" id="talent-text" cols="30" rows="10"></textarea>
         <Button id="talent-button" variant="contained" color="primary" onClick={handleClick}>
          Find
        </Button>
       </div>
       <div className= "talents-container">
       {talentIds.map(id => (
            <Card className="talent" key={id}>
              <CardContent>
                <Typography variant="h5" component="div">
                </Typography>
                <div>
                  <TalentBox id={id} />
                </div>
              </CardContent>
            </Card>
        ))}
        </div>
      </div>
    </>
  );
};

export default Talents;