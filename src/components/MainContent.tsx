import { useState, useEffect } from "react";

const books = [
  {
    title: "Blackwater: The Rise of the World's Most Powerful Mercenary Army",
    author: "Jeremy Scahill",
    description: "The history of the private military contractor Blackwater and how it rose to power, exposing its corporate and military connections.",
    link: "https://web.archive.org/web/20181104061539/http://www.dailykos.com/storyonly/2007/3/25/112857/665",
    gradient: "from-zinc-800 to-zinc-950",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/iraqforsaledvd150.jpg"
  },
  {
    title: "Takeover: The Return of the Imperial Presidency and the Subversion of American Democracy",
    author: "Charlie Savage",
    description: "Charlie Savage's Pulitzer Prize-winning investigation into the expansion of presidential power under the Bush administration.",
    link: "https://web.archive.org/web/20181104061539/http://www.amazon.com/Takeover-Imperial-Presidency-Subversion-Democracy/dp/0316118044",
    gradient: "from-red-950 to-neutral-900"
  },
  {
    title: "The Sorrows of Empire – Militarism, Secrecy, and the End of the Republic",
    author: "Chalmers Johnson",
    description: "An analysis of the growth of American militarism and its threat to the US Constitution and democratic values.",
    link: "https://web.archive.org/web/20181104061539/http://www.americanempireproject.com/bookpage.asp?ISBN=0805077979",
    gradient: "from-emerald-950 to-neutral-900"
  },
  {
    title: "Nemesis: The Last Days of the American Republic",
    author: "Chalmers Johnson",
    description: "The final volume of Chalmers Johnson's Blowback Trilogy, detailing the imperial presidency and the subversion of the republic.",
    link: "https://web.archive.org/web/20181104061539/http://www.buzzflash.com/store/reviews/523",
    gradient: "from-cyan-950 to-slate-900"
  },
  {
    title: "Project Censored 2007",
    author: "Peter Phillips and Project Censored",
    description: "The top 25 censored news stories of the year, highlighting media malfunction and corporatism.",
    link: "https://web.archive.org/web/20181104061539/http://www.projectcensored.org/",
    gradient: "from-amber-950 to-stone-900"
  },
  {
    title: "Into the Buzzsaw: Leading Journalists Expose the Myth of a Free Press",
    author: "Kristina Borjesson (Editor)",
    description: "Leading journalists expose corporate censorship, government interference, and personal struggles to publish truths with consequence.",
    link: "https://web.archive.org/web/20181104061539/http://www.amazon.com/Into-Buzzsaw-Leading-Journalists-Expose/dp/1573929727",
    gradient: "from-violet-950 to-neutral-900"
  },
  {
    title: "Day of Deceit: The Truth about FDR and Pearl Harbor",
    author: "Robert B. Stinnett",
    description: "An investigation using newly declassified government documents proving that FDR and White House associates knew the attack on Pearl Harbor was coming and systematically provoked it.",
    link: "https://web.archive.org/web/20181104061539/http://www.lewrockwell.com/orig/trask1.html",
    gradient: "from-yellow-950 to-stone-950"
  },
  {
    title: "The Final Report on the Bombing of the Alfred P. Murrah Building",
    author: "Charles Key",
    description: "The OK City Citizens Commission Report that deconstructed the official narrative of the Oklahoma City bombing.",
    link: "https://web.archive.org/web/20181104061539/http://www.amazon.ca/Final-Report-Bombing-Charles-Key/dp/0971051305",
    gradient: "from-blue-950 to-zinc-900"
  },
  {
    title: "Overthrow: America’s Century of Regime Change from Hawaii to Iraq",
    author: "Stephen Kinzer",
    description: "A historical account of the century of regime changes initiated and conducted by the United States government.",
    link: "https://web.archive.org/web/20181104061539/http://www.amazon.com/Overthrow-Americas-Century-Regime-Change/dp/0805082409",
    gradient: "from-orange-950 to-stone-900"
  },
  {
    title: "An Act of State: The Execution of Martin Luther King",
    author: "William Pepper",
    description: "The historic 1989 Memphis jury trial that found Martin Luther King Jr. was executed by a conspiracy involving state and federal officials, not James Earl Ray.",
    link: "https://web.archive.org/web/20181104061539/http://www.amazon.com/Act-State-Execution-Martin-Luther/dp/1859846955",
    gradient: "from-rose-950 to-zinc-900"
  }
];

