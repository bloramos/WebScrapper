joveo_dict={run_cm:true,run_fb:false,run_aw:false},xpath=function(e){for(var t=[],a=document.evaluate(e,document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),n=0;n<a.snapshotLength;n+=1)t.push(a.snapshotItem(n));return t},appendIframe=function(e){var t=document.createElement("div");t.setAttribute("id","conversion_container"),t.style.height="0px",t.style.width="0px",t.style.overflow="hidden";var a=document.createElement("iframe");a.setAttribute("src",e),a.setAttribute("frameborder","0"),a.setAttribute("height","0"),a.setAttribute("width","0"),a.setAttribute("noresize","0"),a.setAttribute("id","convframe"),a.setAttribute("name","convframe"),a.setAttribute("allowtransparency","true");var n=document.getElementsByTagName("script"),r=n[n.length-1];t.appendChild(a),r.parentNode.appendChild(t)},loadPage=function(){var e="";e="https://clickmeter.com/conversion.aspx?id=685CFD008BE94259A12016E42928B5A5",appendIframe(e);var t="";try{t=!!MONS_DATA_LAYER&&!!MONS_DATA_LAYER.jobId?MONS_DATA_LAYER.jobId:""}catch(e){}e="https://www.jometer.com/v2/track?c=e1uq&a=1&r="+t,appendIframe(e)},trackAdwords=function(){var e=document.getElementsByTagName("script")[0],t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=ADWORD_ID",t.onload=function(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","ADWORD_ID"),e("event", AW_CONVERSION_EVENT)},e.parentNode.insertBefore(t,e)},trackFacebook=function(){var e,t,a,n,r,o;e=window,t=document,a="script",e.fbq||(n=e.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)},e._fbq||(e._fbq=n),n.push=n,n.loaded=!0,n.version="2.0",n.queue=[],(r=t.createElement(a)).async=!0,r.src="https://connect.facebook.net/en_US/fbevents.js",(o=t.getElementsByTagName(a)[0]).parentNode.insertBefore(r,o)),fbq("init","1854684864788806"),fbq("track","JoveoApplicationComplete")},joveo_dict.run_cm?loadPage():false,joveo_dict.run_aw?trackAdwords():false,joveo_dict.run_fb?trackFacebook():false;