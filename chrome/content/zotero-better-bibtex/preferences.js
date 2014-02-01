function updatePreferences(load) {
  console.log('better bibtex: updating prefs');
  var serverLabel = document.getElementById('id-zotero-better-bibtex-server');
  var serverAddress = document.getElementById('id-zotero-better-bibtex-server-address');

  var serverEnabled = document.getElementById('id-better-bibtex-preferences-server-enabled').checked;
  var serverPort = null;
  try {
    serverPort = Zotero.BetterBibTex.prefs.zotero.getIntPref('httpServer.port');
  } catch(err) {
    serverEnabled = false;
  }
  var url = 'http://localhost:' + serverPort + '/better-bibtex/collection/?';
  serverAddress.setAttribute('value', url);
  console.log('server: ' + serverEnabled + ' @ ' + url);

  serverAddress.setAttribute('hidden', !serverEnabled);
  serverLabel.setAttribute('hidden', !serverEnabled);

  if (false && Zotero.isStandalone) {
    var restartRequired = false;
    for (var option in Zotero.BetterBibTex.config) {
      restartRequired = restartRequired || (Zotero.BetterBibTex.config[option] != document.getElementById('id-zotero-better-bibtex-' + option).getAttribute('value'));
    }
    document.getElementById('id-zotero-better-bibtex-restart-required').setAttribute('hidden', restartRequired);
  }
}
