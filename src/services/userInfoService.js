const axios = require("axios");
const { response } = require("express");
const config = require("../config");


function getUserInfo(token) {
    return axios({
        method: "get",
        url: `${config.apiUrl}/user`,
        headers: {
          'Authorization': "token " + token,             
        },
    })    
  }

module.exports = {
  getUserInfo: getUserInfo
}