const films = [
  {
    title: "Why We Fight",
    director: "Eugene Jarecki",
    description: "Exploring a half-century of U.S. foreign policy, this film reveals how political and corporate interests have become entangled in the business of war.",
    link: "https://web.archive.org/web/20150223065854/http://www.amazon.com/Why-We-Fight-John-McCain/dp/B000FBH3W2/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/whywefight150.jpg",
    gradient: "from-slate-800 to-slate-950"
  },
  {
    title: "Iraq for Sale: The War Profiteers",
    director: "Robert Greenwald",
    description: "The story of what happens to everyday Americans when corporations go to war. Uncovers connections between private corporations making a killing in Iraq (Blackwater, Halliburton/KBR, CACI) and the decision-makers.",
    link: "https://web.archive.org/web/20150223065854/http://iraqforsale.org/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/iraqforsaledvd150.jpg",
    gradient: "from-red-900 to-red-950"
  },
  {
    title: "No End in Sight",
    director: "Charles Ferguson",
    description: "A lucid catalog of the catastrophic decisions and turning points in the occupation of Iraq, identifying Rumsfeld, Cheney, Wolfowitz, and Bremer.",
    link: "https://web.archive.org/web/20150223065854/http://www.noendinsightmovie.com/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/noendinsight150.jpg",
    gradient: "from-emerald-900 to-neutral-900"
  },
  {
    title: "Orwell Rolls in his Grave",
    director: "Robert Kane Pappas",
    description: "Critically examines the Fourth Estate, once the bastion of American democracy, and asks if a consolidated corporate media can turn lies into truth.",
    link: "https://web.archive.org/web/20150223065854/http://www.orwellrollsinhisgrave.com/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/orwell150.jpg",
    gradient: "from-indigo-900 to-neutral-905"
  },
  {
    title: "Outfoxed: Rupert Murdoch's War on Journalism",
    director: "Robert Greenwald",
    description: "Examines how media empires, led by Rupert Murdoch's Fox News, have run a race to the bottom in television news, threatening the public's right to know.",
    link: "https://web.archive.org/web/20150223065854/http://www.outfoxed.org/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/outfoxed150.jpg",
    gradient: "from-amber-900 to-stone-900"
  },
  {
    title: "9/11 Press for Truth",
    director: "Ray Nowosielski",
    description: "Out of the grieving thousands, six activist families tell the story of how they took on Washington to compel the 9/11 Commission investigation, only to watch it fail to answer key questions.",
    link: "https://web.archive.org/web/20150223065854/https://web.archive.org/web/20120504083042/http://www.911pressfortruth.com/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/DVDpress4truth150.jpg",
    gradient: "from-cyan-900 to-slate-900"
  },
  {
    title: "Coverup: Behind the Iran Contra Affair",
    director: "Barbara Trent",
    description: "Exposes the shadow government of assassins, arms dealers, drug smugglers, and former CIA operatives running foreign policy, including plans to suspend the Constitution.",
    link: "https://web.archive.org/web/20150223065854/http://www.empowermentproject.org/pages/coverup.html",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/coverupbehindtheirancontraaffair150.jpg",
    gradient: "from-rose-900 to-zinc-900"
  },
  {
    title: "Uncounted: The New Math of American Elections",
    director: "David Earnhardt",
    description: "An uplifting documentary on Election Integrity, featuring segment interviews with whistleblowers and reformers taking action to protect democracy.",
    link: "https://web.archive.org/web/20150223065854/http://www.uncountedthemovie.com/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/Uncounted150.jpg",
    gradient: "from-blue-900 to-slate-950"
  },
  {
    title: "Bringing Down a Dictator",
    director: "Steve York",
    description: "Documents the spectacular defeat of Slobodan Milosevic in Yugoslavia using nonviolent strategies, rock concerts, internet, email, and massive civil disobedience.",
    link: "https://web.archive.org/web/20150223065854/http://www.aforcemorepowerful.org/films/bdd/",
    imageUrl: "https://web.archive.org/web/20150223065854im_/http://truthemergency.us/images/films/bringingdown150.jpg",
    gradient: "from-stone-800 to-stone-900"
  }
];

