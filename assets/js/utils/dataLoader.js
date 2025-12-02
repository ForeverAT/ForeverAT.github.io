/**
 * Load JSON data from file
 */

export async function loadJSON(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        return await response.json();
    } catch (error) {
        console.error('Error loading JSON:', error);
        return null;
    }
}

/**
 * Load all data files
 */
export async function loadAllData() {
    const [profile, publications, skills] = await Promise.all([
        loadJSON('./data/profile.json'),
        loadJSON('./data/publications.json'),
        loadJSON('./data/skills.json')
    ]);

    return {profile, publications, skills};
}