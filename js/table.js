var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18NouPc0AcnQ4A2jWsTtcHqWU2vXd80cqZHpVTcBv4w8/edit?usp=sharing'

function init() {
Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true,
    order: 'SiteID'
})
}

function showInfo (data, tabletop) {
  console.log(data)

  document.querySelector('tbody').innerHTML = data.map(({SiteID, Site_Name, Region, Reach, Site_Type, Latitude, Longitude, Access_Notes_March, Access_Notes_July, Access_Notes_October }) => {
    return `
      <tr>
        <td>${SiteID}</td>
        <td>${Site_Name}</td>
        <td><a href="https://www.google.com/maps/place/@${Latitude},${Longitude},19z/data=!3m1!1e3" target="_blank">${Latitude}, ${Longitude}</a></td>
        <td>${Region}</td>
        <td>${Reach}</td>
        <td>${Site_Type}</td>
        <td>${Access_Notes_March}</td>
        <td>${Access_Notes_July}</td>
        <td>${Access_Notes_October}</td>
      </tr>
        `
  }).join('\n')
}

window.addEventListener('DOMContentLoaded', init)