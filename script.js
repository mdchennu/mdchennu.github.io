/***
 * This script runs the interactive elements of On Definitions.
 */

/***
 * An object mapping words to information for the word node.
 */
const words = {
    Authenticity: {
        startX: 150, startY: 75,
        x: 370, y: 70,
        connections: [],
        newConnections: ['Love', 'Family'],
        isNewVersion: false,
        story: ["<p>Anytime I look at a sweater that catches my eye, I hear:<br> <i>&ldquo;That would look nice without the frills.&rdquo;<br> &ldquo;This wouldn&rsquo;t go with your vibe.&rdquo;<br> &ldquo;Are you sure about this?&rdquo;</i></p> <p>When I go to a restaurant, and see the octopus dish that excites me:<br> <i>&ldquo;Since when do you eat that?&rdquo;<br> &ldquo;Do you like the texture?&rdquo;<br> &ldquo;We don&rsquo;t eat that kind of stuff.&rdquo;</i></p> <p>When I make a decision, this is what I hear:<br><i>&ldquo;I would be careful of the tax.&rdquo; <br> &ldquo;I would make sure your apartment is in Manhattan.&rdquo; <br> &ldquo;New York is too busy, too much for me.&rdquo;</i></p> <p>By the time I sort through all those responses, I can&rsquo;t really hear, see, or picture what I would do.</p>", "<p>So when I decide to read at my first open mic, those voices are roaring. On the walk to the little building, past the classrooms, onto the stage, and screaming into my ear as I stand on the podium, stare into a spotlight, and drench my papers in sweat.</p> <p>But I have no choice but to begin. I have four vignettes, all I need to do is read them aloud, and then I can sit down and overthink why I even followed this ridiculous thought in my head.</p> <p>&ldquo;A man busks on the street. <i class=\"bigItalics\">Why are you doing this?</i> He wears a black shirt and a red baseball cap.. <i class=\"bigItalics\">Again, why are we up here?</i> Amongst throngs of people passing by, a child, no older than ten, sits criss-crossed on the ground&#8230;.&rdquo; <i class=\"bigItalics\">You are sweating so much.</i></p> <p>I finish the first vignette, barely hearing my voice over the chorus of my thoughts. My hands grip my notes.</p> <p>&ldquo;Three friends huddle together on a balcony. <i>This is pointless.</i> They chatter back and forth, too absorbed in each other&rsquo;s company to be bothered by the heavy rain. <i>Is anyone even listening to you?</i> Their faces glow next to the single candle&#8230;&rdquo; <i>Your voice is wobbly.</i></p> <p>I finish the second vignette, my voice full with others, my mind still crowded.</p>", "<p>&ldquo;A family of three sits on a ledge. <i class=\"smallItalics\">You can&rsquo;t even see anyone.</i> They share a mixture of nuts and puffed rice from a newspaper wrapped in the shape of a cone. <i class=\"smallItalics\">This is like you talking into a void, a dark ugly void&#8230;</i>until only the newspaper is left.&rdquo;</p> <p>But it isn&rsquo;t a void, because as I finish the third little story, I look out into the darkness. My eyes adjust as I see a young woman, sitting in the back of the room. I can&rsquo;t see more than the light against her eyes, but she is looking straight at me, gaze unwavering. A cool warmth fills my body, starting from my head, falling into my shoulders, drying my palms, soothing my fingers.</p> <p>I begin the last vignette:</p> <p>&ldquo;A little girl trots down the street with her dad. Her hand is stretched out, brushing through pots of daffodils, roses, and little chrysanthemums lining the sidewalks&#8230;As they walk away, she turns around, waving goodbye and smiling over her shoulder.&rdquo;</p> <p>As I read, all the voices have melted away. It is only me: singular, clear, and authentic. And what fills the silence, as I finish my last vignette, is applause.</p>", "<p>When the reading had finished, the young woman came over to say hello. Her eyes were full of warmth as she squeezed my hand. She had resonated with what I had written. That squeeze served as a realization.</p> <p>Those voices I had picked up along the way from my loved ones and friends--I had believed they were protecting me, keeping me safe. But those voices were also guardrails, an internalized form of control, keeping me from opportunities, environments where I felt seen, ideas and projects where I could express myself. Having the courage to hop over those guardrails, smash them apart, or maybe quietly ignore them, led to me following my own voice, my gut. And following my instinct resonated with others. The proof of that was those girl&rsquo;s hands in mine, right in front of me. <br> </p>"]
    },
    Shame: {
        startX: 150, startY: 130,
        x: 145, y: 445,
        connections: ['Family'],
        newConnections: [],
        isNewVersion: false,
        story: ["<p>It&rsquo;s going to be a muscle you unintentionally exercise.<br> It&rsquo;s going to be strong. <br> It&rsquo;s going to eat you up from the inside. <br> It&rsquo;s going to blame you.<br> It&rsquo;s going to be a block of you. <br> It&rsquo;s going to be deep within you, blend into your blood and sinew.<br> It&rsquo;s going to be a cubicle away from you and her, you and them, and you and him. <br> It&rsquo;s going to act like your helmet, your knee pads, your seatbelt.<br> It&rsquo;s going to stain your cheeks, stuff your nose, swell your eyes. <br> It&rsquo;s going to have you asking for bait, for a way to fish it out. <br> It&rsquo;s going to be hiding within you while hiding you.</p>", "<p>It&rsquo;s going to be your reflection, your eyes narrowing into the bulging line of fat from the base of your bra to the top of your jeans, the hairs on your chin, the cracks on your feet. <br> It&rsquo;s going to tug, over and over. <br> You are going to tug, over and over. <br> It&rsquo;s going to fall out of you one Wednesday when you walk in the rain.<br> It&rsquo;s going to be wet and hard, a block of flesh.<br> It&rsquo;s going to be engraved with &ldquo;my body&rdquo; &ldquo;my sexuality&rdquo; &ldquo;my hairy chin&rdquo; &ldquo;my hip dips&rdquo; <br> But as you hold it, as you look closely, you&rsquo;ll be surprised:<br> Because it&rsquo;s not your handwriting. <br> Because it&rsquo;s not your block. <br> Because it&rsquo;s not your blood and sinew.<br> Because next time you feel it, it&rsquo;s not going to consume you. <br> It is a cubicle, a muscle, a tug, a tsunami.<br> But it is no longer yours. <br> </p>"]
    },
    Power: {
        startX: 150, startY: 185,
        x: 670, y: 160,
        newName: 'Strength',
        connections: ['Fear'],
        newConnections: ['Authenticity'],
        isNewVersion: false,
        story: ["<p>It had been two years of me questioning my friendship with two of my closest college friends. Radhika and Ellen. They were both Data Science and Political Science majors, and they both attended the same activities, clubs. I was close to Radhika, more than Ellen, though we had very little in common on the surface. Whenever we got coffee or cooked pizzas together, I felt a sense of safety, of close knit comfort, and a lack of judgement.</p> <p>Then in senior year, the last break of fall term, I found out they had planned a trip together without me after seeing their locations in the same place. It led to a boatload of questioning, of overthinking:</p> <p><i>Does Radhika just see me as a nerd? Why would they exclude me from a senior trip? Had I done something to annoy them? Was I just overthinking this whole thing when it really wasn&rsquo;t about me? And worst of all, if I ask Radhika, talk to her about how the exclusion made me feel, how it hurt, would she make fun of me?</i></p>", "<p>There was no prior evidence that any of the questions above were rooted in truth, but I had never told someone I cared about that they had done something to hurt me. Whenever I had tried to address my emotions with family, the conversation would be mocked as &lsquo;therapy talk&rsquo; or brushed off. In other relationships, I would remain passive aggressive and silent until the heat of the hurt had passed.</p> <p>But it had been two years of my questioning, and four years of a really strong friendship that I really cared about. So I sat outside the light wash business school on a hill in Berkeley. My voice wobbled, and my shoulders shivered as I hunched over the wrought metal chairs across from Radhika. It was cold and gray, all the trees bare in mid-November.</p> <p>I don&rsquo;t remember what I said. But I do remember my voice cracking. I talked for a long time. I remember something real and raw (that felt gross) leaking out of me, bubbling out of my throat and down my chin. I remember the feeling of talking about my hurt, how uncomfortable it felt revealing that in public, and acknowledging my fears in front of Radhika. It was as if I was holding a ceramic pot of who I was, exposing the jagged edges, the cracks, and the spots where one tap could break me apart.</p>", "<p>I also remember Radhika&rsquo;s expression. I remember her forehead wrinkled, her mouth turned down, her eyebrows raised, poised in defense. But I also remember that solid wall of her brown eyes softening as we spoke, softening as she responded, explained her perspective. And as we apologized to each other, it was as if she was holding up her own pot, shining a light on her own cracks, her shattering.</p> <p>Walking home, I didn&rsquo;t feel weak and vulnerable, but vulnerable and strong. Radhika and I had talked, conflicted and continued to be there for each other. I felt closer to her than before. I trusted her, and she trusted me too. And I trusted myself more for voicing my emotions.</p> <p>A few years later, I started asking new friends, sometimes even random people, intense questions: &ldquo;What is your biggest insecurity?&rdquo; It usually garnered Radhika's initial shock. But I wasn&rsquo;t looking for the shock. I was searching for their vulnerability, and their strength in sharing that vulnerability. To acknowledge that despite it being terrifying to show, we all have one thing in common: our cracks. </p>"]
    },
    Courage: {
        startX: 150, startY: 240,
        x: 725, y: 395,
        connections: [],
        newConnections: ['Authenticity', 'Sexuality', 'Fear'],
        isNewVersion: false,
        story: []
    },
    Fear: {
        startX: 150, startY: 295,
        x: 155, y: 220,
        connections: ['Authenticity', 'Shame'],
        newConnections: ['Shame'],
        isNewVersion: false,
        story: []
    },
    Family: {
        startX: 150, startY: 350,
        x: 395, y: 230,
        newName: 'Community',
        connections: ['Courage', 'Faith', 'Love', 'Power'],
        newConnections: [],
        isNewVersion: false,
        story: ["<p>My support system was a bungee jump, one long rope pulling me up from the left, another pulling me up from the right. Mummy and Daddy. When a friend had lied to me at school, when I couldn&rsquo;t fall asleep before a bio test, when I was crying and wobbling across campus in a horrid black boot as a freshman, it was my parents that pulled me up, that kept me afloat.</p> <p>Then, I became good friends with someone they didn&rsquo;t approve of. Whenever we would get coffee or hangout, they would be stone cold when I returned home.</p> <p>Then, I joined my full time job and hated it. My parents and I bickered constantly about how I couldn&rsquo;t be grateful for the life they worked so hard to provide.</p> <p>Then, I came out to my parents.</p> <p>Those thick ropes of support, already tense, already burdened from the weight of our differences, snapped. And I was free falling, having lost my foundation.</p>", "<p>There were long nights where I couldn&rsquo;t sleep, my body shaking. There were mornings where I wouldn&rsquo;t be able to get out of bed, the fear of being abandoned weighing me down. There was incessant crying, a hollow feel to my days, and an anxiety that wound me tight.</p> <p>On the nights I couldn&rsquo;t sleep, my partner would Facetime me and lay awake on the call. When I would feel overwhelmed about my job, my childhood best friend sent me a list of grad schools to apply to. A coworker I had met only months ago slept over, to soothe my uncontrollable shaking. There were some days, my mom would just sit on video call with me throughout the day, just to be there. On the toughest mornings, that friend my parents didn&rsquo;t approve of would call me to ensure that I brushed my teeth, and ate something.</p> <p>On the Fourth of July, after a party, after my partner left to fly back to school, my hands wouldn&rsquo;t stop shaking, no matter how much I breathed or walked or drank water. I called the first person I could think of, a coworker I had met six months ago when I moved to Seattle. She was at a friend&rsquo;s apartment nearby, so I walked over. When she came downstairs, I broke into tears. She hugged me as I bawled into her jacket. Snot dripped down my face, my tears stained her red top. We were sitting in a tiny lobby, people filing in and out. I cried and cried and cried. She held me close, squeezing tighter when the sobs racked through my body.</p>", "<p>When I walked home that night, hands still and heart steady, the streets were quiet. I could see the lights of the tall buildings in the distance. The air was warm, but the slight breeze against my face felt cool. I walked slowly, stopping to look at the circular patterns of leaves, taking pictures of the pansy and zinnia flowers on the sidewalks. I realized: I had stopped falling.</p> <p>I had been caught by a net of support, weaved together by new friends who sensed something was wrong, childhood friends who supported me from miles away, college friends reminding me of memories, my partner who was holding me as best as they could from where they were, and even my parents in anyway they could manage. All those people who were a part of, but also beyond my nuclear family.</p> <p>That net broke my belief that deep, compassionate, and unconditional love only came from family. Love could, and would, come from and be given to my community of relationships held together by shared values and compassion grown rather than granted. Family was no longer my only root. Instead, I was a part of a garden of people who had created a soft place to land. </p>"]
    },
    Love: {
        startX: 150, startY: 405,
        x: 275, y: 400,
        connections: [],
        newConnections: ['Family', 'Faith'],
        isNewVersion: false,
        story: []
    },
    Sexuality: {
        startX: 150, startY: 460,
        x: 510, y: 510,
        connections: ['Shame', 'Family', 'Fear'],
        newConnections: ['Love'],
        isNewVersion: false,
        story: ["<p>It started out as a wall, one that I wasn&rsquo;t aware of. One that I wouldn&rsquo;t dare to cross.</p> <p> But sometimes I stared at my friend&rsquo;s hair, long and straight, for far too long. My heart raced and my chest tightened as I imagined how it would feel between my fingers. The wall became a locked door. I would notice that same friend leaning into me, a little too close and for a little too long, while we were figuring out a puzzle, or picnicking on the grass. The lock would turn ever so slightly. I could feel it within me.</p> <p> The door unlocked, finally, one night at 3 am, clustered in a cabin without Internet with that friend. The cabin was barely bigger than a room. There was a red phone, and a large window displaying evergreen trees, tall and glistening with snow.</p>", "<p> Despite the view, I couldn&rsquo;t stop looking at my friend laughing. We had only known each other for about a year, but I felt particularly close to her. I was nervous to say the right thing, felt giddy whenever she laughed at what I said. I was so aware of where she was in a space, how close she was to me.</p> <p> It clicked then.</p> <p> The door swung wide open, and fear, darkness, and shame tumbled in. What would my family think? Would they disown me? Was I disgusting? Was this a phase? My thoughts roiled and coiled inside me so I turned around to find that door, to slam it shut and lock it down. But it had disappeared.</p>", "<p>I went on a Tinder date with a guy who was handsome and tall, but quite strange. He twirled me around, asked for some Snapchat score, and dubbed himself &lsquo;King Calvin.&rsquo; I dated another boy in college for two years. He was nice and kind and independent and caring and intelligent. We got coffee, cuddled at night, and studied together. But I wasn&rsquo;t really eager to introduce him to my friends. I would go through all the motions of being a good girlfriend, but it felt more like I was playing a part, mimicking what I saw around me, in books and movies. The door that had disappeared continued to live within me, and so did the shame, the fear, the uncertainty that it revealed. My boyfriend became the ideal distraction, the shield to that shame, the antidote to my fear.</p> <p> At some point, I realized that I couldn&rsquo;t picture us dating post-graduation. We just didn&rsquo;t work. But I still couldn&rsquo;t navigate the fear surrounding my sexuality, or even recognize that I was feeling shame. By graduation, I broke up with my boyfriend, and told myself that I would instead find a man that I could be with in the new city I was moving to, so that I didn&rsquo;t need to come out to my parents.</p>", "<p>Then I found myself at a coffee shop in front of some person who had just joined the club I was in. Over monthly coffee, asking many questions, reading dumb horoscopes, we built a steady, deep, and fun friendship. For the first time, I felt unburdened by my sexuality, and ready to acknowledge it. Around them, I didn&rsquo;t feel like I had to change who I was to be queer or act unnatural.</p> <p> Three years later, I&rsquo;m in my first queer relationship. Fear and shame exist from time to time, but they float within a bubble of joy. One that I feel expanding as my partner and I laugh while decompressing and rolling up my mattress in a plastic bag. One that bumps against my chest when I&rsquo;m at a party and someone says something dumb or smart or funny and I look up to meet my partner&rsquo;s eyes for a second. One that holds as steady as my breathing when I fall asleep on their stomach in a sunny patch of grass.</p> <p> The bubble has threatened to pop, but only once, when I told my parents about my sexuality. I answered so many questions, felt so much of their fear, watched my mother cry, and cry, and cry again. But instead of popping, the bubble expanded, buoyed by my faith and fueled by my partner&rsquo;s care, to hold my parents&rsquo; fear, my uncertainty, and my relief of no longer trying to live two lives.</p> <p> My wall transformed into a door from which emerged a bubble. And now that bubble is a dream. One where I envision a round table with my partner and my family, all sharing a meal of rice, pappu, perugu, and avakay.</p>"]
    },
    Faith: {
        startX: 150, startY: 515,
        x: 570, y: 395,
        connections: [],
        newConnections: ['Fear', 'Family', 'Power'],
        isNewVersion: false,
        story: ["<p>One week in April, my mom came to stay with me in Seattle. I was living alone at the time, in a dark and spacious apartment. My days were submerged in uncertainty because my mom and I were going through a rough patch. There were so many unspoked questions, fears, and anger floating between us. Suffocated when we were in the same room, I would escape outside, to walk and breathe air, to sit at a park bench watching kids play basketball or ride their tiny neon bikes across the trails.</p> <p>The time we did spend together was when we were preparing meals.</p> <p>It was too much for me to say: &ldquo;I&rsquo;m sorry for lying about my relationship.&rdquo; But I could help her wash the dishes after cooking, unload the dishwasher, or heat up her milk for coffee.</p> <p>It was too hard for my mom to ask: &ldquo;What will my family think of your sexuality?&rdquo; But it was manageable for her to watch me eat, fearful of the ever-darkening circles under my eyes, and ask: &ldquo;Is there enough salt in the pappu?&rdquo;</p> <p>Over the course of the week, we communicated between mouthfuls of rice, over and around stacks of dishes, behind the clinking plates and sizzling oil. It was as if there was a chasm between us, dark and hollow, lengthening with each day of her stay.</p>", "<p>On Friday night, we went out to dinner. We sat across from each other at Kricket Club, at a table so small that our knees were touching. My mom doesn&rsquo;t drink alcohol, so our go to drink when we dine out is usually water. But I had suggested this place because they had a great mocktail section. I watched my mom pore over the drink menu, eyes widening ever so slightly with surprise at the options. We both ordered a Mango Jaljeera.</p> <p>When our drinks arrived, we both took a sip. She perked up, eyes bright, as she smacked her lips, and in her delight I felt my own as the sweet and cold mango, tangy jeera and fresh lemon swirled in my mouth. It was brief, but for a moment, the chasm that had been sucking the air between us, seemed to brighten.</p> <p>&ldquo;This is so good! What should we order?&rdquo; she giggled, guzzling the drink as she looked through the menu. I laughed, relaxing into my chair, as we sorted through the options together. We debated ordering chicken biryani or hyderabadi chicken curry. What would go best with bullet naan or should we order the garlic naan? Would the chole would be watery, or the saag paneer too thick? I was reaching my hand across that light chasm, through the differences in our beliefs.</p>", "<p>By the time we ordered the saag paneer, hyderabadi chicken, and garlic naan, the fear of the last week, and the last few months after coming out to my mother didn't disappear. But, sitting right next to it was a rapidly growing light, a faith.</p> <p>As the plates of food were placed on our table, that faith had wrapped itself around me, a cocoon of the familiar comfort of my mother. As we ate, once again comparing notes, mixing different combinations of the dishes together, the faith that my mother would stay engulfed my fear of losing her. Maybe not today, maybe I didn&rsquo;t know for sure, but I really believed that she wouldn&rsquo;t abandon me on account of my sexuality, that she would change. That despite her misunderstanding of me, we could be honest with each other, and be vulnerable with each other.</p> <p>As we finished our dinner, my mom smirked. &ldquo;I&rsquo;m going to order another Mango Jaljeera,&rdquo; she laughed, a mischievous glint in her eye. In that moment, I felt that her hand had reached into the chasm, and grasped onto my outstretched one.</p>"]
    }
};

