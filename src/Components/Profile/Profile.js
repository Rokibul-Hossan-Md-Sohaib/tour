import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Avatar, TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(-1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const Profile = () => {
  const [user, setUser] = useState({ name: "", country: " ", file: "", massage: "", gender: "" ,
  date:"",Goal:"",interest:"",area:"",education:"",password:"",address:""});

  const { name, country, file, gender, massage,date ,Goal,interest,area,education,password,address} = user;
  const { register, handleSubmit } = useForm();
  const handleChange = (e) => {
    console.log(e.target.file)
    const fieldName = e.target.name;
    setUser({ ...user, [fieldName]: e.target.value })
  }

  // const handleFile = (e) => {
  //   setUser({ file: e.target.value, country, name })
  //   console.log(setUser)
  // }
  const onSubmit = (e) => {
    console.log(user)


  }
  const classes = useStyles();
  return (

    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={8} style={{ display: "block", marginRight: "auto", marginLeft: "auto" }}>
              <Paper className={classes.paper}> <MDBInput 
                label="Your name"
                icon="user"
                group type="text"
                validate error="wrong"
                success="right" 
                name="name"
                id="name"
                value={name}
                onChange={handleChange} /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}> <MDBInput 
              label="Your address"
               icon="user"
                group type="text" 
                validate error="wrong"
                success="right"
                 name="address"
                id="address"
                value={address}
                onChange={handleChange} /></Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}> <MDBInput 
              label="Your country" 
              icon="flag" 
              group type="text" 
              validate error="wrong"
              success="right" 
              name="country"
              id="country"
              value={country}
              onChange={handleChange} /> </Paper>

            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>   <TextField
              name="date" value={date} ref={register} 
               onChange={handleChange}
              id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              /></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}> <div>
                <select class="custom-select" name="gender" value={gender} ref={register} 
                                 onChange={handleChange} success="right" >
                  <option selected>Gender</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
              </div></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}> <div>
                <select class="custom-select" name="Goal" value={Goal} ref={register} 
                                 onChange={handleChange}  >
                  <option selected>Goals</option>
                  <option value="Individual Travelers">Individual Travelers</option>
                  <option value="Travelers family">Travelers family</option>
                  <option value="Boys group">Boys group</option>
                  <option value="Girls group">Girls group</option>
                  <option value="Couple Traveler">Couple Traveler</option>
                </select>
              </div></Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}> <div>
                <select class="custom-select" name="interest" value={interest} ref={register}
                               onChange={handleChange} success="right" >
                  <option selected>Personal Interest</option>
                  <option value="female">Music</option>
                  <option value="male">Traveling</option>
                  <option value="other">Movie</option>
                  <option value="other">Books</option>
                  <option value="other">Others</option>
                </select>
              </div></Paper>
            </Grid>
            <Grid item xs={6} sm={3} style={{ display: "block", marginTop: "25px", marginRight: "auto", marginLeft: "auto" }}>
              <Paper className={classes.paper}> <div>
                <select class="custom-select" name="area" value={area} ref={register} 
                              onChange={handleChange} success="right" >
                  <option selected>Personal Interest</option>
                  <option value="female">Art</option>
                  <option value="male">Heritage</option>
                  <option value="other">Night_Life</option>
                  <option value="other">Adventures</option>
                  <option value="other">Others</option>
                </select>
              </div></Paper>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Paper className={classes.paper}> <MDBInput 
                type="textarea"
               rows="2"
                label="Your Travel Motto"
                icon="pencil-alt" 
                name="massage"
                id="massage"
                value={massage}
                onChange={handleChange} /></Paper>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Paper className={classes.paper}> <MDBInput 
              group type="text" 
              label="Education" 
              icon="book-open" 
              name="education"
              id="education"
              value={education}
              onChange={handleChange} /></Paper>
            </Grid>
            <Grid item xs={12} sm={6} >
              <Paper className={classes.paper}>  <MDBInput 
                label="Your password"
                icon="lock"
                group type="password" 
                id="education"
                value={password}
                onChange={handleChange}
                /> </Paper>
            </Grid>

          </Grid>
          <div className="text-center">
                <MDBBtn outline color="secondary" type="submit">
                 Register
            <MDBIcon far icon="paper-plane" className="ml-1" />
                </MDBBtn>
              </div>
        </div>
      </form>
    </div>

  );
};
export default Profile;