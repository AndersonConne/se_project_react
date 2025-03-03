import { useEffect, useState } from "react";

import "./App.css";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import RegisterModal from "../RegisterModal/RegisterModal";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Login from "../Login/Login";
import { signupUser, loginUser, checkToken } from "../../utils/auth";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile";
import { getItems, deleteItem, addItem } from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTempuratureUnit] = useState("F");
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setActiveModal("preview-garment");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleSignupClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggle = () => {
    setCurrentTempuratureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleLogin = (values) => {
    if (!values) {
      return;
    }

    return loginUser(values)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return checkToken(data.token);
      })
      .then((currentUser) => {
        setUserData(currentUser);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/profile");
      })
      .catch((err) => console.error(err));
  };

  const handleRegister = (values) => {
    return signupUser(values)
      .then((res) => {
        console.log(res);
        setUserData(res);
        setIsLoggedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleAddItemModalSubmit = (name, imageUrl, weather) => {
    addItem(name, imageUrl, weather)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDelete = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        console.log(items);
        setClothingItems(items.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          console.log(user);
          setUserData(user);
          isLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={userData}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggle }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              handleLoginClick={handleLoginClick}
              handleSignupClick={handleSignupClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      userData={userData}
                      onCardClick={handleCardClick}
                      handleButtonClick={handleAddClick}
                      clothingItems={clothingItems}
                      isLoggedIn={setIsLoggedIn}
                    />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>

            <Footer />
          </div>

          <AddItemModal
            onClose={closeActiveModal}
            isOpen={"add-garment"}
            activeModal={activeModal}
            handleAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            selectedCard={selectedCard}
            onClose={closeActiveModal}
            isOpen={"preview-garment"}
            onDelete={handleDelete}
          />
          <RegisterModal
            onClose={closeActiveModal}
            isOpen={"register"}
            activeModal={activeModal}
            handleRegister={handleRegister}
          />
          <Login
            onClose={closeActiveModal}
            isOpen={"login"}
            activeModal={activeModal}
            handleLogin={handleLogin}
          ></Login>
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