/***
 * An object mapping words to the fill-node words that they fill up.
 * 
 * For example, after family is clicked it make the fear, love, and authenticity nodes fill up a bit more. 
 */
const fillingRelationships = {
    Family: ['Fear', 'Love'],
    Shame: ['Fear'],
    Power: ['Fear'],
    Sexuality: ['Fear', 'Love', 'Courage'],
    Faith: ['Love', 'Courage'],
    Authenticity: ['Love', 'Courage']
}

/***
 * An object mapping fill-node words to the percentage of the node that gets additionally filled each time a new relevant word is clicked.
 */
const fillingPercentages = {
    Fear: 25,
    Love: 25,
    Courage: 34
}

/***
 * Hex code values for repeatedly used colors
 */
const greenHexCode = '#97a13c'
const greyHexCode = '#6E6E6E'
const backgroundHexCode = '#f7f7f7'
const redHexCode = '#850b0b'
const blueHexCode = '#fece07'
const purpleHexCode = '#380835'
const orangeHexCode = '#e67830'

/***
 * An object mapping fill-node words to the color they get filled with
 */
const fillingColors = {
    Fear: redHexCode,
    Love: blueHexCode,
    Courage: orangeHexCode
}

/***
 * An object mapping new connections to their captions.
 * 
 * For example, the new connection from authenticity -> love has the caption "gives self".
 */
