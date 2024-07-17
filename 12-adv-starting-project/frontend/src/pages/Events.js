import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';
//this page must be rendered befor the request is sent
//we don't start sending request any earlier instead only once we reach this page
function EventsPage() {

  const events = useLoaderData(); 
  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  // const events = data.events;
  return (
    <>

  <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function  loader ()
{
  const response = await fetch('http://localhost:8080/eventskkjj');
  //And it's in this loader function where you can therefore load and fetch your data.
  //we don't need any state here and we can't
        if (!response.ok) {
        //...
        throw new Error('Could not fetch events.');
        } else {
          const resData = await response.json(); //we extract the data
          return resData.events;//this data will be automatically available in this page and any other component
        }

}