import React, { Component } from "react";
import {
  Container,
  FormControl,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";


class Home extends Component {
  render() {
    return (
      <div>
        <Container style={{ marginTop: "50px" }}>
          <div
            style={{
              backgroundColor: "rgb(245, 0, 87)",
              padding: "10px",
              borderRadius: "6px",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
              marginBottom: "50px"
            }}
          >
            {/* <Typography>{login.message}</Typography> */}
          </div>
          <form method="get" action="/events" autoComplete="off">
            <FormControl fullWidth>
              <Input
                id="input-with-icon-adornment"
                name="title"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                }
              />
            </FormControl>
          </form>
        </Container>
        <Container style={{ marginTop: "20px" }}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
            color="secondary"
          >
            Category
          </Typography>
        </Container>
      </div>
    );
  }
}


export default Home;