
import GlobalStyle from "./styles/Global";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";

export default function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Search/>
      <GlobalStyle />
    </>
  );
}
