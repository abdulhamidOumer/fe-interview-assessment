import "./App.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { Form, Field } from "react-final-form";

interface FormData {
  rating: "good" | "bad" | "neutral";
}

function App() {
  const handleFormSubmit = (values: FormData) => {
    alert(`Form submitted: ${values.rating}`);
  };

  return (
    <>
      <Form<FormData>
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>Bayzat Frontend assessment</h1>
            <h3>Rating system</h3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rating</InputLabel>
              <Field
                name="rating"
                render={({ input, meta }) => (
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Rating"
                    {...input}
                    errorMessage={
                      meta.error && meta.touched ? meta.error : null
                    }
                    error={!!(meta.error && meta.touched)}
                  >
                    <MenuItem value="good">Good</MenuItem>
                    <MenuItem value="neutral">Neutral</MenuItem>
                    <MenuItem value="Bad">Bad</MenuItem>
                  </Select>
                )}
              />
            </FormControl>

            <Button sx={{ mt: 1 }} fullWidth variant="contained" type="submit">
              Submit
            </Button>
          </form>
        )}
      />
    </>
  );
}

export default App;
