// Map of candidates and their corresponding links
const candidateLinks = {
    "Candidate 1": "https://link-for-candidate-1.com",
    "Candidate 2": "https://link-for-candidate-2.com",
    "Candidate 3": "https://link-for-candidate-3.com",
    "Candidate 4": "https://link-for-candidate-4.com",
    "Candidate 5": "https://link-for-candidate-5.com",
    // Add more candidates and links here
};

function vote(candidate) {
    // Check if the candidate exists in the map
    if (candidateLinks[candidate]) {
        alert(`Thank you for voting for ${candidate}!`);
        // Redirect to the candidate's link
        window.location.href = candidateLinks[candidate];
    } else {
        alert("Invalid candidate selected.");
    }
}
