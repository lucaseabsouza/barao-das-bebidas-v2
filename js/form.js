document.getElementById("whatsappForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var idate = document.getElementById("idate").value;
    var chopp_pilsen_50L= document.getElementById("chopp_pilsen_50L").value;
    var chopp_pilsen_30L= document.getElementById("chopp_pilsen_30L").value;
    var chopp_amber_30L= document.getElementById("chopp_amber_30L").value;
    var urlWhatsApp = "https://wa.me/5531995236051/?text="
    +"Olá meu é " + nome + " e estou interessado em alugar barris de chopp na quantidade e na data abaixo, aguardo retono." + "%0A"
    + "Data desejada: " + idate + "%0A"
    + "Chopp Pilsen 50L: " + chopp_pilsen_50L + "%0A"
    + "Chopp Pilsen 30L: " + chopp_pilsen_30L + "%0A"
    + "Chopp Amber 30L: " + chopp_amber_30L;
    window.open(urlWhatsApp);
  });