import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navlogo from "./assets/Cine.png";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = ({ setMovies, setError }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const API_KEY = "42297024f346a26f4287021dcc26a0a1";
  const BASE_URL = "https://api.themoviedb.org/3";

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await fetch(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        );
        const data = await response.json();
        setMovies(data.results);
        setError(null);
        navigate("/search");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const handleTrending = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
      );
      const data = await response.json();
      const trendingMovies = data.results.filter(
        (movie) => movie.popularity > 2000
      );
      setMovies(trendingMovies);
      setError(null);
      navigate("/trending");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="nav-position">
      <nav className="navbar bg-dark navbar-dark ">
        <div className="container-fluid">
          <img
            className="navbar-brand"
            src={Navlogo}
            alt=""
            style={{ height: "50px", width: "200px" }}
          />
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleHome();
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleTrending();
                }}
              >
                Trending
              </a>
            </li>
          </ul>
          <Box
            sx={{ color: "white" }}
            component="form"
            onSubmit={handleSearch}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Search>
          </Box>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
