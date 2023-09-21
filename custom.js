const quotes = [{
    quote: `"Var tacksam för problem. Om de var mindre svåra skulle någon med sämre förmåga kanske ha ditt jobb."`,
    writer: `Jim Lovell`
}, {
    quote: `"Vem som helst kan göra hur mycket arbete som helst, förutsatt att det inte är det arbete han ska göra i det ögonblicket."`,
    writer: `Robert Benchley`
}, {
    quote: `"Arbete är det bästa i världen, så vi bör alltid spara en del av det till morgondagen."`,
    writer: `Don Herold`
}, {
    quote: `"Vi kommer att fortsätta att ha fler möten tills vi tar reda på varför inget arbete utförs."`,
    writer: `Okänd`
}, {
    quote: `"Berätta för din chef vad du verkligen tycker om honom, och sanningen kommer att befria dig från ditt jobb."`,
    writer: `Okänd`
}, {
    quote: `"Om du jobbar med något spännande som du verkligen bryr dig om behöver du inte bli pushad. Visionen pushar dig."`,
    writer: `Steve Jobs`
}, {
    quote: `"Effektivitet är att göra saker rätt. Effektivitet är att göra rätt saker."`,
    writer: `Peter Drucke`
}, {
    quote: `"Börja med att göra det som är nödvändigt, sedan vad som är möjligt; och plötsligt gör du det omöjliga."`,
    writer: `Sankt Franciskus`
}, {
    quote: `"Hårt arbete lönar sig om du är tillräckligt tålmodig för att klara det."`,
    writer: `Michael Chandler`
}, {
    quote: `"Arbetet får ny mening när du känner att du pekas i rätt riktning. Annars är det bara ett jobb, och livet är för kort för det."`,
    writer: `Tim Cook`
}, {
    quote: `"Du behöver inte vara seriös hela tiden för att göra ett bra jobb."`,
    writer: `Simone Biles`
}, {
    quote: `"Den som vet HUR kommer alltid att ha ett jobb. Den som vet VARFÖR kommer alltid att vara hans chef."`,
    writer: `Alanis Morissette`
}, {
    quote: `"Omöjligt är bara en åsikt."`,
    writer: `Paulo Coelho`
}, {
    quote: `"Det finns inga gränser för vad du kan åstadkomma, förutom de gränser du sätter för ditt eget tänkande."`,
    writer: `Brian Tracy`
}, {
    quote: `"Ingen stor framgångsrik person – inte ens de som fick det att verka lätt – har någonsin lyckats utan hårt arbete."`,
    writer: `Jonathan Sacks`
}, {
    quote: `"Arbeta hårt, ha kul, skapa historia."`,
    writer: `Jeff Bezos`
}, {
    quote: `"Arbeta och du får det du behöver; arbeta hårdare så får du det du vill ha."`,
    writer: `Prabakaran Thirumalai`
}, {
    quote: `"Stora saker kommer från hårt arbete och uthållighet. Inte ursäkter."`,
    writer: `Kobe Bryant`
}, {
    quote: `"Välj ett jobb du älskar, och du kommer aldrig behöva arbeta en dag i ditt liv."`,
    writer: `Confucious`
}];

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
});
