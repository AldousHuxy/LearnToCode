const PROGRAMMING_LANGUAGES = [
    {
        title: 'Python',
        description: 'Readable, simple, and widely used.',
        maintainer: 'Guido van Rossum',
        created: '1991',
        popularity: 4.9,
        cost: 9.75,
        difficulty: 'easy'
    },
    {
        title: 'JavaScript',
        description: 'Dynamic language for web development.',
        maintainer: 'Mozilla',
        created: '1995',
        popularity: 4.8,
        cost: 9.50,
        difficulty: 'easy'
    },
    {
        title: 'TypeScript',
        description: 'Superset of JavaScript with static typing.',
        maintainer: 'Microsoft',
        created: '2012',
        popularity: 4.2,
        cost: 9.45,
        difficulty: 'medium'
    },
    {
        title: 'Java',
        description: 'Object-oriented and platform-independent.',
        maintainer: 'James Gosling',
        created: '1995',
        popularity: 4.7,
        cost: 5.20,
        difficulty: 'medium'
    },
    {
        title: 'Kotlin',
        description: 'Modern, concise, and safe.',
        maintainer: 'JetBrains',
        created: '2011',
        popularity: 3.7,
        cost: 5.40,
        difficulty: 'medium'
    },
    {
        title: 'C',
        description: 'Simple, fast, and flexible.',
        maintainer: 'Dennis Ritchie',
        created: '1972',
        popularity: 4.5,
        cost: 3.05,
        difficulty: 'hard'
    },
    {
        title: 'C++',
        description: 'C extension for high performance.',
        maintainer: 'Bjarne Stroustrup',
        created: '1985',
        popularity: 4.3,
        cost: 3.20,
        difficulty: 'hard'
    },
    {
        title: 'C#',
        description: 'Modern language for .NET apps.',
        maintainer: 'Microsoft',
        created: '2000',
        popularity: 4.1,
        cost: 5.90,
        difficulty: 'medium'
    },
    {
        title: 'Ruby',
        description: 'Simple and productive scripting.',
        maintainer: 'Yukihiro Matsumoto',
        created: '1995',
        popularity: 3.6,
        cost: 9.00,
        difficulty: 'easy'
    },
    {
        title: 'Go',
        description: 'Efficient, reliable, and easy.',
        maintainer: 'Google',
        created: '2009',
        popularity: 3.9,
        cost: 4.10,
        difficulty: 'medium'
    },
    {
        title: 'Swift',
        description: 'Fast language for Apple platforms.',
        maintainer: 'Apple',
        created: '2014',
        popularity: 3.8,
        cost: 5.70,
        difficulty: 'medium'
    },
    {
        title: 'Rust',
        description: 'Safe, fast, and concurrent.',
        maintainer: 'Mozilla',
        created: '2010',
        popularity: 3.5,
        cost: 3.40,
        difficulty: 'hard'
    },
    {
        title: 'PHP',
        description: 'Popular for web backends.',
        maintainer: 'The PHP Group',
        created: '1995',
        popularity: 3.8,
        cost: 9.60,
        difficulty: 'medium'
    },
    {
        title: 'Perl',
        description: 'Flexible scripting language.',
        maintainer: 'Larry Wall',
        created: '1987',
        popularity: 2.9,
        cost: 9.90,
        difficulty: 'medium'
    },
    {
        title: 'Scala',
        description: 'Functional and object-oriented.',
        maintainer: 'Martin Odersky',
        created: '2003',
        popularity: 3.2,
        cost: 5.50,
        difficulty: 'hard'
    },
    {
        title: 'Haskell',
        description: 'Pure functional programming.',
        maintainer: 'Simon Peyton Jones',
        created: '1990',
        popularity: 2.7,
        cost: 5.10,
        difficulty: 'hard'
    },
    {
        title: 'Elixir',
        description: 'Concurrent and fault-tolerant.',
        maintainer: 'José Valim',
        created: '2011',
        popularity: 2.8,
        cost: 5.30,
        difficulty: 'medium'
    },
    {
        title: 'Dart',
        description: 'Optimized for UI apps.',
        maintainer: 'Google',
        created: '2011',
        popularity: 3.1,
        cost: 5.80,
        difficulty: 'medium'
    },
    {
        title: 'MATLAB',
        description: 'Numerical computing language.',
        maintainer: 'MathWorks',
        created: '1984',
        popularity: 3.0,
        cost: 9.40,
        difficulty: 'medium'
    },
    {
        title: 'R',
        description: 'Statistical computing and graphics.',
        maintainer: 'R Core Team',
        created: '1993',
        popularity: 3.3,
        cost: 9.70,
        difficulty: 'medium'
    },
    {
        title: 'Node.js',
        description: 'JavaScript runtime for servers.',
        maintainer: 'OpenJS Foundation',
        created: '2009',
        popularity: 4.0,
        cost: 9.10,
        difficulty: 'medium'
    },
    {
        title: 'Shell Script',
        description: 'Automates command-line tasks.',
        maintainer: 'Various',
        created: '1977',
        popularity: 3.5,
        cost: 9.80,
        difficulty: 'medium'
    },
    {
        title: 'Visual Basic',
        description: 'Easy language for Windows apps.',
        maintainer: 'Microsoft',
        created: '1991',
        popularity: 3.2,
        cost: 9.60,
        difficulty: 'easy'
    },
    {
        title: 'Assembly',
        description: 'Low-level hardware programming.',
        maintainer: 'Various',
        created: '1949',
        popularity: 2.5,
        cost: 3.00,
        difficulty: 'hard'
    },
    {
        title: 'Lua',
        description: 'Lightweight scripting language.',
        maintainer: 'Roberto Ierusalimschy',
        created: '1993',
        popularity: 3.0,
        cost: 5.00,
        difficulty: 'medium'
    },
    {
        title: 'COBOL',
        description: 'Business-oriented language.',
        maintainer: 'CODASYL',
        created: '1959',
        popularity: 2.8,
        cost: 4.50,
        difficulty: 'medium'
    },
    {
        title: 'Fortran',
        description: 'Numerical and scientific computing.',
        maintainer: 'Various',
        created: '1957',
        popularity: 2.9,
        cost: 4.80,
        difficulty: 'medium'
    },
    {
        title: 'Groovy',
        description: 'Dynamic language for the JVM.',
        maintainer: 'Apache Software Foundation',
        created: '2003',
        popularity: 2.7,
        cost: 5.60,
        difficulty: 'medium'
    }
]

