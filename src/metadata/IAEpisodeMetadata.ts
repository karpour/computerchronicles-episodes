export type IAMetadata = {
    ia_title: string,
    ia_description: string,
    ia_identifier: string,
    ia_year?: number,
    ia_broadcastyear?: number,
    ia_date?: string,
    ia_proddate?: string,
    ia_subject?: string,
    episodeNumber?: number
}

const iaMetadata: IAMetadata[] = [{
    ia_title: "Groupware 1994",
    ia_description: "As business migrated from the standalone PC to the networked PC, a hot new application area became groupware, enabling collaboration within a company. This program reviews Network Scheduler 3 from Powercore, Lotus Notes, WordPerfect Office, The Meeting Room from Eden Systems, GroupSystems 5 from Ventana, ShowMe 2.0 from SunSolutions, and LiveBoard from Xerox. Guests include Scott McNealy. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "1125",
    episodeNumber: 1125,
},
{
    ia_title: "MacWorld Expo Boston 1994",
    ia_description: "On location coverage of the annual Boston MacWorld Expo. Guests include analyst Tim Bajarin and writer Stewart Alsop. New products covered include System 7.5, WordPerfect for Mac, Claris Office Suite, PowerBook, Loga Vista, Newton, Visioneer, Wacom Tablet, Hyperglot, Opcode Systems, and Solustan. Originally broadcast in 1994.Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "1202",
    episodeNumber: 1202,
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_subject: "macworld;macintosh;apple"
},
{
    ia_title: "E-Mail Update",
    ia_description: "A user's guide to new email tools. Demonstrations include Eudora Pro 4.1, Attachment Opener 2.0, Conversions Plus 4.6, Master Clips Email Animator, and Intel Create & Share. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "1652",
    episodeNumber: 1652
},
{
    ia_title: "SPA Codie Awards 1998",
    ia_description: "On location coverage of the annual CODIE awards presented by the Software Publishers Association. Twenty-three awards were given to the best new software programs in a variety of categories. Winner of the lifetime achievement award was Dan Bricklin, developer of VisiCalc, the first spreadsheet. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "1998Codi98",
    ia_date: "1998-08-25T00:00:00.000Z",
    ia_proddate: "1998-08-25T00:00:00.000Z",
    ia_subject: "codie;awards;SPA"
},
{
    ia_title: "1999 Codies",
    ia_description: "On location coverage of the annual CODIE awards presented by the Software and Information Industry Association (SIIA). Thirty-eight awards were given out for the best new software programs of the year. Guest presenters included actor Robert Urich and former Apple CEO Gil Amelio. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "1999Codi99",
    ia_year: 1999,
    ia_date: "1999-01-01T00:00:00.000Z",
    ia_proddate: "1999-08-24T00:00:00.000Z",
    ia_subject: "Codies;software awards;SIIA"
},
{
    ia_title: "3D Graphics",
    ia_description: "A review of the state of the art in three dimensional graphics technology. Demonstrations include the Voodoo Banshee 3D card, the 3Dfx graphics accelerator, LiveArt 98 software, MetaCreations Poser 3, and Lightwave 3D. Featured is a visit to Pacific Data Images (PDI) and their work on the computer generated animation movie ANTZ. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "3DGraphi"
},
{
    ia_title: "Amiga and Atari",
    ia_description: "How much computer can you get at the bottom end of the market - comparison between the Commodore Amiga and the Atari 520ST.\nGuests: Rick Geiger, Commodore; Tim Mott, Electronic Arts; Bryan Kerr, Atari; Jim Tittsler, Atari; Lewis Moore, Home Computing; George Morrow, Morrow Computing; Gary Kildall, Digital Research; Tim Bajarin, Creative Strategies\nProducts/Demos: Atari 800, Commodore 64, Amiga IBM PC Emulator, Commodore Amiga, Atari 520, STNEO Paint. Originally broadcast in December 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Amigaand1985",
    ia_year: 1985,
    ia_date: "1985-12-03T00:00:00.000Z",
    ia_proddate: "1985-12-03T00:00:00.000Z",
    ia_subject: "Episode Year: 1985;Television Programs;Computers: History;amiga;atari"
},
{
    ia_title: "Computer Bowl X - Part 2",
    ia_description: "The conclusion of this annual quiz show classic on computer trivia in which East meets West. East team: Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff. West team: Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso. Hosts: Stewart Cheifet and John Ratzenberger. Copyright 1998 Stewart Cheifet Productions.",
    ia_identifier: "AnnualCo98",
    ia_year: 1998,
    ia_date: "1998-09-15T00:00:00.000Z",
    ia_proddate: "1998-09-15T00:00:00.000Z",
    ia_subject: "Episode Year: 1992;Television Programs;Computers: History;Computer Bowl"
},
{
    ia_title: "Artificial Intelligence",
    ia_identifier: "Artifici1984",
    ia_description: "",
    ia_year: 1984,
    ia_date: "1984-01-01T00:00:00.000Z"
},
{
    ia_title: "Artificial Intelligence",
    ia_description: "Expert systems, decision support software, and natural language communication.\nGuests: Harry Tennant, Texas Instruments; Hubert Dreyfus, UC Berkeley; Gary Hendrix, Symantec; S. Jerrold Kaplan, Lotus Developmnt; Gary Kildall, Digital Research\nProducts/Demos: Personal Consultant, Q&A. Originally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Artifici1986",
    ia_year: 1986,
    ia_date: "1986-01-07T00:00:00.000Z",
    ia_proddate: "1986-01-07T00:00:00.000Z",
    ia_subject: "Episode Year: 1986;Television Programs;Computers: History;artificial intelligence;expert systems"
},
{
    ia_title: "Astronomy Software",
    ia_description: "Computer programs for the amateur astronomer plus tools for tracking Halley's Comet.\nGuests: Evan Scharf, Scharf Software Sys; Robin Raskin, Family Computing; Gary Kildall, Digital Research; Bob Peterson, College of Marin; Steve Vogt, Lick Observatory\nProducts/Demos: Tellstar, StarSoft HalleyComet Halley. Originally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Astronom1986",
    ia_year: 1986,
    ia_date: "1986-02-18T00:00:00.000Z",
    ia_proddate: "1986-02-18T00:00:00.000Z",
    ia_subject: "Episode Year: 1986;Television Programs;Computers: History;astronomy;space"
},
{
    ia_title: "Personal Finance Software",
    ia_description: "A look at a variety of personal financial tools for your personal computer. Products covered include Intuit's Quicken and TurboTax, Block Financial's TaxCut, Window on Wall Street from MarketArts, and eschwab from Charles Scdhwab & Co. Also featured is a look at Citibank's new online banking service. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "BankingF",
    ia_subject: "personal finance;tax;accounting"
},
{
    ia_title: "Baseball Software",
    ia_description: "A review of computer programs for baseball fans. Includes Intelliplay Baseball, APBA Presents Baseball for Windows, Baseball's Greatest Hits, Al Michaels Announces Hardball III, and Tony LaRussa Baseball II. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "Baseball",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1993;Television Programs;Computers: History;baseball;sports;games"
},
{
    ia_title: "Battle of the Browsers",
    ia_description: "Netscape and Microsoft go at it to dominate the Internet browser world. A look at Netscape Communicator 4.0, Microsoft Internet Explorer 4.0, Real Networks RealSystem 5.0, and Construct's VRML 2.0. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "Battleof98",
    ia_year: 1998,
    ia_date: "1998-05-26T00:00:00.000Z",
    ia_proddate: "1998-05-26T00:00:00.000Z",
    ia_subject: "Episode Year: 1998;Television Programs;Computers: History;netscape communicator;internet explorer"
},
{
    ia_title: "Best Online Computer Games",
    ia_description: "In the late nineties the internet became a major venue for playing computer games. This program looked at several of the best examples. Demonstrations include Magic: The Gathering, gamers.com, the PGL (Professional Gamers League), Microsoft's Internet Gaming Zone, and Underlight. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "BestComp98",
    ia_year: 1998,
    ia_date: "1998-07-07T00:00:00.000Z",
    ia_proddate: "1998-07-07T00:00:00.000Z",
    ia_subject: "Episode Year: 1998;Television Programs;Computers: History;games;online games;gamers"
},
{
    ia_title: "Best of COMDEX 1999",
    ia_description: "We have scouted the floor of the world's biggest computer trade show, COMDEX, in Las Vegas. We've invited the best of the best to come into our studio to give you an in-depth demonstration of the latest innovations in personal computing. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "BestofCO1999",
    ia_year: 1999,
    ia_date: "1999-12-14T00:00:00.000Z",
    ia_proddate: "1999-12-14T00:00:00.000Z",
    ia_subject: "Episode Year: 1999;Television Programs;Computers: History;Music;Companies: Compaq;Wireless: Bluetooth;Operating systems: Linux"
},
{
    ia_title: "Best of Comdex 1996",
    ia_description: "Highlights of the annual fall Comdex trade show in Las Vegas. Products featured include the ATI WonderBoard, Windows CE, new digital photography products, and the Trinity broadcast studio in a box from Play. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "BestofCo",
    ia_subject: "comdex;trade show;las vegas"
},
{
    ia_title: "Best of Comdex 1997",
    ia_description: "A review of new products introduced at the annual Comdex trade show in Las Vegas. Featured products include HP LaserJet 4000 printer, the Cyberstik virtual reality joystick, Crosspad which transfers written notes to your PC, and face recognition software called FaceIt PC. Also features highlights of the Bill Gates keynote address. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "BestofCo98",
    ia_year: 1998,
    ia_date: "1998-06-09T00:00:00.000Z",
    ia_proddate: "1998-06-09T00:00:00.000Z",
    ia_subject: "Episode Year: 1998;Television Programs;Computers: History;comdex;trade show;las vegas;Bill Gates"
},
{
    ia_title: "Best of Comdex Spring 1999",
    ia_description: "A look at the best new products introduced at Spring Comdex. Demonstrations include the Cyrix WebPad, Instant Language 2000, the C-Pen, Avid Cinema for Windows, and Cult 3D. Also includes highlight from the keynote speeches of Microsoft's Bill Gates and Eckhard Pfeiffer of Compaq. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "BestofCo99",
    ia_year: 1999,
    ia_date: "1999-05-11T00:00:00.000Z",
    ia_proddate: "1999-05-11T00:00:00.000Z",
    ia_subject: "Episode Year: 1999;Television Programs;Computers: History;comdex;bill gates;avid"
},
{
    ia_title: "Bill Gates Profile",
    ia_description: "An up close and personal profile of Microsoft chairman Bill Gates. Includes comments by John Gage, Sun Microsystems; David Kirkpatrick, Fortune Magazine; Tony Perkins, Red Herring; Mitchell Kertzman, Liberate Technologies; Alex Vieux, Dasar. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "BillGate99",
    ia_year: 1999,
    ia_date: "1999-05-04T00:00:00.000Z",
    ia_proddate: "1999-05-04T00:00:00.000Z",
    ia_subject: "Episode Year: 1998;Television Programs;Computers: History;bill gates;microsoft"
},
{
    ia_title: "Business Application Software",
    ia_description: "A look at the popular new software programs for business.\nGuests: Herb Lechner, SRI; Chuck Kinch, Computerland; Stewart Reges, Stanford; Dan Carro, IBM; Bill Blackmer, Levi Strauss\nProducts/Demos: Lotus 123, SuperCalc 3PC Talk, CrossTalk, IBM Professional Office System. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Business1984",
    ia_year: 1984,
    ia_date: "1984-04-30T00:00:00.000Z",
    ia_proddate: "1984-04-30T00:00:00.000Z",
    ia_subject: "Episode year: 1984;business;software"
},
{
    ia_title: "Business Applications",
    ia_description: "A review of the current offerings in word processors, spreadsheets, and database managers.\nGuests: Lewis Levin, Micropro; Alan Ashton, Satellite Software; Lex Crosett, Lotus Development; Stan Kugell, Javelin; Chick Mornheim, MMA; Steve Dow, Ansa; Jim Button, ButtonWare; George Morrow, Morrow Computing\nProducts/Demos: Wordstar 2000, WordPerfect 4.1, Lotus 123, Javelin, ParadoxPC File/R. Originally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Business1985",
    ia_year: 1985,
    ia_date: "1985-11-26T00:00:00.000Z",
    ia_proddate: "1985-11-26T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Business Applications Part 1",
    ia_description: "A four part series on business applications. Part one focuses on the latest word processing programs including spell checkers and on-line thesauruses.\nGuests: Dan Lunt, WordPerfect Corporation; Walter Feigenson, MicroPro; James Kesler, Office Solutions; Lewis Levin, Microsoft; Eric Alderman, Author; Michael Miller, InfoWorld; Gary Kildall, Digital Research\nProducts/Demos: WordPerfect 4.2, WordStar 4.0, Microsoft Word, Microsoft Word for Macintosh. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "Business1987",
    ia_year: 1987,
    ia_date: "1987-04-21T00:00:00.000Z",
    ia_proddate: "1987-04-21T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Business Applications Part 2",
    ia_description: "Part two of a series on business applications, this time focusing on spreadsheets.\nGuests: Larry Gross, Lotus Development; Sam Savage, General Optimization; Adam Osborne, Paperback Software; Eric Gaer, Daybreak Technologies; Robert Firmin, Javelin Software\nProducts/Demos: Lotus HAL, What's Best, VP Planner, SILK, Javelin. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "Business1987_2",
    ia_year: 1987,
    ia_date: "1987-04-28T00:00:00.000Z",
    ia_proddate: "1987-04-28T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Business Applications Part 3",
    ia_description: "Part three of a series on business applications looking at spreadsheets and other financial analysis software tools.\nGuests: Mike Slade, Microsoft; Andrew Wulf, Data Tailor; Richard Roth, Unison Technology; Camilo Wilson, LifeTree Software; Gary Kildall, Digital Research\nProducts/Demos: Excel, Trapeze, Words & Figures, Predict. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "Business1987_3",
    ia_year: 1987,
    ia_date: "1987-05-05T00:00:00.000Z",
    ia_proddate: "1987-05-05T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Business Applications Part 4",
    ia_description: "The final part of this series on mainstream business applications focusing on database management software.\nGuests: Jim Hubbard, Better Homes & Gardens; Dennis Travins, Stanford; Lynn Luukinen, MicroRim; Thom Kozik, Ashton-Tate; Rich D'Amico, Peat Marwick Mitchell\nProducts/Demos: Q & APFS: Professional File, R:Base System VdBase III Plus, Odesta Double Helix. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "Business1987_4",
    ia_year: 1987,
    ia_date: "1987-05-12T00:00:00.000Z",
    ia_proddate: "1987-05-12T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Buy Or Upgrade?",
    ia_description: "Your computer can't keep up with the latest applications. Should you buy a new one or can you get the same performance by upgrading your existing machine. This program looks at the options and the issues. Guests include Linda Concalves of Apple, Andrew Gitt of Corporate Upgrades, Paul Schindler of Windows Magazine, Kim Frederico of Creative Labs, and Spiros Mitsanis of Backyard Computer Services. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "BuyOrUpg",
    ia_subject: "performa; quadra;windows; mission day care center;3D devices"
},
{
    ia_title: "Buying a New Computer",
    ia_description: "Consumer advice on how to buy a new computer. Features tips from Andrew Reinhardt of BYTE, Wendy Taylor of PC Computing, Rik Myslewski of MacUser, and Galen Gruman of MacWorld, Owen Linderholm of PC World, and Marty Jerome of PC Computing. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "BuyingaN"
},
{
    ia_title: "CES 1994",
    ia_description: "Highlights from the annual Consumer Electronics Show in Las Vegas. Products covered include Accolade's Hockey, Activision's Pitfall: The Mayan Adventure, Atari's Jaguar, Advanced Gravis Virtual Reality, Simon Personal Communicator, Amiga CD32, Compaq Presario 425, Video Blaster FS2000, Cyberdreams' CyberRace, Forte VFX-1 3D Head Mount, General Magic, Heartbeat Personal Trainer, Logitech Cyberman 3D Controller, Star Wars Screen Saver, Maxtor MobileMax 1.8\" Drive, Microsoft's Dinosaur, Nintendo's Project Reality, Philips Playboy Massage CD-I, City Streets for Windows, Sonic the Hedgehog, Spectrum Holobyte's Star Trek: The Next Generation, 3DO's Jurassic Park, Time Warner's Aegis, Ultratech's Mortal Combat, World Cup USA 94 Soccer, and Videonics' Digital Video Mixer. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "CC-CES1994-Episode1123",
    episodeNumber: 1123,
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_proddate: "1994-01-01T00:00:00.000Z"
},
{
    ia_title: "Computer Bowl VI - Part 2",
    ia_description: "The conclusion of the sixth annual Computer Bowl trivia game between high tech types from the east coast and the west coast. This was the All Star edition with MVPs selected from the first five Computer Bowl games. Contestants included Bill Gates, Bill Joy, Mitch Kapor, Bob Frankston, Neil Colvin, and Pamela McCorduck. The questioners were Andy Grove and Stewart Cheifet. Originally broadcast from San Jose in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_identifier: "CC-ComputerBowl1994_2-Episode1152",
    episodeNumber: 1152,
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_proddate: "1994-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1994;Television Programs;Computers: History;Computer Bowl;Bill Gates;San Jose"
},
{
    ia_title: "Artificial Intelligence",
    ia_description: "An early look at artificial Intelligence. Guests includes Edward Feigenbaum of Stanford University, Nils Nilsson of the AI Center at SRI International, Tom Kehler of Intellegenetics, Herb Lechner of SRI, and John McCarthy of Stanford. Featured demonstrations include Inferential Knowledge Engineering and the programming language LISP. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "CC1024_artificial_intelligence",
    episodeNumber: 1024,
    ia_subject: "artificial intelligence;expert systems;knowledge engineering"
},
{
    ia_title: "PC Expo",
    ia_description: "On location coverage of the 1994 PC Expo trade show in New York. Companies featured include Symantec, IBM, Apple, Motorola, Borland, Toshiba, Sony, Hewlett Packard, and Epson. Guests include Tim Bajarin, Stewart Alsop, Larry Magid, and Phillipe Kahn. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "CC1201_pc_expo",
    episodeNumber: 1201,
    ia_subject: "pc expo;trade show;new york"
},
{
    ia_title: "Computer Art",
    ia_description: "The personal computer started out doing numbers, then text, and then graphics. This program looks at several applications for computer artists. Included are KPT Bryce, SmartSketch, Fractal Design's Dabbler, TrueSpace for Windows, Design Workshop for the Power Mac, Wacom Pad, Painter, Illustrator, and Photoshop. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "CC1205_computer_art",
    episodeNumber: 1205,
    ia_subject: "art;graphics;painting"
},
{
    ia_title: "Consumer Buying Guide 1994",
    ia_description: "An annual review of cool new technology products for the holiday buying season, as selected by Stewart Cheifet, Paul Schindler of CMP, Tim Bajarin of Creative Strategies, and Ken Ratcliffe of PC Connection. Products reviewed include Lexmark's Ergonomic Keyboard, 7th Level's Complete Waste of Time, Banner Blue's Family Tree Maker, Maxis Gift Maker, Glider Pro, GPS Trailblazer, Greatest Paper Airplanes, the NEC Satellite Phone, Putt Putt from Humungous Entertainment, Sega's Road Rash II, the Simpsons Screen Saver from Berkeley Systems, Star Trek Interactive, T/Maker's Stradiwackius, and Wacom's Art Pad Dabble bundle.\nOriginally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "CC1210_consumer_buying_guide",
    episodeNumber: 1210,
    ia_subject: "christmas;holiday;buying"
},
{
    ia_title: "Greatest Computer Games",
    ia_description: "A look at the hot new computer games of 1995. Games covered include Voyeur, Astronomica, Wing Commander III: Heart of the Tiger, Master of Magic, Nascar Racing, Front Page Sports: Football Pro '95, Daedalus Encounter from Mechadeus, and Loadstar: The Legend of Tully Bodine. Includes visits to Electronic Arts and Rocket Science Games and an interview with \"The Fat Man\", George Sanger. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1218_greatest_games",
    episodeNumber: 1218,
    ia_subject: "games;video games;computer games"
},
{
    ia_title: "PC Sports",
    ia_description: "Computers and videogames have allowed couch potatoes to play sports and athletes to get better at their game. This program looked at several PC sports applications including Picture Perfect Golf, ESPN Baseball Tonight, UltraCoach for Windows, Mountain Biking, and Winning Hoops with Coack K. Also featured are an online golf tournament and Home Team Advantage, a computer based program to help coaches. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1219_pc_sports",
    episodeNumber: 1219,
    ia_subject: "sports;baseball;coaching"
},
{
    ia_title: "Investment Software",
    ia_description: "Computers have become a key tool in planning an investment strategy and building a retirement nest egg. This program looked at several investment programs including Value Screen Investment Survey, Prodigy Online Information Services, Windows on Wall Street, WealthBuilder, Plan Ahead Your Financial Future, Schwab's Street Smart, and MetaStock. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1224_investment_software",
    episodeNumber: 1224,
    ia_subject: "investment;wall street;stock market"
},
{
    ia_title: "Learning on a Computer",
    ia_description: "Personal computers have become a major component of modern educational systems. This program looks at some of the strides being made in computer based learning. Product demonstrations include Measurement in Motion, Grammar Games, Tangible Math, Inside the SAT, and The Musical World of Professor Piccolo. Companies profiled are Apple, Davidson & Associates, Logal, Princeton Review, and Opcode Interactive. Also featured are a visit to an Electronic Learning Fair and the online University of Phoenix. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1226_learning_on_a_computer",
    episodeNumber: 1226,
    ia_subject: "learning;education;school"
},
{
    ia_title: "Losing Memory",
    ia_description: "If you were a DOS user back in the early 1990's, you had to deal with \"insufficient memory\" issues. Over and over again. This program looks at solutions for expanding computer memory. Demonstrations include how to install SIMMs, MemMaker, QAPlus for Windows, RAM Doubler 1.51, Quarterdeck's QEMM 7.5, Multimedia Cloaking Utility from Helix Software, and Netroom 3.0. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1227_losing_memory",
    episodeNumber: 1227,
    ia_subject: "memory;RAM;SIMM"
},
{
    ia_title: "CC 122 Computer Entrepreneurs",
    ia_description: "An early Computer Chronicles episode from the first season in 1984 featuring Steve Wozniak, Adam Osborne, Lore Harp, and Gene Amdahl. They discuss what it was like to do a tech startup in 1984. Hosted by Stewart Cheifet and Gary Kildall. Copyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "CC122ComputerEntrepreneurs",
    episodeNumber: 122,
    ia_year: 1984,
    ia_date: "1984-01-01T00:00:00.000Z",
    ia_subject: "osborne; wozniak; trilogy; vector graphics; amdahl;vector graphics;paperback software;trilogy;apple;wozniak",
},
{
    ia_title: "Internet",
    ia_description: "In the mid 1990's many people were on line, but the internet and the world wide web were still a new phenomenon. This program looks at the new open world of the web. Demonstrations include Eudora, Anarchy, the WELL, WinCIM, InterACT.net, and HoTMetal Pro HTML Editor. Guests include New York Times technology writer John Markoff. Also features a profile of the band Severe Tire Damage, the first band to ever perform live over the internet. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1232_internet",
    episodeNumber: 1232,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "internet;web;online"
},
{
    ia_title: "Computer Bowl VII - 1995",
    ia_description: "Technology leaders from the East and West coasts go at it in the seventh annual Computer Bowl, a quiz show designed to see which team knows more about computer trivia. Guest questioner is Nicholas Negroponte. Contestants include Andy Herzfeld and Joseph Alsop. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1236_computer_bowl",
    episodeNumber: 1236,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1995;Television Programs;Computers: History;Computer Bowl;Bill Gates;quiz;trivia"
},
{
    ia_title: "Interactive Music",
    ia_description: "Computers and the digital revolution forever changed the world of music. This program looks at several new approaches to creating and sharing music. Demonstrations include Vid Grid, Sound Toy, William Orbit Strange Cargo, So You Want to be a Rock & Roll Star, Rock & Roll On Your Own, Dylan:Highway 61 Interactive, Video Jam, and Vivace. Also featured is a visit to Todd Rundgren's sound studio in Sausalito, California and a preview of his CD-ROM entitled \"No World Order\". Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1238_interactive_music",
    episodeNumber: 1238,
    ia_subject: "music;music video;todd rungren"
},
{
    ia_title: "Super Computers",
    ia_description: "An early look at supercomputers in the United States and Japan. Featured guests include George Michael, head of computer research of Lawrence Livermore National Laboratory, John Repp of Control Data Corporation, Dr. Hideo Aiso, Professor at Keio University in Japan, Dr. Hiroshi Kashiwagi, Chairman of Japan's National Supercomputer Project, and Dr. Yukio Mizuno, Senior Vice President of NEC. The program also features on location coverage in Japan of the country's supercomputer projects including the Hitachi S810-20 at the University of Tokyo and the Electro Technical Laboratory in Tsukuba, Japan. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "CC126_supercomputers",
    episodeNumber: 126,
    ia_subject: "supercomputer;japan;parallel processing"
},
{
    ia_title: "Windows 95",
    ia_description: "It was the biggest ever launch of a software product with stores opening at midnight and buyers around the world waiting to get their hands on... an operating system! It was Windows 95. This show looks at the hoopla surrounding the launch of Windows 95, the product itself, and several Windows 95 add-on products including Microsoft Office, Viking RAM Chips, Uninstaller, Trispectives Professional, and The Hive. Originally broadcast in 1995.\nCopyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1301_windows_95",
    episodeNumber: 1301,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "windows;microsoft;operating systems"
},
{
    ia_title: "Greatest Computer Games",
    ia_description: "A review of the best new games of the year. Games covered include In the First Degree, Buried in Time, Mech Warrior 2, ImagiNation Network, and Phantasmagoria. Plus a visit to Microsoft's Judgment Day, a conference for third-party game developers in Redmond, Washington. Originally broadcast in 1995.\nCopyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1308_greatest_games",
    episodeNumber: 1308,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "games;mech warrior;phantasmagoria"
},
{
    ia_title: "ETRE Madrid",
    ia_description: "On location coverage of the annual European Technology Roundtable Exhibition in Madrid, Spain. Guests include Microsoft Chairman Bill Gates, analyst Esther Dyson, Netscape founder Jim Clark, Ed Zander of Sun Microsystems, Roel Pieper of Tandem, Michael Rogers of Newsweek, and David Kirkpatrick of Fortune. Originally broadcast in 1995.Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1310_etre",
    episodeNumber: 1310,
    ia_subject: "europe;madrid;bill gates"
},
{
    ia_title: "Holiday Buying Guide 1995",
    ia_description: "The annual guide to holiday buying for technology products. Stewart Cheifet, Tim Bajarin, Chris Gorman and several technology writers offer up their selections for best new tech products of the season. Included are new web cams, PDAs, and desktop video editors. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1311_holiday_buying_guide",
    episodeNumber: 1311,
    ia_subject: "consumer;holiday;shopping"
},
{
    ia_title: "SOHO Software",
    ia_description: "SOHO stands for small office home office. This program looks at applications for the small business owner. Demonstrations include Microsoft Office 95, Microsoft Small Business Pack, MYOB Accounting, HP's OfficeJet LX, Syquest's EZ135 external hard drive, the Connectix QuickCam web camera for videoconferencing, and the BitSurfer ISDN modem from Motorola. Guests include San Francisco Examiner technology writer Tom Abate. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1319_soho_software",
    episodeNumber: 1319,
    ia_year: 1995,
    ia_date: "1995-12-15T00:00:00.000Z",
    ia_subject: "small business;home office"
},
{
    ia_title: "Winter CES 1996",
    ia_description: "On location coverage of the Consumer Electronics Show in Las Vegas. This was the first consumer electronics show that was dominated by computer makers. New products introduced here included the DVD, Pentium PCs, and color handhelds. This program also includes highlights from the 1996 MacWorld Expo in San Francisco. Guest analyst is Tim Bajarin of Creative Strategies. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1320_winter_ces_1996",
    episodeNumber: 1320,
    ia_subject: "macworld;consumer electronics;trade show"
},
{
    ia_title: "High Tech Scotland - Part Two",
    ia_description: "In the United States it's called the Silicon Valley, but in Scotland it's called Silicon Glen - the area between Glasgow and Edinburgh that is famous for high tech R&D. This program looks at several Scottish innovations including a supercomputer that maps road traffic, new low energy green lasers, intelligent phones, noise canceling headsets, distributed learning, and home energy management. Shot on location in Scotland. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1324_research_in_silicon_glen",
    episodeNumber: 1324,
    ia_subject: "silicon glen;scotland;edinburgh"
},
{
    ia_title: "Software Thinking Tools",
    ia_description: "Most of us use computers to do routine tasks like calculations, word processing, or graphics. But computers can do more - they can help you think. This program looks at several software thinking tools including Go Figure, WinMap, Project Kickstart, Which & Why, Decide Right, and IntelliMatch. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1325_software_thinking_tools",
    episodeNumber: 1325,
    ia_subject: "decision;thinking;brainstorming"
},
{
    ia_title: "Computing Seniors",
    ia_description: "A look at how senior citizens are using computer technology. Product demonstrations include Rand McNally's TripMaker 1996, WillMaker from Nolo Press, and Family Tree Maker from Banner Blue. Also includes a visit to a senior center to see how senior citizens are learning to use computers and various software applications of particular interest to them. Originally broadcast in 1995.\nCopyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1327_computing_seniors",
    episodeNumber: 1327,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "seniors;senior citizen;retired"
},
{
    ia_title: "New PCs - 1996",
    ia_description: "Ten years after the PC revolution, experts were saying the PC model is obsolete. This program looks at several fresh approaches to the personal computer. Included are the TransPhone net terminal, Apple's multimedia Pippin Power Mac, the brand new Palm Pilot from U.S. Robotics, the BeBox using the Be operating system, and Oracle's new NC or Network Computer. Guests include Bruce Tognazinni, author of \"Tog on Software Design. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1331_new_pcs",
    episodeNumber: 1331,
    ia_subject: "palm pilot;apple pippin;oracle Network Computer"
},
{
    ia_title: "Computers and Healthcare",
    ia_description: "A look at how the health care industry is using computer technology. Products demonstrated include The Doctor's Book of Home Remedies, Multimedia Workout, DynaPulse 200M, The Family Doctor, Stanford University's Pain Clinic, and I-3 Design's Stretchercise. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1335_computers_and_healthcare",
    episodeNumber: 1335,
    ia_subject: "health;medicine;exercise"
},
{
    ia_title: "Codies Special 1995",
    ia_description: "A look at the best new software programs of the year, those which won Codie Awards from the Software Publishers Association. Featured titles include Edmark's Thinking Things, Hollywood from Theatrix, Dark Forces from Lucas Arts, and Rick Smolan's Passage to Vietnam from Against All Odds. Also includes coverage of the Codies Awards event in Los Angeles with presenters Robert Wuhl and Todd Rundgren. The Lifetime Achievement Award is given to Netscape founder Jim Clark. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "CC1349_codies_special",
    episodeNumber: 1349,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "codie;software awards;netscape"
},
{
    ia_title: "CC 1407 Online Shopping",
    ia_description: "A look at early online shopping sites including Amazon, onsale.com, CyberCash, NetRadio, Verisign and Cybergold. Guests include Jeff Bezos, Jerry Kaplan, Magdalena Yesil, Gina Klein Jorasch and Robert Griggs. Originally broadcast in 1996.\nCopyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1407OnlineShopping",
    episodeNumber: 1407,
    ia_year: 1996,
    ia_date: "1996-10-03T00:00:00.000Z",
    ia_subject: "amazon; online shopping; jeff bezos;cybergold;netradio;verisign;onsale.com"
},
{
    ia_title: "Consumer Buying Guide 1996",
    ia_description: "Our annual review of the coolest new high-tech gadgets for the holiday season. Products covered include Connectix Color Quick Cam, Fieldworks Rugged Laptop FW7600, NetObject's Fusion, Symantec's Internet FastFind, MetaTool's Kai's Power Goo, Broderbund's Logical Journey of the Zoombinis, Ecco Pro, Neverhood, NewsCatcher, NHL 97, Polaroid's Photo Pad Scanner, Epson's Photo PC Camera, AT&T's Pocket Net Phone, Pyst, Quake, Quick View Plus, Surfman, The Mind Drive, VocalTec's Internet Phone, Blizzard's Warcraft II, Phillips Web TV, and Web Buddy from DataViz. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1411_consumer_buying_guide",
    episodeNumber: 1411,
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "consumer;computer;gadget"
},
{
    ia_title: "Digital Photography",
    ia_description: "Digital photography got its start in the mid 1990's. This program looks at early examples of digital photography hardware and software. Included are demonstrations of the Fuji D5-7, Ricoh RDC2, Kodak DC25, LivePix, Adobe Photo Shop 4.0, HP DeskJet 693C, Epson Stylus Color 500, Sony DMM155, Logitech Pagescan Color, and Microtek ScanMaker E3. Guests include Michael Mcnamara of Popular Photography magazine, Kyla Carlson of PC Computing magazine, and John Goddard of PC World. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1412_digital_photography",
    episodeNumber: 1412,
    ia_subject: "digital photography;cameras;ink jet printer"
},
{
    ia_title: "Greatest Games",
    ia_description: "A review of the best new computer games of the year. Demonstrations include The Neverhood from DreamWorks Interactive, Shattered Steel from Interplay, Tomb Raider from Eidos, and Diablo from Blizzard. Also includes a visit to a Quake marathon and a tour of the usability lab at The Learning Company. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1415_greatest_games",
    episodeNumber: 1415,
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "computer games;diablo;quake"
},
{
    ia_title: "Internet TV",
    ia_description: "After hearing about convergence for years, the television and the computer finally have started to merge, with video images moving on to the PC and web pages showing up on the TV.  Copyright 1997 Stewart Cheifet Productions.",
    ia_identifier: "CC1416_internet_tv",
    episodeNumber: 1416,
    ia_year: 1996,
    ia_subject: "television;internet;internet tv"
},
{
    ia_title: "Best of Comdex 1996",
    ia_description: "A look at the best new products introduced at the annual COMDEX computer trade show in Las Vegas. Demonstrations include the ATI All-in-Wonder video card; Microsoft Office 97; Netscape Communicator, Navigator, and Constellation; and Play's Trinity Video Production System. Products reviewed on the convention floor include Apple's Emate 300, Casio's Cassiopedia, Ricoh's Tablet PC, Mitsubishi's Flopico, and the new Sony DSC F-1 digital camera. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "CC1417_best_of_comdex",
    episodeNumber: 1417,
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1996;Television Programs;Computers: History;comdex;trade show;las vegas"
},
{
    ia_title: "CES 1997",
    ia_description: "On location coverage of the annual winter Consumer Electronics Show in Las Vegas. Products introduced at the show include the new Pentium MMX processors, televisions and phones that act as internet terminals, new web audio devices, handheld digital players, and an innovative approach to networking from IBM called the PAN or personal area network. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1421_ces",
    episodeNumber: 1421,
    ia_subject: "consumer electronics;trade show;CES"
},
{
    ia_title: "E-Mail Tips",
    ia_description: "As email became the killer application on the internet, products proliferated offering a variety of new email functionality. This program looks at Bigfoot, 411, ConnectSoft's Email Connection, Microsoft Outlook, HoTMaiL, JFax, Eudora Pro 3.0, PaperPort, Aloha Greetings, and PGP. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1423_email",
    episodeNumber: 1423,
    ia_subject: "email;outlook;eudora"
},
{
    ia_title: "Computers and the Disabled",
    ia_description: "The computer revolution was great, but it presented real challenges to disabled people who found new barriers to accessing information. This program looks at several solutions including a talking word processor called IntelliTools, two screen readers - JAWS and OutSpoken, Buddy Button, Tash Mini Keyboard, Discovery Switch, EasyBall, Thumbelina, and Cyberlink. Also covered are techniques for building web sites that are user friendly for disabled visitors. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1424_computers_and_the_disabled",
    episodeNumber: 1424,
    ia_year: 1997,
    ia_date: "1997-01-01T00:00:00.000Z",
    ia_subject: "disabled;handicapped;disabilities"
},
{
    ia_title: "Computer Art",
    ia_description: "A look at new ways to use your computer to create art. Demonstrations include The Virtual Gallery, CorelDraw 7, Detailer, 3D Studio Max 1.2, and virtualart.com. Also covers a visit to a combined human/computer stage production called \"20/20 Blake\" and a museum exhibit of Digital Art. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1430_computer_art",
    episodeNumber: 1430,
    ia_subject: "art;painting;artists"
},
{
    ia_title: "E-Commerce",
    ia_description: "A look at the growing business of electronic commerce based on computers and the internet. Demonstrations include VISA's Secure Electronic Transaction technology, NetGuide, coolshopping.com, Netconex, the Internet Travel Network, and Personalogic. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1535ECOMMERCE",
    episodeNumber: 1535,
    ia_subject: "electronic commerce;online shopping;ecommerce"
},
{
    ia_title: "Battle of the Browsers",
    ia_description: "When Microsoft started giving away Internet Explorer, it became a serious challenger for Netscape. This program looked at the battle to become the dominant internet browser platform. Featured are Netscape Communicator 4.0, Internet Explorer 4.0, VRML 2.0 and RealSystem 5.0. Guests include Mark Brown, author of Using Netscape Communicator, and Amy Helen Johnson, Senior Technology Editor for Windows Magazine. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1536BROWSERS",
    episodeNumber: 1536,
    ia_year: 1997,
    ia_date: "1997-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1997;Television Programs;Computers: History;netscape;internet explorer;browser"
},
{
    ia_title: "Putting Your Business Online",
    ia_description: "The internet enabled just about anyone to open up an online business. But how do you do it? This program looks at several tools and options. Demonstrations include Claris Home Page, Web Site Garage, and Progress Software's WebSpeed. Model online businesses reviewed include reel.com, the proshop.com, and portabote.com. Featured guest is Rhonda Abrams, small business consultant. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "CC1541BUSONLINE",
    episodeNumber: 1541,
    ia_year: 1997,
    ia_date: "1997-01-01T00:00:00.000Z",
    ia_subject: "ecommerce;online business;web site"
},
{
    ia_title: "Online Games",
    ia_description: "As the web continued to grow, games started moving off the PC and onto the internet. This program looks at several examples including www.gamers.com, Magic:The Gathering, www.zone.com, SubSpace, and Underlight. Includes a visit to the Professional Gamers League conference and an interview with gaming megastar Dennis Fong (aka Thresh). Originally broadcast in 1998. Copyright Stewart Cheifet Productions 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "CC1542ONLINEGAMES",
    episodeNumber: 1542,
    ia_year: 1998,
    ia_date: "1998-01-01T00:00:00.000Z",
    ia_subject: "games;online;thresh"
},
{
    ia_title: "Internet Showcase 1999",
    ia_description: "On location coverage of Upside's Internet Showcase conference in San Diego, one of the first trade shows focusing only on internet related products and services. Guests include Bill Joy of Sun Microsystems, Eric Schmidt of Novell (now Chairman of Google), Mark Eppley of Traveling Software, Phillipe Kahn, David Coursey, and Larry Magid. Products introduced here included the TIVO and digital televisions. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "CC1623SHOWCASE",
    episodeNumber: 1623,
    ia_year: 1999,
    ia_date: "1999-01-01T00:00:00.000Z",
    ia_subject: "internet;showcase;upside"
},
{
    ia_title: "COMDEX 1998",
    ia_description: "A look at some of the best new products introduced at the annual COMDEX show in Las Vegas. Demonstrations include the Cyrix WebPAD, Instant Language 2000 from LanguageForce, the C Pen from C Technologies, and Avid Cinema for Windows. Also includes highlights of the keynote speeches at COMDEX including those of Microsoft's Bill Gates, Compaq CEO Eckhard Pfieffer, and Xerox Chief Scientist John Seely Brown. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "CC1634COMDEX",
    episodeNumber: 1634,
    ia_year: 1998,
    ia_date: "1998-01-01T00:00:00.000Z",
    ia_subject: "comdex;trade show;las vegas"
},
{
    ia_title: "Internet Telephony",
    ia_description: "If you can send data over the internet, why not voice, and if voice, why not phone calls, and if phone calls, why not video phone calls. This program looks at the new technology of internet telephony or voice over IP (VOIP) and video telephony. Demonstrations include PowWow 3.7, Tribal.com, ClassPoint 1.02, Connectix QuickCam 1.0, Logitech's QuickClip, Best Data Smart One, and ClearPhone. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "CC1635TELEPHONY",
    episodeNumber: 1635,
    ia_year: 1999,
    ia_date: "1999-01-01T00:00:00.000Z",
    ia_subject: "telephony;video telephony;voice over IP"
},
{
    ia_title: "PDAs",
    ia_description: "The Palm Pilot launched a successful generation of handheld devices and personal digital assistants or PDAs. This program looks at the Palm III, Qualcomm's pdQ CDMA phone, the Nino 300 and the Velo 500 from Philips, Hitachi's Traveler 600, HP's CapShare 910, the GoType keyboard, WINCE 2.0, a Palm application called TriCorder, and Franklin's REX PRO. Guests include David Pogue, New York Times writer and author of \"Palm Pilot: The Ultimate Guide\". Originally broadcast in 1998.\nCopyright 1998 Stewart Cheifet Productions",
    ia_broadcastyear: 1998,
    ia_identifier: "CC1638PDAS",
    episodeNumber: 1638,
    ia_year: 1998,
    ia_date: "1998-12-01T00:00:00.000Z",
    ia_subject: "pda;personal digital assistant;handhelds"
},
{
    ia_title: "E-Commerce",
    ia_description: "A look at the growing field of electronic commerce. Shot on location at the Peoplesoft ecommerce conference in Florida. Includes coverage of ecommerce initiatives by such companies as Borders, TWA, DLJ Direct, and Peapod. Guests include syndicated investment columnists, the Motley Fool. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "CC1639ECOMMERCE",
    episodeNumber: 1639,
    ia_subject: "ecommerce;electronic commerce;online shopping"
},
{
    ia_title: "Parenting",
    ia_description: "People are turning to their computers and the internet for advice on every conceivable topic, including how to be a parent. This program looks at several resources for parenting. Demonstrations include parentsplus.com, parenting-qa.com, thecybermom.com, abcparenting.com, French Now!, Math Heads, Maurice Ashley Teaches Chess, and EN-parent.com. Guests include Roberta Furger, author of \"Does Jane Compute: Preserving Our Daughter's Place in the Cyber Revolution\" and Pam Dixon, author of \"Take Charge Computing for Parents and Teens\". Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "CC1644PARENTING",
    episodeNumber: 1644,
    ia_year: 1998,
    ia_date: "1998-01-01T00:00:00.000Z",
    ia_subject: "parent;children;daughter"
},
{
    ia_title: "Codie Awards 1999",
    ia_description: "Coverage of the annual Codie Awards presentations from the Software and Information Industry Association, recognizing the outstanding new software programs of the year. Hosted by Robert Urich and Stewart Cheifet. Nominees for best new software program of the year were ACID, National Geographic Maps, Fireworks, Cybermaster, and MetaFrame. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "CC1649CODIES",
    episodeNumber: 1649,
    ia_subject: "codie awards;software;programs"
},
{
    ia_title: "Computer Buyers Guide - 2000",
    ia_description: "The annual guide to the coolest new computer products on the market. Products reviewed include new digital cameras, MP3 players, PDAs, appliance PCs, cell phone accessories, and Sony's Aibo robot dog. Guests include writers Larry Magid of the LA Times and Mike Langberg of the San Jose Mercury News. Originally broadcast in 2000. Copyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "CC1812BUYGUIDE",
    episodeNumber: 1812,
    ia_year: 2000,
    ia_date: "2000-01-01T00:00:00.000Z",
    ia_subject: "shopping;buyer;consumer"
},
{
    ia_title: "ETRE 2000 - Part 3",
    ia_description: "Coverage of the annual European Technololgy Roundtable Exhbition, held this year in Prague. Guests include Qualcomm CEO Irwin Jacobs, Symantec CEO John Thompson, Commtouch President Elizabeth Maxwell, 3Com Chairman Eric Benhamou, CMGI Chairman David Wetherell, Think Outside President Phil Baker, Checkpoint Software's CEO Gil Shwedd, Newsweek's Michael Rogers, Fortune's David Kirkpatrick, Red Herring's Tony Perkins, and Thom Calandra of CBS Marketwatch. Originally broadcast in 2000. Copyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "CC1815ETRE2000THREE",
    episodeNumber: 1815,
    ia_subject: "europe;conference;CEO"
},
{
    ia_title: "Computer Games & Gamers",
    ia_description: "A look at the hottest new computer games. Featured guest is world champion gamer Dennis Fong, also known as Thresh. Other guests include Ryan McDonald of gamespot.com. Also ign.com, a look at the game \"No One Lives Forever\", and a review of the PlayStation 2. Originally broadcast in 2000. Copyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "CC1816GAMING",
    episodeNumber: 1816,
    ia_year: 2000,
    ia_date: "2000-01-01T00:00:00.000Z",
    ia_subject: "thresh;game;playstation2; dennis fong; gamespot;"
},
{
    ia_title: "High Tech Hawaii - Part 1",
    ia_description: "A surprising look at high tech companies and research in the Aloha state. Shot on location on Maui, Kauai, Oahu, and the Big Island. Features include Trex, a company working on high resolution digital photography, the AEOS telescope run by the Air Force Research Lab on Mount Haleakala, biotech farms growing the antioxidant Astaxanthin, new high tech approaches for Hawaii's traditional sugar industry, a unique power management system in Hilo, and a look at alternative energy research being done by the National Energy Laboratories of Hawaii in Kona. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1820HAWAIIONE",
    episodeNumber: 1820,
    ia_subject: "hawaii; agriculture; telescope;astronomy; nutriceutical;military; astaxanthin; energy; power"
},
{
    ia_title: "CES 2001",
    ia_description: "On location coverage of the annual Consumer Electronics Show from Las Vegas. This was the year of Napster and much of the show was about new music download sites that tried to add enough value to lure users into paying. Also covered are new approaches to ecommerce, web radio, and home media networks. Originally broadcast in 2001. Copyright 2001 Stewart Cheifet Productions.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1846CES2001",
    episodeNumber: 1846,
    ia_subject: "ces;consumer electronics;trade show"
},
{
    ia_title: "The Ultimate Gamer's PC",
    ia_description: "A user's guide on how to buy, or build, the ultimate gaming PC. The program looks at CPUs, sound cards, and graphic cards. Demonstrations include the NVidia GeForce3 nfiniteFX graphics engine, Philips Acoustic Edge 5.1 surround audio system for PCs, Intel's 1.7 gigahertz Pentium 4 microprocessor, and customized gaming PCs from Alienware and Falcon Northwest. Games demonstrated include Chameleon, Zoltar, Inferno, Black and White, and Quake III Arena. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1851ULTIMATE",
    episodeNumber: 1851,
    ia_subject: "games;sound cards;graphics cards"
},
{
    ia_title: "Interactive Television",
    ia_description: "As computers and televisions merged in the year 2000, new applications were developed that combined TV quality video with the personal control and interactivity of the computer. This program looks at several examples. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1852INTERACTIVE",
    episodeNumber: 1852,
    ia_year: 2001,
    ia_date: "2001-01-01T00:00:00.000Z",
    ia_subject: "interactive;TV;television"
},
{
    ia_title: "Computers and Healthcare",
    ia_description: "A look at how computers are being used in delivering personal health care solutions. Demonstrations include HealthEngage, a monitoring device for asthma patients, Medscape's electronic medical records application, a web site that lets you prepare for surgery - yoursurgery.com, the Immersion medical simulator which allows medical students to practice on robot patients, the Zeus robotic surgical system and the DaVinci robotic surgeon. Guests include Dr. Mark Leavitt and Dr. Harold Portnoy. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1930HEALTH",
    episodeNumber: 1930,
    ia_subject: "medicine;surgery;asthma"
},
{
    ia_title: "Computers & Medical Technology",
    ia_description: "A look at how computer technology is changing medical research and medical practice. Demonstrations include IBM's virtual heart, a software heart simulator used to test heart drugs; HP Labs work in nanotechnology which could lead to tiny objects which go through the blood stream looking for cancer cells; the Sensatex Smart Shirt which can monitor body functions; research at the Oregon Regional Primate Research Center on manipulating DNA to cure health problems; and a high school program which teaches students how to do DNA fingerprinting. Guests include Dr. Sharon Nunes, Director of IBM Life Sciences and Dr. Stan Williams, research fellow the nanotechnology program at HP Labs. Originally broadcast in 2001. Copyright 2001 Stewart Cheifet Productions.",
    ia_broadcastyear: 2001,
    ia_identifier: "CC1934MEDTECH",
    episodeNumber: 1934,
    ia_subject: "nanotechnology;DNA;health care; ibm; hp labs;"
},
{
    ia_title: "High Tech Singapore - Part One",
    ia_description: "A look at innovative technologies and companies in one of Asia's major technology centers. Stories include using cell phones for commerce, computerized systems for schools, libraries which use SMS for checking out books, automated in-town rental car services, virtual online visits to prison inmates, and a personal massage module for the Handspring Visor. Originally broadcast in 2002.",
    ia_broadcastyear: 2002,
    ia_identifier: "CC1939SING1",
    episodeNumber: 1939,
    ia_subject: "singapore;asia;mobile commerce"
},
{
    ia_title: "High Tech Singapore - Part 3",
    ia_description: "A survey of high tech research and development activities in Singapore. Included are innovative work on RFID chips, the latest sound technology from Creative Labs, Philips DVD Recorders, new web radios, and a school for digital designers. Originally broadcast in 2002.",
    ia_broadcastyear: 2002,
    ia_identifier: "CC1940SING3",
    episodeNumber: 1940,
    ia_subject: "RFID;creative labs;Philips"
},
{
    ia_title: "Portable Computers",
    ia_description: "A look at the first generation of portable computers. Featured are the Morrow Pivot Portable, the HP 110 Portable, Texas Instruments ProLite Portable, and the Data General DG-1 Portable. Guests include George Morrow, Srini Nageswar, Farris Gaffrey, and Roland Archer. Originally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "CC214_portable_computers",
    episodeNumber: 214,
    ia_subject: "portables;laptops;notebooks"
},
{
    ia_title: "Asian Clones",
    ia_description: "In the late 1980's, Taiwan was the world's leading producer of scanners, monitors, and many other computer products. This program goes to Taiwan to look at the center of the Asian computer industry. Included are visits to leading domestic computer companies such as Mitac, Microtek, Tatung, and Multitech (now Acer). Also coverage of American technology companies manufacturing in Taiwan such as Atari, Texas Instruments, and IBM. Featured also is a visit to Taiwan's Silicon Valley, called Science Park, and to Taiwan's major computer trade show, Computex. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "CC434_asian_clones",
    episodeNumber: 434,
    ia_year: 1987,
    ia_date: "1987-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1987;Television Programs;Computers: History;taiwan;taipei;asia"
},
{
    ia_title: "Hypercard",
    ia_description: "An introduction to Apple's Hypercard. Guests include Apple Fellow and Hypercard creator Bill Atkinson, Hypercard senior engineer Dan Winkler, author of \"The Complete Hypercard Handbook\" Danny Goodman, and Robert Stein, Publisher of Voyager Company. Demonstrations include Hypercard 1.0, Complete Car Cost Guide, Focal Point, Laserstacks, and National Galllery of Art. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "CC501_hypercard",
    episodeNumber: 501,
    ia_subject: "hypercard;apple;bill atkinson"
},
{
    ia_title: "Buyer's Guide",
    ia_description: "The annual holiday buyer's guide for computer products featuring geeky recommendations for cool new gadgets from George Morrow, Wendy Woods, Paul Schindler, Gary Kildall, and Stewart Cheifet. Products reviewed include Toshiba T1000 Laptop, Touchbase Worldport 1200 Modem, Diconix 150 Portable Printer, LapLink, Ashton-Tate's Byline, Higgins, Complete Hand Scanner, Worlds of Wonder Julie Doll, Microsoft Bookshelf, Broderbund's Science Tool Kit, Complete PC Fax Board, Mr. Game Show, Ask God, Macromind Videoworks, and Apple's Hypercard. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "CC506_buyers_guide",
    episodeNumber: 506,
    ia_subject: "christmas;holiday;shopping"
},
{
    ia_title: "Commodore 64",
    ia_description: "The Commodore 64 was the first computer for many families. This program looks at what you can do with the famous C-64. Demonstrations include The Wine Steward, Skate or Die, Strike Fleet, the Koala Pad, Master Composer, Tetris, and Berkeley Software's GEOS. Includes a visit to a Commodore Owners Users Group meeting and an interview with Max Toy, president of Commodore. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC517_commodore_64",
    episodeNumber: 517,
    ia_subject: "commodore;C-64;GEOS"
},
{
    ia_title: "Multitasking",
    ia_description: "As operating systems grew more robust, one of the key new features was the ability to multitask, run several applications at the same time. This program looks at some new approaches including Concurrent DOS from Digital Research, Windows 386 from Microsoft, IBM's OS/2, Apple's A/UX, and Tandy's Xenix. Guests include Lee Reiswig, Director of the IBM Austin Lab and Gary Kildall of Digital Research. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC518_multitasking",
    episodeNumber: 518,
    ia_subject: "multitasking;OS/2;operating systems"
},
{
    ia_title: "Business Graphics for the Mac",
    ia_description: "A look at how computers are now being used as graphics tools by business. Demonstrations include MacDraw II from Claris, Microsoft's Excel, Cricket Presents from Cricket Software, Adobe Illustrator, and ImageMaker. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC519_business_graphics_1",
    episodeNumber: 519,
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "business graphics;presentation graphics;business illustration"
},
{
    ia_title: "Business Graphics for the PC",
    ia_description: "A review of business graphics products in the IBM compatible world. Products demonstrated include Energraphics, KaleidoView, Draw Applause, Freelance Plus, Harvard Graphics, GEM Graph, Presentation Team, Cubicomp, and Zenographics. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC520_business_graphics_2",
    episodeNumber: 520,
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "graphics;presentations;business"
},
{
    ia_title: "Input Devices",
    ia_description: "How do you communicate with your computer? This program looks at various input devices for telling your computer what you want it to do. Demonstrations include various mice from Microsoft, Logitech, Multimouse, and MSC, new keyboards from Apricot and Honeywell, the L-PC Lite Pen, a bar code reader, Felix for the Macintosh, the Keytronic Touchpad keyboard, the FastTrap trackball, the cordless Manager Mouse, the Elographics touch screen, and NestorWriter. Originally broadcast in 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC521_input_devices",
    episodeNumber: 521,
    ia_subject: "keyboard;mouse;light pen"
},
{
    ia_title: "Laptop Peripherals",
    ia_description: "So you've bought your laptop, but that's only the beginning. What else do you need to become the complete road warrior? This program looks at several add-on options including Lap Link and Battery Watch from Traveling Software, back up batteries and chargers, RAM cards, Brooklyn Bridge, WonUnder expansion kit, Axonix ThinkWrite portable printer, Diconix 150 portable printer, Dukane Magniview projector, the Datavue portable fax, and modems from Worldport. Laptops shown include the Gridlite Plus portable and the Toshiba T1100. Originally broadcast in 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC523_laptop_peripherals",
    episodeNumber: 523,
    ia_subject: "laptop;notebook;portable"
},
{
    ia_title: "Add-on Boards",
    ia_description: "In the early days of PCs, you had to know how to open up the box and add the functionality you really wanted when you bought the computer. This program looks at some of the upgrade options including AST's Rampage 286 board, Paradise Systems' VGA Plus Graphics card, IBM's Inboard/386, and Quadram's JT Fax board, and the TV Producer board for the Macintosh II. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC524_add-on_boards",
    episodeNumber: 524,
    ia_subject: "Episode Year: 1988;Television Programs;Computers: History;graphics cards;fax cards;add-on boards"
},
{
    ia_title: "Investment Software",
    ia_description: "Personal computers level the playing field for individual investors, giving them access to research data that in the past was only available to large money managers. This program looks at several investment applications including The Fundamental Investor, Value Screen Plus, Metastock Professional, CompuTrac, the Quotrek FM receiver, Dow Jones News Retrieval Service, The Professional Portfolio, and Pro Plus Software's Wall Street Investor. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC525_investment_software",
    episodeNumber: 525,
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "investor;wall street;stock market"
},
{
    ia_title: "Personal CAD",
    ia_description: "Computer Aided Design (CAD) programs are used by engineers and architects, but new simplified CAD programs have come out for personal computers that let individual consumers use the power of CAD software. This program looks at several examples including Generic CADD, FastCAD, Dimensions, VersaCAD, Dream House, and Car Builder. Also a look at the standard for high end CAD programs, AutoCAD. Originally broadcast in 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC526_personal_cad",
    episodeNumber: 526,
    ia_subject: "CAD;computer aided design;architecture"
},
{
    ia_title: "MacWorld Boston 1988",
    ia_description: "On location coverage of the annual MacWorld expo in Boston. Guests include Jean Louis Gassee and Bob Metcalfe. Companies profiled include Aba Software, Cricket Software, Deneba Software, Microillusions, Silicon Beach, Advent, Claris, Dynaware, Pixelogic, Aldus, Letraset, Microsoft, Ashton-Tate, Springboard Software, Aegis, MacroMind, TrueVision, Electronic Arts, SuperMac, and Apple. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC601_macworld",
    episodeNumber: 601,
    ia_subject: "macworld;macintosh;apple"
},
{
    ia_title: "Apple II Forever",
    ia_description: "Today they're called \"mac heads\", but way back in the 1980's, Apple users were in love with the Apple II. Despite the introduction of the Mac in 1984, the Apple II continued to have its devoted fans. This program looks at the Apple II culture during the early Mac era. Included are the Apple IIc+, the Apple II-GS, and a rare Apple I. Guests include John Sculley and Gary Kildall. Software demonstrations are of Math Blaster, Paintworks Gold, and Microsoft Bookshelf. Also a look at the newest Macintosh at the time, the Mac IIx. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "CC605_apple_ii_forever",
    episodeNumber: 605,
    ia_subject: "apple;macintosh;sculley"
},
{
    ia_title: "Spreadsheet Wars",
    ia_description: "Excel now dominates the spreadsheet world, but once upon a time there was actual competition among spreadsheet products. This program looks at Quattro 1.0, Allways 1.0, Lotus 1-2-3 3.0, Ashton-Tate's Full Impact, and Excel 2.1. Guests include Gary Kildall, Jan Lewis, and Jared Taylor of PC Magazine. Originally broadcast in 1988.\nCopyright 1988 Stewart Cheifet Productions",
    ia_broadcastyear: 1988,
    ia_identifier: "CC606_spreadsheet_wars",
    episodeNumber: 606,
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "spreadsheets;excel;lotus"
},
{
    ia_title: "New Laptops",
    ia_description: "They weren't quite \"notebook\" computers yet, but laptops were replacing \"luggables\" in the portable computer category during the late 1980's. This program looks at the state of the art in portables including the Atari Portfolio, the GridPad, the Poqet PC, the Dynabook 286, the NEC Color Portable, Toshiba's T3200SX, IBM's P70 386, and the new Mac Portable. Average price for one of these laptops was about $5,000. Guests include Traveling Software CEO Mark Eppley. Originally broadcast in 1989. Copyright 1989 Stewart Cheifet Productions.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC704_new_laptops",
    episodeNumber: 704,
    ia_subject: "laptop;portable;notebook"
},
{
    ia_title: "Megahertz Mania",
    ia_description: "In the late 1980's PC users were ecstatic over the introduction of 32 bit processors and CPUs running at the blazing speed of 33 megahertz. This program looks at some performance innovations including the AST Premium 386SX/33, the IBM 286s, the Cumulus 386SX add-on card, the Hauppauge 386 Motherboard 33, the Everex 386, and MultiSoft's PC-Kwik Power Pak. Software used for demonstrations include AutoCAD, Splash and Excel. Also features a look at new Intel chips, the i486 CISC and the i860 RISC chips, and new Motorola chips, the RISC 88000 and the CISC 68000. Copyright 1998 Stewart Cheifet Productions.",
    ia_identifier: "CC706_megahertz_mania",
    episodeNumber: 706,
    ia_year: 1989,
    ia_subject: "CPU;microprocessor;megahertz"
},
{
    ia_title: "Desktop Presentation Graphics - Part One",
    ia_description: "The introduction of the Macintosh in the mid 1980's opened up a whole new world of desktop graphics capability. This program looks at several early graphics applications for the Mac including More II, Power Point 2.0, Persuasion 2.0, and Macromind Director. Originally broadcast in 1989. Copyright Stewart Cheifet Productions 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC707_desktop_presentation_graphics_1",
    episodeNumber: 707,
    ia_subject: "graphics;powerpoint;presenations"
},
{
    ia_title: "Desktop Presentation Graphics - Part Two",
    ia_description: "If a picture is worth a thousand words, then graphics should be an important tool for business. Thanks to more sophisticated computers and display technology, the use of corporate graphics work boomed in the late 1980's. This program looks at several new products for doing presentation graphics on a PC including Harvard Graphics 2.12, Draw Partner, Freelance Plus 3.01, Graph Plus 1.3, Storyboard Plus 2.0, GEM Presentation 1.1, AutoDesk Animator, and Xerox Presents. Originally broadcast in 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC707_desktop_presentation_graphics_2",
    episodeNumber: 707,
    ia_subject: "graphics;presentations;business"
},
{
    ia_title: "Holiday Buyers Guide - 1989",
    ia_description: "The annual holiday buyer's guide for techie products. Gift giving selections for geeks from Gary Kildall, Paul Schindler, Jan Lewis, John Dickinson, Andrew Eisner, and Stewart Cheifet. Hardware and software for the PC and the Mac. Originally broadcast in 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC709_buyers_guide",
    episodeNumber: 709,
    ia_subject: "holiday;consumers;shopping"
},
{
    ia_title: "DOS to Mac and Back",
    ia_description: "In a world full of Macintosh computers and DOS based computers, there was a market for utilities that would translate between the two formats. This program looks at several examples, including DaynaFile, DOS Mounter, Soft PC, MacWrite II, LapLink Mac III, and PC MacTerm. Among the guests are Mark Eppley, CEO of Traveling Software and analyst Jan Lewis. Originally broadcast in 1989. Copyright 1989 Stewart Cheifet Productions. ",
    ia_broadcastyear: 1989,
    ia_identifier: "CC711_dos_mac",
    episodeNumber: 711,
    ia_subject: "DOS;Macintosh;PC"
},
{
    ia_title: "Computers and Fitness",
    ia_description: "As computers moved beyond doing just calculations and word processing, lots of small software companies found new kinds of applications for the growing universe of personal computers. One application was health and fitness. This program looks at several software titles and peripherals that let you use a computer to stay fit. Demonstrations include STEP II's Physical Fitness Evaluation, Psychological Psoftware's Never Fat Again, the Biofeedback Institute's Calmpute, and the Food Processor II from ESHA Research. Also featured are the Heart Window Plus Watch and the Fat Watch Plus Belt. Originally broadcast in 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC712_fitness",
    episodeNumber: 712,
    ia_subject: "fitness;health;diet"
},
{
    ia_title: "Low Cost LANs",
    ia_description: "With standalone PC's showing up in every office and in many homes, the big challenge became connecting computers in a local area network. This program looks at several low cost solutions to building a LAN. Demonstrations include LANtastic, LANsmart, Lotus Notes, 10Net Plus, and TOPS LAN. Originally broadcast in 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "CC713_lans",
    episodeNumber: 713,
    ia_subject: "local area network;LAN;connectivity"
},
{
    ia_title: "Optical Storage",
    ia_description: "As we entered the 1990's, the big technology news was the move from magnetic storage to optical storage. It was the year of multimedia and the CD-ROM. This program looks at several applications including Grolier Encyclopedia, PC Globe, Headstart III, PC Splash, The Listening Booth, USA Travel, PLV, the NEC Portable CD-ROM CDR-35, the Sony rewritable optical disc Drive SMO-S501, and the video laser disc application \"Advanced Combat Trauma Life Support\". Also a look at the CD Interactive (CDI) and Digital Video Interactive (DVI) platforms. Originally broadcast in 1990. Copyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "CC715_optical_storage",
    episodeNumber: 715,
    ia_subject: "optical;CD-ROM;laser disk"
},
{
    ia_title: "Low Cost Laser Printers",
    ia_description: "When laser printers first came out in the 1980's they were prohibitively expensive for most individual users. In the early 1990's, prices came down and even small businesses were able to upgrade from their old dot matrix printers. This program looks at several early options for low cost laser printers. Featured products include the GCC PLP II for the Macintosh, Okilaser 400 from Okidata, the Toshiba LaserPrinter, Canon's LBP-4, and the HP LaserJet IIP. Originally broadcast in 1990. Copyright Stewart Cheifet Productions 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "CC716_low_cost_laser_printers",
    episodeNumber: 716,
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "laser;printer;dot matrix"
},
{
    ia_title: "CD-ROM",
    ia_description: "Multimedia was the big deal in the early 90's as software publishers rushed to use the new storage medium for bigger and more interactive programs. This show looks at several new software titles on CD-ROM including Sherlock Holmes from ICOM Simulations, Jazz: A Multimedia History from Compton's New Media, and Battle Chess from MacPlay. Also a look at CD-ROM hardware including the TurboDuo from Turbo Technologies and the Portable CD-ROM Player from Sony and the Desktop Library CD-ROM system. Also featured is a visit to PC Week Labs for a review of new CD-ROM drives. Guests include Gina Smith of PC Computing and Jim Louderback of PC Week. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "CDROM10.3",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "sony; compact disk;compact disc; multimedia;optical"
},
{
    ia_title: "CD ROM Software",
    ia_description: "The advent of optical storage and CD-ROMs changed the rules for software applications and opened up a whole new generation of programs. Reviewed on this program are Encarta, the Association of Shareware Professionals CD-ROM collection, American Visions: 20th Century Art from the Neuberger Collection, Art Spiegelman's The Complete Maus from Voyager, Substance Digizine, and the new Broderbund game MYST. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "CDRom"
},
{
    ia_title: "Careers in Computing",
    ia_description: "A look at the job opportunities and requirements in the fast growing computer field.\nGuests: Gary Kildall, Digital Research; John Podkomorski, Hewlett Packard; James Patterson, Stanford; Pat Hill Hubbard, Amer Elect Assoc; Harry Hamlin, Hamlin Associates; George Morrow, Morrow Computing\nProducts/Demos: . Originally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Careersi1986",
    ia_year: 1986,
    ia_date: "1986-01-01T00:00:00.000Z",
    ia_proddate: "1986-03-04T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Cars & Computers",
    ia_description: "The average car has more computer chips in it than anything in your house. This program looks at software and online applications having to do with automobiles. Includes a look at auto racing games. Guests include Joe Beninato of Popular Mechanics Car Guide, Helga Lilley, CFO of Automotive Information Center, Alberto Penello of Electronic Arts, and Anthony Constantino of Spectrum Holobyte. Demonstrations include The Need for Speed, Grand Prix Manager, Popular Mechanics Car Guide, and AutoSite. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "CarsComp"
},
{
    ia_title: "Christmas Buyers Guide 1985",
    ia_description: "A consumer's review of the hottest hardware and software goodies for the techie on your holiday shopping list. Originally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Christma1985",
    ia_year: 1985,
    ia_date: "1985-01-01T00:00:00.000Z",
    ia_proddate: "1985-12-10T00:00:00.000Z",
    ia_subject: "consumer;shopping;buying"
},
{
    ia_title: "Christmas Buyers Guide 1986",
    ia_description: "A review of available hardware and software gifts for techies.\nProducts/Demos: Calendar Creator, HP Financial Consultant, Business Simulator, Muppet Learning Keys Toy Shop, Pen Mouse, Looking Your Best, AmnesiaPC, and Type Right. Originally broadcast in 1986. Guests include George Morrow, Paul Schindler, and Wendy Woods. Stewart Cheifet is host. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Christma1986",
    ia_year: 1986,
    ia_date: "1986-12-13T00:00:00.000Z",
    ia_subject: "shopping; holiday;christmas; buying;gadgets"
},
{
    ia_title: "Color Printers",
    ia_description: "The availability of reasonably priced color printers changed the way people and businesses used computers. This program covers new color printers from Hewlett Packard, Tektronix, QMS, Canon, ColossalJet, and ProofPositive. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "ColorPri"
},
{
    ia_title: "Comdex Special - 1994",
    ia_description: "On location coverage of the annual fall Comdex trade show in Las Vegas. Includes highlights of the Bill Gates keynote speech. Features analysis from Tim Bajarin of Creative Strategies. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "ComdexSp",
    ia_subject: "comdex;las vegas;bill gates"
},
{
    ia_title: "Comdex 1986",
    ia_description: "A review of the newest hardware and software as exhibited at the annual fall Comdex show in Las Vegas.\nGuests: Hal Glatzer, Software News; Tim Bajarin, Creative Strategies; Jan Lewis, Palo Alto Research Group\nProducts/Demos: Hyundai & Samsung 386 PCs, Compaq 386 PC, Zenith PortableNEC Multispeed, Datavue SNAPPC Movie Maker, Smart Sneaker, Phonetic Engine, Hitachi & Toshiba Drives, Okidata & LED Laser Printers, QMS and HP Printers. Originally broadcast in 1986. \nCopyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "ComdexSp1986",
    ia_year: 1986,
    ia_date: "1986-11-25T00:00:00.000Z",
    ia_proddate: "1986-11-25T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Computer Music",
    ia_description: "The computer as a creative tool used to make, display and store music.\nGuests: John Chowning, Stanford; Will Harvey, Electronic Arts; Ellen Lapham, Syntauri; Gary Kildall, DRI\nProducts/Demos: Music Construction Set, Alpha Syntauri Keyboard, Casiotone, Vocal Synthesizer, MIT Experimental Music Studio, Stanford Center for Computer Music.\nOriginally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Computer1984",
    ia_year: 1984,
    ia_date: "1984-02-26T00:00:00.000Z",
    ia_proddate: "1984-02-26T00:00:00.000Z",
    ia_subject: "1984; MIT; will harvey; john chowning; music; stanford"
},
{
    ia_title: "Computer Security",
    ia_description: "Security issues related to the world's increasing dependence on information containted in computer networks.\nGuests: Gary Kildall, Digital Research; Donn Parker, SRI International; Jim Holmes, Tri-Data Corporation\nProducts/Demos: Digi-Link, Add & Answer Verification.\nOriginally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Computer1984_2",
    ia_year: 1984,
    ia_date: "1984-03-26T00:00:00.000Z",
    ia_proddate: "1984-03-26T00:00:00.000Z",
    ia_subject: "1984; donn parker; sri;"
},
{
    ia_title: "Computer Ergonomics",
    ia_description: "A look at health problems related to computer use such as video display radiation and repetitive stress injuries.\nGuests: Herb Lechner, SRI International; Wanda Smith, Hewlett Packard; Karen Kessel, Koffler Group; Susan Kare, Apple; Jerry Manock, Apple.\n.Products/Demos: Apple Macintosh, HP Orion Computer. \nOriginally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Computer1984_3",
    ia_year: 1984,
    ia_date: "1984-03-04T00:00:00.000Z",
    ia_proddate: "1984-03-04T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Computer Games",
    ia_description: "Computers are creating an entirely new platform for playing games, between humans or between humans and computers.\nGuests: Trip Hawkins, Electronic Arts; Bill Budge, Game Designer; Chris Crawford, Atari; Steve Kitchen, Activision\nProducts/Demos: Pinball Construction Set, One on One, Space Shuttle, Excaliber, Larry Bird Basketball. Originally broadcast in September 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "Computer1984_4",
    ia_year: 1984,
    ia_date: "1984-09-28T00:00:00.000Z",
    ia_proddate: "1984-09-28T00:00:00.000Z",
    ia_subject: "Episode year: 1984; computer games; pinball; space; activation; atari; hawkins; budge;"
},
{
    ia_title: "Computer Entrepreneurs",
    ia_description: "A look at the people who are driving the personal computer industry.\nGuests: Gary Kildall, Digital Research; Steve Wozniak, Apple; Adam Osborne, Osborne Computer; Lore Harp, Vector Graphic; Gene Amdahl, Trilogy Systems. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Computer1984_5",
    ia_year: 1984,
    ia_date: "1984-10-05T00:00:00.000Z",
    ia_proddate: "1984-10-05T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Computer Graphics",
    ia_description: "A review of computer art, graphics capabilities of computers and professional computer graphics systems.\nGuests: Herb Lechner, SRI International; Don McKinney, Silicon Graphics; Michael Arent, Freelance Artist; Kevin Prince, MCI/Quantel; Ann Chase, Freelance Artist\nProducts/Demos: MCI Quantel PaintBox, Silicon Graphics 3D Animation, Apple IIe.\nOriginally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "Computer1984_6",
    ia_year: 1984,
    ia_date: "1984-04-05T00:00:00.000Z",
    ia_proddate: "1984-04-05T00:00:00.000Z",
    ia_subject: "1984; paintbox; quantel; silicon grapics;"
},
{
    ia_title: "Computer Graphics",
    ia_description: "A look at the new graphics tools available to computer users, both for amateurs and professionals.\nGuests: Marein Cremer, Apple; Mark Bola, Imagic; Stephen Rosendahl, Pacific Data Images; Ed Bernstein, Broderbund; James Dowlen, Computer Artist; Gary Kildall, Digital Research\nProducts/Demos: MacDrawMagic, Dazzle Draw, Lumena.\nOriginally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Computer1985_10",
    ia_year: 1985,
    ia_date: "1985-06-18T00:00:00.000Z",
    ia_proddate: "1985-06-18T00:00:00.000Z",
    ia_subject: "1986; broderbund; dazzle draw;"
},
{
    ia_title: "Computers & the Media",
    ia_description: "From newsrooms to sports arenas, computers have invaded the media.\nGuests: Ray Douglas, USA Today; Rodney Stock, Computer Arts Inst; Dave Patton, Prism Arts Group; Rollin Post, KRON TV; Valerie Coleman, KCBS; George Morrow, Morrow Computing\nProducts/Demos: Aurora 75 Graphics System, Pacific Data Images. Originally broadcast in October 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Computer1985_2",
    ia_year: 1985,
    ia_date: "1985-10-15T00:00:00.000Z",
    ia_proddate: "1985-10-15T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computer Networks",
    ia_description: "A look at the new technology for computers communicating with other computers.\nGuests: Gary Kildall, Digital Research; Sherry Geddes, Strategic Inc.; Bob Metcalfe, 3Com; Bill Godbout, CompuPro; Richard Goldberg, IBM; Nat Goldhaber, Centram Systems; George Morrow, Morrow Computing\nProducts/Demos: EtherMacToken Ring, TOPS Network. Originally broadcast in October 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Computer1985_3",
    ia_year: 1985,
    ia_date: "1985-10-29T00:00:00.000Z",
    ia_proddate: "1985-10-29T00:00:00.000Z",
    ia_subject: "1985; 3com; ibm; ethernet;"
},
{
    ia_title: "Computers & Politics 1985",
    ia_description: "A look at how computers are changing the political process including campaign management, voter profiling, fundraising, and grass roots organizing. Produced in 1985. \nGuests: Gary Kildall, Digital Research; Frank Tobe, Tobe & Associates; Roger Lee, Capital Data Communic; Rep. Bob Carr, Dem Michigan; Rep. Ed Zschau, Rep California; Gary Chapman, CPSR; George Morrow, Morrow Computing\nProducts/Demos: Washington Alert Service, Q Systems Solon",
    ia_identifier: "Computer1985_4",
    ia_date: "1985-11-05T00:00:00.000Z",
    ia_proddate: "1985-11-05T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computers & Medicine",
    ia_description: "Doctors are turning to computers for medical research, diagnosis and clinic management.\nGuests: Gary Kildall, Digital Research; Dr. Ben Honigman, U of Colorado; Mark Tuttle, UC Berkeley; Dr. Chandler Dawson, UCSF; Dr. Mark Musen, Stanford; George Morrow, Morrow Computing\nProducts/Demos: Drexler LaserCard, MicroMedex, Computerized Clinical Information System, Poisindex, Drugdex, Emergindex, Pulmonary Function (PUFF), MedLine.\nOriginally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Computer1985_5",
    ia_year: 1985,
    ia_date: "1985-11-12T00:00:00.000Z",
    ia_proddate: "1985-11-12T00:00:00.000Z",
    ia_subject: "1985; health; medical;"
},
{
    ia_title: "Computer Games",
    ia_description: "A look at the newest computer games for PC users.\nGuests: Kathe Spracklen, Game Developer; James Zuber, Game Developer; David Crane, Activision; David Lebling, Game Developer; Gary Kildall, DRI\nProducts/Demos: Sargon III Chess Game, Millionaire Strategy Game, Pitfall, Zork ( Infocom), Ghostbusters.\nOriginally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Computer1985_6",
    ia_year: 1985,
    ia_date: "1985-01-21T00:00:00.000Z",
    ia_proddate: "1985-01-21T00:00:00.000Z",
    ia_subject: "1985; games; chess; pitfall; zork; ghostbusters;"
},
{
    ia_title: "Computers and the Disabled",
    ia_description: "A review of how computers are helping the blind and other disabled persons lead a better life.\nGuests: Peggy Barker, Children's Hospital; Susan Simpson, Prentke-Romich; Sue Melrose, Veterans Administr; Noel Runyan, Product Developer; Gary Kildall, DRI\nProducts/Demos: Express 3, Chin Joystick, VersaBraille, Echo II Synthesizer, Kurzweil Reading Machine",
    ia_identifier: "Computer1985_7",
    ia_date: "1985-02-11T00:00:00.000Z",
    ia_proddate: "1985-02-11T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computers in Sports",
    ia_description: "From the dugout to the training room to the dining room, coaches and players and turning to computers to improve performance.\nGuests: Steve Boros, Oakland A's Manager; Billy Hicks, Qantel; Rich Anderson, Canada College; Bruce Brown, CompuTennis; Gary Kildall, DRI; Rick Bunch, Biomechanics Lab; Jeff Cohen, Converse\nProducts/Demos: North Sails, CompuTennis Scorer, Sports-Pac, SkyCam, Northstar Horizon, Tec Mar Adaptor",
    ia_identifier: "Computer1985_8",
    ia_date: "1985-02-25T00:00:00.000Z",
    ia_proddate: "1985-02-25T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computers in Communications",
    ia_description: "Computer and communication technologies are merging creating the new field of informatics.\nGuests: Bob Metcalfe, 3Com; Bill Gillis, Charles Schwab; Glenn Albinger, Computer Colorworks; Barry Margerum, Grid Systems; Gary Kildall, Digital Research\nProducts/Demos: Ethernet, UNET, Digital Paintbrush System, Grid Compass, QuoTrekRolm Jupiter and Cedar Systems, AT&T 7300. Originally broadcast in March 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Computer1985_9",
    ia_year: 1985,
    ia_date: "1985-03-25T00:00:00.000Z",
    ia_proddate: "1985-03-25T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computers in Law Enforcement",
    ia_description: "A review of computer applications for police, the FBI and other law enforcement agencies.\nGuests: Gary Kildall, Digital Research; Steve Port, Hawthorne Police Dept; Louise Anderson, Command Data; Earlene Busch, Information Access; David Hall, Search Group Inc.; George Morrow, Morrow Computing\nProducts/Demos: Probe One, Criterion Mapping System, SHRLOC Computer Aided Dispatch",
    ia_identifier: "Computer1986",
    ia_date: "1986-01-14T00:00:00.000Z",
    ia_proddate: "1986-01-14T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Computers and the Pentagon Part One",
    ia_description: "The world's biggest computer user is the U.S. government and the military in particular. This program reviews the military uses of computer technology. Shot on location at various research centers around the country. Featured are the Robotics Institute at Carnegie Mellon University in Pittsburgh, Pennsylvania and Advanced Decision Systems in Mountain View, California. Demonstrations include the Pilot's Assistant and the Battlefield Commander's Assistant. Also flight and battle simulators from Singer Link. Guests include Raj Reddy, Director of the Robotics Institute at CMU. Originally broadcast in 1986.",
    ia_broadcastyear: 1986,
    ia_identifier: "Computer1986_2",
    ia_year: 1986,
    ia_date: "1986-01-01T00:00:00.000Z",
    ia_proddate: "1986-04-01T00:00:00.000Z",
    ia_subject: "pentagon;military;simulators"
},
{
    ia_title: "Computers & the Pentagon Part Two",
    ia_description: "A look at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country. Featured are demonstrations of SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, and the Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats. Originally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Computer1986_3",
    ia_year: 1986,
    ia_date: "1986-01-01T00:00:00.000Z",
    ia_proddate: "1986-04-08T00:00:00.000Z",
    ia_subject: "pentagon;military;defense"
},
{
    ia_title: "Computers and the Arts",
    ia_description: "Computers are moving form math and engineering to the world of the arts. A look at how artists are using computer technology.\nGuests: Eddie Dombrower, DOM Dance Press; Larry Friedlander, Stanford; Charles Kerns, Stanford; John Burke, Oakland Museum; Stacy Mitchell, Great Wave Software\nProducts/Demos: DOM Dance Notation, PatchworkTheater, GameMac, VisionMac, SpinConcertWare, Terpsichore. Originally broadcast March 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_identifier: "Computer1987",
    ia_year: 1987,
    ia_date: "1987-03-17T00:00:00.000Z",
    ia_proddate: "1987-03-17T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Computers and Illiteracy",
    ia_description: "A review of how computers are being used in innovative programs to teach basic literacy skills to adults.\nGuests: John Fleischman, La Puente Adult Schools; Jane Nissen Laidley, People's Computer Co; Dr. John Henry Martin, IBM; Gary Kildall, Digital Research\nProducts/Demos: LEAP Functional Literacy, Adult Literacy and Learning, Maze Mania",
    ia_identifier: "Computer1987_2",
    ia_date: "1987-03-24T00:00:00.000Z",
    ia_proddate: "1987-03-24T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Computers and Gambling",
    ia_description: "Lotteries, exotic horse racing bets and high-tech slot machines are all made possible by new computer technology.\nGuests: Robin Cobbey, Computer Sports World; Michael Roxborough, LV Sports Consultant; Robert Archer, PDS Sports; Michael Orkin, Cal State Univ Hayward; George Morrow, Morrow Computing\nProducts/Demos: NBA On-Line, Golden Gate Fields, Horserace Handicapping, Pro Football Handicapping",
    ia_identifier: "Computer1987_3",
    ia_date: "1987-03-31T00:00:00.000Z",
    ia_proddate: "1987-03-31T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Computer Crime",
    ia_description: "Is your PC safe from crime? Whether it's a computer virus via email, hackers breaking into your web site, or you using your credit card to buy something online, you are not safe from crime just because you're at home. We'll show you the latest ways to protect your computer and yourself in the digital world. Demonstrations include McAfee software. Guests include Donn Parker from SRI. Episode #1707. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "Computer1999",
    ia_year: 1999,
    ia_date: "1999-10-03T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Security;Virus;Companies: McAfee"
},
{
    ia_title: "Computers Without Keyboards",
    ia_description: "The keyboard is a rather primitive way to communicate with a computer. This program looks at several alternatives including Dragon Naturally Speaking, Dragon Mobile Organizer, Auto PC, InfoGation Odussey, InfoGation Phonebase, BeVocal, Force Feedback joystick from Microsoft, Razor Boomslang mouse, EverGlide Mouse Pad, Interact Starfire Lightblaster, and Sega's Fishing Controller. Originally broadcast in 2000.",
    ia_broadcastyear: 2000,
    ia_identifier: "Computer2000",
    ia_date: "2000-02-08T00:00:00.000Z",
    ia_proddate: "2000-02-08T00:00:00.000Z",
    ia_subject: "speech recognition;joystick;keyboard"
},
{
    ia_title: "Computers & Politics 2000",
    ia_description: "A review of the use of personal computers and the Internet in political campaigns, including a comparison of candidate web sites, a look inside a Senatorial campaign, and the prospects of on-line voting. Produced during the 2000 elections campaign season.",
    ia_identifier: "Computer2000_2",
    ia_date: "2000-03-28T00:00:00.000Z",
    ia_proddate: "2000-03-28T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Politics"
},
{
    ia_title: "Computers and The Pentagon, Part 1",
    ia_description: "The enemy is different but the technology is the same. We dug into our archives and found the U.S. military technology developed during the Cold War in a 1980's Computer Chronicles show is much the same technology now used in the U.S. war against terrorism.This program reviews the military uses of computer technology. Shot on location at various research centers around the country. Featured are the Robotics Institute at Carnegie Mellon University in Pittsburgh, Pennsylvania and Advanced Decision Systems in Mountain View, California. Demonstrations include the Pilot's Assistant and the Battlefield Commander's Assistant. Also flight and battle simulators from Singer Link. Guests include Raj Reddy, Director of the Robotics Institute at CMU. Originally broadcast in 1986. \n",
    ia_broadcastyear: 1986,
    ia_identifier: "Computer2001_2",
    ia_date: "2001-11-13T00:00:00.000Z",
    ia_subject: "pentagon;Military;Robotics"
},
{
    ia_title: "Computers and the Pentagon - Part 2",
    ia_description: "A look at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country. Featured are demonstrations of SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, and the Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats. Originally broadcast in 1986. \n",
    ia_broadcastyear: 1986,
    ia_identifier: "Computer2001_3",
    ia_subject: "military;pentagon;defense"
},
{
    ia_title: "Computer Bowl X - Part 1",
    ia_description: "East meets West in this classic quiz show about computer trivia. East coast team: Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff. West coast team: Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso. Guest questioner: John Ratzenberger. Host: Stewart Cheifet. Originally broadcast in 1998. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "Computer98",
    ia_year: 1998,
    ia_date: "1998-09-08T00:00:00.000Z",
    ia_proddate: "1998-09-08T00:00:00.000Z",
    ia_subject: "Episode Year: 1998;Television Programs;Computers: History;Computer Bowl"
},
{
    ia_title: "Computer Chronicles - Search Engines",
    ia_description: "A review of search engines in 1996.",
    ia_identifier: "ComputerChronicles-SearchEngines",
    ia_year: 1996,
    ia_subject: "computer; chronicles; cheifet; search; internet"
},
{
    ia_title: "Computer Chronicles - Search Engines",
    ia_description: "An early pre-Google look at search engine technology. Episode # 1404. Featured are DataQuest, Alta Vista, Zip 2, Autonomy, Pointcast, and The Angle. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "ComputerChronicles-SearchEngines_861",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "search; internet; chronicles; cheifet"
},
{
    ia_title: "Computers & Politics 1992",
    ia_description: "A look at how computers were used in the 1992 election campaign, the first time computers were used in a significant way in running political campaigns. Examples include Governor Jerry Brown's presidentail campaign, fund raising by the Democratic National Committee, opinion tracking, and lobbying. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "Computer_3",
    ia_subject: "politics;elections;candidates"
},
{
    ia_title: "Computer Ergonomics",
    ia_description: "With everyone now using computers, there is increasing concerns about the negative health effects of keyboards, mice, and monitors. Products reviewed include the Ergotron Workstation, ErgoDyne's WorkSmart Manager, the Data Hand Keyboard and Mouse, Safe Technologies' ELF/VLF Meter, and the ProView Desk. Also a visit to the VDT Eye Clinic at UC Berkeley. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "Computer_4",
    ia_subject: "ergonomics;1993"
},
{
    ia_title: "Consumer Buying Guide 1992",
    ia_description: "A holiday season shopping guide for geeks, featuring techno gadget picks by Paul Schindler of Windows magazine, Tim Bajarin of Creative Strategies, Steve Fox of PC World magazine, Jim Martin of Mac World magazine, and program host Stewart Cheifet. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "Computer_6"
},
{
    ia_title: "Computer Art",
    ia_description: "A review of hardware and software products for artists. Products reviewed include Opal Vision for the Amiga 4000, Alladin 4D for the Amiga 4000, CorelDraw for Windows, Fractal Design's Painter 1.2 for the Mac, and the Calcomp Drawing Board. Also featured are visits to the Academy of Art College in San Francisco and the studio of computer artist Jim Ludtke. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "Computer_7"
},
{
    ia_title: "Computer Ergonomics",
    ia_description: "With people spending more and more time at a computer, the health issues related to extended computer use became big news. This program looks at several ergonomic issues and solutions, including the Ergotron Workstation, Ergodyne's WorkSmart Manager, Data Hand Keyboard and Mouse, SLF monitor, ProView desk, and Glare Guard filters for monitors. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "Computer_8",
    ia_subject: "ergonomics;workstation;carpal tunnel syndrome"
},
{
    ia_title: "Computer Bowl VI Part 1",
    ia_description: "The sixth annual Computer Bowl contest pitting East coast techies against West coast nerds to see who knows more about computer trivia. West coast team: Bill Gates, Bill Joy, Jeffery Kalb, David Liddle, Harry Saal. East coast team: Mitchell Kapor, Bob Frankston, Pamela McCorduck, David Nelson, Neil Colvin. Guest quesetioner: Andy Grove. Host: Stewart Cheifet. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "Computer_9",
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1994;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "Consumer Buying Guide 1999",
    ia_description: "Our annual round-up of the latest and greatest software, hardware, websites, and gadgets, reviewed by a panel of journalists and analysts. Just in time for holiday buying ideas for your favorite techie... or yourself. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "Consumer1999",
    ia_year: 1999,
    ia_date: "1999-11-23T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Episode year: 2000;Episode year: 1999;Companies: Handspring;Companies: Apple;Companies: Compaq;Companies: IBM;Companies: Sega;Companies: Microsoft;Companies: Polaroid"
},
{
    ia_title: "Consumers Buying Guide 1993",
    ia_description: "Our annual look at the coolest new techie gadgets for the holiday season, as selected by Gina Smith, Tim Bajarin, Paul Schindler and Stewart Cheifet. Products reviewed include Creative Wrtier, SIM City 2000, Myst, CyberPuppy, Crystal Craze, Mozart CD-ROM, Stika, Rock Rap and Roll, The Tortoise and the Hare, Imagicard, Kid Cad, Twain's World, Memphis, NHL Hockey, CyberMan 3D, VideoShow Presenter, AXIS Game Cheater, and Morphman. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "Consumer_3",
    ia_subject: "christmas;holiday;shopping"
},
{
    ia_title: "Cooking with Your PC",
    ia_description: "There are software programs and online resources to allow you to cook like an expert chef, learn about food, and show you how to have a more nutritious meal. Since cooking shows on PBS are so popular, we'd thought we'd bring you an episode on cooking with your PC!",
    ia_identifier: "Cookingw2000",
    ia_year: 2000,
    ia_date: "2000-02-29T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Companies: Webvan;Companies: Sun Microsystems"
},
{
    ia_title: "Copyright Issues Online",
    ia_description: "The Internet has created a place where it is easy to find information and art to share. But what about copyright issues? Is everything free for the asking online? We'll show you software to protect your own site from being copied without your permission as well as discuss the latest issues involving newspapers and magazines re-printing their own articles online.",
    ia_identifier: "Copyrigh2000",
    ia_date: "2000-10-24T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Companies: Adobe;Legal Issues;Music"
},
{
    ia_title: "Creating Your Own Website",
    ia_description: "We tell you the tools and the software needed so you can claim your spot on the Internet. From importing pictures to your site to advertising to help pay for your site and tell you all about it.\n[Episode #1907, First broadcast: 2/27/2001]",
    ia_identifier: "Creating2001",
    ia_date: "2001-02-27T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Companies: Macromedia;Companies: Adobe"
},
{
    ia_title: "Creativity Software",
    ia_description: "Computers have evolved from number crunching machines to word processors to creativity tools. This program looks at several creative applications including Art Dabbler 2.0 from Metacreations, Music Maker V2000 from Magix Entertainment, Adobe PhotoDeluxe 3.0, 3d Digital Photo Gallery 1.1 from Etalon, Dance Studio, and Writers Blocks. Originally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "Creating_2"
},
{
    ia_title: "Cyber Cafes",
    ia_description: "As the Internet continued to take hold, new hangouts called cyber cafes started opening up where you could surf the web and just pay by the minute. This program looks at the first wave of internet cafes in Boston and San Francisco. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "CyberCaf",
    ia_subject: "cyber;internet;cafe"
},
{
    ia_title: "Cyber Dating",
    ia_description: "One of the most popular early uses of the Internet was finding a date. This program looks at some of the first sites that offered to find that special someone. Sites demonstrated include match.com, americansingles.com, NetNoir, blinddate.com, and cupidnet.com. Guests include cyber dating counselor Dr. Judith Schwambach and netiquette advisor Larry Magid. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CyberDat",
    ia_subject: "dating; love; romance;courtship;marriage"
},
{
    ia_title: "Cyber Music",
    ia_description: "A review of hardware and software that can turn your personal computer into a music studio. Features the band MOE. Demonstrations include SimTunes, MixMan, Autoscore, and the Family Music Center piano teaching program. Also featured is a visit to the UC Berkeley Center for New Music and a look at the band MOE which was discovered on the web. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "CyberMus",
    ia_subject: "Moe;music;Mixman"
},
{
    ia_title: "Cyber Politics 1996",
    ia_description: "A review of the growing use of the internet and computers in political campaigns. This show looks at the use of sophisticated databases to create voter mailing lists, campaign strategy software, online political activism, and campaign management tools. Produced during the election year of 1996.",
    ia_identifier: "CyberPol",
    ia_year: 1996
},
{
    ia_title: "Cyber Privacy",
    ia_description: "How do you maintain your privacy and still play in the online world? This program offers some suggestions including LPWA, the Lucent Personal Web Assistant, PGP5.5 Personal Privacy encryption software, the Anonymizer, and Firefly Networks Passport software. Also features a visit with a private investigator who deals with cyber privacy issues and a look at how eBay tries to avoid online scams. Originally broadcast in 1998.Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "CyberPri98",
    ia_year: 1998,
    ia_date: "1998-06-23T00:00:00.000Z",
    ia_subject: "identity theft;fraud;encryption"
},
{
    ia_title: "Cyber Security",
    ia_description: "With more and more computers becoming terminals on the internet, concerns were growing for internet security. This program looks at several solutions. Included are demonstrations of Wells Fargo Online Banking, Cookie Master, anonymizer.com, a fax encryptor from InfoImaging called 3D FaxFile 2.0, a new biometric device from Oracle called HandKey, and CompuTrace, a device that calls you if your computer is stolen. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "CyberSec",
    ia_subject: "security;encryption;cookies"
},
{
    ia_title: "Cyber Fiction",
    ia_description: "The advent of the computer and the internet provided a totally new platform for story telling. This program looks at a new paradigm for novelists using interactive technology. Demonstrations include writers.net, hooked.net, thetherapist.com, writers.com, and the Alsop Review. Also features collaborative fiction and cyber comics. Guests include cybernovelists Gary Gach, Chris Werby, Mark Dahlby, and Jaimes Alsop. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "Cyberfic98",
    ia_date: "1998-03-10T00:00:00.000Z",
    ia_subject: "writers;novels;collaboration"
},
{
    ia_title: "DOS 6.2",
    ia_description: "Do you remember DOS? Windows was still in the 3.0 version in the early 1990s and was basically a front end to this version of DOS. PC users were trying to decide whether to stick with the new version of DOS or migrate to Windows. This program looks at the new version of DOS, compares it to its predecessor 6.0, and looks at some new add-ons such as Stacker 3.1 from Stac Electronics and Norton Utilities 7.0 from Symantec. Also includes a look at IBM's new PenDOS, a visit to Ziff Davis Labs, and a visit to the DOS development labs at Microsoft in Redmond. Guests include Van Wolverton, author of \"Running MS-DOS\" and Chris Barr, Senior Editor for PC Magazine. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "DOS62",
    ia_subject: "Microsoft;windows; IBM;Norton; Symantec"
},
{
    ia_title: "DVD 101",
    ia_description: "New computers are coming out with DVD drives built in. Do you need a DVD drive? We'll show you why this new format is great and how you can upgrade your old PC to use this new technology. Originally broadcast in October, 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_identifier: "DVD1011999",
    ia_year: 1999,
    ia_date: "1999-10-19T00:00:00.000Z",
    ia_proddate: "1999-10-19T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Companies: Sony;Companies: Panasonic;DVD"
},
{
    ia_title: "Database Software",
    ia_description: "Mainframe and network databases for computer users.\nGuests: Gary Kildall, DRI; Roger Summit, Dialog; Jay Fitzgerald, The Source; Paul Schindler, Info Syst News\nProducts/Demos: The Source, CompuServe, Dialog Information ServicesOriginally broadcast in 1984. Copyright Stewart Cheifet Productions 1984.",
    ia_broadcastyear: 1984,
    ia_identifier: "Database1984",
    ia_year: 1984,
    ia_date: "1984-05-21T00:00:00.000Z",
    ia_proddate: "1984-05-21T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Decision Support Systems",
    ia_description: "Expert systems software and artificial intelligence applications.\nGuests: Gary Kildall, DRI; Mike Thoma, Mgmt Decisn Sys; Steve Weyl, Syntelligence; Jim Chapman, Human Edge SW \nProducts/Demos: Strategic Simulations Epidemic, Prospector, CompuStat, Easy Scan, Sales Edge.\nCopyright 1984 Stewart Cheifet Productions",
    ia_identifier: "Decision1984",
    ia_year: 1984,
    ia_date: "1984-01-01T00:00:00.000Z",
    ia_proddate: "1984-02-02T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Desktop Publishing #1",
    ia_description: "First of a two-part series on desktop publishing focusing on new software applications for the Macintosh.\nGuests: Michael Tchong, Manhattan Graphics; Richard Ware, Casady; Randall Kincaid, Dynamic Graphics; Michael Boich, Radius; Paul Brainerd, Aldus Corporation; Gary Kildall, Digital Research\nProducts/Demos: Comic Works, Ready, Set, Go, Fontographer, Fluent Fonts, Right Now, Desktop ArtOriginally broadcast in 1986. Copyright Stewart Cheifet Productions 1986.",
    ia_broadcastyear: 1986,
    ia_identifier: "DesktopP1986",
    ia_year: 1986,
    ia_date: "1986-11-02T00:00:00.000Z",
    ia_proddate: "1986-11-02T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Desktop Publishing #2",
    ia_description: "Second part of this series on desktop publishing looking at software applications for DOS based computers.\nGuests: Richard Amen, Dest Corporation; John Meyer, Ventura Software; Roger Archibald, Hewlett Packard; Paul Brainerd, Aldus Corporation; Jonathan Seybold, Seybold Publications; Gary Kildall, Digital Research\nProducts/Demos: DEST PC Scan Plus, Ventura Publisher, PostScript, PageMaker, HP DDL",
    ia_identifier: "DesktopP1987",
    ia_date: "1987-01-04T00:00:00.000Z",
    ia_proddate: "1987-01-04T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Desktop Video 1998",
    ia_description: "A review of some of the early hardware and software products for desktop video. Demonstrations include Sony's DS250 digital video camera, VideoBrush Panorama, Pinnacle Systems' microVideo DV300 editing software, Character Studio for 3D StudioMAX, and Play Incorporated's Trinity \"studio-in-a-box\". Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "Desktopv98",
    ia_year: 1998,
    ia_date: "1998-08-11T00:00:00.000Z",
    ia_subject: "Pinnacle; Sony;Kinetix; Play; Trinity;VideoBrush; editing"
},
{
    ia_title: "Digital Home Movies",
    ia_description: "Can you produce the next generation of The Blair Witch Project at home on your computer. We'll show you some of the tricks of personal computers these days that you can use to turn your ideas into real movies as well as just how to add some production value to your home videos.",
    ia_identifier: "DigitalH1999",
    ia_date: "1999-11-09T00:00:00.000Z",
    ia_proddate: "1999-11-09T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Companies: Apple;Digital Video"
},
{
    ia_title: "Digital Journalism",
    ia_description: "The digital revolution changed the practice of journalism. This program looks at how journalists are using computers and the Internet. Segments include CNN Newsroom Global View, the San Jose Mercury's Mercury Center on AOL, Prodigy's Journalist application, Newsweek Interactive, the JFK Assassinatin CD-ROM, a visit to the MIT Media Lab, and CNBC's Private Financial Network (PFN) online service. Guests include Michael Rogers of Newsweek. Originally broadcast in 1993.\nCopyright 1993 Stewart Cheifet Productions",
    ia_broadcastyear: 1993,
    ia_identifier: "DigitalJ",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "digital; journalism; mercury news; san jose;cnn; cnbc; newsweek; michael rogers;aol"
},
{
    ia_title: "Digital Living Room 2000 Part 1",
    ia_description: "What will day-to-day life be like when our homes are wired, when we all have broadband pipes, and when everything that surrounds us has been transformed from the world of atoms to the world of bits?",
    ia_identifier: "DigitalL2000",
    ia_date: "2000-09-19T00:00:00.000Z",
    ia_proddate: "2000-09-19T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Interactive TV;Companies: AOL;Music;Networking;Security"
},
{
    ia_title: "Digital Living Room 2000 Part 2",
    ia_description: "We conclude our look at the digital future in Computer Chronicle's coverage of the Digital Living Room Conference from Laguna Niguel, California.",
    ia_identifier: "DigitalL2000_2",
    ia_date: "2000-09-26T00:00:00.000Z",
    ia_proddate: "2000-09-26T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Wireless: Bluetooth;e-commerce;Companies: Microsoft;Companies: Kodak;Digital Imaging"
},
{
    ia_title: "Digital Living Room 1998",
    ia_description: "On location coverage of the Digital Living Room conference presented by Upside magazine in Laguna Niguel, California. This conference was the first to try and define the wired, and wireless, consumer future. Guests include David Coursey, Mike Langberg, Larry Magid, Philippe Kahn, Kai Krause of Kai's Power Tools, and MSNBC anchor Brian Williams. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "DigitalL98",
    ia_date: "1998-09-29T00:00:00.000Z",
    ia_subject: "upside;conference;digital"
},
{
    ia_title: "Digtal Photography",
    ia_description: "A look at the growing field of digital photography. Products reviewed include the Epson PhotoPC 750Z camera, the Epson Stylus Photo 700 color ink jet printer, Polaroid's ColorShot Digital Photo Printer, MGI's Photosuite II imaging software, Instant Photo Artist, PhotoRecall Deluxe 2.0, and web sites photoloft.com, digitaldog.net, and evercolor.com. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "DigtalPh"
},
{
    ia_title: "Doc in a Box",
    ia_description: "New software and online resources can turn your computer into a health information center. This program looks at several examples including the Home Medical Advisor from the Learning Company, Active Trainer from LaserMedia, Lighten Up from Medilife, and Ask Dr. Weil from Time New Media. Also includes the Polar Heart Rate Monitor and 3D imaging software for surgeons. Featured is a visit to the NASA Ames Biocomputation Center and the Stanford Medical Center. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Docinabo98",
    ia_date: "1998-09-01T00:00:00.000Z",
    ia_subject: "doctor;medical;health"
},
{
    ia_title: "E3 1996",
    ia_description: "Highlights from the annual Electronic Entertainment Expo held in Los Angeles. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "E3Specia"
},
{
    ia_title: "ETRE Berlin 1996",
    ia_description: "On location coverage of the annual European Technology Roundtable Exhibition conference in Berlin. Leading technology executives and journalists from around the world gather to discuss the future of computer and internet technology. Guests include Fortune's David Kirkpatrick, Roel Pieper of Tandem, Eric Benhamou of 3Com, Michael Rogers of Newsweek, venture capitalist John Shock, conference host Alex Vieux, Marco Landi of Apple, and Stan Shih of Acer. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "ETRE1997",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "europe;conference;germany"
},
{
    ia_title: "ETRE 1998 Lisbon Part Two",
    ia_description: "Coverage of the annual European Technology Roundtable Exhibition in Lisbon, Portugal. Featured guests include Microsoft Chairman Bill Gates, Janet Baker of Dragon Systems, John Gage of Sun, David Kirkpatrick of Fortune, Mitchell Kertzman of Sybase, Tony Perkins of Red Herring, Andreas Barth of Compaq, NASDAQ President Al Berkeley, and Yong Teh Lee of EMachines. Included are demonstrations of the latest technology for speech recognition and handwriting recognition. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "ETRE1999"
},
{
    ia_title: "ETRE 1998 Lisbon Part One",
    ia_description: "Coverage of the annual European Technology Roundtable Exhibition in Lisbon, Portugal. Featured guests include Microsoft Chairman Bill Gates, Yong Teh Lee of EMachines, John Gage of Sun, Michael Rogers of Newsweek Interactive, Tony Perkins of the Red Herring, Mitchell Kertzman of Sybase, NASDAQ President Al Berkeley, Nortel's Dave House, and Roel Pieper of Philips Electronics. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "ETRE1999_2"
},
{
    ia_title: "ETRE Monte Carlo 1999 Part One",
    ia_description: "The European Technology Roundtable Exposition, (ETRE), a gathering of the most prominent computer CEO's and analysts, was hosted by Dasar and held in Monaco recently. Computer Chronicles goes on location to meet the leaders of high-tech, to talk about Internet's influence, and the general future of e-commerce.",
    ia_identifier: "ETREEuro1999",
    ia_date: "1999-11-30T00:00:00.000Z",
    ia_proddate: "1999-11-30T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Conferences: ETRE"
},
{
    ia_title: "ETRE Monte Carlo 1999 - Part Two",
    ia_description: "This week, Computer Chronicles concludes its coverage of the 1999 European Technology Roundtable Exhibition, (ETRE), from Monte Carlo with an in-depth interview of Bill Gates of Microsoft.Copyright 1999 Stewart Cheifet Productions.",
    ia_identifier: "ETREEuro1999_2",
    ia_year: 1999,
    ia_date: "1999-12-07T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Conferences: ETRE"
},
{
    ia_title: "ETRE (European Technology Roundtable Exposition) 1999 - Part 3",
    ia_description: "This week, on the Computer Chronicles, we take you to Monte Carlo for the conclusion of a special three-part series on the 10th anniversary of the ETRE conference, the European Technology Roundtable and Exhibition.Copyright 2000 Stewart Cheifet Productions.",
    ia_identifier: "ETREEuro2000",
    ia_year: 2000,
    ia_date: "2000-01-18T00:00:00.000Z",
    ia_proddate: "2000-01-18T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Conferences: ETRE"
},
{
    ia_title: "ETRE 2000 Prague - Part 1",
    ia_description: "Highlights of the annual European Technology Roundtable Exhibition from Prague. This is the premiere annual gathering of tech industry executives. Featured in this program are Bill Gates of Microsoft, Jocelyn Attal of IBM, Tony Perkins of Red Herring, Michael Rogers of Newsweek Interactive, Carol Bartz of Autodesk, David Kirkpatrick of Fortune, Mark Walsh of VerticalNet, John Thompson of Symantec, David Wetherell of CMGI, Mitchell Kertzman of Liberate, Gil Shwed of Check Point, and Dan Gillmor of the San Jose Mercury News. Originally broadcast in 2000. Copyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "ETREEuro2001",
    ia_year: 2001,
    ia_date: "2001-01-01T00:00:00.000Z",
    ia_proddate: "2001-04-17T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Conferences: ETRE;Media"
},
{
    ia_title: "ETRE 2000 Prague - Part 2",
    ia_description: "The second part of a three part series on the annual European Technology Roundtable Exhibition held in Prague. ETRE is the premiere annual gathering of high tech executives from around the world. Additional guests in part two include Thom Calandra of CBS MarketWatch, Eric Benhamou of 3Com, and Keith Krach of Ariba. Originally broadcast in 2000.",
    ia_broadcastyear: 2000,
    ia_identifier: "ETREEuro2001_2",
    ia_date: "2001-04-24T00:00:00.000Z",
    ia_proddate: "2001-04-24T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Companies: IBM;Media"
},
{
    ia_title: "Easy Web Cams",
    ia_description: "We get down to the fundamentals of how to buy and install a web cam and the associated software in this episode of Computer Chronicles.",
    ia_identifier: "EasyWebC2001",
    ia_date: "2001-01-22T00:00:00.000Z",
    ia_proddate: "2001-01-22T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Episode year: 2001;Digital Video: Web cams;Digital Photography;Companies: Yahoo"
},
{
    ia_title: "Educational Software Part 1",
    ia_description: "A review of new software titles for use in schools and at home education.\nGuests: Donna Hower, Hillsborough School; Barbara Caligiuri, Cupertino School; Mickey Miller-Meredith, Burbank School; C. Mark Battey, Addison-Wesley; George Morrow, Morrow Computing\nProducts/Demos: Operation Frog, Apple Classroom Tomorrow, Reader Rabbit, Magic Slate, Animal Kingdom, Voyage of the Mimi",
    ia_identifier: "Educatio1986",
    ia_date: "1986-09-19T00:00:00.000Z",
    ia_proddate: "1986-09-19T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Educational Software Part 2",
    ia_description: "A look at on-line educational services and self-teaching software programs.\nGuests: Mary Cron, First Byte; Jim Becker, Terrapin Software; Mark Patterson, Mind Bank; Luba Lewytzkyj, Control Data; James Milojkovic, TeleLearning; George Morrow, Morrow Computing \nProducts/Demos: InfoMinder, National Gallery of Art, Talking Software Pre-ReadersThe Balancing Act, Plato",
    ia_identifier: "Educatio1986_2",
    ia_date: "1986-09-26T00:00:00.000Z",
    ia_proddate: "1986-09-26T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Electronic Publishing",
    ia_description: "The buzz word in the early 1990s was multimedia. It was the era of the CD-ROM. This program looks at early attempts at electronic publishing for the computer. Demonstrations include \"A Hard Day's Night\" and the Expanded Book Tool Kit from The Voyager Company, Arthur's Teacher Trouble from Broderbund, The Whitehorse Child, Impressionism and its Sources, and Trouble in Mind from EBook, Cinemania, Mayo Clinic, Rick Smolan's From Alice to Ocean, and The Well. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "Electron",
    ia_subject: "cd-rom;multimedia;interactive"
},
{
    ia_title: "Digital Photography",
    ia_description: "Digital cameras were just hitting the market in 1993 and this program looked at the early stages of the electronic photography revolution. Products demonstrated include the Kodak Photo CD Player, the DaVinci Digital Camera/Copier, the Kodak DCS200 digital camera, the SuperMac printer, Logitech's FotoMan, the OFOTO 2.0 scanner, the Phoenix portable digital imaging system for newspapers, the MacSat and WeatherFAX systems for enhancing digital space photos, and Adobe PhotoShop. Originally broadcast in February 1993.",
    ia_identifier: "Electron10.2",
    ia_proddate: "1993-10-29T00:00:00.000Z",
    ia_subject: "Adobe; Kodak; Logitech;images;photography; photo finishing"
},
{
    ia_title: "Electronic Mail",
    ia_description: "A look at new email systems, comparative advantages and pitfalls and new email accessories and tools.\nGuests: Stuart Davidson, MCI; Jeff Anderholm, Lotus; Lloyd Kreuzer, Kreuzer Software; Carl Berney, Speech Plus; Charles Foskett, Natural Microsystems; Jan Lewis, Palo Alto Research Group\nProducts/Demos: Lotus Express, MCI Mail, The Source, Call for Text, Watson",
    ia_identifier: "Electron1986",
    ia_date: "1986-12-20T00:00:00.000Z",
    ia_proddate: "1986-12-20T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "ETRE Madrid 1995 Part 2",
    ia_description: "Coverage of the annual European Technology Roundtable Exhibition conference held in Madrid. Featured guests include Microsoft's Bill Gates, Esther Dyson, Netscape's Jim Clark, and David Kirkpatrick of Fortune magazine. Originally broadcast in 1995.Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "EtrePt2"
},
{
    ia_title: "European Technology Roundtable and Exhibition, 2001, Part 1",
    ia_description: "The big topic of discussion was the future of the economy and lots of optimism comes from the tech industry experts about opportunities for growth now that the economy has hit bottom.",
    ia_identifier: "European2001",
    ia_date: "2001-11-27T00:00:00.000Z",
    ia_proddate: "2001-11-27T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Conferences: Etre;Virus;Jounalism"
},
{
    ia_title: "European Technology Roundtable and Exhibition, 2001, Part 2",
    ia_description: "In part two of our coverage of the European Technology Roundtable and Exhibition in Rome, we start off with the telecom meltdown and why you still can't get low-cost broadband connections to the Internet.",
    ia_identifier: "European2001_2",
    ia_date: "2001-12-04T00:00:00.000Z",
    ia_proddate: "2001-12-04T00:00:00.000Z",
    ia_subject: "Broadband;Episode year: 2001;Government;Conferences: ETRE;Trademark Issues"
},
{
    ia_title: "European Technology Roundtable and Exhibition Rome, 2001 - Part 3",
    ia_description: "\"I told you so.\" In 2001, Silicon Valley experts doubted that Carly Fiorina's plan for HP to acquire Compaq would work. See their comments in this special program covering the European Technology Roundtable and Exhibition in Rome. Copyright 2002 Stewart Cheifet Productions.",
    ia_identifier: "European2002",
    ia_year: 2002,
    episodeNumber: 1926,
    ia_date: "2002-03-12T00:00:00.000Z",
    ia_subject: "hp; hewlett packard; compaq;Microsoft; Dell; carly fiorina;Bill Gates; Michael Dell;Conferences: ETRE;Wireless"
},
{
    ia_title: "European Technology Roundtable and Exhibition, 2001, Part 4",
    ia_description: "In our final show on the European Technology Roundtable and Exhibition in Rome we wrap up what leaders in the technology field envision for the future.",
    ia_identifier: "European2002_2",
    episodeNumber: 1917,
    ia_date: "2002-01-08T00:00:00.000Z",
    ia_proddate: "2002-01-08T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Companies: Microsoft;People: Bill Gates;Conferences: ETRE"
},
{
    ia_title: "Comdex 1995",
    ia_description: "Highlights of the 1995 Fall Comdex show shot on location in Las Vegas. Includes excerpts from the keynote speech by Bill Gates.",
    ia_year: 1995,
    ia_identifier: "FallComd",
    episodeNumber: 1312,
    ia_subject: "comdex;trade show;las vegas"
},
{
    ia_title: "Faster Net Access",
    ia_description: "Most home PC users use their telephone line to connect to the Internet. But there are other options. We'll look at cable, DSL, and satellite connections as well as the latest high-speed telephone modems to help you find a faster way to get online.",
    ia_identifier: "FasterNe2000",
    ia_date: "2000-01-25T00:00:00.000Z",
    ia_proddate: "2000-01-25T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Broadband"
},
{
    ia_title: "Fifth Generation Computers",
    ia_description: "Japan's fifth generation computer project and a look at the next phase of PC platforms. Shot in Japan.\nGuests: Gary Kildall, Digital Research; Admiral Bobby Ray Inman, MCC; Ed Feigenbaum, Author; Dr. Hideo Aiso, Keio University; Dr. Yukio Mizuno, NEC; Dr. Hiroshi Kashiwagi, NSP; Dr. Kuzuhiro Fuchi, ICOT; Dr. Tohru Moto-Aka, Univ Tokyo\nProducts/Demos: KIP System, Pattern Matching, Inference Machine, Prologue",
    ia_identifier: "FifthGen1984",
    ia_date: "1984-10-12T00:00:00.000Z",
    ia_proddate: "1984-10-12T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Finding a Job Online",
    ia_description: "We're going to explore some of the tools online to help you find that perfect job. Meet of the people involved and some of these tools that help you (and the people looking for you) make that perfect match.",
    ia_identifier: "Findinga2001",
    ia_date: "2001-03-27T00:00:00.000Z",
    ia_proddate: "2001-03-27T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Companies: Cisco;Companies: Hotjobs.com;Companies: Monster"
},
{
    ia_title: "Fixing Your PC",
    ia_description: "A user's going to doing basic repairs on your computer hardware and software. Featured guests include Ron White, author of How Computers Work, Peter Coffee, author of Peter Coffee Teaches PCs, John Ruley of Windows Magazine, and Owen Linderholm of Windows Magazine. Also includes a review of useful online troubleshooting sites. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "FixingYo99",
    ia_date: "1999-07-27T00:00:00.000Z",
    ia_proddate: "1999-07-27T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Foreign Language Software",
    ia_description: "Markets are going global but schools are cutting back on foreign language instruction. The answer - foreign language software. This program reviews several new programs that teach or translate a foreign language. Incuded are Learn to Speak Spanish 4.0 from Hyperglot, German Assistant for Windows from Microtac, Power Japanese from Bayware, Video Linguist: Learn from French TV, Language Explorer from Nordic Software, and the Chinese Language Kit from Apple. Originally broadcast in 1994.\nCopyright 1994 Stewart Cheifet Productions",
    ia_broadcastyear: 1994,
    ia_identifier: "ForeignL",
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z"
},
{
    ia_title: "Computer Games",
    ia_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles. Originally broadcast in October 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_identifier: "Gaming1999",
    ia_year: 1999,
    ia_date: "1999-10-12T00:00:00.000Z",
    ia_proddate: "1999-10-12T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Companies: Sega;Companies: Sony;Companies: Nintendo;Gaming"
},
{
    ia_title: "Gary Kildall Special",
    ia_description: "A profile on computer pioneer Gary Kildall and the important contributions he made to the PC industry including the true story on how IBM ended up using MS-DOS rather than CP/M. Kildall developed CP/M, the first personal computer operating system. He was also a co-host on the early Computer Chronicles series. Includes comments by Gordon Eubanks, Symantec; Tom Rolander, DRI; Tim Bajarin, Creative Strategies; Lee Lorenzen, DRI; Jacqui Morby, TA Associates; Alan Cooper, CP/M applications developer. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "GaryKild",
    ia_subject: "Episode year: 2001;Episode year: 1995;Operating systems: CP/M;CD-ROM;Companies: IBM;Companies: Apple"
},
{
    ia_title: "European Technology Roundtable Exhibition",
    ia_description: "A visit to the first ever European Technology Roundtable Exhibition, the ETRE conference, held in Vienna. The conference featured top technology industry executives from around the world including Scott McNealy of Sun, Lee Reiswig of IBM, Philippe Kahn of Borland, Ed Zander of SunSoft, analyst Esther Dyson, Gerry Sanders of AMD, Jerry Rogers of Cyrix, Steve Ballmer of Microsoft, Eric Benhamou of 3Com, Enrico Pesatori of Zenith, and Jim Manzi of Lotus. Originally broadcast in 1992.Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "GlobalSo"
},
{
    ia_title: "Guide to Macros",
    ia_description: "A user's guide to macros - automated sequences of commands for spreadsheets, word processors, and database programs.\nGuests: Lynne Hughes, McDonell Douglas; Alan Simpson, Author; Michael Lunsford, MacroPac; Daniel Gasteiger, Lotus Publishing; Gary Kildall, Digital Research\nProducts/Demos: dBase III, VP Planner, Lotus 123, Symphony",
    ia_identifier: "GuidetoM1986",
    ia_date: "1986-11-11T00:00:00.000Z",
    ia_proddate: "1986-11-11T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Hard Disk Storage",
    ia_description: "As applications and files get larger, users need a hard disk drive, a Bernoulli box or a tape streamer. \nGuests: Robert Brown, Landmark Software; Joel Kamerman, Kamerman Labs; Alan Ebright, Priam; Gary Kildall, Digital Research\nProducts/Demos: Iomega Bernoulli Box, Hard Card, Hyperdrive",
    ia_identifier: "HardDisk1985",
    ia_date: "1985-12-17T00:00:00.000Z",
    ia_proddate: "1985-12-17T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Hi Tech Hawaii - Part 3",
    ia_description: "We'll take you to Kauai to see where the Defense Department is testing the Ballistic Missile Defense Program, formerly known as SDI or STAR WARS. We'll visit one of the world's most powerful supercomputer centers on the island of Maui, and we'll go to the big island to find out why some high tech workers have given up on the mainland, and are now telecommuting from Hawaii.",
    ia_identifier: "HiTechHa2001_2",
    ia_date: "2001-02-13T00:00:00.000Z",
    ia_proddate: "2001-02-13T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Military"
},
{
    ia_title: "Hi Tech Hawaii - Part 4",
    ia_description: "The final episode in this four-part series on new hi-tech development in Hawaii. Stories covered include web startup DigitalIsland.com; video conferencing to treat South Pacific Island patients at Tripler Army Medical Center; Best Industries, developers of a new, non-polluting septic waste management technology; SquareUSA, a leading developer of interactive entertainment and producers of Final Fantasy; a big island floral company that uses the Internet to sell flowers around the world; and a visit to an elementary school where the focus is on training the tech workers of tomorrow. Also includes interviews with Mayor of Maui and the Governor of Hawaii. Shot on location in Hawaii on the islands of Maui, the Big Island, Kauai, and Oahu. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "HiTechHa2001_3",
    ia_date: "2001-02-20T00:00:00.000Z",
    ia_subject: "hawaii; tripler; waste management;maui;hilo; kauai"
},
{
    ia_title: "Hi Tech Hawaii - Part 2",
    ia_description: "Part two of this four-part series on high technology work in Hawaii. This episode covers Trex Enterprises, a Kauai based company doing work in digital optics; AdTech, a Honoluolu based company which is one of the leading manufacturers of network test equipment; the City of Kapolei on Oahu, the main transpacific switching point for telecommunications between Asia and the United States; the Gemini Observatory, one of the world's leading research centers for deep space exploration; the CMR Infrasound Laboratory which monitors the atmosphere to detect nuclear explosions; and the Hawaii Volcano Observatory, one of the world's leading research centers on volcanos and earthquakes. Also a look at several tech workers who have relocated to Hawaii to combine a hi-tech career with an island lifestyle. Shot on location in Hawaii. Originally broadcast in 2001.",
    ia_broadcastyear: 2001,
    ia_identifier: "HiTechHa2002",
    ia_year: 2002,
    ia_date: "2002-02-06T00:00:00.000Z",
    ia_subject: "trex; optics; adtech; maui; kauai;kapolei; hawaii; honolulu; oahu;;gemini; observatory; volcano;"
},
{
    ia_title: "Consumer Buying Guide 1995",
    ia_description: "The annual holiday season review of cool high tech gadgets and computer products. Featured guests include CMP's Paul Schindler and Tim Bajarin of Creative Strategies. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "HolidayB"
},
{
    ia_title: "Home Networking",
    ia_description: "As you buy faster PCs, you may be keeping your old PC for someone else in the family. But rather than buy a separate modem or printer, you can easily network your home PCs to share these peripherals. We'll look at home network options including devices that let you share your peripherals just by using your existing electrical outlets.",
    ia_identifier: "HomeNetw2001",
    ia_date: "2001-01-16T00:00:00.000Z",
    ia_proddate: "2001-01-16T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Episode year: 2000;Companies: Apple;Networking"
},
{
    ia_title: "Home Design Software",
    ia_description: "CAD software eventually migrated down to home users with tools that let you design the inside and outside of your house. This program demonstrates several examples including LandDesigner from Sierra Home, Better Homes & Gardens Online, Picture This Home from AutoDesk, 3D Home Architect Deluxe from Broderbund, and GraphiSoft's ArchiCAD. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Homedesi98",
    ia_date: "1998-09-22T00:00:00.000Z",
    ia_subject: "home design; CAD; architect;land; home; house;gardes; broderbund; autodesk"
},
{
    ia_title: "IBM Clones",
    ia_description: "A comparative look at the new breed of IBM look-alikes.\nGuests: David Bunnell, PC World Magazine; Ed Juge, Tandy; David Grais, Attorney; Woody Liswood, Consultant; Gary Kildall, DRI\nProducts/Demos: Radio Shack Tandy 1000, IBM PC, Ericsson PC, Compaq PC.\nCopyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "IBMClone1985",
    ia_year: 1985,
    ia_date: "1985-01-28T00:00:00.000Z",
    ia_proddate: "1985-01-28T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "IBM Personal System 2",
    ia_description: "A first look at the new IBM PS2 computer and its design and interface innovations.\nGuests: Tony Harris, Digital Research; David Bunnell, PCW Communications; John Dvorak, PC Magazine; Ron Kaufmann, RX Computers; George Morrow, Nestar; Jan Lewis, Palo Alto Research Group; Gary Kildall, Digital Research\nProducts/Demos: DOS 3.3, Gem Desktop Publisher, IBM PS2 Model 50, GEM Draw Plus, FLEX-OS.\nCopyright 1987 Stewart Cheifet Productions.",
    ia_identifier: "IBMPerso1987",
    ia_year: 1987,
    ia_date: "1987-06-09T00:00:00.000Z",
    ia_proddate: "1987-06-09T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Information Overload",
    ia_description: "A look at different ways to manage the glut of information showing up on computers and other storage devices. Demonstrations include DayTimer Organizer 2.0, Em@iler, Personal Journal, and DataTimes Summarizer. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "Informat96",
    ia_date: "1996-01-04T00:00:00.000Z",
    ia_subject: "daytimer; em@iler;guy kawasaki;fog city software; dow jones"
},
{
    ia_title: "Integrated Software",
    ia_description: "The new breed of integrated software suites and the visual interface.\nGuests: Gary Kildall, DRI; John Couch, Apple; Bill Coleman, VisiOn\nProducts/Demos: Apple LisaVisiOn, DESQ",
    ia_identifier: "Integrat1984",
    ia_date: "1984-02-19T00:00:00.000Z",
    ia_proddate: "1984-02-19T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Intel 386 - The Fast Lane",
    ia_description: "A review of the new Intel 386 chip and the new super-fast computers and applications that take advantage of its speed.\nGuests: Dana Krelle, Intel; Michael Swavely, Compaq; Robert Dilworth, Zenith; Neil Colvin, Phoenix Technologies; Jan Lewis, Palo Alto Research Group\nProducts/Demos: Compaq Deskpro 386, Intel 80386 Microprocessor, Zenith Z-386, VP/ix, UNIX 386. \nCopyright 1987 Stewart Cheifet Productions.",
    ia_identifier: "Intel3861987",
    ia_year: 1987,
    ia_date: "1987-01-03T00:00:00.000Z",
    ia_proddate: "1987-01-03T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Intelligent Buildings",
    ia_description: "A survey of the technology embedded in modern office buildings and private homes. Shot in Hong Kong.\nGuests: Dr. Po S. Chung, Chinese University HK; Martin Spurrier, HongKong Land Group; R. A. Guy, HS Property Management; Donald Birch, Cathay Pacific; P G H Greene, HongKong Bank; Eric Vincent, Cable & Wireless; Ronald Suen, Kowloon Hotel; William Phillips, Baring Securities; Alfred Ho, Government Info Services\nProducts/Demos:",
    ia_identifier: "Intellig1987",
    ia_date: "1987-01-23T00:00:00.000Z",
    ia_proddate: "1987-01-23T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Internet Video Telphony",
    ia_description: "After the Internet was around for a few years, people figured out that it was also a phone system and you could use your web connection to do voice and video communications. This program looks at several early examples including PowWow from Tribal Voice, White Pine's ClassPoint, Windows 95 video conferencing, Connectix Web Cam, ClearPhone, stefcam.com, C-U-SeeMe, camgirl.com, and QuickClip. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Internet99",
    ia_date: "1999-05-18T00:00:00.000Z",
    ia_subject: "voice over IP;video telephony;VOIP"
},
{
    ia_title: "Internet Telephony",
    ia_description: "Voice over IP is now a hot topic, but telephony over the Internet started to gain steam in the mid 1990s. This program looks at some early examples of VOIP technology. Demonstrations include Quarterdeck Web Phone, VDONet, Infospace, Timecast, NetSpeak, and OnLive Technologies. Guests include Rob Enderle of the GIGA Information Group, Naveen Jain of Infospace, Tony Zuccarino of VDONet, NetSpeak CEO John Staten, and Matt Hulett of Progressive Networks. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "Internet_2",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "voice over IP;VOIP;telephone; internet"
},
{
    ia_title: "Internet Showcase 1997",
    ia_description: "Highlights of Upside's Internet Showcase conference, shot on location at Laguna Niguel, California. A look at new internet sites, products, and businesses. Featured guests include Novell CEO Eric Schmidt (now chairman of Google), analyst Tim Bajarin, and David Coursey. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "Internet_4"
},
{
    ia_title: "Investment Software",
    ia_description: "The computer and the Internet provided powerful new tools for individual investors that started to level the playing field. This program looks at several investment applications including Value Screen Investment Survey, Prodigy Online Information Services, Windows on Wall Street 2.1, WealthBuilder, Plan Ahead Your Financial Future, Schwab's Street Smart, and MetaStock. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "Investme"
},
{
    ia_title: "Investment Software",
    ia_description: "A look at how investors are using computers to analyze and invest in the stock market.\nGuests: John Frierson, Investek; Charles Spear, Spear Securities; Richard Carlin, Telescan; Gary Kildall, Digital Research; George Morrow, Morrow Computing\nProducts/Demos: Wizards of Wall Street, The Equalizer, Lotus Signal, TelescanAnalyzer",
    ia_identifier: "Investme1986",
    ia_date: "1986-02-04T00:00:00.000Z",
    ia_proddate: "1986-02-04T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "JAVA Tools",
    ia_description: "The rise of the web created an opportunity for a programming language that was independent of the user platform. Java was the first major language to take advantage of that. This program looks at various versions of Java and Java apps including Instant Coffee, the Lotus Bean Machine, Novita Live Letter, and CUChat 1.0. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "JAVATool",
    ia_subject: "java;sun microsystems;lotus"
},
{
    ia_title: "Japanese PC's",
    ia_description: "A review of where major Japanese technology companies are in the PC hardware and software markets. Shot in Japan.\nGuests: Katsuro Miyakoda, Microcomputer Magazine; Yukio Mizuno, NEC; Kay Nishi, ASCII; Hitoshi Tanaka, Ampere; Susumu Shinbori, Sony; Michael Miller, Popular Computing; Christopher Mead, High Tech Review.\nProducts/Demos:    MSX, Fujitsu Portable, Sony CD-ROM, CIC Handwriter, Ampere WS-1, Epson Wrist Computer. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Japanese1985",
    ia_year: 1985,
    ia_date: "1985-04-01T00:00:00.000Z",
    ia_proddate: "1985-04-01T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Computers and Kids",
    ia_description: "A look at how children use computers at home and at school. Products demonstrated include The Amazing Writing Machine from Broderbund, How Would You Survive, from Grolier Electronic Publishing, and 3D Atlas from Creative Wonders. Also reviews of several kid oriented web sites such as kidlink.org, nbn.com/youcan, batnet.com, and Kids Only on AOL (search word Kids). Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "Komputer",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "children; kids;youth; broderbund; kidlink;aol; easyphoto; webpals"
},
{
    ia_title: "Computer Kids",
    ia_description: "A look at young people and how they are using computers for pleasure and for education.\nGuests: Aaron Arakawa, Nueva Learning Center; Ben Wu, Miller Jr High; Laura Risk, Aptos Middle School; Robin Lee, Leyva Jr High; Arin Epstein, Foothill Middle School; Clifton Dalgard, Leyva Jr High\nProducts/Demos: Voting Program, The World of the IIe, LogoWriter, Integer Base, Teachtype.\nOriginally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "Komputer1987",
    ia_year: 1987,
    ia_date: "1987-03-10T00:00:00.000Z",
    ia_subject: "1987; kids and computers;"
},
{
    ia_title: "Lasers and Computers",
    ia_description: "Laser disks and optical storage devices are changing the way we can use computers.\nGuests: Jeff Tully, Pioneer Video; Vladimir Langer, Sony; Rick Dyer, RDI Video Systems; Jay Eagle, Proton Corp.; Gary Kildall, DRI\nProducts/Demos: Pioneer Laser Disc Player, Astron Belt, Halcyon Home Entertainment Sys, Vidlink.\nCopyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Lasersan1985",
    ia_year: 1985,
    ia_date: "1985-01-14T00:00:00.000Z",
    ia_proddate: "1985-01-14T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Memory Problems",
    ia_description: "If you were a DOS user back in the early 1990's, you had to deal with \"insufficient memory\" issues. Over and over again. This program looks at solutions for expanding computer memory. Demonstrations include how to install SIMMs, MemMaker, QAPlus for Windows, RAM Doubler 1.51, Quarterdeck's QEMM 7.5, Multimedia Cloaking Utility from Helix Software, and Netroom 3.0. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "LosingMe",
    ia_subject: "memory;RAM;random access memory"
},
{
    ia_title: "Low End Computers",
    ia_description: "A consumer's guide to the most popular low-cost home computers.\nGuests: Jack Tramiel, Atari; Leonard Tramiel, Atari; Frank Leonardi, Commodore; Gary Kildall, Digital Research\nProducts/Demos: Commodore Laptop, Commodore 128, Commodore Amiga, Atari ST 512.\nCopyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "LowEndCo1985",
    ia_year: 1985,
    ia_date: "1985-04-08T00:00:00.000Z",
    ia_proddate: "1985-04-08T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "MIDI Music",
    ia_description: "Computers and music, MIDI machines and interfaces, and music composition software.\nGuests: Chris French, Music Software; Bob Moore, Hybrid Arts; David Schwartz, Compusonics; Chris Potter, Mimetics; Curtis Sasaki, Apple; Gary Kildall, Digital Research; Gary Leuenberger, Midi Revolution\nProducts/Demos: Casio SK-1 Synthesizer, Atari ST, Activision's Music Studio, ADAP Sampler, DSP-1000, Apple II GS, Ensoniq Sound Chip, Soundscape, Commodore AmigaEZ Track, Kidnotes.\nCopyright 1986 Stewart Cheifet Productions",
    ia_identifier: "MIDIMusi1986",
    ia_year: 1986,
    ia_date: "1986-01-01T00:00:00.000Z",
    ia_proddate: "1986-10-03T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "MP3 Secrets",
    ia_description: "We will show you the basics of how to find MP3's on the net, portable mp3 players, and how to burn your own music CDs. Episode #1904, First broadcast: 10/9/2001. Copyright 2001 Stewart Cheifet Productions.",
    ia_identifier: "MP3Secre2001",
    ia_year: 2001,
    ia_date: "2001-10-09T00:00:00.000Z",
    ia_proddate: "2001-10-09T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Episode year: 2000;Music;Companies: Compaq"
},
{
    ia_title: "Mac Clones",
    ia_description: "There was a period in the mid nineties when Apple (without Steve Jobs) experimented with licensing the Mac OS to other computer manufacturers. That led to a rush of Mac clones. At the same time, Apple was introducing \"Copland\", its new OS, dubbed System 8. This program looks at several of the new Mac clones and reviews System 8. Demonstrations include the Power 100 from Power Computing, the Genesis MP from Daystar Digital, the Radius System 100, the Power PC PowerBook and the new Macintosh System 8. Originally broadcast in 1995. Copyright Stewart Cheifet Productions 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "MacClone",
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "apple; macintosh;mac;radius; power; copland;clones; system 8"
},
{
    ia_title: "Mac Clones and New O/S",
    ia_description: "In the post Steve Jobs era, Apple started licensing other companies to produce Macintosh clones. And there was a new Mac operating system 8.0, code named Copland. This program looks at the new Mac clones and the new OS. Products demonstrated include the System 100 from Radius, the Genesis MP from DayStar Digital, and the Power 100 from Power Computing. Applications demonstrated include Adobe Photoshop and Personal Oracle 7. Also featured are the new Apple Macintosh 7100 and 8100 models. Originally broadcast in 1995.\nCopyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "MacClone95",
    ia_year: 1995,
    ia_date: "1995-12-15T00:00:00.000Z",
    ia_proddate: "1995-12-15T00:00:00.000Z",
    ia_subject: "apple; operating system;macintosh;power pc"
},
{
    ia_title: "MacWorld Expo Boston 1996",
    ia_description: "On location coverage of the annual MacWorld Expo in Boston. A look at many new Mac products, peripherals and applications. Features highlights from the keynote speech of Apple CEO Gil Amelio. Analysis by Tim Bajarin of Creative Strategies. Other guests include Jean-Louis Gassee and Bob Levitus. Originally broadcast in 1996.       Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "MacWorld",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "macintosh;apple;amelio"
},
{
    ia_title: "MacWorld Boston 1994",
    ia_description: "On location coverage of the annual Boston MacWorld conference. Includes the launch of the Mac System 7.5 OS. Demonstrations include WordPerfect, ClarisWorks, Loga Vista, Newton, Radius, Wacom, Visioneer, and Opcode. Originally broadcast in September 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_identifier: "MacWorld_2",
    ia_broadcastyear: 1994,
    ia_subject: "apple; mac; macintosh;macworld; boston;trade show; conference"
},
{
    ia_title: "Mac Update",
    ia_description: "Steve Jobs returns to Apple and the turnaround is underway with the launch of the sleek iMac. A look at what's new at Apple. Included are a review of the new iMac, the new Macintosh Power G3, the new Mac OS 8.1, and a powerful graphics and animation demonstration using ElectricImage software. Featured guests include Steve Jobs, Ellen Hancock, Tim Draper, and editors from MacAddict magazine. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "Macupdat98",
    ia_year: 1998,
    ia_date: "1998-01-01T00:00:00.000Z",
    ia_proddate: "1998-12-29T00:00:00.000Z",
    ia_subject: "Episode year: 1998"
},
{
    ia_title: "Mainframes to Minis to Micros",
    ia_description: "This was the very first episode of the Computer Chronicles, originally broadcast in September 1983, covering the history and ancestry of today's PC.\nGuests: Gary Kildall, DRI; Gordon Bell, DEC; Herb Lechner, SRI; Cyril Yansouni, HP\nProducts/Demos: HP 150 PC, Computer Museum, TX-1 Computer.\nCopyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "MainFram1984",
    ia_year: 1984,
    ia_date: "1984-02-12T00:00:00.000Z",
    ia_proddate: "1984-02-12T00:00:00.000Z",
    ia_subject: "Episode year: 1983"
},
{
    ia_title: "Microchip Technology",
    ia_description: "History and development of the microprocessor.\nGuests: Herb Lechner, SRI; Phil Downing, AMD\nProducts/Demos: AMD 2901 (4 bit), AMD 29116 (16 bit)",
    ia_identifier: "Microchi1984",
    ia_date: "1984-04-23T00:00:00.000Z",
    ia_proddate: "1984-04-23T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Mobile Computing",
    ia_description: "Industry prognosticators predicted that 1995 would be \"the year of the portable\". And it was, as mobile computing became mainstream. This program looks at several mobile computing solutions, including the Morrow Pivot II, the Apple PowerBook 540C, Toshiba's T2150 CDT, IBM's Butterfly subnotebook, Apple's Newton MessagePad, the Sharp Zaurus, Sony's Magic Link, the Psion 3A, the Pentax PocketJet printer, Xircom's CreditCard Ethernet, Zenith's CD-ROM Z Player, Dell's Latitude, Bell South's Simon, HP's Omnibook 600, and the X-Jack Modem from Megahertz. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "MobileCo",
    ia_subject: "portables; mobile;notebooks;PDAs"
},
{
    ia_title: "Modems & Bulletin Boards",
    ia_description: "From high-tech trysts to selling black-market software, computers users are talking.\nGuests: Ezra Shapiro, Byte Magazine; Rory O'Connor, InforWorld; Matthew McClure, The Well; Donald Ingrim, Alameda County DA; George Morrow, Morrow Computing\nProducts/Demos: CompuServe, Byte BBS, The Well.\nCopyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "ModemsBu1985",
    ia_year: 1985,
    ia_date: "1985-10-22T00:00:00.000Z",
    ia_proddate: "1985-10-22T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Multimedia",
    ia_description: "The advent of faster processors and digital storage drove the new field called Multimedia. Examples demonstrated in this program include The San Diego Zoo from Software Toolworks, Macromedia Action!, XPLORA 1: Peter Gabriel's Secret World, TuneLand from 7th Level, Microsoft's Cinemania, Small Blue Planet from Now What Software, Wrath of the Gods from Luminaria, a new portable CD-ROM player from Media Vision, Quicktime 2.0, Adobe Premiere, and VideoFusion. Guests include Bud Colligan, CEO of Macromedia, and Gina Smith, Editor in Chief of Electronic Entertainment magazine. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "Multimed_2"
},
{
    ia_title: "Music on the PC",
    ia_description: "Whether you wish to learn to play an instrument, compose a song, download MP3 files, or just find out fun facts about your favorite musician, there's software, hardware, and many Internet sites for you.Originally broadcast in 2000. Copyright Stewart Cheifet Productions 2000.",
    ia_broadcastyear: 2000,
    ia_identifier: "Musicont2000",
    ia_year: 2000,
    ia_date: "2000-02-01T00:00:00.000Z",
    ia_proddate: "2000-02-01T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Music"
},
{
    ia_title: "Creating Your Own Website",
    ia_description: "In the late 1990's everyone was creating their own web site. Some were terrible, some were great. This program looked at tools and resources to help individuals build great personal web sites. Demonstrations include Project Cool, Adobe Pagemill, Emblaze Audio, Intel Quick Web, and Yahoo. Also covered are special techniques for building web sites that are friendly to disabled users. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "MyWebsit98",
    ia_date: "1998-08-04T00:00:00.000Z",
    ia_subject: "web site;internet;home page"
},
{
    ia_title: "Networking",
    ia_description: "Connecting computers, peripherals, broadband and baseband.\nGuests: Gary Kildall, DRI; Michael Pliner, Sytek; Charlies Bass, Ungermann-Bass; Phil Edholm, Sytek\nProducts/Demos: Centralized Intelligence, Distributed Intelligence, Local Area Network",
    ia_identifier: "Networki1984",
    ia_date: "1984-04-16T00:00:00.000Z",
    ia_proddate: "1984-04-16T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "New Generation Spreadsheets",
    ia_description: "It started out with Visicalc and Lotus 1-2-3, but the world of spreadsheet software changed as new and more powerful applications were introduced. This program looks at several examples including Improv for Windows, CA-Compete, Excel 4.0, Quattro pro for Windows, and Braincel. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "NewAgeSp",
    ia_subject: "spreadsheets;excel;quattro"
},
{
    ia_title: "The New Macs",
    ia_description: "Almost ten years after the original Mac was introduced, Apple came out with several new models including color Macs. This program looks at several new Mac products including the Color Mac Classic, the Macintosh LC III, the PowerBook Duo 230, the Centris 650, and the Quadra 800. Special guests include Apple CEO John Sculley and analyst David Coursey. Also features coverage of MacWorld Tokyo. Originally broadcast in 1993. Copyright Stewart Cheifet Productions 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "NewMacs",
    ia_subject: "apple;macintosh;john sculley"
},
{
    ia_title: "Notebook Computers 1992",
    ia_description: "A review of the state of the art in notebook computers. Featured products include the AST Premium Exec 386SX/25, the NCR Safari, IBM's ThinkPad 700C, Compaq's Contura 3/25C, and the GRiD Convertible. Also coverage of new notebook introductions at fall Comdex. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "Notebook_2",
    ia_subject: "portables;notebooks;laptops"
},
{
    ia_title: "OS/2 Warp",
    ia_description: "In the mid 1990's, it wasn't yet an all Windows world. A battle was on between Microsoft's Windows and IBM's OS/2. This program compared the two operating systems and various add-ons for Windows and OS/2. Products demonstrated include Windows 95, OS/2 Warp, Voice Pilot for OS/2, and Colorworks for OS/2. Guests include IBM's David Barnes and syndicated columnist Dan Gillmor. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "OS2Warp",
    ia_subject: "IBM; Warp;OS/2;operating systems"
},
{
    ia_title: "OS & Browser Updates",
    ia_description: "In this week's episode of Computer Chronicles, we show you the features in Windows XP, both Home and Professional, and we'll explore whether it is worth the money to upgrade. Plus we'll show you the latest version of Internet Explorer and the Macintosh OS.\nCopyright 2002 Stewart Cheifet Productions",
    ia_identifier: "OSBrowse2002",
    ia_year: 2002,
    ia_date: "2002-02-05T00:00:00.000Z",
    ia_proddate: "2002-02-05T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Episode year: 2001;Operating systems: Windows;Operating systems: Macintosh OSX;Browsers: Internet Explorer;Games: XBOX"
},
{
    ia_title: "Computers and the Olympics - Part 1",
    ia_description: "In this week's episode, Computer Chronicles goes behind the scenes in Salt Lake City to show the high-tech innovations that ran the 2002 Winter Olympic Games.",
    ia_identifier: "Olympics2002",
    ia_date: "2002-02-26T00:00:00.000Z",
    ia_proddate: "2002-02-26T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Networks;Sports"
},
{
    ia_title: "Computers and the Olympics - Part 2",
    ia_description: "In this second half of a special series, Computer Chronicles continues to reveal the high-tech innovations that were behind the gold winning technology performance at the 2002 Olympic Games in Salt Lake City.",
    ia_identifier: "Olympics2002_2",
    ia_date: "2002-03-05T00:00:00.000Z",
    ia_proddate: "2002-03-05T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Operating systems: Windows;Sports;Security;Apparel"
},
{
    ia_title: "On-Line Services - Part One",
    ia_description: "First of a two-part series on on-line services such as CompuServe, the Source and DowJones, featuring Steve Case, at the time VP of Marketing at QuantumLink, and eventual head of AOL.\nGuests: Clay Cocalis, Dow Jones; Nancy Tulley, Delphi; Jack O'Grady, Intelmatique; Steve Case, QuantumLink; Gary Kildall, Digital Research\nProducts/Demos: CompuServe, Commodore Network, People Connection, Free Text Search, Computer Express, Minitel. Copyright 1987 Stewart Cheifet Productions.",
    ia_identifier: "On-LineD1987",
    ia_year: 1987,
    ia_date: "1987-01-09T00:00:00.000Z",
    ia_subject: "Steve Case; AOL;online services;ISP"
},
{
    ia_title: "On-Line Databases #2",
    ia_description: "Second part of a series on information retrieval looking at specialized services such as Bix, Dialog, QuantumLink and NewsNet.\nGuests: Dick Kollin, Telebase Systems; Doug Webster, BYTE; Roger Summit, Dialog Info Services; Connie Tomal, Mead Data Central; George Morrow, Morrow Computing\nProducts/Demos: Lotus One Source, BIX, Lexis Nexis, Information on Demand, Dialog, EasyNet",
    ia_identifier: "On-LineD1987_2",
    ia_date: "1987-01-16T00:00:00.000Z",
    ia_proddate: "1987-01-16T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "On Line Shopping",
    ia_description: "With the internet growing by leaps and bounds, online shopping became a hot topic in the mid 1990's. This program looked at several new online shopping efforts including onsale.com, cybercash.com, digicash.com, verisign.com, firelfy.com, amazon.com, cybergold.com, and netradio.com. Featured guests include Jerry Kaplan, Magdalena Yesil, and Robert Griggs. \nOriginally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "OnLineSh",
    ia_subject: "ecommerce;shopping;online"
},
{
    ia_title: "Online Gaming",
    ia_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles. [Episode #1905, First broadcast: 10/16/2001]              \nCopyright 2001 Stewart Cheifet Productions.",
    ia_identifier: "OnlineGa01.0",
    ia_year: 2001,
    ia_date: "2001-01-02T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Gaming;Companies: Sega"
},
{
    ia_title: "Online Investing",
    ia_description: "Everybody seems to be trading stocks and bonds online these days. We'll show you how you make a trade, how to integrate your investments into your personal finance software and some websites that can help you make wise investment choices.",
    ia_identifier: "OnlineIn2000",
    ia_date: "2000-03-21T00:00:00.000Z",
    ia_proddate: "2000-03-21T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Companies: Microsoft;Companies: Yahoo"
},
{
    ia_title: "Online Tips",
    ia_description: "In the early days of the Internet, sites were slow and it was hard to find what you were looking for. This program offered some advice on how to have a better online experience. Demonstrations included Cyber Patrol, Web Trader, Netiquette, Lycos, HTML Guide, and the first version of Sun's Java. Guests include Sun Microsystems chief scientist John Gage. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "OnlineTi",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "cyber;java;lycos"
},
{
    ia_title: "Online Tips",
    ia_description: "Enter a description here",
    ia_identifier: "OnlineTi96",
    ia_date: "1996-07-18T00:00:00.000Z",
    ia_subject: "Episode year: 1996"
},
{
    ia_title: "Online Travel Tips",
    ia_description: "Online travel is the most successful e-commerce product on the Internet and Computer Chronicles shows you how to find the best deals when purchasing this hot travel commodity.",
    ia_identifier: "OnlineTr2002",
    ia_date: "2002-03-19T00:00:00.000Z",
    ia_proddate: "2002-03-19T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Online Travel;e-commerce;Music"
},
{
    ia_title: "Online Universities",
    ia_description: "More and more people are turning to the Internet to help further their education. We'll be bringing you highlights from some of these great online educational websites and meet some of the people involved.",
    ia_identifier: "OnlineUn2001",
    ia_date: "2001-05-01T00:00:00.000Z",
    ia_proddate: "2001-05-01T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Society: Education"
},
{
    ia_title: "Operating Systems",
    ia_description: "A review of competing operating systems and their affect on software development.\nGuests: Gary Kildall, SRI; Tony Fanning, Hewlett Packard; Jean Yates, Yates Ventures; Bruce Tognizinni, Apple; Herb Lechner, SRI\nProducts/Demos: CP/MUNIXXenix, MS/DOS, Apple IIe & AppleTalk. Originally broadcast in March 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "Operatin1984",
    ia_year: 1984,
    ia_date: "1984-03-12T00:00:00.000Z",
    ia_proddate: "1984-03-12T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Optical Storage Devices",
    ia_description: "A look at the newest mass storage devices including the compact disc ROM.\nGuests: Tim Oren, Activenture; Fred Lloyd, Information Storage; Bob Kalthoff, Access; Ed Schmid, DEC; Dave Davies, 3MGary Kildall, Digital Research; George Morrow, Morrow Computing\nProducts/Demos: Activenture Knowledge Retrieval System, Information Storage WO Drive, Encyclopedia on a Disk, ISI Worm Disk, Digital Equipment CD-ROM Drive",
    ia_identifier: "OpticalS1985",
    ia_date: "1985-11-19T00:00:00.000Z",
    ia_proddate: "1985-11-19T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "PC Expo 1994",
    ia_description: "On location coverage of the annual PC Expo trade show in New York. Featured guests include Stewart Alsop, Larry Magid, Tim Bajarin, and Phillipe Kahn. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "PCExpo",
    ia_subject: "pc expo;trade show;new york"
},
{
    ia_title: "PC Sports",
    ia_description: "Computers enable couch potatoes to get the feeling of competitive sports and help real athletes improve their skills. This program looks at several sports applications including Picture Perfect Golf, ESPN Baseball Tonight, UltraCoach for Windows, Mountain Biking, Winning Hoops with Coack K, and Touch 'n' Go. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "PCSports",
    ia_subject: "sports;golf;baseball"
},
{
    ia_title: "PC Trouble Shooting",
    ia_description: "Tricks and techniques for fixing your own PC. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "PCTroubl"
},
{
    ia_title: "PC Video",
    ia_description: "The digital video revolution started to take hold in the mid nineties. This program looks at early examples of desktop video products. Demonstrations include QuickTime VR, Sigma Designs MPEG video, Video Director, Avid Video Shop, Video Machine Lite, Radius Edit, Video Vision, SGI's Set Top Box, CyberLab7, and QuickTime Conferencing. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "PCVideo",
    ia_subject: "Gold Disk; DV Magazine;Avid; Fast Electronic;Silicon Graphics"
},
{
    ia_title: "Parallel Processing",
    ia_description: "Are there limits on the speed of computers and their CPUs? A review of new processor architectures to increase computing speed.\nGuests: Dr. Howard Resnikoff, MIT; Eugene Brooks, Lawrence Livermore; David Rodgers, Sequent; Dr. H.T. Kung, Carnegie Mellon Univ; Craig Mundie, Alliant; Jeff Canin, Hambrecht & Quist; Gary Kildall, Digital Research; Peter Appleton-Jones, ELXSI\nProducts/Demos:",
    ia_identifier: "Parallel1986",
    ia_date: "1986-03-11T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Computing for Parents",
    ia_description: "For parents, computers are a blessing and a threat. They're great for learning and entertainment but potentially a gateway to bad stuff. This program looks at a variety of resources for parents including parentsplus.com, thecybermom.com, Encarta, American Greeting Crafts, Clue Finders from The Learning Company, abcparenting.com, Math Heads, French Now!, and Maurice Ashley Teaches Chess. Guests include Roberta Furger, author of \"Does Jane Compute? Preserving Our Daughter's Place in the Cyber Revolution\" and Pam Dixon, author of \"Take Charge Computing for Parents & Teens\". Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Parentin99",
    ia_date: "1999-07-20T00:00:00.000Z",
    ia_subject: "children;parents;teens"
},
{
    ia_title: "Personal Finance Software",
    ia_description: "A review of tax return software, financial management software and investment programs.\nGuests: John Reese, Monogram; Kevin Randolph, Bank of America; Jay Levine, Price Waterhouse; James Howard, Howardsoft; Ellen Ramsey, IRS; Gary Kildall, DRI\nProducts/Demos: Dollars and Sense, BA Home Banking, HowardsoftTax Preparer",
    ia_identifier: "Personal1985",
    ia_date: "1985-03-04T00:00:00.000Z",
    ia_proddate: "1985-03-04T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Digital Photofinishing",
    ia_description: "As the popularity of digital cameras grew, photofinishing software followed. This program looks at several early examples of computer based photo processing. Demonstrations include Photoshop 2.5, Nikon's LS-10 CoolScan, PhotoFlash 2.0, Apple's QuickTake Camera, Paint Alchemy, Terrazzo, Picture Window 1.0, EverColor and ArtLink. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "Photofin",
    ia_subject: "digital photography;photoshop;photo finishing"
},
{
    ia_title: "Plug & Play",
    ia_description: "Adding peripherals used to be a nightmare with a PC, having to manually figure out all kinds of settings and switches. Windows 95 promised to end all that with Plug and Play, though many users called it Plug and Pray. This program looks at the early efforts to simplify adding peripherals. Covered are sound cards, SCSI controllers, video cards, mice, CDROM drives, and PCMCIA cards. Also covered is Plug and Tell, which helped you figure out what settings had to be changed, and Compaq's Hot Docking technology. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "PlugPlay",
    ia_subject: "plug; play;peripherals;add-ons"
},
{
    ia_title: "Portable Computers",
    ia_description: "A review of the latest laptop computers, new display screen technology and common applications..\nGuests: Bob Wade, Tany/Radio Shack; James Barlett, NEC; Andrew Czernek, Zenith Data Systems; Thomas Sherrard, Toshiba; Britt Blaser, Dynamac; Gary Kildall, Digital Research\nProducts/Demos: Workslate, Tandy Model 100 & 200, NEC Multispeed, Zenith Z-181, Toshiba T-1100 & T-3100, Grid Laptop, Mac Portable",
    ia_identifier: "Portable1987",
    ia_date: "1987-03-03T00:00:00.000Z",
    ia_proddate: "1987-03-03T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Power PC & PowerMac",
    ia_description: "Motorola's new PowerPC microprocessor launched a whole new generation of computers including the PowerMac. This program looks at the increased speed and functionality of computers using the new Motorola CPU. Demonstrations include various benchmark tests on the PowerMac, the PowerMac 7100 and the PowerMac 8100, applications such as Excel 5.0 for the Mac, and PhotoShop 3.0. Also a look at SoftWindows, a utility that lets you run Windows apps on a PowerMac. Includes a visit to Motorola's CPU design center and the implementation of a huge data center at the University of Texas using 750 new PowerMacs. Guests include Jim Gable and Stephen Dougherty of Apple, John Peck of Adobe Systems, and John Morse of Microsoft. Originally broadcast in 1994. \nCopyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "PowerPC10.1",
    ia_year: 1994,
    ia_date: "1994-10-13T00:00:00.000Z",
    ia_subject: "powerpc; powermac;apple; motorola;adobe; microsoft"
},
{
    ia_title: "Preventing Spam",
    ia_description: "In this episode of Computer Chronicles, we show you how to protect yourself against spam, your email's most notorious enemy. \nOriginally broadcast in 2002.\nCopyright 2002 Stewart Cheifet Productions",
    ia_broadcastyear: 2002,
    ia_identifier: "Preventi2002",
    ia_year: 2002,
    ia_date: "2002-03-26T00:00:00.000Z",
    ia_proddate: "2002-03-26T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Spam;Security;Virus;Wireless: Wireless Network"
},
{
    ia_title: "Printers",
    ia_description: "Printer technology from daisy wheel to dot matrix to laser.\nGuests: Herb Lechner, SRI; Steve Ray, Diablo; Paul Shapiro, Diablo; John Ebach, PARC; Doug Curry, Xerox; Tibor Fischally, Xerox\nProducts/Demos: Diablo Daisy Wheel Printer, Diablo Thermal Printer, Diablo Series C Ink Jet Printer, Xerox Color Laser Printer",
    ia_identifier: "Printers1984",
    ia_year: 1984,
    ia_date: "1984-05-14T00:00:00.000Z",
    ia_proddate: "1984-05-14T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Printers & Business Graphics",
    ia_description: "A survey of the new hardware and software visualization tools for business.\nGuests: Gary Kildall, Digital Research; John Dickinson, PC Magazine; Bob Lamvik, Okidata; Chuck Ulfers, Hewlett Packard; John Warnock, Adobe Systems\nProducts/Demos: IBM QuietWriter, Okimate 20 Color Thermal Transfer, Hewlett Packard LaserJet Plus, Apple LaserWriterOriginally broadcast in 1985. Copyright Stewart Cheifet Productions 1985.",
    ia_broadcastyear: 1985,
    ia_identifier: "Printers1985",
    ia_year: 1985,
    ia_date: "1985-09-24T00:00:00.000Z",
    ia_proddate: "1985-09-24T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Privacy Online",
    ia_description: "This week we're going to help you preserve your privacy in the wired world. We cover the topic of cookies and we look at ways to browse the Web anonymously.  We even look at proper conduct in a chatroom. [Episode #1817, First broadcast: 1/9/2001]",
    ia_identifier: "PrivacyO2001",
    ia_date: "2001-01-09T00:00:00.000Z",
    ia_proddate: "2001-01-09T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Legal Issues"
},
{
    ia_title: "Profile of Big Blue - IBM",
    ia_description: "An in-depth look at IBM, the IBM standard and the impact of its dominant role in the PC marketplace.\nGuests: Norm DeWitt, Dataquest; Tom Rolander, Intel; Stewart Alsop, InfoWorld; John Doerr, Kleiner Perkins Caufield; Gary Kildall, DRI\nProducts/Demos: IBM PC ATIBM TopView, CompuPro\nCopyright 1985 Stewart Cheifet Productions",
    ia_identifier: "Profileo1985",
    ia_year: 1985,
    ia_date: "1985-03-19T00:00:00.000Z",
    ia_proddate: "1985-03-19T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Programming",
    ia_description: "A review of current popular programming languages.\nGuests: Gary Kildall, DRI; Paul Grady, Microfocus; Dave Eisenberg, Apple; Elizabeth Rather, Forth\nProducts/Demos: COBOLFORTHFORTH Graphics, PASCAL, Apple's Personal COBOL.\nCopyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "Programm1984",
    ia_year: 1984,
    ia_date: "1984-06-25T00:00:00.000Z",
    ia_proddate: "1984-06-25T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Programming Languages",
    ia_description: "A look at a variety of interesting programming languages being used for personal computers. Included are demonstrations of Microsoft's Office 2000 Developer, LEGO Mindstorms RCX Code Developer, Macromedia Flash 3.0, and Metrowerks CodeWarrior. Also a special look inside Electronic Arts to see what they use to program their newest game WWII Fighters. \nOriginally broadcast in 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_broadcastyear: 1999,
    ia_identifier: "Programm99",
    ia_year: 1999,
    ia_date: "1999-01-01T00:00:00.000Z",
    ia_proddate: "1999-08-31T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Project Management Software",
    ia_description: "A user's guide to project management programs, strategies, and approaches.\nGuests: Jim Dunnigan, Microsoft; David Bryan, Breakthrough Software; Nancy Ann Twomey, Computer Assoc; Glenn Katz, Stanford; Gary Kildall, Digital Research\nProducts/Demos: MacProjectTimeline, Microsoft Project, MicroPlanner Plus, Superproject Plus 2.0",
    ia_identifier: "ProjectM1986",
    ia_date: "1986-12-02T00:00:00.000Z",
    ia_proddate: "1986-12-02T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Psychological Software",
    ia_description: "The use of computers to analyze personality and diagnose problems of human relations.\nGuests: Gary Kildall, Digital Research; Dr. Jim Johnson, Human Edge SW; Dr. James Gardner, Fairview Dev; Dr. Roger Gould, Interactive Health; Dr. Bernie Zilbergeld; George Morrow, Morrow Computing\nProducts/Demos: Intracourse, Mind Over Minors, Biofeedback, Psychotherapy on a Disk, Therapeutic Learning Program",
    ia_identifier: "Psycholo1986",
    ia_date: "1986-02-11T00:00:00.000Z",
    ia_proddate: "1986-02-11T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Push Technology",
    ia_description: "As the Internet evolved, the big buzzword became \"push\", as in push information down to you and not wait for you pull it up. This program looks at several approaches to push technology including Castanet, PointCast, BackWeb, Netscape Netcaster, and Incisa. Guests include Marimba President and CEO Kim Polese. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "Pushtech98",
    ia_date: "1998-03-03T00:00:00.000Z",
    ia_subject: "push;marimba;polese"
},
{
    ia_title: "RAM Resident Software",
    ia_description: "A look at new software programs that reside in RAM and are always ready but may conflict with each other.\nGuests: David Whitney, Access Learning Tech; Dale Leatherman, Prodex; Robert Luhn, PC World; Richard Kraus, Persoft; Chip Rabinowitz, Amer Video Teleconf; Gary Kildall, Digital Research\nProducts/Demos: In-Synch, Note-It, Prodex 1.3, Referee",
    ia_identifier: "RAMResid1986",
    ia_date: "1986-11-18T00:00:00.000Z",
    ia_proddate: "1986-11-18T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "RISC",
    ia_description: "Reduced Instruction Set Computers are a new approach to speeding up computer processing.\nGuests: Joel Birnbaum, Hewlett Packard; David Patterson, UC Berkeley; Frank King, IBM; Hugh Martin, Ridge Computers; Jan Lewis, Palo Alto Research Group; George Morrow, Morrow Computing; Nickolas Dunckel, TRW\nProducts/Demos: HP Spectrum\nCopyright 1986 Stewart Cheifet Productions",
    ia_identifier: "RISC1986",
    ia_year: 1986,
    ia_date: "1986-10-10T00:00:00.000Z",
    ia_proddate: "1986-10-10T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Robotics",
    ia_description: "Robotic hardware and software and robotics based applications.\nGuests: David Nitzan, SRI International; Matt Guerrieri, Autobotics; Guy Rhodes, Microbot; John Will, Microbot; George Oliver, Oliver Company\nProducts/Demos: Hero I Robot, Teach Mover Robot",
    ia_identifier: "Robotics1984",
    ia_date: "1984-04-02T00:00:00.000Z",
    ia_proddate: "1984-04-02T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Robots - Japanese Style",
    ia_description: "A visit to the High Tech Expo in Tsukuba, Japan for a look at the latest Japanese robotics technology. Features Sony, Toshiba, Fujitsu, Fanuc, NEC, and others. Plus a robot from Waseda University that can play the organ! Originally broadcast in 1985. Copyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "Robots-J1985",
    ia_year: 1985,
    ia_date: "1985-08-09T00:00:00.000Z",
    ia_proddate: "1985-08-09T00:00:00.000Z",
    ia_subject: "1985; japan; robots; tsukuba; expo"
},
{
    ia_title: "Robots",
    ia_description: "Robots are used to deactivate bombs, to do work in outer space, to work on assembly lines, and just for fun. We'll learn how to build a robot at home and discuss the future of robotics. Originally broadcast in November 1999.\nCopyright 1999 Stewart Cheifet Productions.",
    ia_identifier: "Robots1999",
    ia_year: 1999,
    ia_date: "1999-11-16T00:00:00.000Z",
    ia_proddate: "1999-11-16T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Episode year: 1999;Robotics;Companies: Sony"
},
{
    ia_title: "SPA Codie Awards 1995",
    ia_description: "Highlights from the tenth annual Codie Awards for outstanding software, presented by the Software Publishers Association. Shot on location in San Diego. Hosted by actor and comedian Kevin Pollack. Best consumer program of the year was Microsoft Encarta. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "SPAAward"
},
{
    ia_title: "Screen Savers & Wallpaper",
    ia_description: "New color monitors created a market for whimsical add-ons like screen savers and wallpaper. Covered in this program are Crystal Walls, Marvel Comics Screen Posters, the Snoopy Screen Saver Fun Pac, the Jurassic Park Screen Saver, Microsoft Scenes, Matinee (the first video screen saver), PFS Power Album for Windows from Spinnaker Software, Pixel Play, and Second Nature Software. Guests include Gina Smith. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ScreenSa"
},
{
    ia_title: "Second Hand Computers",
    ia_description: "A look at the used computer market at who is selling them, who is buying them and what the risks and benefits are.\nGuests: J. Mark Crouch, Interstate Computer Bank; Stan Politi, Computer Currents; Bradley Ruedig, CAS Used Computers; Alexander Randall, Boston Computer Exch; George Morrow, Intelligent Access; Gary Kildall, Digital Research\nProducts/Demos: Dysan Interrogator, Leading Edge",
    ia_identifier: "SecondHa1986",
    ia_date: "1986-10-28T00:00:00.000Z",
    ia_proddate: "1986-10-28T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Secrets of Word Perfect",
    ia_description: "Before Microsoft Word became the default word processing standard for most users, WordPerfect was considered the best one out there. As with many applications, most users didn't know about some of the hidden powers in WordPerfect. This show offered some user tips and some WordPerfect add-ons. Demonstrations include tools for newsletter design and graphics, general desktop publishing tools, the Button Cube for WordPerfect, the newest version WordPerfect 5.2, a low-cost competitor Swift Word ($7.99), the Mac version of WordPerfect, and the UNIX version of WordPerfect. Originally broadcast in 1992. Copyright Stewart Cheifet Productions 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "Secretso",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "desktop publishing;newsletter;software workshop"
},
{
    ia_title: "Security and Viruses",
    ia_description: "Just the thought of a possible computer virus is enough to chill any computer user. Meet the people at the front lines in the war against the malicious computer virus.",
    ia_identifier: "Security2001",
    ia_date: "2001-04-03T00:00:00.000Z",
    ia_proddate: "2001-04-03T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Security"
},
{
    ia_title: "Internet Showcase Special Part 1",
    ia_description: "Highlights from Upside's Internet Showcase conference, from Palm Springs, California. A review of new web sites and internet related products. Featured guests include Oracle's Larry Ellison, Mitchell Kertzman of Liberate Technologies, syndicated columnist Larry Magid, AT&T CTO David Nagel, and Tim Bajarin of Creative Strategies. Originally broadcast in 2000.\nCopyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "Showcase2000",
    ia_year: 2000,
    ia_date: "2000-02-15T00:00:00.000Z",
    ia_proddate: "2000-02-15T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Conferences: Showcase Special"
},
{
    ia_title: "Internet Showcase Special Part 2",
    ia_description: "Highlights of the Internet Showcase conference produced by Upside magazine. Shot on location in Palm Springs, California. Featured guests include ABC's Sam Donaldson, Oracle's Larry Ellison, Peter Lewis of the New York Times, Michael Miller of PC magazine, Tim Bajarin of Creative Strategies, and AT&T CTO David Nagel. Originally broadcast in 2000.\nCopyright 2000 Stewart Cheifet Productions.",
    ia_broadcastyear: 2000,
    ia_identifier: "Showcase2000_2",
    ia_year: 2000,
    ia_date: "2000-02-22T00:00:00.000Z",
    ia_proddate: "2000-02-22T00:00:00.000Z",
    ia_subject: "Episode year: 2000;Conferences: Showcase Special;Voice Reconigtion;Internet News;e-commerce"
},
{
    ia_title: "Simulator Software",
    ia_description: "The use of computers to simulate various real-world environments for military, entertainment and architectural applications.\nGuests: Gary Kildall, Digital Research; Frank Lewandowski, Singer-Link; Steve Harrison, Skidmore Owings; Bruce Artwick, IBM\nProducts/Demos: Flight Simulator, Military Flight Simulator, DRAFT Architecture Simulator",
    ia_identifier: "Simulati1984",
    ia_date: "1984-03-05T00:00:00.000Z",
    ia_proddate: "1984-03-05T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "What to Do with Your Expansion Slots",
    ia_description: "As EISA, ISA, and IBM's MCA battled to become the industry standard for expansion cards, add-on vendors filled the market with new upgrade boards and new slot standards. This program looks at ISA bus systems versus the VL bus system, Intel's new Plug and Play PCI standard, the new PCMCIA format for portable computers, the Stealth 32 Video Card from Diamond, the new SCSI Sound Blaster card from Creative Labs, and the LeMans GT Graphics adapter for the NuBus slot on the Mac. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "SlotsLoc"
},
{
    ia_title: "Slowdown in Silicon Valley #1",
    ia_description: "A review of the reasons behind the current slump in the computer business.\nGuests: Dave Crockett, Dataquest; Sam Colella, Inst Venture Partners; Deborah Wise, Business Week; Dave Norman, Businessland; Gary Kildall, Digital Research \nProducts/Demos: Adam Computer, Osborne I Computer",
    ia_identifier: "Slowdown1985",
    ia_date: "1985-09-03T00:00:00.000Z",
    ia_proddate: "1985-09-03T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Slowdown in Silicon Valley #2",
    ia_description: "Part two of this special series looking at the causes of the downturn in the computer industry.\nGuests: Ben Anixter, AMD; Richard O'Brien, Hewlett Packard; Trip Hawkins, Electronic Arts; John Merson, Ashton-Tate; Gary Kildall, Digital Research\nProducts/Demos: Commodore Amiga, Atari ST 520",
    ia_identifier: "Slowdown1985_2",
    ia_date: "1985-09-10T00:00:00.000Z",
    ia_proddate: "1985-09-10T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Small Business Software",
    ia_description: "The availability of low cost business applications for small businesses helped level the playing field for new budding entrepreneurs. This program looks at Business Plan Toolkit, CA Simply Accounting for Windows, MYOB for the Macintosh, ClarisWorks 2.0 for the Mac, Lotus SmartSuite, and ClienTrac. Originally broadcast in 1994. Copyright Stewart Cheifet Productions 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "SmallBus",
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z"
},
{
    ia_title: "Smart TV",
    ia_description: "Convergence was the buzz word of 1995 as analysts predicted the computer and the television set would merge into one box. One aspect of this convergence was the so-called Smart TV. This program demonstrates some examples including the Malachi board which lets you download software into your PC using a standard broadcast signal (not a cable modem), Microware's DAVID (Digital Audio Video Interactive Decoder), HP's Kayak set top box, Philips' DET100 set top box, the Stellar set top box, DIVICOM's set top box, and Oracle's video authoring tools. Originally broadcast in October 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_identifier: "SmartTV",
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "set top box; digital video;pc video; pctv;en technology; HP; Oracle"
},
{
    ia_title: "Smart TV",
    ia_description: "As the computer and the television began to merge, we started seeing intelligent TV sets. This program looks at some examples. Demonstrations include the TVModem from En Technology, the Kayak set top box from HP, MicroWare Systems' DAVID (Digital Audio Video Interactive Decoder), the new cable modem from Intel, and the new MPEG (Moving Picture Experts Group) standard for encoding full motion video on a computer. Guests include Avram Miller of Intel and Arthur Orduna of Microware Systems. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "SmartTV95",
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "set top box;cable modem;cybercast"
},
{
    ia_title: "Software Piracy",
    ia_description: "Meet teenage software pirates, computer lawyers and the battle over software ownership.\nGuests: Mark Pump, Alpha Logic; Smith McKeithen, Activision; Frankie Mouse, Hacker; Neil Smith, Software Publish Assoc; John Draper (Captain Crunch); Gary Kildall, DRI\nProducts/Demos: Locksmith, Cap'n Software, Easy Writer, MacWare.\nCopyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "Software1985",
    ia_year: 1985,
    ia_date: "1985-02-01T00:00:00.000Z",
    ia_proddate: "1985-02-01T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Software Secrets",
    ia_description: "Most software users only take advantage of a small percentage of the features in software packages. This program looks at some of the hidden powers of popular applications including Word, PowerPoint, Excel, Photoshop, Tomb Raider II, and Rainbow Six. Also a look at \"Easter Eggs\", little surprises hidden inside software by the programmers. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Software99",
    ia_date: "1999-01-05T00:00:00.000Z",
    ia_proddate: "1999-01-05T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Software for Kids",
    ia_description: "One of the biggest drivers for selling new home computers was a parent's desire to get a computer for their kids. This program looks at several software programs aimed at children including Club KidSoft, Zurk's Learning Safari, Forever Growing Garden, Yearn 2 Learn Snoopy, World Discovery, Peter Pan: A Story Painting Adventure, Student Writing Center for Windows, and The Cruncher, a talking animated spreadsheet for children. Guests include Gina Smith. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "Software_3"
},
{
    ia_title: "Small Business Software",
    ia_description: "A review of hardware and software products aimed at the small business, home office user. Demonstrations include Microsoft Office 95, the Office Small Business Pack, MYOB Accounting 6.0, HP OfficeJetLX, Connectix QuickCam, SyQuest EZ 135 Drive, and Motorola's BitSurfer Pro. Guests include San Francisco Examiner technology writer Tom Abate. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "SohoSoft",
    ia_year: 1996,
    ia_date: "1996-01-01T00:00:00.000Z",
    ia_subject: "SOHO;small business;home office"
},
{
    ia_title: "SPA Codie Awards 1997",
    ia_description: "Coverage of the annual Codie Awards presented by the Software Publishers Association. The awards recognize outstanding achievement in software design and are considered the \"Oscars\" of the software industry. The lifetime achievement award winner was Paul Allen. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "SpaCodie"
},
{
    ia_title: "Speech Recognition and Synthesis",
    ia_description: "An look at the latest advances in speech technology involving both voice recognition and speech synthesis.\nGuests: Michael O'Malley, Berkeley Speech Tech; Charles Cochran, Electronic Speech Sys; Steve Bettencourt, Votan; Janet Baker, Dragon Systems; George Morrow, Morrow Computing\nProducts/Demos: Speech Plus, Software Speech, BestSpeech, VoiceKey, Voice Libraries, Voice Scribe 1000",
    ia_identifier: "SpeechRe1987",
    ia_date: "1987-02-17T00:00:00.000Z",
    ia_proddate: "1987-02-17T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Speech Synthesis",
    ia_description: "A look at speech synthesis and speech recognition technologies.\nGuests: Herb Lechner, SRI International; Carl Berney, Speech Plus; Ron Stevens, Votan\nProducts/Demos: Minolta Talking Camera, Texas Instruments Speak & Spell, Epsom Speech Plus Computer, IBM Votan V-5000",
    ia_identifier: "SpeechSy1984",
    ia_date: "1984-04-09T00:00:00.000Z",
    ia_proddate: "1984-04-09T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Speech Technology",
    ia_description: "Demonstrations of the latest in speech recognition technology. Included are Philips SpeechMike Pro and Philips FreeSpeech 98, Dragon Naturally Speaking and Dragon Naturally Speaking Mobile Recorder, TeLL me More language training software, and Webley, a speech enabled personal assistant. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "SpeechTe99",
    ia_date: "1999-08-03T00:00:00.000Z",
    ia_proddate: "1999-08-03T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Sports Simulation Software",
    ia_description: "A review of new sports software that lets couch potatoes feel like athletes. Demonstrations include Interactive Guide to Skiing, Interactive Guide to Snow Boarding, Tony LaRussa Baseball, Trophy Bass 2, NBA Full Court Press, Bobsled Simulator, and Madden 97. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "SportsSi",
    ia_subject: "basketball;baseball;football"
},
{
    ia_title: "Storage Devices",
    ia_description: "Floppy drives, hard drives, and bubble memory.\nGuests: Al Shugart, Seagate; Frank Sordello, Memorex; Gary Kildall, DRI\nProducts/Demos: 5 ¼ inch floppy drive, 3 ½ inch floppy drive, RCA CED videodisk, 3680 1.2 GB spindle disk. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "StorageD1984",
    ia_year: 1984,
    ia_date: "1984-05-07T00:00:00.000Z",
    ia_proddate: "1984-05-07T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Data Storage Solutions",
    ia_description: "Files were getting bigger and bigger and computer users were struggling to find more efficient ways to store their data. This program looks at several solutions including StuffIt Deluxe 4.5, Safeguard Interactive Backup 3.0, Syquest's SparQ Drive, Iomega's Clik! Drive, FutureArts as used by the San Francisco Digital Library, and the DynaMO 640 magneto optical drive. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Storages98",
    ia_date: "1998-07-21T00:00:00.000Z",
    ia_subject: "iomega; aladdin;syquest; clik;stuffit"
},
{
    ia_title: "SuperComuputers",
    ia_description: "An introduction to the world of supercomputers in Asia and in the U.S. and their application environments such as NASA and NOA.\nCopyright 1987 Stewart Cheifet Productions",
    ia_identifier: "SuperCom1987",
    ia_year: 1987,
    ia_date: "1987-06-16T00:00:00.000Z",
    ia_proddate: "1987-06-16T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "TV Meets PC",
    ia_description: "Will the TV and PC ever become one appliance in your living room? The convergence has begun. There are TV tuner cards for your PC, computer appliances that can be used to record television programs, and net surfing boxes for your TV. We'll review the latest products and developments.",
    ia_identifier: "TVMeetsP2001",
    ia_date: "2001-01-23T00:00:00.000Z",
    ia_proddate: "2001-01-23T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Episode year: 2000;Episode year: 1999;Entertainment"
},
{
    ia_title: "Talking Computers",
    ia_description: "Almost ten years after this show was produced, we are still not talking to our computers. This program looks at several early attempts at a voice interface. Products demonstrated include VoiceUser for Windows, VoiceUser for WorkGroups, Wildfire, VPro, TruVoice, Dragon Dictate, Kurzweil Voice for Windows, Voice Organizer and Philips Dictation System. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "TalkingC",
    ia_subject: "voice;speech;synthesis"
},
{
    ia_title: "Tax Preparation Software",
    ia_description: "A review of the latest software titles to help you manage and file your income taxes including a look at on-line filing.\nGuests: Henry Hilton, Double Eagle Software; Susan Morgan, Softview; James Petersen, Best Programs; Michael Chipman, ChipSoft; Gary Kildall, Digital Research\nProducts/Demos: Tax Advantage, Mac-in-Tax, PC TaxCut, TurboTax",
    ia_identifier: "TaxPrepa1987",
    ia_date: "1987-02-24T00:00:00.000Z",
    ia_proddate: "1987-02-24T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Tax Software",
    ia_description: "For some people, tax preparation software was reason enough to buy their first personal computer. This program reviews several early tax preparation and personal accounting programs including Intuit's Quicken, Andrew Tobias' TaxCut, Kiplinger TaxCut, Parsons Personal Tax Edge, and ChipSoft's TurboTax. The program also visits the IRS to see their transition to electronic filing and the Washington offices of the accounting firm of Delloit Touche. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "TaxSoftw"
},
{
    ia_title: "Tax Preparation Software 1999",
    ia_description: "A review of current tax and personal finance software including Microsoft Money, Money.com, Kiplinger TaxCut, TurboTax, and MacInTax. Originally broadcast in 1999.",
    ia_broadcastyear: 1999,
    ia_identifier: "Taxprepa99",
    ia_date: "1999-03-29T00:00:00.000Z",
    ia_proddate: "1999-03-29T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Technology and the Church, CCN Special Part Two",
    ia_description: "This week we continue with part two in our series on how religious groups, other non-profits or community groups can use the computer and the Internet to better run their organizations.",
    ia_identifier: "Technolo2001_2",
    ia_date: "2001-09-25T00:00:00.000Z",
    ia_proddate: "2001-09-25T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Religion;Companies: Oracle"
},
{
    ia_title: "Technology and the Church, CCN Special Part Three",
    ia_description: "In our final installment of our three part series on technology and the church, we continue to tell you about how churches, other non-profits or community groups can use computers and the Internet to better run their organizations.",
    ia_identifier: "Technolo2001_3",
    ia_date: "2001-10-02T00:00:00.000Z",
    ia_proddate: "2001-10-02T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Religion;Music"
},
{
    ia_title: "The Macintosh Computer",
    ia_description: "An in-depth look at the early Apple Macintosh computer, available software and hardware add-ons. Originally broadcast in 1985. Guests: Joanna Hoffman, Apple; Bob Foster, Telos Software; Lee Lorenzen, Digital Research; Ben Wiseman, InfoCorp; Gary Kildall, DRI; Larry Tesler, Apple\nProducts/Demos: Apple Macintosh, MacProject, FileVision, GEM DrawJazz. \nCopyright 1985 Stewart Cheifet Productions.",
    ia_broadcastyear: 1985,
    ia_identifier: "TheMacin1985",
    ia_year: 1985,
    ia_date: "1985-01-01T00:00:00.000Z",
    ia_proddate: "1985-03-12T00:00:00.000Z",
    ia_subject: "macintosh;apple;jobs"
},
{
    ia_title: "The New Macs",
    ia_description: "A review of the new Macintosh computers and their ability to emulate MS-DOS machines and run IBM compatible applications.\nGuests: Charles Oppenheimer, Apple; Didier Diaz, Apple; George Morrow, Nestar; Jan Lewis, Palo Alto Research Group; Gary Kildall, Digital Research\nProducts/Demos: Mac SE, Mac IIOriginally broadcast May 1987. Copyright Stewart Cheifet Productions 1987.",
    ia_identifier: "TheNewMa1987",
    ia_year: 1987,
    ia_date: "1987-05-26T00:00:00.000Z",
    ia_proddate: "1987-05-26T00:00:00.000Z",
    ia_subject: "Episode year: 1987"
},
{
    ia_title: "Travel Planning Online",
    ia_description: "Online travel sites grew from just booking planes and hotels to planning exotic adventure trips. This show looks at several examples including DeLorme's AAA Map'n'Go, lonelyplanet.com, Wild Africa CD-ROM from Sumeria, and CitySearch. Other travel sites covered include previewtravel.com, thetrip.com, biztravel.com, and frommers.com. Originally broadcast in 1998.",
    ia_broadcastyear: 1998,
    ia_identifier: "Travelpl98",
    ia_date: "1998-08-18T00:00:00.000Z",
    ia_subject: "maps;holiday; travel; adventure;vacation"
},
{
    ia_title: "UNIX",
    ia_description: "AT&T's computer operating system is threatening to take over IBM's MS-DOS dominance.\nGuests: John Mashey, Bell Labs; Mark Sobell, Author; Bill Joy, Sun Microsystems; Doug Hartman, Hewlett Packard; Mike Denney, Basis; Gary Kildall, DRI\nProducts/Demos: File It, HP Integral PC, UNIX. Copyright 1985 Stewart Cheifet Productions.",
    ia_identifier: "UNIX1985",
    ia_year: 1985,
    ia_date: "1985-02-18T00:00:00.000Z",
    ia_proddate: "1985-02-18T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "U Hard Disk Management",
    ia_description: "As hard disks grow larger, the problem of managing the information on your hard disk is getting more complicated. A look at a variety of solutions.\nGuests: Phil Grabmiller, 5th Generation; Patrick O'Connor, Everex; Ted Knox, Golden Bow; Frank Tantalo, Westlake Data; Steve Koschmann, Peter Norton; Gary Kildall, SRI\nProducts/Demos: Fastback Plus; Everex Hard Disk Backup; Path; Minder 4.11V-Opt Disk Optimizer; Norton Disk Doctor",
    ia_identifier: "Uharddiskman",
    ia_date: "1989-01-10T00:00:00.000Z",
    ia_proddate: "1989-01-10T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "High Tech Dayton",
    ia_description: "Computer Chronicles goes on the road to Dayton, Ohio to cover one of the country's largest user's groups and a little known center for high-tech innovation. Companies profiled include NCR, whose former CEO is now running HP. Copyright 2000 Stewart Cheifet Productions.",
    ia_identifier: "UsersGro2000",
    ia_year: 2000,
    ia_date: "2000-04-04T00:00:00.000Z",
    ia_subject: "NCR; HP; dayton; Microsoft; Conferences; Dayton; ohio;Windows; Linux; Lexis-Nexis"
},
{
    ia_title: "Utilities",
    ia_description: "PC utiltities, file manipulators, disk managers, DOS aids, and other PC tools.\nGuests: Ed Tolson, SoftLogic Solutions; Dale Sinor, Executive Systems; Karen Lund, Tele-Ware; Robert Hoffman, Ashton-Tate; Ezra Shapiro, BYTE Magazine; Jay Eisnelohr, Airus; Gary Kildall, Digital Research; George Morrow, Intelligent Access\nProducts/Demos: Sidekick, Norton Utilities, Sideways, Double DOS, Disk Optimizer, Xtree & HOT, Above Disc, Détente.\nOriginally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "Utilitie1986",
    ia_year: 1986,
    ia_date: "1986-10-17T00:00:00.000Z",
    ia_proddate: "1986-10-17T00:00:00.000Z",
    ia_subject: "Episode year: 1986"
},
{
    ia_title: "Virtual Meetings",
    ia_description: "The advent of the internet meant people could now start communicating and collaborating over the web. This program looks at several early examples of virtul meeting technology. Demonstrations include Cross Ties for Workgroups, Groupware for Windows from Ventana, HP's OmniShare, CU-See Me, Intel's ProShare 200, the Sharevision PC3000 from Creative Labs, VIVO 320 from Vivo Software, AT&T's VideoPhone, and Sony's Magic Link PDA. Guests include Andrew Seybold. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "VirtualM",
    ia_subject: "groupware;teleconference;videophone"
},
{
    ia_title: "The Virtual University",
    ia_description: "With the growing sophistication of the Internet, colleges and universities started to build an online curriculum to enable students to take credit classes on the web. This program looks at several examples including collegenet.com, virtualu.ca.gov, unex.berkeley.edu, digitalthink.com, and the Cisco Networking Academy. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "VirtualU98",
    ia_date: "1998-01-06T00:00:00.000Z",
    ia_subject: "CollegeNET; Intel; Cisco;UC Berkeley; Cal;California Virtual University"
},
{
    ia_title: "Visual Programming Languages",
    ia_description: "For amateur programmers, the advent of visual programming languages made life, and programming, a lot easier. This television program looks at several early versions of VPLs. Demonstrations include Toolbook from Asymetrix, Hypercard for the Mac from Claris, Prograph 2.5, Serius Workshop 1.0 for the Mac, Visual Basic 3.0, Visual C++ 1.0, and Visual Basic Professional Edition. Guests include Serius CEO Joe Firmage and George Febish, author of Windows Rapid Application Development. Originally broadcast in 1993.\nCopyright 1993 Stewart Cheifet Productions",
    ia_broadcastyear: 1993,
    ia_identifier: "VisualPr",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "visual basic;C ++;prograph; serius"
},
{
    ia_title: "Web Plug-Ins",
    ia_description: "In the early days of the web, you often had to add a variety of applications to make your web browser fully functional. These were sometimes called web plug-ins. This programs shows several examples including RealPlayer and RealAudio, Adobe Acrobat, MacroMedia Flash and Director, PalaceSpace, Apple QuickTime VR, and Netopia Virtual Office. Originally broadcast in 1997.",
    ia_broadcastyear: 1997,
    ia_identifier: "WebPlugI98",
    ia_date: "1998-06-16T00:00:00.000Z",
    ia_subject: "plug ins;add ons;web"
},
{
    ia_title: "Web Radio",
    ia_description: "The Internet is changing the world of radio as thousands of radio stations around the world go on line. This program reviews the latest in web radio, including web only stations. Demonstrations include Imagine Radio, Spinner.com, and GEEK Radio. Guests include DJ \"Davey D\" and his \"HipHop Corner\". Originally broadcast in May 1999. Copyright 1999 Stewart Cheifet Productions.",
    ia_identifier: "WebRadio99",
    ia_year: 1999,
    ia_date: "1999-01-01T00:00:00.000Z",
    ia_proddate: "1999-05-25T00:00:00.000Z",
    ia_subject: "Episode year: 1999"
},
{
    ia_title: "Building Your Web Site",
    ia_description: "As the Internet became a standard for business and personal communication, everyone had to have a web site. This program looks at some of the tools available in the late nineties for creating your own web site and some of the key issues facing web site designers. Products covered include Backstage Internet Studio from Macromedia; WebImage and I Spy from Group 42, V*Realm Builder from Integrated Data Systems, and Cosmo Player. Also, a visit to the Web Design and Development Exhibition in San Francisco where teams compete to build the best web site in a single day. Originally broadcast in 1997. Copyright 1997 Stewart Cheifet Productions.",
    ia_broadcastyear: 1997,
    ia_identifier: "WebSiteC",
    ia_subject: "macromedia; atomic vision;web desing; VRML"
},
{
    ia_title: "Web Surfing on your TV",
    ia_description: "These new set-top boxes will do everything from record multiple shows to pausing live TV. This is one episode you don't want to miss!",
    ia_identifier: "WebSurfi2001",
    ia_date: "2001-06-12T00:00:00.000Z",
    ia_proddate: "2001-06-12T00:00:00.000Z",
    ia_subject: "Episode year: 2001;Companies: Microsoft;e-commerce"
},
{
    ia_title: "Windows 95",
    ia_description: "The upgrade from Windows 3.0 to Windows 95 was the big leap for Microsoft and began its domination of the desktop. This program looks at the new OS, originally code named \"Chicago\" and Windows 4.0, and new applications developed specifically for Win 95. Demonstrations include Windows 95, Norton Utilities for Win 95, Visio, and Picture Publisher. Also included are demonstratons of IBM's Warp OS/2, and the Macintosh Operating System OS 7.5. Originally broadcast in 1994.\nCopyright 1994 Stewart Cheifet Productions",
    ia_broadcastyear: 1994,
    ia_identifier: "Windows4",
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_subject: "windows; microsoft;apple; macintosh; warp;IBM; OS/2; operating system"
},
{
    ia_title: "Windows 98",
    ia_description: "The launch of Windows 98 was a major upgrade for Windows users, solving some of the problems of Windows 95. This program previewed the new functionality of Windows 98 and also featured Win98 add-ons including Microsoft's Plus! 98, the Windows utility Tweak UI, and Gizmos 98 from Play. Guests include Linus Torvalds, developer of Linux, Mike Elgan of Windows magazine, and Kiki Stockhammer of Play. Originally broadcast in 1998. Copyright 1998 Stewart Cheifet Productions.",
    ia_broadcastyear: 1998,
    ia_identifier: "Windows9_2"
},
{
    ia_title: "Windows Enhancement Software",
    ia_description: "Early versions of Windows left a lot to be desired. So third party software vendors came out with a variety of Windows add-ons. This program looks at several examples including Squeegee, Rooms for Windows, WinMaster, WinDesk, WinTools, ICON Do-It, Dashboard, and SuperPrint. Originally broadcast in 1992. Copyright Stewart Cheifet Productions 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "WindowsE",
    ia_subject: "windows;add-ons;utilities"
},
{
    ia_title: "Windows Enhancements - Hardware",
    ia_description: "When Windows first came out, it needed help, from software add-ons and hardware add-ons. This program looks at some of the hardware products that helped make the early version of Windows work better. Demonstrations include the J-Mouse Keyboard, the Viewsonic 7 monitor, the Logitech TrackMan stationary mouse, Diamond's Stealth VRAM graphic acclerator and the SuperStar VLB card, WatchIt!TV, custom upgrades from Sigma Data, and the Weitek processor accelerator. Originally broadcast in 1992.\nCopyright 1992 Stewart Cheifet Productions",
    ia_broadcastyear: 1992,
    ia_identifier: "WindowsE_2",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "microsoft; mouse; trackball;accelerator;monitor; keyboard; graphics"
},
{
    ia_title: "Windows NT",
    ia_description: "Microsoft's Windows OS grew up a little bit with the release of Windows NT in 1993. This program looks at the new operating system. Included are demonstrations of NT's application integration and SQL server. Also featured are a new NT based graphics program from Altsys called Virtuoso and a new NT CAD program from Bentley Systems called MicroStation. This program also includes a visit to the NT test and development lab in Redmond, Washington and a comparison between NT and Unix. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "WindowsN",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "windows;NT;unix"
},
{
    ia_title: "CES 1996",
    ia_description: "How far have consumer electronics come in the past decade? Take a look at this coverage of CES from twenty years ago. Highlights from the annual winter Consumer Electronics Show shot on location in Las Vegas. Features analysis by Tim Bajarin, President of Creative Strategies. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "WinterCE"
},
{
    ia_title: "Wireless Technology",
    ia_description: "Wireless technology is rapidly evolving and playing an increasing role in the lives of people throughout the world. In addition, ever-larger numbers of people are relying on wireless technology directly or indirectly. Copyright 2001 Stewart Cheifet Productions.",
    ia_identifier: "Wireless2001",
    ia_year: 2001,
    ia_date: "2001-03-20T00:00:00.000Z",
    ia_proddate: "2001-03-20T00:00:00.000Z",
    ia_subject: "Episode year: 2002;Episode year: 2001;Wireless: Bluetooth"
},
{
    ia_title: "Wireless Computing",
    ia_description: "The buzz word at the end of 1996 was wireless. This program looks at several new wireless technologies including the HP Vectra 500 with an InfraRed (IR) access port, the LaserJet 6P, the Omnibook and the Omnigo, all with IR ports. Also covered are wireless PC card modems from Motorola including the Personal Messenger 100D, the Personal Messenger 100C, and the Tango 2-Way Pager. Also, AT&T's Smart Phone and the Unwired Planet's Pocket Net. Additional products featured are the Nokia 9000 and satellite based products such as OmniTracs, Skycell, and Orbcomm, all from TelAstra. Originally broadcast in 1996. Copyright 1996 Stewart Cheifet Productions.",
    ia_broadcastyear: 1996,
    ia_identifier: "Wireless_2",
    ia_subject: "infrared;satellite;mobile"
},
{
    ia_title: "Women in Computing",
    ia_description: "Meet the top women in a field that has traditionally been dominated by men.\nGuests: Thelma Estrin, UCLA; Judy Estrin, Bridge Communications; Kay Gilliland, EQUALS; Elizabeth Scott, Rhiannon Software; Adele Goldberg, Xerox PARC; Jan Lewis, Palo Alto Research Grp; Gary Kildall, Digital Research\nOriginally broadcast in 1985. Copyright Stewart Cheifet Productions 1985.",
    ia_broadcastyear: 1985,
    ia_identifier: "WomeninC1985",
    ia_year: 1985,
    ia_date: "1985-09-17T00:00:00.000Z",
    ia_proddate: "1985-09-17T00:00:00.000Z",
    ia_subject: "Episode year: 1985"
},
{
    ia_title: "Word Processing Software",
    ia_description: "A review of the new generation of word processors.\nGuests: Gary Kildall, DRI; Paul Schindler, Info Syst News; Jim Edlin, WordVision; Warren Kuhl, AT&T; Wayne Holder, Oasis Systems\nProducts/Demos: Word, Vision, Writer's Work Bench Text Editor, Word Plus, Punctuation & StyleWordStar\nCopyright 1984 Stewart Cheifet Productions.",
    ia_identifier: "WordProc1984",
    ia_year: 1984,
    ia_date: "1984-03-19T00:00:00.000Z",
    ia_proddate: "1984-03-19T00:00:00.000Z",
    ia_subject: "Episode year: 1984"
},
{
    ia_title: "Y2K - Year 2000",
    ia_description: "As I-T people across the country geared up for potential Y2K problems at the end of the year, we reviewed several consumer approaches to being prepared for possible Y2K problems. Products reviewed include PCfix2000, Norton 2000, Microsoft Y2K PlugIn Tools, and several online resources such as y2k.gov, year2000.com, and cassandraproject.org. Originally broadcast in 1999.\nCopyright 1999 Stewart Cheifet Productions",
    ia_broadcastyear: 1999,
    ia_identifier: "Y2KYear21999",
    ia_year: 1999,
    ia_proddate: "1999-03-16T00:00:00.000Z",
    ia_subject: "year 2000;Y2K;microsoft; millennium"
},
{
    ia_title: "Year 2000 (Y2K)",
    ia_identifier: "Year2000",
    ia_description: "",
    ia_broadcastyear: 1999,
},
{
    ia_title: "Amiga 3000",
    ia_description: "For fans of the Commodore Amiga, the introduction of the new Amiga 3000 was big news, even though the price tag was nearly $4,000. This program looked at the new Amiga computer and new third party appplications. Demonstrations include the Amiga 3000, the Amiga 2500, the AmigaVision authoring system, The Animation Studio, and the Video Toaster from NewTek. Also includes a visit to FAUG, the First Amiga Users Group, in Palo Alto. Guests include Paul Montgomery, Tim Jenison, Lou Wallace, and Hedley Davis. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "amiga3000",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1988;Television Programs;Computers: History;amiga;commodore;video toaster"
},
{
    ia_title: "The New Amigas",
    ia_description: "Before there was a Macintosh, the Amiga was the computer for the creative community. This program looks at the Amiga 2000, the Amiga 500, Photon Video Cell Animator, Music X, Video Toaster, and Interceptor. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "amiga_2",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "amiga;commodore;video toaster"
},
{
    ia_title: "Amiga 2500",
    ia_description: "A look at the new Amiga models including the Amiga 2500 and new software and peripherals for the Amiga computers.\nGuests: Tom Stearns, Commodore; Lou Wallace, Amiga World; Dan Silva, Author; Jim Schneider, Inno; Vision; Gary Kildall, DRI\nProducts/Demos: Menace; Battle Chess; Amiga 2500 Deluxe Paint III, Video Effects 3D. Originally broadcast in March 1989. Copyright 1989 Stewart Cheifet Productions.",
    ia_identifier: "amiga_3",
    ia_year: 1989,
    ia_date: "1989-03-07T00:00:00.000Z",
    ia_proddate: "1989-03-07T00:00:00.000Z",
    ia_subject: "Episode Year: 1989;Television Programs;Computers: History;amiga;commodore;battle chess"
},
{
    ia_title: "The Internet - Arabic",
    ia_description: "Arabic subtitled version of this program. In the mid 1990's many people were on line, but the internet and the world wide web were still a new phenomenon. This program looks at the new open world of the web. Demonstrations include Eudora, Anarchy, the WELL, WinCIM, InterACT.net, and HoTMetal Pro HTML Editor. Guests include New York Times technology writer John Markoff. Also features a profile of the band Severe Tire Damage, the first band to ever perform live over the internet. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc143_internet",
    episodeNumber: 143,
    ia_subject: "internet; net; web;well; compuserve;html; markoff"
},
{
    ia_title: "Windows NT - Arabic",
    ia_description: "Arabic subtitled version of this program. Microsoft's Windows OS grew up a little bit with the release of Windows NT in 1993. This program looks at the new operating system. Included are demonstrations of NT's application integration and SQL server. Also featured are a new NT based graphics program from Altsys called Virtuoso and a new NT CAD program from Bentley Systems called MicroStation. This program also includes a visit to the NT test and development lab in Redmond, Washington and a comparison between NT and Unix. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "ar_cc144_windows_nt",
    episodeNumber: 144,
    ia_subject: "arabic; windows NT;operating system; unix;microsoft; windows"
},
{
    ia_title: "Buying A New Computer - Arabic",
    ia_description: "Arabic subtitled version of this program. Consumer advice on how to buy a new computer. Features tips from Andrew Reinhardt of BYTE, Wendy Taylor of PC Computing, Rik Myslewski of MacUser, and Galen Gruman of MacWorld, Owen Linderholm of PC World, and Marty Jerome of PC Computing. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "ar_cc146_buying_a_new_computer",
    episodeNumber: 146,
    ia_subject: "buying; purchase;new computer;arabic; consumer"
},
{
    ia_title: "Comdex 1993  -  Arabic",
    ia_description: "Arabic subtitled version of this program. Highlights from the 15th annual fall COMDEX trade show in Las Vegas. More than 75 products are reviewed in the categories of peripherals, portables, PDAs, PCMCIA cards, wireless, operating systems, business applications, CD-ROM software, communications, networking, and multimedia. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "ar_cc147_comdex_93",
    episodeNumber: 147,
    ia_subject: "comdex; las vegas;arabic; convention;trade show; 1993"
},
{
    ia_title: "Digital Journalism - Arabic",
    ia_description: "Arabic subtitled version of this program. The digital revolution changed the practice of journalism. This program looks at how journalists are using computers and the Internet. Segments include CNN Newsroom Global View, the San Jose Mercury's Mercury Center on AOL, Prodigy's Journalist application, Newsweek Interactive, the JFK Assassinatin CD-ROM, a visit to the MIT Media Lab, and CNBC's Private Financial Network (PFN) online service. Guests include Michael Rogers of Newsweek. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "ar_cc148_digital_journal",
    episodeNumber: 148,
    ia_subject: "rogers; cnn; cnbc; newsweek;MIT; media lab;digital; journalism"
},
{
    ia_title: "Color Printers - Arabic",
    ia_description: "Arabic subtitled version of this program. The availability of reasonably priced color printers changed the way people and businesses used computers. This program covers new color printers from Hewlett Packard, Tektronix, QMS, Canon, ColossalJet, and ProofPositive. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc149_color_printing",
    episodeNumber: 149,
    ia_subject: "color; printer; printing;arabic;hewlett packard"
},
{
    ia_title: "Tax Software - Arabic",
    ia_description: "Arabic subtitled version of this program. For some people, tax preparation software was reason enough to buy their first personal computer. This program reviews several early tax preparation and personal accounting programs including Intuit's Quicken, Andrew Tobias' TaxCut, Kiplinger TaxCut, Parsons Personal Tax Edge, and ChipSoft's TurboTax. The program also visits the IRS to see their transition to electronic filing and the Washington offices of the accounting firm of Delloit Touche. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc150_tax_software",
    episodeNumber: 150,
    ia_subject: "arabic; taxes; tax; tax preparation;finance;accounting"
},
{
    ia_title: "Screen Savers & Wallpaper - Arabic",
    ia_description: "Arabic subtitled version of this program. New color monitors created a market for whimsical add-ons like screen savers and wallpaper. Covered in this program are Crystal Walls, Marvel Comics Screen Posters, the Snoopy Screen Saver Fun Pac, the Jurassic Park Screen Saver, Microsoft Scenes, Matinee (the first video screen saver), PFS Power Album for Windows from Spinnaker Software, Pixel Play, and Second Nature Software. Guests include Gina Smith. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc151_screen_savers",
    episodeNumber: 151,
    ia_subject: "wallpaper; desktop;screen saver;arabic"
},
{
    ia_title: "Expansion Slots - Arabic",
    ia_description: "Arabic subtitled version of this program. As EISA, ISA, and IBM's MCA battled to become the industry standard for expansion cards, add-on vendors filled the market with new upgrade boards and new slot standards. This program looks at ISA bus systems versus the VL bus system, Intel's new Plug and Play PCI standard, the new PCMCIA format for portable computers, the Stealth 32 Video Card from Diamond, the new SCSI Sound Blaster card from Creative Labs, and the LeMans GT Graphics adapter for the NuBus slot on the Mac. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc155_local_bus_video",
    episodeNumber: 155,
    ia_subject: "local bus; expansion slot;peripherals; EISA; ISA;MCA; arabic"
},
{
    ia_title: "Green PCs - Arabic",
    ia_description: "Arabic subtitled version of this program. In 1992 the EPA launched the Energy Star Computer Program to encourage the production of environmentally friendly computers. This program looked at several approaches including PC Ener-G-saver, Green Explorer, the Macintosh LC 575, the LaserJet 4L, and the Compaq Presario 425. Also featured are visits to a computer recycling center in California, a computer recycling center in New Jersey, and Greendisk, a company in Seattle that recycles floppy disks. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc157_green_psc",
    episodeNumber: 157,
    ia_subject: "environment; ecology; green;arabic;recycle"
},
{
    ia_title: "Groupware 1994 - Arabic",
    ia_description: "Arabic version of this program. As business migrated from the standalone PC to the networked PC, a hot new application area became groupware, enabling collaboration within a company. This program reviews Network Scheduler 3 from Powercore, Lotus Notes, WordPerfect Office, The Meeting Room from Eden Systems, GroupSystems 5 from Ventana, ShowMe 2.0 from SunSolutions, and LiveBoard from Xerox. Guests include Scott McNealy. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc158_email-groupware",
    episodeNumber: 158,
    ia_subject: "arabic; email; groupware;scott mcnealy; lotus;wordperfect; xerox"
},
{
    ia_title: "Multimedia - Arabic",
    ia_description: "Arabic subtitled version of this program. The advent of faster processors and digital storage drove the new field called Multimedia. Examples demonstrated in this program include The San Diego Zoo from Software Toolworks, Macromedia Action!, XPLORA 1: Peter Gabriel's Secret World, TuneLand from 7th Level, Microsoft's Cinemania, Small Blue Planet from Now What Software, Wrath of the Gods from Luminaria, a new portable CD-ROM player from Media Vision, Quicktime 2.0, Adobe Premiere, and VideoFusion. Guests include Bud Colligan, CEO of Macromedia, and Gina Smith, Editor in Chief of Electronic Entertainment magazine. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc159_multimedia_1_part_1",
    episodeNumber: 159,
    ia_subject: "multimedia; arabic;peter gabriel; adobe premiere;gina smith' macromedia; bud colligan"
},
{
    ia_title: "CD-ROM - Arabic",
    ia_description: "Arabic subtitled version of this program. The advent of optical storage and CD-ROMs changed the rules for software applications and opened up a whole new generation of programs. Reviewed on this program are Encarta, the Association of Shareware Professionals CD-ROM collection, American Visions: 20th Century Art from the Neuberger Collection, Art Spiegelman's The Complete Maus from Voyager, Substance Digizine, and the new Broderbund game MYST. Originally broadcast in 1994. \n",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc160_cdrom",
    episodeNumber: 160,
    ia_subject: "arabic;cd; cd rom; cd-rom;optical"
},
{
    ia_title: "Foreign Language Software - Arabic",
    ia_description: "Arabic subtitled version of this program. Markets are going global but schools are cutting back on foreign language instruction. The answer - foreign language software. This program reviews several new programs that teach or translate a foreign language. Incuded are Learn to Speak Spanish 4.0 from Hyperglot, German Assistant for Windows from Microtac, Power Japanese from Bayware, Video Linguist: Learn from French TV, Language Explorer from Nordic Software, and the Chinese Language Kit from Apple. Originally broadcast in 1994. \n",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc161_foreign_language_software",
    episodeNumber: 161,
    ia_subject: "arabic; foreign; language;linguist; japanese;german; spanish; hyperglot"
},
{
    ia_title: "Computer Bowl VI - Part 2 - Arabic",
    ia_description: "Arabic subtitled version of this program. The conclusion of the sixth annual Computer Bowl trivia game between high tech types from the east coast and the west coast. This was the All Star edition with MVPs selected from the first five Computer Bowl games. Contestants included Bill Gates, Bill Joy, Mitch Kapor, Bob Frankston, Neil Colvin, and Pamela McCorduck. The questioners were Andy Grove and Stewart Cheifet. Originally broadcast from San Jose in 1994.",
    ia_identifier: "ar_cc163_computer_bowl_6_pt2",
    episodeNumber: 163,
    ia_year: 1994,
    ia_date: "1994-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1994;Television Programs;Computers: History;Computer Bowl;Bill Gates;San Jose;arabic; bill joy;mitch kapor; andy grove;quiz; contest"
},
{
    ia_title: "Plug and Play - Arabic",
    ia_description: "Arabic subtitled version of this program. Adding peripherals used to be a nightmare with a PC, having to manually figure out all kinds of settings and switches. Windows 95 promised to end all that with Plug and Play, though many users called it Plug and Pray. This program looks at the early efforts to simplify adding peripherals. Covered are sound cards, SCSI controllers, video cards, mice, CDROM drives, and PCMCIA cards. Also covered is Plug and Tell, which helped you figure out what settings had to be changed, and Compaq's Hot Docking technology. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc169_plug_and_play",
    episodeNumber: 169,
    ia_subject: "arabic; plug and play;peripherals;add-ins; add-ons"
},
{
    ia_title: "Computer Buying Guide 1994 - Arabic",
    ia_description: "Arabic subtitled version of this program. An annual review of cool new technology products for the holiday buying season, as selected by Stewart Cheifet, Paul Schindler of CMP, Tim Bajarin of Creative Strategies, and Ken Ratcliffe of PC Connection. Products reviewed include Lexmark's Ergonomic Keyboard, 7th Level's Complete Waste of Time, Banner Blue's Family Tree Maker, Maxis Gift Maker, Glider Pro, GPS Trailblazer, Greatest Paper Airplanes, the NEC Satellite Phone, Putt Putt from Humungous Entertainment, Sega's Road Rash II, the Simpsons Screen Saver from Berkeley Systems, Star Trek Interactive, T/Maker's Stradiwackius, and Wacom's Art Pad Dabble bundle.\nOriginally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc172_computer_buying_guide",
    episodeNumber: 172,
    ia_subject: "holiday; consumer; buying;shopping; computer; technology;christmas; arabic"
},
{
    ia_title: "Comdex Fall 1991 - Arabic",
    ia_description: "Arabic subtitled version of this program. On location coverage of the annual fall Comdex trade show in Las Vegas. Includes highlights of the Bill Gates keynote speech. Features analysis from Tim Bajarin of Creative Strategies. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "ar_cc173_comdex_fall",
    episodeNumber: 173,
    ia_subject: "comdex; fall; las vegas;trade show; 1991;arabic; subtitles; gates"
},
{
    ia_title: "Talking Computers - Arabic",
    ia_description: "Arabic subtitled version of this program. Almost ten years after this show was produced, we are still not talking to our computers. This program looks at several early attempts at a voice interface. Products demonstrated include VoiceUser for Windows, VoiceUser for WorkGroups, Wildfire, VPro, TruVoice, Dragon Dictate, Kurzweil Voice for Windows, Voice Organizer and Philips Dictation System. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc174_talking_computers",
    episodeNumber: 174,
    ia_subject: "arabic; talking; speech;synthesis; recognition;voice; dragon; philips"
},
{
    ia_title: "Interactive Music - Arabic",
    ia_description: "Arabic subtitled version of this program. Computers and the digital revolution forever changed the world of music. This program looks at several new approaches to creating and sharing music. Demonstrations include Vid Grid, Sound Toy, William Orbit Strange Cargo, So You Want to be a Rock & Roll Star, Rock & Roll On Your Own, Dylan:Highway 61 Interactive, Video Jam, and Vivace. Also featured is a visit to Todd Rundgren's sound studio in Sausalito, California and a preview of his CD-ROM entitled \"No World Order\". Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc175_interactive_music",
    episodeNumber: 175,
    ia_subject: "music; arabic;rock & roll; todd rundgren;compose"
},
{
    ia_title: "Digital Photo Finishing - Arabic",
    ia_description: "Arabic subtitled version of this program. As the popularity of digital cameras grew, photofinishing software followed. This program looks at several early examples of computer based photo processing. Demonstrations include Photoshop 2.5, Nikon's LS-10 CoolScan, PhotoFlash 2.0, Apple's QuickTake Camera, Paint Alchemy, Terrazzo, Picture Window 1.0, EverColor and ArtLink. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "ar_cc176_digital_photo",
    episodeNumber: 176,
    ia_subject: "digital; photography;processing; photoshop;camera"
},
{
    ia_title: "Greatest PC Games - Arabic",
    ia_description: "Arabic subtitled version of this program. A look at the hot new computer games of 1995. Games covered include Voyeur, Astronomica, Wing Commander III: Heart of the Tiger, Master of Magic, Nascar Racing, Front Page Sports: Football Pro '95, Daedalus Encounter from Mechadeus, and Loadstar: The Legend of Tully Bodine. Includes visits to Electronic Arts and Rocket Science Games and an interview with \"The Fat Man\", George Sanger. Originally broadcast in 1995.\nCopyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc177_pc_games",
    episodeNumber: 177,
    ia_subject: "games; video games;arabic; subtitled; 1995;computer"
},
{
    ia_title: "PC Sports - Arabic",
    ia_description: "Arabic subtitled version of this program. Computers and videogames have allowed couch potatoes to play sports and athletes to get better at their game. This program looked at several PC sports applications including Picture Perfect Golf, ESPN Baseball Tonight, UltraCoach for Windows, Mountain Biking, and Winning Hoops with Coack K. Also featured are an online golf tournament and Home Team Advantage, a computer based program to help coaches. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc178_pc_sports",
    episodeNumber: 178,
    ia_subject: "sports; biking; basketball;golf; coaching;"
},
{
    ia_title: "CES Special Las Vegas 1994 - Arabic",
    ia_description: "Arabic subtitled version of this program. On location coverage of the annual Consumer Electronics Show in Las Vegas. Featured analyst is Tim Bajarin, president of Creative Strategies. Includes highlights of the keynote speech by Microsoft's Bill Gates. This is the show where Microsoft introduced its infamous \"BOB\" interface.",
    ia_identifier: "ar_cc179_cbs_special",
    episodeNumber: 179,
    ia_subject: "bajarin; gates; microsoft;BOB; CES; consumer electronics;;las vegas"
},
{
    ia_title: "Learning On A Computer - Arabic",
    ia_description: "Arabic subtitled version of this program. Personal computers have become a major component of modern educational systems. This program looks at some of the strides being made in computer based learning. Product demonstrations include Measurement in Motion, Grammar Games, Tangible Math, Inside the SAT, and The Musical World of Professor Piccolo. Companies profiled are Apple, Davidson & Associates, Logal, Princeton Review, and Opcode Interactive. Also featured are a visit to an Electronic Learning Fair and the online University of Phoenix. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc182_learning_on_a_computer",
    episodeNumber: 182,
    ia_subject: "school; learning; education;phoenix; SAT;math; music; gramma"
},
{
    ia_title: "Losing Memory - Arabic",
    ia_description: "Arabic subtitled version of this program. If you were a DOS user back in the early 1990's, you had to deal with \"insufficient memory\" issues. Over and over again. This program looks at solutions for expanding computer memory. Demonstrations include how to install SIMMs, MemMaker, QAPlus for Windows, RAM Doubler 1.51, Quarterdeck's QEMM 7.5, Multimedia Cloaking Utility from Helix Software, and Netroom 3.0. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc183_losing_memory",
    episodeNumber: 183,
    ia_subject: "memory; ram; dimm; simm;qemm; arabic;quarterdeck"
},
{
    ia_title: "PC Video - Arabic",
    ia_description: "Arabic subtitled version of this program. The digital video revolution started to take hold in the mid nineties. This program looks at early examples of desktop video products. Demonstrations include QuickTime VR, Sigma Designs MPEG video, Video Director, Avid Video Shop, Video Machine Lite, Radius Edit, Video Vision, SGI's Set Top Box, CyberLab7, and QuickTime Conferencing. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc185_pc_video",
    episodeNumber: 185,
    ia_subject: "arabic; quicktime; digital video;mpeg; avid; sgi"
},
{
    ia_title: "Computer Bowl Special 1995 - Arabic",
    ia_description: "Arabic subtitled version of this program. Technology leaders from the East and West coasts go at it in the seventh annual Computer Bowl, a quiz show designed to see which team knows more about computer trivia. Guest questioner is Nicholas Negroponte. Contestants include Andy Herzfeld and Joseph Alsop. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc188_computer_bowl_special",
    episodeNumber: 188,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1995;Television Programs;Computers: History;Computer Bowl;negroponte;computer museum;alsop; herzfeld"
},
{
    ia_title: "Windows 95 - Arabic",
    ia_description: "Arabic subtitled version of this program. It was the biggest ever launch of a software product with stores opening at midnight and buyers around the world waiting to get their hands on... an operating system! It was Windows 95. This show looks at the hoopla surrounding the launch of Windows 95, the product itself, and several Windows 95 add-on products including Microsoft Office, Viking RAM Chips, Uninstaller, Trispectives Professional, and The Hive. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "ar_cc190_windows_95",
    episodeNumber: 190,
    ia_subject: "arabic; windows;larry magid; microsoft"
},
{
    ia_title: "Atari St",
    ia_description: "The Atari ST is a big hit in Europe but it's not very popular yet in the U.S. A look at some of the cool features that attract Atari fans.\nGuests: Jim Kent, Author; Vincent de Phillippo, Winners; Andrew Reese, START Magaz; Nathan Potechin, ISD Mktg Inc; Eric Peterson, Cogswell College; Gary Kildall, DRI\nProducts/Demos: Cyber Paint; Spectre 128Dyna Cadd; Calamus; Atari Mega 4Atari 1040 ST. Originally broadcast in 1989. Copyright 1989 Stewart Cheifet Productions.",
    ia_broadcastyear: 1989,
    ia_identifier: "atarist",
    ia_year: 1989,
    ia_date: "1989-04-25T00:00:00.000Z",
    ia_proddate: "1989-04-25T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Bus Wars",
    ia_description: "The battle over a standard for moving information in and out of a computer and inside a computer including a look at EISA, Nubus, AT, PC, ISA, and MCA.\nGuests: Bob Kutnick, AST Research; Richard Archuleta, HPChet Heath, IBMMichael Hoyle, Wells American; Winn Rosch, PC Magazine; Steve Beals, Infomax; Mark Orr, Apple\nProducts/Demos: AST Premium/286IBM PS/2 Model 60ZCompu; Star Convertible Bus PCApple Nubus. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "buswars",
    ia_year: 1988,
    ia_date: "1988-11-08T00:00:00.000Z",
    ia_proddate: "1988-11-08T00:00:00.000Z",
    ia_subject: "Episode year: 1988"
},
{
    ia_title: "Consumer Buyers Guide 1990",
    ia_description: "A guide to cool new high tech gifts for the holiday season. Featured are product recommendations from Jan Lewis, Paul Schindler, Chris Barr, Andrew Eisner, and Stewart Cheifet. Among the products demonstrated are Quicken, TurboTax, Fax-O-Matic, Stacker, Rampack, Grammatik, Lotus Magellan, After Dark, Play It By Ear, Bible Illustrator, Computer Critters, Where in Time is Carmen San Diego, Cosmic Osmo, Sky Shadow, Amanda Stories, Designer Fractal, and Visonary Software's Lifeguard. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "buyersguide",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "christmas;holiday;buyers"
},
{
    ia_title: "Consumer Buyers Guide 1988",
    ia_description: "A consumer's guide to cool holiday gifts for computer enthusiasts and gadget lovers.\nGuests: Gary Kildall, DRIPaul Schindler, CMPJan Lewis, Lewis Research; Wendy Woods, Newsbytes\nProducts/Demos: Inboard 386 PCNorton Utilities Adv Edition; OPTune; JT Fax Portable; Microtype Keyboard; King's Quest IVMacintosh IIAmanda Stories; Hyper; Animator; Shufflepuck; NEC Ultralite",
    ia_identifier: "buyersguide_2",
    ia_year: 1988,
    ia_date: "1988-12-06T00:00:00.000Z",
    ia_proddate: "1988-12-06T00:00:00.000Z",
    ia_subject: "Episode year: 1988"
},
{
    ia_title: "Personal Finance Software",
    ia_description: "Whether it's managing your personal budget or your investments, computer software has become a critical tool for financial management. This program looks at several leading software packages including Quicken, TurboTax, TaxCut, Window on Wall Street, and e.schwab. Also includes a visit to the IRS and a look at Citibank's new online banking service. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "cc1345_finance_banking_software",
    episodeNumber: 1345,
    ia_subject: "taxes;finance;investing"
},
{
    ia_title: "CD ROMs",
    ia_description: "The advent of CD-ROM storage changed the way people used personal computers and opened up a whole new range of software applications. This program looks at several examples including Microsoft Bookshelf, the Boeing Maintenance Manual, Media Mixer Retrieval Engine, The Visual Dictionary, N/Hance Systems 525E WORM Optical Disk Drive, Poisondex, Electronic Arts CD-I, and Knowledge Set. Guests include George Morrow, Gary Kildall, and Paul Schindler. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "cdroms",
    ia_subject: "optical;CD-ROM;compact disc"
},
{
    ia_title: "CD ROMs",
    ia_description: "In the early 1990's the computer industry settled on a CD-ROM standard and that fanned the growth of CD-ROMs as a storage medium. This program looks at several early CD-ROM applications including The Bureau of Electronic Publishing's U.S. History, Compton's Multimedia Encyclopedia, Warner New Media's String Quartet, the Computer Libray, Magazine Rack, the Health Reference Center, Semaphore's Zip4, and Mixed Up Mother Goose. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "cdroms_2",
    ia_subject: "CD-ROM;optical storage;multimedia"
},
{
    ia_title: "CD-ROM Software",
    ia_description: "The introduction of CD-ROMS enabled a whole new era of more robust software applications. This program looks at several examples including Educorp's Dictionary of the Living World, Wayzata's Space Time and Art, French Language Software from VIVA 2000, the Voyager Company's Silly Noisy House, the American Business Phone Book, and Great Literature on CDROM from the Bureau of Electronic Publishing. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "cdromsw",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "CD-ROM;optical storage;multimedia"
},
{
    ia_title: "CES 1991",
    ia_description: "Highlights from the annual winter Consumer Electronics Show in Las Vegas featuring new personal technology products. Guest's include Nolan Bushnell and T/Maker CEO Heidi Roizen. Products covered include IBM PS/1, Commodore CD-TV, Kodak Photo CD, Sansui Robot CD Changer, Franklin Concise Columbia Encyclopedia, Brother Powernote, Laser PC-4, Sega GameGear and the Miracle Piano Teaching System from Software Toolworks. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "ces_2",
    ia_year: 1991,
    ia_date: "1991-03-12T00:00:00.000Z",
    ia_subject: "CES;consumer electronics;gadgets"
},
{
    ia_title: "Comdex 1987",
    ia_description: "Highlights from the annual Comdex trade show in Las Vegas. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "comdex_2",
    ia_subject: "comdex"
},
{
    ia_title: "Comdex 1988",
    ia_description: "Complete coverage of the country's largest computer trade show, from Las Vegas.\nGuests: Jeong Hun Lee, KCIHenry Herrera, Glorious Union; Timothy Rowe, Globalink; Billy Anders, Soricon; Allen Frazier, D-P Tek; Lawrence Martin, Comp Integr\nProducts/Demos: IBM Microchannel PCKCI SL-250 Microchannel PCIntel Digital Video Interactive; Sony Rewritable Optical Drive; Gammafax CP Modem; Calera Truescan; Dauphin 386sx Laptop; Wysiwig Universal Word; Globalink Translation Processor; Syzygy Project Manager; Sharp Color Scanner JX-100Sharp JX-730 Color Inkjet Print; Tektronix Phaser CP Printer; Truevision Photon Paint. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "comdex_3",
    ia_year: 1988,
    ia_date: "1988-12-13T00:00:00.000Z",
    ia_subject: "Episode year: 1988"
},
{
    ia_title: "Computer Bowl II Part 1",
    ia_description: "The second annual Computer Bowl with East coast versus West coast to determine the Master of Computer Trivia. West coast team: John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler. East coast team: Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer. Guest questioner: Mitchell Kapor. Host: Stewart Cheifet. Originally broadcast in 1990. Copyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "compbowl1",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1990;Television Programs;Computers: History; Computer Bowl;Bill Gates"
},
{
    ia_title: "Computer Bowl II Part 2",
    ia_description: "The conclusion of the second annual Computer Bowl with East meeting West for the title of Master of Computer Trivia. West coast team: John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler. East coast team: Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer. Guest questioner: Mitchell Kapor. Host: Stewart Cheifet. Originally broadcast in 1990. Copyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "compbowl2",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1990;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "Computer Bowl III Part 1",
    ia_description: "The third annual Computer Bowl with East coast geeks up against West coast nerds to see who knows more about computer trivia. West coast team: Philippe Kahn, Heidi Roizen, Ed Juge, Dave House, David Liddle. East coast team: John Markoff, Pamela McCorduck, John Armstrong, James Clark, Samuel Fuller. Guest questioner: Bill Gates. Host: Stewart Cheifet. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "computerbowl",
    ia_year: 1991,
    ia_date: "1991-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1991;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "Connectivity",
    ia_description: "Stand alone personal computers were great, for a while, but soon it became important to connect individual PCs to share files, applications, and peripherals. This program looked at some early connectivity solutions. Included are demonstrations of NetWare Lite from Novell, the AE-3 Ethernet Adaptor from Artisoft, Microcom's LAN Bridge 6000, Newport Systems' LAN2LAN Mega Router, Chatterbox 4000, cc:Mail, the Compsphere 3800 Modem, and the Wireless WAN from Tetherless Access Ltd. Originally broadcast in 1991.\nCopyright 1991 Stewart Cheifet Productions",
    ia_broadcastyear: 1991,
    ia_identifier: "connectivity_2",
    ia_subject: "networks;LAN;connectivity"
},
{
    ia_title: "Decision Support Software",
    ia_description: "In the heyday of artificial intelligence and expert systems, it was thought that computers could make human like decisions. This program looks at several early examples. Products demonstrated include Decision Aide from Kepner-Tregoe, AT RISK! from Palisade, Super Tree from Strategic Decisions, and Teknowledge. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "decisionsoft",
    ia_subject: "artificial intelligence;expert systems;decision support software"
},
{
    ia_title: "Desktop Video 1990",
    ia_description: "Today we take for granted the fact that we can watch video on our computers, but in the early 1990s, that was a big innovation. This program looks at early examples of desktop video on the Amiga, the Mac, and the IBM PC. Demonstrations include the Amiga 2500, the Amiga video authoring system, the Pionner LaserDisk player, MacroMind's Director 2.0 for the Mac IIx, the Avid/1 Media Composer, the DVA-4000 video controller from VideoLogic, and the use of desktop video at the NASA Ames research center. Originally broadcast in 1990.\nCopyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "desktopvideo",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "amiga; macromedia;director; avid;videologic; macromind"
},
{
    ia_title: "Diagnostic Software",
    ia_description: "Remember IRQ settings, INITs, TSRs and \"out of memory\" messages? The early days of personal computers were confusing for most users and so a whole new category of software grew up around solving those problems - diagnostic software. This show looks at several examples including WinSleuth, Quarterdeck's Manifest, QEMM, Mac EKG 2.0, Snooper, QA Plus, and Norton Utilities. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "diagnosticso",
    ia_subject: "quarterdeck; dariana;norton; micromat; maxa;utilities"
},
{
    ia_title: "Computers and the Disabled",
    ia_description: "Computers can be a challenge for people with disabilities. This program looks at several options for making hardware and software that is user friendly for the disabled. Demonstrations include Berkeley Systems' Outspoken, Ke:nx, Co:Writer, Eureka A4, THINKable, Speech Viewer, the Unicorn Smart Keyboard, and ProsthesisWare. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "disabled_2",
    ia_subject: "blind;visually impaired;disabilities"
},
{
    ia_title: "Computer Displays",
    ia_description: "With color and graphics moving into the world of personal computers, display technology became an important subject. This program looks at several display solutions including Orchid Technology's Fahrenheit 1280 Graphics Accelerator card, NEC's MultiSync 5FG monitor, the Full Page Pivot Display and the Precision Color Display from Radius, and Mitsubishi's Diamond Pro 37\" monitor. Also includes highlights from the Seybold Conference and Apple's new two page color monitor. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "displays_2",
    ia_subject: "display technology;monitors;color"
},
{
    ia_title: "Computers in Education",
    ia_description: "An early look at how computers are being used in formal education. Guests include Professor Patrick Suppes of Stanford University and Glenn Kleiman, author of \"Brave New Schools\". Includes demonstrations of the LOGO and BASIC languages. Guest host is Herb Lechner of SRI International. Originally broadcast in 1984.Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "education_2",
    ia_year: 1984,
    ia_date: "1984-01-01T00:00:00.000Z",
    ia_subject: "education; schools; university;palo alto; stanford; suppes;kleiman; LOGO; BASIC"
},
{
    ia_title: "Comdex Spring 1992",
    ia_description: "Highlights of the annual spring Comdex show in Chicago. Featured guests include Bill Gates and Stewart Alsop. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_1001"
},
{
    ia_title: "Comdex Fall 1992",
    ia_description: "Highlights from the annual fall Comdex show in Las Vegas where the buzzword this year was \"multimedia\". Featured guests include Bill Gates and Tim Bajarin. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_1021"
},
{
    ia_title: "Consumer Electronics Show 1993",
    ia_description: "Highlights of the annual winter Consumer Electronics Show (CES) from Las Vegas. Featured are new products from Sony, Matsushita, 3DO, and MCA. Guests include Tim Bajarin, President of Creative Strategies. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1023"
},
{
    ia_title: "SPA Codie Awards 1993",
    ia_description: "Highlights of the annual Codie Awards presentation from the Software Publishers Association. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1031"
},
{
    ia_title: "Beginners Guide to PCs",
    ia_description: "An introduction to personal computers for newbies. Topics include the basic components of a PC, how to find tech support, managing memory, a guide to online forums, and a review of expansion slots. Guests include Jim Louderback of PC Week Labs. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_1040",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1992;Television Programs;Computers: History"
},
{
    ia_title: "Creative Writing Software",
    ia_description: "Word processors are great, but this program looks at software tools that help you create, not just write. Featured demonstrations include WritePro, Plots Unlimited, Collaborator II, Movie Master 4.0, WordPerfect Rhymer, FirstAid for Writers, Quotemaster Plus, StoryBook Weaver, Big Book Maker, and Storymation. Guests include writers Sol Stein and Tom Sawyer. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1046",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z"
},
{
    ia_title: "Organizer Software",
    ia_description: "A review of new products in the personal information management category. Demonstrations include White Crow Office Manager, In Control 2.0, PackRat 5.0, Lotus Organizer 1.0, Casio Personal Organizer, and askSAM. Originally broadcast in 1993.Copyright Stewart Cheifet Productions 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1048"
},
{
    ia_title: "Self Improvement Software",
    ia_description: "A review of self improvement software titles including Mindviewer, Betty Crocker's Eat & Lose Weight, HealthDesk, Speed Reader, Insight, Joe Weider Personal Fitness Trainer, and Career Design. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1050"
},
{
    ia_title: "Comuter Bowl V Part One",
    ia_description: "The fifth annual Computer Bowl, with teams from the east coast and west coast battling to see who knows more about computer trivia. Players include Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, and Jerry Kaplan. The questioners are Bill Gates and Stewart Cheifet. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1051"
},
{
    ia_title: "Computer Bowl V Part Two",
    ia_description: "The finale of the fifth annual computer trivia contest between teams representing the east coast and the west coast. The series is tied at two victories for each side. Contestants include Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, and Jerry Kaplan. Questioners are Bill Gates and Stewart Cheifet. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1052",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1993;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "ETRE Barcelona 1993",
    ia_description: "Coverage of the annual European Technology Roundtable Exhibition from Barcelona, Spain. Guests include Bill Gates, Esther Dyson, Michael Rogers, Philippe Kahn, Mark Eppley, Alan Ashton, Peter Sprague, and Masayoshi Son. Product demonstrations include Windows NT and groupware applications. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1106"
},
{
    ia_title: "High Tech Israel",
    ia_description: "A visit to the Middle East to see the booming high-tech industry in Israel. Featured are Intel and Microsoft R&D centers plus many local Israeli companies doing work ranging from network communications to speech recognition and natural handwriting recognition. Also demonstrations of technology spinoffs from the Israeli military. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1109",
    ia_subject: "israel;middle east;tel aviv"
},
{
    ia_title: "PDAs",
    ia_description: "A look at the state of the art in personal digital assistants. Products demonstrated include the Apple Newton Message Pad, Casio's Zoomer, AT&T's EO 440 Personal Communicator, Sharp's PI-7000 Expert Pad, and the HP 100LX. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1113"
},
{
    ia_title: "Pentium PCs",
    ia_description: "A look at the first generation of Pentium based personal computers. Included are demonstrations of new Pentium PCs from Gateway, Compaq, and ALR (Advanced Logic Research). Also a visit to Intel Labs to see how Pentium chips are made and a visit to PC Week Labs to see their evaluation process for new Pentium PCs. Guests include Ken Lowe of Dataquest and Jim Louderback of PC Week. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1114"
},
{
    ia_title: "MacWorld San Francisco 1994",
    ia_description: "Highlights from the annual west coast MacWorld conference, shot on location in San Francisco. This was the tenth anniversary of MacWorld where the Power PC and Newton applications were introduced. Also featured clips from the famous 1984 Macintosh SuperBowl commercial. Guests include Tim Bajarin of Creative Strategies, Rik Mislewski of MacUser, Jim Gable of Apple, Mark Zimmer of Fractal Design, and Paul Brainerd of Aldus. Originally broadcast in 1994. Copyright Stewart Cheifet Productions 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "episode_1119"
},
{
    ia_title: "Green PCs",
    ia_description: "In 1992 the EPA launched the Energy Star Computer Program to encourage the production of environmentally friendly computers. This program looked at several approaches including PC Ener-G-saver, Green Explorer, the Macintosh LC 575, the LaserJet 4L, and the Compaq Presario 425. Also featured are visits to a computer recycling center in California, a computer recycling center in New Jersey, and Greendisk, a company in Seattle that recycles floppy disks. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "episode_1124"
},
{
    ia_title: "Comdex 1993",
    ia_description: "Highlights from the 15th annual fall COMDEX trade show in Las Vegas. More than 75 products are reviewed in the categories of peripherals, portables, PDAs, PCMCIA cards, wireless, operating systems, business applications, CD-ROM software, communications, networking, and multimedia. Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1130"
},
{
    ia_title: "The Internet",
    ia_description: "It wasn't quite the World Wide Web yet, but everybody started hearing about this thing called \"the Internet\" in 1993. It was being called the Information Superhighway then. This program looks at the earliest stages of the Internet including Aladdin Systems SITComm, a Macintosh communications program for Internet access, and the WELL (Whole Earth Lectronic Link), an early online community. Also featured is a visit to the former Bell Labs in New Jersey (now Bellcore) for demonstrations of internet based teleconferencing, video on demand, ISDN, and optical network technology; a preview of the World Wide Web as used at NASA; a visit to where it all began, ARPA, the Advanced Research Projects Agency in Virgnia; and a look at the Internet Multicasting Service in Washington, the first Internet radio station. Guests include Brendan Kehoe, author of \"Zen and the Art of the Internet\", Howard Rheingold, author of \"The Virtual Community\", Dr. Robert Kahn, former found of ARPA, and Carl Malamud, author of \"Exploring the Internet\". Originally broadcast in 1993. Copyright 1993 Stewart Cheifet Productions.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1134",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z"
},
{
    ia_title: "Consumer Buying Guide 1993",
    ia_description: "The annual holiday season review of cool high-tech gadgets and the latest computer goodies. Products featured include Sim City 2000, Creative Writer, Myst, CyberPuppy, Crystal Crazy, Rock Rap and Roll, The Tortois and the Hare, Imagicard, The Memphis, NHL Hockey, CyberMan 3d Mouse, VideoShow Presenter, AXIS the Gamecheater, Morphman, and Mac-in-DOS. Guests include Gina Smith, Paul Schindler, and Tim Bajarin. Also a visit to an Amiga store for cool new Commodore products. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1136"
},
{
    ia_title: "DOS 6.2",
    ia_description: "The big news in 1993 was Microsoft's new version 6.2 of MS-DOS. Demonstrations include MS-DOS 6.0, MS-DOS 6.2, Stacker 3.1, Norton Utilities 7.0, and IBM's PenDOS. Featured are visits to Microsoft DOS labs in Redmond, Washington and the Ziff Davis test labs in Foster City, California. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "episode_1149"
},
{
    ia_title: "Computer Bowl I - Part One",
    ia_description: "The first ever annual Computer Bowl featuring teams from the Route 128 area in Boston and the Silicon Valley area of San Francisco to see which side knows more about computer trivia. Contestants included Bill Joy, Mitch Kapor, Esther Dyson, and David Bunnell. The questioner was William Hearst III. The event took place in Boston. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "episode_602",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1988;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "Computer Bowl I - Part Two",
    ia_description: "The conclustion of the first ever Computer Bowl, featuring teams from the Route 128 area in Boston and the Silicon Valley area of San Francisco, to see which side knows more about computer trivia. Contestants included Bill Joy, Mitch Kapor, Esther Dyson, and David Bunnell. The questioner was William Hearst III. The event took place in Boston. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "episode_603",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1988;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "High Tech France - Part Two",
    ia_description: "The second part of our review of French technology, shot on location in France. Included are ISDN, fiber optics, smart cards, the 185 mph TGV high-speed train, and a look inside the workings of the supersonic Concorde. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "episode_724"
},
{
    ia_title: "Flight Simulators",
    ia_description: "A review of flight simulator software. Included are demonstrations of Falcon AT 1.11, F-15 Strike Eagle II, Jet Fighter 1.5, A-10 Tank Killer 1.2, subLOGIC's Flight Simulator ATP 1.0, and Microsoft's Flight Simulator 4.0. Guests include Gilman Louie, President of Spectrum Holobyte, Major Bill Stealey, President of MicroProse, and Moses Ma, Chairman of Velocity Development. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "episode_823"
},
{
    ia_title: "Computers and Sports",
    ia_description: "A look at how computers are being used to play, train, and learn about sports. Featured products include Playball, Proline, Bedas-2 Biovec System, Tekna's Computek, Oceanic's Datamax Sport, Peak 3D, Desktop Logbook, Sea Quest SME Dive Computer, and Jack Nicklaus' Unlimited Golf & Course Design. Also includes a look at how HP computers are being used to design and plan for the America's Cup race and a visit with the San Francisco 49ers to see how they use computer databases to catalog plays. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_846"
},
{
    ia_title: "Computer Bowl III Part 2",
    ia_description: "The conclusion of the third annual Computer Bowl contest, held as a fund-raiser for the Computer Museum of Boston. The game pits a team from the east coast against a squad from the west coast to see who knows more about computer trivia. Contestants include John Markoff, Dave House, Ed Juge, Pamela McCorduck, Heidi Roizen, and Philippe Kahn. The judges are John Doerr and Pat McGovern. The questioners are Bill Gates and Stewart Cheifet. The event occurred at the San Jose Convention Center. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_851",
    ia_year: 1991,
    ia_date: "1991-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1991;Television Programs;Computers: History;Computer Bowl;Bill Gates"
},
{
    ia_title: "Macintosh System 7.0",
    ia_description: "A look at the new 7.0 operating system for the Macintosh. Demonstrations include the finder, file sharing, publish & subscribe, virtual memory, and aliasing. Applications featured include Claris Works and Deneba's Canvas. Also a comparative look at the new DOS 5.0. Originally broadcast in 1991.\nCopyright 1991 Stewart Cheifet Productions",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_909",
    ia_year: 1991,
    ia_date: "1991-01-01T00:00:00.000Z"
},
{
    ia_title: "Foreign Language Software",
    ia_description: "A review of computer programs that help you learn or understand a foreign language. Featured products include Language Assistant Series: Italian, Transparent Language: German/French/Latin, Speak to the World in Spanish, Hyperglot Chinese, and Hyperglot Japanese. Also visits to the Foreign Language Center of the Defense Language Institute in Monterey, California and the Voice of America's System for News and Programming (SNAP) in Washington D.C. which operates in 45 different languages. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_920"
},
{
    ia_title: "Tandy / Radio Shack Computers",
    ia_description: "Many computer users got their start with the TRS-80, the Tandy Color Computer, or the Model 100 portable computer. This program looks at the role Radio Shack played in the early launch of personal computers and the hordes of users who still love their old Tandy PCs. Featured demonstrations include the Tandy 2500 SX/20, the Tandy 4033 LX, the GRiD 1550cd, the GRiD 325sc. Also shown is the original TRS-80 and some of the earlier cassette based software such as Dancing Demon. Guests include Howard Elias, Vice President of Tandy Computers and Mark Paulson, leader of the Color Computer User's Group. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_921",
    ia_year: 1991,
    ia_date: "1991-01-01T00:00:00.000Z",
    ia_subject: "tandy;radio shack"
},
{
    ia_title: "Tax Preparation Software",
    ia_description: "A look at early versions of tax preparation software. Included are demonstrations of J. K. Lasser's Your Income Tax, Timeworks' EasyTax 1991, ChipSoft's TurboTax for Windows and MacInTax, and Andrew Tobias' TaxCut for Windows. Also, a visit to the IRS headquarters in Philadelphia to see how they use computers and a look at how tax preparation software is tying in to personal finance packages. An example is Parson's Personal Tax Edge and Parson's Money Counts. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_927"
},
{
    ia_title: "Laptops and Handhelds",
    ia_description: "Portability was becoming a big issue in the early 90's. This program looked at several new portable computing solutions including Grid Systems RS Wireless, the Momenta Pentop Computer, NEC's Ultralite Cellular Workstation, IBM's PC Radio, Apple's PowerBook 100, AST's Premium Exec Color Notebook, and HP's 95LX Palmtop PC. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_929"
},
{
    ia_title: "Computer Games",
    ia_description: "A look at the hottest computer games in the early 1990's. Included are Wordtris, Crisis in the Kremlin, Earl Weaver Baseball II, Railroad Tycoon, Playmaker Football 2.0, King's Quest V, The Games: Winter Challenge, and TSN (The Sierra Network). Also features a visit to Lucasfilm Games and their development process for titles such as Indiana Jones, The Fate of Atlantis, Monkey Island 2, and Lechuck's Revenge. Another segment looks at the InGolf Simulator from TOP Pro Sports, a game which actually teaches you how to play better golf. Guests include Gilman Louie, President of Spectrum Holobyte, Michael Brook of Electronic Arts, and Bruce Shelley of MicroProse. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_932",
    ia_subject: "monkey island; indiana jones; baseball; king's quest;"
},
{
    ia_title: "Consumer Buying Guide 1991",
    ia_description: "An annual holiday season guide to the coolest new high tech gadgets and computer products. Featured are Triftan Digital Pinball Machine, DigiVideo, Quicken for Mac, Painter, Armx, PowerBook 170, Power Bundle, Sim Ant, Wrist Mac, About Cows, Far Side Computer Calendar, Wedding Planner, Wordstar for Windows, I Hate Algebra, Screen Craze, Lemmings, Thumbelina, Agenda, Norton Desktop, and Logitech's Fotoman. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_937"
},
{
    ia_title: "Build Your Own PC",
    ia_description: "Why buy a computer when you can build your own? This program looks at various approaches to assembling your own PC. Featured are the Chips and Technologies F8680 chip which is a complete PC on a chip solution, instructions on how to build your own 386 PC and 386sx PC, advice on how to perform a do-it-yourself upgrade to a 486s PC, and tips on building your own computer using components from ALR, Advance Logic Research. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "episode_940"
},
{
    ia_title: "Computer Video",
    ia_description: "The worlds of television and computers are quickly converging. This program looks at new video applications on personal computers. Included are the Video Toaster from NewTek, Impact Vision 24, and Scala for the Amiga, Video Spigot from SuperMac, Adobe Premiere, IBM's PS/2 TV, and the Actionmedia II board. Originally broadcast in 1992. Episode #941. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_941",
    ia_subject: "video; toaster; newtek; amiga; supermac; adobe;"
},
{
    ia_title: "Space and Astronomy Software",
    ia_description: "The first computer game ever was SpaceWars, written in 1962. Ever since then there has been a close relationship between space science and computer science. NASA could not exist without today's powerful computers. This program looks at space and astronomy software for consumers. Included are games such as Star Trek V, Space Quest V, Wing Commander II, and Spaceship Warlock. Astronomy programs demonstrated include Voyager the Dynamic Sky Simulator, The Sky for Windows, STS Orbit, VGA Trek, Star Trek: The Kobayashi Alternative, and Dance of the Planets. Also included is a visit to the Star Trek 25th Anniversary Exhibit at the Smithsonian Air and Space Museum in Washington. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_946",
    ia_subject: "nasa;space;astronomy"
},
{
    ia_title: "Easy to Use Databases",
    ia_description: "Database software is sometimes overwhelming to average users. This looks at some databases which are powerful yet easy to use. Included are Panorama from ProVUE, FileMaker Pro from Claris, Borland's Paradox, and FoxPro 2.0. Originally broadcast in 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_947"
},
{
    ia_title: "Computers and Kids",
    ia_description: "A look at how young people are using computers in school and at home. Featured applications include Operation Neptune from The Learning Company, HyperCard applications created by students, and several other programs created by middle school students. Also featured is a visit to Electronic Arts where students are used in a focus group to test new games. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_949",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z"
},
{
    ia_title: "Computer Bowl IV - Part One",
    ia_description: "The fourth annual Computer Bowl contest in which techies from the east coast and the west coast challenge each other to see who knows more about computer trivia. Participants include John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, and Bill Machrone. The event took place in Boston. The questioners are Bill Gates and Stewart Cheifet. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_950",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1992;Television Programs;Computers: History;Computer Bowl;Bill Gates;Boston"
},
{
    ia_title: "Computer Bowl IV - Part Two",
    ia_description: "The conclusion of the fourth annual Computer Bowl contest in which techies from the east coast and the west coast challenge each other to see who knows more about computer trivia. Participants include John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, and Bill Machrone. The event took place in Boston. The questioners are Bill Gates and Stewart Cheifet. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "episode_951",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1992;Television Programs;Computers: History;Computer Bowl;Bill Gates;Boston"
},
{
    ia_title: "Fax Boards",
    ia_description: "A look at how to turn your PC into a fax machine by adding a fax board.\nGuests: Joel Borden, The Complete PCJoyce Lemons, Quadram; Steve Siacotos, Xerox; Nick Baran, Byte; Rich Bader, Intel; Gary Kildall, DRI\nProducts/Demos: Complete PC FAXJT Fax Portable; Datacopy Microfax; Intel Connection Coprocessor.\nCopyright 1989 Stewart Cheifet Productions.",
    ia_identifier: "faxboards",
    ia_year: 1989,
    ia_date: "1989-03-14T00:00:00.000Z",
    ia_proddate: "1989-03-14T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "File Compression",
    ia_description: "As files got larger and disk storage capacity stagnated, software developers came up with utilities to compress and shrink the size of files. This program looks at several examples including PKZip, Stacker, StuffIt Deluxe, DoubleUp, VideoSpigot, ReelTime, PicturePress, Impressit, Handmade Software, and Disk Doubler. Guests include Phil Katz, president of PKWare; Gary Clow, president of Stac Electronics; and David Schargel, president of Aladdin Systems. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "filecompress",
    ia_subject: "utilities; file size;file size;zip; stuffit"
},
{
    ia_title: "Flight Simulators",
    ia_description: "A review of flight simulator software. Included are demonstrations of Falcon AT 1.11, F-15 Strike Eagle II, Jet Fighter 1.5, A-10 Tank Killer 1.2, subLOGIC's Flight Simulator ATP 1.0, and Microsoft's Flight Simulator 4.0. Guests include Gilman Louie, President of Spectrum Holobyte, Major Bill Stealey, President of MicroProse, and Moses Ma, Chairman of Velocity Development. Originally broadcast in 1990.\nCopyright 1990 Stewart Cheifet Productions",
    ia_broadcastyear: 1990,
    ia_identifier: "flightsimula",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",

},
{
    ia_title: "Font City",
    ia_description: "The advent of desktop publishing software got people thinking about fonts and the endless choice of ways to present text on a computer. This program looks at the art of font selection. Demonstrations include WordPerfect, PostScript, HP LaserJet III, TypeAlign, Type On Call, Adobe Type Manager, MacWrite, Apple StyleWriter, Apple LaserWriter, Bitstream's FaceLift, and FontMonger. Originally broadcast in 1991. Copyright Stewart Cheifet Productions 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "fonts_2",
    ia_year: 1991,
    ia_date: "1991-01-01T00:00:00.000Z",
    ia_subject: "fonts: desktop publishing;adobe; macintosh;apple; DTP"
},
{
    ia_title: "Foreign Language Software",
    ia_description: "A look at computer hardware and software that help you translate and learn foreign languages.\nGuests: Axel Beyreuther, Intl Computer; Marty Goodman, Delphi; Bob Sullivan, Anonae Software; Dr. Martin Rice, Hyper; Glot; Gary Kildall, DRI\nProducts/Demos: Logos Computer System; Learn German; Delphi; Learn Japanese; Learning Russian",
    ia_identifier: "foreignlangu",
    ia_proddate: "1989-04-04T00:00:00.000Z",
    ia_subject: "language;translation;foreign; international"
},
{
    ia_title: "European Technology Roundtable Exhibition Barcelona 1993 - French",
    ia_description: "French language version of this program. Highlights of the annual European Technology Roundtable Exhibition held in 1993 in Barcelona, Spain. Guests include Esther Dyson, John Warnock, Steve Case, and Phillipe Kahn. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "fr_cc166_etre_special",
    episodeNumber: 166,
    ia_subject: "etre; aol; steve case;;esther dyson; john warnock;barcelona; french; france"
},
{
    ia_title: "Plug and Play - French",
    ia_description: "French language version of this program. Adding peripherals used to be a nightmare with a PC, having to manually figure out all kinds of settings and switches. Windows 95 promised to end all that with Plug and Play, though many users called it Plug and Pray. This program looks at the early efforts to simplify adding peripherals. Covered are sound cards, SCSI controllers, video cards, mice, CDROM drives, and PCMCIA cards. Also covered is Plug and Tell, which helped you figure out what settings had to be changed, and Compaq's Hot Docking technology. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "fr_cc169_plug_and_play",
    episodeNumber: 169,
    ia_subject: "french; france;peripherals; windows;compaq; pcmcia"
},
{
    ia_title: "Virtual Meetings - French",
    ia_description: "French language version of this program. The advent of the internet meant people could now start communicating and collaborating over the web. This program looks at several early examples of virtual meeting technology. Demonstrations include Cross Ties for Workgroups, Groupware for Windows from Ventana, HP's OmniShare, CU-See Me, Intel's ProShare 200, the Sharevision PC3000 from Creative Labs, VIVO 320 from Vivo Software, AT&T's VideoPhone, and Sony's Magic Link PDA. Guests include Andrew Seybold. Originally broadcast in 1994. Copyright 1994 Stewart Cheifet Productions.",
    ia_broadcastyear: 1994,
    ia_identifier: "fr_cc171_virtual_meetings",
    episodeNumber: 171,
    ia_subject: "groupware; sony;at&t; seybold;proshare"
},
{
    ia_title: "Interactive Music - French",
    ia_description: "French language version of this program. Computers and the digital revolution forever changed the world of music. This program looks at several new approaches to creating and sharing music. Demonstrations include Vid Grid, Sound Toy, William Orbit Strange Cargo, So You Want to be a Rock & Roll Star, Rock & Roll On Your Own, Dylan:Highway 61 Interactive, Video Jam, and Vivace. Also featured is a visit to Todd Rundgren's sound studio in Sausalito, California and a preview of his CD-ROM entitled \"No World Order\". Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc175_interactive_music",
    episodeNumber: 175,
    ia_subject: "french; france;music; todd rundgren;digital; sharing"
},
{
    ia_title: "CES Special Las Vegas 1994 - French",
    ia_description: "French language version of this program. On location coverage of the annual Consumer Electronics Show in Las Vegas. Featured analyst is Tim Bajarin, president of Creative Strategies. Includes highlights of the keynote speech by Microsoft's Bill Gates. This is the show where Microsoft introduced its infamous \"BOB\" interface.",
    ia_identifier: "fr_cc179_cbs_special",
    episodeNumber: 179,
    ia_subject: "french; france; ces; consumer electronics;las vegas; bob; bill gates;microsoft"
},
{
    ia_title: "OS-2 Warp - French",
    ia_description: "French language version of this program. In the mid 1990's, it wasn't yet an all Windows world. A battle was on between Microsoft's Windows and IBM's OS/2. This program compared the two operating systems and various add-ons for Windows and OS/2. Products demonstrated include Windows 95, OS/2 Warp, Voice Pilot for OS/2, and Colorworks for OS/2. Guests include IBM's David Barnes and syndicated columnist Dan Gillmor. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc180_os-2_warp",
    episodeNumber: 180,
    ia_subject: "ibm; operating system;france; french;windows; david barnes"
},
{
    ia_title: "PC Video - French",
    ia_description: "French language version of this program. The digital video revolution started to take hold in the mid nineties. This program looks at early examples of desktop video products. Demonstrations include QuickTime VR, Sigma Designs MPEG video, Video Director, Avid Video Shop, Video Machine Lite, Radius Edit, Video Vision, SGI's Set Top Box, CyberLab7, and QuickTime Conferencing. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc185_pc_video",
    episodeNumber: 185,
    ia_subject: "avid; quicktime; mpeg;sgi; radius"
},
{
    ia_title: "The Internet - French",
    ia_description: "French language version of this program. In the mid 1990's many people were on line, but the internet and the world wide web were still a new phenomenon. This program looks at the new open world of the web. Demonstrations include Eudora, Anarchy, the WELL, WinCIM, InterACT.net, and HoTMetal Pro HTML Editor. Guests include New York Times technology writer John Markoff. Also features a profile of the band Severe Tire Damage, the first band to ever perform live over the internet. Originally broadcast in 1995. Copyright 1995 Stewart Cheifet Productions.",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc187_the_internet",
    episodeNumber: 187,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "french; france; internet;web; eudora; well; html;severe tire damage"
},
{
    ia_title: "Computer Bowl VII - 1995 - French",
    ia_description: "French language version of this program. Technology leaders from the East and West coasts go at it in the seventh annual Computer Bowl, a quiz show designed to see which team knows more about computer trivia. Guest questioner is Nicholas Negroponte. Contestants include Andy Herzfeld and Joseph Alsop. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc188_computer_bowl",
    episodeNumber: 188,
    ia_year: 1995,
    ia_date: "1995-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1995;Television Programs;Computers: History;Computer Bowl;french; france;game; quiz; negroponte"
},
{
    ia_title: "Windows 95 - French",
    ia_description: "French language version of this program. It was the biggest ever launch of a software product with stores opening at midnight and buyers around the world waiting to get their hands on... an operating system! It was Windows 95. This show looks at the hoopla surrounding the launch of Windows 95, the product itself, and several Windows 95 add-on products including Microsoft Office, Viking RAM Chips, Uninstaller, Trispectives Professional, and The Hive. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc190_windows_95",
    episodeNumber: 190,
    ia_subject: "french; france;windows; microsoft;windows 95; win 95"
},
{
    ia_title: "Mac OS - French",
    ia_description: "French language version of this program. In the post Steve Jobs era, Apple started licensing other companies to produce Macintosh clones. And there was a new Mac operating system 8.0, code named Copland. This program looks at the new Mac clones and the new OS. Products demonstrated include the System 100 from Radius, the Genesis MP from DayStar Digital, and the Power 100 from Power Computing. Applications demonstrated include Adobe Photoshop and Personal Oracle 7. Also featured are the new Apple Macintosh 7100 and 8100 models. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc191_mac_os",
    episodeNumber: 191,
    ia_subject: "french; france;apple; macintosh;clones; os; operating system"
},
{
    ia_title: "Smart TV - French",
    ia_description: "French language version of this program. Convergence was the buzz word of 1995 as analysts predicted the computer and the television set would merge into one box. One aspect of this convergence was the so-called Smart TV. This program demonstrates some examples including the Malachi board which lets you download software into your PC using a standard broadcast signal (not a cable modem), Microware's DAVID (Digital Audio Video Interactive Decoder), HP's Kayak set top box, Philips' DET100 set top box, the Stellar set top box, DIVICOM's set top box, and Oracle's video authoring tools. Originally broadcast in October 1995.\n",
    ia_identifier: "fr_cc192_smart_tv",
    episodeNumber: 192,
    ia_subject: "french; france;smart tv; convergence;intelligent tv"
},
{
    ia_title: "Computers and Health Care  - French",
    ia_description: "French language version of this program. A look at how the health care industry is using computer technology. Products demonstrated include The Doctor's Book of Home Remedies, Multimedia Workout, DynaPulse 200M, The Family Doctor, Stanford University's Pain Clinic, and I-3 Design's Stretchercise. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc193_computers_and_health_care",
    episodeNumber: 193,
    ia_subject: "doctor; medicine;stanford; cure; remedy;exercise"
},
{
    ia_title: "Mac Clones and Mac OS Update - French",
    ia_description: "French language version of this program. In the post Steve Jobs era, Apple started licensing other companies to produce Macintosh clones. And there was a new Mac operating system 8.0, code named Copland. This program looks at the new Mac clones and the new OS. Products demonstrated include the System 100 from Radius, the Genesis MP from DayStar Digital, and the Power 100 from Power Computing. Applications demonstrated include Adobe Photoshop and Personal Oracle 7. Also featured are the new Apple Macintosh 7100 and 8100 models. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc202_mac_os_updated",
    episodeNumber: 202,
    ia_subject: "french; macintosh;steve jobs; apple;OS; clones"
},
{
    ia_title: "Smart TV - French",
    ia_description: "French language version of this program. Convergence was the buzz word of 1995 as analysts predicted the computer and the television set would merge into one box. One aspect of this convergence was the so-called Smart TV. This program demonstrates some examples including the Malachi board which lets you download software into your PC using a standard broadcast signal (not a cable modem), Microware's DAVID (Digital Audio Video Interactive Decoder), HP's Kayak set top box, Philips' DET100 set top box, the Stellar set top box, DIVICOM's set top box, and Oracle's video authoring tools. Originally broadcast in October 1995. \n",
    ia_identifier: "fr_cc203_smart_tv",
    episodeNumber: 203,
    ia_subject: "convergence; television;HP; Philips; Microware;divicom; oracle"
},
{
    ia_title: "Information Overload  - French",
    ia_description: "French language version of this program. A look at different ways to manage the glut of information showing up on computers and other storage devices. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "fr_cc205_information_overload",
    episodeNumber: 205,
    ia_subject: "french; france;information; PIM;daytimer"
},
{
    ia_title: "ETRE Madrid 1995 Part 2 - French",
    ia_description: "French language version of this program. Coverage of the annual European Technology Roundtable Exhibition conference held in Madrid. Featured guests include Microsoft's Bill Gates, Esther Dyson, Netscape's Jim Clark, and David Kirkpatrick of Fortune magazine. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "fr_cc207_etre_part_2",
    episodeNumber: 207,
    ia_subject: "madrid; etre; european;microsoft; dasar; vieux;;netscape; dyson"
},
{
    ia_title: "High Tech France - Part One",
    ia_description: "A look at the high-tech industry in France, shot on location in Paris. The focus of this program is the MiniTel system, the French precursor to the Internet. Applications demonstrated include banking, home shopping, classifieds, news, and advertising. Also includes a visit to U.S. West in Omaha which was one of the first American companies to experiment with the MiniTel technology. Originally broadcast in 1990. Copyright Stewart Cheifet Productions 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "frenchtech1",
    ia_subject: "french;minitel;uswest"
},
{
    ia_title: "Computer Games",
    ia_description: "A look at early computer games. Featured are Earl Weaver Baseball, Ferrari Formula One, Tower of Myraglen, and Shanghai. Includes a visit to Electronic Arts customer support department and an interview with author and game designer Douglas Adams. Featured studio guests include game designers Richard Seaborne, Jeff Lefferts, and Brodie Lockard. Originally broadcast in 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "games1",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1988;Television Programs;Computers: History;Gaming"
},
{
    ia_title: "Computer Games",
    ia_description: "A look at some of the leading computer games in the late 1980's. Demonstrations include Chuck Yeager's Advanced Flight Trainer, Accolade's Mean 18 Golf, Apache Strike, Beyond Dark Castle, The Other Side, and Strategic Conquest. Also features an early look at CompuServe's online games. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "games2",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1989; Television Programs; Computers: History;Gaming;CompuServe"
},
{
    ia_title: "The Global Software Market",
    ia_description: "As the decade of the nineties began, it became clear the United States was dominating the world software market. This program is an on-location report on an international software conference, presented by the Software Publishers Association, in Cannes, France. Guests include Bill Gates, Phillipe Kahn, Esther Dyson, Stewart Alsop, Heidi Roizen, Doug Carlston, and Kirk Loevner. Originally broadcast in 1990. Copyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "globalsw",
    ia_subject: "SPA;software;international"
},
{
    ia_title: "Groupware 1991",
    ia_description: "Groupware was the buzzword of the early 1990s as users wanted to find ways to connect their personal computers, their applications and their data, and find platforms for sharing and collaborative work. This programs looks at several early examples including Lotus Notes, Higgins, Meeting Maker, Instant Update, Aspects, and BeyondMail. Originally broadcast in December 1991.",
    ia_identifier: "groupware_2",
    ia_broadcastyear: 1991,
    ia_subject: "lotus notes;collaboration;meeting maker"
},
{
    ia_title: "Home PCs 1990",
    ia_description: "After disasters like IBM's PC Jr and the failure of PC companies like Texas Instruments and Atari, the future of home personal computers didn't look so good. But in 1990 a new generation of home PCs brought the business back. This program looks at the products that led to this rebirth, including the IBM PS/1, the Tandy 1000, the Magnavox Headstart, the Macintosh LC and the Mac Classic. Also includes coverage of the Commodore 64 and analysis from Dataquest. Originally broadcast in 1990. Copyright Stewart Cheifet Productions 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "homepcs",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "apple; mac; macintosh;tandy; ibm; TI;Philips; magnavox; atari; commodore"
},
{
    ia_title: "Hypercard",
    ia_description: "One of the precursors of hypertext and hyperlinks was Hypercard, originally introduced by Apple in 1987. This program looks at the status of Hypercard applications including Hypercomposer, Take One, Culture 1.0, Mission: The Moon, SuperCard, and CAMEO. Guests include Apple Fellow and Hypercard creator Bill Atkinson. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "hypercard_2",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1990;Television Programs;Computers: History;Hypertext;Hypercard;Apple"
},
{
    ia_title: "Hypertext",
    ia_description: "Apple's Hypercard 2.0 brought new sophistication to the concept of hypertext, and laid the groundwork for the powerful Internet concept of hyperlinks. This program looks at new hypertext based applications including Hypercard 2.0, Hyperties 3.0, Spinnaker's PLUS 2.0, and Guide 3.0. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "hypertext",
    ia_subject: "Episode Year: 1990;Television Programs;Computers: History;Hypertext;Hypercard;Apple"
},
{
    ia_title: "Computer Imaging & Digitizing",
    ia_description: "A look at the use of personal computers to digitize and process images. Demonstrations include the Datacopy 830 Scanner, MacImage 2.0, TrueForm from Spectrum Digital, Image Studio from Fractal Software, and PicturePower Color System. Guests include Jerry Borrell of MacWorld, George Morrow of Nestar, and Gary Kildall of Digital Research. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "imaging_2",
    ia_subject: "Datacopy; MacWorld;Specturm Digital Systems;Fractal Software; PictureWare"
},
{
    ia_title: "High Tech India - Part One",
    ia_description: "India is the hot place now for companies to look at for new software development. The trend actually started more than fifteen years ago. This is an early look at the growth of high-tech in India, shot on location in Bangalore, New Delhi, and Bombay. \nGuests: Mike Shah, Digital Equipment; Vinay Deshpande, PSIAshok Soota, Wipro; Venkat Mohan, Wipro; P. S. Deodhar, Electronic Comm; S. G. Pitroda, Advisor to the PM Arjun Malhotra, Hindustan; Rajendra Pawar, NIIT, Jerry Gaudet, DECS. Balakrishnan, CMC.\n Originally broadcast in April 1989. Copyright 1989 Stewart Cheifet Productions.",
    ia_identifier: "india_2",
    ia_year: 1989,
    ia_date: "1989-04-11T00:00:00.000Z",
    ia_subject: "india; bombay;new delhi; bangalore;outsourcing; software"
},
{
    ia_title: "High Tech India - Part Two",
    ia_description: "India is the hot place now for companies to look at for new software development. The trend actually started more than fifteen years ago. This is an early look at the growth of high-tech in India, shot on location in Bangalore, New Delhi, and Bombay. Also includes on location coverage of the high-tech sector in Taiwan.\nGuests: S. G. Pitroda, Advisor to the PMRajenda Pawar, NIITVenkat Mohan, Wipro; Adam Osborne, Paperback Publ; S. Balakrishnan, CMCPrakash Hebalkar, Tata Unisys; Arjun Malhotra, Hindustan \nProducts/Demos: Originally broadcast in 1989. \nCopyright 1989 Stewart Cheifet Productions.",
    ia_broadcastyear: 1989,
    ia_identifier: "indiansoftwa",
    ia_year: 1989,
    ia_date: "1989-01-01T00:00:00.000Z",
    ia_subject: "india; bangalore; new delhi;software; outsourcing;international"
},
{
    ia_title: "Input Devices",
    ia_description: "While we now take a computer mouse for granted, fifteen years ago there was still a debate about what would be the ultimate pointing device. This program reviews several options including the PowerMouse, the MousePenPortable, Wacom's Cordless Digitzer, MicroSpeed's PC-TRAC trackball, the first optical mouse PCMouse III from Mouse Systems, the OmniMac Ultra, Elographics MonitorMouse, and Mac'n Touch and the UnMouse from MicroTouch. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "inputdevices",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1990; Television Programs; Computers: History; Hardware;Mouse"
},
{
    ia_title: "Integrated Software",
    ia_description: "The software trend in the early 1990s was to bundle different applications together in integrated office \"suites\". This program looks at several early integrated packages including LotusWorks, WindowWorks, BeagleWorks, ClarisWorks, AppleWorks, Microsoft Works and Ragtime for the Macintosh. Originally broadcast in 1991. Copyright Stewart Cheifet Productions 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "integratedso",
    ia_subject: "office;works;suite"
},
{
    ia_title: "Intel 486",
    ia_description: "In 1992, the big issue was - is it worth the money to upgrade my 386 PC to the new 486 chip? This program looks at the performance of the new Intel 486 and helps users decide. Demonstrations include running AutoCAD on a 386 and a 486 PC; running an SQL database server on both processors; a look at the new SENSE 8 486 laptop from Dolch Systems; a look at how bus speed affects computer performance using a demonstration with Animator Pro; a review of Intel's Clock Doubler; and a look at 486 upgrade kit from Amkly Systems. Originally broadcast in February 1992.",
    ia_broadcastyear: 1992,
    ia_identifier: "intel486",
    ia_subject: "intel; autocad;;autodesk; animator pro;x86"
},
{
    ia_title: "Laptops",
    ia_description: "A review of the latest portable computer technology focusing on new batteries, color, faster processors, larger hard drives and backlit displays.\nGuests: Keith Comer, Toshiba; Kevin Mankin, Zenith; Jim Barltett, NECMac Mc; Loughlin, Compaq; Michael Morris, Intelligent Tech; Bill Howard, PC Magazine; Bill Lempesis, Dataquest; Betty English, Hitachi; Dan Farber, Mac; Week; Jerry Borrell, MacWorld\nProducts/Demos: Toshiba T1600Toshiba T5200Zenith Turbo; Sport 386NEC Ultralite; Compaq SLT 286CAT 286 Cellular Computer; Hitachi Color LCD Display; Macintosh Portable. Copyright 1989 Stewart Cheifet Productions.",
    ia_identifier: "laptops_2",
    ia_year: 1989,
    ia_date: "1989-05-16T00:00:00.000Z",
    ia_proddate: "1989-05-16T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Laser Printers",
    ia_description: "Remember daisy wheel printers? Dot matrix printers? Ribbon printers? They largely disappeared when the early laser printers were introduced. The first laser printers sold for more than $100,000. So it was big news when Canon came out in 1979 with a laser printer for $10,000. The first Apple laserwriter sold for $6,798 in 1987. This show looks at several early printer options including the Apple LaserWriter Plus, the Hewlett Packard LaserJet II, and the Okidata LaserLine 6. Also featured is a demonstration of one of the first desktop publishing programs to take advantage of laser printers, Ready Set Go 4.0 from Letraset. Guests include Jim Gable of Apple and John Dickinson of PC Labs. Originally broadcast in 1987.",
    ia_broadcastyear: 1987,
    ia_identifier: "laserprinter",
    ia_subject: "laser;printer;hewlett packard"
},
{
    ia_title: "Business Software for the Mac",
    ia_description: "Most users thought of the PC as the business computer and the Macintosh as the creative computer. But you could also run your business on a Mac. This program looks at several business applications designed for the Macintosh computer. Demonstrations include Multi-Finder, 4th Dimension, the Macintosh Business Letter, Write Now for Mac, Trapeze, and VideoWorks. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "macbussoftwa",
    ia_subject: "apple; Acius;T/Maker;Animatrix"
},
{
    ia_title: "Macros",
    ia_description: "As computer users discovered that many of the tasks they did on computers required repetitive commands, there became a growing interest in software that could record and automate a series of keystrokes. This program looks at several options for macros including PowerMacros for Lotus 1-2-3, WordPerfect Macros & Templates, Excel Macros, QuicKeys, AutoKey, and PowerMouse. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "macros_2",
    ia_subject: "lotus;excel;wordperfect"
},
{
    ia_title: "MacWorld Boston 1988",
    ia_description: "On location coverage of the annual winter MacWorld Expo in San Francisco. Big stories at this MacWorld were desktop publishing, new color computers, HyperCard, and PC emulators. Guests include George Morrow, Jerry Borrell and Jan Lewis. Originally broadcast in 1988. Copyright 1988 Stewart Cheifet Productions.",
    ia_broadcastyear: 1988,
    ia_identifier: "macworld_3",
    ia_subject: "macintosh;apple;trade show"
},
{
    ia_title: "MacWorld San Francisco 1989",
    ia_description: "A review of the annual west coast Macintosh trade show from San Francisco's Moscone Convention Center.\nGuests: Charlie Jackson, Silicon Beach; Roy Endres, Multi-Ad Creator; John Warnock, Adobe Systems; Brian Welter, Altsys\nProducts/Demos: Claris MacWrite II; Silicon Beach Supercard; Texas Instruments Action!Tektronix Quick Inkjet; Kodak Color Video Printer; Thunderware Lightning Scan; Dove Marathon 030/SETPS Smartcard ADBMicrotech R45 Cartridge Drive; Ricoh Erasable Optical Drive; Activision Manhole; Nexsys Gas Plasma Display; Berkeley Systems Outspoken.Originally broadcast February 1989.  Copyright Stewart Cheifet Productions 1989.",
    ia_identifier: "macworldsf",
    ia_year: 1989,
    ia_date: "1989-02-28T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Computers & Medicine 1991",
    ia_description: "A look at how doctors and health professionals are using computer technology to change the practice of medicine. Demonstrations include Grateful Med; MDX Health Digest; Interactive Medical Record; DxR; Mammography Teaching File; a microprocessor controlled insulin pump; ImageQuest, a computer based system for doing opthalmological examinations; and a visit to the Health Care Information & Management Systems Society Conference in San Francisco. Guests include Dr. Bill Helvey, Dr. Edward Shultz, Dr. Hurley Myers, and Dr. Ralph Smathers. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "medicalcare",
    ia_subject: "Medical Data Exchange; Dartmouth;Southern Illinois University; Mammography Plus;MiniMed Technologies"
},
{
    ia_title: "Memory Management",
    ia_description: "There used to be a limit to the amount of memory you could have in a DOS based computer - 640k. But as new applications demanded more RAM, utilities came out to try and solve that problem. This program looks at solutions such as QEMM-386, Manifest, and Optimize from Quarterdeck. Also, 386Max 5.1, DESQview, OS/2 1.21, Virtual 2.0, and AutoCAD's DOS Extender. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "memory_2",
    ia_subject: "memory;RAM;OS/2"
},
{
    ia_title: "MIDI Music",
    ia_description: "A look at the new role of personal computers in making music. Products demonstrated include Super Jam from Blue Ribbon Soundworks, Encore for Windows from Passport Designs, EZ Vision and Studio Vision from Opcode Systems, and the Miracle Piano. The show incudes visits to the Stanford Center for Computer Research in Music and Acoustics and the annual National Association of Music Merchants (NAMM) convention is Los Angeles. Originally broadcast in 1992. Copyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "midimusic",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "Episode Year: 1992;Television Programs;Computers: History"
},
{
    ia_title: "Local Area Networks: IBM Compatibles",
    ia_description: "It didn't take long after the introduction of personal computers for users to want to network their PCs and share files and peripherals. This program looks at some early networking technologies incuding Grapevine, EasyLAN, 3Com, and Novell. Originally broadcast in 1987. Copyright 1987 Stewart Cheifet Productions.",
    ia_broadcastyear: 1987,
    ia_identifier: "networks1",
    ia_year: 1987,
    ia_date: "1987-01-01T00:00:00.000Z",
    ia_subject: "LAN;network; Novell;3Com"
},
{
    ia_title: "Local Area Networks: Apple",
    ia_description: "A look at early attempts to network personal computers. This show focuses on Apple products including Appletalk, AppleShare FileServer, and MacLink. Also includes a look at Apple networks in use at Arthur Young & Company and at Stanford University. Guests include Tim Bajarin and Jan Lewis. Originally broadcast in 1987.  Copyright Stewart Cheifet Productions 1987.",
    ia_broadcastyear: 1987,
    ia_identifier: "networks2",
    ia_year: 1987,
    ia_date: "1987-01-01T00:00:00.000Z",
    ia_subject: "macintosh;LAN;networking"
},
{
    ia_title: "Network Security",
    ia_description: "As local area networks grew, so did concerns for network security. This program looks at some early solutions. Demonstrations include FileGuard 2.5 for the Mac, MaccessCard, PhoneNET Liaison 3.0, SiteLock, SecurID, and MailSafe. Guests include security expert and author Cliff Stoll. Originally broadcast in 1991.   Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "networksecur",
    ia_subject: "virus;hacker;LAN; encryption"
},
{
    ia_title: "Neural Networks",
    ia_description: "Neural networks are artificial intelligence systems modeled after the human brain. This program looks at several examples and applications. Included are Braincel 1.1 from Promised Land Technologies, BrainMaker Professional 2.0 from California Scientific Software, MacBrain 3.0 from Neurix, NeuroSMARTS from Cognition Technology, and ExploreNet from HNC. Also includes visits to NASA and Intel to see the work they're doing on neural networks. Originally broadcast in 1991.\nCopyright 1991 Stewart Cheifet Productions",
    ia_broadcastyear: 1991,
    ia_identifier: "neuralnetwor",
    ia_subject: "artificial intelligence;expert systems;neural networks"
},
{
    ia_title: "Notebook Computers",
    ia_description: "A review of the state of the art in notebook computers. Featured products include the AST Premium Exec 386SX/25, the NCR Safari, IBM's ThinkPad 700C, Compaq's Contura 3/25C, and the GRiD Convertible. Also coverage of new notebook introductions at fall Comdex. Originally broadcast in 1992. \n",
    ia_broadcastyear: 1992,
    ia_identifier: "notebooks_2",
    ia_subject: "notebooks;portables;laptops"
},
{
    ia_title: "Computers On Campus",
    ia_description: "Clarkson University, in upstate New York, was the first college in the country to provide every student with a personal computer, a Zenith AT PC. Drexel University, in Philadelphia, was the first university to do the same, only they required all incoming students to buy a Macintosh. This program looks at the changing experience of students and faculty at Clarkson and Drexel as personal computers became an essential \"school supply\". Shot on location at Drexel and Clarkson. Originally broadcast in 1990. Copyright Stewart Cheifet Productions 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "oncampus",
    ia_subject: "macintosh; apple;zenith; PC AT; education;college; university"
},
{
    ia_title: "OS/2",
    ia_description: "The OS/2 operating system started out as a joint venture between Microsoft and IBM. That venture fell apart as Microsoft went its own way with Windows. This program looks at IBM's OS/2 and compares its features to Microsoft's Windows 3.0. Demonstrations include Sound Impression, cc:Mail, Lotus 1-2-3, AmiPro, and SuperProject. Includes a visit to ZD Labs for their evaluation of Windows NT and to the annual IBM OS/2 conference. Guests include John Soyring, IBM's manager of software development, and Edwin Black, publisher of OS/2 Professional. Originally broadcast in 1993.\nCopyright 1993 Stewart Cheifet Productions",
    ia_broadcastyear: 1993,
    ia_identifier: "os2_2",
    ia_year: 1993,
    ia_date: "1993-01-01T00:00:00.000Z",
    ia_subject: "lotus; ibm;OS/2; operating system;windows; microsoft"
},
{
    ia_title: "Handheld Computers",
    ia_description: "In the eighties we moved from desktops to laptops; in the nineties we started to move from laptops to palmtops. This program looks at several handheld computing devices including Selectronics Word Finder Thesaurus, Berlitz Euro Traveler, Random House Encyclopedia, Franklin's Elementary Spelling Ace, Language Master 4000 Speaking Dictionary, Electronic Holy Bible, Sharper Image's Electronic Golf Game, Self Dialing Electrodex, Bridge Computer, Talking Translator, Sharp's Wizard OZ 8200, Casio's BOSS SF9500, Atari Portfolio, HP 17C and HP 19C. Guest host is Peter Nichols. Co-host is Tim Bajarin. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "palmtops",
    ia_subject: "palmtop; casio; franklin;handheld; sharp;portable; atari"
},
{
    ia_title: "Computers & the Pentagon - Part One",
    ia_description: "A 1991 rebroadcast, during the first Gulf War, of an earlier program looking at the use of computer technology by the Defense Department. Includes coverage of flight simulators, expert systems and artificial intelligence used in weapons systems, military robots being developed at Carnegie Mellon University, research in the Strategic Defense Initiative program, and the relationship between Silicon Valley and DARPA. Guests include Gary Kildall and Raj Reddy. Originally broadcast in 1986. Copyright 1986 Stewart Cheifet Productions.",
    ia_broadcastyear: 1986,
    ia_identifier: "pentagon1",
    ia_year: 1986,
    ia_date: "1986-01-01T00:00:00.000Z",
    ia_subject: "defense; military;simulation;battle; Singer Link; Lawrence Livermore Laboratory"
},
{
    ia_title: "Computers & the Pentagon - Part Two",
    ia_description: "A 1991 rebroadcast, during the first Gulf War, of a program looking at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country. Featured are demonstrations of SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, and the Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats. Originally broadcast in 1986. \n",
    ia_broadcastyear: 1986,
    ia_identifier: "pentagon2",
    ia_subject: "military;defense;SFI"
},
{
    ia_title: "PIMs",
    ia_description: "A new breed of software offers sophisticated management and organization tools for personal information.\nGuests: Denise Crisci, Micro; Logic; M. H. Mc; Kinney, ask; SAMJohn Friend, Symantec; Andrew Hammond, Lotus; Gary Kildall, DRI\nProducts/Demos: Tornadoask; SAMGrand; View; Agenda; Info-XLPersoft IZE",
    ia_identifier: "pims",
    ia_date: "1989-01-24T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Portable Computers",
    ia_description: "The state of the art in portable computers in the mid 1980's. Products featured include the Morrow Pivot Portable, the Hewlett Packard HP110, the Texas Instrument Pro-Lite, and the Data General DG-1. Originally broadcast in 1984. Copyright 1984 Stewart Cheifet Productions.",
    ia_broadcastyear: 1984,
    ia_identifier: "portablecomp",
    ia_subject: "portables;laptops;notebooks"
},
{
    ia_title: "Programming Languages",
    ia_description: "A look at the state of the art in programming languages and tools circa 1990. Demonstrations include Smalltalk V/PM, Actor 2.0, Zortech C++, Objective C, EngLan, TurboPascal, Turbo C, and Prograph. Originally broadcast in February 1990. Copyright Stewart Cheifet Productions 1990.",
    ia_identifier: "programming_2",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Gentry Software; Digitalk;Whitewater Group; Borland;Phillipe Kahn; Frame Technology; NeXT"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess",
    ia_subject: "random access;news;computer chronicles"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_10",
    ia_subject: "random access;computer news;computer chronicles"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site.",
    ia_identifier: "randomaccess_11",
    ia_subject: "random access;news;computer chronicles"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_12",
    ia_subject: "news;computer;schindler"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_13",
    ia_subject: "news;computer;schindler"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site.",
    ia_identifier: "randomaccess_14",
    ia_subject: "news;computer"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_15",
    ia_subject: "news;computer chronicles;random access"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site.",
    ia_identifier: "randomaccess_16",
    ia_subject: "news;computer"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site.",
    ia_identifier: "randomaccess_17",
    ia_subject: "news;computer"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site.",
    ia_identifier: "randomaccess_18",
    ia_subject: "Episode Year: Unknown;Television Programs;Computers: History;"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_2",
    ia_subject: "random access;news;computer chronicles"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_3",
    ia_subject: "news;computer chronicles;random access"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_4",
    ia_subject: "news;random access;computer chronicles"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_5",
    ia_subject: "news;computer"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_6",
    ia_subject: "news;computer chronicles;random access"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_7",
    ia_subject: "random access;computer chronicles;computer news"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_8",
    ia_subject: "news;computer"
},
{
    ia_title: "Random Access",
    ia_description: "For the first fifteen years of the Computer Chronicles, when it was still hard to find technology news on television, each episode would end with a five minute summary of the week's personal computer news. Reporters presenting Random Access each week included Maria Gabriel, Kate Megargee, Cynthia Steele, Wendy Woods, Janelle Stelson, and Laurie Anderson. These are examples of some of those broadcasts. Many others are found at the end of Computer Chronicles episodes archived on this site. \n",
    ia_identifier: "randomaccess_9",
    ia_subject: "news;computer;schindler"
},
{
    ia_title: "Scanners",
    ia_description: "With the growth of desktop publishing, scanners became an important new PC peripheral, with sales in the early 1990s growing at 250% per year. This program looks at several scanner options including Logitech's ScanMan, the AVR 3000/GS Plus from Advanced Vision Research, Epson's ES-300C, Sharp's JX-600, the SpeedScanner from Array Technologies, the Caere handheld scanner, and HP's ScanJet Plus. Guest cohost is Heidi Roizen of T/Maker. Originally broadcast in 1991. Copyright 1991 Stewart Cheifet Productions.",
    ia_broadcastyear: 1991,
    ia_identifier: "scanners",
    ia_subject: "scan;optical;desktop publishing"
},
{
    ia_title: "Software for Schools",
    ia_description: "With computer hardware showing up in just about every school, this program looks at software applications designed for the school environment. Included are demonstrations of KidPix, NuberMaze, ReadingMaze, Math Blaster Mystery, Point of View, MediaWorks, and Super Solvers Outnumbered. Originally broadcast in 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "schoolsw",
    ia_subject: "schools;classroom;teacher"
},
{
    ia_title: "Shareware",
    ia_description: "When the personal computer software industry was born in the mid 1980's, it was assumed that computer programs would be sold like books or records. But software was different and some innovative programmers started inviting users to try their software for free. This started the battle between open source software and proprietary software. This program examines the early phenomenon of shareware and freeware. Guests include Jim Button, founder of ButtonWare; Rusel DeMaria, author of Public Domain Software; Raines Cohen, Sysop of the BMUG BBS, Stephen Howard, BMUG librarian; and Vernon Buerg, operator of the Shareware BBS. Co-host is Gary Kildall. Shareware programs demonstrated include PC-File, ProComm, AutoMenu, Artisto, Stuff-It, Hyper-Zero, and PC-Write. Includes a visit to PC-SIG, at the time the world's largest mail order house for shareware. Originally broadcast in 1988. Copyright Stewart Cheifet Productions 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "shareware",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "freeware; BMUG;SRI; Buttonware; BBS;PC-SIG"
},
{
    ia_title: "Sleeper Software",
    ia_description: "Most popular software titles get there as the result of an expensive sales and marketing campaign. Other programs are so popular they climb to the top of the charts just through word-of-mouth, or BBS chat. This program looks at several of these \"sleeper\" software programs that are worthy of note. Among the titles demonstrated are Commander Keen, PopDBF, Resident Task Manager, Prism, Pianoman, 4DOS, CommandPost, Windows Wallpaper, LCD 2.0, LJ2UP, MacBillboard, BigCheese, Ripper FKey, TappyType, Fish!, Globe, Solarian II, Melt DA, Address Book, FlashWrite, Stuffit, ToDo!, TidyItUp, DisKeeper, Red Ryder, White Knight, and Vietnam War. Guests include Jim Button, founder of the Association of Shareware Professionals. Originally broadcast in 1991. Copyright Stewart Cheifet Productions 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "sleepersw",
    ia_subject: "shareware;freeware;PCMagnet; ZMac"
},
{
    ia_title: "Macworld Expo Boston 1994 - Spanish",
    ia_description: "Spanish language version of this program. On location coverage of the annual Boston MacWorld Expo. Guests include analyst Tim Bajarin and writer Stewart Alsop. New products covered include System 7.5, WordPerfect for Mac, Claris Office Suite, PowerBook, Loga Vista, Newton, Visioneer, Wacom Tablet, Hyperglot, Opcode Systems, and Solustan. Originally broadcast in 1994. \n",
    ia_broadcastyear: 1994,
    ia_identifier: "sp_cc165_macworld_expo",
    episodeNumber: 165,
    ia_subject: "mac; macinstosh; apple;bajarin; alsop; wacom;boston; macworld; newton; claris"
},
{
    ia_title: "ETRE Barcelona Special - Spanish",
    ia_description: "Spanish language version of this program. Highlights of the annual European Technology Roundtable Exhibition held in 1993 in Barcelona, Spain. Guests include Esther Dyson, John Warnock, Steve Case, and Phillipe Kahn. Originally broadcast in 1993.",
    ia_broadcastyear: 1993,
    ia_identifier: "sp_cc166_etre_special",
    episodeNumber: 166,
    ia_subject: "spanish; case; kahn;europe; etre; barcelona;dyson; vieux"
},
{
    ia_title: "Plug and Play - Spanish",
    ia_description: "Spanish language version of this program. Adding peripherals used to be a nightmare with a PC, having to manually figure out all kinds of settings and switches. Windows 95 promised to end all that with Plug and Play, though many users called it Plug and Pray. This program looks at the early efforts to simplify adding peripherals. Covered are sound cards, SCSI controllers, video cards, mice, CDROM drives, and PCMCIA cards. Also covered is Plug and Tell, which helped you figure out what settings had to be changed, and Compaq's Hot Docking technology. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "sp_cc169_plug_and_play",
    episodeNumber: 169,
    ia_subject: "plug; play; peripheral;add-on; configure;spanish"
},
{
    ia_title: "Windows 95 - Spanish",
    ia_description: "Spanish language version of this program. The upgrade from Windows 3.0 to Windows 95 was the big leap for Microsoft and began its domination of the desktop. This program looks at the new OS, originally code named \"Chicago\" and Windows 4.0, and new applications developed specifically for Win 95. Demonstrations include Windows 95, Norton Utilities for Win 95, Visio, and Picture Publisher. Also included are demonstratons of IBM's Warp OS/2, and the Macintosh Operating System OS 7.5.\nOriginally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "sp_cc170_windows_95",
    episodeNumber: 170,
    ia_subject: "windows; 95;microsoft;OS; operating system; spanish"
},
{
    ia_title: "Digital Photo Finishing - Spanish",
    ia_description: "Spanish language version of this program. As the popularity of digital cameras grew, photofinishing software followed. This program looks at several early examples of computer based photo processing. Demonstrations include Photoshop 2.5, Nikon's LS-10 CoolScan, PhotoFlash 2.0, Apple's QuickTake Camera, Paint Alchemy, Terrazzo, Picture Window 1.0, EverColor and ArtLink. Originally broadcast in 1994.",
    ia_broadcastyear: 1994,
    ia_identifier: "sp_cc176_digital_photo_finishing",
    episodeNumber: 176,
    ia_subject: "digital; photography;photo; camera;;spanish"
},
{
    ia_title: "Greatest PC Games - Spanish",
    ia_description: "Spanish language version of this program. A look at the hot new computer games of 1995. Games covered include Voyeur, Astronomica, Wing Commander III: Heart of the Tiger, Master of Magic, Nascar Racing, Front Page Sports: Football Pro '95, Daedalus Encounter from Mechadeus, and Loadstar: The Legend of Tully Bodine. Includes visits to Electronic Arts and Rocket Science Games and an interview with \"The Fat Man\", George Sanger. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc177_greatest_pc_games",
    episodeNumber: 177,
    ia_subject: "games; spanish;electronic arts;video games; pc games"
},
{
    ia_title: "CES Special - Spanish",
    ia_description: "Spanish language version of this program. On location coverage of the annual Consumer Electronics Show in Las Vegas. Featured analyst is Tim Bajarin, president of Creative Strategies. Includes highlights of the keynote speech by Microsoft's Bill Gates. This is the show where Microsoft introduced its infamous \"BOB\" interface.",
    ia_identifier: "sp_cc179_cbs_special",
    episodeNumber: 179,
    ia_subject: "consumer; electronics;microsoft; BOB;spanish"
},
{
    ia_title: "Learning On A Computer - Spanish",
    ia_description: "Spanish language version of this program. Personal computers have become a major component of modern educational systems. This program looks at some of the strides being made in computer based learning. Product demonstrations include Measurement in Motion, Grammar Games, Tangible Math, Inside the SAT, and The Musical World of Professor Piccolo. Companies profiled are Apple, Davidson & Associates, Logal, Princeton Review, and Opcode Interactive. Also featured are a visit to an Electronic Learning Fair and the online University of Phoenix. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc182_learning_on_a_computer",
    episodeNumber: 182,
    ia_subject: "learning; school;;education; apple;spanish"
},
{
    ia_title: "Mobile Computing - Spanish",
    ia_description: "Spanish language version of this program. Industry prognosticators predicted that 1995 would be \"the year of the portable\". And it was, as mobile computing became mainstream. This program looks at several mobile computing solutions, including the Morrow Pivot II, the Apple PowerBook 540C, Toshiba's T2150 CDT, IBM's Butterfly subnotebook, Apple's Newton MessagePad, the Sharp Zaurus, Sony's Magic Link, the Psion 3A, the Pentax PocketJet printer, Xircom's CreditCard Ethernet, Zenith's CD-ROM Z Player, Dell's Latitude, Bell South's Simon, HP's Omnibook 600, and the X-Jack Modem from Megahertz. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc186_mobil_computing",
    episodeNumber: 186,
    ia_subject: "mobile;portable;laptop; notebook; pda"
},
{
    ia_title: "Gary Kildall Special - Spanish",
    ia_description: "Spanish language version of this show. A profile on computer pioneer Gary Kildall and the important contributions he made to the PC industry including the true story on how IBM ended up using MS-DOS rather than CP/M. Kildall developed CP/M, the first personal computer operating system. He was also a co-host on the early Computer Chronicles series. Includes comments by Gordon Eubanks, Symantec; Tom Rolander, DRI; Tim Bajarin, Creative Strategies; Lee Lorenzen, DRI; Jacqui Morby, TA Associates; Alan Cooper, CP/M applications developer. Originally broadcast in 1995. \n",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc189_gary_kildall_special",
    episodeNumber: 189,

},
{
    ia_title: "Buy or Upgrade - Spanish",
    ia_description: "Spanish language version of this program. Your computer can't keep up with the latest applications. Should you buy a new one or can you get the same performance by upgrading your existing machine. This program looks at the options and the issues. Guests include Linda Concalves of Apple, Andrew Gitt of Corporate Upgrades, Paul Schindler of Windows Magazine, Kim Frederico of Creative Labs, and Spiros Mitsanis of Backyard Computer Services. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc196_buy_or_upgrade",
    episodeNumber: 196,
    ia_subject: "spanish; espanol;memory; RAM;CPU; windows; apple"
},
{
    ia_title: "Greatest Games - Spanish",
    ia_description: "Spanish language version of this program. A review of the best new games of the year. Games covered include In the First Degree, Buried in Time, Mech Warrior 2, ImagiNation Network, and Phantasmagoria. Plus a visit to Microsoft's Judgment Day, a conference for third-party game developers in Redmond, Washington. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc197_greatest_games",
    episodeNumber: 197,
    ia_subject: "games; spanish;pc games; video games"
},
{
    ia_title: "Comdex Fall 1995 - Spanish",
    ia_description: "Spanish language version of this program. Highlights of the 1995 Fall Comdex show shot on location in Las Vegas. Includes excerpts from the keynote speech by Bill Gates. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc200_fall_comdex",
    episodeNumber: 200,
    ia_subject: "comdex; trade show;las vegas; gates;spanish; bajarin"
},
{
    ia_title: "Mac Clones and Mac OS Update - Spanish",
    ia_description: "Spanish language version of this program. In the post Steve Jobs era, Apple started licensing other companies to produce Macintosh clones. And there was a new Mac operating system 8.0, code named Copland. This program looks at the new Mac clones and the new OS. Products demonstrated include the System 100 from Radius, the Genesis MP from DayStar Digital, and the Power 100 from Power Computing. Applications demonstrated include Adobe Photoshop and Personal Oracle 7. Also featured are the new Apple Macintosh 7100 and 8100 models. Originally broadcast in 1995.",
    ia_broadcastyear: 1995,
    ia_identifier: "sp_cc202_mac_os_updated",
    episodeNumber: 202,
    ia_subject: "apple; macintosh;jobs; clone; OS;spanish; operating system"
},
{
    ia_title: "Information Overload  - Spanish",
    ia_description: "Spanish language version of this program. A look at different ways to manage the glut of information showing up on computers and other storage devices. Originally broadcast in 1996.",
    ia_broadcastyear: 1996,
    ia_identifier: "sp_cc205_information_overload",
    episodeNumber: 205,
    ia_subject: "information; overload;pda; organizer;spanish"
},
{
    ia_title: "Computers and Kids - Spanish",
    ia_description: "Spanish language version of this program. A look at how children use computers at home and at school. Products demonstrated include The Amazing Writing Machine from Broderbund, How Would You Survive, from Grolier Electronic Publishing, and 3D Atlas from Creative Wonders. Also reviews of several kid oriented web sites such as kidlink.org, nbn.com/youcan, batnet.com, and Kids Only on AOL (search word Kids). Originally broadcast in 1996. \n",
    ia_broadcastyear: 1996,
    ia_identifier: "sp_cc206_komputer_kids",
    episodeNumber: 206,
    ia_subject: "spanish; espanol;kids; children;school"
},
{
    ia_title: "Computers in Space",
    ia_description: "A look at how NASA uses computers to run the space program, launch manned spacecraft, and manage the overall operations of America's space program.\nProducts/Demos: Space Physics Analysi Network; Total Ozone Map Spectrometer; Space Science Data Center; Silicon Graphics Space Simulator.Originally broadcast on May 23, 1989.  Copyright Stewart Cheifet Productions 1989.",
    ia_identifier: "space_2",
    ia_year: 1989,
    ia_date: "1989-05-23T00:00:00.000Z",
    ia_subject: "space;nasa;astronaut"
},
{
    ia_title: "Computers in Space",
    ia_description: "A look at how NASA uses computers to run the space program, launch manned spacecraft, and manage the overall operations of America's space program.\nGuests: \nProducts/Demos: Space Physics Analysi Network; Total Ozone Map Spectrometer; Space Science Data Center; Silicon Graphics Space Simulator.",
    ia_identifier: "space_3",
    ia_year: 1989,
    ia_date: "1989-01-01T00:00:00.000Z",
    ia_proddate: "1989-05-23T00:00:00.000Z",
    ia_subject: "nasa;space;aeronautics"
},
{
    ia_title: "Speech Technology",
    ia_description: "A look at voice recognition and speech synthesis technologies. Demonstrations include Dragon Dictate, the VPC 1000 Speech Recognition add-on board, Voice Navigator from Articulate Systems, Voice Express from MacSema, and the Berlitz Speaking Translator from Selectronics. Originally broadcast in 1990.",
    ia_broadcastyear: 1990,
    ia_identifier: "speech_2",
    ia_subject: "speech; recognition;voice;synthesis; talking"
},
{
    ia_title: "Tax Preparation Software",
    ia_description: "A review of the latest tax preparation software packages including: MacinTax and TaxView from SoftView, Lasser's Your Income Tax, Tax Preparer from HowardSoft, TurboTax from ChipSoft, Tax Partner from Best Programs, and Federal Tax Forms for the Apple II from Sky Computer Resources. Includes a visit to the IRS center in Fresno, California. Originally broadcast in 1988.",
    ia_broadcastyear: 1988,
    ia_identifier: "taxpreparati",
    ia_year: 1988,
    ia_date: "1988-01-01T00:00:00.000Z",
    ia_subject: "tax; taxes; IRS"
},
{
    ia_title: "Unix",
    ia_description: "A look at the many new versions of Unix and its challenge to DOS and OS/2.\nGuests: Rick Davis, Frame Technology; Karen Lusardi, Sun Microsystem; Janet Dobbs, Hewlett Packard; Bill Jacobs, Apple; Karen Christian, Wiesel Lab; Doug Michels, SCOMichael Karels, UC Berkeley\nProducts/Demos: Sun 386i Unix Workstation; Sun; Write; Sun; Paint; Sun; Draw; Sun File Manager; Open Look; OSF/Motif; HP 9000 360 Unix Workstation; X Windows with A/UXSCO Xenix",
    ia_identifier: "unix_2",
    ia_date: "1989-04-18T00:00:00.000Z",
    ia_proddate: "1989-04-18T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Video Game Consoles",
    ia_description: "Computers became a great platform for game players, but dedicated videogame consoles were even better. This program compares the various videogame platforms. Demonstrations include \"Defender of the Crown\" on an IBM PC, \"SimEarth\" on Mac IIci, \"Michael Jackson Moonwalker\" and \"Mickey Mouse in the Castle of Illusion\" on a Sega Genesis, \"Super Mario Brothers 3\" and \"The Legend of Zelda\" on a Nintendo, and \"Bonk's Adventure and Ys\" on an NEC TurboGrafx. Guests include Russel DeMaria, author of Sega Genesis Secrets, Nintendo Games Secrets, and Secrets of Game Boy. Also features a visit to Nintendo Powerfest and the Alladin's Castle Arcade. Originally broadcast in 1990. Copyright 1990 Stewart Cheifet Productions.",
    ia_broadcastyear: 1990,
    ia_identifier: "videogames_2",
    ia_subject: "cinemaware; maxis;sega; NEC;Nintendo; videogame"
},
{
    ia_title: "Virtual Reality",
    ia_description: "Virtual reality started out as a science fiction concept in the early 1950s. Now, VR has become a kind of holy grail - lots of promises and claims, few results delivered. This program looks at the state of virtual reality. Demonstrations include the Talking Glove, AutoDesk's Cyberspace project, the Virtual Hand, GestureGlove, CyberGlove, CyberCAD, Virtus Corporation's WalkThrough. Also a visit to the Virtual Reality Showcase at the Software Development Conference in Santa Clara, California. Originally broadcast in 1992.\nCopyright 1992 Stewart Cheifet Productions.",
    ia_broadcastyear: 1992,
    ia_identifier: "virtualreali",
    ia_year: 1992,
    ia_date: "1992-01-01T00:00:00.000Z",
    ia_subject: "VRML; cyberspace;VR;;AutoCAD"
},
{
    ia_title: "Viruses",
    ia_description: "Viruses are spreading to personal computers and causing havoc to individuals and businesses. A look at how to prevent viruses from destroying your system.\nGuests: John Dickinson, PC Labs; Andrew Seybold, Natl LAN Lab; Robert Capon, HJC Software; Jack Mc; Daniel, Magna; Dave Fischer, NASA Ames; Jim Mount, PME Labs; Gary Kildall, DRI\nProducts/Demos: Flu Shot; Virex; Empower",
    ia_identifier: "viruses_2",
    ia_date: "1989-01-17T00:00:00.000Z",
    ia_proddate: "1989-01-17T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Viruses",
    ia_description: "Viruses are spreading to personal computers and causing havoc to individuals and businesses. A look at how to prevent viruses from destroying your system.\nGuests: John Dickinson, PC Labs; Andrew Seybold, Natl LAN Lab; Robert Capon, HJC Software; Jack Mc; Daniel, Magna; Dave Fischer, NASA Ames; Jim Mount, PME Labs; Gary Kildall, DRI\nProducts/Demos: Flu Shot; Virex; Empower",
    ia_identifier: "viruses_3",
    ia_date: "1989-01-17T00:00:00.000Z",
    ia_proddate: "1989-01-17T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
},
{
    ia_title: "Windows 3.0",
    ia_description: "The first major upgrade to Windows was the 3.0 version, launched in 1990. This program reviews Windows 3.0 , some competitive products, and it looks at some Windows add-ons designed to make it work better. Demonstrations include Windows 3.0, ToolBook 1.0 from Asymetrix, PowerPoint 2.0 for Windows, DR-DOS 5.0 from Digital Research, GEM from Digital Research, GEOS and Ensemble from GeoWorks, and ViewMax. Originally broadcast in September 1990.\nCopyright 1990 Stewart Cheifet Productions",
    ia_identifier: "windows30",
    ia_year: 1990,
    ia_date: "1990-01-01T00:00:00.000Z",
    ia_subject: "Windows; Microsoft;Digital Research; GEM;GEOS; PowerPoint"
},
{
    ia_title: "Windows Apps",
    ia_description: "With the advent of Windows 1.0, software vendors came out with new programs to take advantage of the new GUI operating system. This program demonstrates several of those new applications including Norton Desktop for Windows, WordPerfect for Windows, Lotus 1-2-3 for Windows, Microsoft Works for Windows, PFS WindowWorks, Microsoft Money, Visual Basic for Windows, Borland's ObjectVision, and Microsoft Publisher. Originally broadcast in 1991. Copyright Stewart Cheifet Productions 1991.",
    ia_broadcastyear: 1991,
    ia_identifier: "windowsapps",
    ia_subject: "microsoft;windows;applications"
},
{
    ia_title: "Writing Software",
    ia_description: "More than a word processor, writing style software helps you actually write improving grammar, spelling, and style. A look at some of the newest products.\nGuests: Robert Moriarity, Power Up; Don Emery, Reference Software; Linda Mitchell, Microsoft; Jane Tamlyn, Addison Wesley; Henry Norr, Mac; Week; Andrew Seybold, Publisher; Paul Schindler, CMP\nProducts/Demos: Letters On-Line; Grammatik IIIBookshelf; Wordbench; The Big ThesaurusOriginally broadcast in 1989. Copyright Stewart Cheifet Productions 1989.",
    ia_broadcastyear: 1989,
    ia_identifier: "writingsoftw",
    ia_year: 1989,
    ia_date: "1989-03-28T00:00:00.000Z",
    ia_proddate: "1989-03-28T00:00:00.000Z",
    ia_subject: "Episode year: 1989"
}]

export default iaMetadata;