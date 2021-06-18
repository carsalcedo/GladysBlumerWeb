import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { indigo } from "@material-ui/core/colors";
import { yellow } from "@material-ui/core/colors";


const theme = createMuiTheme({
    palette: {
      primary: {
          main: indigo[500]
      },
      secondary: {
          main: red[800]
      },
    },
  });
  
  export default theme;