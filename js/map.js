var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18NouPc0AcnQ4A2jWsTtcHqWU2vXd80cqZHpVTcBv4w8/edit?usp=sharing'

function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    simpleSheet: true,
    order: 'SiteID'
  })
}

function showInfo(data, tabletop) {
  var data = console.log(data)
}

window.addEventListener('DOMContentLoaded', init)