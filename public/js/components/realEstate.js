webpackJsonp([0],{

/***/ 231:
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
                        { name: 'neighborhood', className: 'filters neighborhood' },
                        react.default.createElement(
                            'option',
                            null,
                            'San Francisco'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Oakland'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Sacramento'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Palo Alto'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'San Mateo'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Redwood City'
                        )
                    ),
                    react.default.createElement(
                        'select',
                        { name: 'housetype', className: 'filters housetype' },
                        react.default.createElement(
                            'option',
                            null,
                            'Ranch'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Colonial'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Victorian'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Craftsman'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            'Tudor'
                        )
                    ),
                    react.default.createElement(
                        'select',
                        { name: 'bedrooms', className: 'filters bedrooms' },
                        react.default.createElement(
                            'option',
                            null,
                            '1+'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            '2+'
                        ),
                        react.default.createElement(
                            'option',
                            null,
                            '3+'
                        ),
                        react.default.createElement(
                            'option',
                            null,
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
                        react.default.createElement('input', { type: 'text', name: 'min-price', className: 'min-price' }),
                        react.default.createElement('input', { type: 'text', name: 'max-price', className: 'max-price' })
                    ),
                    react.default.createElement(
                        'div',
                        { className: 'filters floor-space' },
                        react.default.createElement(
                            'span',
                            { className: 'title' },
                            'Floor Space'
                        ),
                        react.default.createElement('input', { type: 'text', name: 'min-floor-space', className: 'min-floor-space' }),
                        react.default.createElement('input', { type: 'text', name: 'max-floor-space', className: 'max-floor-space' })
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
                            { 'for': 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Elevators'
                            ),
                            react.default.createElement('input', { name: 'amenities', value: 'elevator', type: 'checkbox' })
                        ),
                        react.default.createElement(
                            'label',
                            { 'for': 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Swimming Pool'
                            ),
                            react.default.createElement('input', { name: 'amenities', value: 'swimming-pool', type: 'checkbox' })
                        ),
                        react.default.createElement(
                            'label',
                            { 'for': 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Finished Basement'
                            ),
                            react.default.createElement('input', { name: 'amenities', value: 'finished-basement', type: 'checkbox' })
                        ),
                        react.default.createElement(
                            'label',
                            { 'for': 'amenitites' },
                            react.default.createElement(
                                'span',
                                null,
                                'Gym'
                            ),
                            react.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox' })
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

/***/ 233:
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
        return _this;
    }

    _createClass(Listings, [{
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
                        '135 results found'
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
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    '9 St Claire Cv'
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
                                                    '6 bedrooms'
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
                                    '$8500 /month'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    'Sacramento, CA'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    '9 St Claire Cv'
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
                                                    '6 bedrooms'
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
                                    '$8500 /month'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    'Sacramento, CA'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    '9 St Claire Cv'
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
                                                    '6 bedrooms'
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
                                    '$8500 /month'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    'Sacramento, CA'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-3' },
                        _react2.default.createElement(
                            'div',
                            { className: 'listing' },
                            _react2.default.createElement(
                                'div',
                                { className: 'listing-img' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'address' },
                                    '9 St Claire Cv'
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
                                                    '6 bedrooms'
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
                                    '$8500 /month'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'location' },
                                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                                    'Sacramento, CA'
                                )
                            )
                        )
                    )
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

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(58);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(100);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(232);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(231);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(233);

var _Listings2 = _interopRequireDefault(_Listings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'section',
                    { id: 'content-area' },
                    _react2.default.createElement(_Filter2.default, null),
                    _react2.default.createElement(_Listings2.default, null)
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[237]);