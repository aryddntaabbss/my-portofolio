async function fetchGitHubContributions ()
{
    const username = "aryddntaabbss";
    const token = "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";

    const query = `
    {
        user( login: "${ username }") {
        contributionsCollection {
        contributionCalendar {
        totalContributions
                            weeks {
        contributionDays {
        contributionCount
                                    date
                                }
                            }
                        }
                    }
                }
            }
    `;

    const response = await fetch( "https://api.github.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ token }`
        },
        body: JSON.stringify( { query } )
    } );

    const result = await response.json();
    return result.data.user.contributionsCollection.contributionCalendar;
}

async function renderContributions ()
{
    const contributions = await fetchGitHubContributions();
    if ( !contributions )
    {
        console.error( "No contributions data received" );
        return;
    }

    // Update the total contributions
    document.getElementById( "contribution-total" ).innerText = `${ contributions.totalContributions } contributions in the last year`;

    const gridContainer = document.getElementById( "contribution-grid" );
    gridContainer.innerHTML = ""; // Clear grid content before adding new elements

    // Calculate columns based on screen width
    const screenWidth = window.innerWidth;
    let columns;
    if ( screenWidth >= 180 )
    {
        columns = 52; // Default for larger screens
    } else if ( screenWidth >= 830 )
    {
        columns = 30; // Fewer columns for medium screens
    } else
    {
        columns = 17; // Fewer columns for small screens
    }

    // Apply CSS grid-template-columns dynamically
    gridContainer.style.gridTemplateColumns = `repeat(${ columns }, minmax(0, 1fr))`;

    // Loop through weeks and days to render contribution boxes
    contributions.weeks.forEach( week =>
    {
        week.contributionDays.forEach( day =>
        {
            const div = document.createElement( "div" );
            div.className = `w-4 h-4 rounded ${ getColorForContribution( day.contributionCount ) }`;
            gridContainer.appendChild( div );
        } );
    } );
}



function getColorForContribution ( count )
{
    if ( count >= 20 ) return "bg-green-600";
    if ( count >= 10 ) return "bg-green-500";
    if ( count >= 5 ) return "bg-green-400";
    if ( count >= 1 ) return "bg-green-300";
    return "bg-gray-300 dark:bg-gray-700";
}

// Call the render function when the page loads
document.addEventListener( "DOMContentLoaded", renderContributions );
