
import React,{Fragment}from 'react';
import {TextField, Button, Container} from '@material-ui/core';
import {Card, CardHeader, CardContent} from '@material-ui/core';
import {Paper, withStyles, Grid} from '@material-ui/core';
// import NavigateNextIcon from '@material-ui/icons/NavigateNext';
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {Row, Col} from 'react-bootstrap';

function Profile({handleClickForward,handleChangeDescr,handleChangeFM,handleChangeLM,handleChangeEmail,handleChangePhone,handleChangeWeb,handleChangeGit,handleChangeLinked,value,submit,firstName}) {
  

    // function handleClickForward(e){
    //     e.preventDefault()
    //     {next};
    
    // }
    return (

        <Paper>
           
       
    <Card>
        <CardHeader title ="Your Personal Information"/>
    </Card>

    {/* <Fragment>
            <form onSubmit={submit}>
                <input
                type='text'
                
                onChange={handleChangeDescr}
                value={value.description}
        
                label="NEwFirst Name"/>
                <button>submit</button>
                </form> 
            </Fragment> */}
   <CardContent>
       <Grid container spacing={2} align items='center' lg={12}>
           <form className='d-flex mt-5'  onSubmit={submit}>
    <TextField
     value={value.description}
     
    label="First Name"
   
    onChange={handleChangeDescr}
   

    />
      <button>submit</button>
    </form>
    
    <Grid item md={6} sm={12} xs={12} lg={6}>
    <TextField
     value={value.lastName}
    label="Last Name"
    onChange={handleChangeLM}
    />
    </Grid>
  
    <Grid item md={6} sm={12} xs={12} lg={6}>
    <TextField
      value={value.email}
    label="Email"
     onChange={handleChangeEmail}
        
        />
        </Grid>
    <Grid item md={6} sm={12} xs={12} lg={6}>
    <TextField
      value={value.phone}
    label="Phone Number"
     onChange={handleChangePhone}
        
    />
    </Grid>

    <Grid item md={6} sm={12} xs={12} lg={6}>
    <TextField
      value={value.website}
    label="WebSite"
     onChange={handleChangeWeb}
        
        />
        </Grid>
     <Grid item md={6} sm={12} xs={12} lg={6}> 
    <TextField
      value={value.github}
    label="GitHub"
     onChange={handleChangeGit}
        
        />

</Grid>
<Grid item md={6} sm={12} xs={12} lg={6}> 
        <TextField
          value={value.linkedin}
        label="LinkedIn"
         onChange={handleChangeLinked}
        
        />
       
          </Grid>
       
        </Grid>
        <Button
        color='grey'
        onClick={handleClickForward}
        >
          NEXT
        </Button>

         
        </CardContent>
        </Paper>
    )
}

export default Profile
