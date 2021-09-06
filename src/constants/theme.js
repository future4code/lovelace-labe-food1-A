import { createTheme } from '@material-ui/core/styles';
import { primaryColor, secondaryColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "black"
    },
    secondary: {
      main: "#8E8E93"
    },
    text: {
      primary: secondaryColor
    }
  },
});

export default theme