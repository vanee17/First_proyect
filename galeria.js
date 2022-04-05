document.getElementById("img0").onclick = function() {openModal("IMG-20220110-WA0015.jpg")};
document.getElementById("img1").onclick = function() {openModal("IMG-20220110-WA0016.jpg")};
document.getElementById("img2").onclick = function() {openModal("IMG-20220110-WA0017.jpg")};
document.getElementById("img3").onclick = function() {openModal("IMG-20220110-WA0018.jpg")};
document.getElementById("img4").onclick = function() {openModal("IMG-20220110-WA0019.jpg")};
document.getElementById("img5").onclick = function() {openModal("IMG-20220110-WA0020.jpg")};
document.getElementById("img6").onclick = function() {openModal("IMG-20220110-WA0021.jpg")};
document.getElementById("img7").onclick = function() {openModal("IMG-20220110-WA0035.jpg")};
document.getElementById("img8").onclick = function() {openModal("IMG-20220110-WA0036.jpg")};
document.getElementById("img9").onclick = function() {openModal("IMG-20220110-WA0037.jpg")};
document.getElementById("img10").onclick = function() {openModal("IMG-20220110-WA0038.jpg")};
document.getElementById("img11").onclick = function() {openModal("IMG-20220110-WA0040.jpg")};
document.getElementById("img12").onclick = function() {openModal("IMG-20220110-WA0045.jpg")};
document.getElementById("img13").onclick = function() {openModal("IMG-20220110-WA0047.jpg")};
document.getElementById("img14").onclick = function() {openModal("IMG-20220110-WA0048.jpg")};

document.getElementById("img15").onclick = function() {openModal("IMG-20210819-WA0041.jpg")};
document.getElementById("img16").onclick = function() {openModal("IMG-20210819-WA0042.jpg")};
document.getElementById("img17").onclick = function() {openModal("IMG-20210819-WA0043.jpg")};
document.getElementById("img18").onclick = function() {openModal("IMG-20210820-WA0013.jpg")};
document.getElementById("img19").onclick = function() {openModal("IMG-20210820-WA0014.jpg")};
document.getElementById("img20").onclick = function() {openModal("IMG-20210820-WA0015.jpg")};
document.getElementById("img21").onclick = function() {openModal("IMG-20210820-WA0018.jpg")};
document.getElementById("img22").onclick = function() {openModal("IMG-20210831-WA0005.jpg")};
document.getElementById("img23").onclick = function() {openModal("IMG-20210831-WA0006.jpg")};
document.getElementById("img24").onclick = function() {openModal("IMG-20210831-WA0008.jpg")};

document.getElementById("img25").onclick = function() {openModal("IMG-20201220-WA0045.jpg")};
document.getElementById("img26").onclick = function() {openModal("IMG-20201220-WA0047.jpg")};
document.getElementById("img27").onclick = function() {openModal("IMG-20201220-WA0048.jpg")};
document.getElementById("img28").onclick = function() {openModal("IMG-20201220-WA0049.jpg")};
document.getElementById("img29").onclick = function() {openModal("IMG-20201220-WA0053.jpg")};
document.getElementById("img30").onclick = function() {openModal("IMG-20201220-WA0054.jpg")};
document.getElementById("img31").onclick = function() {openModal("IMG-20201220-WA0056.jpg")};
document.getElementById("img32").onclick = function() {openModal("IMG-20201220-WA0057.jpg")};
document.getElementById("img33").onclick = function() {openModal("IMG-20201220-WA0059.jpg")};

document.getElementById("img34").onclick = function() {openModal("20211009_142323.jpg")};
document.getElementById("img35").onclick = function() {openModal("20211009_142338.jpg")};
document.getElementById("img36").onclick = function() {openModal("20211009_142353.jpg")};
document.getElementById("img37").onclick = function() {openModal("20211009_142439.jpg")};
document.getElementById("img38").onclick = function() {openModal("20211009_142502.jpg")};
document.getElementById("img39").onclick = function() {openModal("20211127_154700.jpg")};
document.getElementById("img40").onclick = function() {openModal("20211127_154746.jpg")};
document.getElementById("img41").onclick = function() {openModal("20211127_154829.jpg")};
document.getElementById("img42").onclick = function() {openModal("IMG-20210921-WA0003.jpg")};
document.getElementById("img43").onclick = function() {openModal("IMG-20210921-WA0009.jpg")};
document.getElementById("img44").onclick = function() {openModal("IMG-20210921-WA0010.jpg")};
document.getElementById("img45").onclick = function() {openModal("IMG-20210921-WA0012.jpg")};

function openModal(id_image){
	let image = "fotos/" + id_image;
	document.getElementById('modalGalery').style.display = 'block';
	document.getElementById('imageModal').style.backgroundImage = "url("+image+")";
}

function cerrarModal(){
	document.getElementById('modalGalery').style.display = 'none';
}