const newConnectionCaptions = {
    Authenticity: {"Love": "encourages self", "Family": "fuels"},
    Power: {"Authenticity": "rooted in"},
    Courage: {"Sexuality": "to accept", "Authenticity": "enables", "Fear": "despite"},
    Fear: {"Shame": "encompasses"},
    Family: {},
    Love: {"Faith": "leads to", "Family": "leads to"},
    Shame: {},
    Sexuality: {"Love": "fosters"},
    Faith: {"Family": "leads to", "Fear": "to overcome", "Power": "is the foundation of"},
}

/***
 * Duration of line drawing animation in milliseconds
 */
const lineDrawingAnimationDurationInMs = 3500

/***
 * Variable for whether a writing excerpt is currently open.
 */
let isExcerptOpen = false;

/***
 * Variable for the last word that has been clicked by the user.
 */
let lastClickedWord = "";

let nextButtonActivated = false;

const instructions = ["Click on a box.", "Choose another box.", "Keep clicking."]

let curInstructionNum = 0;

let onClickFunctions = new Map();


// Add the animation class when the window loads
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash-content');
    const authorText = document.getElementById('authorText');

    authorText.style.opacity = '1';
    splash.style.opacity = '1';
});

/***
 * This function fades out the splash screen and creates the word web
 */
