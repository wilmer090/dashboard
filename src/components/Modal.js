import React, {useState, useRef, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DataTableModal from './DataTableModal'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



export default function TransitionsModal({isModalOpen, props}) {
  console.log('props', props)
  console.log('isModal',isModalOpen)
  const classes = useStyles();
  const initialRender = useRef(true)
  const [open, setOpen] = useState(false);
  console.log('open', open)

  const handleOpen = () =>{
      setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
    if(initialRender.current){
        initialRender.current = false
    }else{
        handleOpen()
    }
    
  }, [isModalOpen])
  return (
     
    <div>
      {/* <button type="button" onClick={handleOpen}>
        react-transition-group
      </button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <DataTableModal props={props}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}