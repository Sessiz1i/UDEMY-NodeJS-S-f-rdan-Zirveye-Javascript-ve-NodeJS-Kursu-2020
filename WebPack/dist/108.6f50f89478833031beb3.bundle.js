(self["webpackChunkwebpack_dersleri"] = self["webpackChunkwebpack_dersleri"] || []).push([[108],{

/***/ 108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "img": () => /* binding */ img
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// API


class UnsplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = "Client-ID rF2wdLVU9AQtry9YRjElvUGIMfmxaNymPWFhw_03OQI";
    this.axiosObj = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID
      },
      params: {
        query: "cat",
        lang: "tr",
        w: 300,
        location: "istanbul"
      }
    });
  }

  getRandImg() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var imgResponse = yield _this.axiosObj.get("/photos/random");
        console.log(imgResponse.data.urls.regular);
        return imgResponse.data.urls.regular;
      } catch (err) {
        console.log(err.response.data.errors[0]);
      }
    })();
  }

}

function img() {
  var getImg = new UnsplashApi().getRandImg();
  return getImg;
}

/***/ })

}]);