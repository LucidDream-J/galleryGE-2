const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");
const statementTitle = document.getElementById("statement");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");
const exhibStatement = document.querySelector(".statement");
setTimeout(() => {
  getData();
}, 2000);

function getData() {
  header.innerHTML = `<img class="card-img-top" src="../../../images/artistsImages/crouch/DS5.jpg" alt="Art image">`;
  title.innerText = `Dr Christopher Crouch`;
  excerpt.innerHTML = ` <p> Dr Christopher Crouch has held professorial roles in Australian and Chinese art schools and his work is held in public and private collections in Australia. This is his seventh exhibition with Gallery East.</p>
<p>His past work has focused on parkland and urban trees, investigating their relationship to both nature and their social context. Critics have described him as ‘a consummate draughtsman’, drawing ironically on a realist tradition and making work that resembles ‘socialist realism in a slow motion car crash’.
</p>

<p>His work is held in the collections of Museo Internacional de Electrografia Universidad de Castilla la Mancha, Spain; The University of Liverpool, UK, the Liverpool School of Architecture, UK, Art Bank, Wesfarmers, Western  Australia, Edith Cowan University, and Qingdao Art Gallery, the People’s Republic of China.`;
  profile_img.innerHTML = ` <img src="../../../images/lenin.jpg" alt=""></p>`;
  name.textContent = `Christopher Crouch`;
  date.textContent = `August 1, 2021`;

  statementTitle.innerText = `Catalogue Essay`;
  exhibStatement.innerText = `"There are two sets of paintings in the exhibition, watercolours of leaf litter (Un-botanicals 1-10) and five illustrations for some lines from the American poet Delmore Schwartz. As always, my intent with these works was to play games with different ideas of representation and to hold hands affectionately with the banality of popular aesthetic taste.
  
The Un-botanical paintings are a development from my garland paintings. Those paintings used leaves gathered in tawdry garlands that represented both victory and defeat. The leaf litter is no longer disciplined by decorative form but by notions of realism. From being symbolic objects the leaves have now become bogus tokens of naturalism.  In the current watercolours the aesthetic game is to paint something that passes as ‘realistic’ within the canon of botanical painting, while using a portfolio of compositional devices that actively work against that presumption. It is a very tiny game, a game played in miniature like Subbuteo, but in the face of the looming climate catastrophe it is at least a chance to intimately engage with the last glimpses of the world as we know it before it vanishes. In squandering the world’s carbon deposits like an aristocratic idiot playing the tables at a casino, we have created a culture that has the appearance of success amongst chaos in a world that is simultaneously familiar but alien, a world in which we have terminally uprooted ourselves from our natural surroundings.  (I am unsure whether one can really talk with any authority about paintings of leaves standing in for the concept of deracination, but life is short, so let’s just leave that unresolved contradiction to sit and stew.)

It is under the thrall of the novelist and essayist Georges Perec that I have been painting leaf litter for a few years now. I have become increasingly intrigued with Perec’s idea of the infra-ordinary as a way of dealing with the big sociological problem (as framed by Stuart Hall) of how we fit inside the mechanisms of a top-down culture that regulates any attempts to re-make culture from the ground up. For Perec the validation and dissemination of the extraordinary by our cultural institutions as a way of observing the ordinary (a media world of spies, superheroes and glamourous individuals transcending the mundane, an artistic world of special individuals with astonishing insights, a scientific world of individuals taking sole credit for observing natural phenomena) was also a way of governing the ordinary – of controlling and diminishing our collective experiences of the world and our attempts to express them. Thinking of the infra-ordinary instead of the extraordinary, of the endotic rather than the exotic, liberates us from cultural expectations of being somehow uniquely special. To achieve this aesthetic end Perec deployed the methods of the Oulipo group of which he was a member.

The Ouilipo group’s central premise was to invert the usual trope of the individual creatively re-structuring the world, to focussing on the circumstances that structured creativity. The group was investigating the way in which poetry could be generated from the starting point of imposed mathematical structures and patterns. Their proposition was that what might seem constraining, outside canon, and un-aesthetic, can in fact be the source of inspiration in creating the conditions for aesthetic value. The writer Raymond Queneau described Oulipian practitioners as “rats who construct the labyrinth from which they escape”.  The Oulipian method can be equally applied to visual endeavours as to literary ones (in figurative painting Jean Helion springs to mind, in the world of abstraction, Mary and Kenneth Martin). In making the Un-botanical paintings I had the intention to producing images that had the appearance of being of the real world, but which were fictional. I imposed some working conditions on my myself, less a straight-jacket and more a formal suit. The particularity of the source material had to be denied and the generic applied, so individual botanical details (the colour of flowers, the shapes of leaves, the form of flower casings) were transposed and invented to varying degrees. The colour of leaves had to sit within a naturalistic register, but they were not necessarily accurate to the specimen being drawn. The structure of the image had to fit as closely as possible to the conceptual and physical centring, halving and quartering of the paper surface. This had to be taken to the edge of legibility of the image as naturalistic, if the structure was more noticeable than the image then I was allowed to fudge things a little, some images are obviously less strict than others.  Different styles are used within the same painting, sometimes more intuitively than others. There had to be a minimum of two different styles of representation used on each sheet. (In Un-botanical 5 for example the branch is aligned to the quartered page and each section of the branch that sits within each quarter is rendered differently). Watercolour and gouache are mixed indiscriminately on each page which is of course quite wrong in the technical canon, but in a grander world of constraint the joy of such tiny transgressions can make the difference between life being a two or a five cups of coffee day. The Un-botanical watercolours will immediately strike the botanist as ludicrous, but they should be close enough to the real world for most of us to see them initially as naturalistic renderings of a part of the world that surrounds us - at least as real as the media fictions of the world we are bombarded with continuously. Should we believe in one and not the other, believe in both or neither? It would be nice to think that by exposing the simulations of the world in one sphere we could then locate them in another.

The illustrations for lines of poetry by Delmore Schwartz are much more straight forward. I spend more time with books than I do in art galleries, and the world of illustration is less intimidated by US cultural hegemony than painting. It is partly to do with the illustrations size I think. An illustration is always slightly apologetic, a discreet adjunct to other more serious issues. Being slight and nimble it can slip by the guards that protect the world of aesthetic importance.

Residing in New York, the child of Romanian migrant parents (the apocryphal story is he was named after a local grocery store), Schwartz resisted the totalising nature of that urban juggernaut of a city’s power by escaping into a neurotic interior world filled with childhood memories of the family, the city experienced through a migrant’s eyes, nature and classical culture. A friend who loves to argue against the tendency to think of art as a universalising experience suggested the collection Summer Knowledge for me to illustrate. He was offended by the assumption that the idea of a North American summer was a shared one and has always been irritated by the narcissism and cultural specificity of Schwartz’s poems. My Oulipian task was to take some lines and using Nikolai Chernyshevsky’s idea of the dialogue between the particular and the universal, make the world as seen through Schwarz’s lens relevant to an Australian audience. A deeply ironic task set by a Russian to an Englishman. From both our perspectives, kitsch is the collective aesthetic at work, and it can be turned against itself and used as a martial art. My work has been previously described as the aftermath of a crash between socialist realism and a ladybird book. I think the littered roadside corpses of the gumnut babies also need mention.

The paintings on show are meant to be enjoyed, irritatingly pretentious as they may seem. Separated from their intellectual origins the images should work quite happily as wallpaper or printed on tea towels. It is entirely the reader’s prerogative to decipher them as they wish, and I would happily embrace any reading of them in what currently appear to be the end times. " `;

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });
  animated_bgs_text.forEach((bgtxt) => {
    bgtxt.classList.remove("animated-bg-text");
  });
}