const onlineResources = [
  {
    title: "Taming the Giant Corporation",
    description: "State-of-the-Art Memes & Tactics for Corporate Subordination. Offers full video and audio lecture archives concerning the restriction of corporate power.",
    link: "https://web.archive.org/web/20150223102818/http://tamethecorporation.org/agenda.html",
    imageUrl: "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/tamingcorpsheader400.jpg"
  },
  {
    title: "National Conference for Media Reform (NCMR 2007)",
    description: "Perspectives on America's Populist Nervous System. Highlights full media and reform lectures and sessions advocating for democratizing communication networks.",
    link: "https://web.archive.org/web/20150223102818/http://www.freepress.net/ncmr07/=video07",
    imageUrl: "https://web.archive.org/web/20150223102818im_/http://truthemergency.us/images/mediareformheader400.jpg"
  },
  {
    title: "George Carlin on Education vs. Corporate Interest",
    description: "Classic black comedic relief segment exposing the corporate interest in keeping the public under-informed.",
    youtubeId: "AMqJvhmD5Yg"
  },
  {
    title: "Project for the New American Century (PNAC) Playlist",
    description: "Connecting the dots of neo-imperialism. Documenting the policy proposals that shaped post-2001 foreign policy.",
    youtubeId: "pa1AYlP47cI"
  },
  {
    title: "A John Pilger Collection",
    description: "Four hard-hitting documentaries by investigative journalist John Pilger exploring imperialism and corporate power around the globe. Select a documentary below to watch:",
    youtubePlaylists: [
      { name: "New Rulers of the World", id: "1uW1qJoWYPg" },
      { name: "War by Other Means", id: "AeYiFu6y3a4" },
      { name: "Flying the Flag", id: "rqbPS1nNcEU" },
      { name: "Stealing a Nation", id: "0zhGvId4fcc" }
    ]
  },
  {
    title: "Secret Wars of the CIA",
    description: "Exposing operations, military involvement, and media complicity in operations affecting millions across the third world.",
    youtubeId: "bmYZ_kWHk3Q"
  },
  {
    title: "The Century of the Self (Adam Curtis)",
    description: "How psychoanalysis was used by those in power to control and steer mass democracy using consumption and public relations.",
    youtubeId: "gZw8NRCPmSc"
  }
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState<'books' | 'films' | 'online'>('books');
  const [pilgerVideoId, setPilgerVideoId] = useState("1uW1qJoWYPg");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#resources")) {
        const queryIndex = hash.indexOf("?");
        if (queryIndex !== -1) {
          const params = new URLSearchParams(hash.slice(queryIndex + 1));
          const tab = params.get("tab");
          if (tab === "books" || tab === "films" || tab === "online") {
            setActiveTab(tab);
          }
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main id="top" className="w-full scroll-mt-6">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Home</h1>

      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
        Strategizing for Democratic Survival
      </h2>

      <p className="text-base md:text-lg text-center mb-6">
        <strong>
          This site is being maintained as an archive and reference for similar future gatherings, but also to refer readers to one of the conference's most positive outcomes,{" "}
          <a href="https://web.archive.org/web/20081005211802/http://mediafreedom.pnn.com/5174-independent-news-sources" className="text-[hsl(var(--link-color))] hover:underline">
            Project Censored's new trusted news & analysis compendium,
          </a>{" "}
          as an alternative and antidote to the chronically truth-challenged corporate media.
        </strong>
      </p>

      <hr className="border-border my-6" />

      <p className="text-base md:text-lg text-center italic mb-6">
        <strong>A Collaborative Strategy Summit for Media Pros, Scholars,</strong><br />
        <strong>Activists and Whistleblowers Working for Truth, Transparency</strong><br />
        <strong>and an Informed Resurgent Democracy</strong>
      </p>

      <h3 className="font-bold text-lg md:text-xl mb-4">PROCEEDINGS</h3>

      <p className="text-base md:text-lg mb-6">
        The "Publicizing Truths with Consequence" organizing committee would like to sincerely thank the 330+ dedicated media activists, journalists and whistleblowers who devoted so many hours and so much effort and intelligence to make this gathering such a creative and productive event. We shall be posting select audio and video records of the proceedings and its concrete outcomes here and at the summit{" "}
        <a href="#" className="text-[hsl(var(--link-color))] hover:underline">PNN site</a>{" "}
        in the coming weeks. In the meantime, we offer the recently received video playlist below to preview the quality of the discourse. For additional videos, please click{" "}
        <a href="http://www.youtube.com/user/wdkubiak" className="text-[hsl(var(--link-color))] hover:underline">here</a>.
      </p>

      <div className="mb-4 aspect-video">
        <iframe
          loading="lazy"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/_6D9Vl7Bu9U"
          title="Truth Emergency II"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-sm"
        />
      </div>

      <p className="text-base md:text-lg text-center mb-6">
        Former Georgia Congresswoman and Green Party presidential candidate Cynthia McKinney on corporate media complicity in the distortion of modern history
      </p>

      <h3 className="font-bold text-lg md:text-xl mb-4">PROLOGUE</h3>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-6 text-base md:text-lg italic">
        <p>"Democracy cannot survive, much less thrive with the level of big corporate and big government interference and intimidation in news."</p>
        <footer className="mt-2 text-right not-italic">— Dan Rather</footer>
      </blockquote>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-6 text-base md:text-lg italic">
        <p>"Practically every progressive struggle — campaign finance reform, rain forest destruction and global warming, sweatshops, family farms, fair trade, health care for all, unionization, military spending and arms sales, tax reform, alternative energy, healthy food, media access, hazardous waste dumps, redlining, alternative medicine, you name it — is being fought against one cluster of corporations or another..."</p>
        <footer className="mt-2 text-right not-italic">— Jim Hightower</footer>
      </blockquote>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-6 text-base md:text-lg italic">
        <p>"Journalism's job is not impartial 'balanced' reporting. Journalism's job is to tell the people what is really going on."</p>
        <footer className="mt-2 text-right not-italic">— George Seldes</footer>
      </blockquote>

      <h3 className="font-bold text-lg md:text-xl mb-4">PURPOSE</h3>
      <p className="text-base md:text-lg mb-6">
        A collaborative gathering of media veterans, scholars, activists & whistleblowers to assess and marshal our most powerful messages to rectify history, awaken a critical mass, and effectively expose the accelerating corporate coup d'état.
      </p>

      <h3 className="font-bold text-sm mb-3">VISION</h3>
      <p className="text-sm mb-4">
        Truth movements that arise after pivotal events like electoral fraud, 9/11, key assassinations, false flag ops and casus belli fabrications can/should become more than forensic inquiries into a single heinous crime. They can also strive to expose wider patterns of illicit control, deception and propaganda, and use their revelations to rouse entire societies to reject a malignant status quo.
      </p>
      <p className="text-sm mb-4">
        Consequently, this is not a media conference to dissect or condemn the conglomerates, demand reforms, or even celebrate the increasing vigor of independent journalism. It is intended as a strategy session for already active and influential players to coordinate their most revealing messages, forge tactical alliances, innovate new distribution technologies, and mutually enhance each others' strongest work.
      </p>

      <h3 className="font-bold text-sm mb-3">TARGET PARTICIPANTS</h3>
      <p className="text-sm mb-4">
        – Leading media activists, A/V producers, and funding angels.
      </p>

      <h3 className="font-bold text-sm mb-3">GOALS</h3>
      <ul className="text-sm mb-4 list-disc pl-5 space-y-2">
        <li>Gather key media constituencies needed to inject transformative truths* into 2008 political news and electoral debate;</li>
        <li>Honor brave audacious "truth war veterans" (casualties & survivors) and learn from their experiences;</li>
        <li>Devise coherent decentralized models for distribution of suppressed news, synergistic truth-telling, and collaborative strategies;</li>
        <li>In sum, discover in this moment of Constitutional crisis, ecological peril and widening war, whether 300 top investigative journalists, whistleblowers and indy media all-stars can transform the way Americans perceive and defend their world.</li>
      </ul>

      <hr className="border-border my-6" />

      <h3 className="font-bold text-sm mb-3">CLOSING NEWS NOTES:</h3>
      <h4 className="font-bold text-sm mb-3">BRIEF HISTORY OF MODERN CORPORATE-TOTALITARIAN AFFINITY</h4>
      <p className="text-sm mb-4">
        (Two essential eye-opening excerpts from{" "}
        <a href="http://www.thecorporation.com/" className="text-[hsl(var(--link-color))] hover:underline">The Corporation</a>)
      </p>

      <div className="mb-4 aspect-video">
        <iframe
          loading="lazy"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/Yfu44knmLOE"
          title="Blackwater: The Shadow War"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-sm"
        />
      </div>

      <hr className="border-border my-6" />

      <h3 className="font-bold text-sm mb-3">THE LIGHTER, BRIGHTER SIDES OF THE CORPORATIST AGENDA</h3>

      <div className="mb-4 aspect-video">
        <iframe
          loading="lazy"
          width="100%"
          height="100%"
          src="https://www.youtube-nocookie.com/embed/viVAAy_qkx0"
          title="Poll: Bullshit Is Most Important Issue For 2008 Voters"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-sm"
        />
      </div>

      <section id="coup-news" className="pt-10 border-t border-border mt-10">
        <h2 className="text-xl font-bold text-primary mb-4">Coup News</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li>
            <a href="https://www.nancho.net" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--link-color))] hover:underline">
              Nancho.net main archive
            </a>
          </li>
          <li>
            <a href="https://projectcensored.org" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--link-color))] hover:underline">
              Project Censored
            </a>
          </li>
        </ul>
      </section>

      <section id="resources" className="pt-10 border-t border-border mt-10 scroll-mt-6">
        <h2 className="text-xl font-bold text-primary mb-2">Recommended References</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Please review as many of these books, films, and online databases as possible to prepare for summits.
        </p>

        {/* Tab Headers */}
        <div className="flex border-b border-border mb-6 gap-2">
          <button
            onClick={() => setActiveTab('books')}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'books'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Recommended Books
          </button>
          <button
            onClick={() => setActiveTab('films')}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'films'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Recommended Films
          </button>
          <button
            onClick={() => setActiveTab('online')}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === 'online'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            Online Resources
          </button>
        </div>

        {/* Tab Contents */}
        {activeTab === 'books' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {books.map((book, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                {/* Book Cover Fallback */}
                <div className={`relative flex-shrink-0 w-28 h-40 bg-gradient-to-br ${book.gradient} text-white flex flex-col justify-between p-3 rounded shadow-md overflow-hidden text-center`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-85">Book</div>
                  <div className="text-xs font-bold leading-tight line-clamp-4 my-auto">{book.title}</div>
                  <div className="text-[9px] italic opacity-90 truncate">{book.author}</div>
                  {book.imageUrl && (
                    <img
                      src={book.imageUrl}
                      alt={book.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
                {/* Book Details */}
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <h4 className="font-bold text-sm leading-tight text-foreground mb-1 line-clamp-2">{book.title}</h4>
                    <p className="text-xs italic text-muted-foreground mb-2">by {book.author}</p>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-normal mb-3">{book.description}</p>
                  </div>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[hsl(var(--link-color))] hover:underline inline-flex items-center gap-1"
                  >
                    View Reference / Buy →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'films' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {films.map((film, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row gap-4 p-4 border border-border rounded-lg bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                {/* Film Poster Fallback */}
                <div className={`relative flex-shrink-0 w-28 h-40 bg-gradient-to-br ${film.gradient} text-white flex flex-col justify-between p-3 rounded shadow-md overflow-hidden text-center`}>
                  <div className="text-[10px] uppercase font-bold tracking-wider opacity-85">Film</div>
                  <div className="text-xs font-bold leading-tight line-clamp-4 my-auto">{film.title}</div>
                  <div className="text-[9px] italic opacity-90 truncate">{film.director}</div>
                  {film.imageUrl && (
                    <img
                      src={film.imageUrl}
                      alt={film.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
                {/* Film Details */}
                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <h4 className="font-bold text-sm leading-tight text-foreground mb-1 line-clamp-2">{film.title}</h4>
                    <p className="text-xs italic text-muted-foreground mb-2">Directed by {film.director}</p>
                    <p className="text-xs text-muted-foreground line-clamp-3 leading-normal mb-3">{film.description}</p>
                  </div>
                  <a
                    href={film.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[hsl(var(--link-color))] hover:underline inline-flex items-center gap-1"
                  >
                    Click to Reference →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'online' && (
          <div className="space-y-8">
            {onlineResources.map((item, idx) => (
              <div key={idx} className="p-5 border border-border rounded-lg bg-card text-card-foreground shadow-sm">
                <h4 className="font-bold text-base text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                {/* Render static linked websites */}
                {item.link && (
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="max-h-24 w-auto rounded border border-border shadow-sm"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    )}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[hsl(var(--link-color))] hover:underline"
                    >
                      Access full archive here →
                    </a>
                  </div>
                )}

                {/* Render YouTube playlist embeds (Pilger collection) */}
                {item.youtubePlaylists && (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {item.youtubePlaylists.map((pl, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setPilgerVideoId(pl.id)}
                          className={`px-3 py-1.5 rounded text-xs font-semibold border transition-colors ${
                            pilgerVideoId === pl.id
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-background text-muted-foreground border-border hover:bg-muted hover:text-foreground'
                          }`}
                        >
                          {pl.name}
                        </button>
                      ))}
                    </div>
                    <div className="aspect-video w-full max-w-[640px] mx-auto">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube-nocookie.com/embed/${pilgerVideoId}`}
                        title="John Pilger Documentary"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded shadow-md"
                      />
                    </div>
                  </div>
                )}

                {/* Render single YouTube video embeds */}
                {item.youtubeId && (
                  <div className="aspect-video w-full max-w-[640px] mx-auto">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded shadow-md"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="videos" className="pt-10 border-t border-border mt-10">
        <h2 className="text-xl font-bold text-primary mb-4">Video Inspirations</h2>
        <p className="text-sm leading-relaxed">
          See the video embeds above for a preview of the kinds of talks, interviews, and short clips that informed the original summit.
        </p>
      </section>

      <section id="corporatism" className="pt-10 border-t border-border mt-10">
        <h2 className="text-xl font-bold text-primary mb-4">Corporatism Wire</h2>
        <p className="text-sm leading-relaxed">
          A placeholder section for corporatism-related headlines and summaries that were originally curated on the old site.
        </p>
      </section>

      <section id="plot" className="pt-10 border-t border-border mt-10">
        <h2 className="text-xl font-bold text-primary mb-4">Plot to Seize the White House</h2>
        <p className="text-sm leading-relaxed">
          A placeholder section for the background links and excerpts related to the White House coup narrative from the original archive.
        </p>
      </section>

      <section id="links" className="pt-10 border-t border-border mt-10">
        <h2 className="text-xl font-bold text-primary mb-4">Links</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li>
            <a href="https://www.nancho.net/truthemergency/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--link-color))] hover:underline">
              Original Truth Emergency archive (nancho.net)
            </a>
          </li>
          <li>
            <a href="#top" className="text-[hsl(var(--link-color))] hover:underline">
              Back to top
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
