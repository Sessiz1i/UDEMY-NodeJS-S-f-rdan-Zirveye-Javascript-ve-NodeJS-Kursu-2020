(self["webpackChunkwebpack_dersleri"] = self["webpackChunkwebpack_dersleri"] || []).push([[846],{

/***/ 846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "translater": () => /* binding */ translater
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Google Translate API


class TranslateApi {
  constructor(enJoke) {
    this.baseURL = "https://translation.googleapis.com", this.enText = enJoke;
    this.axiosObj = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
      baseURL: this.baseURL,
      params: {
        target: "tr",
        key: "AIzaSyD0yJA398563ZiPyr5hAvQB_nbCo4aBEqw_",
        q: this.enText
      }
    });
  }

  getTranslate() {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        var translation = yield _this.axiosObj.get("/language/translate/v2");
        console.log(translation.data.data.translations[0].translatedText);
        return translation.data.data.translations[0].translatedText;
      } catch (err) {
        return err.response.data.error.message;
      }
    })();
  }

}

function translater(enJoke) {
  var getTrans = new TranslateApi(enJoke).getTranslate();
  return getTrans;
}

/***/ })

}]);