(function ($) {

    var options = {
    // Reserved and disabled seats are indexed
    // from left to right by starting from 0.
    // Given the seatmap as a 2D array and an index [R, C]
    // the following values can obtained as follow:
    // I = columns * R + C
    map: {
        id: 'map-container',
        rows: 20,
        columns: 20,
        // e.g. Reserved Seat [Row: 1, Col: 2] = 7 * 1 + 2 = 9
        reserved: {
            seats: [1, 2, 3, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21],
        },
        disabled: {
            seats: [],
            rows: [4],
            columns: []
        }
    },
    types: [
        { type: "regular", backgroundColor: "#006c80", price: 10, selected: [23, 24] },
        { type: "reduced", backgroundColor: "#287233", price: 7.5, selected: [25, 26] }
    ],
    cart: {
        id: 'cart-container',
        width: 280,
        height: 250,
        currency: '£',
    },
    legend: {
        id: 'legend-container',
    },
    assets: {
        path: "./assets",
    }
};

var sc = new Seatchart(options);
})(jQuery);