import React, { useState, useEffect } from 'react';

const MatchingAlgorithm = () => {
  // Dummy user data for demonstration
  const users = [
    { id: 1, name: 'Alice', interests: ['hiking', 'reading', 'cooking'] },
    { id: 2, name: 'Bob', interests: ['reading', 'gardening', 'painting'] },
    { id: 3, name: 'Charlie', interests: ['hiking', 'cooking', 'traveling'] },
    { id: 4, name: 'Diana', interests: ['cooking', 'painting', 'traveling'] },
  ];

  // State to store matches
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Call the matching algorithm function when component mounts
    findMatches();
  }, []);

  const findMatches = () => {
    const matchedUsers = [];

    // Iterate through each user
    users.forEach((user1, index1) => {
      // Compare each user with other users
      for (let index2 = index1 + 1; index2 < users.length; index2++) {
        const user2 = users[index2];
        // Check for common interests
        const commonInterests = user1.interests.filter(interest => user2.interests.includes(interest));
        // If there are common interests, add them to matches
        if (commonInterests.length > 0) {
          matchedUsers.push({ user1, user2, commonInterests });
        }
      }
    });

    setMatches(matchedUsers);
  };

  return (
    <div className="matches">
      <h2>Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            <p>{`${match.user1.name} and ${match.user2.name} have common interests in: ${match.commonInterests.join(', ')}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchingAlgorithm;
