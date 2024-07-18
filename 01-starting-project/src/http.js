export async function fetchAvailablePlaces(){ //place data fetching code here

    //utility function that can be called to send that request and either get back an error or the places

    const response = await fetch("http://localhost:3000/places"); // u can use await with async keyword
    const resData = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch places");
    }

    return resData.places;
}

//function for updating the user places

export async function updateUserPlaces(places) { // expect to get an array of places that should be sent to the backend

   const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({places: places}), // to convert places array inyo JSON format
        headers: { // some extra medata attached to the request
            'Content-Type': 'application/json' // to inorm  backend that data attached to this request will be in JSON format
        }
    });

    const resData = await response.json(); // to get my response data and awaiting that

    if(!response.ok){
        throw new Error('Failed to update user data.') // i wanna throw a new error if response is not okay

    }

    return resData.message;

}