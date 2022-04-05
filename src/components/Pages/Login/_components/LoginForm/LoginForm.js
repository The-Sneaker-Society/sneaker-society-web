import {
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  TextField,
  createTheme,
  ThemeProvider,
  InputBase,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import { ReactComponent as Logo } from "../../../../../assets/SS Logo.svg";
import styled from "@emotion/styled";
import { pink, white } from "@mui/material/colors";

const CustomIconButton = styled(IconButton)({
  fontSize: 22,
});

export const LoginForm = () => {
  return (
    <Box width="100%" height="100%" bgcolor="black">
      <Stack
        height="100%"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Stack alignItems="center" spacing={2}>
          <Logo height="80%" />

          <Typography variant="h7" fontWeight="bold" color="white">
            Welcome to the best online sneaker community!
          </Typography>
        </Stack>

        <Typography variant="h6" fontWeight={500} color="white" gutterBottom>
          Sign in with
        </Typography>
        <Stack direction="row" spacing={5} pb={4}>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <GoogleIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <FacebookIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
          <Box
            bgcolor="white"
            justifyContent="center"
            alignItems="center"
            display="flex"
            p={1}
          >
            <CustomIconButton>
              <TwitterIcon fontSize="inherit" />
            </CustomIconButton>
          </Box>
        </Stack>

        <Divider
          style={{ width: "80%", background: "white", height: ".1rem" }}
        />

        <Box component="form" autoComplete="off" noValidate width="50%">
          <Stack textAlign="start" pb={2}>
            <Typography fontWeight="bold" color="white">
              Email
            </Typography>
            <InputBase
              sx={{
                flex: 1,
                backgroundColor: "white",
                width: "100%",
                p: 1,
              }}
              placeholder="Email"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Stack>
          <Stack textAlign="start">
            <Typography fontWeight="bold" color="white">
              Password
            </Typography>
            <InputBase
              sx={{
                flex: 1,
                backgroundColor: "white",
                width: "100%",
                p: 1,
              }}
              placeholder="Password"
              type="password"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            pt={2}
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "white",
                    "&.Mui-checked": {
                      color: "white",
                    },
                  }}
                />
              }
              label={
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  Remember Me
                </Typography>
              }
            />
            <Typography fontWeight="500" color="white">
              Forgot Password
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};