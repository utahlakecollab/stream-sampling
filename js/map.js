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
          <p><strong>Site ID:</strong> ${SiteID}</p>
          <p><strong>Reach</strong> ${Reach}</p>
          <p><strong>Site Name:</strong> ${Site_Name}</p>
          <p class="maps"><strong>Lat/Lon:</strong> <a href="https://www.google.com/maps/place/@${Latitude},${Longitude},19z/data=!3m1!1e3" target="_blank">${Latitude}, ${Longitude}</a></p>
          <p><strong>Region:</strong> ${Region}</p>
          <p><strong>Site Type:</strong> ${Site_Type}</p>
          <p><strong>Access Notes (March):</strong> ${Access_Notes_March}</p>
          <p><strong>Access Notes (July):</strong> ${Access_Notes_July}</p>
          <p><strong>Access Notes (October):</strong> ${Access_Notes_October}</p>
        `
      )
  })
}

window.addEventListener('DOMContentLoaded', init)