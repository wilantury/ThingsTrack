import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  "user":{},
  "services":{},
  "customer_things":[
    {"id":1,"thing_name":"Tin","address":"70 Meadow Vale Road","description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","lng_location":-74.086370,"lat_location":4.745412},
    {"id":2,"thing_name":"Zoolab","address":"5 Ryan Street","description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","lng_location":-74.096370,"lat_location":4.744412},
    {"id":3,"thing_name":"Tin","address":"764 Katie Crossing","description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.","lng_location":-74.076370,"lat_location":4.743412},
    {"id":4,"thing_name":"Home Ing","address":"1540 Heffernan Trail","description":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","lng_location":-74.066370,"lat_location":4.742412},
    {"id":5,"thing_name":"Overhold","address":"0211 Ohio Hill","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","lng_location":-74.056370,"lat_location":4.741412},
    {"id":6,"thing_name":"Aerified","address":"461 Anzinger Way","description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","lng_location":-74.046370,"lat_location":4.775412},
    {"id":7,"thing_name":"Zamit","address":"10 Vahlen Junction","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","lng_location":-74.036370,"lat_location":4.748412},
    {"id":8,"thing_name":"Quo Lux","address":"05587 Muir Street","description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","lng_location":-74.026370,"lat_location":4.750412},
    {"id":9,"thing_name":"Asoka","address":"2 Pond Pass","description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","lng_location":-74.016370,"lat_location":4.735412},
    {"id":10,"thing_name":"Rank","address":"0311 Golf View Avenue","description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","lng_location":-74.006370,"lat_location":4.765412},
  ]
}

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);