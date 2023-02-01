import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import background from "./background.jpg";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "./redux/images";
import { createImage } from "./redux/singleImage";

function App() {
  const [prompt, setPrompt] = useState("");
  const getTime = () => {};

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createImage(prompt));
  };

  // useEffect(() => {
  // getTime();
  //   dispatch(fetchImages());
  // }, []);

  const images = useSelector((state) => state.images);
  const singleImage = useSelector((state) => state.singleImage);
  return (
    <Box sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          height: "60%",
          position: "relative",
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1400, height: "100%" }}>
          <Box
            sx={{
              position: "relative",
              zIndex: 1400,
              flexGrow: 1,
              display: "flex",
              pt: 2,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="medium"
              color="#fff"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5%",
              }}
            >
              <DiamondIcon fontSize="large" sx={{ color: pink[500] }} />
              imagineAI
            </Typography>

            <Typography
              variant="h4"
              fontWeight="medium"
              color="#fff"
              sx={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "5%",
              }}
            >
              <AccessTimeFilledIcon fontSize="large" /> Time
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              right: 0,
              left: 0,
              top: 0,
              bottom: 0,
              margin: "auto",

              display: "flex",
              gap: "5%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="#fff">
              Generate your imagination into reality. <br /> Just one prompt
              away.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "1%",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                onChange={(e) => setPrompt(e.target.value)}
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
                sx={{
                  width: "50%",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                }}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Search
              </Button>
            </Box>

            {singleImage ? <img src={singleImage} alt={prompt} /> : <></>}
          </Box>
        </Container>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        />
      </Box>

      <Box padding="20px">
        <Container
          sx={{
            display: "flex",
            flexDirection: "flex-row",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight="medium">
            Previous Submissions
          </Typography>

          <Box sx={{ display: "grid" }}>
            {/* images.map((image) => {

          }) */}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
