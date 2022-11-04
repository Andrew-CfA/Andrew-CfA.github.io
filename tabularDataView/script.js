fetch("https://data.cityofnewyork.us/resource/au7q-njtk.json")
.then(function(response){
   return response.json();
})
.then(function(datas){
   let placeholder = document.querySelector("#dataOutput");
   let out = "";
   for(let data of datas){
      out += `
         <tr>
            <td>${data.objectid}>     </td>
            <td>${data.boro_name}         </td>
            <td>${data.assetsubty}        </td>
            <td>${data.date_inst}    </td>
         </tr>
      `;
   }
   placeholder.innerHTML = out;
});
