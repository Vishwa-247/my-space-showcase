export interface DSAProblem {
  name: string;
  url: string;
  completed?: boolean;
}

export interface DSATopic {
  id: string;
  title: string;
  icon: string;
  problems: DSAProblem[];
  totalProblems: number;
  solvedProblems: number;
}

export const dsaTopics: DSATopic[] = [
  {
    id: "string-basics",
    title: "String Basics",
    icon: "⚡",
    totalProblems: 32,
    solvedProblems: 0,
    problems: [
      { name: "Reverse String", url: "https://leetcode.com/problems/reverse-string" },
      { name: "Valid Palindrome", url: "https://leetcode.com/problems/valid-palindrome" },
      { name: "Length of Last Word", url: "https://leetcode.com/problems/length-of-last-word/" },
      { name: "Find the Index of the First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
      { name: "Longest Substring Without Repeating Characters", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters" },
      { name: "String to Integer (atoi)", url: "https://leetcode.com/problems/string-to-integer-atoi" },
      { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses" },
      { name: "Reverse Words in a String", url: "https://leetcode.com/problems/reverse-words-in-a-string" },
      { name: "Reverse Vowels of a String", url: "https://leetcode.com/problems/reverse-vowels-of-a-string/" },
      { name: "Minimum Window Substring", url: "https://leetcode.com/problems/minimum-window-substring" },
      { name: "Longest Palindromic Substring", url: "https://leetcode.com/problems/longest-palindromic-substring" },
      { name: "Group Anagrams", url: "https://leetcode.com/problems/group-anagrams" },
      { name: "Permutation in String", url: "https://leetcode.com/problems/permutation-in-string" },
      { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching" },
      { name: "Word Break", url: "https://leetcode.com/problems/word-break" },
      { name: "Wildcard Matching", url: "https://leetcode.com/problems/wildcard-matching" },
      { name: "Longest Valid Parentheses", url: "https://leetcode.com/problems/longest-valid-parentheses" },
      { name: "Substring with Concatenation of All Words", url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words" },
      { name: "Remove Duplicates from String", url: "https://leetcode.com/problems/remove-duplicates-from-string" },
      { name: "Minimum Number of Deletions to Make a String Palindrome", url: "https://leetcode.com/problems/minimum-deletion-to-make-string-palindrome/" },
      { name: "Compare Version Numbers", url: "https://leetcode.com/problems/compare-version-numbers/" },
      { name: "Roman to Integer", url: "https://leetcode.com/problems/roman-to-integer/" },
      { name: "Integer to Roman", url: "https://leetcode.com/problems/integer-to-roman/" },
      { name: "Valid Number", url: "https://leetcode.com/problems/valid-number/" },
      { name: "Encode and Decode Strings", url: "https://leetcode.com/problems/encode-and-decode-strings/" },
      { name: "Find the Closest Palindrome", url: "https://leetcode.com/problems/find-the-closest-palindrome/" },
      { name: "Text Justification", url: "https://leetcode.com/problems/text-justification/" },
      { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" }
    ]
  },
  {
    id: "array-basics",
    title: "Array Basics",
    icon: "📊",
    totalProblems: 12,
    solvedProblems: 0,
    problems: [
      { name: "Two Sum", url: "https://leetcode.com/problems/two-sum" },
      { name: "Squares of a Sorted Array", url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
      { name: "Best Time to Buy and Sell Stock", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock" },
      { name: "Contains Duplicate", url: "https://leetcode.com/problems/contains-duplicate" },
      { name: "Product of Array Except Self", url: "https://leetcode.com/problems/product-of-array-except-self" },
      { name: "Rotate Array", url: "https://leetcode.com/problems/rotate-array" },
      { name: "Maximum Subarray", url: "https://leetcode.com/problems/maximum-subarray" },
      { name: "Valid Sudoku", url: "https://leetcode.com/problems/valid-sudoku" },
      { name: "Merge Intervals", url: "https://leetcode.com/problems/merge-intervals" },
      { name: "3Sum", url: "https://leetcode.com/problems/3sum" },
      { name: "Move Zeroes", url: "https://leetcode.com/problems/move-zeroes" },
      { name: "Find All Numbers Disappeared in an Array", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array" }
    ]
  },
  {
    id: "two-pointers",
    title: "Two Pointers Approach",
    icon: "👆",
    totalProblems: 6,
    solvedProblems: 0,
    problems: [
      { name: "Find the Closest Pair from Two Arrays", url: "https://www.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1" },
      { name: "Find All Triplets with Zero Sum", url: "https://www.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1" },
      { name: "Triplet Sum in Array", url: "https://www.geeksforgeeks.org/problems/triplet-sum-in-array-1587115621/1" },
      { name: "Triplet Family", url: "https://www.geeksforgeeks.org/problems/triplet-family/1" },
      { name: "4 Sum - Count quadruplets with given sum", url: "https://www.geeksforgeeks.org/problems/count-quadruplets-with-given-sum/1" },
      { name: "Trapping Rain Water", url: "https://www.geeksforgeeks.org/problems/trapping-rain-water-1587115621/1" }
    ]
  },
  {
    id: "sliding-window",
    title: "Sliding Window",
    icon: "🪟",
    totalProblems: 11,
    solvedProblems: 0,
    problems: [
      { name: "Indexes of Subarray Sum", url: "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1" },
      { name: "K Sized Subarray Maximum", url: "https://www.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k3101/1" },
      { name: "Longest Subarray with Sum K", url: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1" },
      { name: "Max Sum Subarray of size K", url: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1" },
      { name: "Smallest window containing all characters of another string", url: "https://www.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string-1587115621/1" },
      { name: "Length of the longest substring", url: "https://www.geeksforgeeks.org/problems/length-of-the-longest-substring3036/1" },
      { name: "First negative in every window of size k", url: "https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1" },
      { name: "Count distinct elements in every window", url: "https://www.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1" },
      { name: "Smallest distinct window", url: "https://www.geeksforgeeks.org/problems/smallest-distant-window3132/1" },
      { name: "Largest Sum Subarray of Size at least K", url: "https://www.geeksforgeeks.org/problems/largest-sum-subarray-of-size-at-least-k3121/1" },
      { name: "Check if Permutation is Substring", url: "https://www.geeksforgeeks.org/problems/check-if-permutation-is-substring/1" }
    ]
  },
  {
    id: "matrices",
    title: "Matrices",
    icon: "🔢",
    totalProblems: 9,
    solvedProblems: 0,
    problems: [
      { name: "Spiral Matrix", url: "https://leetcode.com/problems/spiral-matrix/" },
      { name: "Search a 2D Matrix", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
      { name: "Median in a row-wise sorted Matrix", url: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" },
      { name: "Row with max 1s", url: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1" },
      { name: "Sorted matrix", url: "https://www.geeksforgeeks.org/problems/sorted-matrix2333/1" },
      { name: "Find a specific pair in Matrix", url: "https://www.geeksforgeeks.org/find-a-specific-pair-in-matrix/" },
      { name: "Rotate an Image 90 Degree Clockwise", url: "https://www.geeksforgeeks.org/rotate-a-matrix-by-90-degree-in-clockwise-direction-without-using-any-extra-space/" },
      { name: "Kth element in Matrix", url: "https://www.geeksforgeeks.org/problems/kth-element-in-matrix/1" },
      { name: "Common elements in all rows of a given matrix", url: "https://www.geeksforgeeks.org/common-elements-in-all-rows-of-a-given-matrix/" }
    ]
  },
  {
    id: "bit-manipulation",
    title: "Bit Manipulation",
    icon: "🔢",
    totalProblems: 12,
    solvedProblems: 0,
    problems: [
      { name: "Count Set Bits in an Integer", url: "https://leetcode.com/problems/number-of-1-bits/" },
      { name: "Reverse Bits", url: "https://leetcode.com/problems/reverse-bits/" },
      { name: "Find the Two Non-Repeating Elements in an Array of Repeating Elements", url: "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1" },
      { name: "Count Number of Bits to be Flipped to Convert A to B", url: "https://practice.geeksforgeeks.org/problems/bit-difference/0" },
      { name: "Program to Find Whether a Number is Power of Two", url: "https://leetcode.com/problems/power-of-two/" },
      { name: "Copy Set Bits in a Range", url: "https://www.geeksforgeeks.org/copy-set-bits-in-a-range/" },
      { name: "Single Number II", url: "https://leetcode.com/problems/single-number-iii/" },
      { name: "Hamming Distance", url: "https://leetcode.com/problems/total-hamming-distance/" },
      { name: "Bitwise ORs of Subarrays", url: "https://leetcode.com/problems/bitwise-ors-of-subarrays/" },
      { name: "Divide Integers", url: "https://leetcode.com/problems/divide-two-integers/" },
      { name: "Minimum Xor Value", url: "https://www.interviewbit.com/problems/min-xor-value/" },
      { name: "Max Xor In a Range [L,R]", url: "https://www.geeksforgeeks.org/maximum-xor-value-of-a-pair-from-a-range/" }
    ]
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    icon: "🔗",
    totalProblems: 11,
    solvedProblems: 0,
    problems: [
      { name: "Reverse Linked List", url: "https://leetcode.com/problems/reverse-linked-list/" },
      { name: "Merge Two Sorted Lists", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
      { name: "Remove Nth Node From End of List", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
      { name: "Palindrome Linked List", url: "https://leetcode.com/problems/palindrome-linked-list/" },
      { name: "Add Two Numbers", url: "https://leetcode.com/problems/add-two-numbers/" },
      { name: "Intersection of Two Linked Lists", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
      { name: "Design Linked List", url: "https://leetcode.com/problems/design-linked-list/" },
      { name: "Linked List Cycle", url: "https://leetcode.com/problems/linked-list-cycle/" },
      { name: "Sort List", url: "https://leetcode.com/problems/sort-list/" },
      { name: "Copy List with Random Pointer", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
      { name: "Flatten a Multilevel Doubly Linked List", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" }
    ]
  },
  {
    id: "stacks-queues",
    title: "Stacks and Queues",
    icon: "📚",
    totalProblems: 9,
    solvedProblems: 0,
    problems: [
      { name: "Valid Parentheses", url: "https://leetcode.com/problems/valid-parentheses" },
      { name: "Min Stack", url: "https://leetcode.com/problems/min-stack/" },
      { name: "Implement Queue using Stacks", url: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { name: "Implement Stack using Queues", url: "https://leetcode.com/problems/implement-stack-using-queues/" },
      { name: "Sliding Window Maximum", url: "https://leetcode.com/problems/sliding-window-maximum/" },
      { name: "Next Greater Element I", url: "https://leetcode.com/problems/next-greater-element-i/" },
      { name: "Daily Temperatures", url: "https://leetcode.com/problems/daily-temperatures/" },
      { name: "Evaluate Reverse Polish Notation", url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
      { name: "LRU Cache", url: "https://leetcode.com/problems/lru-cache/" }
    ]
  },
  {
    id: "trees",
    title: "Trees",
    icon: "🌳",
    totalProblems: 10,
    solvedProblems: 0,
    problems: [
      { name: "Binary Tree Inorder Traversal", url: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { name: "Binary Tree Preorder Traversal", url: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
      { name: "Binary Tree Postorder Traversal", url: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
      { name: "Maximum Depth of Binary Tree", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { name: "Same Tree", url: "https://leetcode.com/problems/same-tree/" },
      { name: "Symmetric Tree", url: "https://leetcode.com/problems/symmetric-tree/" },
      { name: "Convert Sorted Array to Binary Search Tree", url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
      { name: "Lowest Common Ancestor of a BST", url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
      { name: "Binary Tree Level Order Traversal", url: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
      { name: "Validate Binary Search Tree", url: "https://leetcode.com/problems/validate-binary-search-tree/" }
    ]
  },
  {
    id: "graphs",
    title: "Graphs",
    icon: "🕸️",
    totalProblems: 12,
    solvedProblems: 0,
    problems: [
      { name: "BFS of graph", url: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
      { name: "Is Graph Bipartite?", url: "https://leetcode.com/problems/is-graph-bipartite/" },
      { name: "Number of Islands", url: "https://leetcode.com/problems/number-of-islands/" },
      { name: "Clone Graph", url: "https://leetcode.com/problems/clone-graph/" },
      { name: "Bus routes", url: "https://leetcode.com/problems/bus-routes/" },
      { name: "Prim's Algo", url: "https://www.spoj.com/problems/MST/" },
      { name: "Connecting cities with minimum cost", url: "https://www.geeksforgeeks.org/minimum-cost-connect-cities/" },
      { name: "Graph Valid Tree", url: "https://leetcode.com/problems/graph-valid-tree/" },
      { name: "Course Schedule", url: "https://leetcode.com/problems/course-schedule/" },
      { name: "Course Schedule II", url: "https://leetcode.com/problems/course-schedule-ii/" },
      { name: "Word Ladder", url: "https://leetcode.com/problems/word-ladder/" },
      { name: "Shortest Path in Binary Matrix", url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" }
    ]
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    icon: "⚡",
    totalProblems: 10,
    solvedProblems: 0,
    problems: [
      { name: "Climbing Stairs", url: "https://leetcode.com/problems/climbing-stairs/" },
      { name: "Coin Change", url: "https://leetcode.com/problems/coin-change/" },
      { name: "Longest Increasing Subsequence", url: "https://leetcode.com/problems/longest-increasing-subsequence/" },
      { name: "House Robber", url: "https://leetcode.com/problems/house-robber/" },
      { name: "House Robber II", url: "https://leetcode.com/problems/house-robber-ii/" },
      { name: "Unique Paths", url: "https://leetcode.com/problems/unique-paths/" },
      { name: "Jump Game", url: "https://leetcode.com/problems/jump-game/" },
      { name: "Min Cost Climbing Stairs", url: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
      { name: "Decode Ways", url: "https://leetcode.com/problems/decode-ways/" },
      { name: "Word Break", url: "https://leetcode.com/problems/word-break/" }
    ]
  },
  {
    id: "trie",
    title: "Trie",
    icon: "🌲",
    totalProblems: 10,
    solvedProblems: 0,
    problems: [
      { name: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
      { name: "Add and Search Word - Data structure design", url: "https://leetcode.com/problems/add-and-search-word-data-structure-design/" },
      { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/" },
      { name: "Replace Words", url: "https://leetcode.com/problems/replace-words/" },
      { name: "Palindrome Pairs", url: "https://leetcode.com/problems/palindrome-pairs/" },
      { name: "Maximum XOR of Two Numbers in an Array", url: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
      { name: "Concatenated Words", url: "https://leetcode.com/problems/concatenated-words/" },
      { name: "Word Squares", url: "https://leetcode.com/problems/word-squares/" },
      { name: "Design Search Autocomplete System", url: "https://leetcode.com/problems/design-search-autocomplete-system/" },
      { name: "Stream of Characters", url: "https://leetcode.com/problems/stream-of-characters/" }
    ]
  }
];