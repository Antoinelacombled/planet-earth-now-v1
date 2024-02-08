import axios from "axios";
import React, { useEffect, useState } from "react";

function EventRequest() {
  const baseURL = "https://api-planet-earth-now-98409e4028dd.herokuapp.com/api/events";
  const [eventDetails, setEventDetails] = useState({ date: "", location: "" });

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      
      const eventData = response.data.data[0].attributes;
      setEventDetails({
        date: eventData.date,
        location: eventData.location
      });
      console.log(eventData); 
    });
  }, []);

  if (!eventDetails.date) return "Chargement...";


}

export default EventRequest;
