import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />

        <Meals />

        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}
// import { useRef, useState, useCallback } from "react";

// import Places from "./components/Places.jsx";
// import Modal from "./components/Modal.jsx";
// import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
// import logoImg from "./assets/logo.png";
// import AvailablePlaces from "./components/AvailablePlaces.jsx";
// import { updateUserPlaces } from "./http.js";
// import Error from "./components/Error.jsx";

// function App() {
//   const selectedPlace = useRef();

//   const [userPlaces, setUserPlaces] = useState([]);
//   const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState(); // za kt kje nema da moze usero da selektira mesta da mu se pojave error

//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   function handleStartRemovePlace(place) {
//     setModalIsOpen(true);
//     selectedPlace.current = place;
//   }

//   function handleStopRemovePlace() {
//     setModalIsOpen(false);
//   }

//   async function handleSelectPlace(selectedPlace) {
//     //it is updated whenever i select a place
//     //i don't wanna just update my state but i also wanna send my updated array of places to the backend
//     // it can be decorated with async because all we are doing that function is that we're setting it up as an event listener function
//     setUserPlaces((prevPickedPlaces) => {
//       if (!prevPickedPlaces) {
//         prevPickedPlaces = [];
//       }
//       if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
//         return prevPickedPlaces;
//       }
//       return [selectedPlace, ...prevPickedPlaces];
//     });

//     // i don't wanna just update this state but i also wanna send my updated array of places to the backend after we updated the state

//     try {
//       // updateUserPlaces(userPlaces); just using our old state name da funkcinira bidejki the state update will not immediately be available in this next line of code, it will be available after the component function executed the next time
//       await updateUserPlaces([selectedPlace, ...userPlaces]); //we should use our old state and extract old userPlaces into a new array here and then just updating the state
//     } catch (error) {
//       // ... when catching error i wanna re-set userPlaces again to the state they were before
//       setUserPlaces(userPlaces);
//       setErrorUpdatingPlaces({
//         message: error.message || "Failed to update places.",
//       });
//     }
//   }

//   const handleRemovePlace = useCallback(
//     async function handleRemovePlace() {
//       setUserPlaces((prevPickedPlaces) =>
//         prevPickedPlaces.filter(
//           (place) => place.id !== selectedPlace.current.id
//         )
//       );

//       try {
//         await updateUserPlaces(
//           userPlaces.filter((place) => place.id !== selectedPlace.id)
//         ); //filter out the place that has same ID as the selected place za u backend u update place da moze da se izbrise
//       } catch (error) {
//         setUserPlaces(userPlaces); // i wanna set userPlaces equal to the old userPlaces
//         setErrorUpdatingPlaces({
//           message: error.message || "Failed to delete place.",
//         });
//       }

//       setModalIsOpen(false);
//     },
//     [userPlaces]
//   );

//   function handleError() {
//     setErrorUpdatingPlaces(null);
//   }

//   return (
//     <>
//       <Modal open={errorUpdatingPlaces} onClose={handleError}>
//         {errorUpdatingPlaces && (
//           <Error
//             title="An error occuerred!"
//             message={errorUpdatingPlaces.message}
//             onConfirm={handleError}
//           />
//         )}
//       </Modal>
//       <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
//         <DeleteConfirmation
//           onCancel={handleStopRemovePlace}
//           onConfirm={handleRemovePlace}
//         />
//       </Modal>

//       <header>
//         <img src={logoImg} alt="Stylized globe" />
//         <h1>PlacePicker</h1>
//         <p>
//           Create your personal collection of places you would like to visit or
//           you have visited.
//         </p>
//       </header>
//       <main>
//         <Places
//           title="I'd like to visit ..."
//           fallbackText="Select the places you would like to visit below."
//           places={userPlaces}
//           onSelectPlace={handleStartRemovePlace}
//         />

//         <AvailablePlaces onSelectPlace={handleSelectPlace} />
//       </main>
//     </>
//   );
// }

export default App;
