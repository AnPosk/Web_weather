import React from "react";


const Form = (props) => (
	<form onSubmit={props.WeatherMethod}>
     	 <input type="text" name="city" placeholder="Your city name" />
     	 <button>Search</button>
      </form> )



export default Form;
