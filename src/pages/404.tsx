import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import Roach from '../components/Roach';

export default function PageNotFound() {
  const [header, setHeader] = useState('404');
  const [text, setText] = useState('');

  useEffect(() => {
    const headerNames = ['404', 'Aw, jeez!', 'Oh noes!', "Darn man, what'd you do this time?", "What's this now?", 'Four-o-Four?', 'Congrats, you broke it.', 'Are you proud of yourself?', 'Something strange is going on here...', 'Well gang, it looks like we have another mystery on our hands.', 'When life gives you lemons, you fix this error!', 'SyntaxError: Invalid URL', 'Huh?', 'Oopsie poopsie!', 'How deep does this trash bin go?', 'How many times are you gonna try to find that?', 'Ouch, that spider bit me!', 'Beware of the dog!', 'Did you just soil yourself?', 'Welcome to the bone zone!', "You're gonna need a bigger boat.", 'Oh yee gods!', 'The ride never ends!'];

    const afterFirstLineTexts = ['Today is a sad day :(', 'Things got <b>real</b> bad, <b>real</b> quick.', 'Did you accidentally trip on a cable or something?', 'You sure you got that thing working?', "This isn't me, I swear!", 'Looks like this is just a dead end.', "Maybe it's just you.", "I feel like you're constantly refreshing this page just to get a funny message.", 'Could have just been a typo.', 'Nothing to see here 👀', "Please don't tell me you're mashing your keyboard out of frustration.", "Don't panic! You might have typed it wrong.", "Make sure you've typed the right address.", 'Something could have moved in the server room while you were gone.', 'Or, less excitingly, the page was moved...', "Don't forget to like and subscribe!", "Let's say, for the sake of the argument, you're my sussy baka.", 'How do ya like me now?', `weeeeeeeeew. wew wew weeew weeew, <b>weeeeeeeeeeeeeeee</b> `, 'My roast is ruined!'];

    setHeader(headerNames[Math.floor(Math.random() * headerNames.length)]);
    setText(afterFirstLineTexts[Math.floor(Math.random() * afterFirstLineTexts.length)]);
  }, []);

  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <h1 dangerouslySetInnerHTML={{ __html: header }}></h1>
      <p>
        That page could not be found. <em dangerouslySetInnerHTML={{ __html: text }} /> {text.includes('wew wew') ? <Roach /> : ''}
      </p>
    </>
  );
}
