import {Typography} from "@mui/material";
import { Grid2 }from "@mui/material";

function Home() {
  return ( 
  <div>

<Grid2 container style={{padding: "5vw"}}>
            <Grid2 item xs={12} md={6} lg={6}>
                <div style={{marginTop: 10}}>
                 
                    <Typography variant={"h2"}>
                       Home Page
                    </Typography>
                    <hr></hr>
                    <Typography variant={"h5"}>
                    I'm Mohd Faaiz Azeem, currently on my journey to becoming a full-stack developer. I've completed courses in MongoDB, Express.js, React.js, Next.js, JavaScript, HTML, and CSS. I enjoy building user-friendly and efficient web applications, focusing on writing clean and simple code. Right now, I'm working on developing my personal website from scratch while continuing to expand my skills.
                    </Typography>
                  
                </div>
                <div>
                </div>
            </Grid2>
            
        </Grid2>


    </div>
   
  )
}



export default Home;
