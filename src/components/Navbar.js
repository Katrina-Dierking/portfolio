import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import  MobileRightMenuSlider  from '@material-ui/core/Drawer'
import {
  Avatar,
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon
 } from '@material-ui/core'


 import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
 } from '@material-ui/icons'

 // CSS STYLES

 const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%'
  },
  avatar: {
    display: "block",
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: 'tan'
  }
}))

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "Resume"
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contact"
  }
]

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  })

  const toggleSlider = (slider, open) => () => {
    setState ({...state, [slider]: open})
  }

  const styleClasses = useStyles()

  const sideMenu = slider => (

    <Box
      className = {styleClasses.menuSliderContainer}
      compoent = 'div'
      onClick = {toggleSlider(slider, false)}
      >
      <Avatar className = {styleClasses.avatar} src = '' alt = '' />
      <Divider/>
      <List>
       {menuItems.map((i, key)=> (
         <ListItem button key = {key}>
          <ListItemIcon className = {styleClasses.listItem}>{i.listIcon}</ListItemIcon>
          <ListItemText className = {styleClasses.listItem} primary = {i.listText} />
         </ListItem>
       ))}
      </List>
    </Box>
  )



  return (
    <>
      <Box component = "nav" >
        <AppBar position = "static" style = {{background: '#222'}}>
          <Toolbar>
            <IconButton onClick = {toggleSlider('right', true)}>
              <ArrowBack style = {{background: 'tomato'}}/>
            </IconButton>
            <Typography variant = "h5" style = {{color: 'tan'}}>Portfolio</Typography>
            <MobileRightMenuSlider
            open = {state.right}
            anchor = 'right'>
            {sideMenu('right')}


            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar
