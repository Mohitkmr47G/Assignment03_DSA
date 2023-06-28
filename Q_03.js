var transpose = function(a) {
    const  res = []
    for(let i  = 0 ; i <a[0].length ;i++){
        const d = []
        for(let j = 0 ; j < a.length ; j++){
            d.push(a[j][i])
        }
        res.push(d)
    }
    return res
};
