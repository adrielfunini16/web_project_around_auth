import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.cardDelete(card._id);
    setCards((state) =>
      state.filter((currentCard) => currentCard._id !== card._id),
    );
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .editProfileData(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .updateAvatar(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api
        .addNewCard(data)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
        handleAddPlaceSubmit,
      }}
    >
      <div className="page__content">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