function startExploration() {
    const splash = document.getElementById('splashScreen');
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.display = 'none';
    }, 1000);

    createWordWeb();
    document.querySelector('.reset-btn').style.opacity = '1';   
    document.querySelector('.credits-btn').style.opacity = '1';   
}

function closeCredits() {
    const credits = document.querySelector('.credits');
    if (credits) {
        credits.remove();
    }

    const creditsCloseBtn = document.querySelector('.credits-close');
    if (creditsCloseBtn) {
        creditsCloseBtn.remove();
    }

    document.querySelector('.word-web').style.display = 'block';
    document.querySelector('.reset-btn').style.display = 'block';
    document.querySelector('.credits-btn').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.word-web').style.opacity = '1';
        document.querySelector('.reset-btn').style.opacity = '1';
        document.querySelector('.credits-btn').style.opacity = '1';
    }, 50)
}

function openCredits() {
    document.querySelector('.reset-btn').style.opacity = '0';
    document.querySelector('.credits-btn').style.opacity = '0';
    document.querySelector('.word-web').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.word-web').style.display = 'none';
        document.querySelector('.reset-btn').style.display = 'none';
        document.querySelector('.credits-btn').style.display = 'none';
    }, 1000)
    setTimeout(() => {
        const credits = document.createElement('div');
        credits.className = 'credits';
        credits.innerHTML = `
            <h2>Credits</h2>
            <div class="credits-content">
                <p>Writing by Mallika Chennupaty</p>
                <p>Code by Cheryl Tugade</p>
                <p>Design by Mallika Chennupaty and Cheryl Tugade</p>
                <p>Background designed by <a href="https://www.freepik.com/free-photo/abstract-textured-backgound_12073308.htm#fromView=keyword&page=1&position=0&uuid=237bb7bd-3f08-4cbd-a46f-34967f4b75c3&new_detail=true" target="_blank">freepik</a></p>
                <p>Paper image by <a href="https://pngimg.com/image/7238" target="_blank">pngimg.com</a>, licensed under CC BY-NC 4.0.</p>
                <p>Flower animation by Cher1e from <a href="https://tenor.com/view/simple-flower-gif-13146117 target="_blank">tenor</a></p>
                <p>The form of 'On Shame' is inspired by <a href="https://www.newyorker.com/magazine/2024/06/10/this-living-amber-tamblyn-poem target="_blank">This Living by Amber Tamblyn</a></p>
                <br>
                <p>For more of Mallika's work, visit her <a href="https://www.mallikachennu.com" target="_blank">website</a>.</p>
            </div>
        `;

        // Create the credits element (assuming you already have a `credits` element created)
        document.body.appendChild(credits);

        // Set the display to 'block' to make it part of the document flow
        credits.style.display = 'block';

        // Create the button element
        const creditsCloseBtn = document.createElement('button');

        // Set the class attribute
        creditsCloseBtn.className = 'credits-close';

        // Set the button text
        creditsCloseBtn.textContent = "← BACK TO WORD WEB";

        // Add the onclick event handler
        creditsCloseBtn.onclick = closeCredits;

        // Append the button to the body
        document.body.appendChild(creditsCloseBtn);

        // Add a small delay to allow the browser to process the layout change
        setTimeout(() => {
            // Start the fade-in effect by changing opacity
            credits.style.opacity = '1';
            creditsCloseBtn.style.opacity = '1';
        }, 50); // A slight delay ensures the browser processes the display change first

    }, 500);
}

