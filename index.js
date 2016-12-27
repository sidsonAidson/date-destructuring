module.exports = function (ms, monthDay) {
    let mscast = null;
    if(typeof ms == 'string')
    {
        mscast = Math.abs(Number(new Date(ms))) || 0;
    }
    else{
        mscast = Math.abs(Number(ms)) || 0;
    }
    monthDay = monthDay || 31;
    var d, h, m, s, mt, yr,$ms;
    s = Math.floor(mscast / 1000);
    $ms = mscast % 1000;
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    mt = Math.floor(d / monthDay);
    d = d % monthDay;
    yr = Math.floor(mt / 12);
    mt = mt % 12;

    return {
        microSeconds:$ms,
        seconds:s,
        minutes:m,
        hours:h,
        days:d,
        months:mt,
        years:yr
    };
};


