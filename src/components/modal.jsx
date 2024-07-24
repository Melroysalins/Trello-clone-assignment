import * as React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Height } from "@mui/icons-material";
import CustomizedSnackbars from "./snackBar";
import { taskValidation } from "../utils/taskValidation";
import { taskCreate } from "../services/taskCreate.api";
import { getAllTaskList } from "../services/getTaskList";
import { useDispatch } from "react-redux";
import { addUserTask } from "../store/taskSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  height: 450,
  borderRadius: "8px",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export default function TaskModal({ open, setOpen }) {
  const [taskheading, setTaskHeading] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [open2, setOpen2] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("success");
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSaveTask = async () => {
    let validateTask = taskValidation({ taskheading, description });

    if (validateTask.length) {
      setOpen2(true);
      setMessage(validateTask);
      setSeverity("error");
    } else {
      const result = await taskCreate({ taskheading, description });

      if (result?.status === 200) {
        setOpen(!open);
        setTaskHeading("");
        setDescription("");

        const result = await getAllTaskList();

        if (result?.status === 200) {
          dispatch(addUserTask(result?.taskList));
        }
      }
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              fontFamily: "serif",
            }}
          >
            Edit Task
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                value={taskheading}
                onChange={(e) => setTaskHeading(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ padding: "5px" }}
              />
            </Box>

            <Box
              sx={{
                marginTop: "140px",
                display: "flex",
                justifyContent: "flex-end",
                gap: "15px",
              }}
            >
              <button
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  background: "#CCC",
                  border: "1px solid whitesmoke",
                  borderRadius: "5px",
                }}
                onClick={() => handleSaveTask()}
              >
                Save
              </button>
              <button
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  background: "#cbcfd6",
                  border: "1px solid whitesmoke",
                  borderRadius: "5px",
                }}
                onClick={() => setOpen(!open)}
              >
                Cancel
              </button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <CustomizedSnackbars
        open={open2}
        setOpen={setOpen2}
        message={message}
        severity={severity}
      />
    </div>
  );
}
