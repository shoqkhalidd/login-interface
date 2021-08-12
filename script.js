
function rangeval1(val) {
  document.getElementById("m1").innerHTML=val
}
function rangeval2(val) {
  document.getElementById("m2").innerHTML=val
}function rangeval3(val) {
  document.getElementById("m3").innerHTML=val
}function rangeval4(val) {
  document.getElementById("m4").innerHTML=val
}function rangeval5(val) {
  document.getElementById("m5").innerHTML=val
}function rangeval6(val) {
  document.getElementById("m6").innerHTML=val
}

window.watsonAssistantChatOptions = {
      integrationID: "f8e35e49-aa4e-4d22-ab49-540a2788e876", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "19eedcb5-b38e-41ff-b946-ad07cb2865e4", // The ID of your service instance.
      onLoad: function(instance) { instance.render(); }
 };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    document.head.appendChild(t);
  });