/***
 * This function creates the initial word web that is made up of word nodes and connection lines.
 */
function createWordWeb() {
    // Create wordWeb SVG
    const wordWebSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    // Create the div element
    const instruction = document.createElement('div');
    instruction.id = 'instruction';
    instruction.textContent = 'Click on a box.';
    document.querySelector('.word-web').appendChild(instruction);

    wordWebSVG.setAttribute("width", "900");
    wordWebSVG.setAttribute("height", "600");
    wordWebSVG.style.position = "absolute";
    wordWebSVG.style.pointerEvents = "none";
    document.querySelector('.word-web').appendChild(wordWebSVG);

    // Create a node for every word in words
    for (const [word, data] of Object.entries(words)) {
        const node = document.createElement('div');
        const isFillNode = ["Fear", "Love", "Courage"].includes(word)

        // Create a fill node or word node, only word nodes are clickable
        if (isFillNode) {
            node.className = 'fill-node';

        } else {
            node.className = 'word-node';

            // Only allow nodes to be clicked after word web has been constructed
            setTimeout(() => {
                // node.onclick = () => {};
                node.onclick = () => {
                    if (!isExcerptOpen) {
                        // Show excerpt if the node is still the old version, otherwise reset node and connections
                        if (!data.isNewVersion) {
                            showExcerpt(node.textContent, data.story);
                        } else {
                            // Reset isNewVersion property
                            data.isNewVersion = false;

                            // Reset node's newVersion class
                            node.classList.toggle('newVersion');

                            // Reset word, connections, and fill nodes
                            redrawWordAndConnections(word).then((result) => {
                                updateFillNodes(word, false)
                            })
                            .catch((error) => {
                                console.error('Error occurred:', error);
                            });
                        }
                    }
                };

                onClickFunctions.set(node, node.onclick);

                addHoverEffect(node)
            }, 3000 + lineDrawingAnimationDurationInMs);
        }
        
        // Set the node's id, textContent, starting position
        node.id = word;
        node.textContent = word;
        node.style.left = (data.startX - 50) + 'px';
        node.style.top = (data.startY - 15) + 'px';

        // Move the node's to their final position only after DOM and style changes have been applied
        setTimeout(() => {
            node.style.left = (data.x - 50) + 'px';
            node.style.top = (data.y - 15) + 'px';
        }, 0);

        // Fill Fear node after 3s
        setTimeout(() => {
            if (word == 'Fear') {
                node.style.color = 'white'
                node.style.background = `linear-gradient(to right, rgba(133, 11, 11, 1) 100%, var(--backgroundHexCode) 0%)`;
            }
        }, 6500);

        // Append the node as a child to the word-web
        document.querySelector('.word-web').appendChild(node);
    }

    addWordWebElements();

    // Draw the initial connections after 3.5s (node movement transition is 3s)
    setTimeout(() => {
        drawInitialConnections();
    }, 3500);

    setTimeout(() => {
        makeInstructionVisible(0);
    }, 3500 + lineDrawingAnimationDurationInMs);
}

function makeInstructionVisible(instructionNum) {
    const instruction = document.getElementById('instruction');
    instruction.textContent = instructions[instructionNum]
    // instruction.style.left = instructionLeftValues[instructionNum];

    instruction.style.opacity = '1';
}

function makeInstructionNotVisible() {
    const instruction = document.getElementById('instruction');
    instruction.style.opacity = '0';
}

function handleMouseEnter() {
    // this.style.transform = 'scale(1.1)';
    this.style.filter = 'brightness(0.9)';
}

function handleMouseLeave() {
    // this.style.transform = 'scale(1)';
    this.style.filter = 'brightness(1)';
}

function addHoverEffect(node) {
    node.addEventListener('mouseenter', handleMouseEnter);
    node.addEventListener('mouseleave', handleMouseLeave);
}

function removeHoverEffect(node) {
    node.removeEventListener('mouseenter', handleMouseEnter);
    node.removeEventListener('mouseleave', handleMouseLeave);
}

/***
 * This function resets the word web
 */
function resetWordWeb() {
    const wordWeb = document.getElementById('wordWeb');
    
    // Remove existing wordWeb
    wordWeb.remove();
    
    for (const [word, data] of Object.entries(words)) {
        data.isNewVersion = false;
    }
    // Create new wordWeb
    const newWordWeb = document.createElement('div');
    newWordWeb.classList.add('word-web');
    newWordWeb.id = 'wordWeb';
    
    // Append wordWeb to HTML body
    document.body.appendChild(newWordWeb);

    // Reset curInstructionNum
    curInstructionNum = 0;
    lastClickedWord = "";
    isExcerptOpen = false;
    nextButtonActivated = false;

    createWordWeb();
}
/***
 * This function draws a line based on inputs. The paramter animateLine determines whether or not to animate the line being drawn.
 */
