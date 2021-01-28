import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components'

export default function Settings() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const SettingsButton = styled.img` 
    position: absolute;
    bottom: 2vh;
    width: 1.5vw;
    opacity: 30%;
    padding: 0.5vw;
    margin-left: 0.25vw;
    float: left;
    transition: ease-in-out 0.2s;
    &:hover{
        opacity: 50%;
        transition: ease-in-out 0.2s;
        transform: scale(1.1);
        cursor: pointer;
    }
`

  return (
    <div>
      <SettingsButton src="./images/icons/settings.png" onClick={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Settings"}</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Button
          </Button>
          <FormControlLabel
            control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            }
            label="Theme"
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}