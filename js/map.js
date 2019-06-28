var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18NouPc0AcnQ4A2jWsTtcHqWU2vXd80cqZHpVTcBv4w8/edit?usp=sharing'

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true
  })
}

function showInfo(data, tabletop) {
  console.log(data)
  window.data = data
  data.forEach(({ SiteID, Site_Name, Region, Reach, Site_Type, Latitude, Longitude, Access_Notes_March, Access_Notes_July, Access_Notes_October }) => {
    L.marker([Latitude, Longitude], {
      // color: 'white'
    }).addTo(mymap)
      .bindPopup(
        `
        <div class="container">
        <div class="row">
          <div class="col">
            <p><strong>Site ID</strong><br />
              ${SiteID}
          </div>

          <div class="col">
            <p><strong>Reach</strong><br />
              ${Reach}</p>
          </div>
        </div>
        <div class="row">
          <p><strong>Site Name</strong><br />
              ${Site_Name}</p>
        </div>
        
        <p><strong>Lat/Lon</strong><br />
          <a href="https://www.google.com/maps/place/@${Latitude},${Longitude},19z/data=!3m1!1e3" target="_blank">${Latitude},
            ${Longitude}</a></p>
      
        <div class="row">
          <div class="col">
            <p><strong>Region</strong><br />
              ${Region}</p>
          </div>
      
          <div class="col">
            <p><strong>Site Type</strong><br />
              ${Site_Type}</p>
          </div>
        </div>
      
        <details>Access Notes (March)</strong><br />
        <details>${Access_Notes_March}</details>
      
        <strong>Access Notes (July)</strong><br />
        <details>${Access_Notes_July}</details>
        <strong>Access Notes (October)</strong><br />
        <details>${Access_Notes_October}</details>
        </div>
      </div>
        `
      )
  })
}

window.addEventListener('DOMContentLoaded', init)