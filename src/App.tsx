import { Notification } from "./components/Notifications";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineTaskAlt } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function App(): JSX.Element {
  const handleunread = () => {
    console.log("handleunread");
  };

  const handlealreadyRead = () => {
    console.log("handlealreadyRead");
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh", padding: "20px" }}>
          <Notification.Root>
            <Notification.Icon icon={IoNotifications} />
            <Notification.Content text="teste" date="20/06/23 há 2min" />
            <Notification.WrapperAction>
              <Notification.Action
                button={
                  <Button
                    sx={{
                      minWidth: "fit-content",
                      height: "30px",
                      marginRight: "10px",
                    }}
                    variant="contained"
                    onClick={handleunread}
                  >
                    {<MdOutlineTaskAlt size={20} />}
                  </Button>
                }
              />

              <Notification.Action
                button={
                  <Button
                    sx={{ minWidth: "fit-content", height: "30px" }}
                    variant="outlined"
                    onClick={handlealreadyRead}
                  >
                    {<MdOutlineCancel size={20} />}
                  </Button>
                }
              />
            </Notification.WrapperAction>
          </Notification.Root>

          <Notification.Root>
            <Notification.Icon icon={IoNotifications} />
            <Notification.Content text="teste" date="20/06/23 há 2min" />
            <Notification.WrapperAction>
              <Notification.Action
                button={
                  <Button
                    sx={{
                      minWidth: "fit-content",
                      height: "30px",
                      marginRight: "10px",
                    }}
                    variant="contained"
                    onClick={handleunread}
                  >
                    {<MdOutlineTaskAlt size={20} />}
                  </Button>
                }
              />
            </Notification.WrapperAction>
          </Notification.Root>
        </Box>
      </Container>
    </>
  );
}

export default App;
