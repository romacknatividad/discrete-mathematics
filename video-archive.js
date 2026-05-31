const archiveData = [
  {
    id: "intro",
    label: "CH 01",
    title: "Introduction and Preliminaries",
    playlistId: "PLROOIV7hGpZhTq41gJhBbGXHQ8_OMSlfl",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "what-is-discrete",
        title: "0.1 What is Discrete Math",
        description: "A short opening segment introducing the scope of the subject and how it differs from continuous mathematics.",
        lessons: [
          "What is Discrete Mathematics?"
        ]
      },
      {
        id: "statements",
        title: "0.2 Mathematical Statements",
        description: "Foundations of logic, implication, converse and contrapositive, and quantified statements.",
        lessons: [
          "Mathematical Statements and Logic Connectives",
          "Truth Conditions for Connectives",
          "Implications and Truth Conditions for Implications",
          "If and Only If Statements",
          "Necessary and Sufficient Statements",
          "Introduction to Predicates and Quantifiers"
        ]
      },
      {
        id: "sets",
        title: "0.3 Introduction to Sets",
        description: "Set notation, unions and intersections, Venn diagrams, power sets, and De Morgan's laws.",
        lessons: [
          "Introduction to Sets and Set Notation",
          "Determine the Union, Intersection, and Difference of Two Sets",
          "Determine the Power Set of a Set and the Cardinality of a Power Set",
          "The Cartesian Product of Two Sets",
          "Shading Venn Diagrams with Two and Three Sets",
          "De Morgan's Laws with Venn Diagrams"
        ]
      },
      {
        id: "functions",
        title: "0.4 Functions",
        description: "Discrete functions, recursion, and injective, surjective, and bijective mappings.",
        lessons: [
          "Introduction to Functions",
          "Recursive Functions",
          "Determine Function Values for Recursive Functions",
          "Surjective, Injective, and Bijective Functions",
          "Image of a Subset of the Domain and Inverse Image of a Subset of the Codomain"
        ]
      }
    ]
  },
  {
    id: "counting",
    label: "CH 02",
    title: "Counting",
    playlistId: "PLROOIV7hGpZis-WPw8lZD-sTMJYp0U3qz",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "principles",
        title: "1.1 Additive and Multiplicative Principles",
        description: "Core counting rules with applications to cards, strings, and unions of sets.",
        lessons: [
          "Introduction to Counting Using Additive and Multiplicative Principles",
          "Counting Principle with Playing Cards",
          "Counting Hexadecimal Numbers with Restrictions",
          "The Cardinality of the Union of Two Sets",
          "The Cardinality of the Union of Three Sets"
        ]
      },
      {
        id: "binomial",
        title: "1.2 Binomial Coefficients",
        description: "Subsets, bit strings, lattice paths, Pascal's triangle, and combinations.",
        lessons: [
          "Counting Subsets and Subsets of a Specific Cardinality",
          "Introduction to Bit Strings",
          "Introduction to Lattice Paths",
          "Introduction to Binomial Coefficients",
          "Evaluating Combinations Using Pascal's Triangle"
        ]
      },
      {
        id: "comb-perm",
        title: "1.3 Combinations and Permutations",
        description: "Functions, arrangements, lock codes, anagrams, and ordered selections.",
        lessons: [
          "Find the Number of Functions and Bijective Functions",
          "Counting Lock Combinations",
          "Counting Books on a Shelf",
          "Counting the Number of Anagrams of Words",
          "Counting the Number of Ordered Groups of Four"
        ]
      },
      {
        id: "proofs",
        title: "1.4 Combinatorial Proofs",
        description: "Algebraic and combinatorial proofs of classic binomial identities.",
        lessons: [
          "Algebraic Proof: C(n,k)=C(n-1,k-1)+C(n-1,k)",
          "Combinatorial Proofs: C(n,k)=C(n-1,k-1)+C(n-1,k)",
          "Algebraic and Combinatorial Proofs: C(n,k)=C(n,n-k)"
        ]
      },
      {
        id: "stars-bars",
        title: "1.5 Stars and Bars",
        description: "Counting multisets and integer solutions under different constraints.",
        lessons: [
          "Introduction to Stars and Bars Counting Method",
          "Stars and Bars: The Number of Multisets",
          "Stars and Bars: Integer Solutions to x+y+z=8 with Conditions",
          "Stars and Bars: Number of Discrete, Increasing, and Nondecreasing Functions"
        ]
      },
      {
        id: "advanced-counting",
        title: "1.6 Advanced Counting Using PIE",
        description: "Inclusion-exclusion, derangements, and upper-bound counting problems.",
        lessons: [
          "Stars and Bars with PIE: Dollar Menu Problem",
          "Introduction to Derangements",
          "Permutations with One Fixed Element Using Derangements",
          "Stars and Bars with PIE: Balls in Bins with Upper Bound"
        ]
      }
    ]
  },
  {
    id: "sequences",
    label: "CH 03",
    title: "Sequences and Recurrences",
    playlistId: "PLROOIV7hGpZj5Y98HCbJMPXHN3jjWTfYk",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "describing-sequences",
        title: "2.1 Describing Sequences",
        description: "Closed formulas, recursive definitions, partial sums, and term-by-term analysis.",
        lessons: [
          "Introduction to Sequences",
          "Determine a Closed Formula for a Given Sequence",
          "Given a Recursive Definition of a Sequence, Find Terms and a Closed Formula",
          "Introduction to Partial Sums and Partial Products"
        ]
      },
      {
        id: "arith-geom",
        title: "2.2 Arithmetic and Geometric Sequences",
        description: "Standard families of sequences and methods for summing them.",
        lessons: [
          "Introduction to Arithmetic and Geometric Sequences",
          "Arithmetic Sequence: Find Recursive Definition, Closed Formula, and Number of Terms",
          "Find the Sum of an Arithmetic Sequence",
          "Find a Sum of a Geometric Sequence Using Multiply, Shift, and Subtract"
        ]
      },
      {
        id: "poly-fit",
        title: "2.3 Polynomial Fitting",
        description: "Using finite differences and fitted polynomials to recover formulas.",
        lessons: [
          "Introduction to Polynomial Fitting",
          "Find a Closed Formula Using Polynomial Fitting (Degree 2)",
          "Find a Closed Formula Using Polynomial Fitting (Degree 3)"
        ]
      },
      {
        id: "recurrences",
        title: "2.4 Solving Recurrence Relations",
        description: "Inspection, telescoping, and characteristic-root methods for linear recurrences.",
        lessons: [
          "Introduction to Solving Recurrence Relations",
          "Solve a Recurrence Relation Using Inspection",
          "Solve a Recurrence Relation Using the Telescoping Technique",
          "Solve a Recurrence Relation Using the Characteristic Root Technique"
        ]
      },
      {
        id: "induction",
        title: "2.5 Induction",
        description: "Induction proofs for sums, divisibility, inequalities, and strong induction arguments.",
        lessons: [
          "Introduction to Proof by Induction",
          "Mathematical Induction",
          "Proof by Induction: Sum of n Squares",
          "Proof by Strong Induction"
        ]
      }
    ]
  },
  {
    id: "logic-proofs",
    label: "CH 04",
    title: "Symbolic Logic and Proofs",
    playlistId: "PLROOIV7hGpZhN69CNIUIErPnQZFbUtyBE",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "prop-logic",
        title: "3.1 Propositional Logic",
        description: "Truth tables, logical equivalence, deduction rules, and predicate logic.",
        lessons: [
          "Introduction to Propositional Logic and Truth Tables",
          "Introduction to Logically Equivalent Statements",
          "Determining if Two Statements Are Equivalent Using a Truth Table",
          "Deduction Rules: Modus Ponens and Modus Tollens",
          "Introduction to Predicate Logic"
        ]
      },
      {
        id: "proof-methods",
        title: "3.2 Proofs",
        description: "Direct proof, contrapositive, contradiction, counterexample, and proof by cases.",
        lessons: [
          "Introduction to Common Mathematical Proof Methods",
          "Introduction to Direct Proofs",
          "Introduction to Proof by Contrapositive",
          "Introduction to Proof by Contradiction",
          "Introduction to Proof by Counter Example",
          "Proof by Cases"
        ]
      }
    ]
  },
  {
    id: "graph-theory",
    label: "CH 05",
    title: "Graph Theory",
    playlistId: "PLROOIV7hGpZgYfHsJDlAAQh1ngyfIIBDP",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "definitions",
        title: "4.1 Definitions",
        description: "Basic graph language including isomorphism, subgraphs, degree, and bipartite graphs.",
        lessons: [
          "Introduction to Graph Theory",
          "The Definition of a Graph",
          "Isomorphic Graphs",
          "Subgraphs and Induced Subgraphs",
          "The Handshake Lemma"
        ]
      },
      {
        id: "trees",
        title: "4.2 Trees",
        description: "Trees, rooted trees, spanning trees, and structural properties.",
        lessons: [
          "Introduction to Trees and Properties of Trees",
          "Introduction to Rooted Trees",
          "Every Tree is a Bipartite Graph",
          "Introduction to Spanning Trees"
        ]
      },
      {
        id: "planar",
        title: "4.3 Planar Graphs",
        description: "Planarity, Euler's formula, polyhedra, and non-planar examples.",
        lessons: [
          "Introduction to Planar Graphs and Euler's Formula",
          "Proving K5 and K33 are Non-Planar",
          "Introduction to Polyhedra Using Euler's Formula",
          "Prove There Are Exactly 5 Regular Polyhedra"
        ]
      },
      {
        id: "coloring",
        title: "4.4 Coloring",
        description: "Vertex coloring, edge coloring, chromatic number, and chromatic index.",
        lessons: [
          "Introduction to Vertex Coloring and the Chromatic Number of a Graph",
          "Upper and Lower Bounds for the Chromatic Number",
          "Edge Coloring and the Chromatic Index",
          "Find the Chromatic Number of the Given Graphs"
        ]
      },
      {
        id: "euler-hamilton",
        title: "4.5 Euler Paths and Circuits",
        description: "Euler and Hamilton problems with applications and complete graph criteria.",
        lessons: [
          "Introduction to Euler Paths and Euler Circuits",
          "Introduction to Hamilton Paths and Hamilton Circuits",
          "Euler Path Application: Road Trip",
          "For Which Values of n Does K_n have an Euler Path or an Euler Circuit"
        ]
      },
      {
        id: "matching",
        title: "4.6 Matching in Bipartite Graphs",
        description: "Hall's Marriage Theorem and matching problems in bipartite graphs.",
        lessons: [
          "Introduction to Matching in Bipartite Graphs",
          "Proof by Contradiction Using Hall's Marriage Theorem",
          "Determine a Matching of A if Possible",
          "Marriage Arrangements"
        ]
      }
    ]
  },
  {
    id: "additional",
    label: "CH 06",
    title: "Additional Topics",
    playlistId: "PLROOIV7hGpZgJQxySIkWLV9ZHIwd-ps0_",
    sourceUrl: "https://mathispower4u.com/discrete-math.php",
    playlists: [
      {
        id: "gen-functions",
        title: "5.1 Generating Functions",
        description: "Generating functions for explicit and recursive sequences, including inversion and reconstruction.",
        lessons: [
          "Introduction to Generating Functions for Sequences",
          "Building Generating Functions Using Differencing",
          "Determine a Generating Function for a Recursively Defined Sequence",
          "Find the Closed Formula for a Sequence Given a Generating Function"
        ]
      },
      {
        id: "number-theory",
        title: "5.2 Introduction to Number Theory",
        description: "Divisibility, modular arithmetic, congruences, and linear Diophantine equations.",
        lessons: [
          "Intro to Number Theory and the Divisibility Relation",
          "Clock Arithmetic and Congruence Modulo n",
          "The Division Algorithm and Remainder Classes",
          "Solving Congruences",
          "Linear Diophantine Equations Using Congruence"
        ]
      },
      {
        id: "algo-analysis",
        title: "5.3 Algorithm Analysis",
        description: "Asymptotic notation and determining time complexity from formulas and code structure.",
        lessons: [
          "Introduction to Big-O Notation",
          "Introduction to Big-Omega Notation",
          "Introduction to Big-Theta Notation",
          "Rank the Complexity of Functions",
          "Determine Time Complexity of Code Using Big-O Notation"
        ]
      }
    ]
  }
];

