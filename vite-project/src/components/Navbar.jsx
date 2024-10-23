import { Typography , Button} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
 const navigate = useNavigate();
  return  (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        padding: 4,
        zIndex: 1
    }}>

<div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
                navigate('/')
            }}>
                <Typography variant={"h6"}>My Website</Typography>
            </div>
    
  <div style={{display: "flex"}}>
        <div style={{marginRight: 10}}>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate ('/about')
                }}
            >About</Button>
        </div>
        <div style={{marginRight: 10}}>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/contact")
                }}
            >Contact</Button>
        </div>
        <div style={{marginRight: 10}}>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/portfolio")
                }}
            >Portfolio</Button>
        </div>
        <div style={{marginRight: 10}}>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/services")
                }}
            >Services</Button>
        </div>
    </div>
  </div>
);
}
export default Navbar;

