"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ 98354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71061);
/* harmony import */ var _aztro_daily_horoscope_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3048);
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93504);
/* harmony import */ var _react_navigation_stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2784);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52322);









const Stack = (0,_react_navigation_stack__WEBPACK_IMPORTED_MODULE_5__["default"])();

const App = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style", {
      type: "text/css",
      children: `
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${__webpack_require__(70730)}) format('truetype');
        }
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${__webpack_require__(33111)}) format('truetype');
        }
      `
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
      store: _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.rootStore,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_react_navigation_native__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Stack.Navigator, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Stack.Screen, {
            name: "Zodiac Sign List",
            component: _aztro_daily_horoscope_ui__WEBPACK_IMPORTED_MODULE_1__.ZodiacSignListContainer
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Stack.Screen, {
            name: "Horoscope Card",
            component: _aztro_daily_horoscope_ui__WEBPACK_IMPORTED_MODULE_1__.HoroscopeCardContainer
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 65526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20272);
/* harmony import */ var react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2299);
/* harmony import */ var react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76493);
/* harmony import */ var react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98354);




react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_0___default().build({}, (react_native_web_dist_cjs_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2___default()));
react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3___default().registerComponent('main', () => _app_app__WEBPACK_IMPORTED_MODULE_1__["default"]);
react_native_web_dist_cjs_exports_AppRegistry__WEBPACK_IMPORTED_MODULE_3___default().runApplication('main', {
  rootTag: document.getElementById('root')
});

/***/ }),

/***/ 55723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockHoroscope": () => (/* reexport safe */ _lib_horoscope_mock__WEBPACK_IMPORTED_MODULE_2__.mockHoroscope),
/* harmony export */   "AdhZodiacSignList": () => (/* reexport safe */ _lib_zodiac_sign_list_const__WEBPACK_IMPORTED_MODULE_4__.AdhZodiacSignList),
/* harmony export */   "AdhZodiacSign": () => (/* reexport safe */ _lib_zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_5__.AdhZodiacSign)
/* harmony export */ });
/* harmony import */ var _lib_horoscope_day_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73476);
/* harmony import */ var _lib_horoscope_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71873);
/* harmony import */ var _lib_horoscope_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50858);
/* harmony import */ var _lib_zodiac_sign_item_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86126);
/* harmony import */ var _lib_zodiac_sign_list_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(25860);
/* harmony import */ var _lib_zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44718);







/***/ }),

/***/ 73476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 71873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 50858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockHoroscope": () => (/* binding */ mockHoroscope)
/* harmony export */ });
/* harmony import */ var _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44718);

const mockHoroscope = {
  currentDate: 'Jun 04, 2021',
  description: "Your fiery energy is pushing you onward and upward, and you feel too great to worry about the long-term. You can tell you're headed roughly in the right direction, and that's all that matters.",
  compatibility: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Libra,
  mood: 'Accomplished',
  color: 'Pink',
  luckyNumber: 92,
  luckyTime: '2am'
};

/***/ }),

/***/ 86126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 25860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdhZodiacSignList": () => (/* binding */ AdhZodiacSignList)
/* harmony export */ });
/* harmony import */ var _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44718);

const AdhZodiacSignList = [{
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Aries,
  icon: 'zodiac-aries'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Taurus,
  icon: 'zodiac-taurus'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Gemini,
  icon: 'zodiac-gemini'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Cancer,
  icon: 'zodiac-cancer'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Leo,
  icon: 'zodiac-leo'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Virgo,
  icon: 'zodiac-virgo'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Libra,
  icon: 'zodiac-libra'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Scorpio,
  icon: 'zodiac-scorpio'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Sagittarius,
  icon: 'zodiac-sagittarius'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Capricorn,
  icon: 'zodiac-capricorn'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Aquarius,
  icon: 'zodiac-aquarius'
}, {
  zodiacSign: _zodiac_sign_enum__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSign.Pisces,
  icon: 'zodiac-pisces'
}];

/***/ }),

/***/ 44718:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdhZodiacSign": () => (/* binding */ AdhZodiacSign)
/* harmony export */ });
let AdhZodiacSign;

(function (AdhZodiacSign) {
  AdhZodiacSign["Aries"] = "Aries";
  AdhZodiacSign["Taurus"] = "Taurus";
  AdhZodiacSign["Gemini"] = "Gemini";
  AdhZodiacSign["Cancer"] = "Cancer";
  AdhZodiacSign["Leo"] = "Leo";
  AdhZodiacSign["Virgo"] = "Virgo";
  AdhZodiacSign["Libra"] = "Libra";
  AdhZodiacSign["Scorpio"] = "Scorpio";
  AdhZodiacSign["Sagittarius"] = "Sagittarius";
  AdhZodiacSign["Capricorn"] = "Capricorn";
  AdhZodiacSign["Aquarius"] = "Aquarius";
  AdhZodiacSign["Pisces"] = "Pisces";
})(AdhZodiacSign || (AdhZodiacSign = {}));

