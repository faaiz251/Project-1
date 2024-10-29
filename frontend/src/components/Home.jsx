import {Typography} from "@mui/material";
import { Grid2 }from "@mui/material";
import ContactSection from "./Address";
function Home() {
  return ( 
  <div>

<Grid2 container style={{padding: "5vw"}}>
            <Grid2 item xs={12} md={6} lg={6}>
                <div style={{marginTop: 10}}>
                 
                    <Typography variant={"h2"}>
                       Hello, and Welcome!
                    </Typography>
                    <hr></hr>
                    <Typography variant={"h5"}>
                   This website is my very first project as a full-stack developer, where I’m combining my skills and passion for web development. Here, you’ll find examples of my work, insights into my journey, and updates on the projects I'm currently working on. This site serves as both a showcase of my skills and a platform for sharing my growth as I build my career in tech.

Feel free to explore, check out my projects, and connect with me. I’m excited to have you here, and I look forward to sharing more of my work with you as I progress on this journey!                    </Typography>
                  
                  < br></br>
                  <Typography variant={"h5"}>
                       Well ,to know more about me scroll down to the bottom and connect with me.
                       <br/>
                       Also, Here is my GitHub Link to look up at my repositories!..
                       <br/><br/>

                       <a href="https://github.com/faaiz251" style= {{ color: '#3f51b5',
    textDecoration: 'none'}}>
                   My Github!
                  </a>
                    </Typography>
                </div>
                 
            </Grid2>
            
        </Grid2>

        
        <ContactSection></ContactSection>


    </div>
   
  )
}



export default Home;
