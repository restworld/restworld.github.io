window.Tilda=window.Tilda||{},function(){function e(){var e;8!==(e=-1!==(e=navigator.userAgent.toLowerCase()).indexOf("msie")&&parseInt(e.split("msie")[1]))&&9!==e||(e=document.querySelectorAll(".t-btn"),Array.prototype.forEach.call(e,(function(e){var t=e.getAttribute("href");e.querySelector("table")&&t&&-1===t.indexOf("#popup:")&&-1===t.indexOf("#price:")&&e.addEventListener("click",(function(e){var t=e.target.getAttribute("href");e.preventDefault(),window.location.href=t}))})));try{var t=document.getElementById("allrecords"),r=t?t.getAttribute("data-tilda-cookie"):null;t&&"no"===r||Tilda.saveUTM()}catch(e){}function a(e){if(e.target.closest("a.js-click-stat")||e.target.closest(".js-click-zero-stat")){var t=e.target.closest("a.js-click-stat")||e.target.closest(".js-click-zero-stat"),r=t.getAttribute("data-tilda-event-name"),a=t.textContent,i=t.getAttribute("href")||"",d=t.getAttribute("target");if(r||(r="/tilda/click/"+((t=t.closest(".r"))?t.getAttribute("id"):"")+"/?url="+i),Tilda.sendEventToStatistics(r,a),"http"===i.substring(0,4))return window.setTimeout((function(){var e="",t="";if("_blank"===d){if(-1!==i.indexOf("?")&&(i=(e=i.split("?"))[0],-1!==(e=e[1]).indexOf("#")&&(e=e.split("#"),i=i+"#"+e[1],e=e[0]),e=e.split("&")),document.getElementById("tildaredirectform")?(document.getElementById("tildaredirectform").setAttribute("method","GET"),document.getElementById("tildaredirectform").setAttribute("action",i)):document.body.insertAdjacentHTML("beforeend",'<form id="tildaredirectform" target="_blank" method="GET" action="'+i+'" style="display:none;"></form>'),t="",0<e.length)for(var r in e)(r=e[r].split("="))&&0<r.length&&(t+='<input type="hidden" name="'+r[0]+'" value="'+(r[1]||"")+'">');var a=document.getElementById("tildaredirectform");a&&(a.innerHTML=t,a.submit())}else window.location.href=i}),300),e.preventDefault(),!1}}e=document.querySelectorAll(".r"),Array.prototype.forEach.call(e,(function(e){e.removeEventListener("click",a),e.addEventListener("click",a)})),t=document.querySelectorAll("input.js-amount"),Array.prototype.forEach.call(t,(function(e){var t=(t=e.value).replace(/,/g,".");t=parseFloat(t.replace(/[^0-9\.]/g,"")),e.value=t}))}Tilda.sendEcommerceEvent=function(e,t){if(void 0===t||0===t.length)return!1;if(void 0===e||"add"!==e&&"remove"!==e&&"purchase"!==e&&"detail"!==e)return!1;for(var r,a,i,d="",c=0,o=[],n="",m="",l="",u=0;u<t.length;u++){""<d&&(d+=", "),d+=(i=t[u]).name,c+=i.price,a="",void 0!==i.options&&0<i.options.length&&Array.prototype.forEach.call(i.options,(function(e){a+=e.option+": "+e.variant+"; "}));var s={name:i.name,price:i.price,variant:a,quantity:1};i.id&&0<i.id&&(id=i.id,s.id=i.id),i.uid&&0<i.uid&&(m=i.uid,s.uid=i.uid),i.recid&&0<i.recid&&(n=i.recid,s.recid=i.recid),i.lid&&0<i.lid&&(l=i.lid,s.lid=i.lid),i.sku&&0<i.sku&&(s.sku=i.sku),o[o.length]=s}"add"!==e&&"remove"!==e||(r="/tilda/cart/"+e+"/",0<n&&(r+=""+n),0<m?r+="-u"+m:0<l&&(r+="-"+l)),"detail"===e&&(r="/tilda/product/detail/",0<m?r+=m+"/":(0<n&&(r+="r"+n),0<l&&(r+="-l"+l))),"purchase"===e&&(r="/tilda/rec"+n+"/payment/"),(s={ecommerce:{}}).ecommerce[e]={products:o},Tilda.sendEventToStatistics(r,d,s,c)},Tilda.sendEventToStatistics=function(e,t,r,a){var i,d="/"===e.substring(0,1),c=[],o=!(!(o=(g=document.getElementById("allrecords"))?null!==g.getAttribute("data-fb-event")?g.getAttribute("data-fb-event"):void 0!==$("#allrecords").data("fb-event")?$("#allrecords").data("fb-event"):null:o)||"nosend"!==o),n=g?g.getAttribute("data-vk-event"):null,m=(n=!(!(n=g?null!==g.getAttribute("data-vk-event")?g.getAttribute("data-vk-event"):void 0!==$("#allrecords").data("vk-event")?$("#allrecords").data("vk-event"):null:n)||"nosend"!==n),document.querySelector(".t706")),l=g.getAttribute("data-tilda-currency")?g.getAttribute("data-tilda-currency"):m&&m.getAttribute("data-project-currency-code")?m.getAttribute("data-project-currency-code"):"RUB";if(r=r||window.location.href,0<(a=a?parseFloat(a):0))if(window.dataLayer||(window.dataLayer=[]),-1!==e.indexOf("/tilda/")&&-1!==e.indexOf("/payment/")&&window.tildaForm&&""<window.tildaForm.orderIdForStat)r={ecommerce:{purchase:{actionField:{id:window.tildaForm.orderIdForStat,revenue:window.tildaForm.amountForStat},products:window.tildaForm.arProductsForStat}}},window.tildaForm.tildapayment&&window.tildaForm.tildapayment.promocode&&(r.ecommerce.purchase.actionField.coupon=window.tildaForm.tildapayment.promocode),r.event="purchase";else if(r&&r.ecommerce&&(r.ecommerce.add&&r.ecommerce.add.products?c=r.ecommerce.add.products:r.ecommerce.remove&&r.ecommerce.remove.products?c=r.ecommerce.remove.products:r.ecommerce.detail&&r.ecommerce.detail.products&&(c=r.ecommerce.detail.products),c&&0<c.length)){for(var u=0;u<c.length;u++)c[u].id||(c[u].sku?c[u].id=c[u].sku:c[u].uid?c[u].id=c[u].uid:c[u].recid&&c[u].lid&&(c[u].id=c[u].recid+"_"+c[u].lid));r.ecommerce.add&&r.ecommerce.add.products?(r.ecommerce.add.products=c,r.event="addToCart"):r.ecommerce.remove&&r.ecommerce.remove.products?(r.ecommerce.remove.products=c,r.event="removeFromCart"):r.ecommerce.detail&&r.ecommerce.detail.products?(r.ecommerce.detail.products=c,r.event="viewProduct"):(d?(r.event="pageView",r.eventAction=e):r.event=e,r.title=t,r.value=a)}void 0!==window.dataLayer&&(d?0<a?r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:"pageView",eventAction:e,title:t,value:a,product:r}):window.dataLayer.push({event:"pageView",eventAction:e,title:t,referer:r}):r&&r.ecommerce?window.dataLayer.push(r):window.dataLayer.push({event:e,eventAction:t,value:a,referer:r}));try{if(window.gtagTrackerID&&"gtag"===window.mainTracker)if(d)if(r&&r.event)if("purchase"===r.event){c=r.ecommerce.purchase.products;for(var s=0,p=0;p<c.length;p++)if("delivery"===c[p].id){s=c[p];break}gtag("event","purchase",{transaction_id:r.ecommerce.purchase.actionField.id,value:parseFloat(a).toFixed(2),currency:l,shipping:s,items:r.ecommerce.purchase.products})}else"addToCart"===r.event&&r.ecommerce.add?gtag("event","add_to_cart",{items:r.ecommerce.add.products}):"removeFromCart"===r.event&&r.ecommerce.remove?gtag("event","remove_from_cart",{items:r.ecommerce.remove.products}):"viewProduct"===r.event&&r.ecommerce.detail&&gtag("event","view_item",{items:r.ecommerce.detail.products});else window.gtagTrackerID&&-1!==window.gtagTrackerID.indexOf("UA-")?gtag("config",window.gtagTrackerID,{page_title:t,page_path:e}):gtag("event",window.gtagTrackerID,{page_title:t,page_path:e,send_to:window.gtagTrackerID});else gtag("event",e,{event_category:"tilda",event_label:t,value:a})}catch(e){}if(window.ga&&"tilda"!==window.mainTracker&&"gtag"!==window.mainTracker)if(d)if(r&&r.event){try{if(window.Tilda.isLoadGAEcommerce||(window.Tilda.isLoadGAEcommerce=!0,ga("require","ec")),ga("set","currencyCode",l),"purchase"===r.event){var w=r.ecommerce.purchase.products.length;for(p=0;p<w;p++)_=r.ecommerce.purchase.products[p],ga("ec:addProduct",{id:_.id||p,name:_.name,price:parseFloat(_.price).toFixed(2),quantity:_.quantity});ga("ec:setAction","purchase",{id:r.ecommerce.purchase.actionField.id,revenue:parseFloat(a).toFixed(2)})}else if("addToCart"===r.event&&r.ecommerce.add){for(w=r.ecommerce.add.products.length,p=0;p<w;p++)_=r.ecommerce.add.products[p],ga("ec:addProduct",{id:_.id||p,name:_.name,price:parseFloat(_.price).toFixed(2),quantity:_.quantity});ga("ec:setAction","add")}else if("removeFromCart"===r.event&&r.ecommerce.remove){for(w=r.ecommerce.remove.products.length,p=0;p<w;p++)_=r.ecommerce.remove.products[p],ga("ec:addProduct",{id:_.id||p,name:_.name,price:parseFloat(_.price).toFixed(2),quantity:_.quantity});ga("ec:setAction","remove")}else if("viewProduct"===r.event&&r.ecommerce.detail){for(w=r.ecommerce.detail.products.length,p=0;p<w;p++)_=r.ecommerce.detail.products[p],ga("ec:addProduct",{id:_.id||p,name:_.name,price:parseFloat(_.price).toFixed(2),quantity:_.quantity});ga("ec:setAction","detail")}}catch(e){}ga("send",{hitType:"pageview",page:e,title:t,params:r})}else ga("send",{hitType:"pageview",page:e,title:t});else ga("send",{hitType:"event",eventCategory:"tilda",eventAction:e,eventLabel:t,eventValue:a});if(window.mainMetrikaId&&0<window.mainMetrikaId&&"function"==typeof ym&&(d?(i={title:t},0<a&&(i.params={order_price:a},l&&(i.params.currency=l)),ym(window.mainMetrikaId,"hit",e,i)):0<a?(i={order_price:a},l&&(i.currency=l),ym(window.mainMetrikaId,"reachGoal",e,i)):ym(window.mainMetrikaId,"reachGoal",e)),""<window.mainMetrika&&window[window.mainMetrika]&&(d?0<a?window[window.mainMetrika].hit(e,{title:t,order_price:a,params:r}):window[window.mainMetrika].hit(e,{title:t}):0<a?window[window.mainMetrika].reachGoal(e,{title:t,params:r,order_price:a}):window[window.mainMetrika].reachGoal(e,{title:t,referer:r})),void 0!==window.fbq&&0==o)try{if(d)if(-1===e.indexOf("tilda/")||-1===e.indexOf("/payment/")&&-1===e.indexOf("/submitted/"))if(r&&r.event&&0<a)if("addToCart"===r.event&&r.ecommerce.add){w=r.ecommerce.add.products.length;var v=[];for(p=0;p<w;p++)_=r.ecommerce.add.products[p],v.push(_.id||_.uid||_.name);window.fbq("track","AddToCart",{content_ids:v,content_type:"product",value:a,currency:l})}else if("viewProduct"===r.event&&r.ecommerce.detail){for(w=r.ecommerce.detail.products.length,v=[],p=0;p<w;p++)_=r.ecommerce.detail.products[p],v.push(_.id||_.uid||_.name);window.fbq("track","ViewContent",{content_ids:v,content_type:"product",value:a,currency:l})}else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else e.indexOf("tilda/popup"),window.fbq("track","ViewContent",{content_name:t,content_category:e});else 0<a&&l?window.fbq("track","InitiateCheckout",{content_name:t,content_category:e,value:a,currency:l}):window.fbq("track","Lead",{content_name:t,content_category:e});else window.fbq("track",e,{content_name:t,value:a})}catch(e){}if(void 0!==window.VK&&void 0!==window.VK.Retargeting&&0==n)try{if(d){var g,f=(g=document.getElementById("allrecords"))?g.getAttribute("data-vk-price-list-id"):null,h=f&&parseInt(f)||0,y="",k=!1;if(r&&r.event)if(k={products:[],currency_code:"",total_price:0},"purchase"===r.event&&r.ecommerce.purchase)if(0<a&&0<h){for(k.currency_code=l,w=r.ecommerce.purchase.products.length,v=[],p=0;p<w;p++)_=r.ecommerce.purchase.products[p],k.products.push({id:_.id||_.uid||_.name,price:_.price||0}),k.total_price=a;y="init_checkout"}else y="t-purchase";else if("addToCart"===r.event&&r.ecommerce.add)if(0<a&&0<h){for(k.currency_code=l,w=r.ecommerce.add.products.length,v=[],p=0;p<w;p++)_=r.ecommerce.add.products[p],k.products.push({id:_.id||_.uid||_.name,price:_.price||0}),k.total_price=a;y="add_to_cart"}else y="t-add-to-cart",r.ecommerce.add[0]&&r.ecommerce.add[0].uid&&(y+="-"+r.ecommerce.add[0].uid);else if("viewProduct"===r.event&&r.ecommerce.detail)if(0<a&&0<h){for(k.currency_code=l,w=r.ecommerce.detail.products.length,v=[],p=0;p<w;p++)_=r.ecommerce.detail.products[p],k.products.push({id:_.id||_.uid||_.name,price:_.price||0}),k.total_price=a;y="view_product"}else y="t-view-product",r.ecommerce.detail[0]&&r.ecommerce.detail[0].uid&&(y+="-"+r.ecommerce.detail[0].uid);else if("removeFromCart"===r.event&&r.ecommerce.remmove)if(0<a&&0<h){k.currency_code=l;var _;for(w=r.ecommerce.remove.products.length,v=[],p=0;p<w;p++)_=r.ecommerce.remove.products[p],k.products.push({id:_.id||_.uid||_.name,price:_.price||0}),k.total_price=a;y="remove_from_cart"}else y="t-remove-product",r.ecommerce.remove[0]&&r.ecommerce.remove[0].uid&&(y+="-"+r.ecommerce.remove[0].uid);else y=r.event;else y=-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/payment/")?"t-purchase-"+e.replace("/tilda/","").replace("tilda/","").replace("/payment/",""):-1!==e.indexOf("tilda/")&&-1!==e.indexOf("/submitted/")?"t-lead-"+e.replace("/tilda/","").replace("tilda/","").replace("/submitted/",""):-1!==e.indexOf("tilda/popup")||-1!==e.indexOf("tilda/click")?"t-"+e.replace("/tilda/","").replace("/","-"):"t-"+e.replace("/","-");0<h&&k&&k.currency_code?(VK.Retargeting.Event("purchase"),VK.Retargeting.ProductEvent(h,y,k)):(VK.Retargeting.Event(y),"t-purchase"===y.substring(0,10)?VK.Goal("purchase"):"t-lead"===y.substring(0,6)&&VK.Goal("lead"))}else VK.Retargeting.Event(e)}catch(e){}"0"<window.mainMailruId&&(m=window._tmr||(window._tmr=[]),d?0<a?m.push({id:""+window.mainMailruId,type:"pageView",url:e,value:a,start:(new Date).getTime()}):m.push({id:""+window.mainMailruId,type:"pageView",url:e,start:(new Date).getTime()}):0<a?m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e,value:a}):m.push({id:""+window.mainMailruId,type:"reachGoal",goal:e})),"function"==typeof window.tildastat&&(d?(0<e.indexOf("payment")&&-1<e.indexOf("tilda/form")&&(e=e.replace("tilda/form","tilda/rec")),window.tildastat("pageview",{page:e})):window.tildastat("pageview",{page:"/tilda/event/"+e}))},Tilda.saveUTM=function(){try{var e=window.location.href,t="",r="";if(-1!==e.toLowerCase().indexOf("utm_")&&"string"==typeof(t=(t=(e=e.toLowerCase()).split("?"))[1])){var a,i,d,c=t.split("&");for(i in c)"amp;"===(a=c[i].split("="))[0].substring(0,4)&&(a[0]=a[0].substring(4)),"utm_"===a[0].substring(0,4)&&(r=r+c[i]+"|||");0<r.length&&((d=new Date).setDate(d.getDate()+30),document.cookie="TILDAUTM="+encodeURIComponent(r)+"; path=/; expires="+d.toUTCString())}}catch(e){}},"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}();