/***/ }),

/***/ 67680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transfromAztroHoroscpeResponseToAdhHoroscope": () => (/* reexport safe */ _lib_aztro_horoscope_response_interface__WEBPACK_IMPORTED_MODULE_0__.transfromAztroHoroscpeResponseToAdhHoroscope),
/* harmony export */   "aztroService": () => (/* reexport safe */ _lib_aztro_service__WEBPACK_IMPORTED_MODULE_1__.aztroService)
/* harmony export */ });
/* harmony import */ var _lib_aztro_horoscope_response_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99971);
/* harmony import */ var _lib_aztro_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50179);



/***/ }),

/***/ 99971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "transfromAztroHoroscpeResponseToAdhHoroscope": () => (/* binding */ transfromAztroHoroscpeResponseToAdhHoroscope)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68995);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);


function transfromAztroHoroscpeResponseToAdhHoroscope(responose) {
  return {
    currentDate: responose.current_date,
    description: responose.description,
    compatibility: responose.compatibility,
    mood: responose.mood,
    color: responose.color,
    luckyNumber: parseInt(responose.lucky_number),
    luckyTime: responose.lucky_time
  };
}

/***/ }),

/***/ 50179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aztroService": () => (/* binding */ aztroService)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);


async function getHoroscope(zodiacSign, day) {
  const response = await fetch(`https://aztro.sameerkumar.website/?sign=${zodiacSign.toLowerCase()}&day=${day}`, {
    method: 'POST'
  });

  if (response.ok) {
    return response.json();
  }

  throw response;
}

const aztroService = {
  getHoroscope
};

/***/ }),

/***/ 71061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootStore": () => (/* reexport safe */ _lib_root_root_store__WEBPACK_IMPORTED_MODULE_2__.rootStore),
/* harmony export */   "HOROSCOPE_FEATURE_KEY": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.HOROSCOPE_FEATURE_KEY),
/* harmony export */   "fetchHoroscope": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.fetchHoroscope),
/* harmony export */   "horoscopeActions": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.horoscopeActions),
/* harmony export */   "horoscopeReducer": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.horoscopeReducer),
/* harmony export */   "horoscopeSelectors": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.horoscopeSelectors),
/* harmony export */   "horoscopeSlice": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.horoscopeSlice),
/* harmony export */   "initialHoroscopeState": () => (/* reexport safe */ _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__.initialHoroscopeState)
/* harmony export */ });
/* harmony import */ var _lib_models_loading_status_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9707);
/* harmony import */ var _lib_root_root_state_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71244);
/* harmony import */ var _lib_root_root_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37115);
/* harmony import */ var _lib_horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22568);





/***/ }),

/***/ 22568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOROSCOPE_FEATURE_KEY": () => (/* binding */ HOROSCOPE_FEATURE_KEY),
/* harmony export */   "fetchHoroscope": () => (/* binding */ fetchHoroscope),
/* harmony export */   "initialHoroscopeState": () => (/* binding */ initialHoroscopeState),
/* harmony export */   "horoscopeSlice": () => (/* binding */ horoscopeSlice),
/* harmony export */   "horoscopeReducer": () => (/* binding */ horoscopeReducer),
/* harmony export */   "horoscopeActions": () => (/* binding */ horoscopeActions),
/* harmony export */   "horoscopeSelectors": () => (/* binding */ horoscopeSelectors)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73439);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43105);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aztro_daily_horoscope_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67680);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);




const HOROSCOPE_FEATURE_KEY = 'horoscope';
const fetchHoroscope = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createAsyncThunk)('horoscope/fetchStatus', async ({
  zodiacSign,
  day
}, {
  rejectWithValue
}) => {
  try {
    const horoscopeResponse = await _aztro_daily_horoscope_services__WEBPACK_IMPORTED_MODULE_2__.aztroService.getHoroscope(zodiacSign, day);
    return (0,_aztro_daily_horoscope_services__WEBPACK_IMPORTED_MODULE_2__.transfromAztroHoroscpeResponseToAdhHoroscope)(horoscopeResponse);
  } catch (error) {
    return rejectWithValue({
      error
    });
  }
});
const initialHoroscopeState = {
  loadingStatus: 'not loaded'
};
const horoscopeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({
  name: HOROSCOPE_FEATURE_KEY,
  initialState: initialHoroscopeState,
  reducers: {
    setUserZodiacSignItem(state, action) {
      state.zodiacSignItem = action.payload;
    }

  },
  extraReducers: builder => {
    builder.addCase(fetchHoroscope.pending, state => {
      state.loadingStatus = 'loading';
    }).addCase(fetchHoroscope.fulfilled, (state, action) => {
      state.horoscope = action.payload;
      state.loadingStatus = 'loaded';
    }).addCase(fetchHoroscope.rejected, (state, action) => {
      state.loadingStatus = 'error';
      state.error = action.error.message;
    });
  }
});
/*
 * Export reducer for store configuration.
 */

