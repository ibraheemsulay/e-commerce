import Box from "@mui/material/Box";
import InputField from "../../../others/input-field/InputField";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { FC, memo } from "react";
import Btn from "../../../others/btn/Btn";

import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

const ForgotPassword: FC<ForgotPasswordProps> = ({ routeToPasswordPage }) => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          component="h4"
          variant="h4"
          textAlign="center"
          color="secondary.main"
        >
          Reset Password
        </Typography>
        <ButtonBase
          onClick={routeToPasswordPage}
          sx={{
            position: "absolute",
            top: "2%",
            right: "2%",
            color: "secondary.main",

            "&:hover": {
              color: "secondary.dark",
            },
          }}
        >
          <CancelOutlinedIcon />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Container maxWidth="xs" sx={{ display: "block" }}>
          <InputField placeholder="Email" />
        </Container>
        <Box sx={{ display: "block" }}>
          <Btn
            sx={{
              mt: 3,
              px: 6,
            }}
          >
            Submit
          </Btn>
          <Typography
            component="p"
            sx={{
              fontSize: 14,
              mt: 3,
              mx: "auto",
              maxWidth: "50ch",
            }}
          >
            A new password will be sent to your email to login. You are advised
            to change this password after logging in
          </Typography>
        </Box>
      </Grid>
    </>
  );
};

interface ForgotPasswordProps {
  routeToPasswordPage: () => void;
}

export default memo(ForgotPassword);
