(window.NEXUS_WEEKLY_ISSUES = window.NEXUS_WEEKLY_ISSUES || {})["2026-10-16"] = {
  "id": "2026-10-16",
  "weekLabel": "Oct 12 – 16, 2026",
  "published": "2026-10-22",
  "headline": "Oil tops $100, inflation runs hot, and chip stocks have their worst week since 2025",
  "intro": "Three things collided this week. Inflation came in hotter than expected, attacks on shipping in the [[strait of hormuz|Strait of Hormuz]] pushed US oil above $100, and a sell-off in chip stocks dragged the Nasdaq to its worst week since June. Investors fled to the [[safe haven|safety]] of government bonds while they wait for the Fed's Oct 27–28 meeting.",
  "mood": {
    "label": "Risk-off",
    "tone": "down",
    "note": "Stocks down, bonds up, oil sharply higher"
  },

  "tldr": [
    "**Inflation is heating up.** Consumer prices rose 3.7% from a year ago in September (vs. 3.6% expected), up from 3.4% in August. Gasoline did about half the damage.",
    "**Oil crossed $100.** US crude settled at $101.41 on Friday as Iranian attacks on ships near the Strait of Hormuz intensified. International Brent briefly touched $110.",
    "**Chip stocks crashed.** The [[semiconductor index|chip-stock index]] fell 11.4% for the week. The Nasdaq lost about 4.5%, its worst week since June, and the S&P 500 fell about 2%.",
    "**The Fed is expected to pause, then hike.** No Fed meeting this week, but the [[beige book|Beige Book]] showed slowing growth and faster price increases. Most economists expect a hold on Oct 28 and a [[rate hike]] in December.",
    "**Bonds rallied.** Worried investors bought Treasuries, pulling the 10-year [[treasury yield|yield]] down to about 5.10% from about 5.24%."
  ],

  "markets": [
    { "name": "S&P 500", "value": "7,659", "change": -1.95, "unit": "%", "note": "Weekly change; sources range from −1.9% to −2.1%" },
    { "name": "Nasdaq Composite", "value": "26,140", "change": -4.5, "unit": "%", "note": "Worst week since June" },
    { "name": "Chip stocks (SOX)", "value": "11,137", "change": -11.4, "unit": "%", "note": "Worst week since April 2025" },
    { "name": "10-yr Treasury yield", "value": "~5.10%", "change": -14, "unit": "bp", "note": "Lower yield = bond prices rose" },
    { "name": "US crude (WTI)", "value": "$101.41", "change": 8, "unit": "%", "approx": true, "note": "Settled above $100 on Friday" },
    { "name": "Brent crude", "value": "$109.86", "change": null, "note": "Touched $110 intraday on Friday, a high not seen since May" },
    { "name": "Gold", "value": "$4,187", "change": -0.8, "unit": "%", "note": "Roughly flat despite the turmoil" },
    { "name": "Fed funds rate", "value": "3.75–4.00%", "change": null, "note": "Unchanged since the Sept 16 hike" }
  ],

  "stories": [
    {
      "category": "data",
      "date": "Wed, Oct 14",
      "title": "Inflation runs hotter than expected: September CPI hits 3.7%",
      "whatHappened": "The [[cpi|Consumer Price Index]] rose 0.6% in September and 3.7% [[y/y|from a year ago]], above the 3.6% economists expected and up from 3.4% in August. Gasoline jumped 9.1% in the month and accounted for about half of the increase. Rent and housing costs rose 0.4%, and used cars rose 0.7%.",
      "whyItMatters": "This is the number the Fed watches most closely. Even [[core inflation]], which strips out gas and food, came in a touch hot at 2.6%. A hotter reading makes it more likely the Fed raises rates again in December.",
      "plainEnglish": "Life got noticeably more expensive last month, mostly at the gas pump. The Fed doesn't like that trend.",
      "traderTake": "Yields rose on the release before reversing later in the week as growth fears took over. Headline CPI is running more than a point above core, so this is an energy shock rather than broad overheating. Watch whether gas prices start feeding into core categories, because that's what would make the Fed more aggressive.",
      "numbers": [
        { "label": "CPI, y/y", "actual": "3.7%", "expected": "3.6%", "prior": "3.4%" },
        { "label": "CPI, m/m", "actual": "0.6%" },
        { "label": "Core CPI, y/y", "actual": "2.6%", "expected": "2.5%" },
        { "label": "Core CPI, m/m", "actual": "0.3%", "expected": "0.2%" }
      ],
      "sources": [
        { "name": "BLS: CPI release", "url": "https://www.bls.gov/news.release/cpi.nr0.htm" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/14/cpi-inflation-report-september-2026.html" }
      ]
    },
    {
      "category": "data",
      "date": "Thu, Oct 15",
      "title": "Wholesale prices surge, and shoppers keep spending (mostly on gas)",
      "whatHappened": "The [[ppi|Producer Price Index]] jumped 1.3% in September, far above the ~0.5% expected, and is up 6.3% from a year ago. [[retail sales|Retail sales]] rose 0.8%, double the forecast, and August was revised up to +1.3%. But excluding cars and gas stations, sales rose only 0.2%. [[jobless claims|Jobless claims]] stayed very low at 199,000.",
      "whyItMatters": "Rising business costs tend to show up in consumer prices a few months later. The strong spending headline is mostly people paying more at the pump, not buying more stuff. Layoffs remain rare, which gives the Fed room to keep fighting inflation.",
      "plainEnglish": "Businesses are paying a lot more for what they buy. Shoppers are spending more, but mainly because gas costs more.",
      "traderTake": "Core PPI rose 0.7% on the month (5.0% y/y), which is a pipeline-inflation warning. The retail beat is low quality: the control group was roughly flat by one count. That combination of sticky prices and soft real demand is the stagflation-lite mix the market sold this week.",
      "numbers": [
        { "label": "PPI, m/m", "actual": "1.3%", "expected": "~0.5%" },
        { "label": "PPI, y/y", "actual": "6.3%" },
        { "label": "Core PPI, m/m", "actual": "0.7%" },
        { "label": "Retail sales, m/m", "actual": "0.8%", "expected": "0.3–0.4%", "prior": "1.3% (revised)" },
        { "label": "Retail ex autos & gas", "actual": "0.2%" },
        { "label": "Initial jobless claims", "actual": "199K", "expected": "200K", "prior": "198K" }
      ],
      "sources": [
        { "name": "BLS: PPI", "url": "https://www.bls.gov/ppi/" },
        { "name": "Census: Retail sales", "url": "https://www.census.gov/retail/marts/www/marts_current.pdf" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/15/september-producer-price-index-retail-sales-data.html" }
      ]
    },
    {
      "category": "world",
      "date": "Sun, Oct 11 – Fri, Oct 16",
      "title": "Oil breaks $100 as attacks in the Strait of Hormuz escalate",
      "whatHappened": "At least nine tankers and cargo ships were attacked near the Strait of Hormuz starting Sunday, and on Wednesday a container ship, the GFS Pride, sank after being struck and catching fire. It was the third commercial ship sunk in the war. US Central Command blamed an Iranian projectile; Iran's Revolutionary Guard said it was a mine. Houthi militants also fired missiles at Saudi Arabia, and Ukraine vowed to keep striking Russian refineries. [[wti|US crude]] settled at $101.41 on Friday and [[brent|Brent]] closed at $109.86.",
      "whyItMatters": "Oil feeds into almost everything: gas, shipping, airline tickets and plastics. Bloomberg counted at least 23 attacks on ships in or near the strait in the first two weeks of October alone. Higher oil keeps inflation elevated, which keeps pressure on the Fed.",
      "plainEnglish": "A key shipping lane for the world's oil is under attack, so oil got more expensive. That usually means higher prices at the pump within a week or two.",
      "traderTake": "CENTCOM insists US and partner forces control the strait and that tankers are still moving crude through it, and some analysts argue physical flows have largely recovered. Much of the premium is tail risk. Any diplomatic headline could knock several dollars off quickly, and so could Friday's Russia sanctions waiver (see the White House stories), so be careful chasing strength in CL and BZ.",
      "sources": [
        { "name": "CNBC: oil", "url": "https://www.cnbc.com/2026/10/16/oil-price-today-iran-strait-hormuz-ukraine-russia.html" },
        { "name": "CNBC: ship sinks", "url": "https://www.cnbc.com/2026/10/14/container-ship-sinks-strait-hormuz-as-iran-war-attacks.html" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-10-20/iran-strikes-more-ship-engine-rooms-in-ramp-up-of-hormuz-attacks" }
      ]
    },
    {
      "category": "markets",
      "date": "Mon, Oct 12 – Fri, Oct 16",
      "title": "Chip stocks have their worst week since April 2025",
      "whatHappened": "The [[semiconductor index|chip-stock index (SOX)]] fell 11.4% and closed lower for eight straight days, its longest losing streak since October 2008. The sell-off started with memory-chip makers after China's ChangXin Memory Technologies (CXMT) announced plans for a new server-memory product, which raised fears of a future glut. SK Hynix fell 26% and Samsung 22% over five days, and South Korea's Kospi fell 14.5% for the week. AI cloud provider CoreWeave dropped about 25%.",
      "whyItMatters": "AI and chip stocks have powered much of the market's gains, so when they fall, the whole index feels it. Investors are also questioning whether the huge borrowing behind AI data centers makes sense with interest rates this high.",
      "plainEnglish": "The hottest part of the stock market, AI and chips, had a very bad week. That pulled the Nasdaq and the S&P 500 down with it.",
      "traderTake": "Nvidia held up better than its peers (about −4% on the week). CoreWeave's 2031 bonds yielding over 16% is the stress signal to watch in AI credit. On the other side of the ledger, memory demand data hasn't cracked: DDR5 prices are up 79% this year, and no memory maker has flagged weaker orders. Big tech earnings next week will test the story.",
      "sources": [
        { "name": "Investing.com", "url": "https://www.investing.com/news/stock-market-news/nasdaq-futures-edge-lower-as-ai-spending-fed-rate-concerns-weigh-4952930" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/15/memory-stocks-micron-sk-hynix-samsung-china.html" },
        { "name": "Yahoo Finance", "url": "https://finance.yahoo.com/markets/stocks/article/micron-sk-hynix-stocks-tumble-as-chip-sell-off-deepens-following-south-korean-market-rout-134944408.html" }
      ]
    },
    {
      "category": "fed",
      "date": "Wed, Oct 14",
      "title": "Fed's Beige Book: growth is slowing, price increases are speeding up",
      "whatHappened": "The Fed's [[beige book|Beige Book]] survey of its 12 regional districts found 9 growing (most only slightly) and 3 flat, down from 10 growing in August. Every district reported rising prices, and four said price increases had sped up. None said they had slowed. Consumer spending was mostly flat and increasingly driven by high-income households. Hiring was little changed.",
      "whyItMatters": "This is the on-the-ground picture the Fed will bring into its Oct 27–28 meeting. Slower growth plus faster inflation is the hardest combination for a central bank, because the usual fix for one makes the other worse.",
      "plainEnglish": "Businesses around the country say things are slowing down while their costs keep going up.",
      "traderTake": "Chair Warsh said nothing about policy in Bangkok on Friday beyond repeating that the Fed will deliver price stability. Bloomberg reported that this nudged up market odds of an October hold. The Fed is now in its [[blackout period]] (Oct 17–29), so no more Fed speeches before the decision.",
      "sources": [
        { "name": "Federal Reserve: Beige Book", "url": "https://www.federalreserve.gov/monetarypolicy/files/BeigeBook_20261014.pdf" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-10-16/warsh-boosts-market-expectations-of-fed-hold-in-october" }
      ]
    },
    {
      "category": "whitehouse",
      "date": "Ongoing",
      "title": "White House holds fire on Iran until after the midterms",
      "whatHappened": "President Trump said on Oct 8 that the US will not resume military strikes on Iran before the Nov 3 [[midterms|midterm elections]], while keeping the naval [[blockade]] \"in full force and effect.\" Iran has stepped up ship attacks since then, but the US has not resumed strikes. Central Command rejects Iran's claim that it controls the waterway. A third aircraft carrier, the USS Theodore Roosevelt, could arrive by the end of October.",
      "whyItMatters": "This is the main policy driver behind oil prices right now. The pledge lowers the odds of a major escalation over the next two weeks, but Trump has said a post-election escalation remains an option. Early November is a key risk window for oil and markets.",
      "plainEnglish": "The President is holding off on new strikes on Iran until after the elections, but hasn't ruled them out afterwards.",
      "traderTake": "Mark Nov 3 and the days after on your calendar as event risk. Watch for any formal reply from Iran on reopening the strait, which its foreign minister said was coming. That's the most likely de-escalation catalyst.",
      "sources": [
        { "name": "AP (via Colorado Politics)", "url": "https://www.coloradopolitics.com/2026/10/08/trump-pledges-not-to-attack-iran-before-midterm-elections/" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/14/us-iran-war-trump-hormuz-saudi.html" }
      ]
    },
    {
      "category": "whitehouse",
      "date": "Fri, Oct 16",
      "title": "Trump waives new Russia sanctions and tariffs, and both parties push back",
      "whatHappened": "President Trump signed an executive order waiving key parts of the Russia [[sanctions]] law he signed in September, before they took effect. That includes tariffs on Russian goods and penalties on countries that buy Russian oil and gas. Some older Russia sanctions stay in place. Secretary of State Rubio pointed to trade talks with India as one factor. Republicans including Sens. Ted Cruz and Thom Tillis and Democrats including Sen. Richard Blumenthal criticized the move, and Ukraine's President Zelenskyy called it \"wrong.\"",
      "whyItMatters": "Penalizing buyers of Russian oil would have squeezed global supply further at a time when Hormuz is already disrupted. Waiving them takes some pressure off oil prices, which eased early the following week, and could help a US–India trade deal. It also opens a fight with Congress, which passed the law.",
      "plainEnglish": "The President switched off new penalties on Russia right before they started. It may help keep oil from rising further, but lawmakers in both parties are unhappy.",
      "traderTake": "This is a supply-positive headline for crude that partly offsets the Hormuz premium. Watch for any congressional attempt to override it, and for an India trade announcement.",
      "sources": [
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/17/trump-waives-russia-related-sanctions-tariffs-before-they-take-effect-.html" },
        { "name": "Fox Business", "url": "https://www.foxbusiness.com/politics/trump-faces-bipartisan-backlash-over-russia-sanctions-waiver-causing-top-republicans-break-ranks" },
        { "name": "Reuters (via US News)", "url": "https://money.usnews.com/investing/news/articles/2026-10-19/trumps-russia-sanctions-waiver-eases-indias-energy-woes-lifts-trade-deal-chances" }
      ]
    }
  ],

  "explainers": [
    {
      "kind": "Fed meeting",
      "title": "The Fed, explained: why it raised rates and what to expect Oct 27–28",
      "when": "Last meeting: Sept 16 · Next: Oct 27–28 (decision Wed 2:00 pm ET)",
      "inOneSentence": "The Fed raised rates in September for the first time since 2023 because inflation is running too hot. It's expected to pause this month and raise rates again in December.",
      "qa": [
        {
          "q": "What did the Fed decide last time?",
          "a": "On Sept 16 the [[fomc|Fed's rate-setting committee]] voted 12–0 to raise the [[fed funds rate]] by a quarter point (25 [[basis point|basis points]]), to a range of 3.75%–4.00%. It was the first [[rate hike]] since July 2023, after the Fed held rates steady at its first five meetings of the year."
        },
        {
          "q": "Why did they raise rates?",
          "a": "Inflation has stayed above the Fed's 2% goal for years, and the Fed wasn't confident it was coming down fast enough. Chair Kevin Warsh said the hike \"removed a dose of [[accommodation]]\", meaning the Fed eased off the gas so borrowing costs better match the fight against inflation."
        },
        {
          "q": "Was the vote close?",
          "a": "No. It was unanimous, which surprised some observers after several split votes earlier in the year. A unanimous vote signals the committee is united on fighting inflation."
        },
        {
          "q": "What did the Fed signal about the future?",
          "a": "The [[dot plot]], where each official pencils in where they think rates should go, showed a median of one more quarter-point hike before year-end."
        },
        {
          "q": "How did the White House react?",
          "a": "President Trump criticized the hike right away, saying US rates \"should be 1%, or less.\" In a Time interview published Oct 1 he said Warsh should have voted against it, but he blamed what he called a \"very hostile board\" rather than Warsh personally."
        },
        {
          "q": "So what happens on Oct 28?",
          "a": "Most likely nothing. In a Reuters poll taken Oct 16–20, 94 of 100 economists expected rates to stay at 3.75%–4.00%. Markets and most economists expect the next hike on Dec 9. This week's hot inflation reports keep that December hike firmly on the table."
        }
      ],
      "quotes": [
        {
          "speaker": "Fed Chair Kevin Warsh",
          "quote": "The plain fact is that inflation is too high and has been for too long.",
          "meaning": "The Fed is more worried about prices than about slowing the economy, so it's willing to raise rates even if that hurts a bit."
        },
        {
          "speaker": "Fed Chair Kevin Warsh",
          "quote": "…removed a dose of accommodation…",
          "meaning": "We made money a little more expensive to borrow on purpose."
        },
        {
          "speaker": "President Donald Trump",
          "quote": "[Rates] should be 1%, or less.",
          "meaning": "The White House wants much lower rates. The Fed is independent and is going the other way."
        }
      ],
      "forYou": [
        "**Credit cards and variable loans** follow the Fed. They got a little more expensive in September and could rise again in December.",
        "**Savings accounts and CDs** pay more when the Fed hikes, which is a good time to shop for a better rate.",
        "**Mortgages** follow the 10-year Treasury yield more than the Fed directly. It eased this week to about 5.1%, but it's still high."
      ],
      "bottomLine": "Expect a pause in October, with the Fed's tone (not the decision) moving markets. A December hike is the base case unless inflation cools quickly.",
      "sources": [
        { "name": "Fed: Warsh press conference transcript (Sept 16)", "url": "https://www.federalreserve.gov/mediacenter/files/FOMCpresconf20260916.pdf" },
        { "name": "Fox Business", "url": "https://www.foxbusiness.com/economy/federal-reserve-interest-rate-decision-september-16-2026" },
        { "name": "Bloomberg Law", "url": "https://news.bloomberglaw.com/banking-law/trump-says-warsh-should-have-voted-against-feds-rate-hike" },
        { "name": "Reuters poll via US News", "url": "https://money.usnews.com/investing/news/articles/2026-10-20/fed-to-skip-october-but-raise-rates-again-in-december-nearly-all-economists-say-reuters-poll" }
      ]
    },
    {
      "kind": "White House policy",
      "title": "Iran, the Strait of Hormuz and your gas tank, explained",
      "when": "Trump's no-strikes pledge: Oct 8 · Midterm elections: Nov 3",
      "inOneSentence": "Iran is attacking ships in a key oil shipping lane, the US is defending but not striking back until after the elections, and that uncertainty is what's pushing oil above $100.",
      "qa": [
        {
          "q": "What is the Strait of Hormuz and why does it matter?",
          "a": "It's a narrow sea passage between Iran and Oman, the only route out of the Persian Gulf. Before the conflict, roughly a fifth of the world's oil passed through it. When it's disrupted, oil prices jump worldwide."
        },
        {
          "q": "What exactly did President Trump promise?",
          "a": "On Oct 8 he posted that the US will not resume military strikes on Iran before the Nov 3 midterm elections, while talks continue. He also said the naval [[blockade]] stays fully in place. He has hinted that a bigger escalation after the election is still possible."
        },
        {
          "q": "How is the US responding to the ship attacks right now?",
          "a": "Defensively. US forces are helping escort oil through the strait rather than striking Iran, and Central Command says it, not Iran, controls the waterway. But attacks have climbed: at least 23 ships were hit or targeted in or near the strait in the first two weeks of October."
        },
        {
          "q": "Is there a diplomatic way out?",
          "a": "Talks have stalled since Trump rejected an Iranian proposal to reopen the strait in late September. Iran's foreign minister said a formal reply was coming within days, but no breakthrough has been reported."
        },
        {
          "q": "What does this mean for prices?",
          "a": "Gasoline rose 9.1% in September alone and drove about half of that month's inflation. As long as oil stays near $100, expect pressure on gas prices, airfares and shipping costs. That pressure also pushes the Fed toward more [[rate hike|rate hikes]]."
        }
      ],
      "quotes": [
        {
          "speaker": "President Trump, Truth Social (Oct 8)",
          "quote": "The Blockade will remain in full force and effect.",
          "meaning": "No new strikes for now, but the US isn't backing off the pressure campaign either."
        },
        {
          "speaker": "US Central Command",
          "quote": "American forces and regional partners clearly control the Strait of Hormuz.",
          "meaning": "The US says oil is still getting through, so part of the price spike is fear rather than an actual shortage."
        }
      ],
      "forYou": [
        "**Gas prices** usually follow crude oil within a week or two. Expect them to stay elevated while oil is near $100.",
        "**Energy stocks** tend to benefit and **airlines and shippers** tend to suffer when oil spikes.",
        "**After Nov 3** is the window to watch for either a deal (oil drops) or escalation (oil jumps)."
      ],
      "bottomLine": "Oil is trading on headlines from the Gulf. Expect volatility around the Nov 3 election and any word from Iran on reopening the strait.",
      "sources": [
        { "name": "AP (via Colorado Politics)", "url": "https://www.coloradopolitics.com/2026/10/08/trump-pledges-not-to-attack-iran-before-midterm-elections/" },
        { "name": "CNBC", "url": "https://www.cnbc.com/2026/10/09/iran-war-strait-hormuz-tanker-attack-oil.html" },
        { "name": "Bloomberg", "url": "https://www.bloomberg.com/news/articles/2026-10-20/iran-strikes-more-ship-engine-rooms-in-ramp-up-of-hormuz-attacks" }
      ]
    }
  ],

  "weekAhead": [
    { "date": "Oct 17 – 29", "day": "All week", "event": "Fed blackout period", "why": "No Fed officials speak on policy before the Oct 28 decision, so data and headlines drive rate expectations.", "importance": 2 },
    { "date": "Oct 20", "day": "Tue", "time": "After close", "event": "Netflix earnings", "why": "First big tech-adjacent report of the season.", "importance": 1 },
    { "date": "Oct 21", "day": "Wed", "time": "After close", "event": "Tesla & Meta earnings", "why": "A key test of AI spending plans after this week's chip sell-off.", "importance": 3 },
    { "date": "Oct 22", "day": "Thu", "time": "8:30 am ET", "event": "Weekly jobless claims", "why": "Still the cleanest real-time read on layoffs.", "importance": 1 },
    { "date": "Oct 23", "day": "Fri", "time": "9:45 am ET", "event": "Flash PMIs (S&P Global)", "why": "First look at October business activity and price pressures.", "importance": 2 },
    { "date": "Oct 27 – 28", "day": "Tue–Wed", "time": "Decision 2:00 pm ET Wed", "event": "FOMC meeting + Warsh press conference", "why": "Hold expected; the tone on December decides the market reaction.", "importance": 3 },
    { "date": "Nov 3", "day": "Tue", "event": "US midterm elections", "why": "Also the end of the White House's no-strikes-on-Iran window.", "importance": 3 },
    { "date": "Nov 10", "day": "Tue", "time": "8:30 am ET", "event": "October CPI", "why": "Shows whether the gasoline shock is spreading into broader prices.", "importance": 3 }
  ]
};