const channelList = document.getElementById("channel-list");
const playlistList = document.getElementById("playlist-list");
const archiveTopicTitle = document.getElementById("archive-topic-title");
const archivePlaylistCount = document.getElementById("archive-playlist-count");
const archivePlaylistLink = document.getElementById("archive-playlist-link");
const archivePlayer = document.getElementById("archive-player");
const guideTitle = document.getElementById("guide-title");
const guideDescription = document.getElementById("guide-description");
const episodeList = document.getElementById("episode-list");

let activeChannelId = archiveData[0].id;
let activePlaylistId = archiveData[0].playlists[0].id;

function findChannel(channelId) {
  return archiveData.find((channel) => channel.id === channelId) ?? archiveData[0];
}

function findPlaylist(channel, playlistId) {
  return channel.playlists.find((playlist) => playlist.id === playlistId) ?? channel.playlists[0];
}

function renderChannels() {
  channelList.innerHTML = "";

  archiveData.forEach((channel) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "channel-button";
    if (channel.id === activeChannelId) {
      button.classList.add("is-active");
    }

    button.innerHTML = `
      <span class="channel-number">${channel.label}</span>
      <span class="channel-name">${channel.title}</span>
    `;

    button.addEventListener("click", () => {
      activeChannelId = channel.id;
      activePlaylistId = channel.playlists[0].id;
      renderArchive();
    });

    channelList.appendChild(button);
  });
}

