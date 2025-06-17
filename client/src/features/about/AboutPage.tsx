import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "./errorApi";
import { useState } from "react";

export default function AboutPage() {
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [get400Error] = useLazyGet400ErrorQuery();
  const [get401Error] = useLazyGet401ErrorQuery();
  const [get404Error] = useLazyGet404ErrorQuery();
  const [get500Error] = useLazyGet500ErrorQuery();
  const [getValidationError] = useLazyGetValidationErrorQuery();

  const handleValidationError = async () => {
    try {
      await getValidationError().unwrap();
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof (error as { message: unknown }).message === "string"
      ) {
        const errorArray = (error as { message: string }).message.split(", ");
        setValidationErrors(errorArray);
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Typography gutterBottom variant="h3">
        Errors for testing
      </Typography>
      <ButtonGroup fullWidth>
        <Button
          variant="contained"
          onClick={() => get400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => get401Error().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => get404Error().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => get500Error().catch((err) => console.log(err))}
        >
          Test 500 Error
        </Button>

        <Button variant="contained" onClick={handleValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>
      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((err) => (
              <ListItem key={err}>{err}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
}
