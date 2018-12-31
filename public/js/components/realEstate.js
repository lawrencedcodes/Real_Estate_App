webpackJsonp([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '405 Canvasback Drive',
    city: 'San Mateo',
    state: 'CA',
    rooms: '4',
    price: 553000,
    floorSpace: '3500 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Colonial',
    image: 'https://cdn20.patchcdn.com/users/22877169/20171109/115455/styles/T800x600/public/processed_images/b0f4067cc3e8b6bb5672a90bb5857e66l-m0o.jpg'
}, {
    address: '9 Matts Drive',
    city: 'San Francisco',
    state: 'CA',
    rooms: '3',
    price: 443000,
    floorSpace: '2500 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Tudor',
    image: 'https://cdn.vox-cdn.com/thumbor/5sQUgzPgBfro_asIMTpSSaeJOgM=/192x0:3302x2333/1200x900/filters:focal(192x0:3302x2333)/cdn.vox-cdn.com/uploads/chorus_image/image/54630217/carroll_1.0.0.jpg'
}, {
    address: '3209 Willow Creek',
    city: 'Oakland',
    state: 'CA',
    rooms: '2',
    price: 253000,
    floorSpace: '1700 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Colonial',
    image: 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2018/06/house-los-angeles-getty.jpg'
}, {
    address: '85 Mine Valley Circle',
    city: 'Sacramento',
    state: 'CA',
    rooms: '4',
    price: 553000,
    floorSpace: '3500 sq ft',
    amenities: ['Swimming Pool', 'gym'],
    homeType: 'Victorian',
    image: 'https://amp.businessinsider.com/images/572cec5352bcd022008c166e-750-563.jpg'
}, {
    address: '344 Mallory Drive',
    city: 'Palo Alto',
    state: 'CA',
    rooms: '4',
    price: 553000,
    floorSpace: '3500 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Colonial',
    image: 'https://photos.zillowstatic.com/p_e/ISij2ikzmnnbdq1000000000.jpg'
}, {
    address: '1810 Countsdale St',
    city: 'Redwood City',
    state: 'CA',
    rooms: '3',
    price: 443000,
    floorSpace: '2500 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Tudor',
    image: 'https://cdn20.patchcdn.com/users/22877169/20171109/115455/styles/T800x600/public/processed_images/b0f4067cc3e8b6bb5672a90bb5857e66l-m0o.jpg'
}, {
    address: '49 W Midline Circle',
    city: 'Oakland',
    state: 'CA',
    rooms: '2',
    price: 253000,
    floorSpace: '1700 sq ft',
    amenities: ['elevator', 'gym'],
    homeType: 'Colonial',
    image: 'http://www.nolahomes.net/wp-content/uploads/2013/02/Love-the-Natural-Wood-Door-and-Shutter-New-Orleans-Homes--1024x685.jpg'
}, {
    address: '9 Cabot Circle',
    city: 'Sacramento',
    state: 'CA',
    rooms: '4',
    price: 553000,
    floorSpace: '3500 sq ft',
    amenities: ['Swimming Pool', 'gym'],
    homeType: 'Victorian',
    image: 'https://cdn.vox-cdn.com/thumbor/i9lvXZ2RPM0O6ScrgF3YoGG-DG4=/38x0:625x440/1200x900/filters:focal(38x0:625x440)/cdn.vox-cdn.com/uploads/chorus_image/image/53622201/4.0.0.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var react = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_react$Component) {
    _inherits(Filter, _react$Component);

    function Filter() {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {
            return react.default.createElement(
                'section',
                { id: 'filter' },
                react.default.createElement(
                    'div',
                    { className: 'inside' },
                    react.default.createElement(
                        'h4',
                        null,
                        'Make Your Selection'
                    ),
                    react.default.createElement(
                        'select',
                        { name: 'neighborhood', className: 'filters neighborhood', onChange: this.props.change },
                        react.default.createElement(
                            'option',
                            { value: 'San Francisco' },
                            'San Francisco'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Oakland' },
                            'Oakland'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Sacramento' },
                            'Sacramento'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Palo Alto' },
                            'Palo Alto'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'San Mateo' },
                            'San Mateo'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Redwood City' },
                            'Redwood City'
                        )
                    ),
                    react.default.createElement(
                        'select',
                        { name: 'housetype', className: 'filters housetype', onChange: this.props.change },
                        react.default.createElement(
                            'option',
                            { value: 'Ranch' },
                            'Ranch'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Colonial' },
                            'Colonial'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Victorian' },
                            'Victorian'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Craftsman' },
                            'Craftsman'
                        ),
                        react.default.createElement(
                            'option',
                            { value: 'Tudor' },
                            'Tudor'
                        )
                    ),
                    react.default.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
                        react.default.createElement(
                            'option',
                            { value: '1' },
                            '1+'
                        ),
                        react.default.createElement(
                            'option',
                            { value: '2' },
                            '2+'
                        ),
                        react.default.createElement(
                            'option',
                            { value: '3' },
                            '3+'
                        ),
                        react.default.createElement(
                            'option',
                            { value: '4' },
                            '4+'
                        )
                    ),
                    react.default.createElement(
                        'div',
                        { className: 'filters price' },
                        react.default.createElement(
                            'span',
                            { className: 'title' },
                            'Price'
                        ),
                        react.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', onChange: this.props.change, value: this.props.globalState.min_price }),
                        react.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', onChange: this.props.change, value: this.props.globalState.max_price })
                    ),
                    react.default.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        react.default.createElement(
                            'span',
                            { className: 'title' },
                            'Floor Space'
                        ),
                        react.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min_floor_space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
                        react.default.createElement('input', { type: 'text', name: 'max_floor-space', className: 'max_floor_space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
                    ),
                    react.default.createElement(
                        'div',
                        { className: 'filters amenities' },
                        react.default.createElement(
                            'span',
                            { className: 'title' },
                            'Amenities'
                        ),
                        react.default.createElement(
                            'label',
                            { htmlfor: 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            react.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
                        ),
                        react.default.createElement(
                            'label',
                            { htmlfor: 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            react.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
                        ),
                        react.default.createElement(
                            'label',
                            { htmlfor: 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            react.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
                        ),
                        react.default.createElement(
                            'label',
                            { htmlfor: 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            react.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
                        )
                    )
                )
            );
        }
    }]);

    return Filter;
}(react.Component);

exports.default = Filter;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var react = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_react$Component) {
    _inherits(Header, _react$Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return react.default.createElement(
                'header',
                null,
                react.default.createElement(
                    'div',
                    { className: 'logo' },
                    'Sirius Realty'
                ),
                react.default.createElement(
                    'nav',
                    null,
                    react.default.createElement(
                        'a',
                        { href: '#' },
                        'Create Ads'
                    ),
                    react.default.createElement(
                        'a',
                        { href: '#' },
                        'About Us'
                    ),
                    react.default.createElement(
                        'a',
                        { href: '#' },
                        'Login'
                    ),
                    react.default.createElement(
                        'a',
                        { href: '#', className: 'register-btn' },
                        'Register'
                    )
                )
            );
        }
    }]);

    return Header;
}(react.Component);

