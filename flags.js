// wikipedia country links
var countries = [
  {name:'canada', link:'https://en.wikipedia.org/wiki/Canada'},
  {name:'colombia', link:'https://en.wikipedia.org/wiki/Colombia'},
  {name:'newzealand', link:'https://en.wikipedia.org/wiki/New-zealand'},
  {name:'russia', link:'https://en.wikipedia.org/wiki/Russia'}
];

// change iframe src
function changeSelected(name){
   countries.forEach(function(country){
     if(country.name == name){
       $('iframe').attr('src', country.link);
     }
   });
}

// toggle paragraph info about country
function showInfo(element){
   $('p.countryInfo', element).show();
}
function hideInfo(element){
   $('p.countryInfo', element).hide();


   //element.getElementsByTagName('p').style.display = 'none';
}
