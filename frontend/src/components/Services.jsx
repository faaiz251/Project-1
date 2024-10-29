import { Button , Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
function Services ()  {
    const navigate = useNavigate();
  return <div style={{
    display: "flex",
    justifyContent: "space-between",
    padding: 4,
    zIndex: 1
}}>
    <div style={{marginLeft: 10, cursor: "pointer"}} onClick={() => {
        navigate("/")
    }}>
        <Typography variant={"h6"}>Coursera</Typography>
    </div>

    <div style={{display: "flex"}}>
        <div style={{marginRight: 10}}>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/about")
                }}
            >About</Button>
        </div>
        <div>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/")
                }}
            >Signin</Button>
        </div>
        <div>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/signin")
                }}
            >Signin</Button>
        </div>
        <div>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/signin")
                }}
            >Signin</Button>
        </div>
        <div>
            <Button
                variant={"contained"}
                onClick={() => {
                    navigate("/signin")
                }}
            >Signin</Button>
        </div>
    </div>
</div>
}

export default Services;