exports.default = Header;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
    _inherits(Listings, _Component);

    function Listings() {
        _classCallCheck(this, Listings);

        var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

        _this.state = {
            name: 'Joe'
        };
        _this.loopListings = _this.loopListings.bind(_this);
        return _this;
    }

    _createClass(Listings, [{
        key: 'loopListings',
        value: function loopListings() {
            var listingsData = this.props.listingsData;

            return listingsData.map(function (listing, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'col-md-3', key: index },
                    _react2.default.createElement(
                        'div',
                        { className: 'listing' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing-img', style: {
                                    background: 'url("' + listing.image + '") no-repeat center center'
                                } },
                            _react2.default.createElement(
                                'span',
                                { className: 'address' },
                                listing.address
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'details' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-3' },
                                    _react2.default.createElement('div', { className: 'user-img' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-md-9' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'user-details' },
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'user-name' },
                                            'Nina Lockhart'
                                        ),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'post-date' },
                                            '12.23.18'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'listing-details' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'floor-space' },
                                            _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '21,000 ft\xB2'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'bedrooms' },
                                            _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                listing.bedrooms
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'view-btn' },
                                        'View Listing'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'bottom-info' },
                            _react2.default.createElement(
                                'span',
                                { className: 'price' },
                                '$',
                                listing.price
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'location' },
                                _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                listing.city,
                                ', ',
                                listing.state
                            )
                        )
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'listings' },
                _react2.default.createElement(
                    'section',
                    { className: 'search-area' },
                    _react2.default.createElement('input', { type: 'text', name: 'search' })
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'sort-by-area' },
                    _react2.default.createElement(
                        'div',
                        { className: 'results' },
                        '9 results found'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'sort-options' },
                        _react2.default.createElement(
                            'select',
                            { name: 'sort-by', className: 'sort-by' },
                            _react2.default.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Highest Price'
                            ),
                            _react2.default.createElement(
                                'option',
                                { value: 'price-asc' },
                                'Lowest Price'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'view' },
                            _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
                            _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
                        )
                    )
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'listings-results' },
                    this.loopListings()
                ),
                _react2.default.createElement(
                    'section',
                    { className: 'pagination' },
                    _react2.default.createElement(
                        'ul',
                        { className: 'pages' },
                        _react2.default.createElement(
                            'li',
                            null,
                            'Prev'
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'active' },
                            '1'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '2'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '3'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            '4'
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            'Next'
                        )
                    )
                )
            );
        }
    }]);

    return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(233);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(232);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(234);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(231);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'Lawrence',
            listingsData: _listingsData2.default,
            min_price: 0,
            max_price: 100000000,
            min_floor_space: 0,
            max_floor_space: 25000,
            elavator: false,
            swimming_pool: false,
            finished_basement: false,
            gym: false
        };
        _this.change = _this.change.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'change',
        value: function change(event) {
            var _this2 = this;

            var name = event.target.name;
            var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
            this.setState(_defineProperty({}, name, value), function () {
                console.log(_this2.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
                    _react2.default.createElement(_Listings2.default, { listingsData: this.state.listingsData })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);