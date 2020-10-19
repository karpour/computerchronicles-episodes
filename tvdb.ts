/*
var parse = function(item) {
let out = {}  
out.tvdb_episode=item.children[0].children[0].innerHTML;
out.tvdb_title=item.children[0].children[1].innerHTML.trim();
out.   
tvdb_description=item.getElementsByClassName("col-xs-9")[0].innerHTML.replaceAll('<p>','').replaceAll('</p>','').trim();
let date = item.getElementsByClassName("list-inline text-muted")[0]?.children[0].innerHTML;
if(date) out.tvdb_date=date;
return out;
}
*/

const tvdb_eps = [
    {
        tvdb_episode: "S01E01",
        tvdb_title: "Mainframes to Minis to Micros",
        tvdb_description: "Covers the history and ancestry of today's (1984) PC.",
        tvdb_demos: "HP 150 PC, Computer Museum, TX-1 Computer",
        ia_identifier: "MainFram1984",
        tvdb_date: "February 5, 1984"
    },
    {
        tvdb_episode: "S01E02",
        tvdb_title: "Integrated Software",
        tvdb_description: "The new breed of integrated software suites and the visual interface.",
        tvdb_demos: "Apple LisaVisiOn, DESQ",
        ia_identifier: "Integrat1984",
        tvdb_date: "February 12, 1984"
    },
    {
        tvdb_episode: "S01E03",
        tvdb_title: "Computers and Music",
        tvdb_description: "The computer as a creative tool used to make, display and store music.",
        tvdb_guests: "John Chowning, Stanford; Will Harvey, Electronic Arts; Ellen Lapham, Syntauri; Gary Kildall, DRI",
        tvdb_demos: "Music Construction Set, Alpha Syntauri Keyboard, Casiotone, Vocal Synthesizer, MIT Experimental Music Studio, Stanford Center for Computer Music.",
        tvdb_copyright: "1984",
        tvdb_broadcastyear: "1984",
        ia_identifier: "Computer1984",
        tvdb_date: "February 19, 1984"
    },
    {
        tvdb_episode: "S01E04",
        tvdb_title: "Computer Simulations",
        tvdb_description: "The use of computers to simulate various real-world environments for military, entertainment and architectural applications.",
        tvdb_guests: "Gary Kildall, Digital Research; Frank Lewandowski, Singer-Link; Steve Harrison, Skidmore Owings; Bruce Artwick, IBM",
        tvdb_demos: "Flight Simulator, Military Flight Simulator, DRAFT Architecture Simulator",
        ia_identifier: "Simulati1984",
        tvdb_date: "February 26, 1984"
    },
    {
        tvdb_episode: "S01E05",
        tvdb_title: "Operating Systems",
        tvdb_description: "A review of competing operating systems and their affect on software development.",
        tvdb_guests: "Gary Kildall, SRI; Tony Fanning, Hewlett Packard; Jean Yates, Yates Ventures; Bruce Tognizinni, Apple; Herb Lechner, SRI",
        tvdb_demos: "CP/MUNIXXenix, MS/DOS, Apple IIe & AppleTalk.",
        tvdb_copyright: "1984",
        tvdb_broadcastmonthyear: "March 1984",
        is_identifier: "Operatin1984",
        tvdb_date: "March 12, 1984"
    },
    {
        tvdb_episode: "S01E06",
        tvdb_title: "Word Processing",
        tvdb_description: "A review of the new generation of word processors.",
        tvdb_demos: "Word, Vision, Writer's Work Bench Text Editor, Word Plus, Punctuation & StyleWordStar",
        ia_identifier: "WordProc1984",
        tvdb_date: "March 5, 1984"
    },
    {
        tvdb_episode: "S01E07",
        tvdb_title: "Computer Security",
        tvdb_description: "Security issues related to the world's increasing dependence on information in computer networks.",
        tvdb_demos: "Digi-Link, Add & Answer Verification",
        ia_identifier: "Computer1984_2",
        tvdb_date: "March 12, 1984"
    },
    {
        tvdb_episode: "S01E08",
        tvdb_title: "Robotics",
        tvdb_description: "Robotic hardware and software and robotics based applications.",
        tvdb_demos: "Hero I Robot, Teach Mover Robot",
        ia_identifier: "Robotics1984",
        tvdb_date: "March 19, 1984"
    },
    {
        tvdb_episode: "S01E09",
        tvdb_title: "Speech Synthesis",
        tvdb_description: "A look at speech synthesis and speech recognition technologies.",
        tvdb_demos: "Minolta Talking Camera, Texas Instruments Speak & Spell, Epsom Speech Plus Computer, IBM Votan V-5000",
        ia_identifier: "SpeechSy1984",
        tvdb_date: "March 26, 1984"
    },
    {
        tvdb_episode: "S01E10",
        tvdb_title: "Networking",
        tvdb_description: "Connecting computers, peripherals, broadband and baseband.",
        tvdb_demos: "Centralized Intelligence, Distributed Intelligence, Local Area Network",
        ia_identifier: "Networki1984",
        tvdb_date: "April 2, 1984"
    },
    {
        tvdb_episode: "S01E11",
        tvdb_title: "Microchips",
        tvdb_description: "History and development of the microprocessor.",
        tvdb_demos: "AMD 2901 (4 bit), AMD 29116 (16 bit)",
        ia_identifier: "Microchi1984",
        tvdb_date: "April 5, 1984"
    },
    {
        tvdb_episode: "S01E12",
        tvdb_title: "Business Applications",
        tvdb_description: "A look at the popular new software programs for business.",
        tvdb_demos: "Lotus 123, SuperCalc 3PC Talk, CrossTalk, IBM Professional Office System",
        ia_identifier: "Business1984",
        tvdb_date: "April 9, 1984"
    },
    {
        tvdb_episode: "S01E13",
        tvdb_title: "Storage Devices",
        tvdb_description: "Floppy drives, hard drives, and bubble memory.",
        tvdb_demos: "5 ¼ inch floppy drive, 3 ½ inch floppy drive, RCA CED videodisk, 3680 1.2 GB spindle disk",
        ia_identifier: "StorageD1984",
        tvdb_date: "April 16, 1984"
    },
    {
        tvdb_episode: "S01E14",
        tvdb_title: "Printers",
        tvdb_description: "Printer technology from daisy wheel to dot matrix to laser.",
        tvdb_demos: "Diablo Daisy Wheel Printer, Diablo Thermal Printer, Diablo Series C Ink Jet Printer, Xerox Color Laser Printer",
        ia_identifier: "Printers1984",
        tvdb_date: "April 23, 1984"
    },
    {
        tvdb_episode: "S01E15",
        tvdb_title: "Databases",
        tvdb_description: "Mainframe and network databases for computer users.",
        tvdb_demos: "The Source, CompuServe, Dialog Information Services",
        ia_identifier: "Database1984",
        tvdb_date: "April 30, 1984"
    },
    {
        tvdb_episode: "S01E16",
        tvdb_title: "Computer Graphics",
        tvdb_description: "A review of computer art, graphics capabilities of computers and professional computer graphics systems.",
        tvdb_guests: "Herb Lechner, SRI International; Don McKinney, Silicon Graphics; Michael Arent, Freelance Artist; Kevin Prince, MCI/Quantel; Ann Chase, Freelance Artist",
        tvdb_demos: "MCI Quantel PaintBox, Silicon Graphics 3D Animation, Apple IIe.",
        tvdb_copyright: "1984",
        ia_identifier: "Computer1984_6",
        tvdb_broadcastyear: "1984",
        tvdb_date: "May 7, 1984"
    },
    {
        tvdb_episode: "S01E17",
        tvdb_title: "Decision Support Systems",
        tvdb_description: "Expert systems software and artificial intelligence applications.",
        tvdb_guests: "Gary Kildall, DRI; Mike Thoma, Mgmt Decisn Sys; Steve Weyl, Syntelligence; Jim Chapman, Human Edge SW",
        tvdb_demos: "Strategic Simulations Epidemic, Prospector, CompuStat, Easy Scan, Sales Edge.\nCopyright 1984 Stewart Cheifet Productions",
        ia_identifier: "Decision1984",
        tvdb_date: "May 14, 1984"
    },
    {
        tvdb_episode: "S01E18",
        tvdb_title: "Computer Ergonomics",
        tvdb_description: "A look at health problems related to computer use such as video display radiation and repetitive stress injuries.",
        tvdb_guests: "Herb Lechner, SRI International; Wanda Smith, Hewlett Packard; Karen Kessel, Koffler Group; Susan Kare, Apple; Jerry Manock, Apple.",
        tvdb_demos: "Apple Macintosh, HP Orion Computer.",
        ia_identifier: "Computer1984_3",
        tvdb_date: "May 21, 1984"
    },
    {
        tvdb_episode: "S01E19",
        tvdb_title: "Programming Languages",
        tvdb_description: "A review of current popular programming languages.",
        tvdb_guests: "Gary Kildall, DRI; Paul Grady, Microfocus; Dave Eisenberg, Apple; Elizabeth Rather, Forth",
        tvdb_demos: "COBOLFORTHFORTH Graphics, PASCAL, Apple's Personal COBOL.",
        ia_identifier: "Programm1984",
        tvdb_date: "June 25, 1984"
    },
    {
        tvdb_episode: "S01E20",
        tvdb_title: "Software Utilities",
        tvdb_description: "",
        tvdb_date: "July 2, 1984"
    },
    {
        tvdb_episode: "S01E21",
        tvdb_title: "Computer Games",
        tvdb_description: "Computers are creating an entirely new platform for playing games, between humans or between humans and computers.",
        tvdb_guests: "Trip Hawkins, Electronic Arts; Bill Budge, Game Designer; Chris Crawford, Atari; Steve Kitchen, Activision",
        tvdb_demos: "Pinball Construction Set, One on One, Space Shuttle, Excaliber, Larry Bird Basketball.",
        tvdb_copyright: "1984",
        tvdb_broadcastmonthyear: "September 1984",
        ia_identifier: "Computer1984_4",
        tvdb_date: "September 28, 1984"
    },
    {
        tvdb_episode: "S01E22",
        tvdb_title: "Computer Entrepreneurs",
        tvdb_description: "A look at the people who are driving the personal computer industry.",
        tvdb_guests: "Gary Kildall, Digital Research; Steve Wozniak, Apple; Adam Osborne, Osborne Computer; Lore Harp, Vector Graphic; Gene Amdahl, Trilogy Systems.",
        ia_identifier: "Computer1984_5",
        tvdb_date: "October 5, 1984"
    },
    {
        tvdb_episode: "S01E23",
        tvdb_title: "Fifth Generation Computers",
        tvdb_description: "Japan's fifth generation computer project and a look at the next phase of PC platforms. Shot in Japan.",
        tvdb_guests: "Gary Kildall, Digital Research; Admiral Bobby Ray Inman, MCC; Ed Feigenbaum, Author; Dr. Hideo Aiso, Keio University; Dr. Yukio Mizuno, NEC; Dr. Hiroshi Kashiwagi, NSP; Dr. Kuzuhiro Fuchi, ICOT; Dr. Tohru Moto-Aka, Univ Tokyo",
        tvdb_demos: "KIP System, Pattern Matching, Inference Machine, Prologue",
        ia_identifier: "FifthGen1984",
        tvdb_date: "October 12, 1984"
    },
    {
        tvdb_episode: "S01E24",
        tvdb_title: "Super Computers",
        tvdb_description: "An early look at supercomputers in the United States and Japan. The program also features on location coverage in Japan of the country's supercomputer projects including the Hitachi S810-20 at the University of Tokyo and the Electro Technical Laboratory in Tsukuba, Japan.",
        tvdb_guests: "George Michael, head of computer research of Lawrence Livermore National Laboratory; John Repp, Control Data Corporation, Dr. Hideo Aiso, Professor at Keio University in Japan, Dr. Hiroshi Kashiwagi, Chairman of Japan's National Supercomputer Project, Dr. Yukio Mizuno, Senior Vice President of NEC",
        ia_identifier: "CC126_supercomputers",
        tvdb_date: "October 19, 1984"
    },
    {
        tvdb_episode: "S01E25",
        tvdb_title: "Artificial Intelligence",
        tvdb_description: "An early look at artificial Intelligence.",
        tvdb_guests: "Edward Feigenbaum of Stanford University; Nils Nilsson, AI Center at SRI International; Tom Kehler, Intellegenetics; Herb Lechner, SRI; John McCarthy, Stanford",
        tvdb_demos: "Inferential Knowledge Engineering and the programming language LISP.",
        ia_identifier: "CC1024_artificial_intelligence",
        tvdb_date: "October 26, 1984"
    },
    {
        tvdb_episode: "S01E26",
        tvdb_title: "Computers in Education",
        tvdb_description: "An early look at how computers are being used in formal education.",
        tvdb_guests: "Professor Patrick Suppes of Stanford University and Glenn Kleiman, author of \"Brave New Schools\". Includes demonstrations of the LOGO and BASIC languages. Guest host is Herb Lechner of SRI International.",
        ia_identifier: "education_2",
        tvdb_date: "November 2, 1984"
    },
    {
        tvdb_episode: "S02E01",
        tvdb_title: "Laser Disk Storage",
        tvdb_description: "Laser Discs and optical storage devices are changing the way we can use computers.",
        tvdb_demos: "Pioneer Laser Disc Player, Astron Belt, Halcyon Home Entertainment Sys, Vidlink",
        ia_identifier: "Lasersan1985",
        tvdb_date: "January 15, 1985"
    },
    {
        tvdb_episode: "S02E02",
        tvdb_title: "Portable Computers",
        tvdb_description: "The state of the art in portable computers in the mid 1980's.",
        tvdb_demos: "Morrow Pivot Portable, the Hewlett Packard HP110, the Texas Instrument Pro-Lite, and the Data General DG-1.",
        ia_identifier: "portablecomp",
        ia_identifier2: "CC214_portable_computers",
        tvdb_date: "January 22, 1985"
    },
    {
        tvdb_episode: "S02E03",
        tvdb_title: "Computer Games",
        tvdb_description: "A look at the newest computer games for PC users.",
        tvdb_demos: "Sargon III Chess Game, Millionaire Strategy Game, Pitfall, Zork ( Infocom), Ghostbusters",
        ia_identifier: "Computer1985_6",
        tvdb_date: "January 29, 1985"
    },
    {
        tvdb_episode: "S02E04",
        tvdb_title: "IBM Compatible Computers",
        tvdb_description: "A comparative look at the new breed of IBM look-alikes.",
        tvdb_demos: "Radio Shack Tandy 1000, IBM PC, Ericsson PC, Compaq PC",
        ia_identifier: "IBMClone1985",
        tvdb_date: "February 5, 1985"
    },
    {
        tvdb_episode: "S02E05",
        tvdb_title: "Software Piracy",
        tvdb_description: "Meet teenage software pirates, computer lawyers and the battle over software ownership.",
        tvdb_guests: "Mark Pump, Alpha Logic; Smith McKeithen, Activision; Frankie Mouse, Hacker; Neil Smith, Software Publish Assoc; John Draper (Captain Crunch); Gary Kildall, DRI",
        tvdb_demos: "Locksmith, Cap'n Software, Easy Writer, MacWare.",
        ia_identifier: "Software1985",
        tvdb_date: "February 12, 1985"
    },
    {
        tvdb_episode: "S02E06",
        tvdb_title: "Computers and the Disabled (1985)",
        tvdb_description: "A review of how computers are helping the blind and other disabled persons lead a better life.",
        tvdb_guests: "Peggy Barker, Children's Hospital; Susan Simpson, Prentke-Romich; Sue Melrose, Veterans Administr; Noel Runyan, Product Developer; Gary Kildall, DRI",
        tvdb_demos: "Express 3, Chin Joystick, VersaBraille, Echo II Synthesizer, Kurzweil Reading Machine",
        ia_identifier: "Computer1985_7",
        tvdb_date: "February 19, 1985"
    },
    {
        tvdb_episode: "S02E07",
        tvdb_title: "UNIX (1985)",
        tvdb_description: "AT&T's computer operating system is threatening to take over IBM's MS-DOS dominance.",
        tvdb_guests: "John Mashey, Bell Labs; Mark Sobell, Author; Bill Joy, Sun Microsystems; Doug Hartman, Hewlett Packard; Mike Denney, Basis; Gary Kildall, DRI",
        tvdb_demos: "File It, HP Integral PC, UNIX.",
        ia_identifier: "UNIX1985",
        tvdb_date: "February 26, 1985"
    },
    {
        tvdb_episode: "S02E08",
        tvdb_title: "Computers and Sports (1985)",
        tvdb_description: "From the dugout to the training room to the dining room, coaches and players and turning to computers to improve performance.",
        tvdb_guests: "Steve Boros, Oakland A's Manager; Billy Hicks, Qantel; Rich Anderson, Canada College; Bruce Brown, CompuTennis; Gary Kildall, DRI; Rick Bunch, Biomechanics Lab; Jeff Cohen, Converse",
        tvdb_demos: "North Sails, CompuTennis Scorer, Sports-Pac, SkyCam, Northstar Horizon, Tec Mar Adaptor",
        ia_identifier: "Computer1985_8",
        tvdb_date: "March 5, 1985"
    },
    {
        tvdb_episode: "S02E09",
        tvdb_title: "Personal Finance Software",
        tvdb_description: "A review of tax return software, financial management software and investment programs.",
        tvdb_guests: "John Reese, Monogram; Kevin Randolph, Bank of America; Jay Levine, Price Waterhouse; James Howard, Howardsoft; Ellen Ramsey, IRS; Gary Kildall, DRI",
        tvdb_demos: "Dollars and Sense, BA Home Banking, HowardsoftTax Preparer",
        ia_identifier: "Personal1985",
        tvdb_date: "March 12, 1985"
    },
    {
        tvdb_episode: "S02E10",
        tvdb_title: "The Macintosh Computer",
        tvdb_description: "An in-depth look at the early Apple Macintosh computer, available software and hardware add-ons. \n",
        tvdb_guests: "Joanna Hoffman, Apple; Bob Foster, Telos Software; Lee Lorenzen, Digital Research; Ben Wiseman, InfoCorp; Gary Kildall, DRI; Larry Tesler, Apple",
        tvdb_demos: "Apple Macintosh, MacProject, FileVision, GEM DrawJazz.",
        ia_identifier: "TheMacin1985",
        tvdb_date: "March 19, 1985"
    },
    {
        tvdb_episode: "S02E11",
        tvdb_title: "Profile of Big Blue (IBM)",
        tvdb_description: "An in-depth look at IBM, the IBM standard and the impact of its dominant role in the PC marketplace.",
        tvdb_guests: "Norm DeWitt, Dataquest; Tom Rolander, Intel; Stewart Alsop, InfoWorld; John Doerr, Kleiner Perkins Caufield; Gary Kildall, DRI",
        tvdb_demos: "IBM PC ATIBM TopView, CompuPro",
        ia_identifier: "Profileo1985",
        tvdb_date: "March 26, 1985"
    },
    {
        tvdb_episode: "S02E12",
        tvdb_title: "REPEAT [Laser Disk Storage]",
        tvdb_description: "",
        tvdb_date: "April 9, 1985"
    },
    {
        tvdb_episode: "S02E13",
        tvdb_title: "Computers & Communications",
        tvdb_description: "Computer and communication technologies are merging creating the new field of informatics.",
        tvdb_guests: "Bob Metcalfe, 3Com; Bill Gillis, Charles Schwab; Glenn Albinger, Computer Colorworks; Barry Margerum, Grid Systems; Gary Kildall, Digital Research",
        tvdb_demos: "Ethernet, UNET, Digital Paintbrush System, Grid Compass, QuoTrekRolm Jupiter and Cedar Systems, AT&T 7300.",
        ia_identifier: "Computer1985_9",
        tvdb_date: "April 16, 1985"
    },
    {
        tvdb_episode: "S02E14",
        tvdb_title: "REPEAT [Portable Computers]",
        tvdb_description: "The state of the art in portable computers in the mid 1980's.",
        tvdb_demos: "Morrow Pivot Portable, the Hewlett Packard HP110, the Texas Instrument Pro-Lite, and the Data General DG-1",
        ia_identifier: "portablecomp",
        ia_identifier2: "CC214_portable_computers",
        tvdb_date: "April 23, 1985"
    },
    {
        tvdb_episode: "S02E15",
        tvdb_title: "Low End Computers",
        tvdb_description: "A consumer's guide to the most popular low-cost home computers.",
        tvdb_guests: "Jack Tramiel, Atari; Leonard Tramiel, Atari; Frank Leonardi, Commodore; Gary Kildall, Digital Research",
        tvdb_demos: "Commodore Laptop, Commodore 128, Commodore Amiga, Atari ST 512",
        ia_identifier: "LowEndCo1985",
        tvdb_date: "April 30, 1985"
    },
    {
        tvdb_episode: "S02E16",
        tvdb_title: "REPEAT [Database Software]",
        tvdb_description: "Mainframe and network databases for computer users.",
        tvdb_guests: "Gary Kildall, DRI; Roger Summit, Dialog; Jay Fitzgerald, The Source; Paul Schindler, Info Syst News",
        tvdb_demos: "The Source, CompuServe, Dialog Information Services",
        is_identifier: "Database1984",
        tvdb_date: "May 7, 1985"
    },
    {
        tvdb_episode: "S02E17",
        tvdb_title: "REPEAT [Microchips]",
        tvdb_description: "History and development of the microprocessor.",
        tvdb_guests: "Herb Lechner, SRI; Phil Downing, AMD",
        tvdb_demos: "AMD 2901 (4 bit), AMD 29116 (16 bit)",
        ia_identifier: "Microchi1984",
        tvdb_date: "May 14, 1985"
    },
    {
        tvdb_episode: "S02E18",
        tvdb_title: "Japanese PCs",
        tvdb_description: "A review of where major Japanese technology companies are in the PC hardware and software markets.Shot in Japan.",
        tvdb_guests: "Michael Miller, Popular Computing; Christopher Mead, High Tech Review; Gary Kildall, Digital Research",
        tvdb_demos: "NEC, Fujitsu, Toshiba.",
        tvdb_copyright: "1985",
        ia_identifier: "Japanese1985",
        tvdb_date: "May 21, 1985"
    },
    {
        tvdb_episode: "S02E19",
        tvdb_title: "Robots (1985)",
        tvdb_description: "A visit to the High Tech Expo in Tsukuba, Japan for a look at the latest Japanese robotics technology. Features Sony, Toshiba, Fujitsu, Fanuc, NEC, and others. Plus a robot from Waseda University that can play the organ!",
        is_identifier: "Robots-J1985",
        tvdb_date: "May 28, 1985"
    },
    {
        tvdb_episode: "S02E20",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "June 4, 1985"
    },
    {
        tvdb_episode: "S02E21",
        tvdb_title: "REPEAT [Computer Games]",
        tvdb_description: "",
        tvdb_date: "June 11, 1985"
    },
    {
        tvdb_episode: "S02E22",
        tvdb_title: "Computer Graphics",
        tvdb_description: "A look at the new graphics tools available to computer users, both for amateurs and professionals.",
        tvdb_guests: "Marein Cremer, Apple; Mark Bola, Imagic; Stephen Rosendahl, Pacific Data Images; Ed Bernstein, Broderbund; James Dowlen, Computer Artist; Gary Kildall, Digital Research",
        tvdb_demos: "MacDrawMagic, Dazzle Draw, Lumena.",
        ia_identifier: "Computer1985_10",
        tvdb_date: "June 18, 1985"
    },
    {
        tvdb_episode: "S02E23",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "June 25, 1985"
    },
    {
        tvdb_episode: "S02E24",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "July 2, 1985"
    },
    {
        tvdb_episode: "S02E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "July 9, 1985"
    },
    {
        tvdb_episode: "S02E26",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "July 16, 1985"
    },
    {
        tvdb_episode: "S03E01",
        tvdb_title: "Slowdown in Silicon Valley: Part 1",
        tvdb_description: "A review of the reasons behind the current slump in the computer business.",
        tvdb_demos: "Adam Computer, Osborne Computer",
        ia_identifier: "Slowdown1985",
        tvdb_date: "September 3, 1985"
    },
    {
        tvdb_episode: "S03E02",
        tvdb_title: "Slowdown in Silicon Valley: Part 2",
        tvdb_description: "Part two of this special series looking at the causes of the downturn in the computer industry.",
        tvdb_demos: "Commodore Amiga, Atari ST 520",
        ia_identifier: "Slowdown1985_2",
        tvdb_date: "September 10, 1985"
    },
    {
        tvdb_episode: "S03E03",
        tvdb_title: "Women in Computing",
        tvdb_description: "Meet the top women in a field that has traditionally been dominated by men.",
        ia_identifier: "WomeninC1985",
        tvdb_date: "September 17, 1985"
    },
    {
        tvdb_episode: "S03E04",
        tvdb_title: "Printers & Business Graphics",
        tvdb_description: "A survey of the new hardware and software visualization tools for business.",
        tvdb_demos: "IBM QuietWriter, Okimate 20 Color Thermal Transfer, Hewlett Packard LaserJet Plus, Apple LaserWriter",
        ia_identifier: "Printers1985",
        tvdb_date: "September 24, 1985"
    },
    {
        tvdb_episode: "S03E05",
        tvdb_title: "Computers and the Law",
        tvdb_description: "",
        tvdb_date: "October 1, 1985"
    },
    {
        tvdb_episode: "S03E06",
        tvdb_title: "Programming & Programmers",
        tvdb_description: "",
        tvdb_date: "October 8, 1985"
    },
    {
        tvdb_episode: "S03E07",
        tvdb_title: "Computers and the Media",
        tvdb_description: "From newsrooms to sports arenas, computers have invaded the media.",
        tvdb_demos: "Aurora 75 Graphics System, Pacific Data Images",
        ia_identifier: "Computer1985_2",
        tvdb_date: "October 15, 1985"
    },
    {
        tvdb_episode: "S03E08",
        tvdb_title: "Modems & Bulletin Boards",
        tvdb_description: "From high-tech trysts to selling black-market software, computers users are talking.",
        tvdb_guests: "Ezra Shapiro, Byte Magazine; Rory O'Connor, InforWorld; Matthew McClure, The Well; Donald Ingrim, Alameda County DA; George Morrow, Morrow Computing",
        tvdb_demos: "CompuServe, Byte BBS, The Well.",
        ia_identifier: "ModemsBu1985",
        tvdb_date: "October 22, 1985"
    },
    {
        tvdb_episode: "S03E09",
        tvdb_title: "Computer Networks",
        tvdb_description: "A look at the new technology for computers communicating with other computers.",
        tvdb_demos: "EtherMacToken Ring, TOPS Network",
        ia_identifier: "Computer1985_3",
        tvdb_date: "October 29, 1985"
    },
    {
        tvdb_episode: "S03E10",
        tvdb_title: "Computers and Politics (1985)",
        tvdb_description: "A look at how computers are changing the political process including campaign management, voter profiling, fundraising, and grass roots organizing.",
        tvdb_demos: "Washington Alert Service, Q Systems Solon",
        ia_identifier: "Computer1985_4",
        tvdb_date: "November 5, 1985"
    },
    {
        tvdb_episode: "S03E11",
        tvdb_title: "Computers and Medicine",
        tvdb_description: "Doctors are turning to computers for medical research, diagnosis and clinic management.",
        tvdb_demos: "Drexler LaserCard, MicroMedex, Computerized Clinical Information System, Poisindex, Drugdex, Emergindex, Pulmonary Function (PUFF), MedLine",
        ia_identifier: "Computer1985_5",
        tvdb_date: "November 12, 1985"
    },
    {
        tvdb_episode: "S03E12",
        tvdb_title: "Optical Storage Devices",
        tvdb_description: "A look at the newest mass storage devices including the compact disc ROM.",
        tvdb_demos: "Activenture Knowledge Retrieval System, Information Storage WO Drive, Encyclopedia on a Disk, ISI Worm Disk, Digital Equipment CD-ROM Drive",
        ia_identifier: "OpticalS1985",
        tvdb_date: "November 19, 1985"
    },
    {
        tvdb_episode: "S03E13",
        tvdb_title: "Business Applications (1985)",
        tvdb_description: "A review of the current offerings in word processors, spreadsheets, and database managers.",
        tvdb_demos: "Wordstar 2000, WordPerfect 4.1, Lotus 123, Javelin, ParadoxPC File/R",
        ia_identifier: "Business1985",
        tvdb_date: "November 26, 1985"
    },
    {
        tvdb_episode: "S03E14",
        tvdb_title: "Amiga and Atari",
        tvdb_description: "How much computer can you get at the bottom end of the market - comparison between the Commodore Amiga and the Atari 520ST.",
        tvdb_demos: "Atari 800, Commodore 64, Amiga IBM PC Emulator, Commodore Amiga, Atari 520, STNEO Paint",
        ia_identifier: "Amigaand1985",
        tvdb_date: "December 3, 1985"
    },
    {
        tvdb_episode: "S03E15",
        tvdb_title: "Consumer's Buyers Guide (1985)",
        tvdb_description: "A consumer's review of the hottest hardware and software goodies for the techie on your holiday shopping list.",
        ia_identifier: "Christma1985",
        tvdb_date: "December 10, 1985"
    },
    {
        tvdb_episode: "S03E16",
        tvdb_title: "Hard Disk Storage",
        tvdb_description: "As applications and files get larger, users need a hard disk drive, a Bernoulli box or a tape streamer.",
        tvdb_demos: "Iomega Bernoulli Box, Hard Card, Hyperdrive",
        ia_identifier: "HardDisk1985",
        tvdb_date: "December 17, 1985"
    },
    {
        tvdb_episode: "S03E17",
        tvdb_title: "Artificial Intelligence (1986)",
        tvdb_description: "Expert systems, decision support software, and natural language communication.",
        tvdb_guests: "Harry Tennant, Texas Instruments; Hubert Dreyfus, UC Berkeley; Gary Hendrix, Symantec; S. Jerrold Kaplan, Lotus Developmnt; Gary Kildall, Digital Research",
        tvdb_demos: "Personal Consultant, Q&A.",
        ia_identifier: "Artifici1986",
        tvdb_date: "January 7, 1986"
    },
    {
        tvdb_episode: "S03E18",
        tvdb_title: "Computers in Law Enforcement",
        tvdb_description: "A review of computer applications for police, the FBI and other law enforcement agencies.",
        tvdb_demos: "Probe One, Criterion Mapping System, SHRLOC Computer Aided Dispatch",
        ia_identifier: "Computer1986",
        tvdb_date: "January 14, 1986"
    },
    {
        tvdb_episode: "S03E19",
        tvdb_title: "Investment Software",
        tvdb_description: "A look at how investors are using computers to analyze and invest in the stock market.",
        tvdb_demos: "Wizards of Wall Street, The Equalizer, Lotus Signal, TelescanAnalyzer",
        ia_identifier: "Investme1986",
        tvdb_date: "February 4, 1986"
    },
    {
        tvdb_episode: "S03E20",
        tvdb_title: "Psychological Software",
        tvdb_description: "The use of computers to analyze personality and diagnose problems of human relations.",
        tvdb_demos: "Intracourse, Mind Over Minors, Biofeedback, Psychotherapy on a Disk, Therapeutic Learning Program",
        ia_identifier: "Psycholo1986",
        tvdb_date: "February 11, 1986"
    },
    {
        tvdb_episode: "S03E21",
        tvdb_title: "Astronomy Software",
        tvdb_description: "Computer programs for the amateur astronomer plus tools for tracking Halley's Comet.",
        tvdb_demos: "Tellstar, StarSoft HalleyComet Halley",
        ia_identifier: "Astronom1986",
        tvdb_date: "February 18, 1986"
    },
    {
        tvdb_episode: "S03E22",
        tvdb_title: "Color and Computing",
        tvdb_description: "",
        tvdb_date: "February 25, 1986"
    },
    {
        tvdb_episode: "S03E23",
        tvdb_title: "Careers in Computing",
        tvdb_description: "A look at the job opportunities and requirements in the fast growing computer field.",
        ia_identifier: "Careersi1986",
        tvdb_date: "March 4, 1986"
    },
    {
        tvdb_episode: "S03E24",
        tvdb_title: "Parallel Processing",
        tvdb_description: "Are there limits on the speed of computers and their CPUs? A review of new processor architectures to increase computing speed.",
        ia_identifier: "Parallel1986",
        tvdb_date: "March 11, 1986"
    },
    {
        tvdb_episode: "S03E25",
        tvdb_title: "Computers and the Pentagon: Part 1",
        tvdb_description: "The world's biggest computer user is the U.S. government and the military in particular. This program reviews the military uses of computer technology. Shot on location at various research centers around the country. Featured are the Robotics Institute at Carnegie Mellon University in Pittsburgh, Pennsylvania and Advanced Decision Systems in Mountain View, California.",
        tvdb_demos: "The Pilot's Assistant and the Battlefield Commander's Assistant, Flight and battle simulators from Singer Link.",
        tvdb_guests: "Raj Reddy, Director of the Robotics Institute at CMU.",
        ia_identifier: "Computer1986_2",
        tvdb_date: "March 18, 1986"
    },
    {
        tvdb_episode: "S03E26",
        tvdb_title: "Computers and the Pentagon: Part 2",
        tvdb_description: "A look at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country.",
        tvdb_demos: "SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, The he Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats",
        ia_identifier: "Computer1986_3",
        tvdb_date: "March 25, 1986"
    },
    {
        tvdb_episode: "S04E01",
        tvdb_title: "Educational Software: Part 1",
        tvdb_description: "A review of new software titles for use in schools and at home education.",
        tvdb_demos: "Operation Frog, Apple Classroom Tomorrow, Reader Rabbit, Magic Slate, Animal Kingdom, Voyage of the Mimi.",
        ia_identifier: "Educatio1986",
        tvdb_date: "September 16, 1986"
    },
    {
        tvdb_episode: "S04E02",
        tvdb_title: "Educational Software: Part 2",
        tvdb_description: "A look at on-line educational services and self-teaching software programs.",
        tvdb_demos: "InfoMinder, National Gallery of Art, Talking Software Pre-ReadersThe Balancing Act, Plato.",
        is_identifier: "Educatio1986_2",
        tvdb_date: "September 23, 1986"
    },
    {
        tvdb_episode: "S04E03",
        tvdb_title: "MIDI Music",
        tvdb_description: "Computers and music, MIDI machines and interfaces, and music composition software.",
        tvdb_demos: "Casio SK-1 Synthesizer, Atari ST, Activision's Music Studio, ADAP Sampler, DSP-1000, Apple II GS, Ensoniq Sound Chip, Soundscape, Commodore AmigaEZ Track, Kidnotes.",
        is_identifier: "MIDIMusi1986",
        tvdb_date: "September 30, 1986"
    },
    {
        tvdb_episode: "S04E04",
        tvdb_title: "RISC Processors",
        tvdb_description: "Reduced Instruction Set Computers are a new approach to speeding up computer processing.",
        tvdb_guests: "Joel Birnbaum, Hewlett Packard; David Patterson, UC Berkeley; Frank King, IBM; Hugh Martin, Ridge Computers; Jan Lewis, Palo Alto Research Group; George Morrow, Morrow Computing; Nickolas Dunckel, TRW",
        tvdb_demos: "HP Spectrum",
        ia_identifier: "RISC1986",
        tvdb_date: "October 7, 1986"
    },
    {
        tvdb_episode: "S04E05",
        tvdb_title: "Software Utilities",
        tvdb_description: "PC utiltities, file manipulators, disk managers, DOS aids, and other PC tools.",
        tvdb_guests: "Ed Tolson, SoftLogic Solutions; Dale Sinor, Executive Systems; Karen Lund, Tele-Ware; Robert Hoffman, Ashton-Tate; Ezra Shapiro, BYTE Magazine; Jay Eisnelohr, Airus; Gary Kildall, Digital Research; George Morrow, Intelligent Access",
        tvdb_demos: "Sidekick, Norton Utilities, Sideways, Double DOS, Disk Optimizer, Xtree & HOT, Above Disc, Détente.",
        ia_identifier: "Utilitie1986",
        tvdb_date: "October 14, 1986"
    },
    {
        tvdb_episode: "S04E06",
        tvdb_title: "Second Hand Computers",
        tvdb_description: "A look at the used computer market at who is selling them, who is buying them and what the risks and benefits are.",
        tvdb_guests: "J. Mark Crouch, Interstate Computer Bank; Stan Politi, Computer Currents; Bradley Ruedig, CAS Used Computers; Alexander Randall, Boston Computer Exch; George Morrow, Intelligent Access; Gary Kildall, Digital Research",
        tvdb_demos: "Dysan Interrogator, Leading Edge",
        ia_identifier: "SecondHa1986",
        tvdb_date: "October 21, 1986"
    },
    {
        tvdb_episode: "S04E07",
        tvdb_title: "Desktop Publishing: Part 1",
        tvdb_description: "First of a two-part series on desktop publishing focusing on new software applications for the Macintosh.",
        tvdb_demos: "Comic Works, Ready, Set, Go, Fontographer, Fluent Fonts, Right Now, Desktop Art.",
        is_identifier: "DesktopP1986",
        tvdb_date: "October 28, 1986"
    },
    {
        tvdb_episode: "S04E08",
        tvdb_title: "Desktop Publishing: Part 2",
        tvdb_description: "Second part of this series on desktop publishing looking at software applications for DOS based computers.",
        tvdb_guests: "Richard Amen, Dest Corporation; John Meyer, Ventura Software; Roger Archibald, Hewlett Packard; Paul Brainerd, Aldus Corporation; Jonathan Seybold, Seybold Publications; Gary Kildall, Digital Research",
        tvdb_demos: "DEST PC Scan Plus, Ventura Publisher, PostScript, PageMaker, HP DDL",
        ia_identifier: "DesktopP1987",
        tvdb_date: "November 4, 1986"
    },
    {
        tvdb_episode: "S04E09",
        tvdb_title: "Software Macros",
        tvdb_description: "A user's guide to macros - automated sequences of commands for spreadsheets, word processors, and database programs.",
        tvdb_guests: "Lynne Hughes, McDonell Douglas; Alan Simpson, Author; Michael Lunsford, MacroPac; Daniel Gasteiger, Lotus Publishing; Gary Kildall, Digital Research",
        tvdb_demos: "dBase III, VP Planner, Lotus 123, Symphony",
        ia_identifier: "GuidetoM1986",
        tvdb_date: "November 11, 1986"
    },
    {
        tvdb_episode: "S04E10",
        tvdb_title: "RAM Resident Software",
        tvdb_description: "A look at new software programs that reside in RAM and are always ready but may conflict with each other.",
        tvdb_guests: "David Whitney, Access Learning Tech; Dale Leatherman, Prodex; Robert Luhn, PC World; Richard Kraus, Persoft; Chip Rabinowitz, Amer Video Teleconf; Gary Kildall, Digital Research",
        tvdb_demos: "In-Synch, Note-It, Prodex 1.3, Referee",
        ia_identifier: "RAMResid1986",
        tvdb_date: "November 18, 1986"
    },
    {
        tvdb_episode: "S04E11",
        tvdb_title: "Comdex Special (1986)",
        tvdb_description: "A review of the newest hardware and software as exhibited at the annual fall Comdex show in Las Vegas.",
        tvdb_guests: "Hal Glatzer, Software News; Tim Bajarin, Creative Strategies; Jan Lewis, Palo Alto Research Group",
        tvdb_demos: "Hyundai & Samsung 386 PCs, Compaq 386 PC, Zenith PortableNEC Multispeed, Datavue SNAPPC Movie Maker, Smart Sneaker, Phonetic Engine, Hitachi & Toshiba Drives, Okidata & LED Laser Printers, QMS and HP Printers.",
        ia_identifier: "ComdexSp1986",
        tvdb_date: "November 25, 1986"
    },
    {
        tvdb_episode: "S04E12",
        tvdb_title: "Project Management Software",
        tvdb_description: "A user's guide to project management programs, strategies, and approaches.",
        tvdb_guests: "Jim Dunnigan, Microsoft; David Bryan, Breakthrough Software; Nancy Ann Twomey, Computer Assoc; Glenn Katz, Stanford; Gary Kildall, Digital Research",
        tvdb_demos: "MacProjectTimeline, Microsoft Project, MicroPlanner Plus, Superproject Plus 2.0",
        is_identifier: "ProjectM1986",
        tvdb_date: "December 2, 1986"
    },
    {
        tvdb_episode: "S04E13",
        tvdb_title: "Consumer's Buyers Guide (1986)",
        tvdb_description: "A review of available hardware and software gifts for techies.",
        tvdb_demos: "Calendar Creator, HP Financial Consultant, Business Simulator, Muppet Learning Keys Toy Shop, Pen Mouse, Looking Your Best, AmnesiaPC, and Type Right.",
        tvdb_broadcastyear: "1986",
        tvdb_guests: "George Morrow, Paul Schindler, and Wendy Woods. Stewart Cheifet is host.",
        tvdb_copyright: "1986",
        ia_identifier: "Christma1986",
        tvdb_date: "December 9, 1986"
    },
    {
        tvdb_episode: "S04E14",
        tvdb_title: "E-Mail Applications",
        tvdb_description: "A look at new email systems, comparative advantages and pitfalls and new email accessories and tools.",
        tvdb_guests: "Stuart Davidson, MCI; Jeff Anderholm, Lotus; Lloyd Kreuzer, Kreuzer Software; Carl Berney, Speech Plus; Charles Foskett, Natural Microsystems; Jan Lewis, Palo Alto Research Group",
        tvdb_demos: "Lotus Express, MCI Mail, The Source, Call for Text, Watson",
        ia_identifier: "Electron1986",
        tvdb_date: "December 16, 1986"
    },
    {
        tvdb_episode: "S04E15",
        tvdb_title: "Intel 386 Microprocessor",
        tvdb_description: "A review of the new Intel 386 chip and the new super-fast computers and applications that take advantage of its speed.",
        tvdb_guests: "Dana Krelle, Intel; Michael Swavely, Compaq; Robert Dilworth, Zenith; Neil Colvin, Phoenix Technologies; Jan Lewis, Palo Alto Research Group",
        tvdb_demos: "Compaq Deskpro 386, Intel 80386 Microprocessor, Zenith Z-386, VP/ix, UNIX 386.",
        ia_identifier: "Intel3861987",
        tvdb_date: "December 23, 1986"
    },
    {
        tvdb_episode: "S04E16",
        tvdb_title: "On-Line Services: Part 1",
        tvdb_description: "First of a two-part series on on-line services such as CompuServe, the Source and DowJones, featuring Steve Case, at the time VP of Marketing at QuantumLink, and eventual head of AOL.",
        tvdb_guests: "Clay Cocalis, Dow Jones; Nancy Tulley, Delphi; Jack O'Grady, Intelmatique; Steve Case, QuantumLink; Gary Kildall, Digital Research",
        tvdb_demos: "CompuServe, Commodore Network, People Connection, Free Text Search, Computer Express, Minitel.",
        ia_identifier: "On-LineD1987",
        tvdb_date: "December 30, 1986"
    },
    {
        tvdb_episode: "S04E17",
        tvdb_title: "On-Line Services: Part 2",
        tvdb_description: "Second part of a series on information retrieval looking at specialized services such as Bix, Dialog, QuantumLink and NewsNet.",
        tvdb_guests: "Dick Kollin, Telebase Systems; Doug Webster, BYTE; Roger Summit, Dialog Info Services; Connie Tomal, Mead Data Central; George Morrow, Morrow Computing",
        tvdb_demos: "Lotus One Source, BIX, Lexis Nexis, Information on Demand, Dialog, EasyNet",
        ia_identifier: "On-LineD1987_2",
        tvdb_date: "January 6, 1987"
    },
    {
        tvdb_episode: "S04E18",
        tvdb_title: "Intelligent Buildings",
        tvdb_description: "A survey of the technology embedded in modern office buildings and private homes. Shot in Hong Kong.",
        tvdb_guests: "Dr. Po S. Chung, Chinese University HK; Martin Spurrier, HongKong Land Group; R. A. Guy, HS Property Management; Donald Birch, Cathay Pacific; P G H Greene, HongKong Bank; Eric Vincent, Cable & Wireless; Ronald Suen, Kowloon Hotel; William Phillips, Baring Securities; Alfred Ho, Government Info Services",
        is_identifier: "Intellig1987",
        tvdb_date: "January 20, 1987"
    },
    {
        tvdb_episode: "S04E19",
        tvdb_title: "Modems",
        tvdb_description: "",
        tvdb_date: "January 27, 1987"
    },
    {
        tvdb_episode: "S04E20",
        tvdb_title: "Speech Recognition & Synthesis",
        tvdb_description: "An look at the latest advances in speech technology involving both voice recognition and speech synthesis.",
        tvdb_guests: "Michael O'Malley, Berkeley Speech Tech; Charles Cochran, Electronic Speech Sys; Steve Bettencourt, Votan; Janet Baker, Dragon Systems; George Morrow, Morrow Computing",
        tvdb_demos: "Speech Plus, Software Speech, BestSpeech, VoiceKey, Voice Libraries, Voice Scribe 1000",
        ia_identifier: "SpeechRe1987",
        tvdb_date: "February 3, 1987"
    },
    {
        tvdb_episode: "S04E21",
        tvdb_title: "Tax Preparation Software",
        tvdb_description: "A review of the latest software titles to help you manage and file your income taxes including a look at on-line filing.",
        tvdb_guests: "Henry Hilton, Double Eagle Software; Susan Morgan, Softview; James Petersen, Best Programs; Michael Chipman, ChipSoft; Gary Kildall, Digital Research",
        tvdb_demos: "Tax Advantage, Mac-in-Tax, PC TaxCut, TurboTax",
        is_identifier: "TaxPrepa1987",
        tvdb_date: "February 10, 1987"
    },
    {
        tvdb_episode: "S04E22",
        tvdb_title: "Portable Computers",
        tvdb_description: "A review of the latest laptop computers, new display screen technology and common applications..",
        tvdb_guests: "Bob Wade, Tany/Radio Shack; James Barlett, NEC; Andrew Czernek, Zenith Data Systems; Thomas Sherrard, Toshiba; Britt Blaser, Dynamac; Gary Kildall, Digital Research",
        tvdb_demos: "Workslate, Tandy Model 100 & 200, NEC Multispeed, Zenith Z-181, Toshiba T-1100 & T-3100, Grid Laptop, Mac Portable",
        is_identifier: "Portable1987",
        tvdb_date: "February 17, 1987"
    },
    {
        tvdb_episode: "S04E23",
        tvdb_title: "Kids and Computers",
        tvdb_description: "A look at young people and how they are using computers for pleasure and for education.",
        tvdb_guests: "Aaron Arakawa, Nueva Learning Center; Ben Wu, Miller Jr High; Laura Risk, Aptos Middle School; Robin Lee, Leyva Jr High; Arin Epstein, Foothill Middle School; Clifton Dalgard, Leyva Jr High",
        tvdb_demos: "Voting Program, The World of the IIe, LogoWriter, Integer Base, Teachtype.",
        ia_identifier: "Komputer1987",
        tvdb_date: "February 24, 1987"
    },
    {
        tvdb_episode: "S04E24",
        tvdb_title: "Computers and the Arts",
        tvdb_description: "Computers are moving form math and engineering to the world of the arts. A look at how artists are using computer technology.",
        tvdb_guests: "Eddie Dombrower, DOM Dance Press; Larry Friedlander, Stanford; Charles Kerns, Stanford; John Burke, Oakland Museum; Stacy Mitchell, Great Wave Software",
        tvdb_demos: "DOM Dance Notation, PatchworkTheater, GameMac, VisionMac, SpinConcertWare, Terpsichore.",
        is_identifier: "Computer1987",
        tvdb_date: "March 3, 1987"
    },
    {
        tvdb_episode: "S04E25",
        tvdb_title: "Computers and Illiteracy",
        tvdb_description: "A review of how computers are being used in innovative programs to teach basic literacy skills to adults.",
        tvdb_guests: "John Fleischman, La Puente Adult Schools; Jane Nissen Laidley, People's Computer Co; Dr. John Henry Martin, IBM; Gary Kildall, Digital Research",
        tvdb_demos: "LEAP Functional Literacy, Adult Literacy and Learning, Maze Mania",
        is_identifier: "Computer1987_2",
        tvdb_date: "March 10, 1987"
    },
    {
        tvdb_episode: "S04E26",
        tvdb_title: "Computers and Gambling",
        tvdb_description: "Lotteries, exotic horse racing bets and high-tech slot machines are all made possible by new computer technology.",
        tvdb_guests: "Robin Cobbey, Computer Sports World; Michael Roxborough, LV Sports Consultant; Robert Archer, PDS Sports; Michael Orkin, Cal State Univ Hayward; George Morrow, Morrow Computing",
        tvdb_demos: "NBA On-Line, Golden Gate Fields, Horserace Handicapping, Pro Football Handicapping",
        is_identifier: "Computer1987_3",
        tvdb_date: "March 17, 1987"
    },
    {
        tvdb_episode: "S04E27",
        tvdb_title: "Business Applications: Part 1 - Word Processors",
        tvdb_description: "A four part series on business applications. Part one focuses on the latest word processing programs including spell checkers and on-line thesauruses.",
        tvdb_guests: "Dan Lunt, WordPerfect Corporation; Walter Feigenson, MicroPro; James Kesler, Office Solutions; Lewis Levin, Microsoft; Eric Alderman, Author; Michael Miller, InfoWorld; Gary Kildall, Digital Research",
        tvdb_demos: "WordPerfect 4.2, WordStar 4.0, Microsoft Word, Microsoft Word for Macintosh.",
        tvdb_copyright: "1987",
        tvdb_broadcastyear: "1987",
        ia_identifier: "Business1987",
        tvdb_date: "March 24, 1987"
    },
    {
        tvdb_episode: "S04E28",
        tvdb_title: "Business Applications: Part 2 - Spreadsheets 1",
        tvdb_description: "Part two of a series on business applications, this time focusing on spreadsheets.",
        tvdb_guests: "Larry Gross, Lotus Development; Sam Savage, General Optimization; Adam Osborne, Paperback Software; Eric Gaer, Daybreak Technologies; Robert Firmin, Javelin Software",
        tvdb_demos: "Lotus HAL, What's Best, VP Planner, SILK, Javelin.",
        is_identifier: "Business1987_2",
        tvdb_date: "March 31, 1987"
    },
    {
        tvdb_episode: "S04E29",
        tvdb_title: "Business Applications: Part 3 - Spreadsheets 2",
        tvdb_description: "Part three of a series on business applications looking at spreadsheets and other financial analysis software tools.",
        tvdb_guests: "Mike Slade, Microsoft; Andrew Wulf, Data Tailor; Richard Roth, Unison Technology; Camilo Wilson, LifeTree Software; Gary Kildall, Digital Research",
        tvdb_demos: "Excel, Trapeze, Words & Figures, Predict.",
        ia_identifier: "Business1987_3",
        tvdb_date: "April 7, 1987"
    },
    {
        tvdb_episode: "S04E30",
        tvdb_title: "Business Applications: Part 4 - Database Management Software",
        tvdb_description: "The final part of this series on mainstream business applications focusing on database management software.",
        tvdb_guests: "Jim Hubbard, Better Homes & Gardens; Dennis Travins, Stanford; Lynn Luukinen, MicroRim; Thom Kozik, Ashton-Tate; Rich D'Amico, Peat Marwick Mitchell",
        tvdb_demos: "Q & APFS: Professional File, R:Base System VdBase III Plus, Odesta Double Helix.",
        ia_identifier: "Business1987_4",
        tvdb_date: "April 14, 1987"
    },
    {
        tvdb_episode: "S04E31",
        tvdb_title: "The New Macs",
        tvdb_description: "A review of the new Macintosh computers and their ability to emulate MS-DOS machines and run IBM compatible applications.",
        tvdb_guests: "Charles Oppenheimer, Apple; Didier Diaz, Apple; George Morrow, Nestar; Jan Lewis, Palo Alto Research Group; Gary Kildall, Digital Research",
        tvdb_demos: "Mac SE, Mac II",
        is_identifier: "TheNewMa1987",
        tvdb_date: "April 21, 1987"
    },
    {
        tvdb_episode: "S04E32",
        tvdb_title: "IBM PS/2",
        tvdb_description: "A first look at the new IBM PS2 computer and its design and interface innovations.",
        tvdb_guests: "Tony Harris, Digital Research; David Bunnell, PCW Communications; John Dvorak, PC Magazine; Ron Kaufmann, RX Computers; George Morrow, Nestar; Jan Lewis, Palo Alto Research Group; Gary Kildall, Digital Research",
        tvdb_demos: "DOS 3.3, Gem Desktop Publisher, IBM PS2 Model 50, GEM Draw Plus, FLEX-OS.",
        ia_identifier: "IBMPerso1987",
        tvdb_date: "April 28, 1987"
    },
    {
        tvdb_episode: "S04E33",
        tvdb_title: "Supercomputers",
        tvdb_description: "An introduction to the world of supercomputers in Asia and in the U.S. and their application environments such as NASA and NOA.",
        ia_identifier: "SuperCom1987",
        tvdb_date: "May 5, 1987"
    },
    {
        tvdb_episode: "S04E34",
        tvdb_title: "PC Clones from Asia",
        tvdb_description: "In the late 1980's, Taiwan was the world's leading producer of scanners, monitors, and many other computer products. This program goes to Taiwan to look at the center of the Asian computer industry. Included are visits to leading domestic computer companies such as Mitac, Microtek, Tatung, and Multitech (now Acer). Also coverage of American technology companies manufacturing in Taiwan such as Atari, Texas Instruments, and IBM. Featured also is a visit to Taiwan's Silicon Valley, called Science Park, and to Taiwan's major computer trade show, Computex.",
        is_identifier: "CC434_asian_clones",
        tvdb_date: "May 12, 1987"
    },
    {
        tvdb_episode: "S05E01",
        tvdb_title: "Hypercard",
        tvdb_description: "An introduction to Apple's Hypercard.",
        tvdb_demos: "Hypercard 1.0, Complete Car Cost Guide, Focal Point, Laserstacks, and National Galllery of Art.",
        ia_identifier: "CC501_hypercard",
    },
    {
        tvdb_episode: "S05E02",
        tvdb_title: "Laser Printers",
        tvdb_description: "Remember daisy wheel printers? Dot matrix printers? Ribbon printers? They largely disappeared when the early laser printers were introduced. The first laser printers sold for more than $100,000. So it was big news when Canon came out in 1979 with a laser printer for $10,000. The first Apple laserwriter sold for $6,798 in 1987. This show looks at several early printer options including the Apple LaserWriter Plus, the Hewlett Packard LaserJet II, and the Okidata LaserLine 6. Also featured is a demonstration of one of the first desktop publishing programs to take advantage of laser printers, Ready Set Go 4.0 from Letraset.",
        tvdb_demos: "Apple LaserWriter Plus, the Hewlett Packard LaserJet II, Okidata LaserLine 6, Ready Set Go 4.0 from Letraset.",
        ia_identifier: "laserprinter",
    },
    {
        tvdb_episode: "S05E03",
        tvdb_title: "Comdex Special (1987)",
        tvdb_description: "Highlights from the annual Comdex trade show in Las Vegas.",
        tvdb_broadcastyear: "1987",
        ia_identifier: "comdex_2",
        tvdb_date: "November 11, 1987"
    },
    {
        tvdb_episode: "S05E04",
        tvdb_title: "Local Area Networks: Part 1 - IBM Compatibles",
        tvdb_description: "It didn't take long after the introduction of personal computers for users to want to network their PCs and share files and peripherals. This program looks at some early networking technologies incuding Grapevine, EasyLAN, 3Com, and Novell.",
        tvdb_demos: "Grapevine, EasyLAN, 3Com, and Novell",
        is_identifier: "DesktopP1986",
    },
    {
        tvdb_episode: "S05E05",
        tvdb_title: "Local Area Networks: Part 2 - Apple",
        tvdb_description: "A look at early attempts to network personal computers. This show focuses on Apple products including Appletalk, AppleShare FileServer, and MacLink. Also includes a look at Apple networks in use at Arthur Young & Company and at Stanford University.",
        tvdb_demos: "Appletalk, AppleShare FileServer, and MacLink",
        is_identifier: "networks1",
    },
    {
        tvdb_episode: "S05E06",
        tvdb_title: "Consumer's Buying Guide (1987)",
        tvdb_description: "The annual holiday buyer's guide for computer products featuring geeky recommendations for cool new gadgets from George Morrow, Wendy Woods, Paul Schindler, Gary Kildall, and Stewart Cheifet. Products reviewed include Toshiba T1000 Laptop, Touchbase Worldport 1200 Modem, Diconix 150 Portable Printer, LapLink, Ashton-Tate's Byline, Higgins, Complete Hand Scanner, Worlds of Wonder Julie Doll, Microsoft Bookshelf, Broderbund's Science Tool Kit, Complete PC Fax Board, Mr. Game Show, Ask God, Macromind Videoworks, and Apple's Hypercard.",
        tvdb_demos: "Toshiba T1000 Laptop, Touchbase Worldport 1200 Modem, Diconix 150 Portable Printer, LapLink, Ashton-Tate's Byline, Higgins, Complete Hand Scanner, Worlds of Wonder Julie Doll, Microsoft Bookshelf, Broderbund Science Tool Kit, Complete PC Fax Board, Mr. Game Show, Ask God, Macromind Videoworks, Apple Hypercard",
        tvdb_guests: "George Morrow, Wendy Woods, Paul Schindler"
    },
    {
        tvdb_episode: "S05E07",
        tvdb_title: "Macintosh Business Software",
        tvdb_description: "Most users thought of the PC as the business computer and the Macintosh as the creative computer. But you could also run your business on a Mac. This program looks at several business applications designed for the Macintosh computer.",
        tvdb_demos: "Multi-Finder, 4th Dimension, the Macintosh Business Letter, Write Now for Mac, Trapeze, and VideoWorks.",
        ia_identifier: "macbussoftwa",
    },
    {
        tvdb_episode: "S05E08",
        tvdb_title: "Computer Games: Part 1",
        tvdb_description: "A look at early computer games. Featured are Earl Weaver Baseball, Ferrari Formula One, Tower of Myraglen, and Shanghai. Includes a visit to Electronic Arts customer support department and an interview with author and game designer Douglas Adams.",
        tvdb_demos: "Earl Weaver Baseball, Ferrari Formula One, Tower of Myraglen, and Shanghai",
        tvdb_guests: "Douglas Adams",
        ia_identifier: "games1",
        tvdb_date: "September 5, 1988"
    },
    {
        tvdb_episode: "S05E09",
        tvdb_title: "Computer Games: Part 2",
        tvdb_description: "A look at some of the leading computer games in the late 1980's.",
        tvdb_demos: "Chuck Yeager's Advanced Flight Trainer, Accolade's Mean 18 golf game, Apache Strike, Beyond Dark Castle, The Other Side, and Strategic Conquest. Also features an early look at CompuServe's on line game playing.",
        ia_identifier: "games2",
    },
    {
        tvdb_episode: "S05E10",
        tvdb_title: "Decision Support Software",
        tvdb_description: "In the heyday of artificial intelligence and expert systems, it was thought that computers could make human like decisions. This program looks at several early examples.",
        tvdb_demos: "Decision Aide from Kepner-Tregoe, AT RISK! from Palisade, Super Tree from Strategic Decisions, and Teknowledge.",
        ia_identifier: "decisionsoft",
    },
    {
        tvdb_episode: "S05E11",
        tvdb_title: "Imaging Software",
        tvdb_description: "A look at the use of personal computers to digitize and process images.",
        tvdb_demos: "the Datacopy 830 Scanner, MacImage 2.0, TrueForm from Spectrum Digital, Image Studio from Fractal Software, and PicturePower Color System.",
        tvdb_guests: "Jerry Borrell of MacWorld; George Morrow, Nestar; Gary Kildall, Digital Research.",
        ia_identifier: "imaging_2",
    },
    {
        tvdb_episode: "S05E12",
        tvdb_title: "MacWorld San Francisco (1988)",
        tvdb_description: "On location coverage of the annual winter MacWorld Expo in San Francisco. Big stories at this MacWorld were desktop publishing, new color computers, HyperCard, and PC emulators.",
        tvdb_guests: "George Morrow, Jerry Borrell and Jan Lewis.",
        is_identifier: "macworld_3",
    },
    {
        tvdb_episode: "S05E13",
        tvdb_title: "The New Amigas",
        tvdb_description: "Before there was a Macintosh, the Amiga was the computer for the creative community.",
        tvdb_demos: "Amiga 2000, the Amiga 500, Photon Video Cell Animator, Music X, Video Toaster, Interceptor",
        tvdb_broadcastyear: "1988",
        ia_identifier: "amiga_2",
    },
    {
        tvdb_episode: "S05E14",
        tvdb_title: "CD-ROMs (1988)",
        tvdb_description: "The advent of CD-ROM storage changed the way people used personal computers and opened up a whole new range of software applications.",
        tvdb_demos: "Microsoft Bookshelf, the Boeing Maintenance Manual, Media Mixer Retrieval Engine, The Visual Dictionary, N/Hance Systems 525E WORM Optical Disk Drive, Poisondex, Electronic Arts CD-I, Knowledge Set",
        tvdb_guests: "George Morrow, Gary Kildall, and Paul Schindler.",
        tvdb_copyright: "1988",
        tvdb_broadcastyear: "1988",
        ia_identifier: "cdroms",
        tvdb_date: "February 24, 1988"
    },
    {
        tvdb_episode: "S05E15",
        tvdb_title: "Tax Preparation Software",
        tvdb_description: "A review of the latest tax preparation software packages. Includes a visit to the IRS center in Fresno, California.",
        tvdb_demos: "MacinTax and TaxView from SoftView, Lasser's Your Income Tax, Tax Preparer from HowardSoft, TurboTax from ChipSoft, Tax Partner from Best Programs, Federal Tax Forms for the Apple II from Sky Computer Resources",
        tvdb_broadcastyear: "1988",
        ia_identifier: "taxpreparati",
    },
    {
        tvdb_episode: "S05E16",
        tvdb_title: "Shareware",
        tvdb_description: "",
        ia_identifier: "shareware",
    },
    {
        tvdb_episode: "S05E17",
        tvdb_title: "The Commodore 64",
        tvdb_description: "The Commodore 64 was the first computer for many families. This program looks at what you can do with the famous C-64.",
        tvdb_demos: "The Wine Steward, Skate or Die, Strike Fleet, the Koala Pad, Master Composer, Tetris, and Berkeley Software's GEOS. Includes a visit to a Commodore Owners Users Group meeting and an interview with Max Toy President of Commodore.",
        ia_identifier: "CC517_commodore_64",
    },
    {
        tvdb_episode: "S05E18",
        tvdb_title: "Multitasking Operating Systems",
        tvdb_description: "As operating systems grew more robust, one of the key new features was the ability to multitask, run several applications at the same time.",
        tvdb_demos: "Concurrent DOS from Digital Research, Windows 386 from Microsoft, IBM's OS/2, Apple's A/UX, and Tandy's Xenix.",
        tvdb_guests: "Lee Reiswig, Director of the IBM Austin Lab and Gary Kildall of Digital Research.",
        tvdb_broadcastyear: "1988",
        ia_identifier: "CC518_multitasking",
    },
    {
        tvdb_episode: "S05E19",
        tvdb_title: "Business Graphics: Part 1 - Mac",
        tvdb_description: "A look at how computers are now being used as graphics tools by business.",
        tvdb_demos: "MacDraw II from Claris, Microsoft's Excel, Cricket Presents from Cricket Software, Adobe Illustrator, and ImageMaker.",
        is_identifier: "CC519_business_graphics_1",
    },
    {
        tvdb_episode: "S05E20",
        tvdb_title: "Business Graphics: Part 2 - PC",
        tvdb_description: "A review of business graphics products in the IBM compatible world.",
        tvdb_demos: "Energraphics, KaleidoView, Draw Applause, Freelance Plus, Harvard Graphics, GEM Graph, Presentation Team, Cubicomp, and Zenographics.",
        ia_identifier: "CC520_business_graphics_2",
    },
    {
        tvdb_episode: "S05E21",
        tvdb_title: "Input Devices",
        tvdb_description: "",
        ia_identifier: "CC521_input_devices",
    },
    {
        tvdb_episode: "S05E22",
        tvdb_title: "Computers and Politics (1988)",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S05E23",
        tvdb_title: "Laptop Peripherals",
        tvdb_description: "",
        ia_identifier: "CC523_laptop_peripherals",
    },
    {
        tvdb_episode: "S05E24",
        tvdb_title: "Add-On Boards & Cards",
        tvdb_description: "In the early days of PCs, you had to know how to open up the box and add the functionality you really wanted when you bought the computer. This program looks at some of the upgrade options.",
        tvdb_demos: "AST's Rampage 286 board, Paradise Systems' VGA Plus Graphics card, IBM's Inboard/386, Quadram's JT Fax board, The TV Producer board for the Macintosh II",
        is_identifier: "CC524_add-on_boards",
    },
    {
        tvdb_episode: "S05E25",
        tvdb_title: "Investment Software",
        tvdb_description: "",
        ia_identifier: "CC525_investment_software",
    },
    {
        tvdb_episode: "S05E26",
        tvdb_title: "Personal CAD Software",
        tvdb_description: "",
        ia_identifier: "CC526_personal_cad",
    },
    {
        tvdb_episode: "S06E01",
        tvdb_title: "MacWorld Boston (1988)",
        tvdb_description: "On location coverage of the annual MacWorld expo in Boston.",
        tvdb_guests: "Jean Louis Gassee and Bob Metcalfe. Companies profiled include Aba Software, Cricket Software, Deneba Software, Microillusions, Silicon Beach, Advent, Claris, Dynaware, Pixelogic, Aldus, Letraset, Microsoft, Ashton-Tate, Springboard Software, Aegis, MacroMind, TrueVision, Electronic Arts, SuperMac, and Apple.",
        tvdb_broadcastyear: "1988",
        ia_identifier: "CC601_macworld",
        tvdb_date: "October 25, 1988"
    },
    {
        tvdb_episode: "S06E02",
        tvdb_title: "Computer Bowl I: Part 1",
        tvdb_description: "The first ever annual Computer Bowl featuring teams from the Route 128 area in Boston and the Silicon Valley area of San Francisco to see which side knows more about computer trivia. Contestants included Bill Joy, Mitch Kapor, Esther Dyson, and David Bunnell. The questioner was William Hearst III. The event took place in Boston.",
        tvdb_guests: "Bill Joy, Mitch Kapor, Esther Dyson, David Bunnell, William Hearst III",
        tvdb_broadcastyear: "1988",
        ia_identifier: "episode_602",
        tvdb_date: "November 1, 1988"
    },
    {
        tvdb_episode: "S06E03",
        tvdb_title: "Computer Bowl I: Part 2",
        tvdb_description: "The conclustion of the first ever Computer Bowl, featuring teams from the Route 128 area in Boston and the Silicon Valley area of San Francisco, to see which side knows more about computer trivia. Contestants included Bill Joy, Mitch Kapor, Esther Dyson, and David Bunnell. The questioner was William Hearst III. The event took place in Boston.",
        tvdb_guests: "Bill Joy, Mitch Kapor, Esther Dyson, David Bunnell, William Hearst III",
        tvdb_broadcastyear: "1988",
        ia_identifier: "episode_603",
        tvdb_date: "November 8, 1988"
    },
    {
        tvdb_episode: "S06E04",
        tvdb_title: "Bus Wars",
        tvdb_description: "The battle over a standard for moving information in and out of a computer and inside a computer including a look at EISA, Nubus, AT, PC, ISA, and MCA.",
        tvdb_demos: "EISA, Nubus, AT, PC, ISA, MCA",
        ia_identifier: "buswars",
        tvdb_date: "November 15, 1988"
    },
    {
        tvdb_episode: "S06E05",
        tvdb_title: "The Apple II",
        tvdb_description: "Today they're called \"mac heads\", but way back in the 1980's, Apple users were in love with the Apple II. Despite the introduction of the Mac in 1984, the Apple II continued to have its devoted fans. This program looks at the Apple II culture during the early Mac era. Included are the Apple IIc+, the Apple II-GS, and a rare Apple I.",
        tvdb_guests: "John Sculley; Gary Kildall",
        tvdb_demos: "Math Blaster, Paintworks Gold, Microsoft Bookshelf, Mac IIx",
        tvdb_broadcastyear: "1988",
        ia_identifier: "CC605_apple_ii_forever",
        tvdb_date: "November 22, 1988"
    },
    {
        tvdb_episode: "S06E06",
        tvdb_title: "Spreadsheet Wars",
        tvdb_description: "Excel now dominates the spreadsheet world, but once upon a time there was actual competition among spreadsheet products. This program looks at Quattro 1.0, Allways 1.0, Lotus 1-2-3 3.0, Ashton-Tate's Full Impact, and Excel 2.1.",
        tvdb_demos: "Quattro 1.0, Allways 1.0, Lotus 1-2-3 3.0, Ashton-Tate's Full Impact, Excel 2.1",
        tvdb_guests: "Gary Kildall, Jan Lewis; Jared Taylor, PC Magazine.",
        tvdb_broadcastyear: "1988",
        ia_identifier: "CC606_spreadsheet_wars",
        tvdb_date: "November 29, 1988"
    },
    {
        tvdb_episode: "S06E07",
        tvdb_title: "Consumer's Buyers Guide (1988)",
        tvdb_description: "A consumer's guide to cool holiday gifts for computer enthusiasts and gadget lovers.",
        ia_identifier: "buyersguide_2",
        tvdb_date: "December 6, 1988"
    },
    {
        tvdb_episode: "S06E08",
        tvdb_title: "Comdex Special (1988)",
        tvdb_description: "Complete coverage of the country's largest computer trade show, from Las Vegas.",
        ia_identifier: "comdex_3",
        tvdb_date: "December 13, 1988"
    },
    {
        tvdb_episode: "S06E09",
        tvdb_title: "Hard Disk Management",
        tvdb_description: "As hard disks grow larger, the problem of managing the information on your hard disk is getting more complicated. A look at a variety of solutions.",
        ia_identifier: "Uharddiskman",
        tvdb_date: "December 20, 1988"
    },
    {
        tvdb_episode: "S06E10",
        tvdb_title: "Computer Viruses",
        tvdb_description: "Viruses are spreading to personal computers and causing havoc to individuals and businesses. A look at how to prevent viruses from destroying your system.",
        ia_identifier: "viruses_2",
        tvdb_date: "December 27, 1988"
    },
    {
        tvdb_episode: "S06E11",
        tvdb_title: "Personal Information Management Software (PIMS)",
        tvdb_description: "A new breed of software offers sophisticated management and organization tools for personal information.",
        tvdb_guests: "Denise Crisci, Micro; Logic; M. H. Mc; Kinney, ask; SAMJohn Friend, Symantec; Andrew Hammond, Lotus; Gary Kildall, DRI",
        tvdb_demos: "Tornadoask; SAMGrand; View; Agenda; Info-XLPersoft IZE",
        ia_identifier: "pims",
        tvdb_date: "January 24, 1989",
        needs_fixing: true,
    },
    {
        tvdb_episode: "S06E12",
        tvdb_title: "MacWorld San Francisco (1989)",
        tvdb_description: "A review of the annual west coast Macintosh trade show from San Francisco's Moscone Convention Center.",
        tvdb_guests: "Charlie Jackson, Silicon Beach; Roy Endres, Multi-Ad Creator; John Warnock, Adobe Systems; Brian Welter, Altsys",
        tvdb_demos: "Claris MacWrite II; Silicon Beach Supercard; Texas Instruments Action!Tektronix Quick Inkjet; Kodak Color Video Printer; Thunderware Lightning Scan; Dove Marathon 030/SETPS Smartcard ADBMicrotech R45 Cartridge Drive; Ricoh Erasable Optical Drive; Activision Manhole; Nexsys Gas Plasma Display; Berkeley Systems Outspoken",
        ia_identifier: "macworldsf",
        tvdb_date: "February 28, 1989"
    },
    {
        tvdb_episode: "S06E13",
        tvdb_title: "Amiga 2500",
        tvdb_description: "A look at the new Amiga models including the Amiga 2500 and new software and peripherals for the Amiga computers.",
        tvdb_guests: "Tom Stearns, Commodore; Lou Wallace, Amiga World; Dan Silva, Author; Jim Schneider, Inno; Vision; Gary Kildall, DRI",
        tvdb_demos: "Menace; Battle Chess; Amiga 2500 Deluxe Paint III, Video Effects 3D.",
        tvdb_copyright: "1989",
        tvdb_broadcastmonthyear: "March 1989",
        ia_identifier: "amiga_3",
        tvdb_date: "March 7, 1989"
    },
    {
        tvdb_episode: "S06E14",
        tvdb_title: "Fax Boards",
        tvdb_description: "A look at how to turn your PC into a fax machine by adding a fax board.",
        tvdb_guests: "Joel Borden, The Complete PCJoyce Lemons, Quadram; Steve Siacotos, Xerox; Nick Baran, Byte; Rich Bader, Intel; Gary Kildall, DRI",
        tvdb_demos: "Complete PC FAXJT Fax Portable; Datacopy Microfax; Intel Connection Coprocessor.",
        ia_identifier: "faxboards",
        tvdb_date: "March 14, 1989"
    },
    {
        tvdb_episode: "S06E15",
        tvdb_title: "Writing Style Software",
        tvdb_description: "More than a word processor, writing style software helps you actually write improving grammar, spelling, and style. A look at some of the newest products.",
        tvdb_guests: "Robert Moriarity, Power Up; Don Emery, Reference Software; Linda Mitchell, Microsoft; Jane Tamlyn, Addison Wesley; Henry Norr, Mac; Week; Andrew Seybold, Publisher; Paul Schindler, CMP",
        tvdb_demos: "Letters On-Line; Grammatik IIIBookshelf; Wordbench; The Big Thesaurus",
        ia_identifier: "writingsoftw",
        tvdb_date: "March 28, 1989"
    },
    {
        tvdb_episode: "S06E16",
        tvdb_title: "Foreign Language Software",
        tvdb_description: "A look at computer hardware and software that help you translate and learn foreign languages.",
        tvdb_guests: "Axel Beyreuther, Intl Computer; Marty Goodman, Delphi; Bob Sullivan, Anonae Software; Dr. Martin Rice, Hyper; Glot; Gary Kildall, DRI",
        tvdb_demos: "Logos Computer System; Learn German; Delphi; Learn Japanese; Learning Russian",
        ia_identifier: "foreignlangu",
        tvdb_date: "April 4, 1989"
    },
    {
        tvdb_episode: "S06E17",
        tvdb_title: "High Tech India: Part 1",
        tvdb_description: "India is the hot place now for companies to look at for new software development. The trend actually started more than fifteen years ago. This is an early look at the growth of high-tech in India, shot on location in Bangalore, New Delhi and Bombay.",
        tvdb_guests: "Mike Shah, Digital Equipment; Vinay Deshpande, PSIAshok Soota, Wipro; Venkat Mohan, Wipro; P. S. Deodhar, Electronic Comm; S. G. Pitroda, Advisor to the PM Arjun Malhotra, Hindustan; Rajendra Pawar, NIIT, Jerry Gaudet, DECS. Balakrishnan, CMC.",
        ia_identifier: "india_2",
        tvdb_date: "April 11, 1989"
    },
    {
        tvdb_episode: "S06E18",
        tvdb_title: "UNIX (1989)",
        tvdb_description: "A look at the many new versions of Unix and its challenge to DOS and OS/2.",
        tvdb_guests: "Rick Davis, Frame Technology; Karen Lusardi, Sun Microsystem; Janet Dobbs, Hewlett Packard; Bill Jacobs, Apple; Karen Christian, Wiesel Lab; Doug Michels, SCOMichael Karels, UC Berkeley",
        tvdb_demos: "Sun 386i Unix Workstation; Sun; Write; Sun; Paint; Sun; Draw; Sun File Manager; Open Look; OSF/Motif; HP 9000 360 Unix Workstation; X Windows with A/UXSCO Xenix",
        ia_identifier: "unix_2",
        tvdb_date: "April 18, 1989"
    },
    {
        tvdb_episode: "S06E19",
        tvdb_title: "Atari ST",
        tvdb_description: "The Atari ST is a big hit in Europe but it's not very popular yet in the U.S. A look at some of the cool features that attract Atari fans.",
        ia_identifier: "atarist",
        tvdb_date: "April 25, 1989"
    },
    {
        tvdb_episode: "S06E20",
        tvdb_title: "High Tech India: Part 2",
        tvdb_description: "India is the hot place now for companies to look at for new software development. The trend actually started more than fifteen years ago. This is an early look at the growth of high-tech in India, shot on location in Bangalore, New Delhi, and Bombay. Also includes on location coverage of the high-tech sector in Taiwan.",
        ia_identifier: "indiansoftwa",
        tvdb_date: "May 2, 1989"
    },
    {
        tvdb_episode: "S06E21",
        tvdb_title: "Computing in Color",
        tvdb_description: "",
        tvdb_date: "May 9, 1989"
    },
    {
        tvdb_episode: "S06E22",
        tvdb_title: "New Generation Laptops",
        tvdb_description: "A review of the latest portable computer technology focusing on new batteries, color, faster processors, larger hard drives and backlit displays.",
        tvdb_guests: "Keith Comer, Toshiba; Kevin Mankin, Zenith; Jim Barltett, NECMac Mc; Loughlin, Compaq; Michael Morris, Intelligent Tech; Bill Howard, PC Magazine; Bill Lempesis, Dataquest; Betty English, Hitachi; Dan Farber, Mac; Week; Jerry Borrell, MacWorld",
        tvdb_demos: "Toshiba T1600; Toshiba T5200; Zenith Turbo; Sport 386NEC Ultralite; Compaq SLT 286CAT 286 Cellular Computer; Hitachi Color LCD Display; Macintosh Portable.",
        ia_identifier: "laptops_2",
        tvdb_date: "May 16, 1989"
    },
    {
        tvdb_episode: "S06E23",
        tvdb_title: "Computers in Space",
        tvdb_description: "A look at how NASA uses computers to run the space program, launch manned spacecraft, and manage the overall operations of America's space program.",
        tvdb_demos: "Space Physics Analysi Network; Total Ozone Map Spectrometer; Space Science Data Center; Silicon Graphics Space Simulator.",
        ia_identifier: "space_3",
        ia_identifier2: "space_2",
        tvdb_date: "May 23, 1989"
    },
    {
        tvdb_episode: "S07E01",
        tvdb_title: "Personal Finance Software",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E02",
        tvdb_title: "Creativity Software",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E03",
        tvdb_title: "Artificial Intelligence (1989)",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E04",
        tvdb_title: "New Portable Computers",
        tvdb_description: "They weren't quite \"notebook\" computers yet, but laptops were replacing \"luggables\" in the portable computer category during the late 1980's. This program looks at the state of the art in portables including the Atari Portfolio, the GridPad, the Poqet PC, the Dynabook 286, the NEC Color Portable, Toshiba's T3200SX, IBM's P70 386, and the new Mac Portable. Average price for one of these laptops was about $5,000.",
        tvdb_demos: "Atari Portfolio, the GridPad, Poqet PC, Dynabook 286, NEC Color Portable, Toshiba T3200SX, IBM P70 386, Mac Portable",
        tvdb_guests: "Mark Eppley, CEO of Traveling Software",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC704_new_laptops",
    },
    {
        tvdb_episode: "S07E05",
        tvdb_title: "Software for Kids",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E06",
        tvdb_title: "Megahertz Mania",
        tvdb_description: "In the late 1980's PC users were ecstatic over the introduction of 32 bit processors and CPUs running at the blazing speed of 33 megahertz. This program looks at some performance innovations including the AST Premium 386SX/33, the IBM 286s, the Cumulus 386SX add-on card, the Hauppauge 386 Motherboard 33, the Everex 386, and MultiSoft's PC-Kwik Power Pak. Software used for demonstractions include AutoCAD, Splash and Excel. Also features a look at new Intel chips, the i486 CISC and the i860 RISC chips, and new Motorola chips, the RISC 88000 and the CISC 68000.",
        tvdb_demos: "AST Premium 386SX/33, IBM 286s, Cumulus 386SX add-on card, Hauppauge 386 Motherboard 33, Everex 386, MultiSoft PC-Kwik Power Pak, AutoCAD, Splash, Excel, Intel i486 CISC, Intel i860 RISC, Motorola RISC 88000, Motorola CISC 68000.",
        ia_identifier: "CC706_megahertz_mania",
    },
    {
        tvdb_episode: "S07E07",
        tvdb_title: "Desktop Presentation Software: Part 1",
        tvdb_description: "The introduction of the Macintosh in the mid 1980's opened up a whole new world of desktop graphics capability. This program looks at several early graphics applications for the Mac including More II, Power Point 2.0, Persuasion 2.0, and Macromind Director.",
        tvdb_demos: "More II, Power Point 2.0, Persuasion 2.0, Macromind Director",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC707_desktop_presentation_graphics_1",
    },
    {
        tvdb_episode: "S07E08",
        tvdb_title: "Desktop Presentation Software: Part 2",
        tvdb_description: "If a picture is worth a thousand words, then graphics should be an important tool for business. Thanks to more sophisticated computers and display technology, the use of corporate graphics work boomed in the late 1980's. This program looks at several new products for doing presentation graphics on a PC including Harvard Graphics 2.12, Draw Partner, Freelance Plus 3.01, Graph Plus 1.3, Storyboard Plus 2.0, GEM Presentation 1.1, AutoDesk Animator, and Xerox Presents.",
        tvdb_demos: "Harvard Graphics 2.12, Draw Partner, Freelance Plus 3.01, Graph Plus 1.3, Storyboard Plus 2.0, GEM Presentation 1.1, AutoDesk Animator, Xerox Presents",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC707_desktop_presentation_graphics_2",
    },
    {
        tvdb_episode: "S07E09",
        tvdb_title: "Consumer's Buying Guide (1989)",
        tvdb_description: "The annual holiday buyer's guide for techie products. Gift giving selections for geeks from Gary Kildall, Paul Schindler, Jan Lewis, John Dickinson, Andrew Eisner, and Stewart Cheifet. Hardware and software for the PC and the Mac.",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC709_buyers_guide",
    },
    {
        tvdb_episode: "S07E10",
        tvdb_title: "Software Piracy",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E11",
        tvdb_title: "DOS to Mac and Back",
        tvdb_description: "In a world full of Macintosh computers and DOS based computers, there was a market for utilities that would translate between the two formats. This program looks at several examples, including DaynaFile, DOS Mounter, Soft PC, MacWrite II, LapLink Mac III, and PC MacTerm. Among the guests are Mark Eppley, CEO of Traveling Software and analyst Jan Lewis.",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC711_dos_mac",
    },
    {
        tvdb_episode: "S07E12",
        tvdb_title: "Computers and Fitness",
        tvdb_description: "As computers moved beyond doing just calculations and word processing, lots of small software companies found new kinds of applications for the growing universe of personal computers. One application was health and fitness. This program looks at several software titles and peripherals that let you use a computer to stay fit.",
        tvdb_demos: "STEP II Physical Fitness Evaluation, Psychological Psoftware Never Fat Again, Biofeedback Institute Calmpute, ESHA Research Food Processor II, Heart Window Plus Watch, Fat Watch Plus Belt",
        tvdb_broadcastyear: "1989",
        ia_identifier: "CC712_fitness",
    },
    {
        tvdb_episode: "S07E13",
        tvdb_title: "Low Cost LANs",
        tvdb_description: "With standalone PC's showing up in every office and in many homes, the big challenge became connecting computers in a local area network. This program looks at several low cost solutions to building a LAN.",
        tvdb_demos: "LANtastic, LANsmart, Lotus Notes, 10Net Plus, and TOPS LAN.",
        ia_identifier: "CC713_lans",
    },
    {
        tvdb_episode: "S07E14",
        tvdb_title: "Computers and the Law",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E15",
        tvdb_title: "Optical Storage",
        tvdb_description: "As we entered the 1990's, the big technology news was the move from magnetic storage to optical storage. It was the year of multimedia and the CD-ROM.",
        tvdb_demos: "Grolier Encyclopedia, PC Globe, Headstart III, PC Splash, The Listening Booth, USA Travel, PLV, NEC Portable CD-ROM CDR-35, Sony rewritable optical disc Drive SMO-S501, The video laser disc application \"Advanced Combat Trauma Life Support\", The CD Interactive (CDI) platform, The Digital Video Interactive (DVI) platform",
        tvdb_broadcastyear: "1990",
        ia_identifier: "CC715_optical_storage",
    },
    {
        tvdb_episode: "S07E16",
        tvdb_title: "Low Cost Laser Printers",
        tvdb_description: "When laser printers first came out in the 1980's they were prohibitively expensive for most individual users. In the early 1990's, prices came down and even small businesses were able to upgrade from their old dot matrix printers. This program looks at several early options for low cost laser printers.",
        tvdb_demos: "GCC PLP II for the Macintosh, Okilaser 400 from Okidata, Toshiba LaserPrinter, Canon LBP-4, HP LaserJet IIP",
        tvdb_broadcastyear: "1990",
        ia_identifier: "CC716_low_cost_laser_printers",
    },
    {
        tvdb_episode: "S07E17",
        tvdb_title: "Computer Ergonomics",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S07E18",
        tvdb_title: "Programming Languages",
        tvdb_description: "A look at the state of the art in programming languages and tools circa 1990.",
        tvdb_demos: "Smalltalk V/PM, Actor 2.0, Zortech C++, Objective C, EngLan, TurboPascal, Turbo C, and Prograph.",
        tvdb_broadcastmonthyear: "February 1990",
        ia_identifier: "programming_2",
        tvdb_date: "March 1, 1990"
    },
    {
        tvdb_episode: "S07E19",
        tvdb_title: "Hypercard Update",
        tvdb_description: "One of the precursors of hypertext and hyperlinks was Hypercard, originally introduced by Apple in 1987. This program looks at the status of Hypercard applications including Hypercomposer, Take One, Culture 1.0, Mission: The Moon, SuperCard, and CAMEO.",
        tvdb_demos: "Hypercomposer, Take One, Culture 1.0, Mission: The Moon, SuperCard, CAMEO",
        tvdb_guests: "Apple Fellow and Hypercard creator Bill Atkinson.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "hypercard_2",
    },
    {
        tvdb_episode: "S07E20",
        tvdb_title: "Desktop Video",
        tvdb_description: "Today we take for granted the fact that we can watch video on our computers, but in the early 1990s, that was a big innovation. This program looks at early examples of desktop video on the Amiga, the Mac, and the IBM PC. Also showcased is the use of desktop video at the NASA Ames research center.",
        tvdb_demos: "Amiga 2500, The Amiga video authoring system, Pioneer LaserDisc player, MacroMind Director 2.0 for the Mac IIx, Avid/1 Media Composer, DVA-4000 video controller from VideoLogic",
        tvdb_broadcastyear: "1990",
        ia_identifier: "desktopvideo",
    },
    {
        tvdb_episode: "S07E21",
        tvdb_title: "Flight Simulators",
        tvdb_description: "A review of flight simulator software.",
        tvdb_demos: "Falcon AT 1.11, F-15 Strike Eagle II, Jet Fighter 1.5, A-10 Tank Killer 1.2, subLOGIC's Flight Simulator ATP 1.0, and Microsoft's Flight Simulator 4.0.",
        tvdb_guests: "Gilman Louie, President of Spectrum Holobyte, Major Bill Stealey, President of MicroProse, and Moses Ma, Chairman of Velocity Development.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "flightsimula",
    },
    {
        tvdb_episode: "S07E22",
        tvdb_title: "Computers on Campus",
        tvdb_description: "Clarkson University, in upstate New York, was the first college in the country to provide every student with a personal computer, a Zenith AT PC. Drexel University, in Philadelphia, was the first university to do the same, only they required all incoming students to buy a Macintosh. This program looks at the changing experience of students and faculty at Clarkson and Drexel as personal computers became an essential \"school supply\". Shot on location at Drexel and Clarkson.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "oncampus",
    },
    {
        tvdb_episode: "S07E23",
        tvdb_title: "High Tech France: Part 1",
        tvdb_description: "A look at the high-tech industry in France, shot on location in Paris. The focus of this program is the MiniTel system, the French precursor to the Internet. Applications demonstrated include banking, home shopping, classifieds, news, and advertising. Also includes a visit to U.S. West in Omaha which was one of the first American companies to experiment with the MiniTel technology.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "frenchtech1",
        tvdb_date: "April 25, 1990"
    },
    {
        tvdb_episode: "S07E24",
        tvdb_title: "High Tech France: Part 2",
        tvdb_description: "The second part of our review of French technology, shot on location in France. Included are ISDN, fiber optics, smart cards, the 185 mph TGV high-speed train, and a look inside the workings of the supersonic Concorde.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "episode_724",
        tvdb_date: "May 2, 1990"
    },
    {
        tvdb_episode: "S07E25",
        tvdb_title: "Computer Bowl II: Part 1",
        tvdb_description: "The second annual Computer Bowl with East coast versus West coast to determine the Master of Computer Trivia. West coast team: John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler. East coast team: Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer. Guest questioner: Mitchell Kapor. Host: Stewart Cheifet.",
        tvdb_guests: "John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler, Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer, Mitchell Kapor",
        tvdb_broadcastyear: "1990",
        ia_identifier: "compbowl1",
    },
    {
        tvdb_episode: "S07E26",
        tvdb_title: "Computer Bowl II: Part 2",
        tvdb_description: "The conclusion of the second annual Computer Bowl with East meeting West for the title of Master of Computer Trivia. West coast team: John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler. East coast team: Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer. Guest questioner: Mitchell Kapor. Host: Stewart Cheifet.",
        tvdb_guests: "John Doerr, Bill Gates, Stewart Alsop, Charles House, Lawrence Tesler, Pat McGovern, Bob Frankston, William Foster, Edward Friedkin, Russell Planjizer, Mitchell Kapor",
        tvdb_broadcastyear: "1990",
        ia_identifier: "compbowl2",
    },
    {
        tvdb_episode: "S08E01",
        tvdb_title: "Global Software Market - SPA Cannes",
        tvdb_description: "As the decade of the nineties began, it became clear the United States was dominating the world software market. This program is an on-location report on an international software conference, presented by the Software Publishers Association, in Cannes, France.",
        tvdb_guests: "Bill Gates, Phillipe Kahn, Esther Dyson, Stewart Alsop, Heidi Roizen, Doug Carlston, and Kirk Loevner.",
        ia_identifier: "globalsw",
    },
    {
        tvdb_episode: "S08E02",
        tvdb_title: "Windows 3.0",
        tvdb_description: "The first major upgrade to Windows was the 3.0 version, launched in 1990. This program reviews Windows 3.0 , some competitive products, and it looks at some Windows add-ons designed to make it work better.",
        tvdb_demos: "Windows 3.0, ToolBook 1.0 from Asymetrix, PowerPoint 2.0 for Windows, DR-DOS 5.0 from Digital Research, GEM from Digital Research, GEOS and Ensemble from GeoWorks, and ViewMax.",
        tvdb_broadcastmonthyear: "September 1990",
        ia_identifier: "windows30",
        tvdb_date: "April 10, 1990"
    },
    {
        tvdb_episode: "S08E03",
        tvdb_title: "Hypertext",
        tvdb_description: "Apple's Hypercard 2.0 brought new sophistication to the concept of hypertext, and laid the groundwork for the powerful Internet concept of hyperlinks. This program looks at new hypertext based applications including Hypercard 2.0, Hyperties 3.0, Spinnaker's PLUS 2.0, and Guide 3.0.",
        tvdb_demos: "Hypercard 2.0, Hyperties 3.0, Spinnaker's PLUS 2.0, and Guide 3.0.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "hypertext",
    },
    {
        tvdb_episode: "S08E04",
        tvdb_title: "Rebirth of the Home Computers",
        tvdb_description: "After disasters like IBM's PC Jr and the failure of PC companies like Texas Instruments and Atari, the future of home personal computers didn't look so good. But in 1990 a new generation of home PCs brought the business back. This program looks at the products that led to this rebirth, including the IBM PS/1, the Tandy 1000, the Magnavox Headstart, the Macintosh LC and the Mac Classic. Also includes coverage of the Commodore 64 and analysis from Dataquest.",
        tvdb_demos: "IBM PS/1, the Tandy 1000,Magnavox Headstart, Macintosh LC, Mac Classic, Commodore 64, Dataquest Analysis",
        tvdb_broadcastyear: "1990",
        ia_identifier: "homepcs",
        tvdb_date: "October 18, 1990"
    },
    {
        tvdb_episode: "S08E05",
        tvdb_title: "Palmtop Computers",
        tvdb_description: "In the eighties we moved from desktops to laptops. In the nineties we started to move from laptops to palmtops. This program looks at several handheld computing devices including Selectronics Word Finder Thesaurus, Berlitz Euro Traveler, Random House Encyclopedia, Franklin's Elementary Spelling Ace, Language Master 4000 Speaking Dictionary, Electronic Holy Bible, Sharper Image's Electronic Golf Game, Self Dialing Electrodex, Bridge Computer, Talking Translator, Sharp's Wizard OZ 8200, Casio's BOSS SF9500, Atari Portfolio, HP 17C and HP 19C. Guest host is Peter Nichols. Co-host is Tim Bajarin.",
        tvdb_demos: "Word Finder Thesaurus, Berlitz Euro Traveler, Random House Encyclopedia, Franklin Elementary Spelling Ace, Language Master 4000 Speaking Dictionary, Electronic Holy Bible, Sharper Image Electronic Golf Game, Self Dialing Electrodex, Bridge Computer, Talking Translator, Sharp Wizard OZ 8200, Casio BOSS SF9500, Atari Portfolio, HP 17C, HP 19C",
        tvdb_guests: "Peter Nichols; Tim Bajarin",
        tvdb_broadcastyear: "1990",
        ia_identifier: "palmtops",
    },
    {
        tvdb_episode: "S08E06",
        tvdb_title: "Input Devices",
        tvdb_description: "While we now take a computer mouse for granted, fifteen years ago there was still a debate about what would be the ultimate pointing device. This program reviews several options including the PowerMouse, the MousePenPortable, Wacom's Cordless Digitzer, MicroSpeed's PC-TRAC trackball, the first optical mouse PCMouse III from Mouse Systems, the OmniMac Ultra, Elographics MonitorMouse, and Mac'n Touch and the UnMouse from MicroTouch.",
        tvdb_demos: "PowerMouse, MousePenPortable, Wacom's Cordless Digitzer, MicroSpeed PC-TRAC trackball, Mouse Systems PCMouse III, the OmniMac Ultra, Elographics MonitorMouse, MicroTouch Mac'n Touch, MicroTouch UnMouse",
        tvdb_broadcastyear: "1990",
        ia_identifier: "inputdevices",
        tvdb_date: "January 11, 1990"
    },
    {
        tvdb_episode: "S08E07",
        tvdb_title: "The Amiga 3000",
        tvdb_description: "For fans of the Commodore Amiga, the introduction of the new Amiga 3000 was big news, even though the price tag was nearly $4,000. This program looked at the new Amiga computer and new third party appplications. Also includes a visit to FAUG, the First Amiga Users Group, in Palo Alto.",
        tvdb_demos: "Amiga 3000, Amiga 2500, AmigaVision authoring system, The Animation Studio, NewTek Video Toaster",
        tvdb_guests: "Paul Montgomery, Tim Jenison, Lou Wallace, Hedley Davis",
        tvdb_broadcastyear: "1990",
        ia_identifier: "amiga3000",
    },
    {
        tvdb_episode: "S08E08",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E09",
        tvdb_title: "Consumer's Buying Guide (1990)",
        tvdb_description: "A guide to cool new high tech gifts for the holiday season. Featured are product recommendations from Jan Lewis, Paul Schindler, Chris Barr, Andrew Eisner, and Stewart Cheifet.",
        tvdb_demos: "Quicken, TurboTax, Fax-O-Matic, Stacker, Rampack, Grammatik, Lotus Magellan, After Dark, Play It By Ear, Bible Illustrator, Computer Critters, Where in Time is Carmen San Diego, Cosmic Osmo, Sky Shadow, Amanda Stories, Designer Fractal, Visonary Software Lifeguard.",
        tvdb_guests: "Jan Lewis, Paul Schindler, Chris Barr, Andrew Eisner",
        ia_identifier: "buyersguide",
    },
    {
        tvdb_episode: "S08E10",
        tvdb_title: "Memory Management",
        tvdb_description: "There used to be a limit to the amount of memory you could have in a DOS based computer - 640k. But as new applications demanded more RAM, utilities came out to try and solve that problem. This program looks at solutions such as QEMM-386, Manifest, and Optimize from Quarterdeck. Also, 386Max 5.1, DESQview, OS/2 1.21, Virtual 2.0, and AutoCAD's DOS Extender.",
        tvdb_demos: "QEMM-386, Manifest, Quarterdeck Optimize, 386Max 5.1, DESQview, OS/2 1.21, Virtual 2.0, AutoCAD DOS Extender",
        tvdb_broadcastyear: "1990",
        ia_identifier: "memory_2",
    },
    {
        tvdb_episode: "S08E11",
        tvdb_title: "Video Game Consoles",
        tvdb_description: "Computers became a great platform for game players, but dedicated videogame consoles were even better. This program compares the various videogame platforms.",
        tvdb_demos: "\"Defender of the Crown\" on an IBM PC, \"SimEarth\" on Mac IIci, \"Michael Jackson Moonwalker\" and \"Mickey Mouse in the Castle of Illusion\" on a Sega Genesis, \"Super Mario Brothers 3\" and \"The Legend of Zelda\" on a Nintendo NES, \"Bonk's Adventure and Ys\" on an NEC TurboGrafx.",
        tvdb_guests: "Russel DeMaria, author of Sega Genesis Secrets, Nintendo Games Secrets, and Secrets of Game Boy. Also features a visit to Nintendo Powerfest and the Alladin's Castle Arcade.",
        ia_identifier: "videogames_2",
        tvdb_date: "December 6, 1990"
    },
    {
        tvdb_episode: "S08E12",
        tvdb_title: "Computer Viruses",
        tvdb_description: "Viruses are spreading to personal computers and causing havoc to individuals and businesses. A look at how to prevent viruses from destroying your system.",
        tvdb_guests: "John Dickinson, PC Labs; Andrew Seybold, Natl LAN Lab; Robert Capon, HJC Software; Jack Mc; Daniel, Magna; Dave Fischer, NASA Ames; Jim Mount, PME Labs; Gary Kildall, DRI",
        tvdb_demos: "Flu Shot; Virex; Empower",
        ia_identifier: "viruses_3",
        tvdb_date: "January 17, 1989"
    },
    {
        tvdb_episode: "S08E13",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E15",
        tvdb_title: "Speech Technology",
        tvdb_description: "A look at voice recognition and speech synthesis technologies.",
        tvdb_demos: "Dragon Dictate, VPC 1000 Speech Recognition add-on board, Articulate Systems Voice Navigator, MacSema Voice Express, Selectronics Berlitz Speaking Translator",
        tvdb_broadcastyear: "1990",
        ia_identifier: "speech_2",
    },
    {
        tvdb_episode: "S08E16",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E17",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E18",
        tvdb_title: "Macros",
        tvdb_description: "As computer users discovered that many of the tasks they did on computers required repetitive commands, there became a growing interest in software that could record and automate a series of keystrokes. This program looks at several options for macros including PowerMacros for Lotus 1-2-3, WordPerfect Macros & Templates, Excel Macros, QuicKeys, AutoKey, and PowerMouse.",
        tvdb_broadcastyear: "1991",
        tvdb_demos: "PowerMacros for Lotus 1-2-3, WordPerfect Macros & Templates, Excel Macros, QuicKeys, AutoKey, and PowerMouse",
        ia_identifier: "macros_2",
    },
    {
        tvdb_episode: "S08E19",
        tvdb_title: "REPEAT [Computers and the Pentagon: Part 1]",
        tvdb_description: "A 1991 rebroadcast, during the first Gulf War, of an earlier program looking at the use of computer technology by the Defense Department. Includes coverage of flight simulators, expert systems and artificial intelligence used in weapons systems, military robots being developed at Carnegie Mellon University, research in the Strategic Defense Initiative program, and the relationship between Silicon Valley and DARPA.",
        tvdb_guests: "Gary Kildall and Raj Reddy.",
        tvdb_broadcastyear: "1986",
        is_identifier: "pentagon1",
        tvdb_date: "February 5, 1991"
    },
    {
        tvdb_episode: "S08E20",
        tvdb_title: "REPEAT [Computers and the Pentagon: Part 2]",
        tvdb_description: "A 1991 rebroadcast, during the first Gulf War, of a program looking at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country. Featured are demonstrations of SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, and the Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats.",
        tvdb_broadcastyear: "1986",
        ia_identifier: "pentagon2",
        tvdb_date: "February 12, 1991"
    },
    {
        tvdb_episode: "S08E21",
        tvdb_title: "CD-ROM Software (1991)",
        tvdb_description: "In the early 1990's the computer industry settled on a CD-ROM standard and that fanned the growth of CD-ROMs as a storage medium. This program looks at several early CD-ROM applications including The Bureau of Electronic Publishing's U.S. History, Compton's Multimedia Encyclopedia, Warner New Media's String Quartet, the Computer Libray, Magazine Rack, the Health Reference Center, Semaphore's Zip4, and Mixed Up Mother Goose.",
        tvdb_demos: "Bureau of Electronic Publishing's U.S. History, Compton Multimedia Encyclopedia, Warner New Media String Quartet, Computer Libray, Magazine Rack, Health Reference Center, Semaphore's Zip4, and Mixed Up Mother Goose",
        tvdb_broadcastyear: "1991",
        ia_identifier: "cdroms_2",
    },
    {
        tvdb_episode: "S08E22",
        tvdb_title: "Sleeper Software",
        tvdb_description: "Most popular software titles get there as the result of an expensive sales and marketing campaign. Other programs are so popular they climb to the top of the charts just through word-of-mouth, or BBS chat. This program looks at several of these \"sleeper\" software programs that are worthy of note.",
        tvdb_demos: "Commander Keen, PopDBF, Resident Task Manager, Prism, Pianoman, 4DOS, CommandPost, Windows Wallpaper, LCD 2.0, LJ2UP, MacBillboard, BigCheese, Ripper FKey, TappyType, Fish!, Globe, Solarian II, Melt DA, Address Book, FlashWrite, Stuffit, ToDo!, TidyItUp, DisKeeper, Red Ryder, White Knight, Vietnam War",
        tvdb_guests: "Jim Button, founder of the Association of Shareware Professionals.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "sleepersw",
    },
    {
        tvdb_episode: "S08E23",
        tvdb_title: "Flight Simulators",
        tvdb_description: "A review of flight simulator software.",
        tvsb_demos: "Falcon AT 1.11, F-15 Strike Eagle II, Jet Fighter 1.5, A-10 Tank Killer 1.2, subLOGIC's Flight Simulator ATP 1.0, Microsoft Flight Simulator 4.0",
        tvdb_guests: "Gilman Louie, President of Spectrum Holobyte, Major Bill Stealey, President of MicroProse, and Moses Ma, Chairman of Velocity Development.",
        tvdb_broadcastyear: "1990",
        ia_identifier: "episode_823",
    },
    {
        tvdb_episode: "S08E24",
        tvdb_title: "Consumer Electrons Show (CES) (1991)",
        tvdb_description: "Highlights from the annual winter Consumer Electronics Show in Las Vegas featuring new personal technology products.  Products covered include IBM PS/1, Commodore CD-TV, Kodak Photo CD, Sansui Robot CD Changer, Franklin Concise Columbia Encyclopedia, Brother Powernote, Laser PC-4, Sega GameGear and the Miracle Piano Teaching System from Software Toolworks.",
        tvdb_guests: "Nolan Bushnell;Heidi Roizen, CEO of T/Maker",
        tvdb_broadcastyear: "1991",
        ia_identifier: "ces_2",
        tvdb_date: "March 12, 1991"
    },
    {
        tvdb_episode: "S08E25",
        tvdb_title: "Computers and Medicine",
        tvdb_description: "A look at how doctors and health professionals are using computer technology to change the practice of medicine.",
        tvdb_demos: "Grateful Med; MDX Health Digest; Interactive Medical Record; DxR; Mammography Teaching File; a microprocessor controlled insulin pump; ImageQuest, a computer based system for doing opthalmological examinations; and a visit to the Health Care Information & Management Systems Society Conference in San Francisco.",
        tvdb_guests: "Dr. Bill Helvey, Dr. Edward Shultz, Dr. Hurley Myers, and Dr. Ralph Smathers.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "medicalcare",
    },
    {
        tvdb_episode: "S08E26",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S08E27",
        tvdb_title: "Scanners",
        tvdb_description: "With the growth of desktop publishing, scanners became an important new PC peripheral, with sales in the early 1990s growing at 250% per year. This program looks at several scanner options including Logitech's ScanMan, the AVR 3000/GS Plus from Advanced Vision Research, Epson's ES-300C, Sharp's JX-600, the SpeedScanner from Array Technologies, the Caere handheld scanner, and HP's ScanJet Plus. Guest cohost is Heidi Roizen of T/Maker.",
        tvdb_demos: "Logitech's ScanMan, the AVR 3000/GS Plus from Advanced Vision Research, Epson's ES-300C, Sharp's JX-600, the SpeedScanner from Array Technologies, the Caere handheld scanner, and HP's ScanJet Plus",
        tvdb_guests: "Heidi Roizen, CEO of T/Maker",
        tvdb_broadcastyear: "1991",
        ia_identifier: "scanners",
    },
    {
        tvdb_episode: "S08E28",
        tvdb_title: "Computers and Sports (1991)",
        tvdb_description: "A look at how computers are being used to play, train, and learn about sports. Featured products include Playball, Proline, Bedas-2 Biovec System, Tekna's Computek, Oceanic's Datamax Sport, Peak 3D, Desktop Logbook, Sea Quest SME Dive Computer, and Jack Nicklaus' Unlimited Golf & Course Design. Also includes a look at how HP computers are being used to design and plan for the America's Cup race and a visit with the San Francisco 49ers to see how they use computer databases to catalog plays.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_846",
    },
    {
        tvdb_episode: "S08E29",
        tvdb_title: "Software in the Schools",
        tvdb_description: "With computer hardware showing up in just about every school, this program looks at software applications designed for the school environment.",
        tvdb_demos: "KidPix, NuberMaze, ReadingMaze, Math Blaster Mystery, Point of View, MediaWorks, Super Solvers Outnumbered",
        tvdb_broadcastyear: "1991",
        ia_identifier: "schoolsw",
    },
    {
        tvdb_episode: "S08E30",
        tvdb_title: "Fonts and Graphics",
        tvdb_description: "The advent of desktop publishing software got people thinking about fonts and the endless choice of ways to present text on a computer. This program looks at the art of font selection.",
        tvdb_demos: "WordPerfect, PostScript, HP LaserJet III, TypeAlign, Type On Call, Adobe Type Manager, MacWrite, Apple StyleWriter, Apple LaserWriter, Bitstream's FaceLift, FontMonger",
        tvdb_broadcastyear: "1991",
        ia_identifier: "fonts_2",
    },
    {
        tvdb_episode: "S08E31",
        tvdb_title: "Network Security",
        tvdb_description: "As local area networks grew, so did concerns for network security. This program looks at some early solutions.",
        tvdb_demos: "FileGuard 2.5 for the Mac, MaccessCard, PhoneNET Liaison 3.0, SiteLock, SecurID, MailSafe",
        tvdb_guests: "security expert and author Cliff Stoll.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "networksecur",
        tvdb_date: "April 23, 1991"
    },
    {
        tvdb_episode: "S08E32",
        tvdb_title: "Computer Bowl III: Part 1",
        tvdb_description: "The third annual Computer Bowl with East coast geeks up against West coast nerds to see who knows more about computer trivia. West coast team: Philippe Kahn, Heidi Roizen, Ed Juge, Dave House, David Liddle. East coast team: John Markoff, Pamela McCorduck, John Armstrong, James Clark, Samuel Fuller. Guest questioner: Bill Gates. Host: Stewart Cheifet.",
        tvdb_guests: "Philippe Kahn, Heidi Roizen, Ed Juge, Dave House, David Liddle, John Markoff, Pamela McCorduck, John Armstrong, James Clark, Samuel Fuller, Bill Gates",
        tvdb_broadcastyear: "1991",
        ia_identifier: "computerbowl",
    },
    {
        tvdb_episode: "S08E33",
        tvdb_title: "Computer Bowl III: Part 2",
        tvdb_description: "The conclusion of the third annual Computer Bowl contest, held as a fund-raiser for the Computer Museum of Boston. The game pits a team from the east coast against a squad from the west coast to see who knows more about computer trivia. Contestants include John Markoff, Dave House, Ed Juge, Pamela McCorduck, Heidi Roizen, and Philippe Kahn. The judges are John Doerr and Pat McGovern. The questioners are Bill Gates and Stewart Cheifet. The event occurred at the San Jose Convention Center. Copyright 1991.",
        tvdb_guests: "Philippe Kahn, Heidi Roizen, Ed Juge, Dave House, David Liddle, John Markoff, Pamela McCorduck, John Armstrong, James Clark, Samuel Fuller, Bill Gates",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_851",
    },
    {
        tvdb_episode: "S08E34",
        tvdb_title: "Neural Networks",
        tvdb_description: "Neural networks are artificial intelligence systems modeled after the human brain. This program looks at several examples and applications. Also includes visits to NASA and Intel to see the work they're doing on neural networks.",
        tvdb_demos: "Promised Land Technologies Braincel 1.1, California Scientific Software BrainMaker Professional 2.0, Neurix MacBrain 3.0, Cognition Technology NeuroSMARTS, HNC ExploreNet",
        tvdb_broadcastyear: "1991",
        ia_identifier: "neuralnetwor",
    },
    {
        tvdb_episode: "S08E46",
        tvdb_title: "REPEAT [Computers and Sports (1991)]",
        tvdb_description: "A look at how computers are being used to play, train, and learn about sports. Featured products include Playball, Proline, Bedas-2 Biovec System, Tekna's Computek, Oceanic's Datamax Sport, Peak 3D, Desktop Logbook, Sea Quest SME Dive Computer, and Jack Nicklaus' Unlimited Golf & Course Design. Also includes a look at how HP computers are being used to design and plan for the America's Cup race and a visit with the San Francisco 49ers to see how they use computer databases to catalog plays.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_846",
    },
    {
        tvdb_episode: "S09E01",
        tvdb_title: "Macintosh System 7.0",
        tvdb_description: "A look at the new 7.0 operating system for the Macintosh. Demostrations of the finder, file sharing, publish & subscribe, virtual memory, and aliasing. Also a comparative look at the new DOS 5.0.",
        tvdb_demos: "Claris Works, Deneba's Canvas, DOS 5.0",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_909",
    },
    {
        tvdb_episode: "S09E02",
        tvdb_title: "Windows Applications",
        tvdb_description: "With the advent of Windows 1.0, software vendors came out with new programs to take advantage of the new GUI operating system. This program demonstrates several of those new applications.",
        tvsb_demos: "Norton Desktop for Windows, WordPerfect for Windows, Lotus 1-2-3 for Windows, Microsoft Works for Windows, PFS WindowWorks, Microsoft Money, Visual Basic for Windows, Borland's ObjectVision, Microsoft Publisher",
        tvdb_broadcastyear: "1991",
        ia_identifier: "windowsapps",
    },
    {
        tvdb_episode: "S09E03",
        tvdb_title: "File Compression Technology",
        tvdb_description: "As files got larger and disk storage capacity stagnated, software developers came up with utilities to compress and shrink the size of files.",
        tvdb_demos: "PKZip, Stacker, StuffIt Deluxe, DoubleUp, VideoSpigot, ReelTime, PicturePress, Impressit, Handmade Software, Disk Doubler",
        tvdb_guests: "Phil Katz, president of PKWare; Gary Clow, president of Stac Electronics; and David Schargel, president of Aladdin Systems.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "filecompress",
    },
    {
        tvdb_episode: "S09E04",
        tvdb_title: "Computer Displays",
        tvdb_description: "With color and graphics moving into the world of personal computers, display technology became an important subject. This program looks at several display solutions including Orchid Technology's Fahrenheit 1280 Graphics Accelerator card, NEC's MultiSync 5FG monitor, the Full Page Pivot Display and the Precision Color Display from Radius, and Mitsubishi's Diamond Pro 37\" monitor. Also includes highlights from the Seybold Conference and Apple's new two page color monitor.",
        tvdb_demos: "Orchid Technology Fahrenheit 1280 Graphics Accelerator card, NEC MultiSync 5FG monitor, Radius Full Page Pivot Display, Radius Precision Color Display, Mitsubishi Diamond Pro 37\" monitor",
        tvdb_broadcastyear: "1991",
        ia_identifier: "displays_2",
    },
    {
        tvdb_episode: "S09E05",
        tvdb_title: "Foreign Language Software",
        tvdb_description: "A review of computer programs that help you learn or understand a foreign language. Featured products include Language Assistant Series: Italian, Transparent Language: German/French/Latin, Speak to the World in Spanish, Hyperglot Chinese, and Hyperglot Japanese. Also visits to the Foreign Language Center of the Defense Language Institute in Monterey, California and the Voice of America's System for News and Programming (SNAP) in Washington D.C. which operates in 45 different languages.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_920",
    },
    {
        tvdb_episode: "S09E06",
        tvdb_title: "Tandy - Radio Shack Computers",
        tvdb_description: "Many computer users got their start with the TRS-80, the Tandy Color Computer, or the Model 100 portable computer. This program looks at the role Radio Shack played in the early launch of personal computers and the hordes of users who still love their old Tandy PCs. Also shown is the original TRS-80 and some of the earlier cassette based software such as Dancing Demon.",
        tvdb_demos: "Tandy 2500 SX/20, Tandy 4033 LX, GRiD 1550cd, GRiD 325sc, TRS-80, Dancing Demon",
        tvdb_guests: "Howard Elias, Vice President of Tandy Computers; Mark Paulson, leader of the Color Computer User's Group.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_921",
    },
    {
        tvdb_episode: "S09E07",
        tvdb_title: "Laptops and Handhelds",
        tvdb_description: "Portability was becoming a big issue in the early 90's. This program looked at several new portable computing solutions including Grid Systems RS Wireless, the Momenta Pentop Computer, NEC's Ultralite Cellular Workstation, IBM's PC Radio, Apple's PowerBook 100, AST's Premium Exec Color Notebook, and HP's 95LX Palmtop PC.",
        tvdb_demos: "Grid Systems RS Wireless, Momenta Pentop Computer, NEC Ultralite Cellular Workstation, IBM PC Radio, Apple PowerBook 100, AST Premium Exec Color Notebook, HP 95LX",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_929",
    },
    {
        tvdb_episode: "S09E08",
        tvdb_title: "Computer Games",
        tvdb_description: "A look at the hottest computer games in the early 1990's. Also features a visit to Lucasfilm Games and their development process for titles such as Indiana Jones, The Fate of Atlantis, Monkey Island 2, and Lechuck's Revenge. Another segment looks at the InGolf Simulator from TOP Pro Sports, a game which actually teaches you how to play better golf.",
        tvsb_demos: "Wordtris, Crisis in the Kremlin, Earl Weaver Baseball II, Railroad Tycoon, Playmaker Football 2.0, King's Quest V, The Games: Winter Challenge, TSN (The Sierra Network), TOP Pro Sports InGolf Simulator, Lucasfilm Games Indiana Jones, Lucasfilm Games The Fate of Atlantis, Lucasfilm Games Monkey Island 2, Lucasfilm Games Lechuck's Revenge",
        tvdb_guests: "Gilman Louie, President of Spectrum Holobyte; Michael Brook, Electronic Arts; Bruce Shelley, MicroProse.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_932",
    },
    {
        tvdb_episode: "S09E09",
        tvdb_title: "Comdex Fall Special (1991)",
        tvdb_description: "On location coverage of the annual fall Comdex trade show in Las Vegas. Includes highlights of the Bill Gates keynote speech. Features analysis from Tim Bajarin of Creative Strategies.",
        tvdb_guests: "Tim Bajarin, Creative Strategies",
        tvdb_broadcastyear: "1991",
        ia_identifier: "ar_cc173_comdex_fall",
    },
    {
        tvdb_episode: "S09E10",
        tvdb_title: "PC Networks",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E11",
        tvdb_title: "Consumer's Buying Guide (1991)",
        tvdb_description: "An annual holiday season guide to the coolest new high tech gadgets and computer products.",
        tvdb_demos: "Triftan Digital Pinball Machine, DigiVideo, Quicken for Mac, Painter, Armx, PowerBook 170, Power Bundle, Sim Ant, Wrist Mac, About Cows, Far Side Computer Calendar, Wedding Planner, Wordstar for Windows, I Hate Algebra, Screen Craze, Lemmings, Thumbelina, Agenda, Norton Desktop, Logitech Fotoman",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_937",
    },
    {
        tvdb_episode: "S09E12",
        tvdb_title: "Groupware",
        tvdb_description: "Groupware was the buzzword of the early 1990s as users wanted to find ways to connect their personal computers, their applications and their data, and find platforms for sharing and collaborative work.",
        tvb_demos: "Lotus Notes, Higgins, Meeting Maker, Instant Update, Aspects, BeyondMail",
        tvdb_broadcastmonthyear: "December 1991",
        ia_identifier: "groupware_2",
    },
    {
        tvdb_episode: "S09E13",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E15",
        tvdb_title: "Integrated Software Suites",
        tvdb_description: "The software trend in the early 1990s was to bundle different applications together in integrated office \"suites\". This program looks at several early integrated packages.",
        tvdb_demos: "LotusWorks, WindowWorks, BeagleWorks, ClarisWorks, AppleWorks, Microsoft Works, Ragtime for the Macintosh.",
        ia_identifier: "integratedso",
    },
    {
        tvdb_episode: "S09E16",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E17",
        tvdb_title: "Build Your Own PC",
        tvdb_description: "Why buy a computer when you can build your own? This program looks at various approaches to assembling your own PC. Featured are the Chips and Technologies F8680 chip which is a complete PC on a chip solution, instructions on how to build your own 386 PC and 386sx PC, advice on how to perform a do-it-yourself upgrade to a 486s PC, and tips on building your own computer using components from ALR, Advance Logic Research.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_940",
    },
    {
        tvdb_episode: "S09E18",
        tvdb_title: "Computer Video",
        tvdb_description: "The worlds of television and computers are quickly converging. This program looks at new video applications on personal computers.",
        tvdb_demos: "NewTek Video Toaster, Impact Vision 24, Scala for the Amiga, SuperMac Video Spigot, Adobe Premiere, IBM PS/2 TV, Actionmedia II board.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_941",
    },
    {
        tvdb_episode: "S09E19",
        tvdb_title: "Tax Preparation Software",
        tvdb_description: "A look at early versions of tax preparation software. . Also, a visit to the IRS headquarters in Philadelphia to see how they use computers and a look at how tax preparation software is tying in to personal finance packages. An example is Parson's Personal Tax Edge and Parson's Money Counts.",
        tvdb_demos: "J. K. Lasser's Your Income Tax, Timeworks EasyTax 1991, ChipSoft TurboTax for Windows, MacInTax, Andrew Tobias' TaxCut for Windows, Parson Personal Tax Edge, Parson Money Counts",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_927",
    },
    {
        tvdb_episode: "S09E20",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E21",
        tvdb_title: "REPEAT [Tandy - Radio Shack Computers]",
        tvdb_description: "Many computer users got their start with the TRS-80, the Tandy Color Computer, or the Model 100 portable computer. This program looks at the role Radio Shack played in the early launch of personal computers and the hordes of users who still love their old Tandy PCs. Featured",
        tvdb_demos: "the Tandy 2500 SX/20, the Tandy 4033 LX, the GRiD 1550cd, the GRiD 325sc. Also shown is the original TRS-80 and some of the earlier cassette based software such as Dancing Demon.",
        tvdb_guests: "Howard Elias, Vice President of Tandy Computers and Mark Paulson, leader of the Color Computer User's Group.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_921",
    },
    {
        tvdb_episode: "S09E22",
        tvdb_title: "MIDI Music",
        tvdb_description: "A look at the new role of personal computers in making music.",
        tvdb_demos: "Super Jam from Blue Ribbon Soundworks, Encore for Windows from Passport Designs, EZ Vision and Studio Vision from Opcode Systems, and the Miracle Piano. The show incudes visits to the Stanford Center for Computer Research in Music and Acoustics and the annual National Association of Music Merchants (NAMM) convention is Los Angeles.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "midimusic",
    },
    {
        tvdb_episode: "S09E23",
        tvdb_title: "Computers and the Disabled (1992)",
        tvdb_description: "Computers can be a challenge for people with disabilities. This program looks at several options for making hardware and software that is user friendly for the disabled.",
        tvdb_demos: "Berkeley Systems' Outspoken, Ke:nx, Co:Writer, Eureka A4, THINKable, Speech Viewer, the Unicorn Smart Keyboard, and ProsthesisWare.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "disabled_2",
    },
    {
        tvdb_episode: "S09E24",
        tvdb_title: "Intel 486",
        tvdb_description: "In 1992, the big issue was - is it worth the money to upgrade my 386 PC to the new 486 chip? This program looks at the performance of the new Intel 486 and helps users decide.",
        tvdb_demos: "running AutoCAD on a 386 and a 486 PC; running an SQL database server on both processors; a look at the new SENSE 8 486 laptop from Dolch Systems; a look at how bus speed affects computer performance using a demonstration with Animator Pro; a review of Intel's Clock Doubler; and a look at 486 upgrade kit from Amkly Systems.",
        ia_identifier: "intel486",
    },
    {
        tvdb_episode: "S09E25",
        tvdb_title: "CD-ROM Software (1992)",
        tvdb_description: "The introduction of CD-ROMS enabled a whole new era of more robust software applications. This program looks at several examples including Educorp's Dictionary of the Living World, Wayzata's Space Time and Art, French Language Software from VIVA 2000, the Voyager Company's Silly Noisy House, the American Business Phone Book, and Great Literature on CDROM from the Bureau of Electronic Publishing.",
        tvdb_demos: "Educorp Dictionary of the Living World, Wayzata Space Time and Art, VIVA 2000 French Language Software, Voyager Company's Silly Noisy House, The American Business Phone Book, Great Literature on CDROM from the Bureau of Electronic Publishing",
        tvdb_broadcastyear: "1992",
        ia_identifier: "cdromsw",
    },
    {
        tvdb_episode: "S09E26",
        tvdb_title: "Space and Astronomy Software",
        tvdb_description: "The first computer game ever was SpaceWars, written in 1962. Ever since then there has been a close relationship between space science and computer science. NASA could not exist without today's powerful computers. This program looks at space and astronomy software for consumers. Included are games such as Star Trek V, Space Quest V, Wing Commander II, and Spaceship Warlock. Astronomy programs demonstrated include Voyager the Dynamic Sky Simulator, The Sky for Windows, STS Orbit, VGA Trek, Star Trek: The Kobayashi Alternative, and Dance of the Planets. Also included is a visit to the Star Trek 25th Anniversary Exhibit at the Smithsonian Air and Space Museum in Washington.",
        tvdb_demos: "Star Trek V, Space Quest V, Wing Commander II, Spaceship Warlock, Voyager: the Dynamic Sky Simulator, The Sky for Windows, STS Orbit, VGA Trek, Star Trek: The Kobayashi Alternative, Dance of the Planets",
        ia_identifier: "episode_946",
    },
    {
        tvdb_episode: "S09E27",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E28",
        tvdb_title: "Easy to Use Database Software",
        tvdb_description: "Database software is sometimes overwhelming to average users. This looks at some databases which are powerful yet easy to use.",
        tvdb_demos: "Included are Panorama from ProVUE, FileMaker Pro from Claris, Borland's Paradox, and FoxPro 2.0.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_947",
    },
    {
        tvdb_episode: "S09E29",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E30",
        tvdb_title: "Virtual Reality",
        tvdb_description: "Virtual reality started out as a science fiction concept in the early 1950s. Now, VR has become a kind of holy grail - lots of promises and claims, few results delivered. This program looks at the state of virtual reality. Also includes a visit to the Virtual Reality Showcase at the Software Development Conference in Santa Clara, California.",
        tvdb_demos: "The Talking Glove, AutoDesk Cyberspace project, The Virtual Hand, GestureGlove, CyberGlove, CyberCAD, Virtus Corporation's WalkThrough.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "virtualreali",
    },
    {
        tvdb_episode: "S09E31",
        tvdb_title: "Computers and Kids",
        tvdb_description: "A look at how young people are using computers in school and at home. Featured applications include Operation Neptune from The Learning Company, HyperCard applications created by students, and several other programs created by middle school students. Also featured is a visit to Electronic Arts where students are used in a focus group to test new games.",
        tvdb_demos: "Operation Neptune from The Learning Company",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_949",
    },
    {
        tvdb_episode: "S09E32",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E33",
        tvdb_title: "Computer Bowl IV: Part 1",
        tvdb_description: "The fourth annual Computer Bowl contest in which techies from the east coast and the west coast challenge each other to see who knows more about computer trivia. Participants include John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, and Bill Machrone. The event took place in Boston. The questioners are Bill Gates and Stewart Cheifet.",
        tvdb_guests: "John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, Bill Machrone, Bill Gates",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_950",
    },
    {
        tvdb_episode: "S09E34",
        tvdb_title: "Computer Bowl IV: Part 2",
        tvdb_description: "The conclusion of the fourth annual Computer Bowl contest in which techies from the east coast and the west coast challenge each other to see who knows more about computer trivia. Participants include John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, and Bill Machrone. The event took place in Boston. The questioners are Bill Gates and Stewart Cheifet. Copyright 1992.",
        tvdb_guests: "John Warnock, John Shock, Heidi Roizen, Pamela McCorduck, Andy Rappaport, Bill Machrone, Bill Gates",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_951",
    },
    {
        tvdb_episode: "S09E35",
        tvdb_title: "Diagnostic Software",
        tvdb_description: "Remember IRQ settings, INITs, TSRs and \"out of memory\" messages? The early days of personal computers were confusing for most users and so a whole new category of software grew up around solving those problems - diagnostic software.",
        tvdb_demos: "WinSleuth, Quarterdeck Manifest, QEMM, Mac EKG 2.0, Snooper, QA Plus, Norton Utilities.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "diagnosticso",
    },
    {
        tvdb_episode: "S09E36",
        tvdb_title: "Comdex Special Spring (1992)",
        tvdb_description: "Highlights of the annual spring Comdex show in Chicago. Featured",
        tvdb_guests: "Bill Gates and Stewart Alsop.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_1001",
    },
    {
        tvdb_episode: "S09E37",
        tvdb_title: "REPEAT [Consumer's Buying Guide (1991)]",
        tvdb_description: "An annual holiday season guide to the coolest new high tech gadgets and computer products. Featured are Triftan Digital Pinball Machine, DigiVideo, Quicken for Mac, Painter, Armx, PowerBook 170, Power Bundle, Sim Ant, Wrist Mac, About Cows, Far Side Computer Calendar, Wedding Planner, Wordstar for Windows, I Hate Algebra, Screen Craze, Lemmings, Thumbelina, Agenda, Norton Desktop, and Logitech's Fotoman.",
        tvdb_broadcastyear: "1991",
        ia_identifier: "episode_937",
    },
    {
        tvdb_episode: "S09E45",
        tvdb_title: "REPEAT [CD-ROM Software (1992)]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S09E46",
        tvdb_title: "REPEAT [Space and Astronomy Software]",
        tvdb_description: "The first computer game ever was SpaceWars, written in 1962. Ever since then there has been a close relationship between space science and computer science. NASA could not exist without today's powerful computers. This program looks at space and astronomy software for consumers. Included are games such as Star Trek V, Space Quest V, Wing Commander II, and Spaceship Warlock. Astronomy programs demonstrated include Voyager the Dynamic Sky Simulator, The Sky for Windows, STS Orbit, VGA Trek, Star Trek: The Kobayashi Alternative, and Dance of the Planets. Also included is a visit to the Star Trek 25th Anniversary Exhibit at the Smithsonian Air and Space Museum in Washington.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_946",
    },
    {
        tvdb_episode: "S10E01",
        tvdb_title: "REPEAT [Comdex Special Spring (1992)]",
        tvdb_description: "Highlights of the annual spring Comdex show in Chicago.",
        tvdb_guests: "Bill Gates, Stewart Alsop",
        tvdb_date: "September 5, 1992"
    },
    {
        tvdb_episode: "S10E02",
        tvdb_title: "Computer Connectivity",
        tvdb_description: "Stand alone personal computers were great, for a while, but soon it became important to connect individual PCs to share files, applications, and peripherals. This program looked at some early connectivity solutions.",
        tvdb_demos: "Novell NetWare Lite, Artisoft AE-3 Ethernet Adaptor, Microcom LAN Bridge 6000, Newport Systems LAN2LAN Mega Router, Chatterbox 4000, cc:Mail, Compsphere 3800 Modem, Tetherless Access Ltd. Wireless WAN",
        tvdb_broadcastyear: "1991",
        ia_identifier: "connectivity_2",
    },
    {
        tvdb_episode: "S10E03",
        tvdb_title: "Computers and Politics (1992)",
        tvdb_description: "A look at how computers were used in the 1992 election campaign, the first time computers were used in a significant way in running political campaigns. Examples include Governor Jerry Brown's presidentail campaign, fund raising by the Democratic National Committee, opinion tracking, and lobbying.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Computer_3",
    },
    {
        tvdb_episode: "S10E04",
        tvdb_title: "Computer Speech",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E05",
        tvdb_title: "Windows Enhancements: Software",
        tvdb_description: "Early versions of Windows left a lot to be desired. So third party software vendors came out with a variety of Windows add-ons.",
        tvdb_demos: "Squeegee, Rooms for Windows, WinMaster, WinDesk, WinTools, ICON Do-It, Dashboard, SuperPrint.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "WindowsE",
    },
    {
        tvdb_episode: "S10E06",
        tvdb_title: "Windows Enhancements: Hardware",
        tvdb_description: "When Windows first came out, it needed help, from software add-ons and hardware add-ons. This program looks at some of the hardware products that helped make the early version of Windows work better.",
        tvdb_demos: "-Mouse Keyboard, Viewsonic 7 monitor, Logitech TrackMan stationary mouse, Diamond Stealth VRAM graphic acclerator, Diamond SuperStar VLB card, WatchIt!TV, Sigma Data custom upgrades, Weitek processor accelerator",
        tvdb_broadcastyear: "1992",
        ia_identifier: "WindowsE_2",
    },
    {
        tvdb_episode: "S10E07",
        tvdb_title: "ETRE Conference Vienna (1992)",
        tvdb_description: "A visit to the first ever European Technology Roundtable Exhibition, the ETRE conference, held in Vienna. The conference featured top technology industry executives from around the world including Scott McNealy of Sun, Lee Reiswig of IBM, Philippe Kahn of Borland, Ed Zander of SunSoft, analyst Esther Dyson, Gerry Sanders of AMD, Jerry Rogers of Cyrix, Steve Ballmer of Microsoft, Eric Benhamou of 3Com, Enrico Pesatori of Zenith, and Jim Manzi of Lotus.",
        tvdb_guests: "Scott McNealy, Sun; Lee Reiswig, IBM; Philippe Kahn, Borland; Ed Zander, SunSoft; Esther Dyson, Analyst; Gerry Sanders, AMD; Jerry Rogers, Cyrix; Steve Ballmer, Microsoft; Eric Benhamou, 3Com; Enrico Pesatori, Zenith; and Jim Manzi, Lotus",
        tvdb_broadcastyear: "1992",
        ia_identifier: "GlobalSo",
    },
    {
        tvdb_episode: "S10E08",
        tvdb_title: "WordPerfect Secrets",
        tvdb_description: "Before Microsoft Word became the default word processing standard for most users, WordPerfect was considered the best one out there. As with many applications, most users didn't know about some of the hidden powers in WordPerfect. This show offers some user tips and some WordPerfect add-ons. Showcased are tools for newsletter design and graphics, general desktop publishing tools, the Button Cube for WordPerfect, the newest version WordPerfect 5.2, a low-cost competitor Swift Word ($7.99), the Mac version of WordPerfect, and the UNIX version of WordPerfect.",
        tvdb_demos: "The Button Cube for WordPerfect, WordPerfect 5.2, Swift Word, WordPerfect for Mac, WordPerfect for UNIX",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Secretso",
    },
    {
        tvdb_episode: "S10E09",
        tvdb_title: "REPEAT [Computers and Politics (1992)]",
        tvdb_description: "A look at how computers were used in the 1992 election campaign, the first time computers were used in a significant way in running political campaigns. Examples include Governor Jerry Brown's presidentail campaign, fund raising by the Democratic National Committee, opinion tracking, and lobbying.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Computer_3",
    },
    {
        tvdb_episode: "S10E10",
        tvdb_title: "Consumer's Buying Guide (1992)",
        tvdb_description: "A holiday season shopping guide for geeks, featuring techno gadget picks by Paul Schindler of Windows magazine, Tim Bajarin of Creative Strategies, Steve Fox of PC World magazine, Jim Martin of Mac World magazine, and program host Stewart Cheifet.",
        tvdb_guests: "Paul Schindler, Windows magazine; Tim Bajarin, Creative Strategies; Steve Fox, PC World magazine; Jim Martin, Mac World magazine",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Computer_6",
    },
    {
        tvdb_episode: "S10E11",
        tvdb_title: "Comdex Special Fall (1992)",
        tvdb_description: "Highlights from the annual fall Comdex show in Las Vegas where the buzzword this year was \"multimedia\". Featured",
        tvdb_guests: "Bill Gates, Tim Bajarin",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_1021",
    },
    {
        tvdb_episode: "S10E12",
        tvdb_title: "Notebook Computers",
        tvdb_description: "A review of the state of the art in notebook computers. Featured products include the AST Premium Exec 386SX/25, the NCR Safari, IBM's ThinkPad 700C, Compaq's Contura 3/25C, and the GRiD Convertible. Also coverage of new notebook introductions at fall Comdex.",
        tvdb_demos: "AST Premium Exec 386SX/25, NCR Safari, IBM ThinkPad 700C, Compaq Contura 3/25C, GRiD Convertible",
        tvdb_broadcastyear: "1992",
        ia_identifier: "notebooks_2",
    },
    {
        tvdb_episode: "S10E13",
        tvdb_title: "REPEAT [Windows Enhancements Software]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E14",
        tvdb_title: "REPEAT [Windows Enhancements Hardware]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E15",
        tvdb_title: "New Age Spreadsheets",
        tvdb_description: "It started out with Visicalc and Lotus 1-2-3, but the world of spreadsheet software changed as new and more powerful applications were introduced. This program looks at several examples including Improv for Windows, CA-Compete, Excel 4.0, Quattro pro for Windows, and Braincel.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "NewAgeSp",
    },
    {
        tvdb_episode: "S10E16",
        tvdb_title: "Computer Art",
        tvdb_description: "A review of hardware and software products for artists. Products reviewed include Opal Vision for the Amiga 4000, Alladin 4D for the Amiga 4000, CorelDraw for Windows, Fractal Design's Painter 1.2 for the Mac, and the Calcomp Drawing Board. Also featured are visits to the Academy of Art College in San Francisco and the studio of computer artist Jim Ludtke.",
        tvdb_demos: "Opal Vision for the Amiga 4000, Alladin 4D for the Amiga 4000, CorelDraw for Windows, Fractal Design's Painter 1.2",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Computer_7",
    },
    {
        tvdb_episode: "S10E17",
        tvdb_title: "Beginner's Guide to PCs",
        tvdb_description: "An introduction to personal computers for newbies. Topics include the basic components of a PC, how to find tech support, managing memory, a guide to online forums, and a review of expansion slots.",
        tvdb_guests: "Jim Louderback, PC Week Labs",
        ia_identifier: "episode_1040",
    },
    {
        tvdb_episode: "S10E18",
        tvdb_title: "Electronic Publishing",
        tvdb_description: "The buzz word in the early 1990s was multimedia. It was the era of the CD-ROM. This program looks at early attempts at electronic publishing for the computer.",
        tvdb_demos: "\"A Hard Day's Night\" and the Expanded Book Tool Kit from The Voyager Company, Arthur's Teacher Trouble from Broderbund, The Whitehorse Child, Impressionism and its Sources, and Trouble in Mind from EBook, Cinemania, Mayo Clinic, Rick Smolan's From Alice to Ocean, and The Well.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "Electron",
    },
    {
        tvdb_episode: "S10E19",
        tvdb_title: "Computer Ergonomics",
        tvdb_description: "With everyone now using computers, there is increasing concerns about the negative health effects of keyboards, mice, and monitors. Products reviewed include the Ergotron Workstation, ErgoDyne's WorkSmart Manager, the Data Hand Keyboard and Mouse, Safe Technologies' ELF/VLF Meter, and the ProView Desk. Also a visit to the VDT Eye Clinic at UC Berkeley.",
        tvdb_demos: "Ergotron Workstation, ErgoDyne WorkSmart Manager, Data Hand Keyboard and Mouse, Safe Technologies ELF/VLF Meter, ProView Desk",
        tvdb_broadcastyear: "1993",
        ia_identifier: "Computer_4",
    },
    {
        tvdb_episode: "S10E20",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E21",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E22",
        tvdb_title: "CD-ROM Software (1993)",
        tvdb_description: "Multimedia was the big deal in the early 90's as software publishers rushed to use the new storage medium for bigger and more interactive programs. This show looks at several new software titles on CD-ROM including Sherlock Holmes from ICOM Simulations, Jazz: A Multimedia History from Compton's New Media, and Battle Chess from MacPlay. Also a look at CD-ROM hardware including the TurboDuo from Turbo Technologies and the Portable CD-ROM Player from Sony and the Desktop Library CD-ROM system. Also featured is a visit to PC Week Labs for a review of new CD-ROM drives.",
        tvdb_demos: "ICOM Simulations Sherlock Holmes, Compton's New Media Jazz: A Multimedia History, MacPlay Battle Chess, Turbo Technologies TurboDuo, Sony Portable CD-ROM Player, The Desktop Library CD-ROM system.",
        tvdb_guests: "Gina Smith, PC Computing; Jim Louderback, PC Week.",
        tvdb_copyright: "1993",
        tvdb_broadcastyear: "1993",
        ia_identifier: "CDROM10.3",
    },
    {
        tvdb_episode: "S10E23",
        tvdb_title: "Consumer Electronics Show (CES) (1993)",
        tvdb_description: "Highlights of the annual winter Consumer Electronics Show (CES) from Las Vegas. Featured are new products from Sony, Matsushita, 3DO, and MCA.",
        tvdb_guests: "Tim Bajarin, President of Creative Strategies.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1023",
        tvdb_date: "September 3, 1993"
    },
    {
        tvdb_episode: "S10E24",
        tvdb_title: "OS/2",
        tvdb_description: "The OS/2 operating system started out as a joint venture between Microsoft and IBM. That venture fell apart as Microsoft went its own way with Windows. This program looks at IBM's OS/2 and compares its features to Microsoft's Windows 3.0. Includes a visit to ZD Labs for their evaluation of Windows NT and to the annual IBM OS/2 conference.",
        tvdb_demos: "Sound Impression, cc:Mail, Lotus 1-2-3, AmiPro, SuperProject, IBM's OS/2, Microsoft Windows 3.0",
        tvdb_guests: "John Soyring, IBM's manager of software development; Edwin Black, publisher of OS/2 Professional",
        tvdb_broadcastyear: "1993",
        ia_identifier: "os2_2",
    },
    {
        tvdb_episode: "S10E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E26",
        tvdb_title: "Digital Photography",
        tvdb_description: "Digital cameras were just hitting the market in 1993 and this program looked at the early stages of the electronic photography revolution.",
        tvdb_demos: "Kodak Photo CD Player, DaVinci Digital Camera/Copier, Kodak DCS200 digital camera, SuperMac printer, Logitech FotoMan, OFOTO 2.0 scanner, Phoenix portable digital imaging system for newspapers, MacSat and WeatherFAX system for enhancing digital space photos, Adobe PhotoShop",
        tvdb_broadcastmonthyear: "February 1993",
        ia_identifier: "Electron10.2",
        tvdb_date: "October 29, 1993"
    },
    {
        tvdb_episode: "S10E27",
        tvdb_title: "Creative Writing Software",
        tvdb_description: "Word processors are great, but this program looks at software tools that help you create, not just write. Featured",
        tvdb_demos: "WritePro, Plots Unlimited, Collaborator II, Movie Master 4.0, WordPerfect Rhymer, FirstAid for Writers, Quotemaster Plus, StoryBook Weaver, Big Book Maker, and Storymation.",
        tvdb_guests: "writers Sol Stein and Tom Sawyer.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1046",
    },
    {
        tvdb_episode: "S10E28",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E29",
        tvdb_title: "The New Macs",
        tvdb_description: "Almost ten years after the original Mac was introduced, Apple came out with several new models including color Macs. Also features coverage of MacWorld Tokyo.",
        tvdb_demos: "Color Mac Classic, the Macintosh LC III, PowerBook Duo 230, Centris 650, Quadra 800",
        tvdb_guests: "John Sculley, Apple CEO; David Coursey, Analyst",
        tvdb_broadcastyear: "1993",
        ia_identifier: "NewMacs",
    },
    {
        tvdb_episode: "S10E30",
        tvdb_title: "Organizer Software",
        tvdb_description: "A review of new products in the personal information management category.",
        tvdb_demos: "White Crow Office Manager, In Control 2.0, PackRat 5.0, Lotus Organizer 1.0, Casio Personal Organizer, and askSAM.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1048",
    },
    {
        tvdb_episode: "S10E31",
        tvdb_title: "SPA Codie Awards (1993)",
        tvdb_description: "Highlights of the annual Codie Awards presentation from the Software Publishers Association.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1031",
    },
    {
        tvdb_episode: "S10E32",
        tvdb_title: "Visual Programming Languages",
        tvdb_description: "For amateur programmers, the advent of visual programming languages made life, and programming, a lot easier. This television program looks at several early versions of VPLs.",
        tvdb_demos: "Asymetrix Toolbook, Claris Hypercard for Mac, Prograph 2.5, Serius Workshop 1.0 for Mac, Microsoft Visual Basic 3.0, Microsoft VVisual C++ 1.0, and Microsoft VVisual Basic Professional Edition",
        tvdb_guests: "Serius CEO Joe Firmage and George Febish, author of Windows Rapid Application Development.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "VisualPr",
    },
    {
        tvdb_episode: "S10E33",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E34",
        tvdb_title: "Self Improvement Software",
        tvdb_description: "A review of self improvement software titles including Mindviewer, Betty Crocker's Eat & Lose Weight, HealthDesk, Speed Reader, Insight, Joe Weider Personal Fitness Trainer, and Career Design.",
        ia_identifier: "episode_1050",
    },
    {
        tvdb_episode: "S10E35",
        tvdb_title: "Computer Bowl V: Part 1",
        tvdb_description: "The fifth annual Computer Bowl, with teams from the east coast and west coast battling to see who knows more about computer trivia. Players include Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, and Jerry Kaplan. The questioners are Bill Gates and Stewart Cheifet.",
        tvdb_guests: "Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, Jerry Kaplan, Bill Gates",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1051",
    },
    {
        tvdb_episode: "S10E36",
        tvdb_title: "Computer Bowl V: Part 2",
        tvdb_description: "The finale of the fifth annual computer trivia contest between teams representing the east coast and the west coast. The series is tied at two victories for each side. Contestants include Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, and Jerry Kaplan. Questioners are Bill Gates and Stewart Cheifet.",
        tvdb_guests: "Patricia Seybold, Mitchell Kertzman, Jean-Louis Gassee, Jerry Kaplan, Bill Gates",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1052",
    },
    {
        tvdb_episode: "S10E37",
        tvdb_title: "REPEAT [Notebook Computers]",
        tvdb_description: "A review of the state of the art in notebook computers. Featured products include the AST Premium Exec 386SX/25, the NCR Safari, IBM's ThinkPad 700C, Compaq's Contura 3/25C, and the GRiD Convertible. Also coverage of new notebook introductions at fall Comdex.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Notebook_2",
    },
    {
        tvdb_episode: "S10E38",
        tvdb_title: "REPEAT [New Age Spreadsheets]",
        tvdb_description: "It started out with Visicalc and Lotus 1-2-3, but the world of spreadsheet software changed as new and more powerful applications were introduced.",
        tvdb_demos: "Improv for Windows, CA-Compete, Excel 4.0, Quattro pro for Windows, and Braincel.",
        tvdb_broadcastyear: "1992",
        ia_identifier: "NewAgeSp",
    },
    {
        tvdb_episode: "S10E39",
        tvdb_title: "REPEAT [Computer Art]",
        tvdb_description: "A review of hardware and software products for artists. Products reviewed include Opal Vision for the Amiga 4000, Alladin 4D for the Amiga 4000, CorelDraw for Windows, Fractal Design's Painter 1.2 for the Mac, and the Calcomp Drawing Board. Also featured are visits to the Academy of Art College in San Francisco and the studio of computer artist Jim Ludtke.",
        tvdb_demos: "Opal Vision for the Amiga 4000, Alladin 4D for the Amiga 4000, CorelDraw for Windows, Fractal Design's Painter 1.2 for the Mac, the Calcomp Drawing Board",
        tvdb_broadcastyear: "1992",
        ia_identifier: "Computer_7",
    },
    {
        tvdb_episode: "S10E40",
        tvdb_title: "REPEAT [Beginner's Guide to PCs]",
        tvdb_description: "An introduction to personal computers for newbies. Topics include the basic components of a PC, how to find tech support, managing memory, a guide to online forums, and a review of expansion slots.",
        tvdb_guests: "Jim Louderback of PC Week Labs.",
        tvdb_copyright: "1992",
        tvdb_broadcastyear: "1992",
        ia_identifier: "episode_1040",
    },
    {
        tvdb_episode: "S10E42",
        tvdb_title: "REPEAT [Computer Ergonomics]",
        tvdb_description: "With people spending more and more time at a computer, the health issues related to extended computer use became big news. This program looks at several ergonomic issues and solutions.",
        tvdb_demos: "Ergotron Workstation, Ergodyne's WorkSmart Manager, Data Hand Keyboard and Mouse, SLF monitor, ProView desk, and Glare Guard filters for monitors.",
        tvdb_copyright: "1993",
        tvdb_broadcastyear: "1993",
        ia_identifier: "Computer_8",
    },
    {
        tvdb_episode: "S10E43",
        tvdb_title: "REPEAT [CD-ROM Software (1993)]",
        tvdb_description: "Multimedia was the big deal in the early 90's as software publishers rushed to use the new storage medium for bigger and more interactive programs. This show looks at several new software titles on CD-ROM including Sherlock Holmes from ICOM Simulations, Jazz: A Multimedia History from Compton's New Media, and Battle Chess from MacPlay. Also a look at CD-ROM hardware including the TurboDuo from Turbo Technologies and the Portable CD-ROM Player from Sony and the Desktop Library CD-ROM system. Also featured is a visit to PC Week Labs for a review of new CD-ROM drives.",
        tvdb_guests: "Gina Smith, PC Computing; Jim Louderback, PC Week.",
        tvdb_copyright: "1993",
        tvdb_broadcastyear: "1993",
        ia_identifier: "CDROM10.3",
    },
    {
        tvdb_episode: "S10E46",
        tvdb_title: "REPEAT [Creative Writing Software]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E48",
        tvdb_title: "REPEAT [Organizer Software]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E50",
        tvdb_title: "REPEAT [Self Improvement Software]",
        tvdb_description: "A review of self improvement software titles including Mindviewer, Betty Crocker's Eat & Lose Weight, HealthDesk, Speed Reader, Insight, Joe Weider Personal Fitness Trainer, and Career Design.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1050",
    },
    {
        tvdb_episode: "S10E51",
        tvdb_title: "REPEAT [Computer Bowl V: Part 1]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S10E52",
        tvdb_title: "REPEAT [Computer Bowl V: Part 2]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E01",
        tvdb_title: "High Tech Israel",
        tvdb_description: "A visit to the Middle East to see the booming high-tech industry in Israel. Featured are Intel and Microsoft R&D centers plus many local Israeli companies doing work ranging from network communications to speech recognition and natural handwriting recognition. Also demonstrations of technology spinoffs from the Israeli military.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1109",
    },
    {
        tvdb_episode: "S11E02",
        tvdb_title: "Baseball Software",
        tvdb_description: "A review of computer programs for baseball fans.",
        tvdb_demos: "Intelliplay Baseball, APBA Presents Baseball for Windows, Baseball's Greatest Hits, Al Michaels Announces Hardball III, Tony LaRussa Baseball II",
        tvdb_broadcastyear: "1993",
        ia_identifier: "Baseball",
    },
    {
        tvdb_episode: "S11E03",
        tvdb_title: "PDAs",
        tvdb_description: "A look at the state of the art in personal digital assistants.",
        tvdb_demos: "Apple Newton Message Pad, Casio's Zoomer, AT&T EO 440 Personal Communicator, Sharp PI-7000 Expert Pad, HP 100LX.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1113",
    },
    {
        tvdb_episode: "S11E04",
        tvdb_title: "Pentium PCs",
        tvdb_description: "A look at the first generation of Pentium based personal computers. Included are demonstrations of new Pentium PCs from Gateway, Compaq, and ALR (Advanced Logic Research). Also a visit to Intel Labs to see how Pentium chips are made and a visit to PC Week Labs to see their evaluation process for new Pentium PCs.",
        tvdb_guests: "Ken Lowe, Dataquest; Jim Louderback, PC Week.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1114",
    },
    {
        tvdb_episode: "S11E05",
        tvdb_title: "DOS 6.2",
        tvdb_description: "The big news in 1993 was Microsoft's new version 6.2 of MS-DOS. Featured are visits to Microsoft DOS labs in Redmond, Washington and the Ziff Davis test labs in Foster City, California.",
        tvdb_demos: "MS-DOS 6.0, MS-DOS 6.2, Stacker 3.1, Norton Utilities 7.0, IBM PenDOS",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1149",
        ia_identifier2: "DOS62",
    },
    {
        tvdb_episode: "S11E06",
        tvdb_title: "ETRE Conference Barcelona (1993)",
        tvdb_description: "Coverage of the annual European Technology Roundtable Exhibition from Barcelona, Spain.",
        tvdb_guests: "Bill Gates, Esther Dyson, Michael Rogers, Philippe Kahn, Mark Eppley, Alan Ashton, Peter Sprague, Masayoshi Son.",
        tvdb_demos: "Windows NT and groupware applications.",
        ia_identifier: "episode_1106",
        tvdb_date: "February 23, 1993"
    },
    {
        tvdb_episode: "S11E07",
        tvdb_title: "The Internet",
        tvdb_description: "It wasn't quite the World Wide Web yet, but everybody started hearing about this thing called \"the Internet\" in 1993. It was being called the Information Superhighway then. This program looks at the earliest stages of the Internet including Aladdin Systems SITComm, a Macintosh communications program for Internet access, and the WELL (Whole Earth Lectronic Link), an early online community. Also featured is a visit to the former Bell Labs in New Jersey (now Bellcore) for demonstrations of internet based teleconferencing, video on demand, ISDN, and optical network technology; a preview of the World Wide Web as used at NASA; a visit to where it all began, ARPA, the Advanced Research Projects Agency in Virgnia; and a look at the Internet Multicasting Service in Washington, the first Internet radio station.",
        tvdb_demos: "Aladdin Systems SITComm, WELL (Whole Earth Lectronic Link)",
        tvdb_guests: "Brendan Kehoe, author of \"Zen and the Art of the Internet\"; Howard Rheingold, author of \"The Virtual Community\"; Dr. Robert Kahn, former found of ARPA; Carl Malamud, author of \"Exploring the Internet\"",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1134",
    },
    {
        tvdb_episode: "S11E08",
        tvdb_title: "Windows NT",
        tvdb_description: "Microsoft's Windows OS grew up a little bit with the release of Windows NT in 1993. This program looks at the new operating system. Included are demonstrations of NT's application integration and SQL server. Also featured are a new NT based graphics program from Altsys called Virtuoso and a new NT CAD program from Bentley Systems called MicroStation. This program also includes a visit to the NT test and development lab in Redmond, Washington and a comparison between NT and Unix.",
        tvdb_demos: "Microsoft Windows NT, Altsys Virtuoso, Bentley Systems MicroStation",
        tvdb_broadcastyear: "1993",
        ia_identifier: "WindowsN",
    },
    {
        tvdb_episode: "S11E09",
        tvdb_title: "REPEAT [High Tech Israel]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E10",
        tvdb_title: "Consumer's Buying Guide (1993)",
        tvdb_description: "Our annual look at the coolest new techie gadgets for the holiday season, as selected by Gina Smith, Tim Bajarin, Paul Schindler and Stewart Cheifet.",
        tvdb_demos: "Creative Wrtier, SIM City 2000, Myst, CyberPuppy, Crystal Craze, Mozart CD-ROM, Stika, Rock Rap and Roll, The Tortoise and the Hare, Imagicard, Kid Cad, Twain's World, Memphis, NHL Hockey, CyberMan 3D, VideoShow Presenter, AXIS Game Cheater, and Morphman.",
        ia_identifier: "Consumer_3",
        tvdb_date: "September 6, 1993"
    },
    {
        tvdb_episode: "S11E11",
        tvdb_title: "Buying a New Computer",
        tvdb_description: "Consumer advice on how to buy a new computer. Features tips from Andrew Reinhardt of BYTE, Wendy Taylor of PC Computing, Rik Myslewski of MacUser, and Galen Gruman of MacWorld, Owen Linderholm of PC World, and Marty Jerome of PC  Computing.",
        tvdb_guests: "Andrew Reinhardt, BYTE; Wendy Taylor, PC Computing; Rik Myslewski, MacUser; and Galen Gruman, MacWorld; Owen Linderholm, PC World; and Marty Jerome, PC Computing.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "BuyingaN",
    },
    {
        tvdb_episode: "S11E12",
        tvdb_title: "Comdex Special (1993)",
        tvdb_description: "Highlights from the 15th annual fall COMDEX trade show in Las Vegas. More than 75 products are reviewed in the categories of peripherals, portables, PDAs, PCMCIA cards, wireless, operating systems, business applications, CD-ROM software, communications, networking, and multimedia.",
        ia_identifier: "episode_1130",
    },
    {
        tvdb_episode: "S11E13",
        tvdb_title: "REPEAT [PDAs]",
        tvdb_description: "A look at the state of the art in personal digital assistants.",
        tvdb_demos: "the Apple Newton Message Pad, Casio's Zoomer, AT&T's EO 440 Personal Communicator, Sharp's PI-7000 Expert Pad, and the HP 100LX.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1113",
    },
    {
        tvdb_episode: "S11E14",
        tvdb_title: "REPEAT [Pentium PCs]",
        tvdb_description: "A look at the first generation of Pentium based personal computers. Included are demonstrations of new Pentium PCs from Gateway, Compaq, and ALR (Advanced Logic Research). Also a visit to Intel Labs to see how Pentium chips are made and a visit to PC Week Labs to see their evaluation process for new Pentium PCs.",
        tvdb_guests: "Ken Lowe, Dataquest; Jim Louderback, PC Week.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1114",
    },
    {
        tvdb_episode: "S11E15",
        tvdb_title: "Digital Journalism",
        tvdb_description: "The digital revolution changed the practice of journalism. This program looks at how journalists are using computers and the Internet. Segments include CNN Newsroom Global View, the San Jose Mercury's Mercury Center on AOL, Prodigy's Journalist application, Newsweek Interactive, the JFK Assassinatin CD-ROM, a visit to the MIT Media Lab, and CNBC's Private Financial Network (PFN) online service.",
        tvdb_demos: "Prodigy's Journalist application, The JFK Assassinatin CD-ROM, CNBC Private Financial Network (PFN)",
        tvdb_guests: "Michael Rogers of Newsweek.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "DigitalJ",
    },
    {
        tvdb_episode: "S11E16",
        tvdb_title: "Color Printers",
        tvdb_description: "The availability of reasonably priced color printers changed the way people and businesses used computers. This program covers new color printers from Hewlett Packard, Tektronix, QMS, Canon, ColossalJet, and ProofPositive.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "ColorPri",
    },
    {
        tvdb_episode: "S11E17",
        tvdb_title: "Tax Software",
        tvdb_description: "For some people, tax preparation software was reason enough to buy their first personal computer. This program reviews several early tax preparation and personal accounting programs. The program also visits the IRS to see their transition to electronic filing and the Washington offices of the accounting firm of Delloit Touche.",
        tvdb_demos: "Intuit Quicken, Andrew Tobias' TaxCut, Kiplinger TaxCut, Parsons Personal Tax Edge, ChipSoft TurboTax",
        tvdb_broadcastyear: "1994",
        ia_identifier: "TaxSoftw",
    },
    {
        tvdb_episode: "S11E18",
        tvdb_title: "Screen Savers and Wallpapers",
        tvdb_description: "New color monitors created a market for whimsical add-ons like screen savers and wallpaper.",
        tvdb_demos: "Crystal Walls, Marvel Comics Screen Posters, the Snoopy Screen Saver Fun Pac, the Jurassic Park Screen Saver, Microsoft Scenes, Matinee (the first video screen saver), PFS Power Album for Windows from Spinnaker Software, Pixel Play, and Second Nature Software.",
        tvdb_guests: "Gina Smith.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "ScreenSa",
    },
    {
        tvdb_episode: "S11E19",
        tvdb_title: "MacWorld San Francisco (1994)",
        tvdb_description: "Highlights from the annual west coast MacWorld conference, shot on location in San Francisco. This was the tenth anniversary of MacWorld where the Power PC and Newton applications were introduced. Also featured clips from the famous 1984 Macintosh SuperBowl commercial.",
        tvdb_guests: "Tim Bajarin, Creative Strategies; Rik Mislewski, MacUser; Jim Gable, Apple; Mark Zimmer, Fractal Design; and Paul Brainerd, Aldus.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "episode_1119",
    },
    {
        tvdb_episode: "S11E20",
        tvdb_title: "Small Business Software",
        tvdb_description: "The availability of low cost business applications for small businesses helped level the playing field for new budding entrepreneurs.",
        tvdb_demos: "Business Plan Toolkit, CA Simply Accounting for Windows, MYOB for the Macintosh, ClarisWorks 2.0 for the Mac, Lotus SmartSuite, and ClienTrac.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "SmallBus",
    },
    {
        tvdb_episode: "S11E21",
        tvdb_title: "Software for Kids",
        tvdb_description: "One of the biggest drivers for selling new home computers was a parent's desire to get a computer for their kids. This program looks at several software programs aimed at children including Club KidSoft, Zurk's Learning Safari, Forever Growing Garden, Yearn 2 Learn Snoopy, World Discovery, Peter Pan: A Story Painting Adventure, Student Writing Center for Windows, and The Cruncher, a talking animated spreadsheet for children.",
        tvdb_demos: "Club KidSoft, Zurk's Learning Safari, Forever Growing Garden, Yearn 2 Learn Snoopy, World Discovery, Peter Pan: A Story Painting Adventure, Student Writing Center for Windows, and The Cruncher",
        tvdb_guests: "Gina Smith.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "Software_3",
    },
    {
        tvdb_episode: "S11E22",
        tvdb_title: "Slots - Local Bus Video",
        tvdb_description: "As EISA, ISA, and IBM's MCA battled to become the industry standard for expansion cards, add-on vendors filled the market with new upgrade boards and new slot standards. This program looks at ISA bus systems versus the VL bus system, Intel's new Plug and Play PCI standard, the new PCMCIA format for portable computers, the Stealth 32 Video Card from Diamond, the new SCSI Sound Blaster card from Creative Labs, and the LeMans GT Graphics adapter for the NuBus slot on the Mac.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "SlotsLoc",
        ia_identifier2: "ar_cc155_local_bus_video",
    },
    {
        tvdb_episode: "S11E23",
        tvdb_title: "Consumer Electronics Show (CES) (1994)",
        tvdb_description: "Highlights from the annual Consumer Electronics Show in Las Vegas.",
        tvdb_demos: "Accolade's Hockey, Activision's Pitfall: The Mayan Adventure, Atari's Jaguar, Advanced Gravis Virtual Reality, Simon Personal Communicator, Amiga CD32, Compaq Presario 425, Video Blaster FS2000, Cyberdreams' CyberRace, Forte VFX-1 3D Head Mount, General Magic, Heartbeat Personal Trainer, Logitech Cyberman 3D Controller, Star Wars Screen Saver, Maxtor MobileMax 1.8\" Drive, Microsoft's Dinosaur, Nintendo's Project Reality, Philips Playboy Massage CD-I, City Streets for Windows, Sonic the Hedgehog, Spectrum Holobyte's Star Trek: The Next Generation, 3DO's Jurassic Park, Time Warner's Aegis, Ultratech's Mortal Combat, World Cup USA 94 Soccer, and Videonics' Digital Video Mixer.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "CC-CES1994-Episode1123",
        tvdb_date: "September 3, 1994"
    },
    {
        tvdb_episode: "S11E24",
        tvdb_title: "Green PCs",
        tvdb_description: "In 1992 the EPA launched the Energy Star Computer Program to encourage the production of environmentally friendly computers. This program looked at several approaches including PC Ener-G-saver, Green Explorer, the Macintosh LC 575, the LaserJet 4L, and the Compaq Presario 425. Also featured are visits to a computer recycling center in California, a computer recycling center in New Jersey, and Greendisk, a company in Seattle that recycles floppy disks.",
        tvdb_demos: "PC Ener-G-saver, Green Explorer, Macintosh LC 575, LaserJet 4L, Compaq Presario 42",
        tvdb_broadcastyear: "1994",
        ia_identifier: "episode_1124",
    },
    {
        tvdb_episode: "S11E25",
        tvdb_title: "Groupware and Email",
        tvdb_description: "As business migrated from the standalone PC to the networked PC, a hot new application area became groupware, enabling collaboration within a company.",
        tvdb_demos: "Powercore Network Scheduler 3, Lotus Notes, WordPerfect Office, Eden Systems The Meeting Room, Ventana GroupSystems 5, SunSolutions ShowMe 2.0, Xerox LiveBoard",
        tvdb_guests: "Scott McNealy.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "1125",
    },
    {
        tvdb_episode: "S11E26",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E27",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E28",
        tvdb_title: "Multimedia",
        tvdb_description: "The advent of faster processors and digital storage drove the new field called Multimedia.",
        tvdb_demos: "Software Toolworks The San Diego Zoo, Macromedia Action!, XPLORA 1: Peter Gabriel's Secret World, TuneLand from 7th Level, Microsoft's Cinemania, Small Blue Planet from Now What Software, Wrath of the Gods from Luminaria, Media Vision portable CD-ROM, Quicktime 2.0, Adobe Premiere, VideoFusion",
        tvdb_guests: "Bud Colligan, CEO of Macromedia; Gina Smith, Editor in Chief of Electronic Entertainment magazine",
        tvdb_broadcastyear: "1994",
        ia_identifier: "Multimed_2",
    },
    {
        tvdb_episode: "S11E29",
        tvdb_title: "CD-ROM Software (1994)",
        tvdb_description: "The advent of optical storage and CD-ROMs changed the rules for software applications and opened up a whole new generation of programs.",
        tvdb_demos: "Microsoft Encarta, The Association of Shareware Professionals CD-ROM collection, American Visions: 20th Century Art from the Neuberger Collection, Art Spiegelman's The Complete Maus from Voyager, Substance Digizine, Broderbund MYST.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "CDRom",
    },
    {
        tvdb_episode: "S11E30",
        tvdb_title: "REPEAT [Comdex Special (1993)]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E31",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E32",
        tvdb_title: "Foreign Language Software",
        tvdb_description: "Markets are going global but schools are cutting back on foreign language instruction. The answer - foreign language software. This program reviews several new programs that teach or translate a foreign language.",
        tvdb_demos: "Learn to Speak Spanish 4.0 from Hyperglot, German Assistant for Windows from Microtac, Power Japanese from Bayware, Video Linguist: Learn from French TV, Language Explorer from Nordic Software, and the Chinese Language Kit from Apple.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "ForeignL",
    },
    {
        tvdb_episode: "S11E33",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E34",
        tvdb_title: "REPEAT [The Internet]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E35",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S11E36",
        tvdb_title: "REPEAT [Consumer's Buying Guide (1993)]",
        tvdb_description: "The annual holiday season review of cool high-tech gadgets and the latest computer goodies. Products featured include Sim City 2000, Creative Writer, Myst, CyberPuppy, Crystal Crazy, Rock Rap and Roll, The Tortois and the Hare,Imagicard, The Memphis, NHL Hockey, CyberMan 3d Mouse, VideoShow Presenter, AXIS the Gamecheater, Morphman, and Mac-in-DOS.",
        tvdb_guests: "Gina Smith, Paul Schindler, and Tim Bajarin. Also a visit to an Amiga store for cool new Commodore products.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1136",
    },
    {
        tvdb_episode: "S11E37",
        tvdb_title: "Computer Bowl VI: Part 1",
        tvdb_description: "The sixth annual Computer Bowl contest pitting East coast techies against West coast nerds to see who knows more about computer trivia. West coast team: Bill Gates, Bill Joy, Jeffery Kalb, David Liddle, Harry Saal. East coast team: Mitchell Kapor, Bob Frankston, Pamela McCorduck, David Nelson, Neil Colvin. Guest quesetioner: Andy Grove. Host: Stewart Cheifet.",
        tvdb_guests: "Bill Gates, Bill Joy, Jeffery Kalb, David Liddle, Harry Saal, Mitchell Kapor, Bob Frankston, Pamela McCorduck, David Nelson, Neil Colvin, Andy Grove",
        tvdb_copyright: "1994",
        tvdb_broadcastyear: "1994",
        ia_identifier: "Computer_9",
    },
    {
        tvdb_episode: "S11E38",
        tvdb_title: "Computer Bowl VI: Part 2",
        tvdb_description: "The conclusion of the sixth annual Computer Bowl trivia game between high tech types from the east coast and the west coast. This was the All Star edition with MVPs selected from the first five Computer Bowl games. Contestants included Bill Gates, Bill Joy, Mitch Kapor, Bob Frankston, Neil Colvin, and Pamela McCorduck. The questioners were Andy Grove and Stewart Cheifet. Originally broadcast from San Jose in 1994.",
        tvdb_guests: "Bill Gates, Bill Joy, Jeffery Kalb, David Liddle, Harry Saal, Mitchell Kapor, Bob Frankston, Pamela McCorduck, David Nelson, Neil Colvin, Andy Grove",
        tvdb_copyright: "1994",
        ia_identifier: "CC-ComputerBowl1994_2-Episode1152",
    },
    {
        tvdb_episode: "S11E49",
        tvdb_title: "REPEAT [DOS 6.2]",
        tvdb_description: "The big news in 1993 was Microsoft's new version 6.2 of MS-DOS.",
        tvdb_demos: "MS-DOS 6.0, MS-DOS 6.2, Stacker 3.1, Norton Utilities 7.0, and IBM's PenDOS. Featured are visits to Microsoft DOS labs in Redmond, Washington and the Ziff Davis test labs in Foster City, California.",
        tvdb_broadcastyear: "1993",
        ia_identifier: "episode_1149",
        ia_identifier2: "DOS62",
    },
    {
        tvdb_episode: "S12E01",
        tvdb_title: "PC Expo (1994)",
        tvdb_description: "On location coverage of the annual PC Expo trade show in New York. Featured",
        tvdb_guests: "Stewart Alsop, Larry Magid, Tim Bajarin, and Phillipe Kahn.",
        is_identifier: "PCExpo",
    },
    {
        tvdb_episode: "S12E02",
        tvdb_title: "MacWorld Boston (1994)",
        tvdb_description: "On location coverage of the annual Boston MacWorld conference. Includes the launch of the Mac System 7.5 OS.",
        tvdb_demos: "WordPerfect, ClarisWorks, Loga Vista, Newton, Radius, Wacom, Visioneer, and Opcode.",
        tvdb_broadcastmonthyear: "September 1994",
        ia_identifier: "1202",
    },
    {
        tvdb_episode: "S12E03",
        tvdb_title: "REPEAT [ETRE Conference Barcelona (1993)]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E04",
        tvdb_title: "PowerPC and PowerMac",
        tvdb_description: "Motorola's new PowerPC microprocessor launched a whole new generation of computers including the PowerMac. This program looks at the increased speed and functionality of computers using the new Motorola CPU. Featured are various benchmark tests on the PowerMac, the PowerMac 7100 and the PowerMac 8100, applications such as Excel 5.0 for the Mac, and PhotoShop 3.0. Also a look at SoftWindows, a utility that lets you run Windows apps on a PowerMac. Includes a visit to Motorola's CPU design center and the implementation of a huge data center at the University of Texas using 750 new PowerMacs.",
        tvdb_demos: "Apple PowerMac 7100, Apple PowerMac 8100, Excel 5.0 for the Mac, PhotoShop 3.0, SoftWindows, a utility that lets you run Windows apps on a PowerMac. Includes a visit to Motorola's CPU design center and the implementation of a huge data center at the University of Texas using 750 new PowerMacs.",
        tvdb_guests: "Jim Gable, Apple; Stephen Dougherty, Apple; John Peck, Adobe Systems; John Morse, Microsoft.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "PowerPC10.1",
        tvdb_date: "October 13, 1994"
    },
    {
        tvdb_episode: "S12E05",
        tvdb_title: "Computer Art",
        tvdb_description: "The personal computer started out doing numbers, then text, and then graphics.",
        tvdb_demos: "KPT Bryce, SmartSketch, Fractal Design's Dabbler, TrueSpace for Windows, Design Workshop for the Power Mac, Wacom Pad, Painter, Illustrator, and Photoshop.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "CC1205_computer_art",
    },
    {
        tvdb_episode: "S12E06",
        tvdb_title: "Plug and Play",
        tvdb_description: "Adding peripherals used to be a nightmare with a PC, having to manually figure out all kinds of settings and switches. Windows 95 promised to end all that with Plug and Play, though many users called it Plug and Pray. This program looks at the early efforts to simplify adding peripherals. Covered are sound cards, SCSI controllers, video cards, mice, CDROM drives, and PCMCIA cards. Also covered is Plug and Tell, which helped you figure out what settings had to be changed, and Compaq's Hot Docking technology.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "PlugPlay",
    },
    {
        tvdb_episode: "S12E07",
        tvdb_title: "Windows 4.0 aka Windows 95",
        tvdb_description: "The upgrade from Windows 3.0 to Windows 95 was the big leap for Microsoft and began its domination of the desktop. This program looks at the new OS, originally code named \"Chicago\" and Windows 4.0, and new applications developed specifically for Win 95. Also included are demonstratons of IBM's OS/2 Warp, and the Macintosh Operating System OS 7.5.",
        tvdb_demos: "Windows 95, Norton Utilities for Win 95, Visio, Picture Publisher, IBM OS/2 Warp, Macintosh OS 7.5.",
        ia_identifier: "Windows4",
        tvdb_date: "August 31, 1994"
    },
    {
        tvdb_episode: "S12E08",
        tvdb_title: "Virtual Meetings",
        tvdb_description: "The advent of the internet meant people could now start communicating and collaborating over the web. This program looks at several early examples of virtul meeting technology.",
        tvdb_demos: "Cross Ties for Workgroups, Groupware for Windows from Ventana, HP OmniShare, CU-See Me, Intel ProShare 200, the Sharevision PC3000 from Creative Labs, VIVO 320 from Vivo Software, AT&T VideoPhone, and Sony Magic Link PDA.",
        tvdb_guests: "Andrew Seybold.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "VirtualM",
    },
    {
        tvdb_episode: "S12E09",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E10",
        tvdb_title: "Consumer's Buying Guide (1994)",
        tvdb_description: "An annual review of cool new technology products for the holiday buying season, as selected by Stewart Cheifet; Paul Schindler of CMP, Tim Bajarin of Creative Strategies and Ken Ratcliffe of PC Connection.",
        tvdb_guests: "Paul Schindler, CMP; Tim Bajarin, Creative Strategies; Ken Ratcliffe, PC Connection",
        tvdb_demos: "Lexmark Ergonomic Keyboard, 7th Level Complete Waste of Time, Banner Blue Family Tree Maker, Maxis Gift Maker, Glider Pro, GPS Trailblazer, Greatest Paper Airplanes, the NEC Satellite Phone, Putt Putt from Humungous Entertainment, Sega Road Rash II, The Simpsons Screen Saver from Berkeley Systems, Star Trek Interactive, T/Maker Stradiwackius, and Wacom Art Pad Dabble bundle.",
        ia_identifier: "CC1210_consumer_buying_guide",
    },
    {
        tvdb_episode: "S12E11",
        tvdb_title: "Comdex Special (1994)",
        tvdb_description: "On location coverage of the annual fall Comdex trade show in Las Vegas. Includes highlights of the Bill Gates keynote speech. Features analysis from Tim Bajarin of Creative Strategies.",
        tvdb_guests: "Tim Bajarin, Creative Strategies",
        ia_identifier: "ComdexSp",
        tvdb_date: "September 5, 1994"
    },
    {
        tvdb_episode: "S12E12",
        tvdb_title: "Talking Computers",
        tvdb_description: "Almost ten years after this show was produced, we are still not talking to our computers. This program looks at several early attempts at a voice interface.",
        tvdb_demos: "VoiceUser for Windows, VoiceUser for WorkGroups, Wildfire, VPro, TruVoice, Dragon Dictate, Kurzweil Voice for Windows, Voice Organizer and Philips Dictation System.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "TalkingC",
    },
    {
        tvdb_episode: "S12E13",
        tvdb_title: "REPEAT [MacWorld Boston (1994)]",
        tvdb_description: "On location coverage of the annual Boston MacWorld conference. Includes the launch of the Mac System 7.5 OS.",
        tvdb_demos: "WordPerfect, ClarisWorks, Loga Vista, Newton, Radius, Wacom, Visioneer, and Opcode.",
        ia_identifier: "MacWorld_2",
    },
    {
        tvdb_episode: "S12E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E15",
        tvdb_title: "Interactive Music",
        tvdb_description: "Computers and the digital revolution forever changed the world of music. This program looks at several new approaches to creating and sharing music. Also featured is a visit to Todd Rundgren's sound studio in Sausalito, California and a preview of his CD-ROM entitled \"No World Order\".",
        tvdb_demos: "Vid Grid, Sound Toy, William Orbit Strange Cargo, So You Want to be a Rock & Roll Star, Rock & Roll On Your Own, Dylan:Highway 61 Interactive, Video Jam, and Vivace.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1238_interactive_music",
    },
    {
        tvdb_episode: "S12E16",
        tvdb_title: "Digital Photo Finishing",
        tvdb_description: "As the popularity of digital cameras grew, photofinishing software followed. This program looks at several early examples of computer based photo processing.",
        tvdb_demos: "Photoshop 2.5, Nikon's LS-10 CoolScan, PhotoFlash 2.0, Apple's QuickTake Camera, Paint Alchemy, Terrazzo, Picture Window 1.0, EverColor and ArtLink.",
        tvdb_broadcastyear: "1994",
        ia_identifier: "Photofin",
    },
    {
        tvdb_episode: "S12E17",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E18",
        tvdb_title: "Computer Games (1995)",
        tvdb_description: "A look at the hot new computer games of 1995. Includes visits to Electronic Arts and Rocket Science Games and an interview with \"The Fat Man\", George Sanger.",
        tvdb_demos: "Voyeur, Astronomica, Wing Commander III: Heart of the Tiger, Master of Magic, Nascar Racing, Front Page Sports: Football Pro '95, Daedalus Encounter from Mechadeus, and Loadstar: The Legend of Tully Bodine.",
        ia_identifier: "CC1218_greatest_games",
    },
    {
        tvdb_episode: "S12E19",
        tvdb_title: "Computers and Sports (1995)",
        tvdb_description: "Computers enable couch potatoes to get the feeling of competitive sports and help real athletes improve their skills. This program looks at several sports applications.",
        tvdb_demos: "Picture Perfect Golf, ESPN Baseball Tonight, UltraCoach for Windows, Mountain Biking, Winning Hoops with Coack K, and Touch 'n' Go.",
        ia_identifier: "PCSports",
    },
    {
        tvdb_episode: "S12E20",
        tvdb_title: "Consumer Electronics Show (CES) (1995)",
        tvdb_description: "On location coverage of the annual Consumer Electronics Show in Las Vegas. Featured analyst is Tim Bajarin, president of Creative Strategies. Includes highlights of the keynote speech by Microsoft's Bill Gates. Microsoft introduces it's \"BOB\" interface.",
        tvdb_demos: "Microsoft Bob",
        tvdb_guests: "Tim Bajarin, president of Creative Strategies"
    },
    {
        tvdb_episode: "S12E21",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E22",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E23",
        tvdb_title: "OS/2 Warp",
        tvdb_description: "In the mid 1990's, it wasn't yet an all Windows world. A battle was on between Microsoft's Windows and IBM's OS/2. This program compared the two operating systems and various add-ons for Windows and OS/2.",
        tvdb_demos: "Windows 95, OS/2 Warp, Voice Pilot for OS/2, and Colorworks for OS/2.",
        tvdb_guests: "IBM's David Barnes and syndicated columnist Dan Gillmor.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "OS2Warp",
    },
    {
        tvdb_episode: "S12E24",
        tvdb_title: "Investment Software",
        tvdb_description: "Computers have become a key tool in planning an investment strategy and building a retirement nest egg. This program looked at several investment programs.",
        tvdb_demos: "Value Screen Investment Survey, Prodigy Online Information Services, Windows on Wall Street, WealthBuilder, Plan Ahead Your Financial Future, Schwab's Street Smart, and MetaStock.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1224_investment_software",
    },
    {
        tvdb_episode: "S12E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E26",
        tvdb_title: "Learning on a Computer",
        tvdb_description: "Personal computers have become a major component of modern educational systems. This program looks at some of the strides being made in computer based learning. Product",
        tvdb_demos: "Measurement in Motion, Grammar Games, Tangible Math, Inside the SAT, and The Musical World of Professor Piccolo. Companies profiled are Apple, Davidson & Associates, Logal, Princeton Review, and Opcode Interactive. Also featured are a visit to an Electronic Learning Fair and the online University of Phoenix.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1226_learning_on_a_computer",
    },
    {
        tvdb_episode: "S12E27",
        tvdb_title: "Computer Memory",
        tvdb_description: "If you were a DOS user back in the early 1990's, you had to deal with \"insufficient memory\" issues. Over and over again. This program looks at solutions for expanding computer memory.",
        tvdb_demos: "how to install SIMMs, MemMaker, QAPlus for Windows, RAM Doubler 1.51, Quarterdeck's QEMM 7.5, Multimedia Cloaking Utility from Helix Software, and Netroom 3.0.",
        ia_identifier: "LosingMe",
        ia_identifier2: "CC1227_losing_memory",
        ia_identifier3: "ar_cc183_losing_memory",
    },
    {
        tvdb_episode: "S12E28",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E29",
        tvdb_title: "SPA Codie Awards (1995)",
        tvdb_description: "Highlights from the tenth annual Codie Awards for outstanding software, presented by the Software Publishers Association. Shot on location in San Diego. Hosted by actor and comedian Kevin Pollack. Best consumer program of the year was Microsoft Encarta.",
        tvdb_demos: "Microsoft Encarta",
        tvdb_guests: "Kevin Pollack",
        tvdb_broadcastyear: "1995",
        ia_identifier: "SPAAward",
    },
    {
        tvdb_episode: "S12E30",
        tvdb_title: "PC Video",
        tvdb_description: "The digital video revolution started to take hold in the mid nineties. This program looks at early examples of desktop video products.",
        tvdb_demos: "QuickTime VR, Sigma Designs MPEG video, Video Director, Avid Video Shop, Video Machine Lite, Radius Edit, Video Vision, SGI's Set Top Box, CyberLab7, and QuickTime Conferencing.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "PCVideo",
    },
    {
        tvdb_episode: "S12E31",
        tvdb_title: "Mobile Computing",
        tvdb_description: "Industry prognosticators predicted that 1995 would be \"the year of the portable\". And it was, as mobile computing became mainstream. This program looks at several mobile computing solutions,",
        tvdb_demos: "Morrow Pivot II, Apple PowerBook 540C, Toshiba T2150 CDT, IBM Butterfly subnotebook, Apple's Newton MessagePad, the Sharp Zaurus, Sony Magic Link, the Psion 3A, the Pentax PocketJet printer, Xircom CreditCard Ethernet, Zenith CD-ROM Z Player, Dell Latitude, Bell South Simon, HP Omnibook 600, Megahertz X-Jack Modem",
        tvdb_broadcastyear: "1995",
        ia_identifier: "MobileCo",
    },
    {
        tvdb_episode: "S12E32",
        tvdb_title: "The Internet",
        tvdb_description: "In the mid 1990's many people were on line, but the internet and the world wide web were still a new phenomenon. This program looks at the new open world of the web. Also features a profile of the band Severe Tire Damage, the first band to ever perform live over the internet.",
        tvdb_demos: "Eudora, Anarchy, the WELL, WinCIM, InterACT.net, and HoTMetal Pro HTML Editor.",
        tvdb_guests: "John Markoff, New York Times technology writer",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1232_internet",
    },
    {
        tvdb_episode: "S12E33",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E34",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E35",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E36",
        tvdb_title: "Computer Bowl VII: Part 1",
        tvdb_description: "Technology leaders from the East and West coasts go at it in the seventh annual Computer Bowl, a quiz show designed to see which team knows more about computer trivia. Guest questioner is Nicholas Negroponte. Contestants include Andy Herzfeld and Joseph Alsop.",
        tvdb_guests: "Andy Herzfeld, Joseph Alsop",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1236_computer_bowl",
    },
    {
        tvdb_episode: "S12E37",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E38",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E39",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E40",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E41",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E42",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E43",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E44",
        tvdb_title: "Computer Bowl  VII: Part 2",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S12E45",
        tvdb_title: "Gary Kildall Special",
        tvdb_description: "A profile on computer pioneer Gary Kildall and the important contributions he made to the PC industry including the true story on how IBM ended up using MS-DOS rather than CP/M. Kildall developed CP/M, the first personal computer operating system. He was also a co-host on the early Computer Chronicles series.",
        tvdb_guests: "Gordon Eubanks, Symantec; Tom Rolander, DRI; Tim Bajarin, Creative Strategies; Lee Lorenzen, DRI; Jacqui Morby, TA Associates; Alan Cooper, CP/M applications developer.",
        ia_identifier: "GaryKild",
    },
    {
        tvdb_episode: "S13E01",
        tvdb_title: "Windows 95",
        tvdb_description: "It was the biggest ever launch of a software product with stores opening at midnight and buyers around the world waiting to get their hands on... an operating system! It was Windows 95. This show looks at the hoopla surrounding the launch of Windows 95, the product itself, and several Windows 95 add-on products including Microsoft Office, Viking RAM Chips, Uninstaller, Trispectives Professional, and The Hive.",
        tvdb_demos: "Microsoft Windows 95, Microsoft Office, Viking RAM Chips, Uninstaller, Trispectives Professional, and The Hive.",
        ia_identifier: "CC1301_windows_95",
        tvdb_date: "August 31, 1995"
    },
    {
        tvdb_episode: "S13E02",
        tvdb_title: "Mac Clones and New OS",
        tvdb_description: "In the post Steve Jobs era, Apple started licensing other companies to produce Macintosh clones. And there was a new Mac operating system 8.0, code named Copland. This program looks at the new Mac clones and the new OS.",
        tvdb_demos: "Radius System 100, DayStar Digital Genesis MP, Power Computing Power 100, Adobe Photoshop, Personal Oracle 7, Apple Macintosh 7100, Apple Macintosh 8100",
        tvdb_broadcastyear: "1995",
        ia_identifier: "MacClone95",
        tvdb_date: "December 15, 1995"
    },
    {
        tvdb_episode: "S13E03",
        tvdb_title: "Smart TV",
        tvdb_description: "As the computer and the television began to merge, we started seeing intelligent TV sets. This program looks at some examples. Also introduced is the new MPEG (Moving Picture Experts Group) standard for encoding full motion video on a computer.",
        tvdb_demos: "En Technology TVModem, HP Kayak set top box, MicroWare Systems DAVID (Digital Audio Video Interactive Decoder), Intel cable modem",
        tvdb_guests: "Avram Miller of Intel and Arthur Orduna of Microware Systems.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "SmartTV95",
    },
    {
        tvdb_episode: "S13E04",
        tvdb_title: "Computers and Healthcare",
        tvdb_description: "A look at how the health care industry is using computer technology.",
        tvdb_demos: "The Doctor's Book of Home Remedies, Multimedia Workout, DynaPulse 200M, The Family Doctor, Stanford University's Pain Clinic, and I-3 Design's Stretchercise.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1335_computers_and_healthcare",
    },
    {
        tvdb_episode: "S13E05",
        tvdb_title: "Silicon Glen: Part 1",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E06",
        tvdb_title: "Computing Seniors",
        tvdb_description: "A look at how senior citizens are using computer technology. Also includes a visit to a senior center to see how senior citizens are learning to use computers and various software applications of particular interest to them.",
        tvdb_demos: "Rand McNally's TripMaker 1996, Nolo Press WillMaker, Banner Blue Family Tree Maker",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1327_computing_seniors",
    },
    {
        tvdb_episode: "S13E07",
        tvdb_title: "Buy or Upgrade?",
        tvdb_description: "Your computer can't keep up with the latest applications. Should you buy a new one or can you get the same performance by upgrading your existing machine. This program looks at the options and the issues.",
        tvdb_guests: "Linda Concalves, Apple; Andrew Gitt, Corporate Upgrades; Paul Schindler, Windows Magazine; Kim Frederico, Creative Labs; Spiros Mitsanis, Backyard Computer Services.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "BuyOrUpg",
    },
    {
        tvdb_episode: "S13E08",
        tvdb_title: "Computer Games (1995)",
        tvdb_description: "A review of the best new games of the year. Plus a visit to Microsoft's Judgment Day, a conference for third-party game developers in Redmond, Washington.",
        tvdb_demos: "In the First Degree, Buried in Time, Mech Warrior 2, ImagiNation Network, Phantasmagoria",
        ia_identifier: "CC1308_greatest_games",
        tvdb_date: "September 5, 1995"
    },
    {
        tvdb_episode: "S13E09",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E10",
        tvdb_title: "ETRE Conference Madrid (1995): Part 1",
        tvdb_description: "On location coverage of the annual European Technology Roundtable Exhibition in Madrid, Spain.",
        tvdb_guests: "Bill Gates; Esther Dyson, Analyst; Jim Clark, Netscape Founder; Ed Zander, Sun Microsystems; Roel Pieper, Tandem; Michael Rogers, Newsweek; David Kirkpatrick, Fortune.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1310_etre",
        tvdb_date: "August 26, 1995"
    },
    {
        tvdb_episode: "S13E11",
        tvdb_title: "Consumer's Buying Guide (1995)",
        tvdb_description: "The annual guide to holiday buying for technology products. Stewart Cheifet, Tim Bajarin, Chris Gorman and several technology writers offer up their selections for best new tech products of the season. Included are new web cams, PDAs, and desktop video editors.",
        tvdb_guests: "Tim Bajarin, Chris Gorman",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1311_holiday_buying_guide",
        tvdb_date: "August 31, 1995"
    },
    {
        tvdb_episode: "S13E12",
        tvdb_title: "Comdex Special (1995)",
        tvdb_description: "Highlights of the 1995 Fall Comdex show shot on location in Las Vegas. Includes excerpts from the keynote speech by Bill Gates.",
        tvdb_guests: "Bill Gates",
        ia_identifier: "FallComd",
        tvdb_date: "September 5, 1995"
    },
    {
        tvdb_episode: "S13E13",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E15",
        tvdb_title: "PC Troubleshooting",
        tvdb_description: "Tricks and techniques for fixing your own PC.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "PCTroubl",
    },
    {
        tvdb_episode: "S13E16",
        tvdb_title: "Information Overload",
        tvdb_description: "A look at different ways to manage the glut of information showing up on computers and other storage devices.",
        tvdb_demos: "DayTimer Organizer 2.0, Em@iler, Personal Journal, and DataTimes Summarizer.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "Informat96",
    },
    {
        tvdb_episode: "S13E17",
        tvdb_title: "Computers and Kids (1996)",
        tvdb_description: "A look at how children use computers at home and at school. Also reviews of several kid oriented web sites such as kidlink.org, nbn.com/youcan, batnet.com, and Kids Only on AOL (search word Kids).",
        tvdb_demos: "The Amazing Writing Machine from Broderbund, How Would You Survive, from Grolier Electronic Publishing, and 3D Atlas from Creative Wonders.",
        ia_identifier: "Komputer",
    },
    {
        tvdb_episode: "S13E18",
        tvdb_title: "ETRE Conference Madrid (1995): Part 2",
        tvdb_description: "Coverage of the annual European Technology Roundtable Exhibition conference held in Madrid. Featured",
        tvdb_guests: "Bill Gates; Esther Dyson; Jim Clark, Netscape; David Kirkpatrick, Fortune magazine.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "EtrePt2",
    },
    {
        tvdb_episode: "S13E19",
        tvdb_title: "SOHO Software",
        tvdb_description: "SOHO stands for small office home office. This program looks at applications for the small business owner.",
        tvdb_demos: "Microsoft Office 95, Microsoft Small Business Pack, MYOB Accounting, HP's OfficeJet LX, Syquest's EZ135 external hard drive, Connectix QuickCam web camera, Motorola BitSurfer ISDN modem",
        tvdb_guests: "Tom Abate, San Francisco Examiner technology writer",
        tvdb_copyright: "1995",
        tvdb_broadcastyear: "1995",
        ia_identifier: "SohoSoft",
        ia_identifier2: "CC1319_soho_software",
        tvdb_date: "December 15, 1995"
    },
    {
        tvdb_episode: "S13E20",
        tvdb_title: "Consumer Electronics Show (CES) (1996)",
        tvdb_description: "On location coverage of the Consumer Electronics Show in Las Vegas. This was the first consumer electronics show that was dominated by computer makers. New products introduced here included the DVD, Pentium PCs, and color handhelds. This program also includes highlights from the 1996 MacWorld Expo in San Francisco. Guest analyst is Tim Bajarin of Creative Strategies.",
        tvdb_guests: "Tim Bajarin, Creative Strategies.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "WinterCE",
        ia_identifier2: "CC1320_winter_ces_1996",
        tvdb_date: "September 3, 1996"
    },
    {
        tvdb_episode: "S13E21",
        tvdb_title: "Online Tips",
        tvdb_description: "In the early days of the Internet, sites were slow and it was hard to find what you were looking for. This program offered some advice on how to have a better online experience.",
        tvdb_demos: "Cyber Patrol, Web Trader, Netiquette, Lycos, HTML Guide, Sun Java",
        tvdb_guests: "John Gage, Sun Microsystems chief scientist",
        ia_identifier: "OnlineTi",
        ia_identifier2: "OnlineTi96",
    },
    {
        tvdb_episode: "S13E22",
        tvdb_title: "Financial Software",
        tvdb_description: "Whether it's managing your personal budget or your investments, computer software has become a critical tool for financial management. This program looks at several leading software packages including Quicken, TurboTax, TaxCut, Window on Wall Street, and E.Schwab. Also includes a visit to the IRS and a look at Citibank's new online banking service.",
        tvdb_demos: "Quicken, TurboTax, TaxCut, Window on Wall Street, and E.Schwab",
        tvdb_broadcastyear: "1996",
        ia_identifier: "cc1345_finance_banking_software",
    },
    {
        tvdb_episode: "S13E23",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E24",
        tvdb_title: "Silicon Glen: Part 2",
        tvdb_description: "In the United States it's called the Silicon Valley, but in Scotland it's called Silicon Glen - the area between Glasgow and Edinburgh that is famous for high tech R&D. This program looks at several Scottish innovations including a supercomputer that maps road traffic, new low energy green lasers, intelligent phones, noise canceling headsets, distributed learning, and home energy management. Shot on location in Scotland.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1324_research_in_silicon_glen",
    },
    {
        tvdb_episode: "S13E25",
        tvdb_title: "Software Thinking Tools",
        tvdb_description: "Most of us use computers to do routine tasks like calculations, word processing, or graphics. But computers can do more - they can help you think.",
        tvdb_demos: "Go Figure, WinMap, Project Kickstart, Which & Why, Decide Right, and IntelliMatch.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1325_software_thinking_tools",
    },
    {
        tvdb_episode: "S13E26",
        tvdb_title: "Cars and Computers",
        tvdb_description: "The average car has more computer chips in it than anything in your house. This program looks at software and online applications having to do with automobiles. Includes a look at auto racing games.",
        tvdb_guests: "Joe Beninato, Popular Mechanics Car Guide; Helga Lilley, CFO of Automotive Information Center; Alberto Penello, Electronic Arts; Anthony Constantino, Spectrum Holobyte.",
        tvdb_demos: "The Need for Speed, Grand Prix Manager, Popular Mechanics Car Guide, and AutoSite.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CarsComp",
    },
    {
        tvdb_episode: "S13E27",
        tvdb_title: "REPEAT [Computing Seniors]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E28",
        tvdb_title: "SPA Codie Awards (1996)",
        tvdb_description: "A look at the best new software programs of the year, those which won Codie Awards from the Software Publishers Association. Featured titles include Edmark's Thinking Things, Hollywood from Theatrix, Dark Forces from Lucas Arts, and Rick Smolan's Passage to Vietnam from Against All Odds. Also includes coverage of the Codies Awards event in Los Angeles with presenters Robert Wuhl and Todd Rundgren. The Lifetime Achievement Award is given to Netscape founder Jim Clark.",
        tvdb_guests: "Jim Clark, Netscape;Robert Wuhl, Todd Rundgren",
        tvdb_demos: "Edmark Thinking Things, Theatrix Hollywood, Lucas Arts Dark Forces, Against All Odds Rick Smolan's Passage to Vietnam",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1349_codies_special",
    },
    {
        tvdb_episode: "S13E29",
        tvdb_title: "REPEAT [SOHO Software]",
        tvdb_description: "SOHO stands for small office home office. This program looks at applications for the small business owner.",
        tvdb_demos: "Microsoft Office 95, Microsoft Small Business Pack, MYOB Accounting, HP's OfficeJet LX, Syquest's EZ135 external hard drive, the Connectix QuickCam web camera for videoconferencing, and the BitSurfer ISDN modem from Motorola.",
        tvdb_guests: "Tom Abate, San Francisco Examiner technology writer",
        tvdb_copyright: "1995",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1319_soho_software",
        ia_identifier2: "SohoSoft",
        tvdb_date: "December 15, 1995"
    },
    {
        tvdb_episode: "S13E30",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E31",
        tvdb_title: "The New PCs",
        tvdb_description: "Ten years after the PC revolution, experts were saying the PC model is obsolete. This program looks at several fresh approaches to the personal computer.",
        tvdb_demos: "TransPhone net terminal, Apple Pippin Power Mac, U.S. Robotics Palm Pilot, BeBox, Oracle NC (Network Computer)",
        tvdb_guests: "Bruce Tognazinni, author of \"Tog on Software Design\".",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1331_new_pcs",
        tvdb_date: "September 3, 1996"
    },
    {
        tvdb_episode: "S13E32",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E33",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E34",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E35",
        tvdb_title: "REPEAT [Computers and Health Care]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E36",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E37",
        tvdb_title: "Computer Bowl VIII",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E38",
        tvdb_title: "REPEAT [Information Overload]",
        tvdb_description: "A look at different ways to manage the glut of information showing up on computers and other storage devices.",
        tvdb_demos: "DayTimer Organizer 2.0, Em@iler, Personal Journal, and DataTimes Summarizer.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "Informat96",
    },
    {
        tvdb_episode: "S13E39",
        tvdb_title: "E3 Special",
        tvdb_description: "Highlights from the annual Electronic Entertainment Expo held in Los Angeles.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "E3Specia",
    },
    {
        tvdb_episode: "S13E40",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E41",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E42",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E43",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S13E44",
        tvdb_title: "REPEAT [Online Tips]",
        tvdb_description: "In the early days of the Internet, sites were slow and it was hard to find what you were looking for. This program offered some advice on how to have a better online experience. Demonstrations included Cyber Patrol, Web Trader, Netiquette, Lycos, HTML Guide, and the first version of Sun's Java.",
        tvdb_guests: "Sun Microsystems chief scientist John Gage.",
        ia_identifier: "OnlineTi",
        ia_identifier2: "OnlineTi96",
    },
    {
        tvdb_episode: "S13E45",
        tvdb_title: "REPEAT [Financial Software]",
        tvdb_description: "Whether it's managing your personal budget or your investments, computer software has become a critical tool for financial management. This program looks at several leading software packages including Quicken, TurboTax, TaxCut, Window on Wall Street, and e.schwab. Also includes a visit to the IRS and a look at Citibank's new online banking service.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "cc1345_finance_banking_software",
    },
    {
        tvdb_episode: "S13E49",
        tvdb_title: "REPEAT [SPA Codie Awards (1996)]",
        tvdb_description: "A look at the best new software programs of the year, those which won Codie Awards from the Software Publishers Association. Featured titles include Edmark's Thinking Things, Hollywood from Theatrix, Dark Forces from Lucas Arts, and Rick Smolan's Passage to Vietnam from Against All Odds. Also includes coverage of the Codies Awards event in Los Angeles with presenters Robert Wuhl and Todd Rundgren. The Lifetime Achievement Award is given to Netscape founder Jim Clark.",
        tvdb_broadcastyear: "1995",
        ia_identifier: "CC1349_codies_special",
    },
    {
        tvdb_episode: "S14E01",
        tvdb_title: "MacWorld Boston (1996)",
        tvdb_description: "On location coverage of the annual MacWorld Expo in Boston. A look at many new Mac products, peripherals and applications. Features highlights from the keynote speech of Apple CEO Gil Amelio. Analysis by Tim Bajarin of Creative Strategies. Other",
        tvdb_guests: "Jean-Louis Gassee; Bob Levitus",
        ia_identifier: "Macworld",
        tvdb_date: "December 15, 1995"
    },
    {
        tvdb_episode: "S14E02",
        tvdb_title: "Cyber Cafes",
        tvdb_description: "As the Internet continued to take hold, new hangouts called cyber cafes started opening up where you could surf the web and just pay by the minute. This program looks at the first wave of internet cafes in Boston and San Francisco.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CyberCaf",
    },
    {
        tvdb_episode: "S14E03",
        tvdb_title: "Internet Telephony",
        tvdb_description: "Voice over IP is now a hot topic, but telephony over the Internet started to gain steam in the mid 1990s. This program looks at some early examples of VOIP technology.",
        tvdb_demos: "Quarterdeck Web Phone, VDONet, Infospace, Timecast, NetSpeak, and OnLive Technologies.",
        tvdb_guests: "Rob Enderle, the GIGA Information Group; Naveen Jain, Infospace; Tony Zuccarino, VDONet; John Staten, CEO of NetSpeak; Matt Hulett, Progressive Networks.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "Internet_2",
    },
    {
        tvdb_episode: "S14E04",
        tvdb_title: "Search Engines",
        tvdb_description: "An early pre-Google look at search engine technology.",
        tvdb_demos: "DataQuest, AltaVista, Zip 2, Autonomy, Pointcast, The Angle",
        tvdb_broadcastyear: "1996",
        ia_identifier: "ComputerChronicles-SearchEngines_861",
        tvdb_date: "February 23, 1996"
    },
    {
        tvdb_episode: "S14E05",
        tvdb_title: "IT Forum, Paris",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E06",
        tvdb_title: "Cyber Politics",
        tvdb_description: "A review of the growing use of the internet and computers in political campaigns. This show looks at the use of sophisticated databases to create voter mailing lists, campaign strategy software, online political activism, and campaign management tools. Produced during the election year of 1996.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CyberPol",
    },
    {
        tvdb_episode: "S14E07",
        tvdb_title: "Online Shopping",
        tvdb_description: "With the internet growing by leaps and bounds, online shopping became a hot topic in the mid 1990's. This program looked at several new online shopping efforts including onsale.com, cybercash.com, digicash.com, verisign.com, firelfy.com, amazon.com, cybergold.com, and netradio.com.",
        tvdb_demos: "onsale.com, cybercash.com, digicash.com, verisign.com, firelfy.com, amazon.com, cybergold.com, netradio.com",
        tvdb_guests: "Jerry Kaplan, Magdalena Yesil, and Robert Griggs.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "OnLineSh",
    },
    {
        tvdb_episode: "S14E08",
        tvdb_title: "ETRE Conference Berlin (1996)",
        tvdb_description: "On location coverage of the annual European Technology Roundtable Exhibition conference in Berlin. Leading technology executives and journalists from around the world gather to discuss the future of computer and internet technology.",
        tvdb_guests: "David Kirkpatrick, Fortune; Roel Pieper, Tandem; Eric Benhamou, 3Com; Michael Rogers, Newsweek; John Shock, venture capitalist; Alex Vieux, conference host; Marco Landi, Apple; Stan Shih, Acer.",
        ia_identifier: "ETRE1997",
    },
    {
        tvdb_episode: "S14E09",
        tvdb_title: "REPEAT [Silicon Glen: Part 1]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E10",
        tvdb_title: "REPEAT [Silicon Glen: Part 2]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E11",
        tvdb_title: "Consumer's Buying Guide (1996)",
        tvdb_description: "Our annual review of the coolest new high-tech gadgets for the holiday season.",
        tvdb_demos: "Connectix Color Quick Cam, Fieldworks Rugged Laptop FW7600, NetObject Fusion, Symantec Internet FastFind, MetaTool Kai's Power Goo, Broderbund Logical Journey of the Zoombinis, Ecco Pro, Neverhood, NewsCatcher, NHL 97, Polaroid Photo Pad Scanner, Epson Photo PC Camera, AT&T Pocket Net Phone, Pyst, Quake, Quick View Plus, Surfman, The Mind Drive, VocalTec's Internet Phone, Blizzard Warcraft II, Phillips Web TV, DataViz Web Buddy ",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1411_consumer_buying_guide",
    },
    {
        tvdb_episode: "S14E12",
        tvdb_title: "Digital Photography",
        tvdb_description: "Digital photography got its start in the mid 1990's. This program looks at early examples of digital photography hardware and software.",
        tvdb_demos: "Fuji D5-7, Ricoh RDC2, Kodak DC25, LivePix, Adobe Photo Shop 4.0, HP DeskJet 693C, Epson Stylus Color 500, Sony DMM155, Logitech Pagescan Color, and Microtek ScanMaker E3.",
        tvdb_guests: "Michael Mcnamara,Popular Photography magazine; Kyla Carlson, PC Computing magazine; John Goddard, PC World.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1412_digital_photography",
        tvdb_date: "February 23, 1996"
    },
    {
        tvdb_episode: "S14E13",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E15",
        tvdb_title: "Computer Games (1996)",
        tvdb_description: "A review of the best new computer games of the year.",
        tvdb_demos: "The Neverhood from DreamWorks Interactive, Shattered Steel from Interplay, Tomb Raider from Eidos, and Diablo from Blizzard. Also includes a visit to a Quake marathon and a tour of the usability lab at The Learning Company.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1415_greatest_games",
    },
    {
        tvdb_episode: "S14E16",
        tvdb_title: "Internet TV",
        tvdb_description: "After hearing about convegence for years, the television and the computer finally started to merge, with video images moving on to the PC and web pages showing up on the TV.",
        tvdb_demos: "Intercast, First-TV, WebTV, Diba Smart TV, ClearFusion, VDO Live Video Player, Vosaic Browser, @Home, and DirecPC.",
        tvdb_guests: "Phil Goldman, co-founder of Web TV Networks.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1416_internet_tv",
    },
    {
        tvdb_episode: "S14E17",
        tvdb_title: "Comdex Special (1996)",
        tvdb_description: "A look at the best new products introduced at the annual COMDEX computer trade show in Las Vegas.",
        tvdb_demos: "ATI All-in-Wonder video card, Microsoft Office 97, Netscape Communicator, Netscape Navigator, Netscape Constellation, Play Trinity Video Production System, Apple Emate 300, Casio Cassiopeia, Ricoh Tablet PC, Mitsubishi Flopico, Sony DSC F-1 digital camera.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "CC1417_best_of_comdex",
        tvdb_date: "September 5, 1996"
    },
    {
        tvdb_episode: "S14E18",
        tvdb_title: "Wireless Computing",
        tvdb_description: "The buzz word at the end of 1996 was wireless. This program looks at several new wireless technologies including the HP Vectra 500 with an InfraRed (IR) access port, the LaserJet 6P, the Omnibook and the Omnigo, all with IR ports. Also covered are wireless PC card modems from Motorola including the Personal Messenger 100D, the Personal Messenger 100C, and the Tango 2-Way Pager. Also, AT&T's Smart Phone and the Unwired Planet's Pocket Net. Additional products featured are the Nokia 9000 and satellite based products such as OmniTracs, Skycell, and Orbcomm, all from TelAstra.",
        tvdb_demos: "HP Vectra 500, HP LaserJet 6P, HP Omnibook, HP Omnigo, Motorola Personal Messenger 100D, Motorola Personal Messenger 100C, Motorola Tango, AT&T Smart Phone, Unwired Planet Pocket Net, Nokia 9000, Telstra OmniTracs, Telstra Skycell, Telstra Orbcomm",
        tvdb_broadcastyear: "1996",
        ia_identifier: "Wireless_2",
    },
    {
        tvdb_episode: "S14E19",
        tvdb_title: "Sports Simulation Software",
        tvdb_description: "A review of new sports software that lets couch potatoes feel like athletes.",
        tvdb_demos: "Interactive Guide to Skiing, Interactive Guide to Snow Boarding, Tony LaRussa Baseball, Trophy Bass 2, NBA Full Court Press, Bobsled Simulator, and Madden 97.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "SportsSi",
    },
    {
        tvdb_episode: "S14E20",
        tvdb_title: "Cyber Dating",
        tvdb_description: "One of the most popular early uses of the Internet was finding a date. This program looks at some of the first sites that offered to find that special someone. Sites demonstrated include match.com, americansingles.com, NetNoir, blinddate.com, and cupidnet.com.",
        tvdb_demos: "match.com, americansingles.com, NetNoir, blinddate.com, and cupidnet.com.",
        tvdb_guests: "Dr. Judith Schwambach, cyber dating counselor; Larry Magid, netiquette advisor",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CyberDat",
    },
    {
        tvdb_episode: "S14E21",
        tvdb_title: "Consumer Electronics Show (CES) (1997)",
        tvdb_description: "On location coverage of the annual winter Consumer Electronics Show in Las Vegas. Products introduced at the show include the new Pentium MMX processors, televisions and phones that act as internet terminals, new web audio devices, handheld digital players, and an innovative approach to networking from IBM called the PAN or personal area network.",
        tvdb_demos: "Intel Pentium MMX, IBM PAN",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1421_ces",
        tvdb_date: "September 3, 1997"
    },
    {
        tvdb_episode: "S14E22",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E23",
        tvdb_title: "E-Mail",
        tvdb_description: "As email became the killer application on the internet, products proliferated offering a variety of new email functionality.",
        tvdb_demos: "Bigfoot, 411, ConnectSoft's Email Connection, Microsoft Outlook, HoTMaiL, JFax, Eudora Pro 3.0, PaperPort, Aloha Greetings, and PGP.",
        ia_identifier: "CC1423_email",
    },
    {
        tvdb_episode: "S14E24",
        tvdb_title: "Computers and the Disabled (1997)",
        tvdb_description: "The computer revolution was great, but it presented real challenges to disabled people who found new barriers to accessing information. This program looks at several solutions including a talking word processor called IntelliTools, two screen readers - JAWS and OutSpoken, Buddy Button, Tash Mini Keyboard, Discovery Switch, EasyBall, Thumbelina, and Cyberlink. Also covered are techniques for building web sites that are user friendly for disabled visitors.",
        tvdb_demos: "IntelliTools, JAWS, OutSpoken, Buddy Button, Tash Mini Keyboard, Discovery Switch, EasyBall, Thumbelina, and Cyberlink.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1424_computers_and_the_disabled",
    },
    {
        tvdb_episode: "S14E25",
        tvdb_title: "Cyber Music",
        tvdb_description: "A review of hardware and software that can turn your personal computer into a music studio. Features the band MOE. Also featured is a visit to the UC Berkeley Center for New Music and a look at the band MOE which was discovered on the web.",
        tvdb_demos: "SimTunes, MixMan, Autoscore, Family Music Center piano teaching program",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CyberMus",
    },
    {
        tvdb_episode: "S14E26",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E27",
        tvdb_title: "SPA Codie Awards (1997)",
        tvdb_description: "Coverage of the annual Codie Awards presented by the Software Publishers Association. The awards recognize outstanding achievement in software design and are considered the \"Oscars\" of the software industry. The lifetime achievement award winner was Paul Allen.",
        tvdb_guests: "Paul Allen",
        ia_identifier: "SpaCodie",
    },
    {
        tvdb_episode: "S14E28",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E29",
        tvdb_title: "REPEAT [ETRE Conference Berlin (1996)]",
        tvdb_description: "On location coverage of the annual European Technology Roundtable Exhibition conference in Berlin. Leading technology executives and journalists from around the world gather to discuss the future of computer and internet technology.",
        tvdb_guests: "David Kirkpatrick, Fortune; Roel Pieper, Tandem; Eric Benhamou, 3Com; Michael Rogers, Newsweek, venture capitalist John Shock, conference host Alex Vieux; Marco Landi, Apple; Stan Shih, Acer.",
        ia_identifier: "ETRE1997",
    },
    {
        tvdb_episode: "S14E30",
        tvdb_title: "Cyber Art",
        tvdb_description: "A look at new ways to use your computer to create art. Also covers a visit to a combined human/computer stage production called \"20/20 Blake\" and a museum exhibit of Digital Art.",
        tvdb_demos: "The Virtual Gallery, CorelDraw 7, Detailer, 3D Studio Max 1.2, and virtualart.com.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1430_computer_art",
    },
    {
        tvdb_episode: "S14E31",
        tvdb_title: "Cyber Security",
        tvdb_description: "With more and more computers becoming terminals on the internet, concerns were growing for internet security. This program looks at several solutions. Included are demonstrations of Wells Fargo Online Banking, Cookie Master, anonymizer.com, a fax encryptor from InfoImaging called 3D FaxFile 2.0, a new biometric device from Oracle called HandKey, and CompuTrace, a device that calls you if your computer is stolen.",
        tvdb_demos: "Wells Fargo Online Banking, Cookie Master, anonymizer.com, 3D FaxFile 2.0, Oracle HandKey, CompuTrace",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CyberSec",
    },
    {
        tvdb_episode: "S14E32",
        tvdb_title: "REPEAT [Comdex Special (1996)]",
        tvdb_description: "Highlights of the annual fall Comdex trade show in Las Vegas. Products featured include the ATI WonderBoard, Windows CE, new digital photography products, and the Trinity broadcast studio in a box from Play. Copyright 1996 Stewart Cheifet Productions.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "BestofCo",
    },
    {
        tvdb_episode: "S14E33",
        tvdb_title: "Website Creation",
        tvdb_description: "As the Internet became a standard for business and personal communication, everyone had to have a web site. This program looks at some of the tools available in the late nineties for creating your own web site and some of the key issues facing web site designers. Also, a visit to the Web Design and Development Exhibition in San Francisco where teams compete to build the best web site in a single day.",
        tvdb_demos: "Macromedia Backstage Internet Studio, Group 42 WebImage, Group 42I Spy, Integrated Data Systems V*Realm Builder, Cosmo Player",
        tvdb_broadcastyear: "1997",
        ia_identifier: "WebSiteC",
    },
    {
        tvdb_episode: "S14E34",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E35",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E36",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E37",
        tvdb_title: "Computer Bowl IX: Part 1",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E38",
        tvdb_title: "Computer Bowl IX: Part 2",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E39",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S14E40",
        tvdb_title: "Internet Showcase Special (1997)",
        tvdb_description: "Highlights of Upside's Internet Showcase conference, shot on location at Laguna Niguel, California. A look at new internet sites, products, and businesses. Featured",
        tvdb_guests: "Eric Schmidt, CEO of Novell; Tim Bajarin, Analyst, David Coursey.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "Internet_4",
    },
    {
        tvdb_episode: "S15E01",
        tvdb_title: "REPEAT [Wireless Computing]",
        tvdb_description: "The buzz word at the end of 1996 was wireless. This program looks at several new wireless technologies including the HP Vectra 500 with an InfraRed (IR) access port, the LaserJet 6P, the Omnibook and the Omnigo, all with IR ports. Also covered are wireless PC card modems from Motorola including the Personal Messenger 100D, the Personal Messenger 100C, and the Tango 2-Way Pager. Also, AT&T's Smart Phone and the Unwired Planet's Pocket Net. Additional products featured are the Nokia 9000 and satellite based products such as OmniTracs, Skycell, and Orbcomm, all from TelAstra.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "Wireless_2",
    },
    {
        tvdb_episode: "S15E02",
        tvdb_title: "REPEAT [Internet Showcase Special (1997)]",
        tvdb_description: "Highlights of Upside's Internet Showcase conference, shot on location at Laguna Niguel, California. A look at new internet sites, products, and businesses. Featured",
        tvdb_guests: "Eric Schmidt, CEO of Novell; Tim Bajarin, Analyst, David Coursey.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "Internet_4",
    },
    {
        tvdb_episode: "S15E03",
        tvdb_title: "Push Technology",
        tvdb_description: "As the Internet evolved, the big buzzword became \"push\", as in push information down to you and not wait for you pull it up. This program looks at several approaches to push technology including Castanet, PointCast, BackWeb, Netscape Netcaster, and Incisa.",
        tvdb_demos: "Castanet, PointCast, BackWeb, Netscape Netcaster, and Incisa.",
        tvdb_guests: "Kim Polese, CEO of Marimba",
        tvdb_broadcastyear: "1997",
        ia_identifier: "Pushtech98",
    },
    {
        tvdb_episode: "S15E04",
        tvdb_title: "Internet Advertising",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E05",
        tvdb_title: "Java Tools",
        tvdb_description: "The rise of the web created an opportunity for a programming language that was independent of the user platform. Java was the first major language to take advantage of that. This program looks at various versions of Java and Java apps including Instant Coffee, the Lotus Bean Machine, Novita Live Letter, and CUChat 1.0.",
        tvdb_demos: "Sun Java, Instant Coffee, the Lotus Bean Machine, Novita Live Letter, and CUChat 1.0.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "JAVATool",
        tvdb_date: "December 30, 1997"
    },
    {
        tvdb_episode: "S15E06",
        tvdb_title: "Virtual Universities",
        tvdb_description: "With the growing sophistication of the Internet, colleges and universities started to build an online curriculum to enable students to take credit classes on the web.",
        tvdb_demos: "collegenet.com, virtualu.ca.gov, unex.berkeley.edu, digitalthink.com, and Cisco Networking Academy.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "VirtualU98",
        tvdb_date: "January 6, 1998"
    },
    {
        tvdb_episode: "S15E07",
        tvdb_title: "Cyber Fiction",
        tvdb_description: "The advent of the computer and the internet provided a totally new platform for story telling. This program looks at a new paradigm for novelists using interactive technology.. Also features collaborative fiction and cyber comics.",
        tvdb_demos: "writers.net, hooked.net, thetherapist.com, writers.com, and Alsop Review",
        tvdb_guests: "cybernovelists Gary Gach, Chris Werby, Mark Dahlby, and Jaimes Alsop.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "Cyberfic98",
    },
    {
        tvdb_episode: "S15E08",
        tvdb_title: "ETRE Conference Berlin (1997): Part 1",
        tvdb_description: "On location coverage of the annual European Technology Roundtable Exhibition conference in Berlin. Leading technology executives and journalists from around the world gather to discuss the future of computer and internet technology.",
        tvdb_guests: "David Kirkpatrick, Fortune; Roel Pieper, Tandem; Eric Benhamou, 3Com; Michael Rogers, Newsweek; John Shock, venture capitalist; Alex Vieux, conference host; Marco Landi, Apple; Stan Shih, Acer.",
        tvdb_broadcastyear: "1996",
        ia_identifier: "ETRE1997",
    },
    {
        tvdb_episode: "S15E09",
        tvdb_title: "ETRE Conference Berlin (1997): Part 2",
        tvdb_description: "On location coverage of the annual European Technology Roundtable Exhibition conference in Berlin. Leading technology executives and journalists from around the world gather to discuss the future of computer and internet technology.",
    },
    {
        tvdb_episode: "S15E10",
        tvdb_title: "Electronic Commerce",
        tvdb_description: "A look at the growing business of electronic commerce based on computers and the internet.",
        tvdb_demos: "VISA's Secure Electronic Transaction technology, NetGuide, coolshopping.com, Netconex, the Internet Travel Network, and Personalogic.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1535ECOMMERCE",
    },
    {
        tvdb_episode: "S15E11",
        tvdb_title: "Battle of the Browsers",
        tvdb_description: "When Microsoft started giving away Internet Explorer, it became a serious challenger for Netscape. This program looked at the battle to become the dominant internet browser platform.",
        tvdb_demos: "Netscape Communicator 4.0, Internet Explorer 4.0, VRML 2.0 and RealSystem 5.0.",
        tvdb_guests: "Mark Brown, author of Using Netscape Communicator; Amy Helen Johnson, Senior Technology Editor for Windows Magazine.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1536BROWSERS",
        tvdb_date: "May 26, 1998"
    },
    {
        tvdb_episode: "S15E12",
        tvdb_title: "Consumer's Buying Guide (1997)",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E13",
        tvdb_title: "Comdex Special (1997)",
        tvdb_description: "A review of new products introduced at the annual Comdex trade show in Las Vegas. Featured products include HP LaserJet 4000 printer, the Cyberstik virtual reality joystick, Crosspad which transfers written notes to your PC, and face recognition software called FaceIt PC. Also features highlights of the Bill Gates keynote address.",
        tvdb_demos: "HP LaserJet 4000, Cyberstik, Crosspad, FaceIt PC.",
        ia_identifier: "BestofCo98",
        tvdb_date: "June 9, 1998"
    },
    {
        tvdb_episode: "S15E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E15",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E16",
        tvdb_title: "REPEAT [Virtual Universities]",
        tvdb_description: "With the growing sophistication of the Internet, colleges and universities started to build an online curriculum to enable students to take credit classes on the web. This program looks at several examples including collegenet.com, virtualu.ca.gov, unex.berkeley.edu, digitalthink.com, and the Cisco Networking Academy.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "VirtualU98",
    },
    {
        tvdb_episode: "S15E17",
        tvdb_title: "Web Plug-ins",
        tvdb_description: "In the early days of the web, you often had to add a variety of applications to make your web browser fully functional. These were sometimes called web plug-ins.",
        tvdb_demos: "RealPlayer, RealAudio, Adobe Acrobat, MacroMedia Flash, Macromedia Director, PalaceSpace, Apple QuickTime VR, and Netopia Virtual Office.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "WebPlugI98",
    },
    {
        tvdb_episode: "S15E18",
        tvdb_title: "Cyber Privacy",
        tvdb_description: "How do you maintain your privacy and still play in the online world? This program offers some suggestions including LPWA, the Lucent Personal Web Assistant, PGP5.5 Personal Privacy encryption software, the Anonymizer, and Firefly Networks Passport software. Also features a visit with a private investigator who deals with cyber privacy issues and a look at how eBay tries to avoid online scams.",
        tvdb_demos: "LPWA, PGP5.5, The Anonymizer, Firefly Networks Passport",
        tvdb_broadcastyear: "1998",
        ia_identifier: "CyberPri98",
        tvdb_date: "June 23, 1998"
    },
    {
        tvdb_episode: "S15E19",
        tvdb_title: "Putting Your Business Online",
        tvdb_description: "The internet enabled just about anyone to open up an online business. But how do you do it? This program looks at several tools and options. Model online businesses reviewed include reel.com, the proshop.com, and portabote.com. Featured guest is Rhonda Abrams, small business consultant.",
        tvdb_guests: "Rhonda Abrams, small business consultant",
        tvdb_demos: "Claris Home Page, Web Site Garage, and Progress Software's WebSpeed.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1541BUSONLINE",
    },
    {
        tvdb_episode: "S15E20",
        tvdb_title: "Online Games",
        tvdb_description: "In the late nineties the internet became a major venue for playing computer games. This program looked at several of the best examples.",
        tvdb_demos: "Magic: The Gathering, gamers.com, the PGL (Professional Gamers League), Microsoft's Internet Gaming Zone, and Underlight.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "BestComp98",
        ia_identifier2: "CC1542ONLINEGAMES",
        tvdb_date: "July 7, 1998"
    },
    {
        tvdb_episode: "S15E21",
        tvdb_title: "Home Design Software",
        tvdb_description: "CAD software eventually migrated down to home users with tools that let you design the inside and outside of your house.",
        tvdb_demos: "This program demonstrates several examples including LandDesigner from Sierra Home, Better Homes & Gardens Online, Picture This Home from AutoDesk, 3D Home Architect Deluxe from Broderbund, and GraphiSoft's ArchiCAD.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Homedesi98",
    },
    {
        tvdb_episode: "S15E22",
        tvdb_title: "Storage Solutions",
        tvdb_description: "Files were getting bigger and bigger and computer users were struggling to find more efficient ways to store their data. FutureArts used by the San Francisco Digital Library is presented, among other software.",
        tvdb_demos: "StuffIt Deluxe 4.5, Safeguard Interactive Backup 3.0, Syquest SparQ Drive, Iomega Clik! Drive, FutureArts, DynaMO 640 magneto optical drive",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Storages98",
        tvdb_date: "July 21, 1998"
    },
    {
        tvdb_episode: "S15E23",
        tvdb_title: "Internet Showcase San Diego",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E24",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E26",
        tvdb_title: "My Web Site",
        tvdb_description: "In the late 1990's everyone was creating their own web site. Some were terrible, some were great. This program looked at tools and resources to help individuals build great personal web sites. Also covered are special techniques for building web sites that are friendly to disabled users.",
        tvdb_demos: "Project Cool, Adobe Pagemill, Emblaze Audio, Intel Quick Web, and Yahoo.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "MyWebsit98",
        tvdb_date: "August 4, 1998"
    },
    {
        tvdb_episode: "S15E27",
        tvdb_title: "Desktop Video",
        tvdb_description: "A review of some of the early hardware and software products for desktop video.",
        tvdb_demos: "Sony DS250 digital video camera, VideoBrush Panorama, Pinnacle Systems microVideo DV300 editing software, Character Studio for 3D StudioMAX, and Play Incorporated Trinity \"studio-in-a-box\".",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Desktopv98",
        tvdb_date: "August 11, 1998"
    },
    {
        tvdb_episode: "S15E28",
        tvdb_title: "Online Travel Planning",
        tvdb_description: "Online travel sites grew from just booking planes and hotels to planning exotic adventure trips. This show looks at several examples including DeLorme's AAA Map'n'Go, lonelyplanet.com, Wild Africa CD-ROM from Sumeria, and CitySearch. Other travel sites covered include previewtravel.com, thetrip.com, biztravel.com, and frommers.com.",
        tvdb_demos: "DeLorme AAA Map'n'Go, lonelyplanet.com, Sumeria Wild Africa, CitySearch, previewtravel.com, thetrip.com, biztravel.com, and frommers.com.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Travelpl98",
    },
    {
        tvdb_episode: "S15E29",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E30",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E31",
        tvdb_title: "SPA Codie Awards (1998)",
        tvdb_description: "On location coverage of the annual CODIE awards presented by the Software Publishers Association. Twenty-three awards were given to the best new software programs in a variety of categories. Winner of the lifetime achievement award was Dan Bricklin, developer of VisiCalc, the first spreadsheet.",
        tvdb_guests: "Dan Bricklin, developer of VisiCalc",
        ia_identifier: "1998Codi98",
    },
    {
        tvdb_episode: "S15E32",
        tvdb_title: "Doc in a Box - Healthcare Software",
        tvdb_description: "New software and online resources can turn your computer into a health information center. Also includes the Polar Heart Rate Monitor and 3D imaging software for surgeons. Featured is a visit to the NASA Ames Biocomputation Center and the Stanford Medical Center.",
        tvdb_demos: "The Learning Company Home Medical Advisor, LaserMedia Active Trainer, Medilife Lighten Up, Time New Media Ask Dr. Weil from",
        ia_identifier: "Docinabo98",
        tvdb_date: "September 1, 1998"
    },
    {
        tvdb_episode: "S15E33",
        tvdb_title: "Computer Bowl X: Part 1",
        tvdb_description: "East meets West in this classic quiz show about computer trivia. East coast team: Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff. West coast team: Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso. Guest questioner: John Ratzenberger. Host: Stewart Cheifet.",
        tvdb_guests: "Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff, Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso, John Ratzenberger",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Computer98",
        tvdb_date: "September 8, 1998"
    },
    {
        tvdb_episode: "S15E34",
        tvdb_title: "Computer Bowl X: Part 2",
        tvdb_description: "The conclusion of this annual quiz show classic on computer trivia in which East meets West. East team: Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff. West team: Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso. Hosts: Stewart Cheifet and John Ratzenberger.",
        tvdb_guests: "Seth Godin, Walt Mossberg, Ken Wasch, Mike Zisman, and Robert Ziff, Marc Andreesen, Scott Cook, Bill Krause, Michael Slade, Denise Caruso, John Ratzenberger",
        ia_identifier: "AnnualCo98",
        tvdb_date: "September 15, 1998"
    },
    {
        tvdb_episode: "S15E35",
        tvdb_title: "REPEAT [Electronic Commerce]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E36",
        tvdb_title: "REPEAT [Battle of the Browsers]",
        tvdb_description: "When Microsoft started giving away Internet Explorer, it became a serious challenger for Netscape. This program looked at the battle to become the dominant internet browser platform. Featured are Netscape Communicator 4.0, Internet Explorer 4.0, VRML 2.0 and RealSystem 5.0.",
        tvdb_guests: "Mark Brown, author of Using Netscape Communicator, and Amy Helen Johnson, Senior Technology Editor for Windows Magazine.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "CC1536BROWSERS",
        tvdb_date: "May 26, 1998"
    },
    {
        tvdb_episode: "S15E37",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E38",
        tvdb_title: "REPEAT [Comdex Special (1997)]",
        tvdb_description: "A review of new products introduced at the annual Comdex trade show in Las Vegas. Featured products include HP LaserJet 4000 printer, the Cyberstik virtual reality joystick, Crosspad which transfers written notes to your PC, and face recognition software called FaceIt PC. Also features highlights of the Bill Gates keynote address.",
        tvdb_broadcastyear: "1997",
        ia_identifier: "BestofCo98",
        tvdb_date: "June 9, 1998"
    },
    {
        tvdb_episode: "S15E39",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E40",
        tvdb_title: "REPEAT",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E41",
        tvdb_title: "REPEAT [Putting Your Business Online]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E42",
        tvdb_title: "REPEAT [Online Games]",
        tvdb_description: "In the late nineties the internet became a major venue for playing computer games. This program looked at several of the best examples.",
        tvdb_demos: "Magic: The Gathering, gamers.com, the PGL (Professional Gamers League), Microsoft's Internet Gaming Zone, and Underlight.",
        tvdb_copyright: "1998",
        tvdb_broadcastyear: "1998",
        ia_identifier: "BestComp98",
        ia_identifier2: "CC1542ONLINEGAMES",
        tvdb_date: "July 7, 1998"
    },
    {
        tvdb_episode: "S15E43",
        tvdb_title: "Digital Living Room",
        tvdb_description: "On location coverage of the Digital Living Room conference presented by Upside magazine in Laguna Niguel, California. This conference was the first to try and define the wired, and wireless, consumer future.",
        tvdb_guests: "David Coursey; Mike Langberg; Larry Magid; Philippe Kahn; Kai Krause, Kai's Power Tools; Brian Williams, MSNBC anchor",
        tvdb_broadcastyear: "1998",
        ia_identifier: "DigitalL98",
        tvdb_date: "September 29, 1998"
    },
    {
        tvdb_episode: "S15E51",
        tvdb_title: "REPEAT [Computer Bowl X: Part 1]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S15E52",
        tvdb_title: "REPEAT [Computer Bowl X: Part 2]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S16E01",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "September 22, 1998"
    },
    {
        tvdb_episode: "S16E02",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "September 29, 1998"
    },
    {
        tvdb_episode: "S16E03",
        tvdb_title: "Windows 98",
        tvdb_description: "The launch of Windows 98 was a major upgrade for Windows users, solving some of the problems of Windows 95. This program previewed the new functionality of Windows 98 and also featured Win98 add-ons including Microsoft's Plus! 98, the Windows utility Tweak UI, and Gizmos 98 from Play.",
        tvdb_demos: "Microsoft Windows 98, Microsoft Plus! 98, Tweak UI, Play Gizmos 98",
        tvdb_guests: "Linus Torvalds, developer of Linux; Mike Elgan, Windows magazine; Kiki Stockhammer, Play.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Windows9_2",
        tvdb_date: "October 6, 1998"
    },
    {
        tvdb_episode: "S16E04",
        tvdb_title: "Mac Update",
        tvdb_description: "Steve Jobs returns to Apple and the turnaround is underway with the launch of the sleek iMac. A look at what's new at Apple. Included are a review of the new iMac, the new Macintosh Power G3, the new Mac OS 8.1, and a powerful graphics and animation demonstration using ElectricImage software. Featured",
        tvdb_guests: "Steve Jobs, Ellen Hancock, Tim Draper",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Macupdat98",
        tvdb_date: "October 13, 1998"
    },
    {
        tvdb_episode: "S16E05",
        tvdb_title: "Software Secrets",
        tvdb_description: "Most software users only take advantage of a small percentage of the features in software packages. This program looks at some of the hidden powers of popular applications including Word, PowerPoint, Excel, Photoshop, Tomb Raider II, and Rainbow Six. Also a look at \"Easter Eggs\", little surprises hidden inside software by the programmers.",
        tvdb_demos: "Microsoft Word, Microsoft PowerPoint, Mictosoft Excel, Adobe Photoshop, Tomb Raider II, and Rainbow Six.",
        ia_identifier: "Software99",
        tvdb_date: "October 20, 1999"
    },
    {
        tvdb_episode: "S16E06",
        tvdb_title: "Internet Video Telephony",
        tvdb_description: "After the Internet was around for a few years, people figured out that it was also a phone system and you could use your web connection to do voice and video communications.",
        tvdb_demos: "Tribal Voice PowWow, White Pine ClassPoint, Windows 95 video conferencing, Connectix Web Cam, ClearPhone, stefcam.com, C-U-SeeMe, camgirl.com, and QuickClip.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Internet99",
        ia_identifier2: "CC1635TELEPHONY",
        tvdb_date: "October 27, 1998"
    },
    {
        tvdb_episode: "S16E07",
        tvdb_title: "ETRE Conference Lisbon (1998): Part 1",
        tvdb_description: "Coverage of the annual European Technology Roundtable Exhibition in Lisbon, Portugal.",
        tvdb_guests: "Bill Gates; Yong Teh Lee, EMachines; John Gage, Sun; Michael Rogers, Newsweek Interactive; Tony Perkins, the Red Herring; Mitchell Kertzman, Sybase; Al Berkeley, NASDAQ Presiden; Dave House, Nortel; Roel Pieper, Philips Electronics.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "ETRE1999_2",
        tvdb_date: "November 3, 1998"
    },
    {
        tvdb_episode: "S16E08",
        tvdb_title: "ETRE Conference Lisbon (1998): Part 2",
        tvdb_description: "Coverage of the annual European Technology Roundtable Exhibition in Lisbon, Portugal. Included are demonstrations of the latest technology for speech recognition and handwriting recognition.",
        tvdb_guests: "Bill Gates; Janet Baker, Dragon Systems; John Gage, Sun; David Kirkpatrick, Fortune; Mitchell Kertzman, Sybase; Tony Perkins, Red Herring; Andreas Barth, Compaq; Al Berkeley, NASDAQ President; Yong Teh Lee, EMachines.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "ETRE1999",
        tvdb_date: "November 10, 1998"
    },
    {
        tvdb_episode: "S16E09",
        tvdb_title: "Web Radio",
        tvdb_description: "The Internet is changing the world of radio as thousands of radio stations around the world go on line. This program reviews the latest in web radio, including web only stations.",
        tvdb_demos: "Imagine Radio, Spinner.com, and GEEK Radio.",
        tvdb_guests: "DJ \"Davey D\"",
        tvdb_broadcastmonthyear: "May 1999",
        ia_identifier: "WebRadio99",
        tvdb_date: "November 17, 1998"
    },
    {
        tvdb_episode: "S16E10",
        tvdb_title: "Consumer's Buying Guide (1998)",
        tvdb_description: "",
        tvdb_date: "November 24, 1998"
    },
    {
        tvdb_episode: "S16E11",
        tvdb_title: "PDAs and Handhelds",
        tvdb_description: "The Palm Pilot launched a successful generation of handheld devices and personal digital assistants or PDAs. This program looks at the Palm III, Qualcomm's pdQ CDMA phone, the Nino 300 and the Velo 500 from Philips, Hitachi's Traveler 600, HP's CapShare 910, the GoType keyboard, Windows CE 2.0, a Palm application called TriCorder, and Franklin's REX PRO.",
        tvdb_demos: "Palm III, Qualcomm pdQ CDMA phone, Philips Nino 300, Philips Velo 500 from Philips, Hitachi Traveler 600, HP CapShare 910, GoType keyboard, Windows CE 2.0, TriCorder, Franklin REX PRO",
        tvdb_guests: "David Pogue, New York Times writer and author of \"Palm Pilot: The Ultimate Guide\".",
        tvdb_broadcastyear: "1998",
        ia_identifier: "CC1638PDAS",
        tvdb_date: "December 1, 1998"
    },
    {
        tvdb_episode: "S16E12",
        tvdb_title: "Bill Gates Profile",
        tvdb_description: "An up close and personal profile of Microsoft chairman Bill Gates. Includes comments by John Gage of Sun Microsystems, David Kirkpatrick of Fortune Magazine, Tony Perkins of Red Herring, Mitchell Kertzmanof Liberate Technologies and Alex Vieux of Dasar.",
        tvdb_guests: "John Gage, Sun Microsystems; David Kirkpatrick, Fortune Magazine; Tony Perkins, Red Herring; Mitchell Kertzman, Liberate Technologies; Alex Vieux, Dasar.",
        ia_identifier: "BillGate99",
        tvdb_date: "December 8, 1998"
    },
    {
        tvdb_episode: "S16E13",
        tvdb_title: "Comdex Special (1998)",
        tvdb_description: "A look at some of the best new products introduced at the annual COMDEX show in Las Vegas. Also includes highlights of the keynote speeches at COMDEX including those of Microsoft's Bill Gates, Compaq CEO Eckhard Pfieffer, and Xerox Chief Scientist John Seely Brown.",
        tvdb_demos: "Cyrix WebPAD, LanguageForce Instant Language 2000, C Technologies C Pen, and Avid Cinema for Windows.",
        tvdb_broadcastyear: "1998",
        ia_identifier: "CC1634COMDEX",
        ia_identifier2: "BestofCo99",
        tvdb_date: "December 15, 1998"
    },
    {
        tvdb_episode: "S16E14",
        tvdb_title: "E-Commerce",
        tvdb_description: "A look at the growing field of electronic commerce. Shot on location at the Peoplesoft ecommerce conference in Florida. Includes coverage of ecommerce initiatives by such companies as Borders, TWA, DLJ Direct, and Peapod.",
        tvdb_guests: "Motley Fool, syndicated investment columnist",
        tvdb_broadcastyear: "1998",
        ia_identifier: "CC1639ECOMMERCE",
        tvdb_date: "December 22, 1998"
    },
    {
        tvdb_episode: "S16E15",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "December 29, 1998"
    },
    {
        tvdb_episode: "S16E16",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "January 5, 1999"
    },
    {
        tvdb_episode: "S16E17",
        tvdb_title: "3D Graphics",
        tvdb_description: "A review of the state of the art in three dimensional graphics technology.",
        tvdb_demos: "the Voodoo Banshee 3D card, the 3Dfx graphics accelerator, LiveArt 98 software, MetaCreations Poser 3, and Lightwave 3D. Featured is a visit to Pacific Data Images (PDI) and their work on the computer generated animation movie ANTZ.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "3DGraphi",
        tvdb_date: "January 12, 1999"
    },
    {
        tvdb_episode: "S16E18",
        tvdb_title: "Digital Photography",
        tvdb_description: "A look at the growing field of digital photography. Products reviewed include the Epson PhotoPC 750Z camera, the Epson Stylus Photo 700 color ink jet printer, Polaroid's ColorShot Digital Photo Printer, MGI's Photosuite II imaging software, Instant Photo Artist, PhotoRecall Deluxe 2.0, and web sites photoloft.com, digitaldog.net, and evercolor.com.",
        tvdb_demos: "Epson PhotoPC 750Z, Epson Stylus Photo 700, Polaroid ColorShot Digital Photo Printer, MGI Photosuite II, Instant Photo Artist, PhotoRecall Deluxe 2.0, photoloft.com, digitaldog.net, and evercolor.com.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "DigtalPh",
        tvdb_date: "January 19, 1999"
    },
    {
        tvdb_episode: "S16E19",
        tvdb_title: "Computing for Parents",
        tvdb_description: "For parents, computers are a blessing and a threat. They're great for learning and entertainment but potentially a gateway to bad stuff. This program looks at a variety of resources for parents including parentsplus.com, thecybermom.com, Encarta, American Greeting Crafts, Clue Finders from The Learning Company, abcparenting.com, Math Heads, French Now!, and Maurice Ashley Teaches Chess.",
        tvdb_demos: "parentsplus.com, thecybermom.com, Encarta, American Greeting Crafts, The Learning Company Clue Finders, abcparenting.com, Math Heads, French Now!, Maurice Ashley Teaches Chess.",
        tvdb_guests: "Roberta Furger, author of \"Does Jane Compute? Preserving Our Daughter's Place in the Cyber Revolution\"; Pam Dixon, author of \"Take Charge Computing for Parents & Teens\".",
        tvdb_broadcastyear: "1998",
        ia_identifier: "Parentin99",
        tvdb_date: "January 26, 1999"
    },
    {
        tvdb_episode: "S16E20",
        tvdb_title: "Tax Preparation Software",
        tvdb_description: "A review of current tax and personal finance software including Microsoft Money, Money.com, Kiplinger TaxCut, TurboTax, and MacInTax.",
        tvdb_demos: "Microsoft Money, Money.com, Kiplinger TaxCut, TurboTax, and MacInTax.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "Taxprepa99",
        tvdb_date: "February 2, 1999"
    },
    {
        tvdb_episode: "S16E21",
        tvdb_title: "Fixing Your PC",
        tvdb_description: "A user's going to doing basic repairs on your computer hardware and software. Featured",
        tvdb_guests: "Ron White, author of How Computers Work, Peter Coffee, author of Peter Coffee Teaches PCs; John Ruley, Windows Magazine; Owen Linderholm, Windows Magazine. Also includes a review of useful online troubleshooting sites.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "FixingYo99",
        tvdb_date: "February 9, 1999"
    },
    {
        tvdb_episode: "S16E22",
        tvdb_title: "Speech Technology",
        tvdb_description: "Demonstrations of the latest in speech recognition technology.",
        tvdb_demos: "Philips SpeechMike Pro, Philips FreeSpeech 98, Dragon Naturally Speaking, Dragon Naturally Speaking Mobile Recorder, TeLL me More language training software, and Webley - a speech enabled personal assistant.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "SpeechTe99",
        tvdb_date: "February 16, 1999"
    },
    {
        tvdb_episode: "S16E23",
        tvdb_title: "Internet Showcase (1999)",
        tvdb_description: "On location coverage of Upside's Internet Showcase conference in San Diego, one of the first trade shows focusing only on internet related products and services. Products introduced include the TIVO and digital televisions.",
        tvdb_guests: "Bill Joy, Sun Microsystems; Eric Schmidt, Novell; Mark Eppley, Traveling Software; Phillipe Kahn; David Coursey; and Larry Magid.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "CC1623SHOWCASE",
        tvdb_date: "February 23, 1999"
    },
    {
        tvdb_episode: "S16E24",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "March 2, 1999"
    },
    {
        tvdb_episode: "S16E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "March 9, 1999"
    },
    {
        tvdb_episode: "S16E26",
        tvdb_title: "Y2K",
        tvdb_description: "Just about everyone has heard about the Y2K problem by now. While many understand that very big and very old computing systems might be in trouble, many are unaware that even your relatively new hardware, operating system, software applications and data files can be affected. We take a look at how your PC may very likely have its own compliance problems to deal with in the year 2000.\n\n[Episode #1703, First broadcast: 3/16/1999]\n\nPCfix 2000\nMike Johnston from the About Time Group, helps us understand the hardware side of the Year 2000 problem. From the CMOS on your mother board, to the BIOS in the operation system, he shows us what these chips look like and where they are in the computer. Mike also introduces us to PCFix 2000, a program that will run a check to see if your CMOS and BIOS (both must be problem free) are 100% Y2K ready.\n\nSymantec\nDana Prussoff demonstrates Symantec's Norton 2000 product. This software is particularly helpful in determining what Y2K problems you might have with your software applications and data files.\n\nMicrosoft\nDon Jones, with Y2K Readiness at Microsoft, gives us the perspective of the world's leading PC operating system and software vendor. Don shows us an example of a problem with Windows 98 and where to find the fix at the MS Web site. He also talks about fixes for MS application software (also available at the MS Web site).\n\nWindows Magazine\nMike Elgan, Editor of Windows Magazine, shows us what resources are available on the Web for anyone concerned about the Y2K problem. He points out what Windows Magazine has been saying and what its readers have been saying in their Y2K discussion area. He also shows us what information the US Government is offering (also for the general consumer) and the information available at a general interest Y2K Web site. Finally he takes us to a \"survivalist\" Web site, one that assumes the coming of the millennium is going to cause worldwide havoc.\n\nY2K in the Wider World\nCome January 1",
        tvdb_date: "March 16, 1999"
    },
    {
        tvdb_episode: "S16E27",
        tvdb_title: "SPA Codie Awards (1999)",
        tvdb_description: "Coverage of the annual Codie Awards presentations from the Software and Information Industry Association, recognizing the outstanding new software programs of the year. Hosted by Robert Urich and Stewart Cheifet. Nominees for best new software program of the year were ACID, National Geographic Maps, Fireworks, Cybermaster, and MetaFrame.",
        tvdb_guests: "Robert Urich",
        tvdb_broadcastyear: "1999",
        ia_identifier: "CC1649CODIES",
        tvdb_date: "March 23, 1999"
    },
    {
        tvdb_episode: "S16E28",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "March 30, 1999"
    },
    {
        tvdb_episode: "S16E29",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "April 6, 1999"
    },
    {
        tvdb_episode: "S16E30",
        tvdb_title: "Programming Languages",
        tvdb_description: "A look at a variety of interesting programming languages being used for personal computers. Included are demonstrations of Microsoft's Office 2000 Developer, LEGO Mindstorms RCX Code Developer, Macromedia Flash 3.0, and Metrowerks CodeWarrior. Also a special look inside Electronic Arts to see what they use to program their newest game WWII Fighters.",
        tvdb_demos: "Microsoft Office 2000 Developer, LEGO Mindstorms RCX Code Developer, Macromedia Flash 3.0, Metrowerks CodeWarrior, WWII Fighters.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "Programm99",
        tvdb_date: "April 13, 1999"
    },
    {
        tvdb_episode: "S16E31",
        tvdb_title: "Creativity Software",
        tvdb_description: "Computers have evolved from number crunching machines to word processors to creativity tools.",
        tvdb_demos: "Metacreations Art Dabbler 2.0, Magix Entertainment Music Maker V2000, Adobe PhotoDeluxe 3.0, Etalon 3D Digital Photo Gallery 1.1, Dance Studio, and Writers Blocks.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "Creating_2",
        tvdb_date: "April 20, 1999"
    },
    {
        tvdb_episode: "S16E32",
        tvdb_title: "E-Mail Update",
        tvdb_description: "A user's guide to new email tools.",
        tvdb_demos: "Eudora Pro 4.1, Attachment Opener 2.0, Conversions Plus 4.6, Master Clips Email Animator, and Intel Create & Share.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "1652",
        tvdb_date: "April 27, 1999"
    },
    {
        tvdb_episode: "S16E34",
        tvdb_title: "REPEAT [Comdex Special (1998)]",
        tvdb_description: "A look at the best new products introduced at Spring Comdex.",
        tvdb_demos: "the Cyrix WebPad, Instant Language 2000, the C-Pen, Avid Cinema for Windows, and Cult 3D. Also includes highlight from the keynote speeches of Microsoft's Bill Gates and Eckhard Pfeiffer of Compaq.",
        tvdb_copyright: "1999",
        tvdb_broadcastyear: "1999",
        ia_identifier: "CC1634COMDEX",
        ia_identifier2: "BestofCo99",
        tvdb_date: "May 11, 1999"
    },
    {
        tvdb_episode: "S16E35",
        tvdb_title: "REPEAT [Internet Video Telephony]",
        tvdb_description: "If you can send data over the internet, why not voice, and if voice, why not phone calls, and if phone calls, why not video phone calls. This program looks at the new technology of internet telephony or voice over IP (VOIP) and video telephony.",
        tvdb_demos: "PowWow 3.7, Tribal.com, ClassPoint 1.02, Connectix QuickCam 1.0, Logitech's QuickClip, Best Data Smart One, and ClearPhone.",
        tvdb_broadcastyear: "1999",
        ia_identifier: "Internet99",
        ia_identifier2: "CC1635TELEPHONY",
        tvdb_date: "May 18, 1999"
    },
    {
        tvdb_episode: "S16E38",
        tvdb_title: "REPEAT [PDAs and Handhelds]",
        tvdb_description: "",
        tvdb_date: "June 8, 1999"
    },
    {
        tvdb_episode: "S16E39",
        tvdb_title: "REPEAT [E-Commerce]",
        tvdb_description: "",
        tvdb_date: "June 15, 1999"
    },
    {
        tvdb_episode: "S16E44",
        tvdb_title: "REPEAT [Computing for Parents]",
        tvdb_description: "For parents, computers are a blessing and a threat. They're great for learning and entertainment but potentially a gateway to bad stuff. This program looks at a variety of resources for parents including parentsplus.com, thecybermom.com, Encarta, American Greeting Crafts, Clue Finders from The Learning Company, abcparenting.com, Math Heads, French Now!, and Maurice Ashley Teaches Chess.",
        tvdb_guests: "Roberta Furger, author of \"Does Jane Compute? Preserving Our Daughter's Place in the Cyber Revolution\" and Pam Dixon, author of \"Take Charge Computing for Parents & Teens\".",
        tvdb_broadcastyear: "1998",
        ia_identifier: "CC1644PARENTING",
    },
    {
        tvdb_episode: "S16E49",
        tvdb_title: "REPEAT [SPA Codie Awards (1999)]",
        tvdb_description: "",
        tvdb_date: "August 24, 1999"
    },
    {
        tvdb_episode: "S16E52",
        tvdb_title: "REPEAT [E-Mail Update]",
        tvdb_description: "",
        tvdb_date: "September 14, 1999"
    },
    {
        tvdb_episode: "S17E01",
        tvdb_title: "REPEAT [Computer Bowl I: Part 1]",
        tvdb_description: "",
        tvdb_date: "September 21, 1999"
    },
    {
        tvdb_episode: "S17E02",
        tvdb_title: "REPEAT [Computer Bowl I: Part 2]",
        tvdb_description: "",
        tvdb_date: "September 28, 1999"
    },
    {
        tvdb_episode: "S17E03",
        tvdb_title: "REPEAT [Y2K]",
        tvdb_description: "Just about everyone has heard about the Y2K problem by now. While many understand that very big and very old computing systems might be in trouble, many are unaware that even your relatively new hardware, operating system, software applications and data files can be affected. We take a look at how your PC may very likely have its own compliance problems to deal with in the year 2000.\n\n[Episode #1703, First broadcast: 10/5/1999]\n\nPCfix 2000\nMike Johnston from the About Time Group, helps us understand the hardware side of the Year 2000 problem. From the CMOS on your mother board, to the BIOS in the operation system, he shows us what these chips look like and where they are in the computer. Mike also introduces us to PCFix 2000, a program that will run a check to see if your CMOS and BIOS (both must be problem free) are 100% Y2K ready.\n\nSymantec\nDana Prussoff demonstrates Symantec's Norton 2000 product. This software is particularly helpful in determining what Y2K problems you might have with your software applications and data files.\n\nMicrosoft\nDon Jones, with Y2K Readiness at Microsoft, gives us the perspective of the world's leading PC operating system and software vendor. Don shows us an example of a problem with Windows 98 and where to find the fix at the MS Web site. He also talks about fixes for MS application software (also available at the MS Web site).\n\nWindows Magazine\nMike Elgan, Editor of Windows Magazine, shows us what resources are available on the Web for anyone concerned about the Y2K problem. He points out what Windows Magazine has been saying and what its readers have been saying in their Y2K discussion area. He also shows us what information the US Government is offering (also for the general consumer) and the information available at a general interest Y2K Web site. Finally he takes us to a \"survivalist\" Web site, one that assumes the coming of the millennium is going to cause worldwide havoc.\n\nY2K in the Wider World\nCome January 1",
        tvdb_date: "October 5, 1999"
    },
    {
        tvdb_episode: "S17E04",
        tvdb_title: "Computer Games (1999)",
        tvdb_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles.\n\n[Episode #1704, First broadcast: 10/12/1999]\n\nSega Dreamcast\nChristian Svensson, Editor in Chief for MCV, a strategy guide for PC and video game retailers, demonstrates the Sega Dreamcast. The Dreamcast is a video game console that's Internet-ready with a 56k modem, 19 initial games, and optional keyboard.\n\nBaldur's Gate\nEvery year has it's hot new computer game, the must-have title for your PC. This year's runaway hit is Baldur's Gate from Interplay. Chris Parker demonstrates this current Dungeons & Dragons type game that has gotten just about everybody's vote for best role playing game of the year.\n\nRyan MacDonald\nRyan MacDonald, writer for Gamespot.com and Videogames.com, demonstrates three soon to be released hot games: Resident Evil 3 Nemesis for Sony PlayStation, WCW Mayhem and Rainbow Six for Nintendo 64.\n\nReality Fusion\nChad Kinzelberg CEO of Reality Fusion, demonstrates the GameCam. The GameCam itself is a Quick Cam from Logitech; Reality Fusion makes interactive gaming technology (called FreeAction) which lets you see yourself on the monitor as you interact with PC-generated opponents and objects like basketballs or volleyballs.",
        ia_identifier: "Gaming1999",
        tvdb_date: "October 12, 1999"
    },
    {
        tvdb_episode: "S17E05",
        tvdb_title: "DVDs",
        tvdb_description: "New computers are coming out with DVD drives built in. Do you need a DVD drive? We'll show you why this new format is great and how you can upgrade your old PC to use this new technology.\n\n[Episode #1705, First broadcast: 10/19/1999]\n\nSony\nBob DeMoulin, Marketing Manager with Sony, shows us the Vaio Digital Studio PC with built in DVD-ROM drive and a Sony external DVD-ROM drive that can be added to an existing PC.\n\nPanasonic, Computer Components Group\nJeff Saake shows us Panasonic's DVD-RAM drive. The product has received high reviews from numberous PC magazines. It's low cost per megabyte and fast transfer speeds make it a must-have if you depend on high capacity storage.\n\nHow Computers Work\nAuthor, Ron White, gives us a basic explanation of how DVD works and the vast power of its memory capabilities. Ron also demonstrates Microsoft's Encarta and the archive of National Geographic Magazine as products best utilizing the DVD capabilities\n\nEnterprise DVD\nRon Michaels, better known as \"DVD Bob\" because he claims to have authored the first-ever DVD-ROM disk, demonstrates three hot DVD products. First is Civilization, a cutting edge music video and what he thinks is the future of DVD products. Next Bob shows us an I-MAX film that has been modified for home viewing with a web component and ROM game. And last, a new 3D game not yet released.",
        ia_identifier: "DVD1011999",
        tvdb_date: "October 19, 1999"
    },
    {
        tvdb_episode: "S17E06",
        tvdb_title: "TV Meets PC",
        tvdb_description: "Will the TV and PC ever become one appliance in your living room? The convergence has begun. There are TV tuner cards for your PC, computer appliances that can be used to record television programs, and net surfing boxes for your TV. We'll review the latest products and developments.\n\n[Episode #1706, First broadcast: 10/26/1999]\n\nIntertainer\nIntertainer is a video-on-demand service currently in a few small trials of service. In the future, Intertainer plans to offer some 700 hours of movies, music, games, and other content that can be accessed for a fee from a PC or TV that is linked to a high speed network.\n\nThe Pseudo Online Network\nPseudo Programs is the premier provider of online Net-Television entertainment. Each week, Pseudo produces and netcasts over forty different interactive Net-TV shows, representing almost 200 original programming hours per month. Pseudo shows attract devoted audiences who are seeking alternatives to the offerings of mainstream media.\n\nMGI Software\nMGI's Pure Diva is a one-of-a-kind, Digital Interactive Video and Audio software suite that turns a PC into a digital VCRTM and DVD-based home entertainment center. It is designed to work with keyboard controls for the den or office as well as in the family room with an optional programmable remote control and an infrared receiver that can easily be attached to the PC.\n\nLiberate Technologies\nLiberate is one of the leaders in devoloping the \"information appliance\"; devices such as televisions, cell phones, game consoles, and others enhanced by an Internet connection. Liberate's goal is to expand outlets for the Internet, as well as act as the standard-bearer in the movement to create and support information appliances with a platform based on open standards.",
        ia_identifier: "TVMeetsP2001",
        tvdb_date: "October 26, 1999"
    },
    {
        tvdb_episode: "S17E07",
        tvdb_title: "Computer Crime",
        tvdb_description: "Is your PC safe from crime? Whether it's a computer virus via email, hackers breaking into your web site, or you using your credit card to buy something online, you are not safe from crime just because you're at home. We'll show you the latest ways to protect your computer and yourself in the digital world.\n\n[Episode #1707, First broadcast: 11/2/1999]\n\nInter@ctive Week\nSilicon Bureau Chief for Inter@ctive Week, Connie Guglielmo, regularly covers consumer issues such as privacy online, spam and companies building databases that may be used in ways that could hurt the consumer in the future. Connie also takes us to BizRate.com which ranks consumer product websites by those who have previously shopped there.\n\nCalifornia Department of Corporations\nAndrew Holmes is part of a small state agency, the California Department of Corporations, combating securities fraud on the Internet. California is one of about two dozen states that has special teams dedicated to rooting out Internet securities scams, such as companies selling bonds over the Internet to supposedly finance research. Andrew clicks us through the California Department of Corporations site which features guidelines for investors and links to related sites such as the National Fraud Center and the SEC, that helps potential online investors do their homework before they give anyone their money.\n\nSRI International\nDonn B. Parker has spent 30 years as a cybercrime fighter, working as a computer security expert for SRI International. He is also the author of the 1998 book, Fighting Computer Crime. With help from colleagues, a network penetration demonstration shows us how one can take control of someone else's web server and alter a web site that captures private logging-in information.\n\nMcAfee.com\nMcAfee.com is the next generation of internet services for updating, upgrading and managing PCs and provides downloadable virus checkers that will prevent some viruses from getting on your computer. McAfee Gen",
        tvdb_date: "November 2, 1999"
    },
    {
        tvdb_episode: "S17E08",
        tvdb_title: "Digital Home Movies",
        tvdb_description: "Can you produce the next generation of \"The Blair Witch Project\" at home on your computer. We'll show you some of the tricks of personal computers these days that you can use to turn your ideas into real movies as well as just how to add some production value to your home videos.\n\n[Episode #1708, First broadcast: 11/9/1999]\n\nDigital Video for Dummies\nMultimedia author, Martin Doucette, shows us the differences between low, medium, and high-end digital video cameras. Martin uses the Canon Elura, GL1 and XL1 cameras to demonstrate \"good\", \"better\", and \"best\" levels of cameras consumers can choose from, and discusses the features that are important in each.\n\nMatrox G400-TV\nThe G400-TV, is an all-in-one 3D graphics, video capture, and video editing card, providing full-resolution, full frame rate capture and playback with hardware-MJPEG compression/decompression. The advantage to installing the G400-TV into your PC is that since this is a hardware editing solution instead of just software, you are not limited by the speed of your PC processor.\n\nApple's iMac iMovie\nWe take a look at the iMacDV Special Edition, featuring a software called iMovie which is bundled on the DV models. iMovie software is meant for the first-time \"filmmakers\" to capture, edit, and create digital movies.\n\nApple's G4 & Final Cut Pro\nAndrew Baum, with Apple Computer, demonstrates a beta version of Final Cut Pro 1.2 on a new Mac G4. He demonstrates the basic features of Final Cut Pro as he edits a short video piece. With the basic \"drag and drop\" technique, Andrew shows how easy Final Cut Pro makes editing, transitions, compositing, special effects, titling, and other ways of manipulating media.",
        ia_identifier: "DigitalH1999",
        tvdb_date: "November 9, 1999"
    },
    {
        tvdb_episode: "S17E09",
        tvdb_title: "Robots (1999)",
        tvdb_description: "Robots are used to deactivate bombs, to do work in outer space, to work on assembly lines, and just for fun. We'll learn how to build a robot at home and discuss the future of robotics.\n\n[Episode #1709, First broadcast: 11/16/1999]\n\nLEGO MindStorms\nThe LEGO MindStorms Robotic Invention System enables kids 12 and up to design and program real robots that move, act, and think on their own using RCX, an autonomous LEGO microcomputer that can be programmed using a PC. Kids (and adults) can create everything from a light-sensitive intruder to a robotic rover that can follow a trail, move around obstacles, and even duck into dark corners.\n\nWoodside High School's \"Terminator\"\n\"Terminator\" is the product of Woodside High's Robotics Team and an entry in the National Robotics Competition, held yearly since 1995. The Robotics Competition is a national engineering contest immersing high school students in the world of engineering by giving them six weeks, to work with engineers to brainstorm, design, construct, and test a working robot. Along with winning the 1999 Western Regional, \"Terminator\" was named the most defensive robot in the competition for its remarkable ability to grab onto a 130-pound puck, push it to the opponents' side, then rear up and climb on top of the puck.\n\nSony's AIBO\nAn entertainment robot, AIBO looks like a mechanical dog, has its own emotions and instincts, and walks on four legs like man's best friend. AIBO learns by living and interacting with you, developing its own unique personality unlike that of any other AIBO!\n\nProbotic's Cye\nCye is a new domestic robot that uses wireless technology to place itself at the beck and call of its owners. Cye is controlled by a graphical user interface called Map-N-Zap that loads onto a PC. With the software, users acquaint the robot with its surroundings by dragging an icon around on the screen. Thus, in turn, Cye is dragged around the room.\n\nSRI International\nSRI International's Artificial Intelli",
        tvdb_date: "November 16, 1999"
    },
    {
        tvdb_episode: "S17E10",
        tvdb_title: "Consumer's Buying Guide (1999)",
        tvdb_description: "Our annual round-up of the latest and greatest software, hardware, websites, and gadgets, reviewed by a panel of journalists and analysts. Just in time for holiday buying ideas for your favorite techie... or yourself.\n\n[Episode #1710, First broadcast: 11/23/1999]\n\nPaul E. Schindler Jr.\nSenior Editor, Winmag.com and BYTE.com with CMP Media.\nPaul's Picks:\n\nThe new Compaq Aero 1500 Ultra-thin Palm-size PC is the thinnest Palm-size PC running Windows CE currently available.\nThe Lexmark Z51 Color Jetprinter claims to have the highest inkjet resolution on the planet!\nX10's DVD Anywhere wireless remote lets you control everything on your PC including it's DVD Player.\nTim Bajarin\nPresident of Creative Strategies.\n\nTim's Picks:\n\nHandspring's Visor Handheld is a palmtop that has small add-on hardware products that expand the functionality of the Visor via the product's \"Springboard\" expansion slot.\nPolaroid PhotoMAX PDC 640 Digital Camera makes digital photography easy and affordable while delivering outstanding image quality.\nWith the simple-to-use iMovie digital video editing software, Apple's iMac DV lets you create home movies, along with easy connection to the Internet.\nPossibly the iMac of PCs, the AMD Internet PC focuses on making PCs easier to set up, easier to use, and easier to upgrade.\nThe IBM ThinkPad 240Z is ultra-thin, lightweight, and has loads of processing power and storage space.\nThe lowest cost Armada solution, the Compaq Armada V300 Ultra Sub-Notebook, comes with an Intel Mobile Celeron processor, a mainstream hard drive capacity, and graphics/multimedia capability.\nThe Psion Revo PDA offers agenda, contacts manager, email on the move, jotter, PC sync and lots more, all made to fit in your pocket.\nThe PocketMail Backflip offers an integrated mobile e-mail solution for Palm connected organizers.\nPlus some hot products:\nWith a 56K modem, an ethernet port, Mac OS 8.6 and all the right software already installed Apple's iBook is as Int",
        tvdb_date: "November 23, 1999"
    },
    {
        tvdb_episode: "S17E11",
        tvdb_title: "ETRE Conference Monaco (1999): Part 1",
        tvdb_description: "The European Technology Roundtable Exposition, (ETRE), a gathering of the most prominent computer CEO's and analysts, was hosted by Dasar and held in Monaco recently. Computer Chronicles goes on location to meet the leaders of high-tech, to talk about Internet's influence, and the general future of e-commerce.\n\n[Episode #1711, First broadcast: 11/30/1999]\n\nInktomi\nA company seldom few would recognize, Inktomi's software is the engine underneath the searches you do on most web sites, such as AOL and Yahoo!\n\nNext Card\nOne solution to consumers uneasiness of using their credit card online is the first Internet credit card, called Next Card. With Next Card, you can apply for and get approved all online usually within a matter of seconds. Next Card also will send your monthly statement via the Internet, where you can pay your bill through electronic banking. Consumers can also use the card to shop in traditional settings.\n\nVertical Net\nThe Wall Street darling of the business to business world with a market capitalization over two billion dollars, Vertical Net builds meaningful e-commerce communities aiding in drastically cutting the costs of sales.\n\nCycore\nCycore is a Swedish company trying to redefine traditional advertising models for the Internet. It has developed a three-dimensional engine, called Cult 3D, used for putting virtual products on the Web that you look at, play with, and \"almost\" touch.\n\nY-Not\nStarting out as an animated greeting card site, Y-Not applied their animation technology to hyping MP3 artists. And by using the viral marketing power of the web, Y-Not makes it easy for you to send along music promos to a friend.\n\nInvention Machine Corporation\nFounded by Russian software engineers, IMC aims to move past search engines to what they call \"reading\" engines with their product CoBrain. CoBrain doesn't only find information on the Web, it reads it, summarizes it and points you to the exact information you're looking for.\n\nKeeBoo\nA",
        tvdb_date: "November 30, 1999"
    },
    {
        tvdb_episode: "S17E12",
        tvdb_title: "ETRE Conference Monaco (1999): Part 2",
        tvdb_description: "This week, Computer Chronicles concludes its coverage of the 1999 European Technology Roundtable Exposition, (ETRE), from Monte Carlo with an in-depth interview of Bill Gates of Microsoft.\n\n[Episode #1712, First broadcast: 12/7/1999]\n\nMicrosoft\nMost of Microsoft's competitors have stopped their gang-up on the software giant. Part of the reason may be because Microsoft's traditional attackers, Sun and Oracle, have their own problems.\n\nSun\nSun's Java has been very successful, but among JAVA developers attending the conference, the feeling was that Sun has mis-stepped with JAVA, as much as Microsoft has gone overboard with Windows.\n\nOracle\nMicrosoft's other nemesis, Oracle, has been struggling with its own repositioning to take advantage of the Internet.\n\nExpedia\nDespite the temptations of the Internet with success of sites like Expedia, Microsoft will stay focused on its core competency which is of course, software.\n\nBusiness at the Speed of Thought\nBill Gates calls for a \"digital nervous system for business\" - a final thrust toward the paperless office in this book.\n\nIris\nIris' new Optical Character Recognition software not only recognizes words, it can carry through fonts, type sizes, and printing styles into an electronic document. The Iris software does context sensitive recognition in 55 different languages, even handling Asian and Cyrillic fonts. The software also recognizes tables and spreadsheets, sending full functionality back to Excel.\n\nStorEdge\nStorEdge from Exegetics, takes optical character-recongized documents one step further. Once you scan in a document and run it through the Storedge software, a searchable database for all your documents is automatically created so that you never have to touch paper again. You can even do electronic highlighting and annotating.\n\nTeledesic\nA start-up Bill Gates has invested in, Teledesic is an immensely ambitious project to ring the globe with some sixty low-earth orbiting satellites to creat",
        tvdb_date: "December 7, 1999"
    },
    {
        tvdb_episode: "S17E13",
        tvdb_title: "Comdex Special (1999)",
        tvdb_description: "We have scouted the floor of the world's biggest computer trade show, COMDEX, in Las Vegas. We've invited the best of the best to come into our studio to give you an in-depth demonstration of the latest innovations in personal computing.\n\n[Episode #1713, First broadcast: 12/14/1999]\n\nCompaq iPaq and the Vestel Internet Terminal\nAnalyst Tim Bajarin of Creative Strategies takes a look at the emerging Internet appliance market featured at COMDEX. The iPaq is a device designed for companies moving toward an Internet-based computing model. Also featured at COMDEX was the Vestel Internet Terminal which will also be known as the MSN Web Companion under an OEM alliance.\n\nMP3, The Definitive Guide\nAuthor, Scot Hacker, discusses the emergence of MP3 technology and demonstrates the following products that made waves at COMDEX:\n\ni2Go eGo\nSony Vaio Music Clip Personal Network Player\nCreative Labs Nomad\nSonic Foundry's Siren Jukebox\nNapster 2.0\n\nByte.com\nAlexander Pournelle discusses the importance of Linux at COMDEX '99. Byte.com gave two awards to Linux at COMDEX, one of them being the \"Best of Show\" to the Linux Pavillion. Alex also shows us a NetWinder demonstrating Corel's WordPerfect for Linux.\n\nBlue Tooth\nSimon Ellis of Intel gives us a technology demonstration of Blue Tooth. Blue Tooth is not a product but a new technology backed by Intel, IBM, and Nokia. Blue Tooth's purpose is to improve existing wireless technologies by moving data and images among all sorts of household workplaces, and mobile devices (as far as 30 feet away), via radio waves.",
        ia_identifier: "BestofCO1999",
        tvdb_date: "December 14, 1999"
    },
    {
        tvdb_episode: "S17E14",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "December 21, 1999"
    },
    {
        tvdb_episode: "S17E15",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "December 28, 1999"
    },
    {
        tvdb_episode: "S17E16",
        tvdb_title: "Copyright Issues Online",
        tvdb_description: "The Internet has created a place where it is easy to find information and art to share. But what about copyright issues? Is everything free for the asking online? We'll show you software to protect your own site from being copied without your permission as well as discuss the latest issues involving newspapers and magazines re-printing their own articles online.\n\n[Episode #1716, First broadcast: 1/04/2000]\n\nDavid Kramer\nCopyright Lawyer David Kramer helps sort out some of the major copyright issues surrounding owning your own website.\n\nSan Francisco Chronicle\nHigher Education Reporter Tanya Schevitz demonstrates a number of sites that offer university class notes online. Tanya shows us sites like Versity.com and StudentU.com and compares what they offer with the notes she took herself in the same classes. She also shows us Plagarism.org, a web service that is able to spot whether students have plagiarized online material for their essays.\n\nAdobe Photoshop\nKaren Gauthier, from Adobe, shows us how you can protect an image that you have created with a digital watermark in Adobe Photoshop. Karen explains why you might want a watermark, how you put a watermark in an image, how it changes (or doesn't change) the image and how you can use Photoshop to read the watermarks of images that you find online, allowing you to contact the copyright owner of the image if you want to use it yourself.\n\nMP3 for Dummies\nAuthor Andy Rathbone's latest Dummies book is all about MP3, so he's an ideal guide to take us through the copyright issues that are dogging this popular new audio format. He points us to popular MP3 web sites such as Winamp.com, Rollingstone.com, and MP3.com. Andy also explains how the music industry is fighting back by trying to introduce a new version of MP3 with some copy protections.",
        ia_identifier: "Copyrigh2000",
        tvdb_date: "January 4, 2000"
    },
    {
        tvdb_episode: "S17E17",
        tvdb_title: "Home Networks",
        tvdb_description: "As you buy faster PCs, you may be keeping your old PC for someone else in the family. But rather than buy a separate modem or printer, you can easily network your home PCs to share these peripherals. We'll look at home network options including devices that let you share your peripherals just by using your existing electrical outlets.\n\n[Episode #1717, First broadcast: 1/16/2001]\n\nNetGear\nMost homes have phone wiring, probably making it one of the least expensive ways to set up a home network. We'll demonstrate the latest NetGear products using your phone lines to network your PCs.\n\nVega Technologies\nComputers are typically underutilized. Vega Technologies' Buddy Systems lets a second user share your CPU to work independently. All you need to buy is an extra monitor, mouse, and keyboard and you have two computers.\n\nApple's AirPort\nInstead of using traditional cabling to create a network, AirPort is an 11 megabit per second wireless local area network. AirPort allows computers to communicate with one another up to 150 feet away, even through walls. The AirPort uses 2.4 GHz radio frequencies for communication.\n\n2Wire\n2Wire is building a residential gateway to deliver broadband services to the home. The residential gateway is basically a box that sits inside your home and allows you to route content around your house to various computers and appliances. You're able to share Internet access, printers, listen to music on-demand, and add extra phone lines without any additional wiring.",
        ia_identifier: "HomeNetw2001",
        tvdb_date: "January 11, 2000"
    },
    {
        tvdb_episode: "S17E18",
        tvdb_title: "ETRE Conference Monaco (1999): Part 3",
        tvdb_description: "This week, on the Computer Chronicles, we take you to Monte Carlo for the conclusion of a special three-part series on the 10th anniversary of the ETRE conference, the European Technology Roundtable and Exhibition.\n\n[Episode #1718, First broadcast: 1/18/2000]\n\nLinux\nSeen as a low-cost alternative to Windows, Linux is fueling tremendous growth in inexpensive servers and new Internet appliances.\n\n\"Portal To Go\"\nMany are seeing the world of the next decade as being one in which a variety of appliances take the place of today's general purpose PC. Oracle is moving in that direction with its new \"Portal, To Go\".\n\nNetZero\nISP's may also offer free service because as your gateway to the Internet, they have lots of power. One example of such a ISP is Net Zero.\n\nMyWay.com\nMyWay.com is a new site that is pioneering a whole new level of intelligent customization.\n\nICast.com\nICast.com is one of a dozen startups positioning itself to become the first successful entertainment channel on the Web.\n\nGoTo.com\nOne of the more innovative new web search engines is GoTo.com. The results you get don't depend on matches to key words or phrases, but on how much the various web sites have paid GoTo to get top ranking in your search results.",
        ia_identifier: "ETREEuro2000",
        tvdb_date: "January 18, 2000"
    },
    {
        tvdb_episode: "S17E19",
        tvdb_title: "Faster Net Access",
        tvdb_description: "Most home PC users use their telephone line to connect to the Internet. But there are other options. We'll look at cable, DSL, and satellite connections as well as the latest high-speed telephone modems to help you find a faster way to get online.\n\n",
        ia_identifier: "FasterNe2000",
        tvdb_date: "January 25, 2000"
    },
    {
        tvdb_episode: "S17E20",
        tvdb_title: "Music on the PC",
        tvdb_description: "Whether you wish to learn to play an instrument, compose a song, download MP3 files, or just find out fun facts about your favorite musician, there's software, hardware, and many Internet sites for you.\n\n[Episode #1720 First broadcast: 2/1/2000]\n\nAdaptec - Easy CD Creator\nMary Eaves of Adaptec shows us their Easy CD Creator. She explains CD-R and CD-RW technology as she demonstrates how you can use the software to make compilation CDs of your favorite music. If you are recording from old vinyl LPs, the software has a neat program called Spin Doctor that helps get rid of scratches, pops and hisses. You can also use the program to record and store any other kind of data from your PC.\n\nBeatnik\nTony De Young from Beatnik shows us their cool web plug-in. He shows us several web sites such as sonicopia.com, Promotion.Yahoo.com, and a Pokemon site that have Beatnik installed, pointing out how they are different from other sites with audio. Tony also shows how you can add Beatnik to your own site. And finally he demonstrates their GrooveGrams concept where you can mix your own song online and post it.\n\nACID Music 2.0\nR. J. Holmberg shows us ACID MUSIC, a cool loop-based music creator. You can use it to create a song with almost no musical skill. You can easily add tracks and mix them together. If you have some musical ability, you can record your own tracks to add to those provided by the program. When you have created your song, you can export it as MP3, to a CD or upload it to share with others at the ACIDplanet web site.\n\nVan Koevring Interactive Piano\nSean O’Shea demonstrates the upright version of the Van Koevering Interactive Piano. He shows us how its impressive range of instrument sounds. You can even use different parts of the keyboard to play different instruments. The main appeal of the piano, though, is that it incorporates a Windows 98 CPU, touchscreen and CD player, which together allow you to run music teaching software of your choice. You can",
        tvdb_date: "February 1, 2000"
    },
    {
        tvdb_episode: "S17E21",
        tvdb_title: "Computers without Keyboards",
        tvdb_description: "We'll be taking a look at the latest developments that allow you to talk to your computer and your computer to talk back.\n\n[Episode #1721, First broadcast: 2/8/2000]\n\nDragon Naturally Speaking 4.0\nAuthor Dan Newman introduces us to Dragon Systems' Naturally Speaking 4.0. He shows us how it has the intelligence to anticipate what you will be wanting to write and how you can use it to browse the web. He then shows us Dragon Mobile Organizer which allows you not only to dictate messages but to automatically turn them into memos or emails when you connect the device to your PC.\n\nClarion AutoPC\nGeorge Giles from Clarion shows off the AutoPC, a leader in the rapidly developing area of auto-based computing. The Auto PC looks and works like a conventional car CD/stereo, but it is voice activated. George also demonstrates how it will allow you to make hands-free phone calls, get messages about traffic, news or personal email and give you directions to anywhere you want to go.\n\nBeVocal\nMikael Berner from BeVocal shows us how you can use your telephone, whether you're at home or on a cell phone, to connect to their service to get traffic updates for your specific location, directions, or to manage your email.\n\nGamePro Magazine\nDan Amrich is an editor with the popular gaming magazine GamePro. Dan gives us an overview of the latest and coolest ways of interacting with your game software without using a keyboard. He’ll brings along his picks for the best gaming mouse, joystick, wheel and hybrids thereof, as well as some special items like a fishing rod and a light blaster gun.",
        ia_identifier: "Computer2000",
        tvdb_date: "February 8, 2000"
    },
    {
        tvdb_episode: "S17E22",
        tvdb_title: "Internet Showcase Special (2000): Part 1",
        tvdb_description: "Computer Chronicles visited Palm Springs, California to bring you Upside's \"Internet Showcase\". The conference provided a look at lots of exciting new Internet products and services as well as plenty of fresh ideas for how to use the Internet.\n\n[Episode #1722, First broadcast: 2/15/2000]\n\nInformation Appliances:\nExpert City\nA \"tech support mart\" where you can shop for experts, review their ratings and their cost, Expert City allows you to hook up with a live person who will solve your computer problem in real time. The site's technology allows the expert to actually take remote control of your computer, so they don't just tell you how to fix the problem...they really do fix it.\n\nImage ID\nImage ID can come up with a clever approach to marketing photos with their Smart Picture Technology which essentially bar codes you with an image ID sticker. So that when you go to a theme park, you get a color wheel which uniquely identifies you and your family. As you move about the park, employees photograph you on various rides.\n\nSupersig\nSupersig's software lets you create mini web pages in the form of banners in an email. The supersigs act just like web pages and can hold dynamically created content and links.\n\nAladn\nAladn from Sage Systems lets you use the Web to control appliance in your house. From any web browser, you can turn the lights on, or off, read utility meters, or eventually, program your VCR.\n\nZone Labs\nWith always-on Internet connections becoming more common, Zone Alarm offers a way to protect your privacy. The software lets you build a virtual firewall to keep hackers from getting information off your computer.\n\nV-You\nA clever site that lets you protect intellectual property on your web site so that people can't steal your words, your graphics, or your pictures.\n\nSmart Pen\nIt has Gyro Electronics inside which measure the pressure, force and acceleration when you sign your name. Once you've written your signature, no one else can forge it",
        tvdb_date: "February 15, 2000"
    },
    {
        tvdb_episode: "S17E23",
        tvdb_title: "Internet Showcase Special (2000): Part 2",
        tvdb_description: "Computer Chronicles visited Palm Springs, California to bring you Upside's \"Showcase\". Part two of our “sneak preview” of what you’ll be seeing in the next year.\n\n[Episode #1723, First broadcast: 2/22/2000]\n\nInternet News:\nABC News.com\nSam Donaldson, network television journalist for more than thirty years, says he is a firm believer in the Internet as the future medium for all news. He now hosts a regular fifteen minute web cast show called Sam Donaldson at ABC News.com.\n\nNew York Times\nAnother well know news heavyweight moving aggressiblley into Internet news is the New York Times.\n\nInternet Business:\n@Backup\n@Backup is a simple way to back up your files on a web site. Just click on the files you want to back up, and they automatically get sent to your virtual back up drive in cyberspace.\n\nX-Drive\nAnother online storage service offering up to 100 megabytes of storage space for free. What’s cool about X-drive is that it appears like just another drive on your Windows desktop. You have your ‘C drive’, ‘D drive’ and now your ‘X Drive. You can choose to download at another time and it's incredibly fast – a three megabyte song move over to the X-drive can happen in twenty seconds.\n\ni-drive\ni-drive makes it easy to save web sites. Just grab the information you want, and transfer it to your i-drive. It collects all the HTML and metadata and it works much faster than a bookmark when it comes to retrieving that data.\n\nZoomerang\nZoomerang lets you add surveys to your web site so you can get organized feedback from your customers, your business associates or your friends.\n\nVoice Recognition:\nFiretalk\nFiretalk takes net telephony to the next phase. All you need is the plug-in, and you can talk to any one. You can even carry on a conference call with several people at once. Firetalk also automatically alerts you to other Firetalk users who are logged on to that same site so that you can also chat with other people who happen to be",
        tvdb_date: "February 22, 2000"
    },
    {
        tvdb_episode: "S17E24",
        tvdb_title: "Cooking with Your PC",
        tvdb_description: "There are software programs and online resources to allow you to cook like an expert chef, learn about food, and show you how to have a more nutritious meal. Since cooking shows on PBS are so popular, we'd thought we'd bring you an episode on cooking with your PC!\n\n[Episode #1724, First broadcast: 2/29/2000]",
        ia_identifier: "Cookingw2000",
        tvdb_date: "February 29, 2000"
    },
    {
        tvdb_episode: "S17E25",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "March 7, 2000"
    },
    {
        tvdb_episode: "S17E26",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "March 14, 2000"
    },
    {
        tvdb_episode: "S17E27",
        tvdb_title: "Online Investing",
        tvdb_description: "Can you make a fortune through online investing? Everybody seems to be trading stocks and bonds online these days. We'll show you how you make a trade, how to integrate your investments into your personal finance software and some websites that can help you make wise investment choices. And we'll check out a new financial information service with enough power to satisfy even the most active day trader.\n\n[Episode #1727, First broadcast: 3/21/2000]",
        ia_identifier: "OnlineIn2000",
        tvdb_date: "March 21, 2000"
    },
    {
        tvdb_episode: "S17E28",
        tvdb_title: "Computers and Politics (2000)",
        tvdb_description: "A review of the use of personal computers and the Internet in political campaigns, including a comparison of candidate web sites, a look inside a Senatorial campaign, and the prospects of on-line voting. Produced during the 2000 elections campaign season.",
        ia_identifier: "Computer2000_2",
        tvdb_date: "March 28, 2000"
    },
    {
        tvdb_episode: "S17E29",
        tvdb_title: "Users Group Dayton Special",
        tvdb_description: "Computer Chronicles goes on the road to Dayton, Ohio to cover one of the country's largest User Group Conventions.\n\n[Episode #1750, First broadcast: 4/4/2000]",
        ia_identifier: "UsersGro2000",
        tvdb_date: "April 4, 2000"
    },
    {
        tvdb_episode: "S17E40",
        tvdb_title: "REPEAT [Faster Net Access]",
        tvdb_description: "Most home PC users use their telephone line to connect to the Internet. But there are other options. We'll look at cable, DSL, and satellite connections as well as the latest high-speed telephone modems to help you find a faster way to get online.\n\n[Episode #1740, First broadcast: 1/25/2000]\n\nInternet Bible\nAuthor Brian Underdahl shows us what we can do to speed up our web access even if we don't have a high speed connection. He shows tweaks that can be done within the browser software that can speed up searching, caching or downloading files. And finally, Brian shows us Opera which is a smaller and far faster browser than either Internet Explorer or Netscape Navigator.\n\nTelocity\nOne option for a high speed connection is DSL which uses existing phone lines. Telocity offers a solution for easy DSL connections by its design as a 'plug-and play' solution. You just self-install the Telocity Expressway modem box, then their installation software configures your PC automatically.\n\n@Home\nEric Elia of Excite@Home tells us about broadband cable service which is a high speed connection via cable. Though not yet available in all areas, @Home delivers the Internet at speeds up to 100 times faster than a 28.8 modem.\n\nDirecPC\nAnother way of getting broadband access is by satellite. And the best solution for the general consumer right now is DirectPC from Hughes Network Systems. DirecPC offers nationwide access to the Internet at speeds of up to 400 kbps today, which is three times faster than ISDN and 14 times faster than a standard 28.8 modem.",
        ia_identifier: "FasterNe2000",
        tvdb_date: "January 25, 2000"
    },
    {
        tvdb_episode: "S17E41",
        tvdb_title: "REPEAT [Music on the PC]",
        tvdb_description: "Whether you wish to learn to play an instrument, compose a song, download MP3 files, or just find out fun facts about your favorite musician, there's software, hardware, and many Internet sites for you.\n\n[Episode #1741, First broadcast: 2/1/2000]\n\nAdaptec - Easy CD Creator\nMary Eaves of Adaptec shows us their Easy CD Creator. She explains CD-R and CD-RW technology as she demonstrates how you can use the software to make compilation CDs of your favorite music. If you are recording from old vinyl LPs, the software has a neat program called Spin Doctor that helps get rid of scratches, pops and hisses. You can also use the program to record and store any other kind of data from your PC.\n\nBeatnik\nTony De Young from Beatnik shows us their cool web plug-in. He shows us several web sites such as sonicopia.com, Promotion.Yahoo.com, and a Pokemon site that have Beatnik installed, pointing out how they are different from other sites with audio. Tony also shows how you can add Beatnik to your own site. And finally he demonstrates their GrooveGrams concept where you can mix your own song online and post it.\n\nACID Music 2.0\nR. J. Holmberg shows us ACID MUSIC, a cool loop-based music creator. You can use it to create a song with almost no musical skill. You can easily add tracks and mix them together. If you have some musical ability, you can record your own tracks to add to those provided by the program. When you have created your song, you can export it as MP3, to a CD or upload it to share with others at the ACIDplanet web site.\n\nVan Koevring Interactive Piano\nSean O’Shea demonstrates the upright version of the Van Koevering Interactive Piano. He shows us how its impressive range of instrument sounds. You can even use different parts of the keyboard to play different instruments. The main appeal of the piano, though, is that it incorporates a Windows 98 CPU, touchscreen and CD player, which together allow you to run music teaching software of your choice. You ca",
        tvdb_date: "February 1, 2000"
    },
    {
        tvdb_episode: "S17E44",
        tvdb_title: "Digital Living Room: Part 1",
        tvdb_description: "What will day-to-day life be like when our homes are wired, when we all have broadband pipes, and when everything that surrounds us has been transformed from the world of atoms to the world of bits? We take a look at the digital future in Computer Chronicle's coverage of the Digital Living Room Conference from Laguna Niguel, California.\n\n[Episode #1744, First broadcast: 7/25/2000]\n\nAOL TV\nPowered by an interactive software engine from Liberate, the main difference between AOL TV and Microsoft's Web TV, is that a current AOL subscriber maintains the same online identity on AOL TV.\n\nWeb TV\nNot to be outdone by AOL TV, Web TV has just announced its own new twist to the convergence of the TV and the PC, a new version of Web TV which lets you use it like a TIVO or Replay Personal VCR.\n\nReplayTV ShowStopper\nThe Panasonic ShowStopper with ReplayTV Service is moving toward the next generation of interactive TV by finding new ways to use storage and connectivity to provide a customized television viewing experience.\n\nTV on the Web\nVeon\nVeon is trying to move beyond AOL TV and Web TV to a new model, where interactivity is video based with TV style content on the Web that you can control.\n\nEsynch\nEsynch has com out with a multi-platform player that can play back video in any standard format and automatically synch the video to a web site. The player is called Choicecaster and its a free download.\n\nON24\nON24 has introduced something called PersonalCast that lets you essentially create a personalized CNBC service for your investor console. You select the stocks you want to follow, the sources and experts you want to hear from, and particular stories you want to read about.\n\nAnteye.com\nOne site that is focusing on new entertainment content on the Internet.\n\nPSMG\nThe Play Streaming Media Group has introduced the GlobeCaster which is essentially a computer peripheral that turns your PC into a complete video production studio.\n\nDigital Music\nSoundbreak.",
        tvdb_date: "July 25, 2000"
    },
    {
        tvdb_episode: "S17E46",
        tvdb_title: "Digital Living Room: Part 2",
        tvdb_description: "What will day-to-day life be like when our homes are wired, when we all have broadband pipes, and when everything that surrounds us has been transformed from the world of atoms to the world of bits? We conclude our look at the digital future in Computer Chronicle's coverage of the Digital Living Room Conference from Laguna Niguel, California.\n\n[Episode #1746, First broadcast: 8/1/2000]\n\nConnexion by Boeing\nSoon traveling by air won't keep you out of touch with news, email, or accessing the Net. Boeing's new inflight Internet service is due to launch late next year. It will cost somewhere between ten and twenty-five dollars and hour.\n\nMobile Commerce (M-Commerce)\nXenote iTag\nA new personal Internet device, the Xenote iTag, creates direct connections between the things that interest us in our daily lives, and online information. By \"bookmarking the radio\", listeners can \"tag\" songs and ads then connect to relevent information via the Web.\n\nBluetooth\nOne technology that may drive the new world of intelligent wireless devices is Bluetooth.\n\nMicrosoft Pocket PC\nMicrosoft has finally released Pocket PC, the next version of its Windows CE operating system.\n\nVoice Portal\nQuack.com\nA provider of voice-to-Web solutions, has developed technology that can quickly speech-enable existing websites and Internet information making its content available anywhere by phone.\n\nBeVocal\nWith BeVocal, callers using a toll-free number and simple spoken commands, can access point-to-point driving directions, travel information, real-time traffic reports, weather, business locations and stock quotes.\n\nTellme\nTell Me provides a free service you call to reach the people, businesses, and information you need every day.\n\nNew Information Appliances\nReplayTV\nThe Panasonic ShowStopper with ReplayTV Service is moving toward the next generation of interactive TV by finding new ways to use storage and connectivity to provide a customized television viewing experience.\n\nCei",
        tvdb_date: "August 1, 2000"
    },
    {
        tvdb_episode: "S17E47",
        tvdb_title: "REPEAT [Cooking with Your PC]",
        tvdb_description: "There are software programs and online resources to allow you to cook like an expert chef, learn about food, and show you how to have a more nutritious meal. Since cooking shows on PBS are so popular, we'd thought we'd bring you an episode on cooking with your PC!\n\n[Episode #1747, First broadcast: 2/29/2000]\n\nWebvan\nOne of the more recent and heavy-backed entrants into the home-delivered online grocery store, the Webvan site provides more than just a place to shop. It also provides menus, articles and recipes.\n\nSierra’s MasterCook\nKelly Stanmore, from Sierra demonstrates MasterCook. The software takes you through the first to last steps of preparing an entrée. You can search for a recipe in the MasterCook library, easily change the quantities, substitute ingredients or add your own notes to the recipe. She also demonstrates MasterCook’s video tips that will help you prepare the meal and show how you can search for the perfect wine to accompany it.\n\nCyberdiet.com\nTimi Gustafson, co-founder of Cyberdiet.com and a registered dietitian, helps us find a healthy recipe for dessert. She also shows us how you can use the site to create a healthy daily meal plan, as well as a plan for 12 weeks of dieting for either health reasons or weight loss. We also take a look at the fast-food comparison engine, the community areas and the health and exercise information and links.\n\nSun Microsystems\nSun Microsystems’ .Com Home Initiative shows us the first step in wiring the kitchen into your home information network: the Wireless Webpad. The Webpad can be use to find recipes or to make a shopping list. You can also connect a scanner to add items on your list or so you can keep track of what items you have to cook with. The device can be used with home delivery services. The Webpad can even control the production of your coffee maker (if it is networked)!",
        tvdb_date: "February 29, 2000"
    },
    {
        tvdb_episode: "S17E48",
        tvdb_title: "REPEAT [Online Investing]",
        tvdb_description: "Can you make a fortune through online investing? Everybody seems to be trading stocks and bonds online these days. We'll show you how you make a trade, how to integrate your investments into your personal finance software and some websites that can help you make wise investment choices. And we'll check out a new financial information service with enough power to satisfy even the most active day trader.\n\n[Episode #1748, First broadcast: 3/21/2000]\n\nDLJDirect.com\nBob Flowers of DLJDirect.com explains how to sign up to trade online and how to make a trade. Dob also demonstrates the free MarketSpeed software you get with DLJ. He shows off the real-time market data you get, how you can set up a streaming ticker for any selection of stocks, funds or bonds and how you can monitor your portfolio’s overall standing in real time.\n\nQuicken\nTheresa McGuinness, product manager of Quicken2000 shows us how you can import new information on your stocks and bonds into your personal finance software. She demonstrates how you can use the in-built connections between Quicken and Quicken.com to update your overall financial profile, alert you to changes in, or news about, your investments, and keep track of how you are meeting your investment goals.\n\nMSN Money Central\nJon Markman, Pulitzer Prize winner and managing editor at MSN’s Money Central shows us some essential (and mostly free) places you can go online to get professional quality financial information. He takes us to Yahoo Finance, MSN Investor, ClearStation.com, FreeEdgar.com and Briefing.com. He also gives us some tips on pitfalls to avoid (like trusting what people say in online finance chatrooms).\n\nWindowOnWallStreet.com\nMitch Ackles shows us WindowOnWallStreet.com, a news, charts and quotes site for the high-end trader. WindowOnWallStreet used to be a software product but has been turned into a web-only monthly fee service. The best thing it offers is access to what’s called Nasdaq Level II. That means y",
        tvdb_date: "March 21, 2000"
    },
    {
        tvdb_episode: "S17E49",
        tvdb_title: "REPEAT [Computers and Politics (2000)]",
        tvdb_description: "As the presidential campaigns are sweeping the country, we bring you an update on how you can become a more educated voter through the latest online sources.\n\n[Episode #1749, First broadcast: of 3/28/2000]\n\nAristotle Publishing\nAristotle Publishing is the leading company offering high-tech solutions to political campaigns. They are heavily involved in helping campaigns get the most from their use of computers and the Internet. One are Aristotle focuses are their rich media banners where web information can be combined with voter databases to make for more effectively targeted campaign ads.\n\nCampbell for Senate\nWe look at how computers are changing campaigns from an inside perspective. Joshua Ross takes us through the newly revamped Campbell for Senate site and points out what it offers in terms of fund raising, how it works as a resources site, and how it allows the campaign to work with other computer databases and with emai lto find supporters and then keep in touch with them throughout the campaign.\n\nLindsey Arent of Wired News\nStaff-writer with Wired News, Lindsay Arent has been following the online efforts of the candidates for the 2000 Presidential election and offers us her opinion about which of them \"get\" the Web and which don't.\n\nSan Mateo County\nWe take a look at the future of voting and whether voting itself will be going online. One of the leading California proponents of online voting is San Mateo County Clerk Warren Slocum. Warren explains what you can do already online (register to vote) and what is impeding getting voting online. He also previews how voting might work on websites and a mobile digital ballot box.",
        ia_identifier: "Computer2000_2",
        tvdb_date: "March 28, 2000"
    },
    {
        tvdb_episode: "S17E50",
        tvdb_title: "REPEAT [Users Group Dayton Special]",
        tvdb_description: "Computer Chronicles goes on the road to Dayton, Ohio to cover one of the country's largest User Group Conventions.\n\n[Episode #1750, First broadcast: 4/4/2000]\n\nDayton Microcomputer Association\nThe Dayton Microcomputer Association put on their first Computerfest in 1976 and it's been growing ever since. Despite the growing sophistication in personal computer technology, the DMA believes there is still a need for users groups.\n\nWhat's unusual about this Computerfest is that it is a nonprofit endeavor and that the entire show is put on by volunteers.\n\nOhio Technology Access Project\nThe Dayton, Ohio community runs one of the nation's leading computer recycling programs. Volunteers check out the old machines, clean off the hard drives, install a new operating system, and then turn them over to people who can't afford to buy a computer.\n\nNCR\nNCR has become the world's leading vendor of ATM's and it is working now to push that technology in several new directions such as a new Web enabled ATM that will let you do Web surfing while you do your banking transactions.\n\nNCR is working on new web terminals that would go into kitchen appliances like refrigerators or microwave ovens. NCR thinks the kitchen is the ultimate location for Internet home appliances and NCR is working is on an automated check-out station at supermarkets.\n\nAnother NCR innovation is new technology to do away with PIN numbers at ATM's by scanning the iris of your eye to identify you.\n\nLexis Nexis\nDayton, Ohio is also the home of Lexis Nexis, the world's largest online publisher. Lexis Nexis started the online research business more than 30 years ago. They are now evolving into a web based product, currently running 70 different URL's. Indeed Lexis Nexis sees itself as the original e-commerce company.\n\nMendelson's\nIf you are a tinkerer or inventor, Mendelson's is Mecca! They have over 400,000 items in their inventory, from computer peripherals to every kind of electronic component you",
        tvdb_date: "April 4, 2000"
    },
    {
        tvdb_episode: "S18E01",
        tvdb_title: "REPEAT [Digital Living Room: Part 1]",
        tvdb_description: "What will day-to-day life be like when our homes are wired, when we all have broadband pipes, and when everything that surrounds us has been transformed from the world of atoms to the world of bits? We take a look at the digital future in Computer Chronicle's coverage of the Digital Living Room Conference from Laguna Niguel, California.\n\n[Episode #1801, First broadcast: 9/19/2000]\n\nAOL TV\nPowered by an interactive software engine from Liberate, the main difference between AOL TV and Microsoft's Web TV, is that a current AOL subscriber maintains the same online identity on AOL TV.\n\nWeb TV\nNot to be outdone by AOL TV, Web TV has just announced its own new twist to the convergence of the TV and the PC, a new version of Web TV which lets you use it like a TIVO or Replay Personal VCR.\n\nReplayTV ShowStopper\nThe Panasonic ShowStopper with ReplayTV Service is moving toward the next generation of interactive TV by finding new ways to use storage and connectivity to provide a customized television viewing experience.\n\nTV on the Web\nVeon\nVeon is trying to move beyond AOL TV and Web TV to a new model, where interactivity is video based with TV style content on the Web that you can control.\n\nEsynch\nEsynch has com out with a multi-platform player that can play back video in any standard format and automatically synch the video to a web site. The player is called Choicecaster and its a free download.\n\nON24\nON24 has introduced something called PersonalCast that lets you essentially create a personalized CNBC service for your investor console. You select the stocks you want to follow, the sources and experts you want to hear from, and particular stories you want to read about.\n\nAnteye.com\nOne site that is focusing on new entertainment content on the Internet.\n\nPSMG\nThe Play Streaming Media Group has introduced the GlobeCaster which is essentially a computer peripheral that turns your PC into a complete video production studio.\n\nDigital Music\nSoundbreak.",
        tvdb_date: "September 19, 2000"
    },
    {
        tvdb_episode: "S18E02",
        tvdb_title: "REPEAT [Digital Living Room: Part 2]",
        tvdb_description: "What will day-to-day life be like when our homes are wired, when we all have broadband pipes, and when everything that surrounds us has been transformed from the world of atoms to the world of bits? We conclude our look at the digital future in Computer Chronicle's coverage of the Digital Living Room Conference from Laguna Niguel, California.\n\n[Episode #1802, First broadcast: 9/26/2000]\n\nConnexion by Boeing\nSoon traveling by air won't keep you out of touch with news, email, or accessing the Net. Boeing's new inflight Internet service is due to launch late next year. It will cost somewhere between ten and twenty-five dollars and hour.\n\nMobile Commerce (M-Commerce)\nXenote iTag\nA new personal Internet device, the Xenote iTag, creates direct connections between the things that interest us in our daily lives, and online information. By \"bookmarking the radio\", listeners can \"tag\" songs and ads then connect to relevent information via the Web.\n\nBluetooth\nOne technology that may drive the new world of intelligent wireless devices is Bluetooth.\n\nMicrosoft Pocket PC\nMicrosoft has finally released Pocket PC, the next version of its Windows CE operating system.\n\nVoice Portal\nQuack.com\nA provider of voice-to-Web solutions, has developed technology that can quickly speech-enable existing websites and Internet information making its content available anywhere by phone.\n\nBeVocal\nWith BeVocal, callers using a toll-free number and simple spoken commands, can access point-to-point driving directions, travel information, real-time traffic reports, weather, business locations and stock quotes.\n\nTellme\nTell Me provides a free service you call to reach the people, businesses, and information you need every day.\n\nNew Information Appliances\nReplayTV\nThe Panasonic ShowStopper with ReplayTV Service is moving toward the next generation of interactive TV by finding new ways to use storage and connectivity to provide a customized television viewing experience.\n\nCe",
        tvdb_date: "September 26, 2000"
    },
    {
        tvdb_episode: "S18E03",
        tvdb_title: "REPEAT [Computer Crime]",
        tvdb_description: "Is your PC safe from crime? Whether it's a computer virus via email, hackers breaking into your web site, or you using your credit card to buy something online, you are not safe from crime just because you're at home. We'll show you the latest ways to protect your computer and yourself in the digital world.\n\n[Episode #1803, First broadcast: 10/3/1999]\n\nInter@ctive Week\nSilicon Bureau Chief for Inter@ctive Week, Connie Guglielmo, regularly covers consumer issues such as privacy online, spam and companies building databases that may be used in ways that could hurt the consumer in the future. Connie also takes us to BizRate.com which ranks consumer product websites by those who have previously shopped there.\n\nCalifornia Department of Corporations\nAndrew Holmes is part of a small state agency, the California Department of Corporations, combating securities fraud on the Internet. California is one of about two dozen states that has special teams dedicated to rooting out Internet securities scams, such as companies selling bonds over the Internet to supposedly finance research. Andrew clicks us through the California Department of Corporations site which features guidelines for investors and links to related sites such as the National Fraud Center and the SEC, that helps potential online investors do their homework before they give anyone their money.\n\nSRI International\nDonn B. Parker has spent 30 years as a cybercrime fighter, working as a computer security expert for SRI International. He is also the author of the 1998 book, Fighting Computer Crime. With help from colleagues, a network penetration demonstration shows us how one can take control of someone else's web server and alter a web site that captures private logging-in information.\n\nMcAfee.com\nMcAfee.com is the next generation of internet services for updating, upgrading and managing PCs and provides downloadable virus checkers that will prevent some viruses from getting on your computer. McAfee Gen",
        tvdb_date: "October 3, 2000"
    },
    {
        tvdb_episode: "S18E04",
        tvdb_title: "REPEAT [Digital Home Movies]",
        tvdb_description: "Can you produce the next generation of \"The Blair Witch Project\" at home on your computer. We'll show you some of the tricks of personal computers these days that you can use to turn your ideas into real movies as well as just how to add some production value to your home videos.\n\n[Episode #1804, First broadcast: 10/10/2000]\n\nDigital Video for Dummies\nMultimedia author, Martin Doucette, shows us the differences between low, medium, and high-end digital video cameras. Martin uses the Canon Elura, GL1 and XL1 cameras to demonstrate \"good\", \"better\", and \"best\" levels of cameras consumers can choose from, and discusses the features that are important in each.\n\nMatrox G400-TV\nThe G400-TV, is an all-in-one 3D graphics, video capture, and video editing card, providing full-resolution, full frame rate capture and playback with hardware-MJPEG compression/decompression. The advantage to installing the G400-TV into your PC is that since this is a hardware editing solution instead of just software, you are not limited by the speed of your PC processor.\n\nApple's iMac iMovie\nWe take a look at the iMacDV Special Edition, featuring a software called iMovie which is bundled on the DV models. iMovie software is meant for the first-time \"filmmakers\" to capture, edit, and create digital movies.\n\nApple's G4 & Final Cut Pro\nAndrew Baum, with Apple Computer, demonstrates a beta version of Final Cut Pro 1.2 on a new Mac G4. He demonstrates the basic features of Final Cut Pro as he edits a short video piece. With the basic \"drag and drop\" technique, Andrew shows how easy Final Cut Pro makes editing, transitions, compositing, special effects, titling, and other ways of manipulating media.",
        ia_identifier: "DigitalH1999",
        tvdb_date: "October 10, 2000"
    },
    {
        tvdb_episode: "S18E05",
        tvdb_title: "REPEAT [Robots (1999)]",
        tvdb_description: "Robots are used to deactivate bombs, to do work in outer space, to work on assembly lines, and just for fun. We'll learn how to build a robot at home and discuss the future of robotics.\n\n[Episode #1805, First broadcast: 10/17/2000]\n\nLEGO MindStorms\nThe LEGO MindStorms Robotic Invention System enables kids 12 and up to design and program real robots that move, act, and think on their own using RCX, an autonomous LEGO microcomputer that can be programmed using a PC. Kids (and adults) can create everything from a light-sensitive intruder to a robotic rover that can follow a trail, move around obstacles, and even duck into dark corners.\n\nWoodside High School's \"Terminator\"\n\"Terminator\" is the product of Woodside High's Robotics Team and an entry in the National Robotics Competition, held yearly since 1995. The Robotics Competition is a national engineering contest immersing high school students in the world of engineering by giving them six weeks, to work with engineers to brainstorm, design, construct, and test a working robot. Along with winning the 1999 Western Regional, \"Terminator\" was named the most defensive robot in the competition for its remarkable ability to grab onto a 130-pound puck, push it to the opponents' side, then rear up and climb on top of the puck.\n\nSony's AIBO\nAn entertainment robot, AIBO looks like a mechanical dog, has its own emotions and instincts, and walks on four legs like man's best friend. AIBO learns by living and interacting with you, developing its own unique personality unlike that of any other AIBO!\n\nProbotic's Cye\nCye is a new domestic robot that uses wireless technology to place itself at the beck and call of its owners. Cye is controlled by a graphical user interface called Map-N-Zap that loads onto a PC. With the software, users acquaint the robot with its surroundings by dragging an icon around on the screen. Thus, in turn, Cye is dragged around the room.\n\nSRI International\nSRI International's Artificial Intelli",
        tvdb_date: "October 17, 2000"
    },
    {
        tvdb_episode: "S18E06",
        tvdb_title: "REPEAT [Copyright Issues Online]",
        tvdb_description: "The Internet has created a place where it is easy to find information and art to share. But what about copyright issues? Is everything free for the asking online? We'll show you software to protect your own site from being copied without your permission as well as discuss the latest issues involving newspapers and magazines re-printing their own articles online.\n\n[Episode #1806, First broadcast: 10/24/2000]\n\nDavid Kramer\nCopyright Lawyer David Kramer helps sort out some of the major copyright issues surrounding owning your own website.\n\nSan Francisco Chronicle\nHigher Education Reporter Tanya Schevitz demonstrates a number of sites that offer university class notes online. Tanya shows us sites like Versity.com and StudentU.com and compares what they offer with the notes she took herself in the same classes. She also shows us Plagarism.org, a web service that is able to spot whether students have plagiarized online material for their essays.\n\nAdobe Photoshop\nKaren Gauthier, from Adobe, shows us how you can protect an image that you have created with a digital watermark in Adobe Photoshop. Karen explains why you might want a watermark, how you put a watermark in an image, how it changes (or doesn't change) the image and how you can use Photoshop to read the watermarks of images that you find online, allowing you to contact the copyright owner of the image if you want to use it yourself.\n\nMP3 for Dummies\nAuthor Andy Rathbone's latest Dummies book is all about MP3, so he's an ideal guide to take us through the copyright issues that are dogging this popular new audio format. He points us to popular MP3 web sites such as Winamp.com, Rollingstone.com, and MP3.com. Andy also explains how the music industry is fighting back by trying to introduce a new version of MP3 with some copy protections.",
        ia_identifier: "Copyrigh2000",
        tvdb_date: "October 24, 2000"
    },
    {
        tvdb_episode: "S18E07",
        tvdb_title: "REPEAT [Computer Bowl X: Part 1]",
        tvdb_description: "Technology trivia is no small matter when it comes to displays of knowledge. In an archive edition of Computer Chronicles, technology celebrities from the East Coast and the West Coast vie to see which team knows more about computer trivia.\n\n[Episode #1807, First broadcast: 10/31/2000]\n\nThe Teams:\n\nWest Coast :\n\nStewart Alsop\nBill Gates\nJohn Doerr\nEast Coast:\n\nPat McGovern\nBob Frankston\nThe Guest Questioner:\n\nMitch Kapor, Founder of Lotus Development Corporation\nThe Judges Include:\n\nBill Joy, Founder of Sun Microsystems",
        ia_identifier: "compbowl1",
        tvdb_date: "October 31, 2000"
    },
    {
        tvdb_episode: "S18E08",
        tvdb_title: "REPEAT [Computer Bowl X: Part 2]",
        tvdb_description: "Technology trivia is no small matter when it comes to displays of knowledge. In an archive edition of Computer Chronicles, technology celebrities from the East Coast and the West Coast vie to see which team knows more about computer trivia.\n\n[Episode #1808, First broadcast: 10/31/2000]",
        ia_identifier: "compbowl2",
        tvdb_date: "November 7, 2000"
    },
    {
        tvdb_episode: "S18E09",
        tvdb_title: "REPEAT [Cooking with Your PC]",
        tvdb_description: "There are software programs and online resources to allow you to cook like an expert chef, learn about food, and show you how to have a more nutritious meal. Since cooking shows on PBS are so popular, we'd thought we'd bring you an episode on cooking with your PC!\n\n[Episode #1809, First broadcast: 11/14/2000]\n\nWebvan\nOne of the more recent and heavy-backed entrants into the home-delivered online grocery store, the Webvan site provides more than just a place to shop. It also provides menus, articles and recipes.\n\nSierra’s MasterCook\nKelly Stanmore, from Sierra demonstrates MasterCook. The software takes you through the first to last steps of preparing an entrée. You can search for a recipe in the MasterCook library, easily change the quantities, substitute ingredients or add your own notes to the recipe. She also demonstrates MasterCook’s video tips that will help you prepare the meal and show how you can search for the perfect wine to accompany it.\n\nCyberdiet.com\nTimi Gustafson, co-founder of Cyberdiet.com and a registered dietitian, helps us find a healthy recipe for dessert. She also shows us how you can use the site to create a healthy daily meal plan, as well as a plan for 12 weeks of dieting for either health reasons or weight loss. We also take a look at the fast-food comparison engine, the community areas and the health and exercise information and links.\n\nSun Microsystems\nSun Microsystems’ .Com Home Initiative shows us the first step in wiring the kitchen into your home information network: the Wireless Webpad. The Webpad can be use to find recipes or to make a shopping list. You can also connect a scanner to add items on your list or so you can keep track of what items you have to cook with. The device can be used with home delivery services. The Webpad can even control the production of your coffee maker (if it is networked)!",
        ia_identifier: "Cookingw2000",
        tvdb_date: "November 14, 2000"
    },
    {
        tvdb_episode: "S18E10",
        tvdb_title: "ETRE Conference Prague (2000): Part 1",
        tvdb_description: "Highlights of the annual European Technology Roundtable Exhibition from Prague. This is the premiere annual gathering of tech industry executives. Featured in this program are Bill Gates of Microsoft; Jocelyn Attal, IBM, Tony Perkins of Red Herring; Michael Rogers, Newsweek Interactive; Carol Bartz, Autodesk; David Kirkpatrick, Fortune; Mark Walsh, VerticalNet; John Thompson, Symantec; David Wetherell, CMGI; Mitchell Kertzman, Liberate; Gil Shwed, Check Point; Dan Gillmor, the San Jose Mercury News.",
        tvdb_broadcastyear: "2000",
        ia_identifier: "ETREEuro2001",
        tvdb_date: "November 21, 2000"
    },
    {
        tvdb_episode: "S18E11",
        tvdb_title: "ETRE Conference Prague (2000): Part 2",
        tvdb_description: "The second part of a three part series on the annual European Technology Roundtable Exhibition held in Prague. ETRE is the premiere annual gathering of high tech executives from around the world. Additional guests in part two include Thom Calandra of CBS MarketWatch; Eric Benhamou, 3Com; Keith Krach, Ariba.",
        tvdb_broadcastyear: "2000",
        ia_identifier: "ETREEuro2001_2",
        tvdb_date: "November 28, 2000"
    },
    {
        tvdb_episode: "S18E12",
        tvdb_title: "Consumer's Buying Guide (2000)",
        tvdb_description: "The annual guide to the coolest new computer products on the market. Products reviewed include new digital cameras, MP3 players, PDAs, appliance PCs, cell phone accessories, and Sony's Aibo robot dog.",
        tvdb_guests: "writers Larry Magid of the LA Times and Mike Langberg of the San Jose Mercury News.",
        tvdb_broadcastyear: "2000",
        ia_identifier: "CC1812BUYGUIDE",
        tvdb_date: "December 5, 2000"
    },
    {
        tvdb_episode: "S18E13",
        tvdb_title: "MP3 Secrets",
        tvdb_description: "We will show you the basics of how to find MP3's on the net, to portable mp3 players and how to burn your own music CDs.\n\n[Episode #1813, First broadcast: 12/12/2000]\n\nIf you're into downloading mp3 files you're facing storage issues where to put it all of the stuff. Now there's a really slick and relatively inexpensive new solution from hard drive maker Maxtor.\n\nMP3.com\nMP3.com is the premier Music Service Provider (MSP) allowing consumers to instantly discover, purchase, listen to, store and organize their music collection from anywhere, at any time, using any Internet device.  MP3.com offers more than a half-million high-quality songs from 100,000-plus artists available for FREE downloading over the Internet.\n\nEasy CD Creator pro\nEliot Van Buskirk of c|net shows us how to use Easy CD Creator 4 to create both audio cds and data mp3 cds.  Adaptec's Easy CD Creator 4 Deluxe gives you all the tools you need--and more--to create all sorts of data and music CDs.\n\nPortable mp3 players\nLarry Magid of the LA Times will review some of the newest mp3 players on the market today.\n\nRio 600 - Capture and playback digital-quality music from the Internet or your CDs. Seize your audio, master your mix, retool your memory, even select your faceplate color.  The Rio 600 offers 64MB of memory, interchangable color faceplates, and supports mp3 and Windows Media audio formats.\n\nIomega HipZip -  This portable device gives you skip-free, CD-quality sound  in a cool, compact design. The HipZip also doubles as a PocketZip storage device, so you can download and  transport spreadsheets, images and more.  The HipZip offers Universal music file format which allows for support of both free and copyright protected content and supports MP3 and the new Microsoft® Windows Media audio formats.  It also has a high quality equalizer control system that enhances audio quality.\n\nRave: mp2200 -   Its 64MB of storage on board combined with SmartMedia card slot allows unlimited expans",
        tvdb_date: "December 12, 2000"
    },
    {
        tvdb_episode: "S18E14",
        tvdb_title: "REPEAT [Gary Kildall Special]",
        tvdb_description: "",
        tvdb_date: "December 19, 2000"
    },
    {
        tvdb_episode: "S18E15",
        tvdb_title: "ETRE Conference Prague (2000): Part 3",
        tvdb_description: "We wrap up ETRE 2000 in part three. We're looking at wireless and how it will affect the Internet. We'll cover everything from getting the data to your PDA or cell phone, to who's making sure the information is safe.\n\n[Episode #1815, First broadcast: 5/15/2001]",
        ia_identifier: "CC1815ETRE2000THREE",
        tvdb_date: "December 26, 2000"
    },
    {
        tvdb_episode: "S18E16",
        tvdb_title: "Online Gaming",
        tvdb_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles.\n\n[Episode #1816, First broadcast: 01/02/2001]\n\nSega Dreamcast\nChristian Svensson, Editor in Chief for MCV, a strategy guide for PC and video game retailers, demonstrates the Sega Dreamcast. The Dreamcast is a video game console that's Internet-ready with a 56k modem, 19 initial games, and optional keyboard.\n\nBaldur's Gate\nEvery year has it's hot new computer game, the must-have title for your PC. This year's runaway hit is Baldur's Gate from Interplay. Chris Parker demonstrates this current Dungeons & Dragons type game that has gotten just about everybody's vote for best role playing game of the year.\n\nRyan MacDonald\nRyan MacDonald, writer for Gamespot.com and Videogames.com, demonstrates three soon to be released hot games: Resident Evil 3 Nemesis for Sony PlayStation, WCW Mayhem and Rainbow Six for Nintendo 64.\n\nReality Fusion\nChad Kinzelberg CEO of Reality Fusion, demonstrates the GameCam. The GameCam itself is a Quick Cam from Logitech; Reality Fusion makes interactive gaming technology (called FreeAction) which lets you see yourself on the monitor as you interact with PC-generated opponents and objects like basketballs or volleyballs.",
        ia_identifier: "CC1816GAMING",
        ia_identifier2: "OnlineGa01.0",
        tvdb_date: "January 2, 2001"
    },
    {
        tvdb_episode: "S18E17",
        tvdb_title: "Privacy Online",
        tvdb_description: "This week we're going to help you preserve your privacy in the wired world.  We cover the topic of \"cookies\" and we look at ways to browse the Web anonymously.  We even look at proper conduct in a chatroom.\n\n[Episode #1817, First broadcast: of 1/9/2001]\n\nElectronic Frontier Foundation\nEFF is a non-profit, non-partisan organization working in the public interest to protect fundamental civil liberties, including privacy and freedom of expression in the arena of computers and the Internet. EFF was founded in 1990, and is based in San Francisco, California, with a satellite office in Washington, DC. \n\nDebra Pierce goes through the process of controlling cookies on your web browser. She explains how to find out who's trying to track you and your viewing habits. Debra also explains the importance of the privacy policy on a web site and what does having this information online can really mean to you.\n\nTRUSTe\nTRUSTe was launched to provide a mechanism by which Web sites could alleviate consumer concerns about privacy online. The core of this initiative was the TRUSTe Privacy Seal, a visual symbol that could be displayed by Web sites that met the program’s requirements for data gathering and dissemination practices, and agreed to participate in its dispute resolution process. \n\nTRUSTe’s goal was to establish a seal that would send a clear signal to consumers that they could expect companies to adhere to certain requirements about the way Web sites handled data, and that an independent, third-party would hear and respond to their complaints and resolve their disputes. The backbone of the TRUSTe program is the contract that is signed between TRUSTe and the Web site. This contract gives TRUSTe the ability to address users’ privacy concerns regardless of their citizenship or the location of the TRUSTe licensee.\n\nPrivada\nPrivada provides, through disassociation and compartmentalization, a unique privacy solution that allows each individual to decide how much",
        tvdb_date: "January 9, 2001"
    },
    {
        tvdb_episode: "S18E18",
        tvdb_title: "REPEAT [Home Networks]",
        tvdb_description: "As you buy faster PCs, you may be keeping your old PC for someone else in the family. But rather than buy a separate modem or printer, you can easily network your home PCs to share these peripherals. We'll look at home network options including devices that let you share your peripherals just by using your existing electrical outlets.\n\n[Episode #1818, First broadcast: 1/16/2001]\n\nNetGear\nMost homes have phone wiring, probably making it one of the least expensive ways to set up a home network. We'll demonstrate the latest NetGear products using your phone lines to network your PCs.\n\nVega Technologies\nComputers are typically underutilized. Vega Technologies' Buddy Systems lets a second user share your CPU to work independently. All you need to buy is an extra monitor, mouse, and keyboard and you have two computers.\n\nApple's AirPort\nInstead of using traditional cabling to create a network, AirPort is an 11 megabit per second wireless local area network. AirPort allows computers to communicate with one another up to 150 feet away, even through walls. The AirPort uses 2.4 GHz radio frequencies for communication.\n\n2Wire\n2Wire is building a residential gateway to deliver broadband services to the home. The residential gateway is basically a box that sits inside your home and allows you to route content around your house to various computers and appliances. You're able to share Internet access, printers, listen to music on-demand, and add extra phone lines without any additional wiring.",
        ia_identifier: "HomeNetw2001",
        tvdb_date: "January 16, 2001"
    },
    {
        tvdb_episode: "S18E19",
        tvdb_title: "REPEAT [TV Meets PC]",
        tvdb_description: "Will the TV and PC ever become one appliance in your living room? The convergence has begun. There are TV tuner cards for your PC, computer appliances that can be used to record television programs, and net surfing boxes for your TV. We'll review the latest products and developments.\n\n[Episode #1819, First broadcast: 1/23/2001]\n\nIntertainer\nIntertainer is a video-on-demand service currently in a few small trials of service. In the future, Intertainer plans to offer some 700 hours of movies, music, games, and other content that can be accessed for a fee from a PC or TV that is linked to a high speed network.\n\nThe Pseudo Online Network\nPseudo Programs is the premier provider of online Net-Television entertainment. Each week, Pseudo produces and netcasts over forty different interactive Net-TV shows, representing almost 200 original programming hours per month. Pseudo shows attract devoted audiences who are seeking alternatives to the offerings of mainstream media.\n\nMGI Software\nMGI's Pure Diva is a one-of-a-kind, Digital Interactive Video and Audio software suite that turns a PC into a digital VCRTM and DVD-based home entertainment center. It is designed to work with keyboard controls for the den or office as well as in the family room with an optional programmable remote control and an infrared receiver that can easily be attached to the PC.\n\nLiberate Technologies\nLiberate is one of the leaders in devoloping the \"information appliance\"; devices such as televisions, cell phones, game consoles, and others enhanced by an Internet connection. Liberate's goal is to expand outlets for the Internet, as well as act as the standard-bearer in the movement to create and support information appliances with a platform based on open standards.",
        ia_identifier: "TVMeetsP2001",
        tvdb_date: "January 23, 2001"
    },
    {
        tvdb_episode: "S18E20",
        tvdb_title: "High Tech Hawaii: Part 1",
        tvdb_description: "When you think of Hawaii you think of sun and relaxation.  There's a lot more to Hawaii today than just agriculture and tourism.  Hawaii has gone hi-tech and we're going to show you some of the companies that are making Hawaii one of the fastest growing hi-tech hubs in the country.  Join us for part one of our look into Hawaii's hi-tech world.\n\n[Episode #1820, First broadcast: of 1/30/2001]\n\nTrex Enterprises\nTrex Enterprises began operations in Hawaii in 1991 by performing R&D and maintenance at the Maui Space Surveillance Site (MSSS) on Mt. Haleakala on Maui. Since then they have substantially expanded their work in both technical scope and in geographic location.\n\nAt present they have R&D laboratories and coating facilities on Maui and Kauai at four separate locations. On Maui they develop Active Pixel Image sensors for use in consumer, military, and medical products. On Kauai they're developing advanced materials for the semiconductor and biology industries. In the near future, they anticipate taking the R&D into commercial manufacturing operations in Hawaii, on both Maui and Kauai.\n\nAEOS Telescope\nThe Advanced Electro Optical System (AEOS) facility on the Hawaiian island of Maui can pinpoint anything from high-flying aircraft to satellites orbiting earth hundreds of miles up. But this giant 3.67-meter azimuth-elevation telescope couldn't do its job without some high-tech ground anchoring achieved through state-of-the-art structural engineering.\nThe AEOS telescope, owned by the U.S. Air Force Research Laboratory, is not like fixed-position telescopes used for astronomy. The finely tuned 150-ton optical instrument is designed to swiftly scan the heavens both horizontally and vertically, locking on to and tracking moving objects such as the space shuttle.\n\nMicro Gaia\nMicro Gaia, Inc. is a microalgal biotechnology company based on the island of Maui specializing in the efficient mass-cultivation of microalgae for the global market.  Using the breakthro",
        tvdb_date: "January 30, 2001"
    },
    {
        tvdb_episode: "S18E21",
        tvdb_title: "High Tech Hawaii: Part 2",
        tvdb_description: "More from the tropical paradise call Hawaii. As congestion, pollution and traffic change the quality of life in most metropolitans, Hawaii can offer an attractive change of pace for those in the hi-tech field looking for a better living environment without sacrificing the hi-tech work.\n\n[Episode #1821, First broadcast: of 2/6/2001]\n\nTrex Enterprises\nTrex Enterprises began operations in Hawaii in 1991 by performing R&D and maintenance at the Maui Space Surveillance Site (MSSS) on Mt. Haleakala on Maui. Since then they have substantially expanded their work in both technical scope and in geographic location. At present they have R&D laboratories and coating facilities on Maui and Kauai at four separate locations. On Maui they develop Active Pixel Image sensors for use in consumer, military, and medical products. On Kauai they're developing advanced materials for the semiconductor and biology industries. In the near future, they anticipate taking the R&D into commercial manufacturing operations in Hawaii, on both Maui and Kauai.\n\nUniversity of Hawaii\nThe University of Hawaii (UH) is a postsecondary education system and comprises three university campuses, seven community college campuses, an employment training center, and five education centers distributed across six island throughout the 50th state. In addition to the flagship campus at of the University of Hawaii at Manoa, the UH system also includes the 3,000-student University of Hawaii at Hilo on the island of Hawaii and the smaller University of Hawaii-West Oahu on the leeward side of Oahu. \nThe UH Community College system has four campuses on Oahu and one each on Maui, Kauai, and Hawaii, making college classes accessible and affordable and easing the transition from high school to college for many students. The education centers are located in the more remote areas of the state, and support the rural communities via distance education.\n\nAdtech Systems\nAdtech, Inc. founded in 1967 is a leading manufa",
        tvdb_date: "February 6, 2001"
    },
    {
        tvdb_episode: "S18E22",
        tvdb_title: "High Tech Hawaii: Part 3",
        tvdb_description: "We'll take you to Kauai to see where the Defense Department is testing the Ballistic Missile Defense Program, formerly known as SDI or STAR WARS. We'll visit one of the world's most powerful supercomputer centers on the island of Maui, and we'll go to the big island to find out why some high tech workers have given up on the mainland, and are now telecommuting from Hawaii.\n\n[Episode #1822, First broadcast: 2/13/2001]\n\nPacific Missile Range Facility\nThe Pacific Missile Range Facility, (PMRF), is the world's largest instrumented multi-environment range capable of supporting surface, subsurface, air, and space operations. A thousand square miles of instrumented underwater range and over 42,000 square miles of controlled airspace make PMRF a premier facility for supporting operations which vary from small, single-unit exercises up to large, multiple-unit battle group scenarios.\n\nThe mission of the Pacific Missile Range Facility is to provide major range services to facilitate training, tactics development, and evaluation for air, surface, and subsurface weapon systems for PACFLT, other DoD agencies, and foreign military forces; and to maintain and operate facilities and provide services and materials to support operations of aviation activities and units of the operating force of the Navy, and other activities and units designated by the Chief of Naval Operations.\n\nTextron Systems\nTextron Systems, a wholly-owned subsidiary of Textron, Inc., is a leading supplier of advanced systems, components, and materials for use in aerospace, defense, telecommunications, and industrial applications, as well as land vehicles and water craft for both military and commercial markets. Headquartered in Wilmington, Massachusetts, USA, the company maintains United States facilities in Massachusetts, Ohio, Louisiana, California and Hawaii as well as facilities in the United Kingdom.\nFounded in 1955, Textron Systems is dedicated to the research, design, development and production",
        tvdb_date: "February 13, 2001"
    },
    {
        tvdb_episode: "S18E23",
        tvdb_title: "High Tech Hawaii: Part 4",
        tvdb_description: "Part 4 of 4 series on the new hi-tech Hawaii. With interviews of leading companies in the Hawaii area.\n\n[Episode #1823, First broadcast: of 2/20/2001]\n\nSquareUSA\n\nSquare USA, Inc. is a subsidiary of Tokyo-based Square Co., Ltd., which is the leading third party developer and publisher of interactive entertainment software in Japan. Square Co., Ltd. became famous for its role-playing games, including its world-renowned Final Fantasy TM, which has sold more than 26 million units to date, and now publishes other titles under the SquareSoft brand spanning all genres.\n\nThe Honolulu Studio of Square USA is breaking new ground with the production of the first computer generated, animated feature film with photo-real human characters, bringing together more than 170 of the world's top creative talents in the computer graphics and feature film production industries. Production is underway at the Diamond Head Film Studio and at Square USA's Honolulu Studio at Harbor Court. Final Fantasy is scheduled for release in 2001 and will be distributed by Columbia Pictures throughout the world except Asia including Japan.\n\nDigital Island.com\nDigital Island has been an extremely successful Internet startup - they built their business here on Oahu, and have become a leading supplier of E-business hosting services and convergence media content.\n\n\"Digital Island's Global e-Business Delivery Network enables the fast, reliable, and relevant Web experiences your customers demand. Whether your business must deliver secure data transmissions, streaming media, frequent updates, or mission-critical applications, Digital Island's integrated services securely deliver your content to the customer, providing a guaranteed, fast, and relevant customer experience, every time.\"\n\nTripler Army Medical Center\n\nThis is E-Health, a telemedicine project which is the brain child of Dr. Donald Person, Chief of Pediatrics at Tripler, and a passionate believer in using the Internet to solve health",
        tvdb_date: "February 20, 2001"
    },
    {
        tvdb_episode: "S18E24",
        tvdb_title: "Creating Your Own Website",
        tvdb_description: "We tell you the tools and the software needed so you can claim your spot on the Internet. From importing pictures to your site to advertising to help pay for your site and tell you all about it.\n\n[Episode #1824, First broadcast: of 2/27/2001]\n\nNorm Meyrowitz\nNorm Meyrowitz is a recognized authority on the evolution of Web development software and media technology for the Internet. Through his experience at Macromedia, Mr. Meyrowitz has overseen the creation of a broad array of multimedia and development software for the Web (Director and Dreamweaver), and drove the introduction of Macromedia Flash and Shockwave, the ubiquitous Internet media players now installed by more than 83% of the Internet population.\nMoonfruit.com \nMoonfruit offers you a free, online toolkit to help you create interactive websites and build vibrant online communities with friends, colleagues, business partners and families. Using the latest Flash technology, your sites will be fun and simple to build, fully customizable, and really full of impact.\n\nMacromedia Flash\nFlash, a popular authoring software developed by Macromedia, is used to create vector graphics-based animation programs with full-screen navigation interfaces, graphic illustrations, and simple interactivity in an anti-aliasing, resizable file format that is small enough to stream across a normal modem connection. The software, currently in version 5.0, is ubiquitous on the Web, both because of its speed (vector-based sites, which can adapt to different display sizes and resolutions, play as they download) and for the smooth way it renders graphics. Flash files, unlike animated but raster graphics Graphics Interchange Format and JPEG, are compact, efficient, and designed for optimized delivery.\n\nAdobe\nAdobe's vision is to help people communicate better. With the help of partner's such as Nokia, Real, HP, and others we have defined the next era of publishing as \"Network Publishing\"... Making visually rich, personalized",
        tvdb_date: "February 27, 2001"
    },
    {
        tvdb_episode: "S18E25",
        tvdb_title: "Consumer Electronics Show (CES) (2001)",
        tvdb_description: "On location coverage of the annual Consumer Electronics Show from Las Vegas. This was the year of Napster and much of the show was about new music download sites that tried to add enough value to lure users into paying. Also covered are new approaches to ecommerce, web radio, and home media networks.",
        tvdb_broadcastyear: "2001",
        ia_identifier: "CC1846CES2001",
        tvdb_date: "March 6, 2001"
    },
    {
        tvdb_episode: "S18E26",
        tvdb_title: "REPEAT [Consumer's Buying Guide (2000)]",
        tvdb_description: "",
        tvdb_date: "March 13, 2001"
    },
    {
        tvdb_episode: "S18E27",
        tvdb_title: "Wireless Technology",
        tvdb_description: "Wireless technology is rapidly evolving, and is playing an increasing role in the lives of people throughout the world. In addition, ever-larger numbers of people are relying on the technology directly or indirectly.\n\n[Episode #1827, First broadcast: 3/20/2001]\n\nPacketVideo \nAt the core of PacketVideo is a team of internationally acknowledged scientists: experts in the field of video telephony and video algorithm development for silicon solutions, and mobile interactive devices like PDAs, laptops, and SmartPhones.\n\nBuilt around the solid engineering core is a dynamic company that develops the enabling software for the encoding, transmission, management and viewing of full-motion video and audio over wireless telecommunications networks.\n\nCreative Strategies\nTim Bajarin is recognized as one of the leading industry consultants, analysts and futurists, covering the field of personal computers and consumer technology.  \n\nMr. Bajarin has been with Creative Strategies since 1981 and has served as a consultant to most of the leading hardware and software vendors in the industry including IBM, Apple, Xerox, Compaq, Dell, AT&T, Microsoft, Polaroid, Lotus, Epson, Toshiba and numerous others. His articles and/or analyses have appeared in USA Today, Wall Street Journal, The New York Times, Time and Newsweek magazine, Businessweek and most of the leading business and trading publications. \n\nBluetooth\nThe Bluetooth technology is set to revolutionize the personal connectivity market by providing freedom from wired connections. It is a specification for a small form-factor, low-cost radio solution providing links between mobile computers, mobile phones and other portable handheld devices and connectivity to the Internet. The Bluetooth Special Interest Group (SIG), consisting of leaders in the telecommunications and computing industries, is driving development of the technology and bringing it to market. The group includes founding members Ericsson, IBM, Intel, Nokia",
        tvdb_date: "March 20, 2001"
    },
    {
        tvdb_episode: "S18E28",
        tvdb_title: "Finding a Job Online",
        tvdb_description: "Even in today's hot job market, finding a new or better job can be a challenge. We're going to explore some of the tools online to help you find that perfect job. Meet of the people involved and some of these tools that help you (and the people looking for you) make that perfect match.\n\n[Episode #1828, First broadcast: 3/27/2001]\n\nHotJobs.com\nHotJobs is a leading recruiting solutions company that develops and provides companies with innovative hiring products and services. As a pioneer in Internet recruiting, HotJobs has emerged as a leader in the space by strategically leveraging the tremendous capabilities of Internet technology to solve many of the issues associated with traditional recruiting. \n\nThe company's comprehensive suite of services includes its Resumix® and Softshoe® hiring management software; Strategic Consulting Services; HotJobs Career Expos; HotMedia, HotJobs.com's advertising solutions; and AgencyExchange, a marketplace which provides a direct, business-to-business exchange between corporate hiring managers and staffing agencies.\n\nGuru.com\nGuru Inc. is the world's most powerful Independent Professional talent resource. The company offers two core services, Guru.com and the Guru Talent Agency.\n\nGuru.com is the leading online marketplace connecting freelancers and consultants with contract projects from companies who source their contingent talent on the Web. Ranked the top online project marketplace by sources including PC Magazine, Yahoo! Internet Life, Forbes.com, PC Data, and Media Metrix, Guru.com has over 500,000 registered users. Through Guru Talent Agency, Guru pre-screens and represents top-flight IT, Creative and Business consultants, and places them into projects with companies who need full-service talent placement.\n\nCisco eCruiting\nShanil Kaderali is the Global eCruiting Manager for Cisco Systems, He is the sourcing architect for Cisco's global sourcing strategies and manages eCruiting teams which build pipeline for Cis",
        tvdb_date: "March 27, 2001"
    },
    {
        tvdb_episode: "S18E29",
        tvdb_title: "Security and Viruses",
        tvdb_description: "Just the thought of a possible computer virus is enough to chill any computer user.  Meet the people at the front lines in the war against the malicious computer virus.\n\n[Episode #1829, First broadcast: 4/3/2001]\n\nClicktoSecure\nClickToSecure, Inc was founded to provide versatile, extensible products that help ensure tolerance, visibility, resiliency and security within an application, server, network or enterprise. The company, which was founded in 2000, currently is shipping its first product, Hailstorm , a proactive scanning device that tests not only for security holes, but also to see how “tolerant” your network/ application is (PSS). \n\nHailstorm eliminates the pain of bug-tracking and vulnerability databases. It allows the user to locate vulnerabilities that have never been publicly reported or discovered. As a result Hailstorms puts the enterprise user in a position of power with regards to potential attackers or even IT vendors. \n\nZero-Knowledge\nZero-Knowledge Systems provides the tools and strategies that protect personal privacy while enabling industry to build consumer trust in our digital society. In a networked world that was not engineered to support personal privacy, Zero-Knowledge is laying the technological foundations for privacy-enhanced communications and commerce between individuals and the companies, governments and organizations they interact with. \n\nZero-Knowledge integrates advanced mathematics, cryptography and source code into its products and services -- the only way to ensure privacy and security.\n\nFinjan Software\nFinjan Software delivers proactive security solutions that protect companies from first-strike attacks by malicious code and active content, allowing companies to conduct e-business safely. Finjan's First-Strike Security products represent a new way to combat Trojan horses, worms, malicious Active X, Java, VB Script and JavaScript programs, using real-time behavior-monitoring technology that does not require d",
        tvdb_date: "April 3, 2001"
    },
    {
        tvdb_episode: "S18E30",
        tvdb_title: "REPEAT [MP3 Secrets]",
        tvdb_description: "We will show you the basics of how to find MP3's on the net, to portable mp3 players and how to burn your own music CDs.\n\n[Episode #1830, First broadcast: 4/10/2001]\n\nIf you're into downloading mp3 files you're facing storage issues where to put it all of the stuff. Now there's a really slick and relatively inexpensive new solution from hard drive maker Maxtor.\n\nMP3.com\nMP3.com is the premier Music Service Provider (MSP) allowing consumers to instantly discover, purchase, listen to, store and organize their music collection from anywhere, at any time, using any Internet device.  MP3.com offers more than a half-million high-quality songs from 100,000-plus artists available for FREE downloading over the Internet.\n\nEasy CD Creator pro\nEliot Van Buskirk of c|net shows us how to use Easy CD Creator 4 to create both audio cds and data mp3 cds.  Adaptec's Easy CD Creator 4 Deluxe gives you all the tools you need--and more--to create all sorts of data and music CDs.\n\nPortable mp3 players\nLarry Magid of the LA Times will review some of the newest mp3 players on the market today.\n\nRio 600 - Capture and playback digital-quality music from the Internet or your CDs. Seize your audio, master your mix, retool your memory, even select your faceplate color.  The Rio 600 offers 64MB of memory, interchangable color faceplates, and supports mp3 and Windows Media audio formats.\n\nIomega HipZip -  This portable device gives you skip-free, CD-quality sound  in a cool, compact design. The HipZip also doubles as a PocketZip storage device, so you can download and  transport spreadsheets, images and more.  The HipZip offers Universal music file format which allows for support of both free and copyright protected content and supports MP3 and the new Microsoft® Windows Media audio formats.  It also has a high quality equalizer control system that enhances audio quality.\n\nRave: mp2200 -   Its 64MB of storage on board combined with SmartMedia card slot allows unlimited expansi",
        tvdb_date: "April 10, 2001"
    },
    {
        tvdb_episode: "S18E31",
        tvdb_title: "REPEAT [ETRE Conference Prague (2000): Part 1]",
        tvdb_description: "On October 11-14, 2000, the European Technology Roundtable Exhibition (ETRE) welcomed over 800 CEOs from 40 countries to Europe's most exclusive IT conference. Join us for part one of this exciting event.\n\n[Episode #1831, First broadcast: 4/17/2001]",
        tvdb_date: "April 27, 2001"
    },
    {
        tvdb_episode: "S18E32",
        tvdb_title: "REPEAT [ETRE Conference Prague (2000): Part 2]",
        tvdb_description: "We continue our coverage of ETRE 2000 in part two. In its 11th year, this executive level event has been instrumental in gathering a coterie of some of the brightest CEOs from companies of all sizes and sectors under one roof to share the latest technology information.\n\n[Episode #1832, First broadcast: 4/24/2001]",
        tvdb_date: "April 24, 2001"
    },
    {
        tvdb_episode: "S18E33",
        tvdb_title: "Online Universities",
        tvdb_description: "More and more people are turning to the Internet to help further their education. We'll be bringing you highlights from some of these great online educational websites and meet some of the people involved.\n\n[Episode #1833, First broadcast: of 5/1/2001]\n\nUniversity of Phoenix Online\nThe nation's largest accredited private university, with an unsurpassed reputation for educational excellence and student service. One can earn one of the most current and relevant degrees offered in the areas of Business, Management, Technology Management, Information Systems, Education and Nursing. Finish a degree in as little as two to three years.\n\nSmartForce\nSmartForce, formerly CBT Systems, is leading the professional education market into the Internet Age through e-Learning, a fundamentally faster and better way to learn. Changing the company name to SmartForce is a dramatic step that demonstrates the commitment to helping companies create a competitive advantage through a smarter workforce, a \"smart force\" that thrives in the Internet Age.\n\nWeb CT\nWebCT is the world's leading provider of integrated e-learning systems. Over 148,000 faculty members at more than 1,700 colleges and universities are using WebCT's products and services to transform the educational experience for more than 5.8 million students. The company's mission is to be the preferred partner of institutions that are creating total e-learning solutions, from getting started to scaling campus-wide. WebCT is available in 10 major world languages and a quarter of the company's installed base is located in more than 60 countries outside of North America.\n\nBigchalk.com\nBigchalk.com provides a broad spectrum of educational Internet services to teachers, students, parents, librarians and school administrators in the K-12 educational and public library markets. bigchalk.com currently offers the following services:\n\nbigchalk.com National Community Website\nNational Community Web site, serves as a jumping off-p",
        tvdb_date: "May 1, 2001"
    },
    {
        tvdb_episode: "S18E34",
        tvdb_title: "Guide to Online Auctions",
        tvdb_description: "Buying online has always proven to be a great money saver. Now with online auctions, you can find the best deal on the net and pay the price you want. If you want to get rid of some old junk in storage, or make some extra cash, selling online can be just as lucrative.\n\n[Episode #1834, First broadcast: of 5/8/2001]",
        ia_identifier: "GuidetoO2001",
        tvdb_date: "May 8, 2001"
    },
    {
        tvdb_episode: "S18E35",
        tvdb_title: "REPEAT [ETRE Conference Prague (2000): Part 3]",
        tvdb_description: "We wrap up ETRE 2000 in part three. We're looking at wireless and how it will affect the Internet. We'll cover everything from getting the data to your PDA or cell phone, to who's making sure the information is safe.\n\n[Episode #1835, First broadcast: 5/15/2001]",
        ia_identifier: "CC1815ETRE2000THREE",
        tvdb_date: "May 15, 2001"
    },
    {
        tvdb_episode: "S18E36",
        tvdb_title: "REPEAT [Online Gaming]",
        tvdb_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles.\n\nSega Dreamcast\nChristian Svensson, Editor in Chief for MCV, a strategy guide for PC and video game retailers, demonstrates the Sega Dreamcast. The Dreamcast is a video game console that's Internet-ready with a 56k modem, 19 initial games, and optional keyboard.\n\nBaldur's Gate\nEvery year has it's hot new computer game, the must-have title for your PC. This year's runaway hit is Baldur's Gate from Interplay. Chris Parker demonstrates this current Dungeons & Dragons type game that has gotten just about everybody's vote for best role playing game of the year.\n\nRyan MacDonald\nRyan MacDonald, writer for Gamespot.com and Videogames.com, demonstrates three soon to be released hot games: Resident Evil 3 Nemesis for Sony PlayStation, WCW Mayhem and Rainbow Six for Nintendo 64.\n\nReality Fusion\nChad Kinzelberg CEO of Reality Fusion, demonstrates the GameCam. The GameCam itself is a Quick Cam from Logitech; Reality Fusion makes interactive gaming technology (called FreeAction) which lets you see yourself on the monitor as you interact with PC-generated opponents and objects like basketballs or volleyballs.\n\n[Episode #1836, First broadcast: 5/22/2001]",
        tvdb_date: "May 22, 2001"
    },
    {
        tvdb_episode: "S18E37",
        tvdb_title: "REPEAT [Privacy Online]",
        tvdb_description: "This week we're going to help you preserve your privacy in the wired world.  We cover the topic of \"cookies\" and we look at ways to browse the Web anonymously.  We even look at proper conduct in a chatroom.\n\n[Episode #1837, First broadcast: 5/29/2001]\n\nElectronic Frontier Foundation\nEFF is a non-profit, non-partisan organization working in the public interest to protect fundamental civil liberties, including privacy and freedom of expression in the arena of computers and the Internet. EFF was founded in 1990, and is based in San Francisco, California, with a satellite office in Washington, DC. \n\nDebra Pierce goes through the process of controlling cookies on your web browser. She explains how to find out who's trying to track you and your viewing habits. Debra also explains the importance of the privacy policy on a web site and what does having this information online can really mean to you.\n\nTRUSTe\nTRUSTe was launched to provide a mechanism by which Web sites could alleviate consumer concerns about privacy online. The core of this initiative was the TRUSTe Privacy Seal, a visual symbol that could be displayed by Web sites that met the program’s requirements for data gathering and dissemination practices, and agreed to participate in its dispute resolution process. \n\nTRUSTe’s goal was to establish a seal that would send a clear signal to consumers that they could expect companies to adhere to certain requirements about the way Web sites handled data, and that an independent, third-party would hear and respond to their complaints and resolve their disputes. The backbone of the TRUSTe program is the contract that is signed between TRUSTe and the Web site. This contract gives TRUSTe the ability to address users’ privacy concerns regardless of their citizenship or the location of the TRUSTe licensee.\n\nPrivada\nPrivada provides, through disassociation and compartmentalization, a unique privacy solution that allows each individual to decide how much pe",
        tvdb_date: "May 29, 2001"
    },
    {
        tvdb_episode: "S18E38",
        tvdb_title: "Ultimate Gaming PC",
        tvdb_description: "It's a great time to be a gamer.  As new hardware and games continue to dominate the market, gamers now have more choices when it comes to using the PC for more than just work.  This week we'll look at new hardware and games for your PC. \n\n[Episode #1838, First broadcast: of 6/5/2001]\n\nNVidia\nNVIDIA is the worldwide leader in graphics processors and media communications devices. The unmatched breadth of NVIDIA's product line enriches 3D, 2D, video, audio, communications, broadband connectivity and high-definition digital video and television for every audience and price point -- from workstations to internet-enabled appliances to mobile PCs.\n\nPhilips Magnavox \nThe Philips Acoustic Edge is first sound card that transforms every game into a movie theatre experience by transforming ordinary stereo output of games into 5.1 theatre sound. 5.1 is the type of sound you normally only get from a movie theatre or home \ntheatre system equipped with a technology like Dolby Digital or DTS. 5..1 refers to the 5 distinctly different channels of surround sound (front left, front center, front right, rear left, rear right speakers) plus the .1 channel or \"LFE\" that provides special low frequency effects (rumbling, explosions, etc).\n\nIntel Pentium 4\nIntel Pentium 4 processor at 1.7 GHz, the company's highest performance microprocessor for desktop computers. Computer makers worldwide will be launching systems based on this new Intel microprocessor, which is available immediately.\n\nAs the Pentium 4 processor ramps into high volume, computer makers are providing a range of system choices and price points. For consumers, the Pentium 4 processor delivers high performance for processing video and audio, exploiting the latest Internet technologies, and displaying 3-D graphics. As they connect entertainment and productivity devices, users get even more value from their high-performance Pentium 4 processor-based systems. For business users, the Pentium 4 processor provides the p",
        tvdb_date: "June 5, 2001"
    },
    {
        tvdb_episode: "S18E39",
        tvdb_title: "Interactive TV",
        tvdb_description: "Think the only way to get online is with a PC?  Think again!  This week, we see all the newest ways to surf the web on your television set.  Web access is just the beginning.  These new set-top boxes will do everything from record multiple shows to pausing live TV.  This is one episode you don't want to miss!\n\n[Episode #1839, First broadcast: of 6/12/2001]\n\nLiberate\nFounded in April, 1996, Liberate (Nasdaq: LBRT) is a leading provider of a comprehensive software platform for delivering enhanced Internet content, services and applications to information appliances, such as television set-top boxes, game consoles, smart phones and personal digital assistants.\n\nLiberate's VP of Marketing, Charlie Tritschler, will be demonstrating the new AOLTV.\n\nMicrosoft UltimateTV \nIn 1997, Microsoft Corporation acquired WebTV Networks, Inc. and now WebTV Networks operates as a subsidiary of Microsoft. WebTV Networks drives Microsoft's efforts in the television arena, with the goal being to continue expanding the traditional role of television. \nBringing the Internet to television was just the beginning for WebTV Networks. With advancements in technology, WebTV Networks is leading the way toward the convergence of entertainment and information.\n\nQPass\nThe global leader in digital commerce services, Qpass provides the commerce infrastructure for next-generation transactions across the Internet, broadband and mobile networks and devices. Integrating its flagship Digital Commerce Service, a cross-site transactional solution for the sale of content and services via IP networks, with its industry-leading electronic wallet technology, the Qpass Connected Commerce Platform enables the sale of content, goods and services across a full range of networks and devices - including personal computers, wireless phones, PDAs and interactive television - by providing persistent, portable payment credentials, a consistent purchase experience and universal account management capabilities.",
        tvdb_date: "June 12, 2001"
    },
    {
        tvdb_episode: "S18E40",
        tvdb_title: "REPEAT [Creating your own Website]",
        tvdb_description: "We tell you the tools and the software needed so you can claim your spot on the Internet. From importing pictures to your site to advertising to help pay for your site and tell you all about it.\n\n[Episode #1840, First broadcast: 6/19/2001]\n\nNorm Meyrowitz\nNorm Meyrowitz is a recognized authority on the evolution of Web development software and media technology for the Internet. Through his experience at Macromedia, Mr. Meyrowitz has overseen the creation of a broad array of multimedia and development software for the Web (Director and Dreamweaver), and drove the introduction of Macromedia Flash and Shockwave, the ubiquitous Internet media players now installed by more than 83% of the Internet population.\n\nMoonfruit.com \nMoonfruit offers you a free, online toolkit to help you create interactive websites and build vibrant online communities with friends, colleagues, business partners and families. Using the latest Flash technology, your sites will be fun and simple to build, fully customizable, and really full of impact.\n\nMacromedia Flash\nFlash, a popular authoring software developed by Macromedia, is used to create vector graphics-based animation programs with full-screen navigation interfaces, graphic illustrations, and simple interactivity in an anti-aliasing, resizable file format that is small enough to stream across a normal modem connection. The software, currently in version 5.0, is ubiquitous on the Web, both because of its speed (vector-based sites, which can adapt to different display sizes and resolutions, play as they download) and for the smooth way it renders graphics. Flash files, unlike animated but raster graphics Graphics Interchange Format and JPEG, are compact, efficient, and designed for optimized delivery.\n\nAdobe\nAdobe's vision is to help people communicate better. With the help of partner's such as Nokia, Real, HP, and others we have defined the next era of publishing as \"Network Publishing\"... Making visually rich, personalized c",
        tvdb_date: "June 19, 2001"
    },
    {
        tvdb_episode: "S18E41",
        tvdb_title: "REPEAT [Wireless Technology]",
        tvdb_description: "Wireless technology is rapidly evolving, and is playing an increasing role in the lives of people throughout the world. In addition, ever-larger numbers of people are relying on the technology directly or indirectly.\n\n[Episode #1841, First broadcast: 6/26/2001]\n\nPacketVideo \nAt the core of PacketVideo is a team of internationally acknowledged scientists: experts in the field of video telephony and video algorithm development for silicon solutions, and mobile interactive devices like PDAs, laptops, and SmartPhones.\n\nBuilt around the solid engineering core is a dynamic company that develops the enabling software for the encoding, transmission, management and viewing of full-motion video and audio over wireless telecommunications networks.\n\nCreative Strategies\nTim Bajarin is recognized as one of the leading industry consultants, analysts and futurists, covering the field of personal computers and consumer technology.  \n\nMr. Bajarin has been with Creative Strategies since 1981 and has served as a consultant to most of the leading hardware and software vendors in the industry including IBM, Apple, Xerox, Compaq, Dell, AT&T, Microsoft, Polaroid, Lotus, Epson, Toshiba and numerous others. His articles and/or analyses have appeared in USA Today, Wall Street Journal, The New York Times, Time and Newsweek magazine, Businessweek and most of the leading business and trading publications. \n\nBluetooth\nThe Bluetooth technology is set to revolutionize the personal connectivity market by providing freedom from wired connections. It is a specification for a small form-factor, low-cost radio solution providing links between mobile computers, mobile phones and other portable handheld devices and connectivity to the Internet. The Bluetooth Special Interest Group (SIG), consisting of leaders in the telecommunications and computing industries, is driving development of the technology and bringing it to market. The group includes founding members Ericsson, IBM, Intel, Nokia",
        tvdb_date: "June 26, 2001"
    },
    {
        tvdb_episode: "S18E42",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 1]",
        tvdb_description: "When you think of Hawaii you think of sun and relaxation.  There's a lot more to Hawaii today than just agriculture and tourism.  Hawaii has gone hi-tech and we're going to show you some of the companies that are making Hawaii one of the fastest growing hi-tech hubs in the country.  Join us for part one of our look into Hawaii's hi-tech world.\n\n[Episode #1842, First broadcast: 7/3/2001]\n\nTrex Enterprises\nTrex Enterprises began operations in Hawaii in 1991 by performing R&D and maintenance at the Maui Space Surveillance Site (MSSS) on Mt. Haleakala on Maui. Since then they have substantially expanded their work in both technical scope and in geographic location.\n\nAt present they have R&D laboratories and coating facilities on Maui and Kauai at four separate locations. On Maui they develop Active Pixel Image sensors for use in consumer, military, and medical products. On Kauai they're developing advanced materials for the semiconductor and biology industries. In the near future, they anticipate taking the R&D into commercial manufacturing operations in Hawaii, on both Maui and Kauai.\n\nAEOS Telescope\nThe Advanced Electro Optical System (AEOS) facility on the Hawaiian island of Maui can pinpoint anything from high-flying aircraft to satellites orbiting earth hundreds of miles up. But this giant 3.67-meter azimuth-elevation telescope couldn't do its job without some high-tech ground anchoring achieved through state-of-the-art structural engineering.\nThe AEOS telescope, owned by the U.S. Air Force Research Laboratory, is not like fixed-position telescopes used for astronomy. The finely tuned 150-ton optical instrument is designed to swiftly scan the heavens both horizontally and vertically, locking on to and tracking moving objects such as the space shuttle.\n\nMicro Gaia\nMicro Gaia, Inc. is a microalgal biotechnology company based on the island of Maui specializing in the efficient mass-cultivation of microalgae for the global market.  Using the breakthrough",
        tvdb_date: "July 3, 2001"
    },
    {
        tvdb_episode: "S18E43",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 2]",
        tvdb_description: "More from the tropical paradise call Hawaii. As congestion, pollution and traffic change the quality of life in most metropolitans, Hawaii can offer an attractive change of pace for those in the hi-tech field looking for a better living environment without sacrificing the hi-tech work.\n\n[Episode #1843, First broadcast: 7/10/2001]\n\nTrex Enterprises\nTrex Enterprises began operations in Hawaii in 1991 by performing R&D and maintenance at the Maui Space Surveillance Site (MSSS) on Mt. Haleakala on Maui. Since then they have substantially expanded their work in both technical scope and in geographic location. At present they have R&D laboratories and coating facilities on Maui and Kauai at four separate locations. On Maui they develop Active Pixel Image sensors for use in consumer, military, and medical products. On Kauai they're developing advanced materials for the semiconductor and biology industries. In the near future, they anticipate taking the R&D into commercial manufacturing operations in Hawaii, on both Maui and Kauai.\n\nUniversity of Hawaii\nThe University of Hawaii (UH) is a postsecondary education system and comprises three university campuses, seven community college campuses, an employment training center, and five education centers distributed across six island throughout the 50th state. In addition to the flagship campus at of the University of Hawaii at Manoa, the UH system also includes the 3,000-student University of Hawaii at Hilo on the island of Hawaii and the smaller University of Hawaii-West Oahu on the leeward side of Oahu. \nThe UH Community College system has four campuses on Oahu and one each on Maui, Kauai, and Hawaii, making college classes accessible and affordable and easing the transition from high school to college for many students. The education centers are located in the more remote areas of the state, and support the rural communities via distance education.\n\nAdtech Systems\nAdtech, Inc. founded in 1967 is a leading manufact",
        tvdb_date: "July 10, 2001"
    },
    {
        tvdb_episode: "S18E44",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 3]",
        tvdb_description: "We'll take you to Kauai to see where the Defense Department is testing the Ballistic Missile Defense Program, formerly known as SDI or STAR WARS. We'll visit one of the world's most powerful supercomputer centers on the island of Maui, and we'll go to the big island to find out why some high tech workers have given up on the mainland, and are now telecommuting from Hawaii.\n\n[Episode #1844, First broadcast: 7/17/2001]\n\nPacific Missile Range Facility\nThe Pacific Missile Range Facility, (PMRF), is the world's largest instrumented multi-environment range capable of supporting surface, subsurface, air, and space operations. A thousand square miles of instrumented underwater range and over 42,000 square miles of controlled airspace make PMRF a premier facility for supporting operations which vary from small, single-unit exercises up to large, multiple-unit battle group scenarios.\n\nThe mission of the Pacific Missile Range Facility is to provide major range services to facilitate training, tactics development, and evaluation for air, surface, and subsurface weapon systems for PACFLT, other DoD agencies, and foreign military forces; and to maintain and operate facilities and provide services and materials to support operations of aviation activities and units of the operating force of the Navy, and other activities and units designated by the Chief of Naval Operations.\n\nTextron Systems\nTextron Systems, a wholly-owned subsidiary of Textron, Inc., is a leading supplier of advanced systems, components, and materials for use in aerospace, defense, telecommunications, and industrial applications, as well as land vehicles and water craft for both military and commercial markets. Headquartered in Wilmington, Massachusetts, USA, the company maintains United States facilities in Massachusetts, Ohio, Louisiana, California and Hawaii as well as facilities in the United Kingdom.\nFounded in 1955, Textron Systems is dedicated to the research, design, development and production",
        tvdb_date: "July 17, 2001"
    },
    {
        tvdb_episode: "S18E45",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 4]",
        tvdb_description: "Part 4 of 4 series on the new hi-tech Hawaii. With interviews of leading companies in the Hawaii area.\n\n[Episode #1845, First broadcast: 7/24/2001]\n\nSquareUSA\n\nSquare USA, Inc. is a subsidiary of Tokyo-based Square Co., Ltd., which is the leading third party developer and publisher of interactive entertainment software in Japan. Square Co., Ltd. became famous for its role-playing games, including its world-renowned Final Fantasy TM, which has sold more than 26 million units to date, and now publishes other titles under the SquareSoft brand spanning all genres.\n\nThe Honolulu Studio of Square USA is breaking new ground with the production of the first computer generated, animated feature film with photo-real human characters, bringing together more than 170 of the world's top creative talents in the computer graphics and feature film production industries. Production is underway at the Diamond Head Film Studio and at Square USA's Honolulu Studio at Harbor Court. Final Fantasy is scheduled for release in 2001 and will be distributed by Columbia Pictures throughout the world except Asia including Japan.\n\nDigital Island.com\nDigital Island has been an extremely successful Internet startup - they built their business here on Oahu, and have become a leading supplier of E-business hosting services and convergence media content.\n\n\"Digital Island's Global e-Business Delivery Network enables the fast, reliable, and relevant Web experiences your customers demand. Whether your business must deliver secure data transmissions, streaming media, frequent updates, or mission-critical applications, Digital Island's integrated services securely deliver your content to the customer, providing a guaranteed, fast, and relevant customer experience, every time.\"\n\nTripler Army Medical Center\n\nThis is E-Health, a telemedicine project which is the brain child of Dr. Donald Person, Chief of Pediatrics at Tripler, and a passionate believer in using the Internet to solve health ca",
        tvdb_date: "July 24, 2001"
    },
    {
        tvdb_episode: "S18E46",
        tvdb_title: "REPEAT [Consumer Electronics Show (CES) (2001)]",
        tvdb_description: "On location coverage of the annual Consumer Electronics Show from Las Vegas. This was the year of Napster and much of the show was about new music download sites that tried to add enough value to lure users into paying. Also covered are new approaches to ecommerce, web radio, and home media networks.",
        tvdb_copyright: "2001",
        tvdb_broadcastyear: "2001",
        ia_identifier: "CC1846CES2001",
        tvdb_date: "July 31, 2001"
    },
    {
        tvdb_episode: "S18E47",
        tvdb_title: "REPEAT [Finding a Job Online]",
        tvdb_description: "Even in today's hot job market, finding a new or better job can be a challenge. We're going to explore some of the tools online to help you find that perfect job. Meet of the people involved and some of these tools that help you (and the people looking for you) make that perfect match.\n\n[Episode #1828, First broadcast: 3/27/2001]\n\nHotJobs.com\nHotJobs is a leading recruiting solutions company that develops and provides companies with innovative hiring products and services. As a pioneer in Internet recruiting, HotJobs has emerged as a leader in the space by strategically leveraging the tremendous capabilities of Internet technology to solve many of the issues associated with traditional recruiting. \n\nThe company's comprehensive suite of services includes its Resumix® and Softshoe® hiring management software; Strategic Consulting Services; HotJobs Career Expos; HotMedia, HotJobs.com's advertising solutions; and AgencyExchange, a marketplace which provides a direct, business-to-business exchange between corporate hiring managers and staffing agencies.\n\nGuru.com\nGuru Inc. is the world's most powerful Independent Professional talent resource. The company offers two core services, Guru.com and the Guru Talent Agency.\n\nGuru.com is the leading online marketplace connecting freelancers and consultants with contract projects from companies who source their contingent talent on the Web. Ranked the top online project marketplace by sources including PC Magazine, Yahoo! Internet Life, Forbes.com, PC Data, and Media Metrix, Guru.com has over 500,000 registered users. Through Guru Talent Agency, Guru pre-screens and represents top-flight IT, Creative and Business consultants, and places them into projects with companies who need full-service talent placement.\n\nCisco eCruiting\nShanil Kaderali is the Global eCruiting Manager for Cisco Systems, He is the sourcing architect for Cisco's global sourcing strategies and manages eCruiting teams which build pipeline for Cis",
        tvdb_date: "August 7, 2001"
    },
    {
        tvdb_episode: "S18E48",
        tvdb_title: "REPEAT [Security and Viruses]",
        tvdb_description: "Just the thought of a possible computer virus is enough to chill any computer user.  Meet the people at the front lines in the war against the malicious computer virus.\n\n[Episode #1848, First broadcast: 8/14/2001]\n\nClicktoSecure\nClickToSecure, Inc was founded to provide versatile, extensible products that help ensure tolerance, visibility, resiliency and security within an application, server, network or enterprise. The company, which was founded in 2000, currently is shipping its first product, Hailstorm , a proactive scanning device that tests not only for security holes, but also to see how “tolerant” your network/ application is (PSS). \n\nHailstorm eliminates the pain of bug-tracking and vulnerability databases. It allows the user to locate vulnerabilities that have never been publicly reported or discovered. As a result Hailstorms puts the enterprise user in a position of power with regards to potential attackers or even IT vendors. \n\nZero-Knowledge\nZero-Knowledge Systems provides the tools and strategies that protect personal privacy while enabling industry to build consumer trust in our digital society. In a networked world that was not engineered to support personal privacy, Zero-Knowledge is laying the technological foundations for privacy-enhanced communications and commerce between individuals and the companies, governments and organizations they interact with. \n\nZero-Knowledge integrates advanced mathematics, cryptography and source code into its products and services -- the only way to ensure privacy and security.\n\nFinjan Software\nFinjan Software delivers proactive security solutions that protect companies from first-strike attacks by malicious code and active content, allowing companies to conduct e-business safely. Finjan's First-Strike Security products represent a new way to combat Trojan horses, worms, malicious Active X, Java, VB Script and JavaScript programs, using real-time behavior-monitoring technology that does not require",
        tvdb_date: "August 14, 2001"
    },
    {
        tvdb_episode: "S18E49",
        tvdb_title: "REPEAT [Online Universities]",
        tvdb_description: "More and more people are turning to the Internet to help further their education. We'll be bringing you highlights from some of these great online educational websites and meet some of the people involved.\n\n[Episode #1833, First broadcast: of 5/1/2001]\n\nUniversity of Phoenix Online\nThe nation's largest accredited private university, with an unsurpassed reputation for educational excellence and student service. One can earn one of the most current and relevant degrees offered in the areas of Business, Management, Technology Management, Information Systems, Education and Nursing. Finish a degree in as little as two to three years.\n\nSmartForce\nSmartForce, formerly CBT Systems, is leading the professional education market into the Internet Age through e-Learning, a fundamentally faster and better way to learn. Changing the company name to SmartForce is a dramatic step that demonstrates the commitment to helping companies create a competitive advantage through a smarter workforce, a \"smart force\" that thrives in the Internet Age.\n\nWeb CT\nWebCT is the world's leading provider of integrated e-learning systems. Over 148,000 faculty members at more than 1,700 colleges and universities are using WebCT's products and services to transform the educational experience for more than 5.8 million students. The company's mission is to be the preferred partner of institutions that are creating total e-learning solutions, from getting started to scaling campus-wide. WebCT is available in 10 major world languages and a quarter of the company's installed base is located in more than 60 countries outside of North America.\n\nBigchalk.com\nBigchalk.com provides a broad spectrum of educational Internet services to teachers, students, parents, librarians and school administrators in the K-12 educational and public library markets. bigchalk.com currently offers the following services:\n\nbigchalk.com National Community Website\nNational Community Web site, serves as a jumping off-p",
        tvdb_date: "August 21, 2001"
    },
    {
        tvdb_episode: "S18E50",
        tvdb_title: "REPEAT [Guide to Online Auctions]",
        tvdb_description: "Buying online has always proven to be a great money saver. Now with online auctions, you can find the best deal on the net and pay the price you want. If you want to get rid of some old junk in storage, or make some extra cash, selling online can be just as lucrative.\n\n[Episode #1850, First broadcast: 8/28/2001]\n\nAuctionWatch.com\nAuctionWatch.com has developed an e-commerce platform that enables businesses of all sizes, both large and small, to benefit from dynamic pricing environments in addition to typical fixed price channels. AuctionWatch.com's services provide businesses with the tools necessary to efficiently distribute merchandise and acquire customers, while providing a convenient service for customers to locate and purchase these products. AuctionWatch.com's powerful suite of services is centered on three main areas: Seller Services, Buyer Services, and Fulfillment Solutions.\n\neSnipe.com\neSnipe serves one primary purpose for power buyers on eBay: it places bids for them during the last few seconds of the auction, a practice known as \"sniping\" in the online auction world. eSnipe reduces bidding wars by masking interest in auction items until the last possible moment. Because auctions on eBay take three to 10 days to close, emotional overbidding can start soon after the auction opens and last until the auction closes, instead of mere minutes as is the case in traditional offline or \"outcry\" auctions.\n\nStrong Numbers\nThe Strong Numbers Blue Book provides instant fair market pricing information based on actual online transactions so consumers can determine what a product is worth before they buy or sell. The detailed Blue Book content is licensed to portals, e-commerce sites and auction sites, so their users can find specific products online instantly along with relevant product and pricing information.\nCurrently, Strong Numbers has more than 100 partners including Excite@Home, Ask Jeeves, Lycos, and Consumer Review, as well as Fortune 500 beta part",
        tvdb_date: "August 28, 2001"
    },
    {
        tvdb_episode: "S18E51",
        tvdb_title: "REPEAT [Ultimate Gaming PC]",
        tvdb_description: "It's a great time to be a gamer.  As new hardware and games continue to dominate the market, gamers now have more choices when it comes to using the PC for more than just work.  This week we'll look at new hardware and games for your PC. \n\n[Episode #1851, First broadcast: 9/4/2001]\n\nNVidia\nNVIDIA is the worldwide leader in graphics processors and media communications devices. The unmatched breadth of NVIDIA's product line enriches 3D, 2D, video, audio, communications, broadband connectivity and high-definition digital video and television for every audience and price point -- from workstations to internet-enabled appliances to mobile PCs.\n\nPhilips Magnavox \nThe Philips Acoustic Edge is first sound card that transforms every game into a movie theatre experience by transforming ordinary stereo output of games into 5.1 theatre sound. 5.1 is the type of sound you normally only get from a movie theatre or home \ntheatre system equipped with a technology like Dolby Digital or DTS. 5..1 refers to the 5 distinctly different channels of surround sound (front left, front center, front right, rear left, rear right speakers) plus the .1 channel or \"LFE\" that provides special low frequency effects (rumbling, explosions, etc).\n\nIntel Pentium 4\nIntel Pentium 4 processor at 1.7 GHz, the company's highest performance microprocessor for desktop computers. Computer makers worldwide will be launching systems based on this new Intel microprocessor, which is available immediately.\n\nAs the Pentium 4 processor ramps into high volume, computer makers are providing a range of system choices and price points. For consumers, the Pentium 4 processor delivers high performance for processing video and audio, exploiting the latest Internet technologies, and displaying 3-D graphics. As they connect entertainment and productivity devices, users get even more value from their high-performance Pentium 4 processor-based systems. For business users, the Pentium 4 processor provides the perf",
        tvdb_date: "September 4, 2001"
    },
    {
        tvdb_episode: "S18E52",
        tvdb_title: "REPEAT [Interactive TV]",
        tvdb_description: "Think the only way to get online is with a PC?  Think again!  This week, we see all the newest ways to surf the web on your television set.  Web access is just the beginning.  These new set-top boxes will do everything from record multiple shows to pausing live TV.  This is one episode you don't want to miss!\n\n[Episode #1852, First broadcast: 9/11/2001]\n\nLiberate\nFounded in April, 1996, Liberate (Nasdaq: LBRT) is a leading provider of a comprehensive software platform for delivering enhanced Internet content, services and applications to information appliances, such as television set-top boxes, game consoles, smart phones and personal digital assistants.\n\nLiberate's VP of Marketing, Charlie Tritschler, will be demonstrating the new AOLTV.\n\nMicrosoft UltimateTV \nIn 1997, Microsoft Corporation acquired WebTV Networks, Inc. and now WebTV Networks operates as a subsidiary of Microsoft. WebTV Networks drives Microsoft's efforts in the television arena, with the goal being to continue expanding the traditional role of television. \nBringing the Internet to television was just the beginning for WebTV Networks. With advancements in technology, WebTV Networks is leading the way toward the convergence of entertainment and information.\n\nQPass\nThe global leader in digital commerce services, Qpass provides the commerce infrastructure for next-generation transactions across the Internet, broadband and mobile networks and devices. Integrating its flagship Digital Commerce Service, a cross-site transactional solution for the sale of content and services via IP networks, with its industry-leading electronic wallet technology, the Qpass Connected Commerce Platform enables the sale of content, goods and services across a full range of networks and devices - including personal computers, wireless phones, PDAs and interactive television - by providing persistent, portable payment credentials, a consistent purchase experience and universal account management capabilities.",
        tvdb_date: "September 11, 2001"
    },
    {
        tvdb_episode: "S19E01",
        tvdb_title: "Technology and the Church: Part 1",
        tvdb_description: "This week starts a special three-part series on technology and the church; we’re showing you the hardware, software and Internet solutions that are particularly appropriate for churches, synagogues, mosques and other community organizations.\n\nCCN Special Part One [Episode #1901, First broadcast: 9/18/2001]\n\nThis week starts a special three-part series on technology and the church; we’re showing you the hardware, software and Internet solutions that are particularly appropriate for churches, synagogues, mosques and other community organizations.\n\nWe start off looking at web design services that make it easy for any organization to build a quality web site then we visit the Ginghamsburg church in Cincinnati, Ohio where Pastor Michael Slaughter is leading a high-tech revolution. Slaughter talks about his website that’s visited by more people than actually attend services at the church. And, he also discusses how other technologies have been integrated in the church and the challenges involved in making technological changes.\n\nThen, we see how the old language of religion can be converted to the newest means of communication with multimedia- pictures, sounds and video. Dirk Peters from Dazzle is our guide in finding ways to create professional looking video for any community organization.",
        tvdb_date: "September 18, 2001"
    },
    {
        tvdb_episode: "S19E02",
        tvdb_title: "Technology and the Church: Part 2",
        tvdb_description: "This week we continue with part two in our series on how religious groups, other non-profits or community groups can use the computer and the Internet to better run their organizations.\n\nCCN Special Part Two [Episode #1902, First broadcast: 9/25/2001]\n\nFirst, we see how computer technologies are integrated into church services. Dan Burke, multimedia director at Menlo Park Presbyterian Church, gives tips on the best ways to incorporate sound and video into any community meeting.\n\nNext, we tackle one of he biggest problems for community when handling administrative aspects of their organization like paying bills, keeping track of donations and dealing with staff and volunteers. Stephen Wolf of NetLedger, now part of Oracle’s small business suite, shows us how more people are using online applications to handle the administration of their groups rather than boxed software.\n\nAnd finally, if an education program is part of your community or church group’s activities, online research tools can be invaluable. One of the more simple research search engines is askjeeves.com and we’ll explain the best ways to use it.",
        ia_identifier: "Technolo2001_2",
        tvdb_date: "September 25, 2001"
    },
    {
        tvdb_episode: "S19E03",
        tvdb_title: "Technology and the Church: Part 3",
        tvdb_description: "In our final installment of our three part series on technology and the church, we continue to tell you about how churches, other non-profits or community groups can use computers and the Internet to better run their organizations.\n\nCCN Special Part Three [First broadcast: 10/2/2001]\n\nshow segments\n\nGetting the most for your money is a critical element when running community groups that often have limited resources, so we begin by looking at how to get the most out of your computer hardware. Peter Newton of Netgear guides us on how to network your existing computers and peripherals so you can operate your organization in a cost-effective manner.\n\nAnd, we visit one church in Roseville, California that is using technology to make their services interactive. Pastor Francis Anfuso tells the story of how volunteers wired the church so members could participate in the actual service to give feedback on the sermon. He also talks about what kind of multimedia is being incorporated in many aspects of their church organization. \n\nFinally, we speak with Sean O’Shea of the Van Koevering Company to learn about how music can be incorporated into a community group’s activities or education programs. Sean will explain the technology that makes it easy to include this element of multimedia into any presentation.",
        ia_identifier: "Technolo2001_3",
        tvdb_date: "October 2, 2001"
    },
    {
        tvdb_episode: "S19E04",
        tvdb_title: "REPEAT [MP3 Secrets]",
        tvdb_description: "We will show you the basics of how to find MP3's on the net, to portable mp3 players and how to burn your own music CDs.\n\n[Episode #1904, First broadcast: 10/09/2001]\n\nIf you're into downloading mp3 files you're facing storage issues where to put it all of the stuff. Now there's a really slick and relatively inexpensive new solution from hard drive maker Maxtor.\n\nMP3.com\nMP3.com is the premier Music Service Provider (MSP) allowing consumers to instantly discover, purchase, listen to, store and organize their music collection from anywhere, at any time, using any Internet device.  MP3.com offers more than a half-million high-quality songs from 100,000-plus artists available for FREE downloading over the Internet.\n\nEasy CD Creator pro\nEliot Van Buskirk of c|net shows us how to use Easy CD Creator 4 to create both audio cds and data mp3 cds.  Adaptec's Easy CD Creator 4 Deluxe gives you all the tools you need--and more--to create all sorts of data and music CDs.\n\nPortable mp3 players\nLarry Magid of the LA Times will review some of the newest mp3 players on the market today.\n\nRio 600 - Capture and playback digital-quality music from the Internet or your CDs. Seize your audio, master your mix, retool your memory, even select your faceplate color.  The Rio 600 offers 64MB of memory, interchangable color faceplates, and supports mp3 and Windows Media audio formats.\n\nIomega HipZip -  This portable device gives you skip-free, CD-quality sound  in a cool, compact design. The HipZip also doubles as a PocketZip storage device, so you can download and  transport spreadsheets, images and more.  The HipZip offers Universal music file format which allows for support of both free and copyright protected content and supports MP3 and the new Microsoft® Windows Media audio formats.  It also has a high quality equalizer control system that enhances audio quality.\n\nRave: mp2200 -   Its 64MB of storage on board combined with SmartMedia card slot allows unlimited expans",
        tvdb_date: "October 9, 2001"
    },
    {
        tvdb_episode: "S19E05",
        tvdb_title: "REPEAT [Online Gaming]",
        tvdb_description: "Computer games are not only fun but they, perhaps more than any other application, push the edge of computing power. We take a look at the latest in computer games and dedicated game consoles.\n\n[Episode #1905, First broadcast: 10/16/2001]\n\nSega Dreamcast\nChristian Svensson, Editor in Chief for MCV, a strategy guide for PC and video game retailers, demonstrates the Sega Dreamcast. The Dreamcast is a video game console that's Internet-ready with a 56k modem, 19 initial games, and optional keyboard.\n\nBaldur's Gate\nEvery year has it's hot new computer game, the must-have title for your PC. This year's runaway hit is Baldur's Gate from Interplay. Chris Parker demonstrates this current Dungeons & Dragons type game that has gotten just about everybody's vote for best role playing game of the year.\n\nRyan MacDonald\nRyan MacDonald, writer for Gamespot.com and Videogames.com, demonstrates three soon to be released hot games: Resident Evil 3 Nemesis for Sony PlayStation, WCW Mayhem and Rainbow Six for Nintendo 64.\n\nReality Fusion\nChad Kinzelberg CEO of Reality Fusion, demonstrates the GameCam. The GameCam itself is a Quick Cam from Logitech; Reality Fusion makes interactive gaming technology (called FreeAction) which lets you see yourself on the monitor as you interact with PC-generated opponents and objects like basketballs or volleyballs.",
        ia_identifier: "OnlineGa01.0",
        tvdb_date: "October 16, 2001"
    },
    {
        tvdb_episode: "S19E06",
        tvdb_title: "REPEAT [Consumer Electronics Show (CES) (2001)]",
        tvdb_description: "",
        tvdb_date: "October 23, 2001"
    },
    {
        tvdb_episode: "S19E07",
        tvdb_title: "REPEAT [Creating your own Website]",
        tvdb_description: "We tell you the tools and the software needed so you can claim your spot on the Internet. From importing pictures to your site to advertising to help pay for your site and tell you all about it.\n\n[Episode #1907, First broadcast: of 2/27/2001]\n\nNorm Meyrowitz\nNorm Meyrowitz is a recognized authority on the evolution of Web development software and media technology for the Internet. Through his experience at Macromedia, Mr. Meyrowitz has overseen the creation of a broad array of multimedia and development software for the Web (Director and Dreamweaver), and drove the introduction of Macromedia Flash and Shockwave, the ubiquitous Internet media players now installed by more than 83% of the Internet population.\nMoonfruit.com \nMoonfruit offers you a free, online toolkit to help you create interactive websites and build vibrant online communities with friends, colleagues, business partners and families. Using the latest Flash technology, your sites will be fun and simple to build, fully customizable, and really full of impact.\n\nMacromedia Flash\nFlash, a popular authoring software developed by Macromedia, is used to create vector graphics-based animation programs with full-screen navigation interfaces, graphic illustrations, and simple interactivity in an anti-aliasing, resizable file format that is small enough to stream across a normal modem connection. The software, currently in version 5.0, is ubiquitous on the Web, both because of its speed (vector-based sites, which can adapt to different display sizes and resolutions, play as they download) and for the smooth way it renders graphics. Flash files, unlike animated but raster graphics Graphics Interchange Format and JPEG, are compact, efficient, and designed for optimized delivery.\n\nAdobe\nAdobe's vision is to help people communicate better. With the help of partner's such as Nokia, Real, HP, and others we have defined the next era of publishing as \"Network Publishing\"... Making visually rich, personalized",
        tvdb_date: "October 30, 2001"
    },
    {
        tvdb_episode: "S19E08",
        tvdb_title: "REPEAT [Privacy Online]",
        tvdb_description: "",
        tvdb_date: "November 6, 2001"
    },
    {
        tvdb_episode: "S19E09",
        tvdb_title: "REPEAT [Computers and the Pentagon: Part 1]",
        tvdb_description: "The enemy is different but the technology is the same. We dug into our archives and found the U.S. military technology developed during the Cold War in a 1980's Computer Chronicles show is much the same technology now used in the U.S. war against terrorism.\n\n[Episode #1909, First broadcast: 11/13/2001]\n\nshow segments\n\nRevisit how the military uses Flight Simulation technologies with interviews from Singer Link.\n\nNext, see how Carnegie Melon Robotics Institute Director Raj Reddy was working to solve the problems with sensory systems in \"Robot Warriors\" in the 80's.\n\nWe also interviewed Brian McCune of Advanced Decisions Systems to find out how artificial intelligence can be a pilot's best friend as an onboard advisor, planner and threat assessor.\n\nFinally, we’ve update the show with a more recent visit to Wright Patterson Air Force Base to see how the Air Force computing center is testing and simulating new weapons systems.",
        ia_identifier: "Computer2001_2",
        tvdb_date: "November 13, 2001"
    },
    {
        tvdb_episode: "S19E10",
        tvdb_title: "REPEAT [Computers and the Pentagon: Part 2]",
        tvdb_description: "A look at the uses of computer hardware and software in the Defense Department. Shot on location at various military installations around the country. Featured are demonstrations of SDI, the Strategic Defense Initiative, the AEGIS combat control system on board the USS Valley Forge advanced navy cruiser, and the Air Force's Advanced Sensory Exploitation System using distributed networks and artificial intelligence to detect enemy threats.",
        tvdb_broadcastyear: "1986",
        ia_identifier: "Computer2001_3",
        tvdb_date: "November 20, 2001"
    },
    {
        tvdb_episode: "S19E11",
        tvdb_title: "ETRE Conference Rome (2001): Part 1",
        tvdb_description: "Special coverage of the European Technology Roundtable and Exhibition in Rome. The big topic of discussion was the future of the economy and lots of optimism comes from the tech industry experts about opportunities for growth now that the economy has hit bottom.\n\n[Episode #1911, First broadcast: 11/27/2001]\n\nIn addition to looking at the future, tech experts do some soul searching about the past. Kevin Fong from the Mayfield Fund, The Red Herring’s Tony Perkins, Bill Gates via satellite, Tim Draper from Draper, Fisher, Jurvetson and Bloomberg News journalist Joel Dreyfuss talk about what caused the dot-com crash and how the intoxicated dot-com industry is getting sober. \n\nThen, journalists give their cynical opinions on NASDAQ behavior being immoral and calculated. Dan Gillmor from the San Jose Mercury News, Michael Rogers from Newsweek, Tony Perkins and Thom Calandra from CBS Marketwatch say too many people were allowed to invest in risky ventures while basic business model ideals like profit were absent.  But, some positive perspectives come out in their discussions about the sober economic setting also opening up opportunities for entrepreneurs to capitalize.\n\nNext, experts try to find a consensus on which markets to go after to deal with this economic slump. Isabell Maxwell, CEO Emeritus, Commtouch and John Thompson, Symantec CEO, say the security of data and people is a hot market while Michael Rogers says video conferencing is the happening market.\n\nFinally, discussions abound about terrorist viruses and new security technologies. And, Michael Dell joins the experts in asserting that the Internet proved its durability in the 911 aftermath while Israeli business leaders like Gil Schwed, Check Point CEO, talk about how they focus on business in the midst of terrorist-threatened world.",
        ia_identifier: "European2001",
        tvdb_date: "November 27, 2001"
    },
    {
        tvdb_episode: "S19E12",
        tvdb_title: "ETRE Conference Rome (2001): Part 2",
        tvdb_description: "In part two of our coverage of the European Technology Roundtable and Exhibition in Rome, we start off with the telecom meltdown and why you still can't get low-cost broadband connections to the Internet.\n\n[Episode #1912, First broadcast: 12/4/2001]\n\n3Com Chairman Eric Benhamou, Joel Dreyfuss from Bloomberg News, DASAR chairman/CEO Alex Vieux, David Einstein from the San Francisco Chronicle and Dan Gillmor from the San Jose Mercury News take turns discussing why telecommunications companies have failed to provide easy broadband access and how content providers haven't supplied enough material to require the need for broadband.\n\nNext, it's a battle over digital rights management between Hollywood and the Internet. Thom Calandra from CBS Marketwatch talks about how a balance could be found between fair-use and piracy and why Hollywood is still hostile to discussion over digital rights management.\n\nThen, we bring you a new solution to bridging the digital divide with a broadband satellite network ring around the Earth. Bill Owens, CEO of ICO Teledesic, explains this ambitious project to bring Internet connections to everyone all over the world. Plus, Kevin Fong from the Mayfield Fund and Michael Rogers from Newsweek talk about government regulation and funding of broadband infrastructure and how the current fear of terrorism is pushing the need for broadband with the video conferencing a safe alternative to flying.\n\nFinally Tim Draper, from Draper, Fisher, Jurvetson, and Bill Gates comment on why technology experts are looking to Asia as the key to future economic growth in the U.S.",
        ia_identifier: "European2001_2",
        tvdb_date: "December 4, 2001"
    },
    {
        tvdb_episode: "S19E13",
        tvdb_title: "REPEAT [Wireless Technology]",
        tvdb_description: "Likely a repeat of 18x27 but listed elsewhere as \"Wireless Computing\" which could be 14x18.",
        tvdb_date: "December 11, 2001"
    },
    {
        tvdb_episode: "S19E14",
        tvdb_title: "REPEAT [Finding a Job Online]",
        tvdb_description: "",
        tvdb_date: "December 18, 2001"
    },
    {
        tvdb_episode: "S19E15",
        tvdb_title: "REPEAT [Security and Viruses]",
        tvdb_description: "",
        tvdb_date: "December 25, 2001"
    },
    {
        tvdb_episode: "S19E16",
        tvdb_title: "ETRE Conference Rome (2001): Part 3",
        tvdb_description: "Special coverage of the European Technology Roundtable and Exhibition in Rome continues with a discussion of the proposed merger between Compaq and HP.\n\n[Episode #1916, First broadcast: 1/1/2002]\n\nBill Gates sees the new venture with optimism and Michael Dell gives his critical opinion of this new company that could be bigger than IBM. Kevin Fong from the Mayfield Fund and DASAR Chairman/CEO Alex Vieux also comment on how two very culturally different companies could mold into one.\n\nAnd, are we entering the “post PC” era with cell phones and PDAs as our main gateways to the World Wide Web? Red Herring’s Tony Perkins says the “always on” generation will require convenient hand-held mobile devices for Internet access. But, Michael Dell says PCs will never be obsolete as applications continue to grow to fit the size of a computer.\n\nMarimba Chairwoman Kim Polesi explains how these new mobile appliances mean new business models for the high-tech industry and 3Com Chairman Eric Benhamou talks about how the future of the web in your hand will have to wait until the economy recovers. Finally, San Jose Mercury News writer Joel Dreyfuss and Symantec CEO John Thompson discuss the security problems in a wireless world that would inhibit mobile devices.",
        ia_identifier: "European2002",
        tvdb_date: "January 1, 2002"
    },
    {
        tvdb_episode: "S19E17",
        tvdb_title: "ETRE Conference Rome (2001): Part 4",
        tvdb_description: "In our final show on the European Technology Roundtable and Exhibition in Rome we wrap up what leaders in the technology field envision for the future.\n\n[Episode #1917, First broadcast:  1/8/2002]\n\nFirst, Bill Gates gives his opinion on what it will take for the high-tech economy to bounce back, then, he talks about XML software, web services, and how Microsoft’s passport application will help small businesses on the Internet.  Meanwhile, Tony Perkins from the Red Herring describes Microsoft as tentacled monster now that the Justice Department heat is off and the company is expanding into a game box company, a media company, an Internet company and more. And Symantec CEO John Thompson argues that there is still room for the software industry even as Windows bundles more functionality into its operating system.\n\nNext up is the future of bruised business-to-business companies. Commerce One CEO Marc Hoffman says the b-to-b industry is here to stay and explains how suppliers were resisting new Internet sales models in the past and what the industry has learned from the business-to-commerce companies. The Red Herring’s Tony Perkins comments on how all companies will soon realize they must be able to automate buying and selling like Dell and Cisco to be competitive.  \n\nAnd finally, what does the future of the Internet look like? For Bill Gates, speech recognition is one of the most exciting new technologies as well as information appliances. Michael Dell says the future of the Internet begins with smarter ways to sell things with business models that Dell is using. Tony Perkins estimates that business in mobile devices will quadruple and Dan Gillmor from the San Jose Mercury News says new operating systems will be used with improved network security.  Tim Draper from Draper, Fisher, Jurvetson gets excited about nanotechnology and the future of circuits with atoms while Marimba Chairwoman Kim Polesi is convinced that the Internet will succeed when it disappears",
        tvdb_date: "January 8, 2002"
    },
    {
        tvdb_episode: "S19E18",
        tvdb_title: "Medical Technology: Part 1",
        tvdb_description: "This week's episode of Computer Chronicles features some technological advances in medicine and health from robotics to medical information management.\n\n[Episode #1918, First broadcast: 1/15/2002]\n\nWe start off showing you an application for your PDA that helps you monitor your health by digitally keeping track of information such as medicine dosages or sugar levels. HealthEngage is a product from FireLogic that works as a data management resource for your body's health information. Sharon Pizer demonstrates how an asthma patient who normally uses paper and a pencil can digitally record, and share with a doctor, information such as peak flow meter ratings that measure lung functionality.\n\nThen, Dr. Mark Leavitt explains how Medscape is taking paper medical charts and turning them into a digital format. Medical charts with patient summaries come up in an instant and doctors who use a tablet computer for the application can enter information through speech recognition. And, a doctor can make this digital information available online for the patient through a highly secured site called aboutmyhealth.com.\n\nNext up is astounding new robotics technology that allows a doctor to perform a surgical procedure on a patient across the world. We show you the first ever complete surgical procedure that has been performed on a human being using tele-surgery. A doctor in New York uses the \"Zeus Robotic Surgical System\" developed by Computer Motion based in Santa Barbara, California to remove a gallbladder from a patient in France. It's made possible by a transatlantic fiber optic network by France Telecom that connects the remote surgeon to the robot in the operating room.\n\nThen, Dr. Harold Portnoy talks about a new website called YourSurgery.Com that can improve the communication between patients and doctors about likely outcomes and risks of surgery. The site educates the patient about the background of the medical problem, including the anatomy and pathology, and then",
        tvdb_date: "January 15, 2002"
    },
    {
        tvdb_episode: "S19E19",
        tvdb_title: "Easy Webcams",
        tvdb_description: "We get down to the fundamentals of how to buy and install a web cam and the associated software in this episode of Computer Chronicles.\n\n[Episode #1919, First broadcast: 01/22/2001]\n\nLarry Magid, syndicated columnist for the LA Times, begins by giving us a lesson on the hardware basics of web cams. He introduces us to web cams from Logitech and Creative Labs plus tells us what we can expect in various applications of web cams.\n\nLisa Pollock then unveils new features from Yahoo! that utilizes web cam technologies. She shows us how you can connect with friends and families with web cams and Yahoo! instant messenger watching each other while you have a conversation. You can also add audio so you can do PC-to-PC voice chat. And, Pollock also explains how the newest element to Yahoo! email easily attaches a piece of video to an email using a video composer feature.\n\nWe also get a tour through some of the current web cam sites on the Internet with Betsy Malloy from About.com. She shows us some of the more whimsical sites like Peter's and Debbie's cam attached to their car and some of the more useful ones such as travel and weather cams.",
        ia_identifier: "EasyWebC2001",
        tvdb_date: "January 22, 2001"
    },
    {
        tvdb_episode: "S19E20",
        tvdb_title: "Medical Technology: Part 2",
        tvdb_description: "In our second episode concerning the technologies behind medicine, we learn about some of the advances that are being made to tackle diseases and improve health care.\n\n[Episode #1920, First broadcast: 1/29/2002]\n\nFirst, Sharon Nunes explains how IBM is using computer modeling to simulate human organs. The merger of the information technology in an IBM supercomputer and the biology know-how of Johns Hopkins creates not just visual, but also functional models of organs. Nunes demonstrates how medical researchers use a complex artificial heart model to explore the data and electrical impulses in the heart. This allows researchers to determine the beneficial and adverse effects of various drugs on organs resulting in a speedier process of discovering and approving new drugs.\n\nNext up, a group called BABEC that helps students in the San Francisco Bay Area understand DNA shows us how DNA data applications are being explored in the lab and in classroom. Octavio Rodriguez and a high school student Austen Chin perform a typical lab procedure used to extract and analyze DNA samples. They also explain how DNA is used to make insulin for humans, modify genes, and identify criminals.\n\nThen, we find out how a genetic modification experiment on a Rhyseus monkey will help us understand the causes of diseases and allow us to test innovative therapies that can eradicate them. Researchers Dr. Gerald Schatten and Dr. Anthony Chan from the Oregon Health Sciences University explain how they genetically engineered a monkey to carry a gene normally found in jellyfish. If the experiment is successful, the monkey will produce a protein that will make him glow in the dark.\n\nNanotechnology, the manipulation of matter at the atomic level, is explored with Dr. Stan Williams from Hewlett-Packard Labs Quantum Science Research Center. Using slides taken through a tunneling microscope, he shows us how certain heated chemicals naturally react on a silicon surface to build nanoscale objects.",
        tvdb_date: "January 29, 2002"
    },
    {
        tvdb_episode: "S19E21",
        tvdb_title: "Operating System & Browser Updates",
        tvdb_description: "n this week's episode of Computer Chronicles, we show you the features in Windows XP, both Home and Professional, and we'll explore whether it is worth the money to upgrade. Plus we'll show you the latest version of Internet Explorer and the Macintosh OS.\n\n[Episode #1921, First broadcast: 02/5/2002]\n\nWe begin with Denny Arar from PC Magazine who explains what's new about Windows XP Home. She'll talk about the instant messenger applications, remote assistance and web cam tools that are now all bundled in this operating system. Arar also shows how you can customize personal settings for each user and she discusses the pros and cons of upgrading to XP.\n\nThen, we get an overview of the Windows XP Professional edition with Rob Enderle from Giga Information Group. He says it's almost identical to the Home edition but the professional version allows for easier access to all the printers and storage areas in a heavy-duty network. Enderle goes over some of the features of the operating system such as the ability to pull information from an old machine to a new one and the ability to discover nearby wireless networks. And, if the system is crashing, XP allows you to restore the system to an earlier point where it was working. Rob says the product is a jump in security and reliability but they could have made more advances in the areas of wireless networks.\n\nIn addition, we show you the hoopla Microsoft created when launching this new product. In addition to worldwide events, promotion strategies in the U.S. included autograph sessions in computer stores, music from Madonna in commercials and a Sting concert in New York City.\n\nMicrosoft also has an upgraded browser with Internet Explorer V.6, an element already built into Windows XP. Mike Elgan from Interex compares IE V.6 to Netscape and guides us through some of the browser's new characteristics such as the picture re-sizer and the media bar that allows you to listen to music or watch videos in a side bar while bro",
        tvdb_date: "February 5, 2002"
    },
    {
        tvdb_episode: "S19E22",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 1]",
        tvdb_description: "",
        tvdb_date: "February 12, 2002"
    },
    {
        tvdb_episode: "S19E23",
        tvdb_title: "REPEAT [Guide to Online Auctions]",
        tvdb_description: "",
        tvdb_date: "February 19, 2002"
    },
    {
        tvdb_episode: "S19E24",
        tvdb_title: "Computers and the 2002 Olympics: Part 1",
        tvdb_description: "in this week's episode, Computer Chronicles goes behind the scenes in Salt Lake City to show the high-tech innovations that ran the 2002 Olympic Games. \n\n[Episode #1924, First broadcast: 02/26/2002]\n\nshow segments\n\nIn this first of a two-part special series, we show you how SchlumbergerSema, the overall IT Integrator, put together one of the most secure networks ever built, managed databases and integrated software at the 2002 Olympics. Bob Cottam, the Chief IT Integrator and Xavier Roig, the General Manger of Major events both for SchlumbergerSema explain how they built a massively redundant network on the side of a snow covered mountain, guaranteed its security and provided sub-second information throughout the network. Michael Fischer, the Regional IS Manager at the Utah Olympic Park talks about how the technology in Salt Lake City had to be 100% reliable and provided data at extreme speeds. The CIS, or Commentator Information System, made it possible for announcers to have athletes' data in synch with events as they were happening. And, Jason Durrant, the Director of System Testing for SchlumbergerSema, describes the difficulties of integrating software for different sports where each has their own rules and requirements.\n\nThen, Nick Harris, the Assistant Venue IS Manager for the Utah Olympic Park, talks about the constant upgrades, debugs and testing that was required to ensure there were absolutely no slippages in an event where second chances do not exist. We also see how techies were able to close the system at the Information Technology Center so that it was bulletproof and safe from hackers. Also, the network backbone at these games was Unix; Dan Smith, VP of Sales for Sun Microsystems, along with Dave Prestwich, Unix Team Manager for the Salt Lake Organizing Committee, describe the massive installation of Sun servers and data storage units.\n\nBob Donohoo, Senior Network Engineer for IKANO, the data-networking supplier, tells the story of how they",
        tvdb_date: "February 26, 2002"
    },
    {
        tvdb_episode: "S19E25",
        tvdb_title: "Computers and the 2002 Olympics: Part 2",
        tvdb_description: "In this second half of a special series, Computer Chronicles continues to reveal the high-tech innovations that were behind the gold winning technology performance at the 2002 Olympic Games in Salt Lake City.\n\n[Episode #1925, First broadcast: 3/5/2002]\n\nWe begin with the desktop operating system that helped run the Olympic Games and Scott Hunsworth, the PC Technician at Gateway, who describes why they used Windows NT and also shows off the flat screen monitor computer from Gateway that was used at the games. Then, we discover how the Salt Lake City organizers integrated custom software images for the unique needs of different sports, then distributed thousands of computers with 50 different applications to eleven venues housing 15 different sports using a scanner/bar code system.\n\nWe also demonstrate the three main systems, Info 2002, Commentator Information System and Games Management System that SchlumbergerSema provided. The Commentator Information System, CIS, allowed for announcers to have information on event happenings in milliseconds; we show you what commentators were seeing during freestyle skiing and hockey events. Bob Cottam, the chief IT Integrator with SchlumbergerSema, talks about how all these systems were kept running with 100% reliability using a standby data center. Bob Donohoo, Senior Network Engineer from Ikano, describes how self-healing technologies from Quest also contributed to the network's reliability. Meanwhile, Xavier Roig, Major Events General Manger at SchlumbergerSema, outlines the importance of testing and simulation for the people running the network.\n\nTechies weren't the only ones testing the limits of technology. Speed skaters wore the new Nike Swift Skin body suit that reduced friction by 55% and has been called the most technically advanced piece of sports equipment available. The apparel innovation director at Nike, Rick MacDonald, says the suit was developed from computer analysis of wind tunnel studies to create just",
        tvdb_date: "March 5, 2002"
    },
    {
        tvdb_episode: "S19E26",
        tvdb_title: "REPEAT [ETRE Conference Rome (2001): Part 3]",
        tvdb_description: "",
        tvdb_date: "March 12, 2002"
    },
    {
        tvdb_episode: "S19E27",
        tvdb_title: "Online Travel Tips",
        tvdb_description: "Online travel is the most successful e-commerce product on the Internet and Computer Chronicles shows you how to find the best deals when purchasing this hot travel commodity.\n\n[Episode #1927, First broadcast: 3/19/2002]\n\nA leader in the online travel marketplace, Expedia.com contains large amounts of travel information and Mitch Robinson shows us how to sort through it using various criteria. You can use Expedia to sort options by shorter flights or departure times and you can also find a hotel based on the specific neighborhood for your travels. Robinson also explains how you can put together a customized travel package in real-time as you choose the accommodations and travel arrangements. He says that the large number of people using Expedia allows them to negotiate easier with airlines to get better deals for their users.\n\nIndependent online travel expert, Ed Hasbrouk, gives us tips from his recently published book \"The Practical Nomad Guide to the Online Travel Marketplace\". Hasbrouk explains the difference between fares and prices and helps us understand how consolidators negotiate with airlines to set their own prices. One of his biggest tips is to research many sites to get the best airfares because no single place can promise the best prices. He discusses sites Orbitz.com, jetBlue.com, AirTreks.com, SideStep.com, Qixo.com, FareChase.com, and Farebeater.com on OneTravel.com.\n\nThe site that claims to have more total bookings than anyone else online is Travelocity.com and CEO Terrell Jones discusses the benefits of using this online travel-booking giant. Jones explains how e-tickets work, how you can obtain updated flight information better online than over the phone and how to compare various vacation packages side by side on the site.\n\nTo find out the secrets to getting your bid on travel auction websites, we go to Mike Dougan, the Sensible Traveler columnist at the San Francisco Chronicle. Dougan explains how Priceline is not really a place to bid",
        tvdb_date: "March 19, 2002"
    },
    {
        tvdb_episode: "S19E28",
        tvdb_title: "Preventing Spam",
        tvdb_description: "In this episode of Computer Chronicles, we show you how to protect yourself against spam, your email's most notorious enemy. \n\n[Episode #1928, First broadcast: 3/26/2002]\n\nTo begin with, there are many anti-spam tools already on your computer that you may not know about. Mike Elgan from Interex first explains how spammers get your email address when you post it anywhere on the Internet. Then, he demonstrates how to create junk email folders in Outlook and also how to use the 'Rules Wizard' to create macros that get rid of junk mail. Elgan says you should not respond to junk mail and you should use two email addresses, reserving one for public use.\n\nAnd, there are many effective anti-spam applications that you can download from the Internet as well. PCWorld.com's Andrew Brandt recommends \"SpamKiller\" that runs filters then dumps junk mail in a \"killed file\" and \"Spam Buster\" that runs filters with splashier animations. Brandt also talks about \"MailWasher\" , a free advertising supported service that gives you the most ability to customize their filters using regular expressions. Brandt says that experts predict by 2005, most people will be receiving 40 spams per day. \n\nThen we take a look at the consequences of spam, identity theft and child abuse. An identity thief victim talks about how her name, social security number and credit card was stolen on the Internet while a hacker describes the vulnerabilities that allow them to break into systems. Tom Poledge from Symantec explains how Norton Internet Security Software can protect you by preventing designated items from being sent to insecure websites. \n\nMailshell is an intelligent email system that allows you to customize your inbox to avoid spam. Eytan Urbas describes how the product works to block bad email and manage good email when you register and create alternative addresses for different purposes like shopping or auction bidding. With Mailshell, you can create specific filters for individual addresses",
        tvdb_date: "March 26, 2002"
    },
    {
        tvdb_episode: "S19E29",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 2]",
        tvdb_description: "More from the tropical paradise call Hawaii. As congestion, pollution and traffic change the quality of life in most metropolitans, Hawaii can offer an attractive change of pace for those in the hi-tech field looking for a better living environment without sacrificing the hi-tech work.\n\n[Episode #1929, First broadcast: of 2/6/2002]",
        ia_identifier: "HiTechHa2002",
        tvdb_date: "April 2, 2002"
    },
    {
        tvdb_episode: "S19E30",
        tvdb_title: "REPEAT [Medical Technology: Part 1]",
        tvdb_description: "",
        tvdb_date: "April 9, 2002"
    },
    {
        tvdb_episode: "S19E31",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "April 16, 2002"
    },
    {
        tvdb_episode: "S19E32",
        tvdb_title: "REPEAT [Easy Webcams]",
        tvdb_description: "",
        tvdb_date: "April 23, 2002"
    },
    {
        tvdb_episode: "S19E33",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "April 30, 2002"
    },
    {
        tvdb_episode: "S19E34",
        tvdb_title: "REPEAT [Medical Technology: Part 2]",
        tvdb_description: "",
        tvdb_date: "May 7, 2002"
    },
    {
        tvdb_episode: "S19E35",
        tvdb_title: "REPEAT",
        tvdb_description: "",
        tvdb_date: "May 14, 2002"
    },
    {
        tvdb_episode: "S19E36",
        tvdb_title: "REPEAT [Windows XP]",
        tvdb_description: "",
        tvdb_date: "May 21, 2002"
    },
    {
        tvdb_episode: "S19E37",
        tvdb_title: "REPEAT [High Tech Hawaii: Part 3]",
        tvdb_description: "We'll take you to Kauai to see where the Defense Department is testing the Ballistic Missile Defense Program, formerly known as SDI or STAR WARS. We'll visit one of the world's most powerful supercomputer centers on the island of Maui, and we'll go to the big island to find out why some high tech workers have given up on the mainland, and are now telecommuting from Hawaii.\n\n[Episode #1937, Re-broadcast: 5/28/2002]\n\nshow segments\n\nPacific Missile Range Facility\nThe Pacific Missile Range Facility, (PMRF), is the world's largest instrumented multi-environment range capable of supporting surface, subsurface, air, and space operations. A thousand square miles of instrumented underwater range and over 42,000 square miles of controlled airspace make PMRF a premier facility for supporting operations which vary from small, single-unit exercises up to large, multiple-unit battle group scenarios.\n\nThe mission of the Pacific Missile Range Facility is to provide major range services to facilitate training, tactics development, and evaluation for air, surface, and subsurface weapon systems for PACFLT, other DoD agencies, and foreign military forces; and to maintain and operate facilities and provide services and materials to support operations of aviation activities and units of the operating force of the Navy, and other activities and units designated by the Chief of Naval Operations.\n\nTextron Systems\nTextron Systems, a wholly-owned subsidiary of Textron, Inc., is a leading supplier of advanced systems, components, and materials for use in aerospace, defense, telecommunications, and industrial applications, as well as land vehicles and water craft for both military and commercial markets. Headquartered in Wilmington, Massachusetts, USA, the company maintains United States facilities in Massachusetts, Ohio, Louisiana, California and Hawaii as well as facilities in the United Kingdom.\nFounded in 1955, Textron Systems is dedicated to the research, design, development a",
        tvdb_date: "May 28, 2002"
    },
    {
        tvdb_episode: "S19E38",
        tvdb_title: "REPEAT [Interactive TV]",
        tvdb_description: "Think the only way to get online is with a PC?  Think again!  This week, we see all the newest ways to surf the web on your television set.  Web access is just the beginning.  These new set-top boxes will do everything from record multiple shows to pausing live TV.  This is one episode you don't want to miss!\n\n[Episode #1938, Re-broadcast: 6/4/2002]\n\nLiberate\nFounded in April, 1996, Liberate (Nasdaq: LBRT) is a leading provider of a comprehensive software platform for delivering enhanced Internet content, services and applications to information appliances, such as television set-top boxes, game consoles, smart phones and personal digital assistants.\n\nLiberate's VP of Marketing, Charlie Tritschler, will be demonstrating the new AOLTV.\n\nMicrosoft UltimateTV \nIn 1997, Microsoft Corporation acquired WebTV Networks, Inc. and now WebTV Networks operates as a subsidiary of Microsoft. WebTV Networks drives Microsoft's efforts in the television arena, with the goal being to continue expanding the traditional role of television. \n\nBringing the Internet to television was just the beginning for WebTV Networks. With advancements in technology, WebTV Networks is leading the way toward the convergence of entertainment and information.\n\nQPass\nThe global leader in digital commerce services, Qpass provides the commerce infrastructure for next-generation transactions across the Internet, broadband and mobile networks and devices. Integrating its flagship Digital Commerce Service, a cross-site transactional solution for the sale of content and services via IP networks, with its industry-leading electronic wallet technology, the Qpass Connected Commerce Platform enables the sale of content, goods and services across a full range of networks and devices - including personal computers, wireless phones, PDAs and interactive television - by providing persistent, portable payment credentials, a consistent purchase experience and universal account management capabilities.\n\nM",
        tvdb_date: "June 4, 2002"
    },
    {
        tvdb_episode: "S19E39",
        tvdb_title: "High Tech Singapore: Part 1",
        tvdb_description: "This special edition of Computer Chronicles is the first of three shows where we travel to Singapore. In this episode, we'll show you how the country is distinguishing itself in Asia to be a living-working laboratory for advanced technologies.\n\n[Episode #1939, First broadcast 6/11/2002]\n\nSingapore is a country without natural resources, so investing in its people becomes crucial in achieving a model high-tech society of the future. Canberra Secondary School is one example of how Singapore is investing technology in schools to create high quality education. Vice Principal Leon Meng Yin shows us how students use smart cards to record their attendance and order their lunches. Chowiz.com is a web-based system that provides a cashless lunchroom and allows parents to monitor their children's consumption. We also see the school's e-newspaper and radio station that students produce using iMacs. Ng See Sing, General Manager of National Computer Systems explains how SMS applications can be utilized in education situations to communicate test results to students and to inform parents of their children's progress. \n\nThen we visit an e-learning company, Ednovation, to see how this Singaporean company is going beyond CD-ROMs to provide educational programming on the Web. Richard Yen, Managing Director of Ednovation, says since 90% of the population here has access to broadband, so the essential infrastructure is in place to pipe learning materials into the home. \n\nAnd, the public library, located in a shopping mall in Singapore, uses technology to make learning more accessible. They use RFID cards, or Radio Frequency ID, in books to automate checking in and out. You can also use your cell phone to check out books and get a SMS when your book is available.\n\nSingapore is also a country challenged for space so technology is also being used here to relieve congestion. The ERP, or Electronic Road Pricing System, monitors and regulates traffic into the main city with a smart",
        tvdb_date: "June 11, 2002"
    },
    {
        tvdb_episode: "S19E40",
        tvdb_title: "High Tech Singapore: Part 2",
        tvdb_description: "In this second part of a special series of Computer Chronicles in Singapore, we explore how Singapore is repositioning itself as a major high-tech player and staking its future largely on the new field of biotechnology.\n\n[Episode #1940, First broadcast 6/18/2002]\n\nAt the Genomic Institute of Singapore, researchers are following up on the breakthrough of the sequencing of the human genome. Dr. Edison Liu says now that the human genome has been laid out, scientists here are finding what each of the proteins are responsible for and what biological functions they perform. They are seeking system biology, taking genomic knowledge and linking it with cell biology and medicine. And, as they look for that one protein appropriate for pharmaceuticals, a fundamental tool is high-end computational capabilities that can handle analysis and database requirements for many terabytes of data. Dr. Liu says Singapore's enlightened view of biomedical research encourages researchers in the country while still maintaining ethics for the people. \n\nThe Institute of Molecular and Cell Biology takes a different approach to genetic research. B. Venkatesh says scientists here are studying the fugu fish because it has the smallest genome size of all the vertebrates while still having the same number of genes as humans; and sequencing the fugu fish will enable them to identify all the genes in the sequence of the human genome. Researchers at this institute are identifying genes that may be useful for developing cures for human diseases by discovering how the genes function, how they are regulated and what turns them on and off.\n\nAnother approach in Singapore to curing diseases is studying millions of natural products found in soil to see if microorganisms can be useful in pharmaceuticals. Merlion Pharmaceuticals uses high throughput screening methods for testing thousands of samples for their exact biological activity. Tony Buss says Merlion's computational methods handle the 2 million t",
        tvdb_date: "June 18, 2002"
    },
    {
        tvdb_episode: "S19E41",
        tvdb_title: "High Tech Singapore: Part 3",
        tvdb_description: "This is the conclusion of a three-part Computer Chronicles special series exploring high tech developments in Singapore.\n\n[Episode #1941, First broadcast 6/25/2002]\n\nInvesting in people is a large part of Singapore's plan to develop their high-tech and biotech economy. The Institute for Communications Research is one of the educational research centers where they specialize in optical technology, wireless technology and second generation Internet. Here they developed the Delphi Pad with Ericsson, which is a portable computer, electronic textbook and Internet terminal. It uses new 3G technology and SIP, Session Initiation Protocol, which is a new Internet-based telephony standard. The Delphi Pad uses 802.11 and Bluetooth wireless technologies. The Institute is also working with RFID technology that lets you embed electronic tags in objects without requiring a source of power. This could be used in the future to create smart packaging so boxes in a store could register themselves in inventory databases. Lye Kin Mun, Deputy Director at ICR, talks about how they converted RF energy in to power from large distances and says they extended the range of existing RFID technology from inches to 3 meters. \n\nThey are also working on perfecting 3G technologies on next generation cell phones. A \"smart antennae\" could increase the speed and bandwidth enabling improved data communication for handhelds. And next generation Internet at this center uses QOS, Quality of Service, technology to improve data streamed over the Internet by identifying and prioritizing packets being sent over the network.\n\nSingapore is also developing creative technology skills at Nanyang Polytechnic where they specialize in Digital Media Design. Students use programs such as Macromedia Director, Shockwave, 3D Studio Max, and Adobe Premier to create educational role-playing games, robot characters and animations. Students are also doing cutting edge work using a programming language called WML to des",
        tvdb_date: "June 25, 2002"
    },
    {
        tvdb_episode: "S19E42",
        tvdb_title: "REPEAT [Online Travel Tips]",
        tvdb_description: "Online travel is the most successful e-commerce product on the Internet and Computer Chronicles shows you how to find the best deals when purchasing this hot travel commodity.\n\n[Episode #1942, Re-broadcast: 7/2/2002]\n\nA leader in the online travel marketplace, Expedia.com contains large amounts of travel information and Mitch Robinson shows us how to sort through it using various criteria. You can use Expedia to sort options by shorter flights or departure times and you can also find a hotel based on the specific neighborhood for your travels. Robinson also explains how you can put together a customized travel package in real-time as you choose the accommodations and travel arrangements. He says that the large number of people using Expedia allows them to negotiate easier with airlines to get better deals for their users.\n\nIndependent online travel expert, Ed Hasbrouk, gives us tips from his recently published book \"The Practical Nomad Guide to the Online Travel Marketplace\". Hasbrouk explains the difference between fares and prices and helps us understand how consolidators negotiate with airlines to set their own prices. One of his biggest tips is to research many sites to get the best airfares because no single place can promise the best prices. He discusses sites Orbitz.com, jetBlue.com, AirTreks.com, SideStep.com, Qixo.com, FareChase.com, and Farebeater.com on OneTravel.com.\n\nThe site that claims to have more total bookings than anyone else online is Travelocity.com and CEO Terrell Jones discusses the benefits of using this online travel-booking giant. Jones explains how e-tickets work, how you can obtain updated flight information better online than over the phone and how to compare various vacation packages side by side on the site.\n\nTo find out the secrets to getting your bid on travel auction websites, we go to Mike Dougan, the Sensible Traveler columnist at the San Francisco Chronicle. Dougan explains how Priceline is not really a place to bid for",
        tvdb_date: "July 2, 2002"
    },
    {
        tvdb_episode: "S19E43",
        tvdb_title: "REPEAT [Preventing Spam]",
        tvdb_description: "In this episode of Computer Chronicles, we show you how to protect yourself against spam, your email's most notorious enemy. \n\n[Episode #1943, Re-broadcast: 7/9/2002]\n\nTo begin with, there are many anti-spam tools already on your computer that you may not know about. Mike Elgan from Interex first explains how spammers get your email address when you post it anywhere on the Internet. Then, he demonstrates how to create junk email folders in Outlook and also how to use the 'Rules Wizard' to create macros that get rid of junk mail. Elgan says you should not respond to junk mail and you should use two email addresses, reserving one for public use.\n\nAnd, there are many effective anti-spam applications that you can download from the Internet as well. PCWorld.com's Andrew Brandt recommends \"SpamKiller\" that runs filters then dumps junk mail in a \"killed file\" and \"Spam Buster\" that runs filters with splashier animations. Brandt also talks about \"MailWasher\" , a free advertising supported service that gives you the most ability to customize their filters using regular expressions. Brandt says that experts predict by 2005, most people will be receiving 40 spams per day. \n\nThen we take a look at the consequences of spam, identity theft and child abuse. An identity thief victim talks about how her name, social security number and credit card was stolen on the Internet while a hacker describes the vulnerabilities that allow them to break into systems. Tom Poledge from Symantec explains how Norton Internet Security Software can protect you by preventing designated items from being sent to insecure websites. \n\nMailshell is an intelligent email system that allows you to customize your inbox to avoid spam. Eytan Urbas describes how the product works to block bad email and manage good email when you register and create alternative addresses for different purposes like shopping or auction bidding. With Mailshell, you can create specific filters for individual addresses and",
        tvdb_date: "July 9, 2002"
    },
    {
        tvdb_episode: "S19E44",
        tvdb_title: "REPEAT [Computers and the 2002 Olympics: Part 1]",
        tvdb_description: "In this week's episode, Computer Chronicles goes behind the scenes in Salt Lake City to show the high-tech innovations that ran the 2002 Olympic Games. \n\n[Episode #1944, Re-broadcast: 7/16/2002]\n\nIn this first of a two-part pecial series, we show you how SchlumbergerSema, the overall IT Integrator, put together one of the most secure networks ever built, managed databases and integrated software at the 2002 Olympics. Bob Cottam, the Chief IT Integrator and Xavier Roig, the General Manger of Major events both for SchlumbergerSema explain how they built a massively redundant network on the side of a snow covered mountain, guaranteed its security and provided sub-second information throughout the network. Michael Fischer, the Regional IS Manager at the Utah Olympic Park talks about how the technology in Salt Lake City had to be 100% reliable and provided data at extreme speeds. The CIS, or Commentator Information System, made it possible for announcers to have athletes' data in synch with events as they were happening. And, Jason Durrant, the Director of System Testing for SchlumbergerSema, describes the difficulties of integrating software for different sports where each has their own rules and requirements.\n\nThen, Nick Harris, the Assistant Venue IS Manager for the Utah Olympic Park, talks about the constant upgrades, debugs and testing that was required to ensure there were absolutely no slippages in an event where second chances do not exist. We also see how techies were able to close the system at the Information Technology Center so that it was bulletproof and safe from hackers. Also, the network backbone at these games was Unix; Dan Smith, VP of Sales for Sun Microsystems, along with Dave Prestwich, Unix Team Manager for the Salt Lake Organizing Committee, describe the massive installation of Sun servers and data storage units.\n\nBob Donohoo, Senior Network Engineer for IKANO, the data-networking supplier, tells the story of how they manipulated fiber ca",
        tvdb_date: "July 16, 2002"
    },
    {
        tvdb_episode: "S19E45",
        tvdb_title: "REPEAT [Computers and the 2002 Olympics: Part 2]",
        tvdb_description: "In this second half of a special series, Computer Chronicles continues to reveal the high-tech innovations that were behind the gold winning technology performance at the 2002 Olympic Games in Salt Lake City.\n\n[Episode #1945, Re-broadcast: 7/23/2002]\n\nWe begin with the desktop operating system that helped run the Olympic Games and Scott Hunsworth, the PC Technician at Gateway, who describes why they used Windows NT and also shows off the flat screen monitor computer from Gateway that was used at the games. Then, we discover how the Salt Lake City organizers integrated custom software images for the unique needs of different sports, then distributed thousands of computers with 50 different applications to eleven venues housing 15 different sports using a scanner/bar code system.\n\nWe also demonstrate the three main systems, Info 2002, Commentator Information System and Games Management System that SchlumbergerSema provided. The Commentator Information System, CIS, allowed for announcers to have information on event happenings in milliseconds; we show you what commentators were seeing during freestyle skiing and hockey events. Bob Cottam, the chief IT Integrator with SchlumbergerSema, talks about how all these systems were kept running with 100% reliability using a standby data center. Bob Donohoo, Senior Network Engineer from Ikano, describes how self-healing technologies from Quest also contributed to the network's reliability. Meanwhile, Xavier Roig, Major Events General Manger at SchlumbergerSema, outlines the importance of testing and simulation for the people running the network.\n\nTechies weren't the only ones testing the limits of technology. Speed skaters wore the new Nike Swift Skin body suit that reduced friction by 55% and has been called the most technically advanced piece of sports equipment available. The apparel innovation director at Nike, Rick MacDonald, says the suit was developed from computer analysis of wind tunnel studies to create just th",
        tvdb_date: "July 23, 2002"
    },
    {
        tvdb_episode: "S19E46",
        tvdb_title: "REPEAT [Windows XP]",
        tvdb_description: "In this week's episode of Computer Chronicles, we show you the features in Windows XP, both Home and Professional, and we'll explore whether it is worth the money to upgrade. Plus we'll show you the latest version of Internet Explorer and the Macintosh OS.\n\n[Episode #1946, Re-broadcast: 7/30/2002]\n\nWe begin with Denny Arar from PC Magazine who explains what's new about Windows XP Home. She'll talk about the instant messenger applications, remote assistance and web cam tools that are now all bundled in this operating system. Arar also shows how you can customize personal settings for each user and she discusses the pros and cons of upgrading to XP.\n\nThen, we get an overview of the Windows XP Professional edition with Rob Enderle from Giga Information Group. He says it's almost identical to the Home edition but the professional version allows for easier access to all the printers and storage areas in a heavy-duty network. Enderle goes over some of the features of the operating system such as the ability to pull information from an old machine to a new one and the ability to discover nearby wireless networks. And, if the system is crashing, XP allows you to restore the system to an earlier point where it was working. Rob says the product is a jump in security and reliability but they could have made more advances in the areas of wireless networks.\n\nIn addition, we show you the hoopla Microsoft created when launching this new product. In addition to worldwide events, promotion strategies in the U.S. included autograph sessions in computer stores, music from Madonna in commercials and a Sting concert in New York City.\n\nMicrosoft also has an upgraded browser with Internet Explorer V.6, an element already built into Windows XP. Mike Elgan from Interex compares IE V.6 to Netscape and guides us through some of the browser's new characteristics such as the picture re-sizer and the media bar that allows you to listen to music or watch videos in a side bar while brows",
        tvdb_date: "July 30, 2002"
    },
    {
        tvdb_episode: "S19E47",
        tvdb_title: "REPEAT [Medical Technology: Part 1]",
        tvdb_description: "",
        tvdb_date: "August 6, 2002"
    },
    {
        tvdb_episode: "S19E48",
        tvdb_title: "REPEAT [Medical Technology: Part 2]",
        tvdb_description: "",
        tvdb_date: "August 13, 2002"
    },
    {
        tvdb_episode: "S19E49",
        tvdb_title: "REPEAT [Easy Webcams]",
        tvdb_description: "",
        tvdb_date: "August 20, 2002"
    },
    {
        tvdb_episode: "S19E50",
        tvdb_title: "REPEAT [High Tech Singapore: Part 1]",
        tvdb_description: "",
        tvdb_date: "August 27, 2002"
    },
    {
        tvdb_episode: "S19E51",
        tvdb_title: "REPEAT [High Tech Singapore: Part 2]",
        tvdb_description: "",
        tvdb_date: "September 3, 2002"
    },
    {
        tvdb_episode: "S19E52",
        tvdb_title: "REPEAT [High Tech Singapore: Part 3]",
        tvdb_description: "",
        tvdb_date: "September 10, 2002"
    },
    {
        tvdb_episode: "S20E01",
        tvdb_title: "REPEAT [Online Universities]",
        tvdb_description: "More and more people are turning to the Internet to help further their education. We'll be bringing you highlights from some of these great online educational websites and meet some of the people involved.\n\n[Episode #1833, First broadcast: of 5/1/2001]\n\nUniversity of Phoenix Online\nThe nation's largest accredited private university, with an unsurpassed reputation for educational excellence and student service. One can earn one of the most current and relevant degrees offered in the areas of Business, Management, Technology Management, Information Systems, Education and Nursing. Finish a degree in as little as two to three years.\n\nSmartForce\nSmartForce, formerly CBT Systems, is leading the professional education market into the Internet Age through e-Learning, a fundamentally faster and better way to learn. Changing the company name to SmartForce is a dramatic step that demonstrates the commitment to helping companies create a competitive advantage through a smarter workforce, a \"smart force\" that thrives in the Internet Age.\n\nWeb CT\nWebCT is the world's leading provider of integrated e-learning systems. Over 148,000 faculty members at more than 1,700 colleges and universities are using WebCT's products and services to transform the educational experience for more than 5.8 million students. The company's mission is to be the preferred partner of institutions that are creating total e-learning solutions, from getting started to scaling campus-wide. WebCT is available in 10 major world languages and a quarter of the company's installed base is located in more than 60 countries outside of North America.\n\nBigchalk.com\nBigchalk.com provides a broad spectrum of educational Internet services to teachers, students, parents, librarians and school administrators in the K-12 educational and public library markets. bigchalk.com currently offers the following services:\n\nbigchalk.com National Community Website\nNational Community Web site, serves as a jumping off-p",
    },
    {
        tvdb_episode: "S20E02",
        tvdb_title: "REPEAT [Robots (1999)]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E03",
        tvdb_title: "REPEAT [Copyright Issues Online]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E04",
        tvdb_title: "REPEAT [Cooking with Your PC]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E05",
        tvdb_title: "REPEAT [Bill Gates Profile]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E06",
        tvdb_title: "REPEAT [Home Networks]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E07",
        tvdb_title: "REPEAT [Computer Crime]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E08",
        tvdb_title: "REPEAT [Security and Viruses]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E09",
        tvdb_title: "REPEAT [Privacy Online]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E10",
        tvdb_title: "REPEAT [Online Travel Tips]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E11",
        tvdb_title: "REPEAT [Easy Webcams]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E12",
        tvdb_title: "REPEAT [Medical Technology: Part 1]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E13",
        tvdb_title: "REPEAT [Medical Technology: Part 2]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E14",
        tvdb_title: "REPEAT [Preventing Spam]",
        tvdb_description: "",
    },
    {
        tvdb_episode: "S20E15",
        tvdb_title: "REPEAT [Guide to Online Auctions]",
        tvdb_description: "",
    }
]