function drawLine(data, connection, word, connectionsContainerSVG, animateLine, color) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

    // Set line attributes
    line.setAttribute("x1", data.x);
    line.setAttribute("y1", data.y);
    line.setAttribute("x2", words[connection].x);
    line.setAttribute("y2", words[connection].y);
    line.setAttribute("stroke", data.isNewVersion ? color : greyHexCode);
    line.setAttribute("stroke-width", data.isNewVersion ? "2.5" : "1");

    // Set line class
    line.classList.add(word);

    // Set line stroke so that it is hidden
    const length = Math.sqrt(Math.pow(words[connection].x - data.x, 2) + Math.pow(words[connection].y - data.y, 2));
    line.setAttribute("stroke-dasharray", length);
    line.setAttribute("stroke-dashoffset", length);

    // Append line to connectionsContainerSVG
    connectionsContainerSVG.appendChild(line);

    // Animate the line being drawn if animateLine is true
    if (animateLine) {
        line.animate([
            { strokeDashoffset: length },
            { strokeDashoffset: 0 }
        ], {
            duration: lineDrawingAnimationDurationInMs,
            easing: "ease-in-out",
            fill: "forwards",
        });
    } else {
        line.style.strokeDashoffset = 0;
    }
}

/***
 * This function draws the initial connections based on each word's connections attribute.
 */
function drawInitialConnections() {
    const connectionsContainerSVG = document.querySelector('svg');

    // Draw a line for each connection between words
    for (const [word, data] of Object.entries(words)) {
        const connectionList = data.connections;
        // const connectionList = data.newConnections;

        connectionList.forEach((connection) => {
            drawLine(data, connection, word, connectionsContainerSVG, true)
        });
    }
}

/***
 * This function removes lines for a given word.
 * 
 * The way it animates removing lines depends on the value of isNewVersion.
 */
function removeLinesFromWord(word, isNewVersion) {
    const lines = document.querySelectorAll(`.${word}`);
    
    lines.forEach((line, index) => {
        // Set delay so that lines are removed one-by-one
        if (!isNewVersion) {
            line.remove();
        } else {
            const delay = index * 1000;

            setTimeout(() => {
                const animationDurationInS = 3.5
                const animationDurationInMs = animationDurationInS * 1000
                // Make the line fall and rotate if the node is its new version
                // TODO: Add line breaking into pieces/shattering effect
                if (isNewVersion) {
                    length = line.getTotalLength();
                    line.animate([
                        { strokeDashoffset: 0 },
                        { strokeDashoffset: length }
                    ], {
                        duration: lineDrawingAnimationDurationInMs,
                        easing: "ease-in-out",
                        fill: "forwards",
                    });
                }
                
                // After the animation ends, remove the line
                setTimeout(() => {
                    line.remove();
                }, animationDurationInMs);

            }, delay);
        }
    });
}

async function redrawWordAndConnections(word, isFillNode = false, colorToUpdate = greenHexCode) {
    const connectionsContainerSVG = document.querySelector('svg');
    const node = document.getElementById(word);
    const data = words[word];

    // Remove ability to click on node while redrawing is happening
    let onClickFunction = () => {};
    if (!isFillNode) {
        removeHoverEffect(node);
        onClickFunction = node.onclick;
        node.onclick = () => {};
    }

    // Remove lines from word
    removeLinesFromWord(word, data.isNewVersion);

    // If applicable, update the word name after 3.5s
    const nameUpdatePromise = new Promise((resolve) => {
        if (data.newName) {
            setTimeout(() => {
                if (node.textContent == word) {
                    node.textContent = data.newName;
                } else {
                    node.textContent = word;
                }
                resolve(); // Resolve the promise after updating the name
            }, 3500);
        } else {
            resolve(); // Resolve immediately if no new name
        }
    });

    // Use newConnections if the node is its new version
    const connectionList = data.isNewVersion ? data.newConnections : data.connections;

    // Remove all current connection captions
    if (!isFillNode) {
        const connectionCaptions = document.querySelectorAll('.caption');
        for (const caption of connectionCaptions) {
            caption.remove();
        }
    }

    // Draw lines and captions for each connection
    const connectionPromises = connectionList.map((connection) =>
        new Promise((resolve) => {
            drawLine(data, connection, word, connectionsContainerSVG, data.isNewVersion, colorToUpdate);

            // Create caption
            if (data.isNewVersion) {
                const caption = document.createElementNS("http://www.w3.org/2000/svg", "text");
                const midX = (data.x + words[connection].x) / 2;
                const midY = (data.y + words[connection].y) / 2;

                // Set caption attributes
                caption.setAttribute("x", midX);
                caption.setAttribute("y", midY);
                caption.setAttribute("fill", greyHexCode);
                caption.setAttribute("text-anchor", "middle");
                caption.setAttribute("alignment-baseline", "hanging");
                caption.setAttribute("class", "caption");
                adjustCaptionExceptions(caption, word, connection);

                // Set caption text
                caption.textContent = newConnectionCaptions[word][connection];

                // Append the caption after the line has been drawn
                setTimeout(() => {
                    connectionsContainerSVG.appendChild(caption);
                    resolve(); // Resolve after caption is added
                }, lineDrawingAnimationDurationInMs);
            } else {
                resolve(); // Resolve immediately if no caption to add
            }
        })
    );

    // Restore ability to click on node after 5s
    if (!isFillNode) {
        setTimeout(() => {
            node.onclick = onClickFunction;
            addHoverEffect(node);
        }, 5000);
    }

    // Wait for all promises to complete
    await Promise.all([nameUpdatePromise, ...connectionPromises]);
}

function adjustCaptionExceptions(caption, word, connection) {
    if (word == 'Authenticity' && connection == 'Love') {
        caption.setAttribute("dx", "-1.8em");
    }
}

/***
 * This function shows the writing excerpt for a corresponding word. 
 */
