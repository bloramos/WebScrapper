
var arr_atm=JSON.parse(document.getElementById('atm_var').value);var DYNAMIC_S_ACCOUNT=arr_atm.AccountName;var DYNAMIC_S_CURRENCYCODE=arr_atm.CurrencyCode;
;

var atmP=JSON.parse(decodeURIComponent(arr_atm.Properties).replace(/\+/g,' '));if(atmP!==null)_m.ATM.properties=atmP;var atmR=JSON.parse(decodeURIComponent(arr_atm.RegisteredConfigs).replace(/\+/g,' '));if(atmR!==null){var configs=atmR["configs"];for(var config in configs){_m.ATM.registerConfig(configs[config]);}}
_m.ATM.pageName=arr_atm.PageName;_m.ATM.version=arr_atm.Version;_m.ATM.appID=arr_atm.AppID;_m.ATM.channelID=arr_atm.ChannelID;_m.ATM.countryID=arr_atm.CountryID;_m.ATM.appConfig={version:arr_atm.AppConfig['Version'],appID:arr_atm.AppConfig['AppID'],channelID:arr_atm.AppConfig['ChannelID'],countryID:arr_atm.AppConfig['CountryID']};_m.ATM.runOnLoad=arr_atm.RunOnLoad;(function(){if(typeof _m.ATM.initFromOnReady==='function'){_m.ATM.initFromOnReady();}else{setTimeout(function(){if(typeof _m.ATM.initFromOnReady==='function'){_m.ATM.initFromOnReady();}else{$(document).ready(_m.ATM.initFromOnReady);}},200);}})();
;
