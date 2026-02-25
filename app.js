document.addEventListener('DOMContentLoaded', function () {

    const prices = {
        "Package #1 (online) - Price: $549.00 + Cert Fee: $30 + HST: 13%": 654.27,
        "Package #2 (online) - Price: $699.00 + Cert Fee: $30 + HST: 13%": 823.77,
        "Package #3 (online) - Price: $999.00 + Cert Fee: $30 + HST: 13%": 1162.77,
        "Package #4 (online) - Price: $1,999.00 + Cert Fee: $30 + HST: 13%": 2292.77,

        "Package #1 virtual (zoom) - Price: $699.00 + Cert Fee: $30 + HST: 13%": 823.77,
        "Package #2 virtual (zoom) - Price: $899.00 + Cert Fee: $30 + HST: 13%": 1049.77,
        "Package #3 virtual (zoom) - Price: $1,099.00 + Cert Fee: $30 + HST: 13%": 1275.77,

        "Individual Training And Testing For G2 - 1 Hour Lesson - Price: $50.00 + HST: 13%": 56.5,
        "Individual Training And Testing For G2 - 1 Hour Lesson And Road Test - Price: $150.00 + HST: 13%": 169.5,
        "Individual Training And Testing For G2 - 2 Hours Lesson And Road Test - Price: $200.00 + HST: 13%": 226,
        "Individual Training And Testing For G2 - 3 Hours Lesson And Road Test - Price: $250.00 + HST: 13%": 282.5,
        "Individual Training And Testing For G2 - 4 Hours Lesson And Road Test - Price: $300.00 + HST: 13%": 339,
        "Individual Training And Testing For G2 - 5 Hours Lesson And Road Test - Price: $330.00 + HST: 13%": 372.9,
        "Individual Training And Testing For G2 - 10 Hours Lesson And Road Test - Price: $550.00 + HST: 13%": 621.5,

        "Individual Training And Testing For G - 1 Hour Lesson - Price: $60.00 + HST: 13%": 67.8,
        "Individual Training And Testing For G - 1 Hour Lesson And Road Test - Price: $190.00 + HST: 13%": 214.7,
        "Individual Training And Testing For G - 2 Hours Lesson And Road Test - Price: $250.00 + HST: 13%": 282.5,
        "Individual Training And Testing For G - 3 Hours Lesson And Road Test - Price: $300.00 + HST: 13%": 339,
        "Individual Training And Testing For G - 4 Hours Lesson And Road Test - Price: $360.00 + HST: 13%": 406.8,
        "Individual Training And Testing For G - 5 Hours Lesson And Road Test - Price: $400.00 + HST: 13%": 452
    };

    const service = document.getElementById('service');
    const total = document.getElementById('total');

    document.addEventListener('change', function (e) {

        // update total
        if (e.target && e.target.id === 'service') {
            const selected = e.target.value;
            if (prices[selected] !== undefined) {
                total.value = '$' + prices[selected].toFixed(2);
            }
        }
    });

});