function showExcerpt(word, story) {
    isExcerptOpen = true;

    // Hide the word web and reset button
    document.querySelector('.reset-btn').style.opacity = '0';
    document.querySelector('.word-web').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.word-web').style.display = 'none';
        document.querySelector('.reset-btn').style.display = 'none';
    }, 1000)
    makeInstructionNotVisible();

    // Create excerpt
    const excerpt = document.createElement('div');
    excerpt.className = 'excerpt';

    let index = 0;

    excerpt.innerHTML = `
    <div class="excerpt-content">
        ${story[index]}
    </div>
    `;

    // Add excerpt to HTML body
    document.body.appendChild(excerpt);

    // Show the overlay
    document.getElementById('overlay').style.display = 'block';

    // Update lastClickedWord
    lastClickedWord = word;
    excerpt.style.display = 'block';

    // Create the button container
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    // Create buttons
    const nextChunkBtn = document.createElement('button');
    nextChunkBtn.className = 'next-chunk-btn';
    nextChunkBtn.textContent = "NEXT →";
    const backChunkBtn = document.createElement('button');
    backChunkBtn.className = 'back-chunk-btn';
    backChunkBtn.textContent = "← BACK";

    function goToNextChunk() {
        index += 1;
        updateExcerpt(story, excerpt, index);
    
        // Update nextChunkBtn state
        if (index == story.length - 1) {
            nextChunkBtn.textContent = "DONE →";
            nextChunkBtn.onclick = closeExcerpt;
        } else {
            nextChunkBtn.textContent = "NEXT →";
            nextChunkBtn.onclick = goToNextChunk;
        }
    
        // Update backChunkBtn state
        if (index > 0) {
            backChunkBtn.textContent = "← BACK";
            backChunkBtn.onclick = goToPreviousChunk;
        }
    }
    
    function goToPreviousChunk() {
        index -= 1;
        updateExcerpt(story, excerpt, index);
    
        // Update backChunkBtn state
        if (index == 0) {
            backChunkBtn.textContent = "← BACK";
            backChunkBtn.onclick = () => {};
        } else {
            backChunkBtn.textContent = "← BACK";
            backChunkBtn.onclick = goToPreviousChunk;
        }
    
        // Update nextChunkBtn state
        if (index < story.length - 1) {
            nextChunkBtn.textContent = "NEXT →";
            nextChunkBtn.onclick = goToNextChunk;
        }
    }
    
    // Initial setup
    nextChunkBtn.onclick = goToNextChunk;
    backChunkBtn.onclick = () => {}; 

    // Append both buttons to the button container
    buttonContainer.appendChild(backChunkBtn);
    buttonContainer.appendChild(nextChunkBtn);

    // Append the button container to the DOM (e.g., a div with ID 'container')
    document.body.appendChild(buttonContainer);

    setTimeout(() => {
        nextChunkBtn.style.opacity = '1';
        excerpt.style.opacity = '1';
        backChunkBtn.style.opacity = '1';
    }, 0)
}

function updateExcerpt(story, excerpt, index) {
    excerpt.innerHTML = `
    <div class="excerpt-content">
        ${story[index]}
    </div>
    `;
}

/***
 * This function closes a writing excerpt.
 */
function closeExcerpt() {
    removeAbilityToClickNodes();
    const excerpt = document.querySelector('.excerpt');
    if (excerpt) {
        excerpt.remove();
    }

    const closeBtn = document.querySelector('.next-chunk-btn');
    if (closeBtn) {
        closeBtn.remove();
    }

    const backChunkBtn = document.querySelector('.back-chunk-btn');
    if (backChunkBtn) {
        backChunkBtn.remove();
    }

    isExcerptOpen = false;
    const word = lastClickedWord
    words[word].isNewVersion = true;

    // Show the word web and reset button again
    document.querySelector('.reset-btn').style.opacity = '1';
    document.querySelector('.reset-btn').style.display = 'block';
    document.querySelector('.word-web').style.opacity = '1';
    document.querySelector('.word-web').style.display = 'block';

    // Redraw the last clicked word and its connectinos 
    redrawWordAndConnections(word).then((result) => {
        // Update fills for the fill nodes
        updateFillNodes(word, true).then((result) => {
            setTimeout(() => {
                restoreAbilityToClickNodes();
            }, 1500)
            if (allWordsAreNewVersions() && !nextButtonActivated) {
                nextButtonActivated = true;
                // Create a button element
                const button = document.createElement("button");
                button.textContent = "NEXT";
                button.id = "next-btn";

                button.addEventListener("click", () => {
                    enterConclusionPage();
                });

                document.body.appendChild(button);

                setTimeout(() => {
                    button.style.opacity = '1';
                }, 50);
            }
        });

        // Trigger color change by updating the node's newVersion class
        const node = document.getElementById(word)
        node.classList.toggle('newVersion');

        setTimeout(() => {
            if (curInstructionNum + 1 <= instructions.length) {
                makeInstructionVisible(curInstructionNum + 1);
                curInstructionNum += 1;
            } 
        }, lineDrawingAnimationDurationInMs + 500);  
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });
}

/***
 * This function closes a writing excerpt.
 */
function closeExcerptUnfinished() {
    lastClickedWord = '';
    const excerpt = document.querySelector('.excerpt');
    if (excerpt) {
        excerpt.remove();
    }

    const closeBtn = document.querySelector('.next-chunk-btn');
    if (closeBtn) {
        closeBtn.remove();
    }

    const backChunkBtn = document.querySelector('.back-chunk-btn');
    if (backChunkBtn) {
        backChunkBtn.remove();
    }

    isExcerptOpen = false;

    // Show the word web and reset button again
    document.querySelector('.reset-btn').style.opacity = '1';
    document.querySelector('.reset-btn').style.display = 'block';
    document.querySelector('.word-web').style.opacity = '1';
    document.querySelector('.word-web').style.display = 'block';
}
/***
 * This function updates the fills for the fill nodes (love, courage, fear)
 */
