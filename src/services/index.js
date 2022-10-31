
import axios from 'axios';

function loginUser (Username, Password){
    console.log(`Request: ${Username} ${Password}`);
    var axios = require('axios');
      var data = JSON.stringify({
        TenDangNhap: action.payload.Username,
        MatKhau: action.payload.Password,
      });
      var config = {
        method: 'post',
        url: 'https://donhang.vnpost.vn/api/api/MobileAuthentication/GetAccessToken',
        headers: {
          'Content-Type': 'application/json',
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          let token = JSON.stringify(response.data.Token).toString();
          return token;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
}

export default {
    loginUser,
  };