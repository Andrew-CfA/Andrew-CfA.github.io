$.ajax({
    type     : "GET",
    url      : 'https://data.cityofnewyork.us/resource/au7q-njtk.json',
    dataType : 'json',
    success  : function(data) {

        data.forEach(function(post) {
            var td1 = $('<td />', {html : post.objectid}),
                td2 = $('<td />', {html : post.boro_name}), 
                td3 = $('<td />', {html : post.ifoaddress}), 
                td4 = $('<td />', {html : post.assetsubty}),
                td5 = $('<td />', {html : post.date_inst}),
                tr  = $('<tr />');
            $( '#bikeData' ).append( tr.append(td1, td2, td3, td4, td5,) );
        });
        let table = new DataTable('#bikeData');
    }
});


