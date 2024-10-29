import { Typography } from "@mui/material";
function About() {

 return (
  <div  style={{height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
  <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
      <div>
          <Typography style={{color: "white", fontWeight: 500}} variant="h3" textAlign={"center"}>
            About Myself
          </Typography>
      </div>
  </div>
      
  </div>
)
}
export default About;