const horoscopeReducer = horoscopeSlice.reducer;
const horoscopeActions = Object.assign({
  fetchHoroscope
}, horoscopeSlice.actions);

const getHoroscopeState = rootState => rootState[HOROSCOPE_FEATURE_KEY];

const getUserZodiacItem = rootState => getHoroscopeState(rootState).zodiacSignItem;

const getUserZodiac = rootState => {
  var _getUserZodiacItem;

  return (_getUserZodiacItem = getUserZodiacItem(rootState)) == null ? void 0 : _getUserZodiacItem.zodiacSign;
};

const getUserHoroscope = rootState => getHoroscopeState(rootState).horoscope;

const getHoroscopeLoadingStatus = rootState => getHoroscopeState(rootState).loadingStatus;

const horoscopeSelectors = {
  getUserZodiacItem,
  getUserZodiac,
  getUserHoroscope,
  getHoroscopeLoadingStatus
};

/***/ }),

/***/ 9707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 82635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialRootState": () => (/* binding */ initialRootState)
/* harmony export */ });
/* harmony import */ var _horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22568);

const initialRootState = {
  horoscope: _horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_0__.initialHoroscopeState
};

/***/ }),

/***/ 71244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 52852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18717);
/* harmony import */ var _horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22568);


const rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  horoscope: _horoscope_horoscope_slice__WEBPACK_IMPORTED_MODULE_0__.horoscopeSlice.reducer
});

/***/ }),

/***/ 37115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootStore": () => (/* binding */ rootStore)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17073);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _root_state_initial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82635);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52852);




const isDevelopment = "production" === 'development';
const rootStore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({
  reducer: _root_reducer__WEBPACK_IMPORTED_MODULE_2__.rootReducer,
  middleware: getDefaultMiddleware => isDevelopment ? getDefaultMiddleware().concat((redux_logger__WEBPACK_IMPORTED_MODULE_0___default())) : getDefaultMiddleware(),
  devTools: isDevelopment,
  preloadedState: _root_state_initial__WEBPACK_IMPORTED_MODULE_1__.initialRootState
});


/***/ }),

/***/ 3048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoroscopeCard": () => (/* reexport safe */ _lib_horoscope_card_horoscope_card__WEBPACK_IMPORTED_MODULE_0__.HoroscopeCard),
/* harmony export */   "HoroscopeCardContainer": () => (/* reexport safe */ _lib_horoscope_card_horoscope_card__WEBPACK_IMPORTED_MODULE_0__.HoroscopeCardContainer),
/* harmony export */   "ZodiacSignList": () => (/* reexport safe */ _lib_zodiac_sign_list_zodiac_sign_list__WEBPACK_IMPORTED_MODULE_1__.ZodiacSignList),
/* harmony export */   "ZodiacSignListContainer": () => (/* reexport safe */ _lib_zodiac_sign_list_zodiac_sign_list__WEBPACK_IMPORTED_MODULE_1__.ZodiacSignListContainer)
/* harmony export */ });
/* harmony import */ var _lib_horoscope_card_horoscope_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10331);
/* harmony import */ var _lib_zodiac_sign_list_zodiac_sign_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70206);



/***/ }),

/***/ 37457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStateToProps": () => (/* binding */ mapStateToProps),
/* harmony export */   "mapDispatchToProps": () => (/* binding */ mapDispatchToProps)
/* harmony export */ });
/* harmony import */ var _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71061);


const mapStateToProps = state => {
  return {
    zodiacItem: _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.horoscopeSelectors.getUserZodiacItem(state),
    horoscope: _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.horoscopeSelectors.getUserHoroscope(state),
    loadingStatus: _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.horoscopeSelectors.getHoroscopeLoadingStatus(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserHoroscope(zodiacSign, day) {
      dispatch(_aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.horoscopeActions.fetchHoroscope({
        zodiacSign,
        day
      }));
    }

  };
};



/***/ }),

/***/ 10331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HoroscopeCard": () => (/* binding */ HoroscopeCard),
/* harmony export */   "HoroscopeCardContainer": () => (/* binding */ HoroscopeCardContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2784);
/* harmony import */ var react_native_web_dist_cjs_exports_ActivityIndicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12864);
/* harmony import */ var react_native_web_dist_cjs_exports_ActivityIndicator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_ActivityIndicator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58236);
/* harmony import */ var react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_native_web_dist_cjs_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94931);
/* harmony import */ var react_native_web_dist_cjs_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60461);
/* harmony import */ var react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76493);
/* harmony import */ var react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82773);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4792);
/* harmony import */ var _horoscope_card_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37457);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52322);