function renderPlaylists(channel) {
  playlistList.innerHTML = "";

  channel.playlists.forEach((playlist) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "playlist-button";
    if (playlist.id === activePlaylistId) {
      button.classList.add("is-active");
    }

    button.innerHTML = `
      <strong>${playlist.title}</strong>
      <span>${playlist.lessons.length} featured lessons</span>
    `;

    button.addEventListener("click", () => {
      activePlaylistId = playlist.id;
      renderArchive();
    });

    playlistList.appendChild(button);
  });
}

function renderGuide(playlist) {
  guideTitle.textContent = playlist.title;
  guideDescription.textContent = playlist.description;
  episodeList.innerHTML = "";

  playlist.lessons.forEach((lesson) => {
    const item = document.createElement("li");
    item.textContent = lesson;
    episodeList.appendChild(item);
  });
}

function renderArchive() {
  const channel = findChannel(activeChannelId);
  const playlist = findPlaylist(channel, activePlaylistId);

  archiveTopicTitle.textContent = channel.title;
  archivePlaylistCount.textContent = `${channel.playlists.length} playlists`;
  archivePlaylistLink.href = `https://www.youtube.com/playlist?list=${channel.playlistId}`;
  archivePlayer.src = `https://www.youtube.com/embed/videoseries?list=${channel.playlistId}`;

  renderChannels();
  renderPlaylists(channel);
  renderGuide(playlist);
}

renderArchive();
