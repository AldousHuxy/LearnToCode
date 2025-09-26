const PROGRAMMING_LANGUAGES = [
    {
        title: 'Python',
        description: 'Readable, simple, and widely used.',
        desc_long: 'Python is a high-level, interpreted programming language known for its readability and simplicity. It is widely used in web development, data science, artificial intelligence, scientific computing, and automation. Python has a large standard library and a vibrant ecosystem of third-party packages, making it a versatile choice for many applications.',
        maintainer: 'Guido van Rossum',
        created: '1991',
        popularity: 4.9,
        cost: 9.75,
        difficulty: 'easy',
        snippet: 'def main():\n    message = "Hello, World!"\n    print(message)',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    {
        title: 'JavaScript',
        description: 'Dynamic language for web development.',
        desc_long: 'JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has become a standard for creating interactive web pages and is an essential part of web applications. JavaScript is supported by all modern web browsers and can be used for both client-side and server-side development.',
        maintainer: 'Mozilla',
        created: '1995',
        popularity: 4.8,
        cost: 9.50,
        difficulty: 'easy',
        snippet: 'function main() {\n    const message = "Hello, World!";\n    console.log(message);\n}\n\nmain();',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    {
        title: 'TypeScript',
        description: 'Superset of JavaScript with static typing.',
        desc_long: 'TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. It adds optional static types, classes, and interfaces to the language, enabling developers to catch errors early and improve code maintainability. TypeScript is widely used in large-scale web applications and frameworks like Angular.',
        maintainer: 'Microsoft',
        created: '2012',
        popularity: 4.2,
        cost: 9.45,
        difficulty: 'medium',
        snippet: 'function main(): void {\n    const message: string = "Hello, World!";\n    console.log(message);\n}\n\nmain();',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    },
    {
        title: 'Java',
        description: 'Object-oriented and platform-independent.',
        desc_long: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere (WORA), meaning that code that runs on one platform does not need to be recompiled to run on another.',
        maintainer: 'James Gosling',
        created: '1995',
        popularity: 4.7,
        cost: 5.20,
        difficulty: 'medium',
        snippet: 'class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
    },
    {
        title: 'Kotlin',
        description: 'Modern, concise, and safe.',
        desc_long: 'Kotlin is a statically typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript or native code. It is designed to be fully interoperable with Java, while offering more concise syntax, improved type inference, and enhanced safety features such as null safety. Kotlin is widely used for Android development and server-side applications.',
        maintainer: 'JetBrains',
        created: '2011',
        popularity: 3.7,
        cost: 5.40,
        difficulty: 'medium',
        snippet: 'fun main() {\n    val message: String = "Hello, World!"\n    println(message)\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png'
    },
    {
        title: 'C',
        description: 'Simple, fast, and flexible.',
        desc_long: 'C is a general-purpose, procedural programming language that has been widely used for system and application software development. It provides low-level access to memory and is known for its efficiency and performance. C is often used in operating systems, embedded systems, and high-performance applications.',
        maintainer: 'Dennis Ritchie',
        created: '1972',
        popularity: 4.5,
        cost: 3.05,
        difficulty: 'hard',
        snippet: '#include &lt;stdio.h&gt;\nint main() {\n    char message[] = "Hello, World!";\n    printf("%s", message);\n    return 0;\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg'
    },
    {
        title: 'C++',
        description: 'C extension for high performance.',
        desc_long: 'C++ is an extension of the C programming language that includes object-oriented features, such as classes and inheritance. It is widely used for system/software development, game development, and performance-critical applications. C++ provides a combination of high-level abstractions and low-level memory manipulation capabilities, making it a powerful but complex language.',
        maintainer: 'Bjarne Stroustrup',
        created: '1985',
        popularity: 4.3,
        cost: 3.20,
        difficulty: 'hard',
        snippet: '#include &lt;iostream&gt;\nint main() {\n    std::string message = "Hello, World!";\n    std::cout << message << std::endl;\n    return 0;\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
    },
    {
        title: 'C#',
        description: 'Modern language for .NET apps.',
        desc_long: 'C# is a modern, object-oriented programming language developed by Microsoft as part of the .NET framework. It is designed for building a wide range of applications, from web and mobile apps to games and enterprise software. C# features strong typing, automatic memory management, and a rich set of libraries, making it a versatile choice for developers.',
        maintainer: 'Microsoft',
        created: '2000',
        popularity: 4.1,
        cost: 5.90,
        difficulty: 'medium',
        snippet: 'using System;\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png'
    },
    {
        title: 'Ruby',
        description: 'Simple and productive scripting.',
        desc_long: 'Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write. Ruby is often used for web development, particularly with the Ruby on Rails framework, and is known for its strong community and extensive libraries.',
        maintainer: 'Yukihiro Matsumoto',
        created: '1995',
        popularity: 3.6,
        cost: 9.00,
        difficulty: 'easy',
        snippet: 'def main\n    message = "Hello, World!"\n    puts message\nend\n\nmain',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg'
    },
    {
        title: 'Go',
        description: 'Efficient, reliable, and easy.',
        desc_long: 'Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It is known for its simplicity, efficiency, and strong support for concurrent programming. Go is often used for building scalable web servers, networking tools, and cloud-based applications.',
        maintainer: 'Google',
        created: '2009',
        popularity: 3.9,
        cost: 4.10,
        difficulty: 'medium',
        snippet: 'package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg'
    },
    {
        title: 'Swift',
        description: 'Fast language for Apple platforms.',
        desc_long: 'Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It is designed to be fast, safe, and easy to use, with modern syntax and features that make coding more efficient. Swift is open-source and has a growing community of developers.',
        maintainer: 'Apple',
        created: '2014',
        popularity: 3.8,
        cost: 5.70,
        difficulty: 'medium',
        snippet: 'func main() {\n    let message = "Hello, World!"\n    print(message)\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg'
    },
    {
        title: 'Rust',
        description: 'Safe, fast, and concurrent.',
        desc_long: 'Rust is a systems programming language focused on safety, speed, and concurrency. It achieves memory safety without a garbage collector, making it suitable for performance-critical applications. Rust is often used for system-level programming, web assembly, and game development, and has a growing ecosystem and community.',
        maintainer: 'Mozilla',
        created: '2010',
        popularity: 3.5,
        cost: 3.40,
        difficulty: 'hard',
        snippet: 'fn main() {\n    println!("Hello, World!");\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg'
    },
    {
        title: 'PHP',
        description: 'Popular for web backends.',
        desc_long: 'PHP is a widely-used open-source scripting language that is especially suited for web development and can be embedded into HTML. It is known for its ease of use, flexibility, and ability to interact with databases. PHP powers many popular content management systems, such as WordPress and Drupal, and is commonly used for server-side web applications.',
        maintainer: 'The PHP Group',
        created: '1995',
        popularity: 3.8,
        cost: 9.60,
        difficulty: 'medium',
        snippet: '&lt;?php\n    function main() {\n        $message = "Hello, World!";\n        echo $message;\n    }\n\n    main();\n?&gt;',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg'
    },
    {
        title: 'Perl',
        description: 'Flexible scripting language.',
        desc_long: 'Perl is a high-level, general-purpose, interpreted programming language known for its text processing capabilities. It is often used for system administration, web development, network programming, and more. Perl has a rich set of libraries and a strong community, making it a versatile choice for various tasks.',
        maintainer: 'Larry Wall',
        created: '1987',
        popularity: 2.9,
        cost: 9.90,
        difficulty: 'medium',
        snippet: '#!/usr/bin/perl\nuse strict;\nuse warnings;\nsub main {\n    my $message = "Hello, World!";\n    print "$message\\n";\n}\nmain();',
        imageURL: 'https://upload.wikimedia.org/wikipedia/en/0/00/Perl-camel-small.png'
    },
    {
        title: 'Scala',
        description: 'Functional and object-oriented.',
        desc_long: 'Scala is a high-level programming language that combines functional and object-oriented programming paradigms. It runs on the Java Virtual Machine (JVM) and is fully interoperable with Java. Scala is known for its concise syntax, powerful type system, and support for concurrent programming, making it a popular choice for big data processing and distributed systems.',
        maintainer: 'Martin Odersky',
        created: '2003',
        popularity: 3.2,
        cost: 5.50,
        difficulty: 'hard',
        snippet: 'object HelloWorld extends App {\n    println("Hello, World!")\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg'
    },
    {
        title: 'Haskell',
        description: 'Pure functional programming.',
        desc_long: 'Haskell is a statically typed, purely functional programming language with strong support for lazy evaluation and type inference. It is known for its expressive syntax and powerful abstractions, making it suitable for complex mathematical computations, data analysis, and academic research. Haskell has a strong emphasis on immutability and side-effect-free functions.',
        maintainer: 'Simon Peyton Jones',
        created: '1990',
        popularity: 2.7,
        cost: 5.10,
        difficulty: 'hard',
        snippet: 'main = putStrLn "Hello, World!"',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg'
    },
    {
        title: 'Elixir',
        description: 'Concurrent and fault-tolerant.',
        desc_long: 'Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It runs on the Erlang VM, known for its low-latency, distributed, and fault-tolerant systems. Elixir is often used for web development, real-time applications, and distributed systems, leveraging the power of the Erlang ecosystem.',
        maintainer: 'José Valim',
        created: '2011',
        popularity: 2.8,
        cost: 5.30,
        difficulty: 'medium',
        snippet: 'IO.puts "Hello, World!"',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png'
    },
    {
        title: 'Dart',
        description: 'Optimized for UI apps.',
        desc_long: 'Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is the primary language for Flutter, Google’s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        maintainer: 'Google',
        created: '2011',
        popularity: 3.1,
        cost: 5.80,
        difficulty: 'medium',
        snippet: 'void main() {\n    print("Hello, World!");\n}',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png'
    },
    {
        title: 'MATLAB',
        description: 'Numerical computing language.',
        desc_long: 'MATLAB is a high-level programming language and environment designed for numerical computing, data analysis, and algorithm development. It is widely used in engineering, scientific research, and applied mathematics for tasks such as matrix manipulations, data visualization, and simulation. MATLAB provides a rich set of built-in functions and toolboxes for various applications.',
        maintainer: 'MathWorks',
        created: '1984',
        popularity: 3.0,
        cost: 9.40,
        difficulty: 'medium',
        snippet: 'disp("Hello, World!");',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png'
    },
    {
        title: 'R',
        description: 'Statistical computing and graphics.',
        desc_long: 'R is a programming language and environment specifically designed for statistical computing and graphics. It is widely used among statisticians and data miners for data analysis, statistical modeling, and visualization. R provides a wide variety of statistical and graphical techniques, and it is highly extensible through packages developed by its active community.',
        maintainer: 'R Core Team',
        created: '1993',
        popularity: 3.3,
        cost: 9.70,
        difficulty: 'medium',
        snippet: 'cat("Hello, World!\\n")',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/310px-R_logo.svg.png'
    },
    {
        title: 'Node.js',
        description: 'JavaScript runtime for servers.',
        desc_long: 'Node.js is an open-source, cross-platform JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It is built on Chrome\'s V8 JavaScript engine and is designed for building scalable network applications. Node.js uses an event-driven, non-blocking I/O model, making it efficient and suitable for real-time applications.',
        maintainer: 'OpenJS Foundation',
        created: '2009',
        popularity: 4.0,
        cost: 9.10,
        difficulty: 'medium',
        snippet: 'import { log } from "console";\n\nlog("Hello, World!");',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
        title: 'Shell Script',
        description: 'Automates command-line tasks.',
        desc_long: 'Shell scripting is a way to automate tasks in a Unix/Linux environment using a series of commands written in a script file. Shell scripts can be used for file manipulation, program execution, and text processing, among other tasks. They are commonly used by system administrators and developers to streamline workflows and manage system operations.',
        maintainer: 'Various',
        created: '1977',
        popularity: 3.5,
        cost: 9.80,
        difficulty: 'medium',
        snippet: '#!/bin/bash\nfunction main() {\n    echo "Hello, World!"\n}\n\nmain',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Bash_Logo_Colored.svg'
    },
    {
        title: 'Visual Basic',
        description: 'Easy language for Windows apps.',
        desc_long: 'Visual Basic is a programming language developed by Microsoft that is designed for building Windows applications. It is known for its simplicity and ease of use, making it accessible to beginners. Visual Basic provides a graphical user interface (GUI) for designing applications and supports event-driven programming, allowing developers to create interactive software quickly.',
        maintainer: 'Microsoft',
        created: '1991',
        popularity: 3.2,
        cost: 9.60,
        difficulty: 'easy',
        snippet: 'Console.WriteLine("Hello, World!");',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/4/40/VB.NET_Logo.svg'
    },
    {
        title: 'Assembly',
        description: 'Low-level hardware programming.',
        desc_long: 'Assembly language is a low-level programming language that is closely related to machine code. It provides a way to write instructions that are directly executed by a computer\'s CPU. Assembly language is specific to a particular computer architecture and is often used for performance-critical applications, embedded systems, and hardware interfacing.',
        maintainer: 'Various',
        created: '1949',
        popularity: 2.5,
        cost: 3.00,
        difficulty: 'hard',
        snippet: 'section .data\n    msg db "Hello, World!", 0xA\nsection .text\nglobal _start\n_start:\n    ; write msg to stdout\n    mov eax, 4\n    mov ebx, 1\n    mov ecx, msg\n    mov edx, 14\n    int 0x80\n    ; exit\n    mov eax, 1\n    xor ebx, ebx\n    int 0x80',
        imageURL: 'https://cdn.hackr.io/uploads/topics/1507565940Mt96nRTIF8.png'
    },
    {
        title: 'Lua',
        description: 'Lightweight scripting language.',
        desc_long: 'Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications. It is known for its simplicity, efficiency, and ease of integration with other programming languages. Lua is often used in game development, scripting, and configuration tasks.',
        maintainer: 'Roberto Ierusalimschy',
        created: '1993',
        popularity: 3.0,
        cost: 5.00,
        difficulty: 'medium',
        snippet: 'print("Hello, World!")',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg'
    },
    {
        title: 'COBOL',
        description: 'Business-oriented language.',
        desc_long: 'COBOL (Common Business-Oriented Language) is a high-level programming language designed for business applications. It is known for its readability and ability to handle large volumes of data processing. COBOL has been widely used in legacy systems, particularly in banking, finance, and government sectors, and continues to be maintained and updated for modern applications.',
        maintainer: 'CODASYL',
        created: '1959',
        popularity: 2.8,
        cost: 4.50,
        difficulty: 'medium',
        snippet: 'DISPLAY "Hello, World!"',
        imageURL: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/e6/e9/d9/e6e9d9ac-ab7f-4ec7-8082-7f4cb04bc204/source/512x512bb.jpg'
    },
    {
        title: 'Fortran',
        description: 'Numerical and scientific computing.',
        desc_long: 'Fortran (Formula Translation) is a high-level programming language that is particularly well-suited for numerical and scientific computing. It has been widely used in engineering, physics, and computational science for tasks such as simulations, data analysis, and mathematical modeling. Fortran is known for its performance and efficiency in handling large-scale numerical computations.',
        maintainer: 'Various',
        created: '1957',
        popularity: 2.9,
        cost: 4.80,
        difficulty: 'medium',
        snippet: 'program hello\n    print *, "Hello, World!"\nend program hello',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Fortran_logo.svg'
    },
    {
        title: 'Groovy',
        description: 'Dynamic language for the JVM.',
        desc_long: 'Groovy is a dynamic, object-oriented programming language that runs on the Java Virtual Machine (JVM). It is designed to be a more flexible and expressive alternative to Java, with features such as dynamic typing, closures, and a concise syntax. Groovy is often used for scripting, web development, and building domain-specific languages (DSLs).',
        maintainer: 'Apache Software Foundation',
        created: '2003',
        popularity: 2.7,
        cost: 5.60,
        difficulty: 'medium',
        snippet: 'println "Hello, World!"',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg'
    }
]

const openModal = (language) => {
    const modal = $(`
        <div class="modal">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${language.imageURL}" alt="${language.title} logo" class="modal-image"/>
                <p>${language.desc_long}</p>
                <pre><code>${language.snippet}</code></pre>
            </div>
        </div>
    `);
    
    modal.find('.modal-close').on('click', () => modal.remove())
    
    modal.on('click', (e) => {
        if (e.target === modal[0]) {
            modal.remove();
        }
    })
    
    $('body').append(modal)
}

const appendCardList = (language) => {
    const cardList = $('#cardList');
    const cardElement = $(`
        <button type="button">
            <h3>${language.title} <span>(${language.created})</h3>
            <p class="card-difficulty ${language.difficulty}">${language.difficulty}</p>
            <p class="card-description">${language.description}</p>
            <p class="card-maintainer">Maintained by ${language.maintainer}</b></p>
            <div class="card-flex">
                <p class="card-popularity">${language.popularity} / 5</p>
                <p class="card-cost">${formatCost(language.cost)}</p>
            </div>
        </button>
    `);
    cardElement.on('click', () => openModal(language));
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