function HoroscopeCard({
  zodiacItem,
  horoscope,
  loadingStatus,
  getUserHoroscope
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (zodiacItem != null && zodiacItem.zodiacSign) {
      getUserHoroscope(zodiacItem.zodiacSign, 'today');
    }
  }, [zodiacItem, getUserHoroscope]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_native_web_dist_cjs_exports_SafeAreaView__WEBPACK_IMPORTED_MODULE_7___default()), {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_native_web_dist_cjs_exports_ScrollView__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Card, {
        children: [zodiacItem && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: zodiacItem == null ? void 0 : zodiacItem.icon,
              size: 40
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
            children: zodiacItem == null ? void 0 : zodiacItem.zodiacSign
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Card.Divider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
          h4: true,
          style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.w100, react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.tc],
          children: "Your Horoscope for Today"
        }), loadingStatus === 'loaded' && horoscope ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2, react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.f4],
            children: horoscope.description
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2],
            children: ["Mood: ", horoscope.mood]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2],
            children: ["Color: ", horoscope.color]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2],
            children: ["Compatibility: ", horoscope.compatibility]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2],
            children: ["Lucky Number: ", horoscope.luckyNumber]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
            style: [react_native_style_tachyons__WEBPACK_IMPORTED_MODULE_2__.styles.mt2],
            children: ["Lucky Time: ", horoscope.luckyTime]
          })]
        }) : loadingStatus === 'error' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_1__.Text, {
          h2: true,
          children: "Oops! Something went wrong. Please try agian."
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_native_web_dist_cjs_exports_ActivityIndicator__WEBPACK_IMPORTED_MODULE_9___default()), {
          size: "large"
        })]
      })
    })
  });
}
const HoroscopeCardContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(_horoscope_card_props__WEBPACK_IMPORTED_MODULE_5__.mapStateToProps, _horoscope_card_props__WEBPACK_IMPORTED_MODULE_5__.mapDispatchToProps)(HoroscopeCard);

/***/ }),

/***/ 27762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapDispatchToProps": () => (/* binding */ mapDispatchToProps)
/* harmony export */ });
/* harmony import */ var _aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71061);


const mapDispatchToProps = dispatch => {
  return {
    setUserZodiacSignItem(zodiacSignItem) {
      dispatch(_aztro_daily_horoscope_store__WEBPACK_IMPORTED_MODULE_0__.horoscopeActions.setUserZodiacSignItem(zodiacSignItem));
    }

  };
};



/***/ }),

/***/ 70206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZodiacSignList": () => (/* binding */ ZodiacSignList),
/* harmony export */   "ZodiacSignListContainer": () => (/* binding */ ZodiacSignListContainer)
/* harmony export */ });
/* harmony import */ var _aztro_daily_horoscope_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55723);
/* harmony import */ var _react_navigation_native__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25702);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2784);
/* harmony import */ var react_native_web_dist_cjs_exports_FlatList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2485);
/* harmony import */ var react_native_web_dist_cjs_exports_FlatList__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_native_web_dist_cjs_exports_FlatList__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_native_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60461);
/* harmony import */ var react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82773);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4792);
/* harmony import */ var _zodiac_sign_list_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27762);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52322);










function ZodiacSignList({
  setUserZodiacSignItem
}) {
  const navigation = (0,_react_navigation_native__WEBPACK_IMPORTED_MODULE_7__.useNavigation)();

  const keyExtractor = item => item.zodiacSign;

  const zodiacListItemPress = item => {
    navigation.navigate('Horoscope Card');
    setUserZodiacSignItem(item);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react_native_web_dist_cjs_exports_FlatList__WEBPACK_IMPORTED_MODULE_8___default()), {
    testID: "zodiac-sign-list",
    keyExtractor: keyExtractor,
    data: _aztro_daily_horoscope_models__WEBPACK_IMPORTED_MODULE_0__.AdhZodiacSignList,
    renderItem: ({
      item
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_native_elements__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
      bottomDivider: true,
      onPress: () => zodiacListItemPress(item),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_vector_icons_MaterialCommunityIcons__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: item.icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_2__.ListItem.Content, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_2__.ListItem.Title, {
          children: item.zodiacSign
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_native_elements__WEBPACK_IMPORTED_MODULE_2__.ListItem.Chevron, {})]
    })
  });
}
const ZodiacSignListContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(null, _zodiac_sign_list_props__WEBPACK_IMPORTED_MODULE_5__.mapDispatchToProps)(ZodiacSignList);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(65526)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map