const appendCardList = (language) => {
    const cardList = $('#cardList');
    const cardElement = $(`
        <div class="card">
            <h3>${language.title} <span>(${language.created})</h3>
            <p class="card-difficulty ${language.difficulty}">${language.difficulty}</p>
            <p class="card-description">${language.description}</p>
            <p class="card-maintainer">Maintained by ${language.maintainer}</b></p>
            <div class="card-flex">
                <p class="card-popularity">${language.popularity} / 5</p>
                <p class="card-cost">${formatCost(language.cost)}</p>
            </div>
        </div>
    `);
    cardList.append(cardElement);
}

const renderCardList = (languages) => {
    const cardList = $('#cardList');
    cardList.empty();
    languages.forEach(appendCardList);
}

const formatCost = (cost) => {
    const costStr = cost.toString()
    const dollarPart = costStr.split('.')[0]
    const centPart = costStr.split('.')[1] || '00'
    return `$<span>${dollarPart}.</span><span class="card-cost-cent">${centPart.padEnd(2, '0')}</span>`
}

$('input[type="text"]').on('input', function() {
    const searchTerm = $(this).val().toLowerCase()
    const filtered = PROGRAMMING_LANGUAGES.filter(lang => lang.title.toLowerCase().includes(searchTerm))
    $('#resultCount').text(`Showing ${filtered.length} programming languages`)
    renderCardList(filtered)
})

renderCardList(PROGRAMMING_LANGUAGES)

$('#resultCount').html(`Showing <span>${PROGRAMMING_LANGUAGES.length}</span> programming languages`)