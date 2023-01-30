import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import background from "./background.jpg";

function App() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: "40vw",
        }}
      >
        <Container>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              pt: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" fontWeight="medium">
              <DiamondIcon fontSize="large" sx={{ color: pink[500] }} />
              imagineAI
            </Typography>

            <Typography variant="h4" fontWeight="medium">
              <AccessTimeFilledIcon fontSize="large" /> Time
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="e.g.: dog surfing on the moon."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              sx={{ width: "50%" }}
            />
            <Button>Search</Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
