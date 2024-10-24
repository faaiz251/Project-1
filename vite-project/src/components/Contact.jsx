import { Button, Card , TextField, TextareaAutosize, Typography} from "@mui/material";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("") 
  const [message, setMessage] = useState("") 
 
 return (
<div><div style={{
                paddingTop: 50,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                Contact Us
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    onChange={(e) => {
                         setName(e.target.value);
                    }}
                    fullWidth={true}
                    label="Name"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setSubject(e.target.value);
                    }}
                    fullWidth={true}
                    label="Subject"
                    variant="outlined"
                    
                />
                <br/><br/>
                <TextareaAutosize
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
        minRows={5}  
        style={{
          width: '95%',
          height: '50px', 
          padding: '10px', 
          border: '1px solid #ddd', 
          borderRadius: '4px'
        }}
        placeholder="Write your Message Here!"
      />
               
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={async () => {
                        const res = await axios.post(``, {
                            //name
                            //email
                            //subject ....
                        }, {
                            headers: {
                                "Content-type": "application/json"
                            }
                        });
                        const data = res.data;
                        alert('Form Has been submitted Successfully!')
                       
                      
                        
                    }}

                > Send</Button>
            </Card>
        </div>
</div>
  );
}

export default Contact;