async function updateFillNodes(word, adding) {
    const wordsToFill = fillingRelationships[word];
    let index = 0;
    const fillingWordsPromises = []; // Array to hold promises for all setTimeouts

    for (const wordToFill of wordsToFill) {
        const fillNode = document.getElementById(wordToFill);

        // Calculate updated percent to fill
        const backgroundStyle = window.getComputedStyle(fillNode).background;
        const oldPercentVals = backgroundStyle.match(/(\d+)%/g);
        let oldPercent = parseInt(oldPercentVals[0]);
        const percentToAdd = fillingPercentages[wordToFill];
        
        let updatedPercent = oldPercent + percentToAdd;

        // Change updatedPercent depending on adding value
        if (!adding) {
            updatedPercent = oldPercent - percentToAdd;
        }

        if (wordToFill === 'Fear') {
            if (adding) {
                updatedPercent = oldPercent - percentToAdd;
            } else {
                updatedPercent = oldPercent + percentToAdd;
            }
        }

        // Change the text color and border color if 60% of node is filled
        if (updatedPercent >= 55) {
            fillNode.style.color = "white";
        } else {
            fillNode.style.color = greyHexCode;
        }

        const colorToUpdate = fillingColors[wordToFill];

        // Update fill percent
        // fillNode.style.transition = 'background 3s ease-in-out'; // Add smooth transition
        fillNode.style.background = `linear-gradient(to top, ${colorToUpdate} ${updatedPercent}%, ${backgroundHexCode} 0%)`;

        // Calculate additional scaling factor
        let additionalFactor = (0.1 * updatedPercent) / 100;

        // For 'Fear', make scale factor negative
        if (wordToFill === 'Fear') {
            additionalFactor = -additionalFactor + 0.1;
        }

        // Apply scale transformation
        fillNode.style.transform = `scale(${1 + additionalFactor})`;

        // Set delay for redrawing line
        const delay = index * 3000;

        const isFull = (updatedPercent >= 100 && wordToFill != 'Fear') || (updatedPercent == 0 && wordToFill == 'Fear');
        const undoFull = (updatedPercent < 100 && words[wordToFill].isNewVersion == true && wordToFill != 'Fear') || (updatedPercent != 0 && words[wordToFill].isNewVersion == true && wordToFill == 'Fear');

        // If fill node is full, update border and redraw word and connections
        if (isFull) {
            if (wordToFill !== 'Fear') {
                fillNode.style.borderColor = colorToUpdate;
                fillNode.style.borderWidth = '2.5px'; // Set the border thickness to 2.5px
            } else {
                fillNode.style.borderColor = greyHexCode;
            }

            words[wordToFill].isNewVersion = true;

            // Create a promise for the redrawWordAndConnections call inside the setTimeout
            const redrawPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    redrawWordAndConnections(wordToFill, true, colorToUpdate)
                        .then(resolve)
                        .catch((error) => {
                            console.error('Error occurred:', error);
                            reject(error);
                        });
                }, delay);
            });

            fillingWordsPromises.push(redrawPromise); // Push the promise to the array

            index += 1;
        } else if (undoFull) {
            fillNode.style.borderColor = greyHexCode;
            words[wordToFill].isNewVersion = false;

            // Create a promise for the redrawWordAndConnections call for undo
            const redrawPromise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    redrawWordAndConnections(wordToFill, true)
                        .then(resolve)
                        .catch((error) => {
                            console.error('Error occurred:', error);
                            reject(error);
                        });
                }, delay);
            });

            fillingWordsPromises.push(redrawPromise); // Push the promise to the array
        }
    }

    // Wait for all redraw promises to resolve
    await Promise.all(fillingWordsPromises);

    // Now resolve the fillingWordsPromise
    console.log('All redraws completed');
}

function allWordsAreNewVersions() {
    for (const [word, data] of Object.entries(words)) {
        if (data.isNewVersion === false) {
            return false;
        }
    }
    return true;
}

function logAllWordsAndNewVersionVals() {
    for (const [word, data] of Object.entries(words)) {
        console.log(word)
        console.log(data.isNewVersion)
    }
}

function enterConclusionPage() {
    const wordWeb = document.getElementById('wordWeb');
    // wordWeb.style.opacity = '0';
    // wordWeb.style.display = 'none';
    if (wordWeb) {
        wordWeb.remove();
    }

    const paper = document.getElementById('paper');
    if (paper) {
        paper.remove();
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.remove();
    }

    const conclusion = document.getElementById('conclusionScreen');
    conclusion.style.display = 'block';

    setTimeout(() => {
        conclusion.style.opacity = '1';
    }, 0)
}

function addWordWebElements() {
    const wordWeb = document.getElementById("wordWeb"); // Get the container

    // Check if the instruction div already exists
    if (!document.getElementById("instruction")) {
        const instructionDiv = document.createElement("div");
        instructionDiv.id = "instruction";
        // instructionDiv.textContent = "Click on a box.";
        wordWeb.appendChild(instructionDiv); // Append to wordWeb container
    }

    // Check if the overlay div already exists
    if (!document.getElementById("overlay")) {
        const overlayDiv = document.createElement("div");
        overlayDiv.classList.add("overlay");
        overlayDiv.id = "overlay";
        wordWeb.appendChild(overlayDiv); // Append to wordWeb container
    }

    // Check if the reset button already exists
    if (!document.querySelector(".reset-btn")) {
        const resetButton = document.createElement("button");
        resetButton.classList.add("reset-btn");
        resetButton.textContent = "RESET";
        resetButton.style.opacity = "1";
        resetButton.onclick = function() {
            resetWordWeb(); // Call the resetWordWeb function
        };
        wordWeb.appendChild(resetButton); // Append to wordWeb container
    }

    if (!document.querySelector(".credits-btn")) {
        console.log("HERE!!!!!")
        const creditsBtn = document.createElement("button");
        creditsBtn.classList.add("credits-btn");
        creditsBtn.textContent = "CREDITS";
        creditsBtn.style.opacity = "1";
        creditsBtn.onclick = function() {
            openCredits(); // Call the resetWordWeb function
        };
        wordWeb.appendChild(creditsBtn); // Append to wordWeb container
    }
}

function redirect(event) {
    event.preventDefault();  // Prevent the link from navigating immediately
    window.open("mailto:mchennupaty@gmail.com?subject=On Definitions - Send Your Diagrams and Definitions", "_blank");
}

function removeAbilityToClickNodes() {
    const nodes = document.querySelectorAll('.word-node')
    for (const node of nodes) {
        node.onclick = () => {}
        removeHoverEffect(node);
    }
}

function restoreAbilityToClickNodes() {
    const nodes = document.querySelectorAll('.word-node')
    for (const node of nodes) {
        node.onclick = onClickFunctions.get(node);
        addHoverEffect(node);
    }
}

function getAlpha(wordToFill) {
    // Get the background style (linear-gradient)
    const node = document.getElementById(wordToFill)
    const backgroundStyle = window.getComputedStyle(node).background;

    // Use a regular expression to find the rgba value
    const rgbaMatch = backgroundStyle.match(/rgba?\((\d+), (\d+), (\d+), (\d?\.?\d*)\)/);

    console.log(rgbaMatch)
    const alpha = rgbaMatch[4]; // alpha is the 4th capture group
    return alpha
}