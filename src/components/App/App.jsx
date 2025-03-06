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
import {
  getItems,
  deleteItem,
  addItem,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [userData, setUserData] = useState(null);
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

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleToggle = () => {
    setCurrentTempuratureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  function handleLogin(email, password) {
    loginUser(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        const token = localStorage.getItem("jwt");
        checkToken(token);
      })
      .then((res) => {
        console.log(res);
        setUserData(res);
        setIsLoggedIn(true);
      })
      .catch((err) => console.error(err));
    closeActiveModal();
  }

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
    const token = localStorage.getItem("jwt");
    addItem(name, imageUrl, weather, token)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleEditProfile = (name, avatar) => {
    const token = localStorage.getItem("jwt");
    editProfile(name, avatar, token)
      .then((res) => {
        setUserData(res);
        closeActiveModal();
      })
      .catch((err) => console.error(err));
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            console.log(updatedCard);
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    setUserData(null);
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
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
        setClothingItems(items.data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((user) => {
          setUserData(user);
          setIsLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }
  }, [isLoggedIn]);

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
              isLoggedIn={isLoggedIn}
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
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
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
                      handleEditProfileClick={handleEditProfileClick}
                      handleSignOut={handleSignOut}
                      selectedCard={selectedCard}
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
          />

          <EditProfileModal
            onClose={closeActiveModal}
            isOpen={"edit-profile"}
            activeModal={activeModal}
            handleEditProfile={handleEditProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
