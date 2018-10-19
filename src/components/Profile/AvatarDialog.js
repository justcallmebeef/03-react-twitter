import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AvatarDialog extends React.Component {
  state = {
    open: false,
    url: ''
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUpdate = () => {
    this.setState({ open: false });
    this.props.changeAvatar(this.state.url);
  }
  handleUrlChange = (e) => {
    this.setState({url : e.target.value })
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Change Avatar</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Change Avatar</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To update your avatar, input a valid image URL for the image.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="imageURL"
              label="Image URL"
              type="url"
              fullWidth
              value={this.state.url}
              onChange={this.handleUrlChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}